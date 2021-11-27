'use strict';

const { render } = require("sass");

//=================  callback functions ========================
function first() {
	// задержка выполнения функции setTimeout
	setTimeout(function () {
		console.log('1');
	}, 500);
}

function second() {
	console.log('2');
}

//first();
//second();
//------------------------------
function learnJS(lang, callback) {
	console.log(`Я учу : ${lang}`);
	callback();
}

function done() {
	console.log('I check this lesson');
}

//learnJS('JS', done);

//=================   object, destructuring objects  ========================

//const obj = new Object { // старая  форма записи 
//}
					//const options = {
					//	name: 'text',
					//	width: 1024,
					//	height: 1024,
					//	color: {
					//		border: 'black',
					//		background: 'red'
					//	}
					//};

//console.log(options.name);

//delete options.name;
//delete options['name'];

//console.log(options);

//------------------------------
/*
		for (let key in options ){
			console.log(`Свойства : ${key} имеет значение ${options[key]}`); // перебираем обьекты () for in )
			// (!!! обьекты не перебираються методом for of !!!)
		}
*/
		/*    ВЫВОД
		Свойства : name имеет значение text
		Свойства : width имеет значение 1024
		Свойства : height имеет значение 1024
		Свойства : color имеет значение [object Object]
		*/

//------------------------------

				const options1 = {
					name: 'text',
					width: 1024,
					height: 1024,
					color: {
						border: 'black',
						background: 'red'
					}
				};

/*
		если Свойства : color имеет значение [object Object] через проверку запускаем еще один цикл 
*/

	/*
					for (let key1 in options1 ) {
						if ( typeof(options1[key1] ) === 'object') {
							for (let i in options1[key1]) {
								console.log(`Свойства ${i} имеет значение ${options1[key1][i]}`);
							}
						} else {
							console.log(`Свойства ${key1} имеет значение ${options1[key1]}`); 
						}
					}
	*/

		/*  ВЫВОД
		Свойства name имеет значение text
		Свойства width имеет значение 1024
		Свойства height имеет значение 1024
		Свойства border имеет значение black
		Свойства background имеет значение red
		*/
//------------- прием счетчика  -----------------
		let counter = 0;

		for (let key1 in options1) {
			if (typeof (options1[key1]) === 'object') {
				for (let i in options1[key1]) {
					console.log(`Свойства ${i} имеет значение ${options1[key1][i]}`);
					counter++; 
				}
			} else {
				console.log(`Свойства ${key1} имеет значение ${options1[key1]}`);
				counter++;
			}
		}
//--------------- метод обьекта Object.Keys  ---------------
 /*
 const options = {
	 name: 'text',
	 width: 1024,
	 height: 1024,
	 color: {
		 border: 'black',
		 background: 'red'
		}
	};
	
	console.log(Object.keys(options).length); // встроенные методы в JS 
	
	*/
//=========================================
const options = {
	name: 'text',
	width: 1024,
	height: 1024,
	color: {
		border: 'black',
		background: 'red'
	},
	makeTest: function () {// метод работающий в обьекте ( Создаем самостоятельно методы )
		console.log('Test');
	}
};

options.makeTest();
/*
	обьекты могут сохранять любые значения, в формате (ключь: значение) 
	могут быть вложенные обьекты в обьекты, массивы в массивы
	чтобы их перебрать мы можем использовать такую конструкцию () for in )
	и внутри можем делать что угодно как и с ключами так и со значениями этих ключей
				***
	у обьектов бывают встроенные: методы и свойства
	чтобы обьект мог что-то делать, внутри него мы можем записывать функции  ( создавать методы нашего обьекта )
				***
	деструктуризация - ( разделить на более мелкие удобные кусочки ) обьекта и массивов 
	const { border, background } = options.color; 
	создаем переменную, в которую помещаем значения из обьекта 
			      ***
	javascript - ( протатипно ориентируемым ) || обьектно ориентируемый язык программирования, 
	вся сущьность сводиться к обьектам.

*/
     
//=========================================

// сделали изменения в файле* ok! 
