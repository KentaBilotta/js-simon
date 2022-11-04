let eleTimer = document.querySelector(".timer");
const btnPlay = document.querySelector("#btn-play");
let eleNumbers = document.querySelector(".numbers");

btnPlay.addEventListener("click", function() {
const timer = setInterval(countdown, 1000);
let counter = 30;

const Numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = getRndInteger(1, 100);
    } while (Numbers.includes(randomNumber));
    Numbers.push(randomNumber);
}

eleNumbers.innerHTML = Numbers;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function countdown() {
    eleTimer.innerHTML = counter;

    if (counter === 0) {
        eleNumbers.innerHTML = "";
    }

    counter--;

    if (counter == -1) {
        setTimeout(auguri, 1000);
        function auguri() {
            eleTimer.innerHTML = "Fine!"
            let points = 0;
            for (let i = 1; i <= 5; i++) {
                const userInput = prompt("Inserisci il numero "+ i);
                if (Numbers.includes(parseInt(userInput))) {
                    points++;
                    console.log("Numero indovinato: " + userInput);
                }
            }
            eleNumbers.innerHTML = "Hai indovinato: " + points + " numeri";
        }
        clearInterval(timer);
    }
}


});
