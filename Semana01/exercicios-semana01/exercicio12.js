//aula pratica - semana 01

//exercicio 12

let name = "Juca da silva";
let serv = true;
let prof = true;

if (serv == false) {
  console.log(name, "voce nao tem uma linha de credito disponivel");
} else if (serv == true && prof == true) {
  console.log(name, "voce tem uma linha de credito especial!");
} else if (serv == true && prof == false) {
  console.log(name, "voce tem uma linha de credito para servidores disponivel");
}
