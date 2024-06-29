export const openShortcutMenu = () => {
  const item = localStorage.getItem('showShortcutPanel') ? JSON.parse(localStorage.getItem('showShortcutPanel')!) : null;
  if (item != null) {
    localStorage.setItem('showShortcutPanel', JSON.stringify(true));
    } else {
      localStorage.setItem('showShortcutPanel', JSON.stringify(false));
    }
  window.dispatchEvent(new Event('storage'));
}