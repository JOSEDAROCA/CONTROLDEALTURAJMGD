import "./styles.css";

let btn = document.getElementById("btn");
let altura = document.getElementById("altura");

btn.addEventListener("click", () => {
  let alturaIngresada: number = altura.value;
  let alturaPermitida: number = 180;
  if (alturaIngresada <= alturaPermitida) {
    console.log("Altura OK Pase");
  } else {
    console.log("No puede pasar");
  }
});
