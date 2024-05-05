document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.hamburguer-menu');
    const menu = document.querySelector('.menu');
  
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
  });
  