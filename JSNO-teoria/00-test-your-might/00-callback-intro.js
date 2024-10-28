
console.log('Hello stranger... shall we start?')

function giveMeTheNumber(mistery) {
    mistery(300)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

let x = 1;

function printNumber() {
    console.log(x++)
}


// Program który będzie działał w nieskończoność
setInterval(printNumber, 1000)

// Najprostrze rozwiązanie:
/*
setInterval(() => {
    console.log(x++)
}, 1000)
*/