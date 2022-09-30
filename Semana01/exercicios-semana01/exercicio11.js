//Aula pratica - semana 01

//exercicio 11

let l1 = 2;
let l2 = 1;
let l3 = 5;

if (l1 == l2 && l1 == l3 && l2 == l3) {
  console.log("Triangulo Equilatero");
} else if (l1 == l2 || l1 == l3 || l2 == l3 || l3 == l2) {
  console.log("Triangulo isoceles");
} else {
  console.log("triangulo escaleno");
}
