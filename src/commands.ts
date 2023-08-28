import * as vscode from 'vscode';
import Utils from './utils';
import Config from './config';
import statusbar from './statusbar';

async function refresh(showNotification = true) {
    await statusbar.update(true);
    if (showNotification) {
        vscode.window.showInformationMessage(`Lab Notifications refreshed. ${Utils.state.get('all', 0)} Notifications.`);
    }
}

function openInBrowser() {
    const url = `${(Config.get().url as string).replace(/\/$/, "")}/dashboard/todos`;
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
    Utils.state.update('didOpenInBrowser', true);
}

export { openInBrowser, refresh };
