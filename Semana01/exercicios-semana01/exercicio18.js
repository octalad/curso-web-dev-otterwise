//Aula pratica - semana 01

//exercicio 18

let valueOne = 3;
let valueTwo = 1;
let valueThree = 7;
let aux;

console.log(valueOne, valueTwo, valueThree);

aux = valueThree;
valueThree = valueTwo;
valueTwo = valueOne;
valueOne = aux;

console.log(valueOne, valueTwo, valueThree);
