window.onload = () => {
  const [p1, p2] = document.querySelectorAll("p");
  p1.remove();
  p2.innerText = "texto modificado!";
};
