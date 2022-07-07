const readMoreBtn = document.querySelector('.services__more-btn');
const text = document.querySelector('.services__wrapper-info__more-text');

readMoreBtn.addEventListener('click',(e) => {
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'Читать далее') {
        readMoreBtn.innerText = 'Читать меньше';
    } else {
        readMoreBtn.innerText = 'Читать далее';
    }
})