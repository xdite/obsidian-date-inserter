import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class DateInserterPlugin extends Plugin {
  async onload() {
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText('Insert Date');
    statusBarItemEl.onClickEvent(() => {
      const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (activeView) {
        const editor = activeView.editor;
        const cursor = editor.getCursor();
        const now = new Date();
        const dateString = now.toLocaleString();
        editor.replaceRange(dateString, cursor);
      }
    });
  }
}
