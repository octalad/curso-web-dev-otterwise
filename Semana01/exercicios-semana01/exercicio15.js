//aula pratica - semana 01

//exercicio 15

let v1 = 1;
let v2 = 3;
let v3 = 2;
let aux;

if (v2 > v1 && v2 > v3) {
  aux = v1;
  v1 = v2;
  v2 = aux;
} else if (v3 > v1 && v3 > v2) {
  aux = v1;
  v1 = v3;
  v3 = aux;
}

if (v3 > v2) {
  aux = v2;
  v2 = v3;
  v3 = aux;
}
console.log(v3, v2, v1);
