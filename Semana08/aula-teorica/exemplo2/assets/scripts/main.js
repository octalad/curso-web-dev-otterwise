// console.log(window);
// console.log(document);

// console.log("primeiro log");
// window.onload = () => {
//   console.log("segundo log");
// };
// console.log("terceiro log");

// window.onload = () => {
//   window.innerWidth = 992;
//   console.log(window.innerHeight);
//   console.log(window.innerWidth);
//   console.log(window);
// };

window.onload = () => {
  //   const paragraph = document.createElement("p");
  //console.log(paragraph);
  //   paragraph.innerText = "meu paragrafo";
  //   const body = document.getElementById("body");
  //   body.appendChild(paragraph);
  //   const body = document.getElementsByTagName("body");
  //   console.log(body[0]);
  //   const box = document.getElementsByClassName("box");
  //   console.log(box);

  //box[1].innerHTML = "<p> este paragrafo foi criado dentro do js<p>";

  //const body = document.querySelector("body");
  //   const box2 = document.querySelector(".box");
  //   const boxes = document.querySelectorAll(".box");
  //   const boxp = boxes[1].querySelector("p");
  //   boxp.remove();
  //boxes[1].removeChild(boxp);

  //   console.log(body);
  //   console.log(box2);
  //   console.log(boxes);

  const h1 = document.querySelector("h1");
  console.log(h1);
  console.log(h1.getAttribute("class"));
  console.log(h1.hasAttribute("id"));
  console.log(h1.hasAttributes());
  //console.log(h1.removeAttribute("class"));
  h1.setAttribute("class", `${h1.getAttribute("class")} primeira-classe`);
};
