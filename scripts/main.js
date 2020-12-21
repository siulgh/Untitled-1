let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hola Mundo!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySRC = myImage.getAttribute('src');

    if( mySRC === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox-icon3.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myNameHeading = document.querySelector('h4');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myNameHeading.textContent = `` + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myNameHeading.textContent = `` + storedName;
}

myButton.onclick = function() {
    setUserName();
}

document.querySelector('h4').onclick = function() {
    alert('Ay que rico!');
}