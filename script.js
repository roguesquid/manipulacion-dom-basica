const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    //con esta propiedad prevenimos el comportamiento por defecto de un elemento
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = `Resultado: ${sumaInputs}`;
}