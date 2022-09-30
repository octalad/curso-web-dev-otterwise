//aula pratica semana 01

//exercicio 23

let sec;
let min;
let hour;
let resto;
let s;

function timer(sec) {
  hour = parseInt(sec / 3600);
  resto = sec % 3600;
  min = parseInt(resto / 60);
  s = resto % 60;

  console.log(hour, ":", min, ":", s);
}

timer(33567);
