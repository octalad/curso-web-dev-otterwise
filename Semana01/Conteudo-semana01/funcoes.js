//Funções

//Funçoes sem parametro e sem retorno
//function otterwise() {
//  console.log("Otterwise");
//  console.log("Escola de programação");
//}
//Chamada da função
//otterwise(); //É necessario chamar a função para q ela apareça no terminal.

//Função com parametro e sem retorno
//parametro é o valor dado a fucao entre os ()

//function mostraNome(nome) {
//  console.log("meu nome é:", nome);
//}
//mostraNome("Octavio");
//mostraNome("Pedro");
//let value = "Juca";
//mostraNome(value);

//function soma(nOne, nTwo) {
//  console.log(nOne + nTwo);
//}
//soma(15, 30);
//let valueOne = 20;
//let valueTwo = 30;
//soma(valueOne, valueTwo);

//Função com parametro e com retorno
//A MAIS UTILIZADA
//function mult(valueOne, valueTwo) {
//  return valueOne * valueTwo;
//}
//const resultado = mult(10, 15);
//console.log(resultado);

function soma(valueOne, valueTwo) {
  const sum = valueOne + valueTwo;
  return sum;
}

console.log(soma(1, 4));
