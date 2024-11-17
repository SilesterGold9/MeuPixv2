// Seleciona o botão
const button = document.getElementById('submitBtn');

// Adiciona um evento de clique no botão
button.addEventListener('click', () => {
    // Ativa o estado de loading
    button.classList.add('btn--loading');
    button.disabled = true; // Evita cliques adicionais

    // Simula uma ação (exemplo: envio de formulário)
    setTimeout(() => {
        // Remove o estado de loading
        button.classList.remove('btn--loading');
        button.disabled = false; // Habilita o botão novamente
    }, 3000); // Duração do loading em milissegundos
});
