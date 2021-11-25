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

//=========================================

const numberOfFilms = +prompt('сколько фильмов вы просмотрел?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false, 
};

//console.log(personalMovieDB);

const a = prompt('один из последних просмотренных фильмов ', ''),
	b = prompt('оцените его оценкой', ''),
	c = prompt('один из последних просмотренных фильмов ', ''),
	d = prompt('оцените его оценкой', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//=========================================
//=========================================
//=========================================