// Add the class "scrolled" to the header element when scrolling more than 50 pixels on the page.
// Добавляем класс «scrolled» в элемент заголовка при прокрутке страницы более чем на 50 пикселей.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}

// Add the class "open" to the header element when the burger menu is opened.
// Добавляем класс «open» в элемент заголовка, когда открывается бургер-меню.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function (){
        document.querySelector("header").classList.toggle("open");
    });

    document.querySelectorAll(".menu__link").forEach(function(link) {
        link.addEventListener("click", function() {
            document.querySelector("header").classList.remove("open");
        });
    });
});

// Добавляем кнопку header при 920 в меню бургер
// function moveButton() {
//     const button = document.querySelector('.header__button')
//     const menuList = document.querySelector('.menu__list')
//
//     if (window.innerWidth <= 920 && !menuList.contains(button)) {
//         menuList.parentNode.insertBefore(button, menuList.nextSibling)
//     } else if (window.innerWidth > 920 && menuList.contains(button)) {
//         document.querySelector('.header__menu').appendChild(button)
//     }
// }
//
// moveButton()
// window.addEventListener('resize', moveButton)


// Add the class "lock" to the body element to disable scrolling.
// Добавьте класс «lock» в элемент body, чтобы отключить прокрутку.
const header = document.querySelector('header');
const body = document.querySelector('body');

function toggleLockClass() {
    if (header.classList.contains('open')) {
        body.classList.add('lock');
    } else {
        body.classList.remove('lock');
    }
}

document.addEventListener('DOMContentLoaded', toggleLockClass);
header.addEventListener('click', toggleLockClass);




// Take into account the height of the header when scrolling to the necessary blocks.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.menu__link, .button-anchor').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                });
            }
        });
    });
});
