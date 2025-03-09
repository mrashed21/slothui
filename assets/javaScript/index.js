
document.querySelectorAll('.faq-box').forEach(faq => {
    const toggleBtn = faq.querySelector('.faq-toggle');

    toggleBtn.addEventListener('click', () => {
        faq.classList.toggle('active');

        // Toggle visibility of the answer
        const answer = faq.querySelector('.faq-answer');
        if (faq.classList.contains('active')) {
            answer.style.display = 'block';
            toggleBtn.querySelector('img').style.transform = 'rotate(180deg)';
        } else {
            answer.style.display = 'none';
            toggleBtn.querySelector('img').style.transform = 'rotate(0deg)';
        }
    });
});
