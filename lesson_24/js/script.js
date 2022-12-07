"use strict"
function calcSumm(numOne, numTwo) {
   let result = 1;
   for (let i = 0; i < numTwo; i++) {
      result *= numOne;
   }
   return result;
}
console.log(calcSumm(2, 3));

let rum = 1;
for (let i = 2; i < 5; i++) {
   rum *= 5;
   console.log(rum);
}

//JS homework

function showName() {
   console.log('Вася');
}
//showName();
setTimeout(showName);
console.log('Коля!');

showMessage();
function showMessage() {
   console.log('Cообщение');
}


let showMessag = function () {
   console.log('Повiдомлення');
};
showMessag();


function showMessa() {
   if (2 > 1) {
      console.log('Привiт');
   }
}
showMessa();

let art = ['Ваня', 'Iштван', 'Оля',];
let newArt = art;
newArt.push('Петя');
console.log(art.length);
console.log(newArt.length);

let users = ['Ваня', 'Иштван',];
console.log(Array.isArray(users));
users.push('Оля');
console.log(users);
users.splice(1, 1, 'Петя');
console.log(users);
for (let usersNew of users) {
   console.log(usersNew);
}
let usersOn = users.splice(0, 1);
console.log(usersOn);
users.unshift('Маша', 'Паша');
console.log(users);

let arr = ['Ваня', 'Иштван', 'Оля',];
let arrNew = arr.splice(1, 1);
console.log(arrNew);

let str = 'Ваня,Иштван,Оля';
console.log(typeof str);
let strNew = str.split(',');
console.log(strNew);
console.log(Array.isArray(strNew));

let aro = [9, 2, 8];
let reduceValue = aro.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
   console.log(item);
   return `${item}, ${previousValue}`;
});
console.log(reduceValue);

/*let say = document.querySelector(".gogo");
console.log(say.dataset.sayHi);
say.dataset.sayHi = 'good';
console.log(say.dataset.sayHi);*/

// ЗАДАЧА 1.
let newS = document.createElement('div');
newS.classList.add('hoho');
newS.innerHTML = `Привiт!`;
console.log(newS);
const footer = document.querySelector('.footer');
console.log(footer);
footer.before(newS);

let say = document.querySelector('.hoho');
say.setAttribute('data-say-hi', 'yes');
if (say.hasAttribute('data-say-hi')) {
   console.log('exists');
}
console.log(say.dataset.sayHi);

//ЗАДАЧА 2.

let newUl = document.createElement('ul');
newUl.innerHTML = `<li class ="k"> Корчи </li> <li class ="i"> Иончи </li>`;
footer.before(newUl);
newUl.classList.add('nome');
console.log(newUl);
// первый вариант
let url = document.querySelector('.i');
console.log(url);
// второй вариант
let urlo = document.querySelector('.nome');
let urloK = urlo.lastElementChild;
console.log(urloK);

// ЗАДАЧА 3
let take = document.createElement('div');
take.classList.add('like');
footer.before(take);
let sub = document.createElement('div');
sub.classList.add('subscribe');
footer.before(sub);
let takeTwo = document.createElement('div');
takeTwo.classList.add('like-subcribe');
footer.before(takeTwo);

const like = document.querySelectorAll('.like');
console.log(like);

// РАСЧЕТ ШИРИНЫ ПОЛОСЫ ПРОКРУТКИ
let width = window.innerWidth;
console.log(width);
let widthCl = document.documentElement;
console.log(widthCl);
const client = widthCl.clientWidth;
console.log(client);

//Функция для прокрутки браузера
function setScrol() {
   window.scrollBy(0, 100);
   const winScr = window.pageYOffset;
   console.log(winScr);
}

// Отримуемо координати елементiв на сторiнцi
const item = document.querySelector('.function__var');
const getItem = item.getBoundingClientRect();
console.log(getItem);
// Конкретный координат
const getItemL = item.getBoundingClientRect().left;
console.log(getItemL);

// Другй елемент
const itemTwo = document.querySelector('.arrays__var');
const getItemTwo = itemTwo.getBoundingClientRect();
console.log(getItemTwo);

// Третiй елемент
const itemTre = document.querySelector('.document__topic');
const getItemTre = itemTre.getBoundingClientRect();
console.log(getItemTre);