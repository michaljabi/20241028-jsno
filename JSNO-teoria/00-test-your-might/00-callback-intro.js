
console.log('Hello stranger... shall we start?')

// function giveMeTheNumber(mistery = (a = 0) => { }) {
// PROVIDER:
function giveMeTheNumber(mistery) {
    // console.log(mistery);
    // undefined(300)
    //mistery(500)


    setTimeout(() => {
        // throw new Error('You are not allowed to get refund')
        mistery(new Error('You are not allowed to get refund'), 100)
    }, 4000)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */
// CONSUMER #1
try {
    giveMeTheNumber((err, num) => {
        console.log(num);
    })
} catch (e) {
    // wniosek: try / catch nie zadzia dla danych asynchronicznych :(
    console.log(e.message)
}

// CONSUMER #2 (poprawny odbir danych asynchronicznych)
giveMeTheNumber((err, num) => {
    if (err) {
        console.log(err.message)
        return;
    }
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