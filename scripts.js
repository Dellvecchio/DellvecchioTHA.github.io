// Seleciona os elementos do DOM
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Adiciona um ouvinte de evento para abrir/fechar o menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
        menu.classList.add('hidden');
    }
});