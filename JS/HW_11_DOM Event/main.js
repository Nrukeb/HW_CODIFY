//! 1
document.addEventListener('keydown', function(event) {
    const body = document.body;

    switch (event.key) {
        case 'R':
            body.style.backgroundColor = 'red';
            break;
        case 'G':
            body.style.backgroundColor = 'green';
            break;
        case 'B':
            body.style.backgroundColor = 'blue';
            break;
        case 'W':
            body.style.backgroundColor = 'white';
            break;
        case 'Shift':
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', function(event) {
    const body = document.body;

    if (event.key === 'Shift') {
        if (event.shiftKey) {
            body.style.backgroundColor = 'black';
        } else {
            body.style.backgroundColor = 'gray';
        }
    }
});

//!2
let i = 0;

document.getElementById('myButton').addEventListener('click', function() {
    console.log(i);
    i *= 2;
});

//!3
const myImage = document.getElementById('myImage');
const hideButton = document.getElementById('hideButton');

hideButton.addEventListener('click', function() {
    myImage.style.opacity = '0';
});

//!4
const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');

inputText.addEventListener('input', function() {
    outputText.textContent = inputText.value;
});

//!5
const myDiv = document.getElementById('myDiv');
//? Arsen gey
myDiv.addEventListener('click', function(event) {
    const boundingRect = myDiv.getBoundingClientRect();
    const xPosition = event.clientX - boundingRect.left;
    const yPosition = event.clientY - boundingRect.top;

    console.log(`Clicked at position: (${xPosition}, ${yPosition}) relative to the div.`);
});

//!6
const colorInput = document.getElementById('colorInput');
const body = document.body;

colorInput.addEventListener('input', function() {
    body.style.backgroundColor = colorInput.value;
});
