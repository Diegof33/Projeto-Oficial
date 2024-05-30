
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
const blurOverlay = document.querySelector('.blur-bg-overlay');
const closeButton = document.querySelector('.close-btn');
const formPopup = document.querySelector('.form-popup');
const loginBtn = document.getElementById('login-btn');
const signupLink = document.getElementById('signup-link');
const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.signup');


// Função para abrir o menu de navegação
function openMenu() {
    navbarList.classList.toggle('show-menu');
    blurOverlay.classList.toggle('show-popup');
}

// Função para fechar o formulário popup
function closePopup() {
    formPopup.style.display = 'none'; // Oculta o formulário popup
    blurOverlay.classList.remove('show-popup'); // Remove a classe de transparência
}

// Adiciona evento ao botão de fechar
closeButton.addEventListener('click', closePopup);

// Adiciona evento ao clique fora do formulário popup para fechar
window.addEventListener('click', function(event) {
    if (event.target === blurOverlay) {
        closePopup();
    }
});




