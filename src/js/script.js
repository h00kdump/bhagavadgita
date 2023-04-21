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
        audio: 'audio/sound1.mp3'
    },
    {
        selector: '#audio2',
        audio: 'audio/sound2.mp3'
    },
    {
        selector: '#audio3',
        audio: 'audio/sound3.mp3'
    },
    {
        selector: '#audio4',
        audio: 'audio/sound4.mp3'
    },
    {
        selector: '#audio5',
        audio: 'audio/sound5.mp3'
    },
    {
        selector: '#audio6',
        audio: 'audio/sound6.mp3'
    },
    {
        selector: '#audio7',
        audio: 'audio/sound7.mp3'
    }
]

const iconToggler = button => {
    const icon = button.querySelector('.playbutton__img, .playbutton__img_pause')
    return () =>
        icon.className === 'playbutton__img'
            ? (icon.className = 'playbutton__img_pause')
            : (icon.className = 'playbutton__img')
}

let previousPlayer

const togglePreviousPlayer = player => {
    if (previousPlayer === player) return

    previousPlayer && previousPlayer()
    previousPlayer = player
}

const createPlayer = (audio, button) => {
    const player = new Audio(audio)
    const toggleIcon = iconToggler(button)

    const toggle = () => {
        toggleIcon()
        player.paused ? player.play() : player.pause()
    }

    return toggle
}

playButtons.forEach(({ selector, audio }) => {
    const button = document.querySelector(selector)
    const togglePlayer = createPlayer(audio, button)

    window.addEventListener('DOMContentLoaded', () => {
        button.addEventListener('click', event => {
            event.preventDefault()
            togglePlayer()
            togglePreviousPlayer(togglePlayer)
        })
    })
})

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

/*
var Audio_1 = document.getElementById("Audio_1");
var play_ic1 = document.getElementById("play_ic1");

var Audio_2 = document.getElementById("Audio_2");
var play_ic2 = document.getElementById("play_ic2");

var Audio_3 = document.getElementById("Audio_3");
var play_ic3 = document.getElementById("play_ic3");

var Audio_4 = document.getElementById("Audio_4");
var play_ic4 = document.getElementById("play_ic4");

var Audio_5 = document.getElementById("Audio_5");
var play_ic5 = document.getElementById("play_ic5");

var Audio_6 = document.getElementById("Audio_6");
var play_ic6 = document.getElementById("play_ic6");

var Audio_7 = document.getElementById("Audio_7");
var play_ic7 = document.getElementById("play_ic7");

play_ic1.onclick = function() {
    if(Audio_1.paused) {
        Audio_1.play();
        play_ic1.src = "img/lp-icons-pause_b.svg";

        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
    }
}

play_ic2.onclick = function() {
    if(Audio_2.paused) {
        Audio_2.play();
        play_ic2.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
    }
}

play_ic3.onclick = function() {
    if(Audio_3.paused) {
        Audio_3.play();
        play_ic3.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
    }
}

play_ic4.onclick = function() {
    if(Audio_4.paused) {
        Audio_4.play();
        play_ic4.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
    }
}

play_ic5.onclick = function() {
    if(Audio_5.paused) {
        Audio_5.play();
        play_ic5.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
    }
}

play_ic6.onclick = function() {
    if(Audio_6.paused) {
        Audio_6.play();
        play_ic6.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
    }
}

play_ic7.onclick = function() {
    if(Audio_7.paused) {
        Audio_7.play();
        play_ic7.src = "img/lp-icons-pause_b.svg";

        Audio_1.pause();
        play_ic1.src = "img/lp-icons-play_b.svg";
        Audio_2.pause();
        play_ic2.src = "img/lp-icons-play_b.svg";
        Audio_3.pause();
        play_ic3.src = "img/lp-icons-play_b.svg";
        Audio_4.pause();
        play_ic4.src = "img/lp-icons-play_b.svg";
        Audio_5.pause();
        play_ic5.src = "img/lp-icons-play_b.svg";
        Audio_6.pause();
        play_ic6.src = "img/lp-icons-play_b.svg";
    }
    else {
        Audio_7.pause();
        play_ic7.src = "img/lp-icons-play_b.svg";
    }
} */
