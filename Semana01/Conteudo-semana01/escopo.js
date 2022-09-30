//Escopo

//let num = 10;

//if (num >= 10) {
//  num = 15;
//}
//console.log(num);

//let num = 9;
//if (num < 10) {
//  let num = 20;
//  console.log(num);
//}
//console.log(num);

let number3 = 50;

function soma(numberOne, numberTwo) {
  let result = numberOne + numberTwo + number3;
  return result;
}

console.log(soma(5, 10));

//sobre o escopo: o que esta fora não consegue enxergar o que esta dentro
//porem o que esta dentro consegue enxergar o que esta fora
