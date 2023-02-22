/* window.addEventListener('DOMContentLoaded', () => {
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
}) */


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__popupmenu'),
    menuItem = document.querySelectorAll('.header__p-menuitem, .header__bt-close'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__popupmenu_show');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('header__popupmenu_show');
        })
    })
})