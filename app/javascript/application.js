// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "popper"
import "bootstrap"

// Funcão para abrir e fechar o menu lateral em dispositivos mobile e desktop
// O primeiro querySelector é para selecionar o botão e o segundo para abrir ou fechar o menu
(() => {
  'use strict';

  const initializeNavbar = () => {
    const navbarToggle = document.querySelector('#navbarSideCollapse');
    const offcanvasMenu = document.querySelector('.offcanvas-collapse');

    if (navbarToggle && offcanvasMenu) {
      navbarToggle.addEventListener('click', () => {
        offcanvasMenu.classList.toggle('open');
      });
    }
  };

  document.addEventListener('turbo:load', initializeNavbar);
})();


