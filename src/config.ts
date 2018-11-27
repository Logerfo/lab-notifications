import * as vscode from 'vscode';

const Config = {
    get() {
        return vscode.workspace.getConfiguration().get('gitlab-notifications') as any;
    }
};

export default Config;
