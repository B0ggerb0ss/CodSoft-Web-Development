const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((items) => {
    items.onclick = () => {
        if (items.id == 'clear') {
            display.innerText = '';
        } else if (items.id == 'Del') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        } else if (display.innerText != '' && items.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && items.id == 'equal') {
            display.innerText = 'Input Empty!'
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += items.id;
        }
    }
})

const themetogglebtn = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.container-calc');
const toggleicon = document.querySelector('.toggle-btn-icon')
let isDark = true;
themetogglebtn.onclick = () => {
    calculator.classList.toggle('dark');
    themetogglebtn.classList.toggle('active');
    isDark = !isDark;
}