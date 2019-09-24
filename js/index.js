'use strict';


let time = null;
const app = document.querySelector('#app');
const players = [];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const touchActive = e => {
    const id = Math.random().toString()
    const node = document.createElement('div');
    node.addEventListener('ontouchend', () => touchLeave(node))
    node.setAttribute('id', id);
    node.style.background = 'red';
    node.style.position = 'absolute';
    node.style.top = `${e.pageY}px`;
    node.style.left = `${e.pageX}px`;
    node.style.borderRadius = '50%';
    node.style.width = '50px';
    node.style.height = '50px';
    document.getElementById('app').appendChild(node);
    players.push(id);
}

const touchLeave = node => {
    const children = app.childNodes;
    let index = null;
    for (let i = 0; i < children.length; i++) {
        const currChild = children[i];
        index = currChild.id === node.id ? i : null;
    }
    app.removeChild(app.childNodes(index));
}

