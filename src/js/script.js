"use strict";

//let number = 5;
//console.log(number);
//========================================
//let Admin;
//let yellow;

//yellow = "Djoni";
//Admin = yellow;

//console.log(Admin);
//=========================================
//const obj = {
//    a: 50
//};
//obj.a = 10;
//console.log(obj);
//=========================================
//let name = "Ilya";

//console.log( `hello ${1}` ); 

//console.log( `hello ${"name"}` ); 

//console.log( `hello ${name}` );
//=========================================
//console.log(red);


//const answer = [];

//answer[0] = prompt('kak vashe imya?', '' );
//answer[1] = prompt('kak vashe imy111a?', '' );
//answer[2] = prompt('kak vashe imy222a?', '' );



//document.write(answer);
////=========================================
//const category = 'toys';

//console.log('http://someurl.com/' + category + '/' + '4');
//console.log(`http://someurl.com/${category}/4` );

//==================================================================================

//if (4 !== 9) {
//	console.log('ok');
//} else {
//	console.log('error');
//}

//=========================================

//const number = 50;

//if (number < 49) {
//	console.log('small 49');
//} else if ( number > 100 ) {
//	console.log(' big 100 ');
//} else if (number == 35) {
//	console.log('number = 35');
//}
//else {
//	console.log('Error');
//}


//(number === 50) ? console.log('ok') : console.log('don`t ok-ok');

//===============================    ЦИКЛЫ     ====================================================

//let num = 50;

//while (num <= 55) {
//	console.log(num);
//	num++;
//}
//------------------------------
//do {
//	console.log(num);
//	num++;
//}
//while (num < 55);
//------------------------------
//for (let iterator = 1; iterator < 8; iterator++) {
//	console.log(num);
//	num++;
//}
	
//------------------------------
//for (let iterator = 1; iterator < 10; iterator++) {
//	if (iterator === 8) {
//		//break;
//		continue;
//	}
//	console.log(iterator);
//}
//====================     функции     =====================


function showFirstMessage() {  // название: глаголом функции что делает 
	console.log('Hello world');
}
showFirstMessage(); // вызов функции 
//------------------------------
function showFirstMessage(text) {  
	console.log(text);
}
showFirstMessage('hello world'); 
//------------------------------
let randNum = 20; // глобальная пермеменная
function showFirstMessage(text) {
	randNum = 10; // локальная переменная 
	console.log(text);
}
showFirstMessage('hello world');
//------------------------------
function calc(a, b) {  // функция декларирования 
	return (a + b);
	console.log('dead code'); // анричибл код детектед, после return последующий код не доступен 
}
console.log(calc(7,3));
console.log(calc(11,5));
console.log(calc(10,20));
//------------------------------
function ret() { // функция декларирования 
	let newNumber = 50;
	let nNumber = 40; // выведит 40 если (return newNumber,nNumber;)
	
	// 

	return newNumber,nNumber;
}

const anotherNum = ret();
console.log(anotherNum);
//------------------------------
const lagger = function () {  // функция экспрессен  
	console.log('Hello');
};
lagger();
//------------------------------
const calc = (a, b) => a + b; // функция стрелочная( не имеет обработчика события, чаще встречается в обработчике событий )
const calc1 = (a, b) => { return a + b }; // если  ф-ция в одну строчку можно опустить фигурные скобки 

//===================  методы и свойства чисел и строк   ======================

const str = "test";

console.log(str.length); // свойство length 
//------------------------------
const arr = [1, 4, 6];

console.log(arr.length);
//------------------------------
const str = "test";

console.log(str[2]); // вывод через индекс 
//------------------------------
const str = "Test";

console.log(str);
//console.log(str.toUpperCase());
console.log(str.toLowerCase()); // метод ( метод в скобочках (), а свойство без скобочек )
//------------------------------
const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));   //поиск под строки

//---------------  методы взаимодействия со строками ( подсказка из три )  ---------------
const logg = 'Hello dear many checkout world';

console.log(logg.slice(16, 24)); // возможно отрицательный аргумент ( с конца строки начнет вырезать ) 
// slice ( вырезает строку, первый аргумент начало стороки - второй до какого !!! но не включительно ( +1 ))
//------------------------------
const logg = 'Hello world';

console.log(logg.substring(6, 11)); // метод похожий на slice ( !!! но нет отрицательного значения и первый аргумент может быть больше второго ( -- лучше так не желать -- ) )
//------------------------------


//------------------------------
const logg = 'Hello world';

console.log(logg.substr(6, 11)); // метод похожий на slide ( первый  аргумент с какого индекса вырезать, а второй длину от него  )

//------------------------------
const mathNumber = 12.32;

console.log(Math.round(mathNumber)); // округляет до целого числа
//------------------------------
const mathNumbers = '23.5px';

console.log(parseInt(mathNumber)); // 23  будет 
//------------------------------
const mathNumbers = '23.5px';

console.log(parseFloat(mathNumber));  // будет 23.5 
//------------------------------
//=========================================

//=========================================

//=========================================

//=========================================