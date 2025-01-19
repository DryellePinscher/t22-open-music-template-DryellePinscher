let button = document.querySelector('.theme');
let buttonDark = document.querySelector('.theme--darkmode');
const body = document.body;
let darkmode = false;

export function themeChange () {
    darkmode = !darkmode;
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', JSON.stringify(darkmode));
}

button.addEventListener('click', themeChange);
buttonDark.addEventListener('click', themeChange);

export function themeAnalasys () {
    darkmode = JSON.parse(localStorage.getItem('theme'));
    if(darkmode) {
        body.classList.add('dark-mode');
    }
}

themeAnalasys();