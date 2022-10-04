import axios from "axios";
import { input } from "console-input";
import fs from "fs";

// const randomCpf = (min, max) => {
//   let res = [];
//   for (let i = 0; i < 20; i++) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return (res[i] = Math.floor(Math.random() * (max - min) + min));
//   }
// };

// let ajuda = [];
// for (let i = 0; i < 30; i++) {
//   ajuda[i] = randomCpf(29000000, 29099999).toString();
// }

// const searchCep = async (cep) => {
//   try {
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// for (let i = 0; i < 30; i++) {
//   searchCep(ajuda[i]);
// }

const quantInuputs = () => {
  let str = input("Digite o numero de CEPs que voce ira adicionar:");
  return parseInt(str);
};

let length = quantInuputs();

const inputCep = () => {
  let response = [];
  for (let i = 0; i < length; i++) {
    response[i] = input("Digite os CEPs:");
  }
  return response;
};

const searchCep = async (cep) => {
  try {
    let response = [];
    for (let i = 0; i < length; i++) {
      response[i] = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
    for (let i = 0; i < response.length; i++) {
      response = response[i].data;
    }
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const saveToJSON = (data, fileName) => {
  const parsedJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, parsedJSON);
};

const main = async () => {
  try {
    let cep = [];
    cep = inputCep();
    let cepReturn = [{}];
    for (let i = 0; i < length; i++) {
      cepReturn[i] = await searchCep(cep[i]);
    }
    saveToJSON(cepReturn, "CEPs.json");
  } catch (error) {
    console.log(error.message);
  }
};
main();
