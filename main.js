'use strict';

{
  const menu = document.querySelector('.navbar-links');
  const menuButton = document.querySelector('.navbar-toggle');
  menuButton.addEventListener('click', function() {
    menu.hidden = !menu.classList.toggle('active');
  });
  
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', function(event) {
    menu.classList.remove('active');
    document.querySelector(event.target.getAttribute('href')).focus();
  }));
}