const btn = document.getElementById('btn');
const output = document.getElementById('output');
let contador = 0

btn.addEventListener("click", () => {
    contador++
    output.innerHTML = contador
    //----------------------------------------//
    const hexNumber = '0123456789ABCDEF';
    let hexCode1 = "";
    let hexCode2 = "";
    // 6 caracteres
    for (let i = 0; i < 6; i++) {
        hexCode1 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
        hexCode2 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
    }
    console.log(hexCode1)
    console.log(hexCode2)
    document.body.style.background = `linear-gradient(270deg, #${hexCode1}, #${hexCode2})`;

})
// ----------------------------- //
// ------------EX2--------------- //

const input = document.getElementById("input");

input.addEventListener("keypress", (e) => {
    alert("clicou ")
})

// ------------------------------------//
// ------------EX3----------------------//

const btn2 = document.getElementById('btn2');

btn2.addEventListener("click", () => {
    alert("clicou")
})

// ---------------------------------- //
// -----------EX4--------------------- //

const img = document.getElementById("img");

img.addEventListener("mouseenter", () => {
    alert("tira o mouse dai magrao")
})

// ------------------------------------ //
// ------------EX5--------------------- //


const inputForm = document.querySelector("#input-form");
const inputButton = document.querySelector("#input-button");

inputButton.addEventListener('click', function(){
  inputForm.addEventListener('invalid', evento => evento.preventDefault());
  inputForm.addEventListener("invalid", () => inputForm.style.border = "2px solid red"); 
})

