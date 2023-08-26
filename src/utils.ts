import * as _ from 'lodash';
import * as vscode from 'vscode';
import * as Commands from './commands';

const Utils = {
    state: <vscode.Memento>null,

    initCommands(context: vscode.ExtensionContext) {
        const { commands } = vscode.extensions.getExtension('logerfo.lab-notifications').packageJSON.contributes;
        commands.forEach(({ command, title }) => context.subscriptions.push(vscode.commands.registerCommand(command, () => Commands[_.last(command.split('.')) as string]())));
        return Commands;
    }
};

export default Utils;
