//Crie um programa que lê dois valores x e y e diz se algum deles é positivo

let x = 4;
let y = -3;

if ((x > 0) & (y > 0)) {
  console.log("Ambos são positivos");
} else if ((y > 0) & (x <= 0)) {
  console.log("Apenas Y é positivo");
} else if ((y <= 0) & (x > 0)) {
  console.log("Apenas x é positivo");
} else if ((y <= 0) & (x <= 0)) {
  console.log("Nenhum é positivo");
}
