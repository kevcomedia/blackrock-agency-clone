'use strict';

{
  const menu = document.querySelector('.navbar-links');
  const menuButton = document.querySelector('.navbar-toggle');
  menuButton.addEventListener('click', function() {
    menu.hidden = !menu.classList.toggle('active');
  });
}