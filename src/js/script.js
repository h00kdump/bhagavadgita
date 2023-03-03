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
        menuItem = document.querySelectorAll(
            '.header__p-menuitem, .header__bt-close'
        ),
        hamburger = document.querySelector('.header__hamburger')

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__popupmenu_show')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('header__popupmenu_show')
        })
    })
})

const playButtons = [
    {
        selector: '.main-playbutton__icon',
        audio: 'audio/28_01_1975_Токио_БГ_16_08_Мы_просто_хотим_вас_спасти.mp3'
    },
    {
        selector: '.playbutton__icon',
        audio: 'audio/29_01_1975_Гавайи_БГ_16_01_03_Мы_не_тело.mp3'
    }
]

let player

playButtons.forEach(({ selector, audio }) =>
    window.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector(selector)
        button &&
            button.addEventListener('click', event => {
                event.preventDefault()
                player && player.pause()
                player = new Audio(audio)
                player.play()
            })
    })
)
