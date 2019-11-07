'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import statusbar from './statusbar';
import Utils from './utils';
import { refresh } from './commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    Utils.state = context.globalState;
    Utils.initCommands(context);
    context.subscriptions.push(vscode.window.onDidChangeWindowState(onDidChangeWindowState));
    return statusbar.init();
}

function onDidChangeWindowState(event : vscode.WindowState) {
    if (event.focused && Utils.state.get('didOpenInBrowser', false)) {
        Utils.state.update('didOpenInBrowser', false);
        refresh(false);
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
