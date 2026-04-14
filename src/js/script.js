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

const playlist = [
    { selector: '#audio1', audio: 'audio/sound1.mp3' },
    { selector: '#audio2', audio: 'audio/sound2.mp3' },
    { selector: '#audio3', audio: 'audio/sound3.mp3' },
    { selector: '#audio4', audio: 'audio/sound4.mp3' },
    { selector: '#audio5', audio: 'audio/sound5.mp3' },
    { selector: '#audio6', audio: 'audio/sound6.mp3' },
    { selector: '#audio7', audio: 'audio/sound7.mp3' }
]

const iconSelector = '.playbutton__img, .playbutton__img_pause'

const initButton = selector => {
    const button = document.querySelector(selector)
    button.icon = state => {
        const icon = button.querySelector(iconSelector)
        if (state === 'play') icon.className = 'playbutton__img_pause'
        else icon.className = 'playbutton__img'
    }

    return button
}

const switchButton = button => event => button.icon(event.type)

const initPlayer = (audio, button) => {
    const player = new Audio(audio)
    button.addEventListener('click', () =>
        player.paused ? player.play() : player.pause()
    )
    player.addEventListener('play', switchButton(button))
    player.addEventListener('pause', switchButton(button))

    return player
}

window.addEventListener('DOMContentLoaded', () => {
    let lastPlayer

    const players = playlist.map(({ selector, audio }) =>
        initPlayer(audio, initButton(selector))
    )

    players.forEach(player => {
        player.addEventListener('play', () => {
            if (lastPlayer && lastPlayer !== player) lastPlayer.pause()

            lastPlayer = player
        })
    })
})
