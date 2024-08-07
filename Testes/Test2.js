document.addEventListener(`DOMContentLoaded`, function () {
    const faqItens = document.querySelectorAll('.faq-item')

    faqItens.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.computedStyleMap.display = (answer.computedStyleMap.display === 'block') ? 'nome' : 'block';
        });
    });
});





