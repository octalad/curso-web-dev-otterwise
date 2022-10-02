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
