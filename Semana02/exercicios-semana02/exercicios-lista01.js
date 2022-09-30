//aula pratica 04

//EXERCICIO 01

//let arrayValues = [];
// for (let i = 0; i < 25; i++) {
//   arrayValues[i] = i + 1;
// }
// for (let i = 0; i < arrayValues.length; i++) {
//   console.log(arrayValues[i]);
// }

//EXERCICIO 02

// let arrayValues = [];
// for (let i = 0; i <= 20; i++) {
//   arrayValues[i] = i * 10;
//   console.log(arrayValues[i]);
// }

//EXERCICIO 03

// let arrayValues = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"];
// for (let i = 0; i < arrayValues.length; i++) {
//   console.log(arrayValues[i]);
// }

//EXERCICIO 04

// let num = 5;
// let arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function multiply(num) {
//   for (let i = 0; i < arrayValues.length; i++) {
//     console.log(arrayValues[i], "x", num, "=", arrayValues[i] * num);
//   }
// }
// multiply(num);

//EXERCICIO 05

// let arrayValues = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] > 0) {
//     console.log(arrayValues[i]);
//   }
// }

//EXERCICIO 06

// let zer = 0;
// let par = 0;
// let imp = 0;
// let pos = 0;
// let neg = 0;
// let arrayValues = [-5, 0, -3, -4, 12];
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] > 0) {
//     pos++;
//   }
//   if (arrayValues[i] == 0) {
//     zer++;
//   }
//   if (arrayValues[i] < 0) {
//     neg++;
//   }
//   if (arrayValues[i] % 2 == 0) {
//     par++;
//   } else {
//     imp++;
//   }
// }
// console.log(pos, "numero(s) positivo(s)");
// console.log(neg, "numero(s) negativo(s)");
// console.log(par, "numero(s) par(es)");
// console.log(imp, "numero(s) impar(es)");
// console.log(zer, "numero(s) zero");

//EXERCICIO 07

// let num = 7;
// for (let i = 1; i <= num; i++) {
//   console.log("linha numero:", i);
// }

//EXERCICIO 08

// let arrayValues = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
// let mult;
// for (let i = 0; i < arrayValues.length; i++) {
//   console.log(arrayValues[i] * 10);
// }

//EXERCICIO 09

// let num = 10;
// let soma = 0;
// for (let i = 1; i <= num; i++) {
//   soma = soma + i;
// }
// console.log(soma);

//EXERCICIO 10

// let arrayValues = [6, 8, 7];
// let med;
// let soma = 0;
// for (let i = 0; i < arrayValues.length; i++) {
//   soma = soma + arrayValues[i];
//   med = soma / arrayValues.length;
// }
// console.log(med);

//EXERCICIO 11

// let arrayValues = [
//   "Juliana",
//   "Pedro",
//   "Regina",
//   "João",
//   "Patrícia",
//   "Gabriel",
//   "Carlos",
//   "Carla",
// ];
// let name;
// function search(name) {
//   for (let i = 0; i < arrayValues.length; i++) {
//     if (name == arrayValues[i]) {
//       console.log("O nome", name, "se encontra na array, na posição", i);
//     }
//   }
// }
// search("Regina");
//não consegui fazer o codigo mostrar apenas uma mensagem dizendo que o nome nao esta na array
//so consegui fazer com que o codigo mostre se em cada posição nao existe o nome

//EXERCICIO 12

// let arrayValues = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
// let aux;
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] < arrayValues[i - 1]) {
//     aux = arrayValues[i];
//   }
// }
// console.log("o menor numero é:", aux);
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] == aux) {
//     console.log("Esta na posição:", i, "da array");
//   }
// }

//EXERCICIO 13

// let dev = {
//   name: "juca",
//   projects: [
//     { name: "project 1", start: "01/01/21" },
//     { name: "project 2", start: "03/03/21" },
//   ],
// };
// console.log(dev.name, dev.projects[1], dev.projects[0].name);

//EXERCICIO 14

// let myUser = {
//   name: "Octavio",
//   age: "18",
//   email: "ladeiraoctavio@gmail.com",
// };
// console.log(myUser);

//EXERCICIO 15

// let arrayValues = [
//   { nome: "Marcos", notas: [10, 7, 2] },
//   { nome: "Michele", notas: [10, 10, 10] },
//   { nome: "Pedro", notas: [3, 10, 9] },
//   { nome: "Andressa", notas: [6, 6, 8] },
//   { nome: "Cristiana", notas: [7, 9, 2] },
// ];
// let med;
// let soma;
// for (let i = 0; i < arrayValues.length; i++) {
//   soma =
//     arrayValues[i].notas[0] + arrayValues[i].notas[1] + arrayValues[i].notas[2];
//   med = soma / 3;
//   if (med >= 7) {
//     console.log(arrayValues[i].nome, "aprovado");
//   } else {
//     console.log(arrayValues[i].nome, "reprovado");
//   }
// }

//EXERCICIO 16

// let user = { name: "Marília", age: 26, job: "Dev" };
// console.log("o valor da propriedade name é:", user.name);
// console.log("o valor da propriedade age é:", user.age);
// console.log("o valor da propriedade job é:", user.job);

//EXERCICIO 17

// let arrayValues = [
//   { name: "Marília", age: 26, job: "Dev" },
//   { name: "Juca", age: 21, job: "RH" },
//   { name: "Flávia", age: 30, job: "Financeiro" },
//   { name: "Sérgio", age: 24, job: "Dev" },
// ];
//NÃO ENTENDI

//EXERCICIO 18

// let soma = 0;
// let vt;
// let compras = [
//   { nome: "maçã", quantidade: 2, valor: 0.5 },
//   { nome: "alface", quantidade: 1, valor: 1.73 },
//   { nome: "Água 5L", quantidade: 2, valor: 5.99 },
//   { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
// ];
// for (let i = 0; i < compras.length; i++) {
//   vt = compras[i].quantidade * compras[i].valor;
//   soma = soma + vt;
// }
// console.log(soma);

//EXERCICIO 19

let arrayValues = ["h3ll0 w0rld", "w3b d3v3l0p3r", "0tterw1s3", "j4v4scr1pt "];
let arrayValuesTwo;
let aux;
for (let i = 0; i < arrayValues.length; i++) {
  arrayValuesTwo = arrayValues[i].replace(/0/g, "o");
  aux = arrayValuesTwo[i].replace(/3/g, "e");
  console.log(aux);
}
