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


window.onload = function() {
  generadorDeExcusas();
};


function generadorDeExcusas() {
  // Importante vaciarlo para que se pueda renovar la excusa al clicar en el botón
  finalArray = [];

  
  matrizArrays.forEach(array => {
    finalArray.push(array[Math.floor(Math.random() * array.length)]);
  });

  // Aquí mandando al html que de base el div de "excusa" que dirá "Click the button to start!"
  document.getElementById("excuse").innerHTML = 
    "<p> Click the button to start! </p>"; 
}


function onButtonClick() {
  
  generadorDeExcusas();
  
  document.getElementById("excuse").innerHTML =
    "<p>" + finalArray.join(" ") + "</p>";
}
