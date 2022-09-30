//aula pratica semana 01

//exercicio 21

let res;

function calculate(string, num1, num2) {
  if (string == "soma") {
    console.log((res = num1 + num2));
  } else if (string == "subtrai") {
    console.log((res = num1 - num2));
  } else if (string == "multiplica") {
    console.log((res = num1 * num2));
  } else if (string == "divide") {
    console.log((res = num1 / num2));
  } else {
    console.log("opção invalida");
  }
  return res;
}

console.log(calculate("divide", 6, 3));
