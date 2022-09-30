//METODOS DE ARRAYS

//join

// let fruits = ["Banana", "Abacaxi", "Limao", "Melao"];
// let result = fruits.join(" - ");
// console.log(result);
//*saida = "Banana - Abacaxi - Limao - Melao"*

//concat

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// let fruitsTwo = ["Tomato", "Kiwi", "Watermelon"];
// let result = fruits.concat(fruitsTwo);
// console.log(result);
//*vai adicionar os valores de fruitsTwo junto com fruits*

//push

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// fruits.push("Kiwi");
// console.log(fruits);
//*adiciona um elemento no final da array*

//pop

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// fruits.pop();
// console.log(fruits);
//*tira o ultimo elemento do array e armazena*

//shift

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// fruits.shift();
// console.log(fruits);
// console.log(fruits.shift());
//*tira o primeiro elemento do array e armazena*

//unshift

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// fruits.unshift("Pear");
// console.log(fruits);
//*adiciona um elemento na primeira posição do array*

//slice

// let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// let result = fruits.slice(1);
// console.log(result);

//splice

let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
fruits.splice(2, 0, "lemon", "kiwi");
console.log(fruits);

//reverse

// // let fruits = ["Banana", "Pineapple", "Lemon", "Orange"];
// // console.log(fruits.reverse());
