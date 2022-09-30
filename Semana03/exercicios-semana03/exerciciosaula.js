//Crie uma função que recebe duas notas como argumento e retorna a médiaentre elas.
//Utilize arrow function e atribua a uma constante

// const media = (notaOne, notaTwo) => {
//   return (notaOne + notaTwo) / 2;
// };

// console.log(media(10, 7));

//LISTA DE EXERCICIOS

//EXERCICIO 01

// let d100 = 0;
// let d50 = 0;
// let d20 = 0;
// let d10 = 0;
// let d5 = 0;
// let d2 = 0;
// let d1 = 0;
// const org = (value) => {
//   if (value >= 100) {
//     d100 = parseInt(value / 100);
//     value = parseInt(value - d100 * 100);
//     console.log(d100, "Notas de R$ 100");
//   }
//   if (value >= 50) {
//     d50 = parseInt(value / 50);
//     value = parseInt(value - d50 * 50);
//     console.log(d50, "Notas de R$ 50");
//   }
//   if (value >= 20) {
//     d20 = parseInt(value / 20);
//     value = parseInt(value - d20 * 20);
//     console.log(d20, "Notas de R$ 20");
//   }
//   if (value >= 10) {
//     d10 = parseInt(value / 10);
//     value = parseInt(value - d10 * 10);
//     console.log(d10, "Notas de R$ 10");
//   }
//   if (value >= 5) {
//     d5 = parseInt(value / 5);
//     value = parseInt(value - d5 * 5);
//     console.log(d5, "Notas de R$ 5");
//   }
//   if (value >= 2) {
//     d2 = parseInt(value / 2);
//     value = parseInt(value - d2 * 2);
//     console.log(d2, "Notas de R$ 2");
//   }
//   if (value >= 1) {
//     d1 = parseInt(value / 1);
//     console.log(d1, "Notas de R$ 1");
//   }
// };
// console.log(org(2531));

//EXERCICIO 02

// const salFin = (valueOne, valueTwo) => {
//   let fgts = valueOne - valueOne * 0.8;
//   let salCLT = valueOne * 12 + valueOne + 700 - fgts;
//   let salFinCLT = {
//     "valor total": salCLT,
//     ferias: true,
//     "decimo terceiro": true,
//     beneficios: 700,
//     fgts: "8%",
//   };

//   let salPJ = valueTwo * 12;
//   let salFinPJ = {
//     "valor total": salPJ,
//     ferias: false,
//     "decimo terceiro": false,
//     beneficios: "Não possui",
//     fgts: false,
//   };

//   if (salCLT > salPJ) {
//     console.log(
//       "O maior salario final é do primeiro valor, com as regras do CLT!"
//     );
//     console.log("As informacoes do salario e beneficios sao:", salFinCLT);
//     console.log("As informaçoes do segundo valor sao:", salFinPJ);
//   } else {
//     console.log(
//       "O maior salario final é do segundo valor, com as regras do PJ!"
//     );
//     console.log("As informacoes do salario e beneficios sao:", salFinPJ);
//     console.log("As informaçoes do primeiro valor sao:", salFinCLT);
//   }
// };

// salFin(1500, 2000);

//EXERCICIO 03

//EXERCICIO 04

// let res;
// const tabuada = (valueOne, valueTwo) => {
//   for (let i = 0; i <= valueTwo; i++) {
//     res = valueOne * i;
//     console.log(valueOne, "X", i, "=", res);
//   }
// };

// tabuada(5, 7);

//EXERCICIO 5

// let arrayValues = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
// let pos = [];
// let neg = [];
// let par = [];
// let imp = [];
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] < 0) {
//     neg[i] = arrayValues[i];
//   } else {
//     pos[i] = arrayValues[i];
//   }
//   if (arrayValues[i] % 2 == 0) {
//     par[i] = arrayValues[i];
//   } else {
//     imp[i] = arrayValues[i];
//   }
// }
// console.log("Numeros Positivos:", pos);
// console.log("Numeros Negativos:", neg);
// console.log("Numeros Pares:", par);
// console.log("Numeros Impares:", imp);

//EXERCICIO 06

// let arrayValues = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
// let res;
// value = 7;
// for (let i = 0; i < arrayValues.length; i++) {
//   res = arrayValues[i] * value;
//   console.log(arrayValues[i], "X", value, "=", res);
// }

//EXERCICIO 07
// let arrayValues = [6, 8, 7, 4, 10, 5];
// let media;
// let soma = 0;
// for (let i = 0; i < arrayValues.length; i++) {
//   soma = soma + arrayValues[i];
// }
// media = soma / arrayValues.length; // console.log(media);

//EXERCICIO 08

// let arrayValues = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
// let menor = arrayValues[0];
// let maior = arrayValues[0];
// for (let i = 0; i < arrayValues.length; i++) {
//   if (arrayValues[i] > maior) {
//     maior = arrayValues[i];
//   }
//   if (arrayValues[i] < menor) {
//     menor = arrayValues[i];
//   }
// }
// console.log("o maior numero é:", maior);
// console.log("o menos numero é:", menor);

//EXERCICIO 09

// let compras = [
//   { nome: "maçã", quantidade: 2, valor: 0.5 },
//   { nome: "alface", quantidade: 1, valor: 1.73 },
//   { nome: "Água 5L", quantidade: 2, valor: 5.99 },
//   { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
// ];
// let soma = 0;
// for (let i = 0; i < compras.length; i++) {
//   soma = soma + compras[i].quantidade * compras[i].valor;
// }
// console.log(soma);

//EXERCICIO 10

// let funcionarios = [
//   { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
//   { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
//   { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
//   { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
//   { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
//   { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
//   { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
// ];

// //IDADE EM ORDEM CRESCENTE

// funcionarios.sort(function (a, b) {
//   if (a.idade < b.idade) {
//     return -1;
//   }
//   if (b.idade < a.idade) {
//     return 1;
//   }
//   return 0;
// });
// console.log("A ordem crescente de idades é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(funcionarios[i].nome, "com", funcionarios[i].idade, "anos.");
// }

// //IDADE EM ORDEM DECRESCENTE

// funcionarios.sort(function (a, b) {
//   if (a.idade < b.idade) {
//     return 1;
//   }
//   if (b.idade < a.idade) {
//     return -1;
//   }
//   return 0;
// });
// console.log("A ordem decrescente de idades é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(funcionarios[i].nome, "com", funcionarios[i].idade, "anos.");
// }

// //SALARIO EM ORDEM CRESCENTE

// funcionarios.sort(function (a, b) {
//   if (a.salario < b.salario) {
//     return -1;
//   }
//   if (b.salario < a.salario) {
//     return 1;
//   }
//   return 0;
// });
// console.log("A ordem crescente de salarios é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(
//     funcionarios[i].nome,
//     "com um salario de R$",
//     funcionarios[i].salario
//   );
// }

// //ORDEM DE SALARIOS DECRESCENTE

// funcionarios.sort(function (a, b) {
//   if (a.salario < b.salario) {
//     return 1;
//   }
//   if (b.salario < a.salario) {
//     return -1;
//   }
//   return 0;
// });
// console.log("A ordem decrescente de salarios é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(
//     funcionarios[i].nome,
//     "com um salario de R$",
//     funcionarios[i].salario
//   );
// }

// //ORDEM DE SENIORIDADE CRESCENTE

// const cargo = {
//   estagio: 1,
//   junior: 2,
//   pleno: 3,
//   senior: 4,
// };

// funcionarios.sort(function (a, b) {
//   if (a.senioridade < b.senioridade) {
//     return -1;
//   }
//   if (b.senioridade < a.senioridade) {
//     return 1;
//   }
//   return 0;
// });
// console.log("A ordem crescente de senioridade é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(
//     funcionarios[i].nome,
//     "com o cargo de: ",
//     funcionarios[i].senioridade
//   );
// }

// //ORDEM DE SENIORIDADE DECRESCENTE

// funcionarios.sort(function (a, b) {
//   if (a.senioridade < b.senioridade) {
//     return 1;
//   }
//   if (b.senioridade < a.senioridade) {
//     return -1;
//   }
//   return 0;
// });
// console.log("A ordem decrescente de senioridade é:", "\n");
// for (let i = 0; i < funcionarios.length; i++) {
//   console.log(
//     funcionarios[i].nome,
//     "com o cargo de: ",
//     funcionarios[i].senioridade
//   );
// }

//EXERCICIO 11
