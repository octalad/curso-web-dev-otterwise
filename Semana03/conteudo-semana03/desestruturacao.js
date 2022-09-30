//DESESTRUTURAÇÃO

// const user = {
//   name: "Octavio",
//   age: 18,
//   cpf: 22222,
//   historico_escolar: { geografia: 10, historia: 9, portugues: 6 },
// };

// console.log(user.name);

// const { name, age } = user;

// console.log(name);
// console.log(age);

// const { historico_escolar } = user;
// console.log(historico_escolar.historia);

//DESESTRUTURAÇÃO DE ARRAY
//const names = ["octavio", "cleber", "joao", "rafa"];

// console.log(names[0]);

// const [firstName, , secondName] = names;
// console.log(firstName);
// console.log(secondName);
// console.log(`${firstName}                ${secondName}  `);

//DESESTRUTURAÇÃO COMO PARAMETRO

// let user = {
//   name: "octavio",
//   age: 18,
//   bd: "18/11/2003",
// };

// const getName = ({ name }) => name;
// console.log(getName(user));

// let valueOne = 50;
// let valueTwo = 70;

// console.log("valor 1:", valueOne);
// console.log(`valor 2: ${valueTwo}`);

// [valueOne, valueTwo] = [valueTwo, valueOne];

// console.log("valor 1:", valueOne);
// console.log(`valor 2: ${valueTwo}`);

//MUDANDO O NOME DAS VARIAVEIS AO FAZER A DESESTRUTURAÇÃO

// const user = {
//   name: "octavio",
//   age: 18,
//   cpf: 33333,
// };

// const { age: idade } = user;
// console.log(idade);
