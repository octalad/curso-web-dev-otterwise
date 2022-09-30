//aula pratica - semana 01

//exercicio 14

let v1 = 8;
let v2 = 4;
let v3 = 7;
let soma;

if (v1 > v3 && v2 > v3) {
  soma = v1 + v2;
} else if (v1 > v2 && v3 > v2) {
  soma = v1 + v3;
} else if (v2 > v1 && v3 > v1) {
  soma = v2 + v3;
}

console.log(soma);
