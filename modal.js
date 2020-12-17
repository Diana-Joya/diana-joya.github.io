const aboutContainer = document.querySelector('.landing')

aboutContainer.addEventListener('click', e => {
    // e.preventDefault()
    const modalToggle = e.target.closest('.about-me')
    const landingToggle = document.querySelector('.landing-items')
    if (! modalToggle) return
    if (! landingToggle) return

    const modal = modalToggle.parentNode.nextElementSibling

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modalToggle.classList.remove('is-open')
        landingToggle.classList.remove('is-open')
        modalToggle.innerHTML = 'About Me'
        modal.removeEventListener('animationend', modalClose)
    }

    if (modal.classList.contains('is-open')) {
        modal.style.animation = 'modalOut 500ms forward' 
        modal.addEventListener('animationend', modalClose)
        modalClose()
    }
    else {
        modal.classList.add('is-open')
        landingToggle.classList.add('is-open')
        modalToggle.classList.add('is-open')
        modalToggle.innerHTML = 'Close'
        modal.style.animation = 'modalIn 500ms forward'
    }
    
    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 500ms forward' 
            modal.addEventListener('animationend', modalClose)
        }
    })

    
    const slideLink = document.querySelector('#go-slides')

    slideLink.addEventListener('click', e => {
        if (modal.classList.contains('is-open')) {
            modal.style.animation = 'modalOut 500ms forward' 
            modal.addEventListener('animationend', modalClose)
            modalClose()
        }
    })
})

