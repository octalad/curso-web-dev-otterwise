//Aula pratica - semana 01

//exercicio 17

let horaIn = 06;
let horaFin = 16;
let dur;

if (horaIn > horaFin) {
  dur = 24 - horaIn + horaFin;
} else {
  dur = horaFin - horaIn;
}
console.log("A duração do jogo for de", dur, "horas");
