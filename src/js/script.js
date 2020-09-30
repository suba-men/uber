window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
/* let hamburg = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let menu_link = document.querySelector('.menu_link');

hamburg.onclick = function() {
    hamburg.classList.toggle('hamburger_active')
    menu.classList.toggle('menu_active')
};
menu_link.onclick = function() {
    hamburg.classList.remove('hamburger_active')
    menu.classList.remove('menu_active')
};
let promoHeader = document.querySelector('.promo_header');
promoHeader.textContent = 'suba super boy' */