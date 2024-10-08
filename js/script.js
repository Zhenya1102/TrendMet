// Add the class "scrolled" to the header element when scrolling more than 50 pixels on the page.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}

// Add the class "open" to the header element when the burger menu is opened.
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

function moveButton() {
    const button = document.querySelector('.header__button')
    const menuList = document.querySelector('.menu__list')

    if (window.innerWidth <= 768 && !menuList.contains(button)) {
        menuList.parentNode.insertBefore(button, menuList.nextSibling)
    } else if (window.innerWidth > 768 && menuList.contains(button)) {
        document.querySelector('.header__menu').appendChild(button)
    }
}

moveButton()
window.addEventListener('resize', moveButton)

// Add the class "lock" to the body element to disable scrolling.
const header = document.querySelector('header');
const body = document.querySelector('body');

function addLockClass() {
    body.classList.add('lock');
}

function removeLockClass() {
    body.classList.remove('lock');
}

function checkMenuState() {
    if (header.classList.contains('open')) {
        addLockClass();
    } else {
        removeLockClass();
    }
}

document.addEventListener('DOMContentLoaded', checkMenuState);
header.addEventListener('click', checkMenuState);

//
// Take into account the height of the header when scrolling to the necessary blocks.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.menu__link').forEach(anchor => {
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

// document.addEventListener("DOMContentLoaded", function () {
//     const burgerBtn = document.getElementById("burger");
//     const header = document.querySelector("header");
//
//     // Открытие/закрытие бургер-меню
//     burgerBtn.addEventListener("click", function () {
//         header.classList.toggle("open");
//     });
//
//     document.querySelectorAll(".menu__link").forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//
//             // Прокрутка к нужной секции
//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
//
//             if (targetElement) {
//                 const headerHeight = header.offsetHeight;
//                 const targetPosition = targetElement.offsetTop - headerHeight;
//
//                 // Закрытие бургер-меню
//                 header.classList.remove("open");
//
//                 // Прокрутка к целевому элементу
//                 window.scrollTo(0, targetPosition);
//             }
//         });
//     });
// });