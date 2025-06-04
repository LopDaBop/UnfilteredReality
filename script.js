// Dark/Light mode toggle with animated icon
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
  return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function animateToggle() {
  // Animation handled by CSS transitions, so just toggling the data-theme is enough
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  animateToggle();
});

// On load
setTheme(getPreferredTheme());
