// !BY ID + Experimentation
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle.innerText)

// headerTitle.innerHTML = '<h2>HELLO</h2>'

// headerTitle.style.border = '2px dashed red'

// !BY CLASS NAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = "pop";
// items[2].style.backgroundColor = 'pink'
// items[2].style.fontWeight = 'bolder'

// *LOOP in order to affect all items with same style
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'pink'
// }

// !BY TAG NAME
// let items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = "pop";
// items[2].style.backgroundColor = 'pink'
// items[2].style.fontWeight = 'bolder'

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'pink'
// }

// !QUERY SELECTOR
// const header = document.querySelector('#main-header');
// header.style.borderBottom = '2px solid red'

// const input = document.querySelector('input');
// input.value = 'HELLO WORLD!'

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'


// !QUERY SELECTOR ALL
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'ANOTHER ONE';


// const odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'brown';
//     odd[i].style.color = '#fff'
// }

// ! TRAVERSING THE DOM
// const itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// console.log(itemList.children);

// itemList.parentElement.style.backgroundColor = 'pink';
// itemList.firstElementChild.textContent = 'YO';

// !CREATE ELEMENT
// const newDiv = document.createElement('div');

// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'titleValue')
// console.log(newDiv)

// const divContent = document.createTextNode('Text stuff');
// newDiv.appendChild(divContent);

// const header = document.getElementById('main-header');
// const container = document.getElementsByClassName('container')[0];
// ? .getElementsByClassName returns an HTML collection (and array-like object) and so I had to specify an index number to tell JS which specific element I wanted to target in order to get the div to appear.

// header.insertBefore(newDiv, container)

// newDiv.style.fontSize = '2em'
// newDiv.style.marginInlineStart = '60px'


// !EVENTS

// *Creating Click Button with JS
const newButton = document.createElement('button');

newButton.className = 'btn btn-dark mt-3';
newButton.id = 'big-button';
newButton.textContent = 'Click';

const list = document.getElementById('items');
list.insertAdjacentElement('afterend', newButton);

// *Events
// *Using Internal Function
// const clickButton = document.getElementById('big-button').addEventListener('click', function(){console.log(123)})

// *Using External Function
// const clickButton = document.getElementById('big-button').addEventListener('click', buttonClick);

// function buttonClick(event) {
    // document.getElementById('header-title').textContent = 'Voila!';
    // document.querySelector('#main').style.backgroundColor = 'pink';

    // console.log(event)

    // console.log(event.clientX);
    // console.log(event.clientY);

    // console.log(event.offsetX);
    // console.log(event.offsetY);

    // console.log(event.altKey);
    // console.log(event.shiftKey);
    // console.log(event.ctrlKey);}


const clickButton = document.getElementById('big-button');
const box = document.getElementById('box');
const boxInner = document.getElementById('boxText');

// clickButton.addEventListener('click', runEvent);
// clickButton.addEventListener('dblclick', runEvent);
// clickButton.addEventListener('mousedown', runEvent);
// clickButton.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// *Mouse Move Experimentation
box.addEventListener('mousemove', runEvent);

function runEvent(e) {

    console.log(`Event type: ${e.type}`)

    boxInner.innerText = `${e.offsetX} ${e.offsetY}`;
    box.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 100)`

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)` }


