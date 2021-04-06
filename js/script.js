//Gallery-base
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
//===========================================
//Popup
midImg.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal')
    modal.innerHTML = `
    <div class="modal__wrapp">
        <div class="modal__content">
        </div>
    </div>
    `;
    if (!document.querySelector('.modal')) {
        document.body.append(modal);
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10)

        modal.addEventListener('click', e => {
            let target = e.target;
            if (target.classList.contains('modal__wrapp')) {
                modal.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(modal);
                    document.body.style.overflow = 'auto';
                    document.body.style.paddingRight = '0px';
                }, 300)

            }
        })
    }

})
//=================================