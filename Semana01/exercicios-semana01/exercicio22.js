//aula pratica semana 01

//exercicio 22

let value = 2531;
let qtd100 = 0;
let qtd50 = 0;
let qtd20 = 0;
let qtd10 = 0;
let qtd5 = 0;
let qtd2 = 0;
let qtd1 = 0;
let aux;
console.log(value);
if (value >= 100) {
  qtd100 = parseInt(value / 100, 10);
  aux = value - qtd100 * 100;
  value = aux;
  console.log(qtd100, "notas de R$ 100,00");
}
if (value >= 50) {
  qtd50 = parseInt(value / 50, 10);
  aux = value - qtd50 * 50;
  value = aux;
  console.log(qtd50, "notas de R$ 50,00");
}
if (value >= 20) {
  qtd20 = parseInt(value / 20, 10);
  aux = value - qtd20 * 20;
  value = aux;
  console.log(qtd20, "notas de R$ 20,00");
}
if (value >= 10) {
  qtd10 = parseInt(value / 10, 10);
  aux = value - qtd10 * 10;
  value = aux;
  console.log(qtd10, "notas de R$ 10,00");
}
if (value >= 5) {
  qtd5 = parseInt(value / 5, 10);
  aux = value - qtd5 * 5;
  value = aux;
  console.log(qtd5, "notas de R$ 5,00");
}
if (value >= 2) {
  qtd2 = parseInt(value / 2, 10);
  aux = value - qtd2 * 2;
  value = aux;
  console.log(qtd2, "notas de R$ 2,00");
}
if (value >= 1) {
  qtd1 = parseInt(value / 1, 10);
  aux = value - qtd1 * 1;
  value = aux;
  console.log(qtd1, "notas de R$ 1,00");
}
