// Your code goes here

// #1
let heading = document.querySelector('.logo-heading');
heading.addEventListener('click',(event) => {
    event.target.style.color = 'navy';
    event.stopPropagation();
})

// #2
let headerColor = document.querySelector('.intro > p');
headerColor.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'gold';
    event.target.style.borderRadius = '5px';
    event.target.style.textAlign = 'center';
})

// #3
let headerColorBack = document.querySelector('.intro > p');
headerColorBack.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.borderRadius = '0px';
    event.target.style.textAlign = 'left';
})

// #4
let topImg = document.querySelector('img');
topImg.addEventListener('load', (event) => {
    event.target.style.borderRadius =  '30px';
})

// #5
let container = document.querySelector('.container');
window.addEventListener('scroll', (event) => {
    event.target.style.backgroundColor = 'gray';
}) 

