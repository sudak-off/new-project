'use strict';

// Передача по ссылке или по значению, 
//Spread оператор(ES6 - ES9)

let	a = 5,
	b = a;

b = b + 5;

console.log(b); // 10 
console.log(a); // 5


//---------------------------------
const obj = {
	a: 5,
	b: 1
};

const copy = obj;// передает !!ссылку!! на существующий обьект ( передача по ссылке )
copy.a = 10;

console.log(copy); // { a: 10, b: 1 }
console.log(obj); //  { a: 10, b: 1 }
/*
изменяя что-то внутри копии, 
мы модифицируем начальный свой обьект
*/


//----------------  создаем поверхностную копию массива/обьекта  -----------------

function copyArr(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copyArr(numbers);

newNumbers.a = 10;
/*   вывод поверхностной копии 
{ a: 10, b: 5, c: { x: 7, y: 4 } }
{ a: 2, b: 5, c: { x: 7, y: 4 } }

глубокие и поверхностные копии обьектов 
*/
newNumbers.c.x = 10;
/*
{ a: 10, b: 5, c: { x: 10, y: 4 } }
{ a: 2, b: 5, c: { x: 10, y: 4 } }
*/

console.log(newNumbers);
console.log(numbers);
//--------------  второй стособ копирования через Object  -------------------
const numbers1 = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const add = {
	d: 17,
	e: 20
};

console.log(Object.assign(numbers1, add));
// первый аргумент передаем обьект в который хотим поместить, второй аргумент в который мы помещаем ( вывод : { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 })
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

//------------ создаем копию массива ---------

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'cmcmcvmcv';

console.log(newArray);
console.log(oldArray);


//-----------  новые  стандарты ES6 - ES9 ---------

/*
	оператор разворота ( спрет ...)
*/
const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'liveJournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];
	
console.log(internet);

//--------  сложнее пример 
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newAarray = [...array];

const q = {
	one: 1,
	two: 2
};

const newObj = { ...q };
console.log(newObj);
//--------------------------



