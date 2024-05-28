
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

// Função para fechar o menu de navegação e o formulário popup
function closeMenu() {
    navbarList.classList.remove('show-menu');
    blurOverlay.classList.remove('show-popup'); // Remove a classe de transparência
    formPopup.style.display = 'none';
}

// Função para redirecionar para a seção de cadastro
function redirectToSignup() {
    loginForm.style.display = 'none'; // Oculta o formulário de login
    signupForm.style.display = 'flex'; // Exibe o formulário de cadastro
    formPopup.style.display = 'block'; // Exibe o formulário popup
    blurOverlay.classList.add('show-popup'); // Adiciona a classe de transparência
}

// Função para redirecionar para a seção de login
function redirectToLogin() {
    loginForm.style.display = 'flex'; // Exibe o formulário de login
    signupForm.style.display = 'none'; // Oculta o formulário de cadastro
    formPopup.style.display = 'block'; // Exibe o formulário popup
    blurOverlay.classList.add('show-popup'); // Adiciona a classe de transparência
}


// Adiciona evento ao botão "Cadastre-se" para redirecionar para a seção de cadastro
signupLink.addEventListener('click', redirectToSignup);

// Adiciona evento ao botão de login para redirecionar para a seção de login
loginBtn.addEventListener('click', redirectToLogin);

window.addEventListener('click', function(event) {
    if (event.target === formPopup || event.target === closeButton) {
        closeMenu();
    }

    
});
