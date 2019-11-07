import * as pify from 'pify';
import * as request from 'request';
import * as vscode from 'vscode';
import Config from './config';
import Utils from './utils';

class Statusbar {
    bell: vscode.StatusBarItem;
    config: { color?: string; hideIfNone?: boolean; privateToken?: string; refreshInterval?: number; url?: string; };
    all = 0;

    async init() {
        this.initBell();
        this.update();
        vscode.workspace.onDidChangeConfiguration(this.update.bind(this));
        setInterval(this.update.bind(this), 30000);
    }

    initBell() {
        const config = Config.get();
        const alignment = config.alignment === 'left' ? vscode.StatusBarAlignment.Left : vscode.StatusBarAlignment.Right;
        this.bell = vscode.window.createStatusBarItem(alignment, -Infinity);
        this.bell.text = `$(tasklist)`;
        this.bell.command = 'gitlab-notifications.openInBrowser';
    }

    async update(force?: boolean) {
        this.config = Config.get();
        if (!this.config.privateToken) {
            return vscode.window.showErrorMessage('You need to provide a private token via the "gitlab-notifications.privateToken" setting');
        }
        await this.updateState(force);
        this.updateText();
        this.updateColor();
        this.updateTooltip();
        this.updateVisibility();
    }

    async updateState(force?: boolean) {
        if (force || (Date.now() - Utils.state.get('date', 0)) >= (this.config.refreshInterval * 1000)) { // Refresh
            await Utils.state.update('date', Date.now());
            try {
                const headers = {
                    "PRIVATE-TOKEN": this.config.privateToken
                };
                const result = await Promise.all([
                    pify(request)({ url: `${(this.config.url as string).replace(/\/$/, "")}/api/v4/todos`, headers })
                ]);
                await Utils.state.update('all', JSON.parse(result[0].body).length);
            } catch (e) { }
        }
        this.all = Utils.state.get('all', 0);
    }

    updateText() {
        this.bell.text = this.all ? `$(tasklist) ${this.all}` : `$(tasklist)`;
    }

    updateColor() {
        const { color } = this.config;
        this.bell.color = this.all ? color : '';
    }

    updateTooltip() {
        this.bell.tooltip = `${this.all} Notifications`;
    }

    updateVisibility() {
        const { hideIfNone } = this.config;
        const isVisible = this.all || !hideIfNone;
        this.bell[isVisible ? 'show' : 'hide']();
    }
}

const statusbar = new Statusbar();

export default statusbar;
