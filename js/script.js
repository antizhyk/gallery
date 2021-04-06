const midImg = document.querySelector('.gallery__mid');
const smallImgs = document.querySelectorAll('.gallery__small');
const gallItem = document.querySelectorAll('.gallery__item');

document.addEventListener('DOMContentLoaded', () => {


    gallItem.forEach((item, num, arr) => {
        if (num === 0) {
            let src = item.querySelector('img').getAttribute('src');
            midImg.style.backgroundImage = `url(${src})`;
        }
        item.addEventListener('click', () => {
            let src = item.querySelector('img').getAttribute('src');
            console.log(src);
            midImg.style.backgroundImage = `url(${src})`;
        });
    });
})

