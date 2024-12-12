// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "popper"
import "bootstrap"

// Action Text e Trix JS para edição de textos com imagens
import "trix"
import "@rails/actiontext"

import "jquery";


// Funcão para abrir e fechar o menu lateral em dispositivos mobile e desktop
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



// Funcionalidade do contador de caracteres no formulário
document.addEventListener('turbo:load', function() {
  // Cache os elementos
  var $current = $('#current');
  var $textarea = $('.count-textarea');
  
  // Função para atualizar o contador
  function updateCounter() {
    $current.text($textarea.val().length);
  }

  // Inicializa o contador ao carregar a página
  updateCounter();

  // Verifica se o textarea tem algum valor pré-preenchido
  // Caso esteja pré-preenchido, atualiza o contador
  if ($textarea.val().trim() !== '') {
    updateCounter(); // Atualiza o contador com o valor já preenchido
  }

  // Atualiza o contador ao digitar
  $textarea.on('input', function () {
    updateCounter(); // Atualiza o contador sempre que o usuário digitar
  });

  // Validação ao enviar o formulário
  $('form').on('submit', function (e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    // Validação: Verifica se o campo de texto não está vazio
    if ($textarea.val().trim() === '') {
      alert('O campo de texto não pode estar vazio!');
      return false;  // Impede o envio do formulário
    }

    // Caso os campos estejam válidos, envia o formulário
    this.submit();
  });
});