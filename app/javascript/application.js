// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "popper"
import "bootstrap"


(() => {
    'use strict'
  
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  })()