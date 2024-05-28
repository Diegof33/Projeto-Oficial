
const menuMoblile = document.querySelector('.menu-button');

menuMoblile.addEventListener('click', menuShow = () => {
    const cabecalho = document.querySelector('.cabecalho');

    if (cabecalho.classList.contains('open')) {
        cabecalho.classList.remove('open');
        document.querySelector('.menu-icon').src = 'imagens/menu.png'
    } else {
        cabecalho.classList.add('open');
        document.querySelector('.menu-icon').src = 'imagens/close.png'
    }
});
const menuButton = document.querySelector('.menu-button');
const navbarList = document.querySelector('.list');
const closeButton = document.querySelector('.close-btn');
const formPopup = document.querySelector('.form-popup');


// Função para abrir o menu de navegação
function openMenu() {
    navbarList.classList.toggle('show-menu');
    blurOverlay.classList.toggle('show-popup');
}



window.addEventListener('click', function(event) {
    if (event.target === formPopup || event.target === closeButton) {
        closeMenu();
    }

    
    
});
