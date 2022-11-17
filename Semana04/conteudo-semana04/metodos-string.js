//METODOS DE STRING

//SLICE --> (fatiar)

//SUBSTRING

// let name = "Octavio, Joao, Helena, Pedro";
// let partOne = name.substring(0, 5);
// console.log(partOne);

//SUBSTR

// let name = "Octavio, Joao, Helena, Pedro";
// let partOne = name.substr(2, 6);
// console.log(partOne);

//REPLACE

// let trabalho = "W3b d3v3lop";
// const result = trabalho.replace("3", "e");
// console.log(result);
// let reultTwo = trabalho.replaceAll("3", "e");
// console.log(reultTwo);

//EXPRESSOES REGULARES(regex)
//Com as regex é possivel criar mascaras de formatação

// let frase =
//   "amanha é o dia das mulheres, feliz dia das mulheres para voces, mulheres, obrigado mulheres";
// let result = frase.replace(/mulheres/gi, "meninas");
// console.log(result);

//ToUpperCase & ToLowerCase

// let frase = "eu amo biscoito";
// console.log(frase[0].toUpperCase() + frase.slice(1, frase.length));

// let fraseTwo = "EU ODEIO BISCOITO";
// console.log(fraseTwo[0].toLowerCase + fraseTwo.slice(1, fraseTwo.length));

//trim

// let name = "                 octavio       nickel   ladeira         ";
// let changeOne = name.trim();

// console.log(changeOne);

//padStart & padEnd
// let cpf = "14776213931";
// let change = cpf.padStart(12, ".");
// console.log(change);

// let nameTwo = "Octavi";
// let changeTwo = nameTwo.padEnd(7, "o");
// console.log(changeTwo);

//split

// let cpf = "14776213931";
// let result = cpf.split();
// console.log(result);

// let values = ["  h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];

// const organiza = () => {
//   let newWords = [];
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].trim();
//   }
//   values = newWords;
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].replaceAll("3", "e");
//   }
//   values = newWords;
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].replaceAll("4", "a");
//   }
//   values = newWords;
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].replaceAll("1", "i");
//   }
//   values = newWords;
//   for (let i = 0; i < values.length; i++) {
//     newWords[i] = values[i].replaceAll("0", "o");
//   }
//   console.log(newWords);
// };
// organiza(values);


// let letterUp = string.toUpperCase()
// let slice=[];
// let aux;
// let newStr = [];
// for(let i = 0 ; i < string.length ; i ++){
  //   if(letterUp[i] === string[i]){
    //     newStr[i] = string.substr(i, i+1) + " "
    //     slice[i] = string.substr(0, i
    //       )
  //   }
  // }
  // string = newStr.filter(newStr => newStr.length>1)
  // newStr = slice.filter(slice => slice.length>1)
  
  
  
//   const soluction = (string) => {
//   string = string.split("").map(el => {
  
//       if(el == el.toUpperCase()){
//        el = " " + el
      
//     }
//     return el

//     })
//     console.log(string.join(""));
//   }

// soluction("camelCasingTest")

const putaqpariu = (value) => {
  value = value.toString()
  let res;
  if(value.length <=10){
    for(let i = 0 ; i < value.lenght ; i ++){
      res =  Math.pow(parseFloat(value[i]), value.length)
    }
    console.log(res);
  }
} 

putaqpariu(153)