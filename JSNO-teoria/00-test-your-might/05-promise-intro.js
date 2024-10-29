
console.log('Hello stranger... shall we start?')

function giveMeTheNumber() {
    return Promise.resolve(300)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

giveMeTheNumber()
    .then((num) => {
        console.log(num)
    })
    .catch((num) => {
        console.log(num)
    })


// to do czego będziemy dążyć to składnia async/await dla Promise (lukier składniowy)