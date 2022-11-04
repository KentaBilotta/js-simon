let eleTimer = document.querySelector(".timer");
const btnPlay = document.querySelector("#btn-play");
let eleNumbers = document.querySelector(".numbers");

btnPlay.addEventListener("click", function() {
    const timer = setInterval(countdown, 1000);
let i = 10;

function countdown() {
    eleTimer.innerHTML = i;
    i--;

    if (i == -1) {
        setTimeout(auguri, 1000);
        function auguri() {
            eleTimer.innerHTML = "Fine!"
        }
        clearInterval(timer);
    }
}

const Numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = getRndInteger(1, 100);
    } while (Numbers.includes(randomNumber));
    Numbers.push(randomNumber);
}

console.log(Numbers);
eleNumbers.innerHTML = Numbers;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


});
