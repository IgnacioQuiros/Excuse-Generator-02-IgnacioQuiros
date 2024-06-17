/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// Defino las variables que voy a necesitar al inicio del documento
let finalArray = [];
let matrizArrays = [who, action, what, when];

// Defino también las variables del botón extra y le añado un "EventListener"
const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

// Llamando a la función de generar excusas una vez cargue la ventana
window.onload = function() {
  generadorDeExcusas();
};

// Función que genera excusas
function generadorDeExcusas() {
  // Importante vaciarlo para que se pueda renovar la excusa al clicar en el botón
  finalArray = [];

  // Aquí es la parte de la funcion que va eligiendo distintas posiciones para cada array de la matriz
  matrizArrays.forEach(array => {
    let randomNumber = Math.floor(Math.random() * array.length);
    finalArray.push(array[randomNumber]);
  });

  // Aquí mandando al html que de base el div de "excusa" que dirá "Click the button to start!"
  document.getElementById("excuse").innerHTML =
    "<p> Click the button to start! </p>";
}

// Función para que funcione el botón y al clicar genere una nueva excusa
function onButtonClick() {
  // Llamo a la función que generará la excusa antes de enviar nada
  generadorDeExcusas();
  // Lo mando a Html en forma de párrafo para luego poder modificar en style el "p"
  document.getElementById("excuse").innerHTML =
    "<p>" + finalArray.join(" ") + "</p>";
}
