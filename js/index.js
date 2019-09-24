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
    const id = Math.random().toString();
    players.push(id);
    var touchobj = e.changedTouches[players.length - 1];
    const node = document.createElement('div');
    node.addEventListener('touchend', () => touchLeave(node))
    node.setAttribute('id', id);
    node.style.background = 'red';
    node.style.position = 'absolute';
    node.style.top = `${touchobj.clientY}px`;
    node.style.left = `${touchobj.clientX}px`;
    node.style.borderRadius = '50%';
    node.style.width = '50px';
    node.style.height = '50px';
    document.getElementById('app').appendChild(node);
}

const touchLeave = node => {
    const children = app.childNodes;
    let index = null;
    for (let i = 0; i < children.length; i++) {
        const currChild = children[i];
        index = currChild.id === node.id ? i : null;
    }
    app.removeChild(app.childNodes(index));
    players = players.filter(player => player.id !== node.id);
}

