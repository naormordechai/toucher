'use strict';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const touchActive = () => {
    console.log('XXX')
    document.querySelector('.box').style.background = getRandomColor();
}