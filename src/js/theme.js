const refs = {
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(theme.LIGHT);

const savedTheme = localStorage.getItem('theme');

refs.themeSwitcher.addEventListener('change', onThemeChange);

if (savedTheme === theme.DARK) {
  switchToDarkTheme();
}

function switchToDarkTheme() {
  document.body.classList.replace(theme.LIGHT, theme.DARK);
  localStorage.setItem('theme', theme.DARK);
  refs.themeSwitcher.setAttribute('checked', true);
}

function switchToLightTheme() {
  document.body.classList.replace(theme.DARK, theme.LIGHT);
  localStorage.setItem('theme', theme.LIGHT);
  refs.themeSwitcher.removeAttribute('checked');
}

function onThemeChange() {
  refs.themeSwitcher.checked ? switchToDarkTheme() : switchToLightTheme();
}
