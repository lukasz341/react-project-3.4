//Zadanie 1
console.log('Zadnie 1');

const hello ='Hello';
const world ='World';

const helloworld =`${hello} ${world}`;
console.log(helloworld);

//Zadanie 2

console.log('Zadnie 2');

const multiplay=(x=1,y=1)=> x*y;
console.log (multiplay(4,5));
console.log (multiplay(4));

//Zadanie 3
console.log('Zadnie 3');

const average= (...numbers) => {
	let suma =0;
	for (var i=0; i<numbers.length; i++) {
		suma+= numbers[i];
	}
	console.log (suma/numbers.length);
}


average(2,6,7);

//Zadanie 4

console.log('Zadnie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
 const [...tablica]=grades;

average(...tablica);

//Zadanie 5

console.log('Zadnie 5');

const dane = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstname , , lastname]=dane;

console.log(firstname);
console.log(lastname);
