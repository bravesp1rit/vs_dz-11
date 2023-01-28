'use strict';

let a = null;
let b = null;
let num = +prompt('Enter 1, 2, 3 or 4');
let result = null;

let aResult = a == 0 ? 'Верно' : 'Неверно';
let aResult2 = a > 0 ? 'Верно' : 'Неверно';
let aResult3 = a < 0 ? 'Верно' : 'Неверно';
let aResult4 = a >= 0 ? 'Верно' : 'Неверно';
let aResult5 = a <= 0 ? 'Верно' : 'Неверно';
let aResult6 = a != 0 ? 'Верно' : 'Неверно';

switch (a){
    case 'test':
        console.log('Верно');
        break;
    case 1:
        console.log('Верно');
        break;
    default:
        console.log('Неверно');
}

if (a > 0 && a < 5){
    console.log('Верно');
} else{
    console.log('Неверно');
}

if (a == 0 || a == 2){
    a += 7;
} else{
    a /= 10;
}
alert(a);

if (a <= 1 && b >= 3){
    console.log(a + b);
} else{
    console.log(a - b);
}

if (a > 2 && a < 11 || b > 6 && b < 14){
    console.log('Верно');
} else{
    console.log('Неверно');
}

switch (num){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Лето';
        break;
    case 4:
        result = 'Осень';
        break;
    default:
        console.log('Incorrect value, please try again');
}
