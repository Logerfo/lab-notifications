import * as vscode from 'vscode';

const Config = {
    get() {
        return vscode.workspace.getConfiguration().get('lab-notifications') as any;
    }
};

export default Config;
