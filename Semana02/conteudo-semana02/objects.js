//GUARDANDO INFORMÇOES SOBRE O OBJETO GARRAFA NO JS

// let tampa = "verde";
// let conteudo = "agua";
// let volume = "500ml";
// let material = "plastico";
// let formato = "cilindrico";
// let cor = "transparente";

// console.log(tampa)
// console.log(volume)
// console.log(formato)

//OBJECTS
// propriedade: valor
//ex: let tampa(propriedade) = "verde"(valor)

// let garrafa = {
//   tampa: "verde",
//   conteudo: "agua",
//   volume: "500ml",
//   material: "plastico",
//   formato: "cilindrico",
//   cor: "transparente",
//   reciclavel: true,
//   "data de validade": "23/08/2024",
// };

//MOSTRANDO VALORES DE UM OBJETO
// console.log(garrafa);
// console.log(garrafa.volume);
// console.log(garrafa.formato);
// console.log(garrafa.reciclavel);
// console.log(garrafa["data de validade"]);
// console.log(garrafa["tampa"]);

// let historicoUsuario = {
//   nome: "Octavio",
//   "Datas de acesso:": ["18/11/2021", "10/07/2022", "23/08/2022"],
// };

// console.log(historicoUsuario);
// console.log(historicoUsuario["Datas de acesso:"]);

//CRIANDO UM ARRAY DE OBJETOS

// let arrayPessoas = [
//   { nome: "Octavio", nascimento: "18/11/2003" },
//   { nome: "joão", nascimento: "11/11/2002" },
// ];

// console.log(arrayPessoas[0].nascimento);

let newProp = "data de nascimento";
let user = {
  nome: "Octavio",
  [newProp]: "18/11/2003",
};

console.log(user);
