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