
console.log('Hello stranger... shall we start?')

// function giveMeTheNumber(mistery = (a = 0) => { }) {
// PROVIDER:
function giveMeTheNumber(mistery) {
    // console.log(mistery);
    // undefined(300)
    // mistery(500)

    setTimeout(() => {
        // mistery(300)

    }, 4000)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */
// CONSUMER #1
giveMeTheNumber((num) => {
    console.log(num);
})

// CONSUMER #2
giveMeTheNumber((num) => {
    console.log(num);
})

// CONSUMER #3
giveMeTheNumber((num) => {
    console.log(num);
})

// CONSUMER #4
giveMeTheNumber((num) => {
    console.log(num);
})


function addTwoNumbers(a = 0, b = 0) {
    return a + b;
}


console.log(undefined + undefined)
addTwoNumbers() //=


const result = addTwoNumbers(10, 20)

console.log(result);


console.log(addTwoNumbers('!', 'hello'))















// Inne przykłady:


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