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
        selector: '#audio1',
        audio: 'audio/19_02_1974_Бомбей_БГ_07_04_Материя_происходит_от_живого.mp3'
    },
    {
        selector: '#audio2',
        audio: 'audio/1973_Лондон_Глава_2_Текcт 21_22.mp3'
    },
    {
        selector: '#audio3',
        audio: 'audio/11_03_1975_Лондон_БГ_07_03_Господин,_кем_вы_будете_в_следующей_жизни.mp3'
    },
    {
        selector: '#audio4',
        audio: 'audio/Бхагавад_гита_Как_она_есть_В_переводе_Шрилы_Прабхупады.mp3'
    },
    {
        selector: '#audio5',
        audio: 'audio/Джордж_Харрисон_из_Битлз_о_маха-мантре_Харе_Кришна.mp3'
    },
    {
        selector: '#audio6',
        audio: 'audio/Уилл_Смит_и_Бхагават_Гита.mp3'
    },
    {
        selector: '#audio7',
        audio: 'audio/07_03_1974_Майяпур_Золото_лучше_навоза.mp3'
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
