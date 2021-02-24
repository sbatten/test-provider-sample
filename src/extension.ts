import * as vscode from 'vscode';
import { ClassificationTestProvider } from './testProvider';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.test.registerTestProvider(new ClassificationTestProvider()),

    vscode.commands.registerCommand('classification-test-provider.runTests', async tests => {
      await vscode.test.runTests({ tests: tests instanceof Array ? tests : [tests], debug: false });
      vscode.window.showInformationMessage('Test run complete');
    }),
  );
}
