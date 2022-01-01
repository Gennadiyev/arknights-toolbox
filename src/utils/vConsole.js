export const VConsoleLoaded = () => !!window.VConsole;

export const loadVConsole = async () => {
  if (VConsoleLoaded()) return;
  await import(
    /* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/@arkntools/vconsole/dist/vconsole.min.js'
  );
  new window.VConsole();
};
