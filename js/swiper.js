const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 800,
    // effect: 'fade',
    // effect: 'slider',
    effect: 'cube',
    allowTouchMove: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 0,
    on: {
        slideChange: function() {
            const activeSlideIndex = this.activeIndex;
            const listItems = document.querySelectorAll('.program__item');

            listItems.forEach((item, index) => {
                if (index === activeSlideIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    },
});

document.querySelector('.program__item').classList.add('active');

const listItems = document.querySelectorAll('.program__item');
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        swiper.slideTo(index); // Переход к соответствующему слайду

        // Убираем класс 'active' у всех элементов и добавляем его только к текущему
        listItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
    });
});