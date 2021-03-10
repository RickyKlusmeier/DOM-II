// Your code goes here
const navigation = document.querySelector('.main-navigation');
const funBus = document.querySelector('.logo-heading');
const signUp = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const navLinks = document.querySelector('.nav-link');
const text = document.querySelector('p');
const img = document.querySelector('img');
const header = document.querySelector('header');
const openMessage = document.querySelector('.message');
// const continueButton = document.querySelector('#continue');
const copyMessage = document.querySelector('.copymessage');
const cutMessage = document.querySelector('.cutmessage');
const destinations = document.querySelector('.destination');
const disappear = document.querySelector('container');

function message(event) {
    openMessage.classList.remove('off');
    // event.stopPropogation();
}

function expand(event) {
    funBus.classList.toggle('expand');
}

function home(event){
    if (event.key === 'Home'){
    openMessage.classList.add('off');
}}

function footerColor(event) {
    event.target.style.color = "red";
}


let scale = 1;
function resizeImg(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.05, scale), 4);
  
    // Apply scale transform
    img.style.transform = `scale(${scale})`;
}


function copy(event) {
    copyMessage.classList.remove('off');
}

function colorChange(event) {
    destinations.style.color = "blue";
}

function cut(event) {
    cutMessage.classList.remove('off');
}

function headerBackgroundColor(event) {
    header.target.style.color = 'green';
}

function press6(event) {
    if (event.key === ' '){
    disappear.classList.remove('home')}
}

navLinks.addEventListener('click', message);

document.addEventListener('keydown', home);

footer.addEventListener('mousemove', footerColor);

funBus.addEventListener('dblclick', expand);

img.addEventListener('wheel', resizeImg);

text.addEventListener('copy', copy);

text.addEventListener('cut', cut);

text.addEventListener('pointerenter', colorChange);

header.addEventListener('focus', headerBackgroundColor);

document.addEventListener('keyup', press6);

Array.from(document.links).forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault()});
    });



// Are you sure you want to open this page? (click, keydown)
// change color of text (pointerenter)
// Expand the fun bus heading (dblClick)
// Change footer Color (mouseover)
// expand imgs using wheel (wheel)
// expand bus pic (focus)
// copying text "Why are you copying me" (copy)
// cutting pictures "oww that hurt" (cut)
// header color (blur)