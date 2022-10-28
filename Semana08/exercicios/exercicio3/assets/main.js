window.onload = () => {
  const form = document.querySelector("form");
  let result = 0;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      numOne: parseInt(formData.get("firnum")),
      numTwo: parseInt(formData.get("secnum")),
      eqType: formData.get("eqType"),
    };
    console.log(data);
    if (data.eqType == "soma") {
      result = data.numOne + data.numTwo;
    } else if (data.eqType == "subt") {
      result = data.numOne - data.numTwo;
    } else if (data.eqType == "mult") {
      result = data.numOne * data.numTwo;
    } else if (data.eqType == "div") {
      result = data.numOne / data.numTwo;
    }
    const createp = document.createElement("p");
    createp.innerText = result.toString();

    const [printRes] = document.getElementsByClassName("result");
    printRes.innerText = printRes.textContent + " " + result;
    const [reset] = document.getElementsByClassName("clean-button");
    reset.addEventListener("click", (event) => {
      window.location.reload(true);
    });
  });
};
