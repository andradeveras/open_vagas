// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "popper"
import "bootstrap"

// Funcão para abrir e fechar o menu lateral em dispositivos mobile e desktop
// O primeiro querySelector é para selecionar o botão e o segundo para abrir ou fechar o menu
(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => { 
  document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()


