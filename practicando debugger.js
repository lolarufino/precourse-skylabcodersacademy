// 1 (falta la vocal o)
function countVocalsInString(recievedString) {
    //debugger;
	let vocalsCount = 0;
	let currentLetter = null;
	for (let i = 0; i < recievedString.length; i++) {
		currentLetter = recievedString[i];
		switch (currentLetter) {
			case 'a':
			case 'e':
			case 'i':
			case 'a': //o
			case 'u':
				vocalsCount++;
		}
	}
	return vocalsCount;
}
//countVocalsInString('hola que tal');

// 2 en vez de biggest > array[i] es <, ahí ya nos da bien
function getBiggestNumberInArray(array) {
    //debugger;
	let biggest= 0;
	for (let i = 0; i < array.length; i++) {
		if (biggest > array[i]) { //aquí
			biggest = array[i];
		}
	}
	return biggest;
}
//getBiggestNumberInArray([23,45,67,2,4]);

// 3 no tiene en cuenta con el último caracter si no se pone un . 
// faltaría un case en el que cuando el bucle acabe, añada otro caracter más o simplemente quitar todo y poner case recievedString[recievedString.length-1]:
function countWordsInString(recievedString) {
    //debugger;
	let currentLetter = null;
	let wordsCount = 0;
	for (let i = 0; i < recievedString.length; i++) {
		currentLetter = recievedString[i];
		switch (currentLetter) {
			case ' ':
			case ',':
			case '.':
				wordsCount++;
		}
	}
	return wordsCount;
}
//countWordsInString('hola lola');

// 4 al principio pensé que daba bien por small es 0, pero fue coincidencia de que en el array hay un 0 y se inicializa en 0
// small = currentNumber pero sólo funciona para este array? ni idea
function getSmallestAndBIggest(array) {
    debugger;
	let small = 0;
	let big = 0;
	for (let i = 0; i < array.length; i++) {
		let currentNumber = array[i];
		if (currentNumber > big) {
			big = currentNumber;
		}
		if (currentNumber < small) {
			small = big; 
		}
	}
	return [small, big];
}

const myArray = [1, 2, 5, 7, 8, 4, 2, 1, 15, 3, 56, 3];

console.log(getSmallestAndBIggest(myArray));

// 5
function sumTwoMatrix(matrix1, matrix2) {
    debugger;
	let sumMatrix = [];
	let tempRow = [];
	for (let i = 0; i < matrix1.length; i++) {
		for (let j = 0; j < matrix1[i].length; j++) {
			const sumResult = matrix1[i][j] + matrix2[i][j];
			tempRow.push(sumResult);
		}
	}
	sumMatrix.push(tempRow);
	return sumMatrix;
}

const m1 = [[1, 1],[2, 2]];

console.log(sumTwoMatrix(m1, m1));


function double(x){
	x= x*2;
}

let money= 10;
double(money);
console.log(money);
