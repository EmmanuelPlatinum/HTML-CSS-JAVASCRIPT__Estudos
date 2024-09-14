// Script para exibir o modal e alternar entre login/cadastro
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');

// Abrir o modal de login/cadastro
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Fechar o modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Alternar para o formulário de cadastro
toRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

// Alternar para o formulário de login
toLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
