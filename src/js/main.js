// --- TUS PRÁCTICAS AQUÍ ABAJO ---
console.log("DOM Playground listo para practicar 🚀")

// Contandor En pantalla
const counterDisplay = document.getElementById("counter-display")

//Botones
const btnincrement = document.getElementById("increment")
const btndecrement = document.getElementById("decrement")
const btnreset = document.getElementById("reset")

let counter = 0;

function updateDisplay() {

    counterDisplay.innerText = counter;

    if (counter < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = '';
    }
}


btnincrement.addEventListener('click', () => {

counter++;
updateDisplay();

});

btndecrement.addEventListener('click', () => {

counter--;
updateDisplay();

});

btnreset.addEventListener('click', () => {

counter= 0;
updateDisplay();

});