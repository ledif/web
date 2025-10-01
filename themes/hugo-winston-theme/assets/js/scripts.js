var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

// Dark mode toggle functionality
var themeToggle = document.querySelector('#theme-toggle');
var themeIcon = document.querySelector('.theme-toggle-icon');
var html = document.documentElement;

// Check for saved theme or default to light mode
var savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle !== null) {
  themeToggle.addEventListener('click', function(e) {
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  if (themeIcon !== null) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}
