//METODOS ESPECIFICOS

//forEach

// let names = ["Octavio", "julia", "barros", "manuela"];

// let value = names.forEach((element, index) => {
//   console.log(`Indice: ${index} - Elemento: ${element}`);
//   names[index] = "X";
// });
// console.log(names);
// console.log(value); //forEach sempre retorna undefined

//map
//exemplo 01

// let values = [10, 5, 3, 7, 2, 6, 2];

// const newValues = values.map((element, inex, Array) => {
//   return element * 10;
// });

// console.log(values);
// console.log(newValues);

//exemplo 02

// let names = ["Ladeira", "Barros", "Henrique", "Pablo"];

// const newNames = names.map((element, index) => {
//   return {
//     name: element,
//     cidade: "Porto Alegre",
//   };
// });

// console.log(names);
// console.log(newNames);

//filter
//exempllo 01

// const user = [
//   { name: "Octavio", role: "Estudante" },
//   { name: "Rafael", role: "Professor" },
//   { name: "Gabriel", role: "Estudante" },
//   { name: "Henrique", role: "Estudante" },
//   { name: "Antonio", role: "Professor" },
//   { name: "Barros", role: "Professor" },
// ];

// const newUser = user.filter(
//   (user) => user.role == "Estudante" && user.name[0] == "o"/gi/
// );
// console.log(newUser);

//exemplo 2

// const numbers = [-8, 12, 76, 100, -230, -7, 120, 5, 9];
// const pairs = numbers.filter((num) => num % 2 == 0);
// console.log(pairs);

//find
//exemplo 01
// let values = [10, 5, 3, 7, 2, 6, 2];
// let buscar = 5;

// const response = values.find((elem) => elem === buscar);
// console.log(response);

// if (response != undefined) console.log("O elemento foi encontrado");
// else console.log("O elemento não foi encontrado");

// let user = [
//   { name: "Octavio", role: "Estudante", id: 0 },
//   { name: "Rafael", role: "Professor", id: 1 },
//   { name: "Gabriel", role: "Estudante", id: 2 },
//   { name: "Henrique", role: "Estudante", id: 3 },
//   { name: "Antonio", role: "Professor", id: 4 },
//   { name: "Barros", role: "Professor", id: 5 },
// ];

// const buscar = user.find((elem) => elem.id === 3);
// console.log(buscar);

//every

// let user = [
//   { name: "Octavio", role: "Estudante", id: 0 },
//   { name: "Rafael", role: "Professor", id: 1 },
//   { name: "Gabriel", role: "Estudante", id: 2 },
//   { name: "Henrique", role: "Estudante", id: 3 },
//   { name: "Antonio", role: "Professor", id: 4 },
//   { name: "Barros", role: "Professor", id: 5 },
// ];

// const allStuddents = user.every((elem) => elem.role == "Estudante");
// console.log(allStuddents);

//some

// let user = [
//   { name: "Octavio", role: "Estudante", id: 0 },
//   { name: "Rafael", role: "Professor", id: 1 },
//   { name: "Gabriel", role: "Estudante", id: 2 },
//   { name: "Henrique", role: "Estudante", id: 3 },
//   { name: "Antonio", role: "Professor", id: 4 },
//   { name: "Barros", role: "Professor", id: 5 },
// ];

// const userSome = user.some((elem) => elem.role === "Estudante");
// console.log(userSome);

//sort

// let user = [
//   { name: "Octavio", role: "Estudante", id: 4 },
//   { name: "Rafael", role: "Professor", id: 5 },
//   { name: "Gabriel", role: "Estudante", id: 2 },
//   { name: "Henrique", role: "Estudante", id: 3 },
//   { name: "Antonio", role: "Professor", id: 1 },
//   { name: "Barros", role: "Professor", id: 5 },
// ];

// let response = user.sort((firstelem, secondelem) => {
//   if (firstelem.id < secondelem.id) {
//     return -1;
//   } else if (firstelem.id > secondelem.id) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(response);

let teste = "59";
let lara = parseInt(teste);

console.log(typeof lara);
