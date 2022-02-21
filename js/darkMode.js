let darkMode = localStorage.getItem('darkMode');
const body = document.querySelector('body')
const navBar = document.querySelector('.navbar')
const darkModeSwitch = document.querySelector('.dark__mode__switch');
const darkModeBtn = document.querySelector('.dark__mode__switch__btn');
const darkModeBtnSlider = document.querySelector('.dark__mode__switch__btn--slider');
const darkModeBtnIcon = document.querySelector('.dark__mode__switch--icon');


const darkModeSwitchOn = () => {
    darkModeBtn.classList.add('dark__mode')
    darkModeBtnSlider.classList.add('dark__mode')
    darkModeBtnIcon.classList.add('dark__mode')
    body.classList.add('dark__mode')
    navBar.classList.add('dark__mode')

    localStorage.setItem('darkMode', 'on')
}
const darkModeSwitchOff = () => {
    darkModeBtn.classList.remove('dark__mode')
    darkModeBtnSlider.classList.remove('dark__mode')
    darkModeBtnIcon.classList.remove('dark__mode')
    body.classList.remove('dark__mode')
    navBar.classList.remove('dark__mode')

    localStorage.setItem('darkMode', null)
}

if (darkMode === 'on') {
    darkModeSwitchOn();
}
/* Funcionamiento del switch */
darkModeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'on') {
        darkModeSwitchOn();
    } else {
        darkModeSwitchOff();
    }
})
