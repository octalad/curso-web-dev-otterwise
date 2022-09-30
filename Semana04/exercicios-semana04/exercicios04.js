//EXERCICIO 01

// let names = "Maria, Paulo, Moisés, Joel, Ana";
// let result = names.split(",");

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

//EXERCICIO 02

// let frase = "Olá, mundo, meu, nome, é, Juca";
// let result = frase.replace(/,/gi, ".");
// console.log(result);

//EXERCICIO AULA

// let arr = [{ name: "juca" }, { name: "pedro" }];
// arr.push({ name: "Octavio" });
// console.log(arr.reverse());

//LISTA SEMANA 04

//EXERCICIO 02

// let arr = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];
// let fun = (num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       console.log("O valor se encontra na array na posição", i);
//     }
//   }
// };
// fun(9);

//EXERCICIO 03

// let arr = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
// let par = [];
// let imp = [];
// let pos = [];
// let neg = [];
// let parc = 0;
// let impc = 0;
// let posc = 0;
// let negc = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     pos[i] == arr[i];
//     posc++;
//   } else if (arr[i] < 0) {
//     neg[i] == arr[i];
//     negc++;
//   } else if (arr[i] % 2 == 0) {
//     par[i] == arr[i];
//     parc++;
//   } else if (arr[i] % 2 != 0) {
//     imp[i] == arr[i];
//     impc++;
//   }
// }

// console.log(
//   `A quantidade de valores positivos na array é de: ${posc} \n E os valores são: ${pos}`
// );
// console.log(
//   `A quantidade de valores negativos na array é de: ${negc} \n E os valores são: ${neg}`
// );
// console.log(
//   `A quantidade de valores pares na array é de: ${parc} \n E os valores são: ${par}`
// );
// console.log(
//   `A quantidade de valores impares na array é de: ${impc} \n E os valores são: ${imp}`
// );

//EXERCICIO 04

// let notas = [6, 8, 7, 5, 9, 10];

// const media = (num) => {
//   let soma = 0;
//   for (let i = 0; i < notas.length; i++) {
//     soma = soma + notas[i];
//   }
//   let med = soma / notas.length;
//   console.log(med);
// };

// media(notas);

//EXERCICIO 05

// let values = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];
// const pairs = (arr) => {
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] % 2 == 0) {
//       values[i] = "X";
//     }
//   }
//   console.log(values);
// };
// pairs(values);

//EXERCICIO 06

// let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
// let par = 10;
// const mult = values.map((elem, index) => elem * par);
// console.log(mult);

//EXERCICIO 07

// let alunos = [
//   { nome: "e", notas: [9, 5, 7, 8, 9, 9] },
//   { nome: "d", notas: [10, 8, 9, 7] },
//   { nome: "c", notas: [4, 7, 5, 8] },
//   { nome: "b", notas: [0, 0, 0, 0, 0, 0] },
//   { nome: "a", notas: [6, 8, 4, 0] },
// ];

// const media = (num) => {
//   for (let i = 0; i < alunos.length; i++) {
//     let soma = 0;
//     let med = soma + alunos[i].notas[i];
//     if (med === 0) {
//       console.log("O aluno", alunos[i].nome, "tirou 0!");
//     }
//     soma = 0;
//     med = 0;
//   }
// };

// media(alunos);

//EXERCICIO 08

// let names = [
//   "Juliana",
//   "Pedro",
//   "Regina",
//   "João",
//   "Patrícia",
//   "Gabriel",
//   "Carlos",
//   "Carla",
// ];
// let ref = "aaaaaa";
// const busca = (elem) => {
//   for (let i = 0; i < names.length; i++) {
//     if (names[i] === ref) {
//       console.log("O nome", ref, "se encontra na posição", i, "da array");
//     } else if (names[names.length - 1] != ref) {
//       console.log("O nome nao se encontra no array");
//     }
//   }
// };
// busca(names);

//EXERCICIO 09

// let compra = [
//   { nome: "maçã", quantidade: 2, valor: 0.5 },
//   { nome: "alface", quantidade: 1, valor: 1.73 },
//   { nome: "Água 5L", quantidade: 2, valor: 5.99 },
//   { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
// ];
// const caixa = () => {
//   let soma = 0;
//   for (let i = 0; i < compra.length; i++) {
//     soma = soma + compra[i].quantidade * compra[i].valor;
//   }
//   console.log("O valor total da compra é de: R$", soma);
// };
// caixa(compra);

//EXERCICIO 10

// let valueOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];
// let valueTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

// const response = () => {
//   for (let i = 0; i < valueOne.length; i++) {
//     if (valueOne.find((elem) => elem === valueTwo[i])) {
//       console.log(valueTwo[i]);
//     }
//   }
// };

// response(valueOne);

//EXERCICIO 11

// let frase = ["  h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];
// let res;
// let aux;
// for (let i = 0; i < frase.length; i++) {
//   res = frase[i].replace(/3/, "e");
// }
// for (let i = 0; i < frase.length; i++) {
//   frase[i] = res[i].replace(/4/, "a");
//   console.log(frase[i]);
// }
////////NAO CONSEGUI.

//EXERCICIO 12

// let user = {
//   nome: "Cláudio  da silva figueiredo ",
//   cpf: "47187999887",
//   telefone: "11988754092",
// };

// const Name = () => {
//   user.nome.trim();
//   let words = user.nome.split(" ");
//   words = words.filter((elem) => elem != "");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//   }
//   console.log(words.join(" "));
// };
// Name(user);
// const Cpf = () => {
//   let numbers = user.cpf.split("");
//   numbers.splice(3, 0, ".");
//   numbers.splice(7, 0, ".");
//   numbers.splice(11, 0, "-");
//   console.log(numbers.join(""));
// };
// Cpf(user);
// const Tel = () => {
//   let newTel =
//     "(" +
//     user.telefone.substring(0, 2) +
//     ")" +
//     user.telefone.substring(2, user.telefone.length - 4) +
//     "-" +
//     user.telefone.substring(user.telefone.length - 4, user.telefone.length);
//   console.log(newTel);
// };
// Tel(user);

//EXERCICIO 13

// let user = [
//   { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
//   { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
//   { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
//   { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
//   { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
//   { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
//   { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
// ];

// const incAge = () => {
//   let age = user.sort((firstElem, secElem) => {
//     if (firstElem.idade < secElem.idade) {
//       return -1;
//     } else if (firstElem.idade > secElem.idade) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("A ordem dos funcionarios por idade crescente é:");
//   for (let i = 0; i < age.length; i++) {
//     console.log(i + 1, "ª posição", age[i].nome, "com", age[i].idade, "anos!");
//   }
// };
// incAge(user);
// const decAge = () => {
//   let age = user.sort((firstElem, secElem) => {
//     if (firstElem.idade < secElem.idade) {
//       return 1;
//     } else if (firstElem.idade > secElem.idade) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("A ordem dos funcionarios por idade decrescente é:");
//   for (let i = 0; i < age.length; i++) {
//     console.log(i + 1, "ª posição", age[i].nome, "com", age[i].idade, "anos!");
//   }
// };
// decAge(user);
// const incPay = () => {
//   let pay = user.sort((firstElem, secElem) => {
//     if (firstElem.salario < secElem.salario) {
//       return -1;
//     } else if (firstElem.salario > secElem.salario) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("A ordem dos funcionarios por salario crescente é:");
//   for (let i = 0; i < pay.length; i++) {
//     console.log(i + 1, "ª posição", pay[i].nome, "com R$", pay[i].salario);
//   }
// };
// incPay(user);
// const decPay = () => {
//   let pay = user.sort((firstElem, secElem) => {
//     if (firstElem.salario < secElem.salario) {
//       return 1;
//     } else if (firstElem.salario > secElem.salario) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("A ordem dos funcionarios por salario decrescente é:");
//   for (let i = 0; i < pay.length; i++) {
//     console.log(i + 1, "ª posição", pay[i].nome, "com R$", pay[i].salario);
//   }
// };
// decPay(user);
// const incSen = () => {
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].senioridade == "estagio") {
//       user[i].senioridade = 1;
//     } else if (user[i].senioridade == "junior") {
//       user[i].senioridade = 2;
//     } else if (user[i].senioridade == "pleno") {
//       user[i].senioridade = 3;
//     } else if (user[i].senioridade == "senior") {
//       user[i].senioridade = 4;
//     }
//   }
//   let sen = user.sort((firstElem, secElem) => {
//     if (firstElem.senioridade < secElem.senioridade) {
//       return -1;
//     } else if (firstElem.senioridade > secElem.senioridade) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   for (let i = 0; i < sen.length; i++) {
//     if (sen[i].senioridade == 1) {
//       sen[i].senioridade = "estagio";
//     } else if (sen[i].senioridade == 2) {
//       sen[i].senioridade = "junior";
//     } else if (sen[i].senioridade == 3) {
//       sen[i].senioridade = "pleno";
//     } else if (sen[i].senioridade == 4) {
//       sen[i].senioridade = "senior";
//     }
//   }
//   console.log("A ordem de funcionarios por senioridade é:");
//   for (let i = 0; i < sen.length; i++) {
//     console.log(
//       i + 1,
//       "ª posição",
//       sen[i].nome,
//       "com a senioridade de",
//       sen[i].senioridade
//     );
//   }
// };
// incSen(user);
// const decSen = () => {
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].senioridade == "estagio") {
//       user[i].senioridade = 1;
//     } else if (user[i].senioridade == "junior") {
//       user[i].senioridade = 2;
//     } else if (user[i].senioridade == "pleno") {
//       user[i].senioridade = 3;
//     } else if (user[i].senioridade == "senior") {
//       user[i].senioridade = 4;
//     }
//   }
//   let sen = user.sort((firstElem, secElem) => {
//     if (firstElem.senioridade < secElem.senioridade) {
//       return 1;
//     } else if (firstElem.senioridade > secElem.senioridade) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   for (let i = 0; i < sen.length; i++) {
//     if (sen[i].senioridade == 1) {
//       sen[i].senioridade = "estagio";
//     } else if (sen[i].senioridade == 2) {
//       sen[i].senioridade = "junior";
//     } else if (sen[i].senioridade == 3) {
//       sen[i].senioridade = "pleno";
//     } else if (sen[i].senioridade == 4) {
//       sen[i].senioridade = "senior";
//     }
//   }
//   console.log("A ordem de funcionarios por senioridade é:");
//   for (let i = 0; i < sen.length; i++) {
//     console.log(
//       i + 1,
//       "ª posição",
//       sen[i].nome,
//       "com a senioridade de",
//       sen[i].senioridade
//     );
//   }
// };
// decSen(user);

//EXERCICIO 14

// const employees = [
//   {
//     id: 1,
//     name: "Carlos",
//     age: 35,
//     active: false,
//     birth_date: "13/05/1986",
//     contract_date: "20/07/2015",
//     job: "front-end",
//     type: "clt",
//   },
//   {
//     id: 2,
//     name: "Matheus",
//     age: 30,
//     active: true,
//     birth_date: "03/07/1991",
//     contract_date: "01/03/2020",
//     job: "front-end",
//     type: "clt",
//   },
//   {
//     id: 3,
//     name: "Pamela",
//     age: 23,
//     active: true,
//     birth_date: "20/09/1998",
//     contract_date: "19/06/2021",
//     job: "back-end",
//     type: "pj",
//   },
//   {
//     id: 4,
//     name: "Fabiana",
//     age: 32,
//     active: false,
//     birth_date: "08/12/1989",
//     contract_date: "13/04/2018",
//     job: "front-end",
//     type: "pj",
//   },
//   {
//     id: 5,
//     name: "João",
//     age: 37,
//     active: true,
//     birth_date: "08/12/1984",
//     contract_date: "03/08/2014",
//     job: "front-end",
//     type: "clt",
//   },
//   {
//     id: 6,
//     name: "Miguel",
//     age: 29,
//     active: true,
//     birth_date: "08/12/1992",
//     contract_date: "26/02/2015",
//     job: "fullstack",
//     type: "clt",
//   },
//   {
//     id: 7,
//     name: "Francine",
//     age: 27,
//     active: false,
//     birth_date: "27/01/1994",
//     contract_date: "23/05/2019",
//     job: "designer",
//     type: "pj",
//   },
//   {
//     id: 8,
//     name: "Matheus",
//     age: 31,
//     active: true,
//     birth_date: "10/11/1990",
//     contract_date: "18/09/2017",
//     job: "marketing",
//     type: "clt",
//   },
//   {
//     id: 9,
//     name: "Gabriel",
//     age: 28,
//     active: true,
//     birth_date: "08/12/1993",
//     contract_date: "14/11/2020",
//     job: "financeiro",
//     type: "clt",
//   },
// ];
// const searchId = (num) => {
//   console.log("O funcionario de id", num, "são:");
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id == num) {
//       console.log(employees[i]);
//     }
//   }
// };
// searchId(3);
// const searchAct = () => {
//   let ativos = employees.filter((employees) => employees.active == true);
//   console.log("Os funcionarios ativos sao:");
//   for (let i = 0; i < ativos.length; i++) {
//     console.log(ativos[i]);
//   }
// };
// searchAct(employees);
// const searchClt = () => {
//   let clt = employees.filter((employees) => employees.type == "clt");
//   console.log("Os funcionarios CLT sao:");
//   for (let i = 0; i < clt.length; i++) {
//     console.log(clt[i]);
//   }
// };
// searchClt(employees);
// const groups = () => {
//   let gPj = employees.filter((employees) => employees.type == "pj");
//   let gClt = employees.filter((employees) => employees.type == "clt");
//   console.log("Os participantes do grupo PJ sao:");
//   for (let i = 0; i < gPj.length; i++) {
//     console.log(gPj[i]);
//   }
//   console.log("Os participantes do grupo CLT sao:");
//   for (let i = 0; i < gClt.length; i++) {
//     console.log(gClt[i]);
//   }
// };
// groups(employees);
// const incAge = () => {
//   let ativos = employees.filter((employees) => employees.active == true);
//   ativos.sort((firstElem, secElem) => {
//     if (firstElem.age < secElem.age) {
//       return -1;
//     } else if (firstElem.age > secElem.age) {
//       1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(
//     "Os funionarios ativos separados em ordem crescente de idade sao:"
//   );
//   for (let i = 0; i < ativos.length; i++) {
//     console.log(ativos[i]);
//   }
// };
// incAge(employees);

//EXERCICIO 15

// let library = [
//   {
//     cod: "8568014003",
//     nome: "mais esperto que o diabo",
//     autor: "Napoleon Hill",
//     valor: 24.6,
//     quantidadeVendido: 17675,
//   },
//   {
//     cod: "8550801488",
//     nome: "pai rico, pai pobre",
//     autor: "Robert T. Kiyosaki",
//     valor: 42.71,
//     quantidadeVendido: 8992,
//   },
//   {
//     cod: "8547001085",
//     nome: "antifragil",
//     autor: "Nassim Nicholas Taleb",
//     valor: 70.99,
//     quantidadeVendido: 1700,
//   },
//   {
//     cod: "8595080801",
//     nome: "o investidor inteligente",
//     autor: "Benjamin Graham",
//     valor: 36.3,
//     quantidadeVendido: 8445,
//   },
//   {
//     cod: "8539004119",
//     nome: "o poder do hábito",
//     autor: "Charles Duhigg",
//     valor: 48.9,
//     quantidadeVendido: 14581,
//   },
//   {
//     cod: "8543102146",
//     nome: "essencialismo",
//     autor: "Greg Mckeown",
//     valor: 36.43,
//     quantidadeVendido: 9730,
//   },
//   {
//     cod: "9788539003839",
//     nome: "rápido e devagar",
//     autor: "Daniel Kahneman",
//     valor: 50.93,
//     quantidadeVendido: 5703,
//   },
//   {
//     cod: "8551003429",
//     nome: "princípios",
//     autor: "Ray Dalio",
//     valor: 89.9,
//     quantidadeVendido: 3707,
//   },
//   {
//     cod: "855717358X",
//     nome: "gestão de alta performance",
//     autor: "Andrew S. Grove",
//     valor: 34.94,
//     quantidadeVendido: 442,
//   },
//   {
//     cod: "8550805246",
//     nome: "empresas feitas para vencer",
//     autor: "Jim Collins",
//     valor: 44.2,
//     quantidadeVendido: 824,
//   },
//   {
//     cod: "855080455X",
//     nome: "avalie o que importa",
//     autor: "John Doerr",
//     valor: 40.9,
//     quantidadeVendido: 797,
//   },
// ];

// const bestSellerWriter = () => {
//   let bs = library.sort((first, sec) => {
//     if (first.quantidadeVendido < sec.quantidadeVendido) {
//       return 1;
//     } else if (first.quantidadeVendido > sec.quantidadeVendido) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("O autor do livro mais vendido é:", bs[0].autor);
// };
// bestSellerWriter(library);

// const searchSmallerValue = (num) => {
//   let sv = [];
//   for (let i = 0; i < library.length; i++) {
//     if (library[i].valor <= num) {
//       sv[i] = library[i];
//     }
//   }
//   sv = sv.filter((elem) => elem != "");
//   console.log("Os livros abaixo do valor designado sao:");
//   for (let i = 0; i < sv.length; i++) {
//     console.log(
//       sv[i].nome,
//       "do autor",
//       sv[i].autor,
//       "ao valor de R$",
//       sv[i].valor
//     );
//   }
// };
// searchSmallerValue();
// const searchHigestValue = (num) => {
//   let hv = [];
//   for (let i = 0; i < library.length; i++) {
//     if (library[i].valor >= num) {
//       hv[i] = library[i];
//     }
//   }
//   hv = hv.filter((elem) => elem != "");
//   console.log("Os livros acima do valor designado sao:");
//   for (let i = 0; i < hv.length; i++) {
//     console.log(
//       hv[i].nome,
//       "do autor",
//       hv[i].autor,
//       "ao valor de R$",
//       hv[i].valor
//     );
//   }
// };
// searchHigestValue();
// const searchBookName = (name) => {
//   let sbn = library.filter((elem) => elem.nome === name);
//   if (sbn.length >= 1) {
//     console.log("temos o livro", name, "em estoque");
//   } else {
//     console.log("nao temos o livro em estoque");
//   }
// };
// searchBookName();
// const searchAutorName = (name) => {
//   let san = library.filter((elem) => elem.autor === name);
//   if (san.length >= 1) {
//     console.log("temos", san.length, "livros do autor", name);
//   } else {
//     console.log("nao temos nenhum livro desse autor em estoque");
//   }
// };
// searchAutorName("Andrew S. Grove");
// const searchCod = (code) => {
//   let sc = library.filter((elem) => elem.cod === code);
//   if (sc.length >= 1) {
//     console.log("O livro com o codigo", code, "é:", sc);
//   } else {
//     console.log("nao temos nenhum livro com esse codigo");
//   }
// };
// searchCod();
// const stockList = () => {
//   console.log("Temos em estoque os livros:");
//   for (let i = 0; i < library.length; i++) {
//     console.log(
//       library[i].nome,
//       "do autor",
//       library[i].autor,
//       "com o valor de",
//       library[i].valor
//     );
//   }
// };
// stockList();
// const bestSellers = (num) => {
//   let bsl = library.sort((fEl, sEl) => {
//     if (fEl < sEl) {
//       return 1;
//     } else if (fEl > sEl) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("O top", num, "livros vendidos é");
//   for (let i = 0; i < num; i++) {
//     console.log(i + 1, "posição:", bsl[i]);
//   }
// };
// bestSellers();
// const newValues = (num) => {
//   let nv = [];
//   for (let i = 0; i < library.length; i++) {
//     nv[i] = library[i].valor + library[i].valor * (num / 100);
//     console.log(library[i].nome, "com o novo valor de R$", nv[i]);
//   }
// };
// newValues(100);

//EXERCICIO 11

// let values = ["  h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];

// const organiza = () => {
//   let newWords = [];
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].trim();
//   }
//   values = newWords;
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].replaceAll("3", "e");
//     newWords[i] = values[i].replaceAll("4", "a");
//     newWords[i] = values[i].replaceAll("1", "i");
//     newWords[i] = values[i].replaceAll("0", "o");
//   }
//   console.log(newWords);
// };
// organiza(values);

//EXERCICIO 1

// let names = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"];

// const alinha = () => {
//   let newNames = names.join(", ");
//   console.log(newNames);
// };
// alinha(names);

//EXERCICIO 3

// let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

// const organiza = () => {
//   let par = values.filter((elem) => elem % 2 == 0);
//   console.log("Existem", par.length, "numeros pares e eles são:", par);
//   let imp = values.filter((elem) => elem % 2 != 0);
//   console.log("Existem", imp.length, "numeros impares, e eles são:", imp);
//   let pos = values.filter((elem) => elem > 0);
//   console.log("Existem", pos.length, "numeros positivos, e eles são:", pos);
//   let neg = values.filter((elem) => elem < 0);
//   console.log("Existem", neg.length, "numeros negativos, e eles são:", neg);
// };
// organiza(values);
