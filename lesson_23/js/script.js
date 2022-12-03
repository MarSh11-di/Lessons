"use strict"
let userAge = '35' + - "22";
console.log(userAge);
console.log(typeof userAge);
let user = 5 + - "22";
console.log(user);
console.log(typeof user);

let userGo = '35' * "22";
console.log(userGo);
console.log(typeof userGo);

let men = 22;
let userMo = '558' > men++;
console.log(userMo);
console.log(typeof userMo);

let boom = 0;
let newboom = boom++;
console.log(newboom);
console.log(typeof newboom);
let hoom = newboom + 1;
console.log(hoom);

console.log(!false && 11 || 18 && !"");

let nhai = 0;
console.log(nhai ?? "Без iменi")

if (1 === "1") {
   console.log('True');
} else {
   console.log('False');
}

if (5 == "5") {
   console.log('True');
} else {
   console.log('False');
}

let mes = (92 > "10" && 58 < 100) ? 'True' : 'False';
console.log(mes);

let gou = " ";
console.log(gou);
console.log(typeof gou);

if (0) {
   console.log('False');
} else if (" ") {
   console.log('True');
}

// цикл не выполняется
let num = 2;
while (num < 1) {
   console.log(num);
   ++num;
}
// но если все равно нужен результат тогда используем do...while
let numa = 2;
do {
   console.log(numa);
   ++num;
}
while (numa < 1);

// Домашне завдання

//Cycles FOR и WHILE в JavaScript.

let numo = 1;
while (numo < 6) {
   console.log(numo);
   ++numo;
}

let i;
for (i = 1; i < 6; ++i) {
   console.log(i);
}


let nume = 8;
while (nume) {
   console.log(nume);
   nume--;
}

let numi = 0;
while (numi < 3) {
   console.log(`Число: ${numi}`);
   numi++;
}

firstFor: for (let nom = 0; nom < 2; nom++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) { break firstFor; }
      console.log(size);
   }
}

//Numbers в JAVASCRIPT
let numr = 1.005 + Number.EPSILON;
let numOne = Math.round(numr * 100) / 100;
console.log(numOne);

let nrty = 1.005;
console.log(Number(nrty.toFixed(3)));

// 1 ВАРИАНТ
let value = "135.58px";
let valueNum = parseFloat(value);
console.log(valueNum);
console.log(typeof valueNum);
// 2 ВАРИАНТ
let val = parseFloat("135.58px");
console.log(val);

let valu = 58 + "Фрилансер";
if (isNaN(valu)) {
   console.log('Результат виражения NaN');
}

let max = Math.max(10, 58, 39, -150, 0);
console.log(max);

let roun = Math.floor(58.858);
console.log(roun);

// Lines in JAVASCRIPT

let frs = "фрилансер";
let text = `Привет! Я ${frs}`;
console.log(text);

// 1 ВАРИАНТ
let tex = 'фрилансер';
console.log(tex.slice(-4, -3));
// 2 ВАРИАНТ
console.log(tex[5]);

let texto = 123 + "456";
console.log(texto);

let texta = 'фрилансер';
console.log(texta.toUpperCase());

let texti = 'фрилансер';
console.log(texti.slice(3, 6));

let texts = 'фрилансер';
console.log(texts.includes('лан', 4));