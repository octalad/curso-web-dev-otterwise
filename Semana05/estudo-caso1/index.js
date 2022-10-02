// [OK]Criar uma função para ler a entrada do usuário
// [OK]Criar uma função para buscar as informações do cep passado como parâmetro
// [OK]Criar função para salvar os dados em um arquivo JSON
// [OK]Fazer a integração entre as funções

import axios from "axios";
import { input } from "console-input";
import fs from "fs";

const cepInput = () => input("Digite um CEP:");

const searchCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const saveToJSON = (data, fileName) => {
  const parsedJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, parsedJSON);
};

saveToJSON({ name: "Ladeira" }, "ladeira.JSON");

const main = async () => {
  try {
    const cep = cepInput();
    const cepReturn = await searchCep(cep);
    saveToJSON(cepReturn, "cep.json");
  } catch (error) {
    console.log(error.cepReturn.status);
  }
};
main();
