/**
 * 1.1
 *
 * Zrób funkcję, która dzieli 2 liczby
 * i rzuca błąd "Cannot divide by 0" jeśli 2 liczba to "0"
 * 
 * zobacz: przykład b405.
 * 
 * Zadanie zrób w oparciu o Promises.
 * */
// Inny problem - podziel i zwróć za 2 sekundy....

function divideAndReturnAfter2sec(a, b = 1) {

    // if (b === 0) {
    //     return Promise.reject(new Error('Cannot divide by 0'))
    // }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                // Promise może mieć tylko 1 stan więc nawet jeśli zapomnę return to resolve się nie wykona (ale się obliczy !)
                // return chemy napisać zawsze żeby już nie liczyć przypadku resolve...
                return reject(new Error('Cannot divide by 0'))
            }
            resolve(a / b);
        }, 2000)
    })

}

divideAndReturnAfter2sec(4000, 0).then((r) => {
    console.log('Result after 2 sec', r)
}).catch(e => {
    console.error('Error after 2 sec', e.message)
})

async function divide(a, b = 1) {
    if (b === 0) {
        throw new Error('Cannot divide by 0')
    }
    return a / b;
}

// Bez async / await - rozwiązanie
function divide2(a, b = 1) {
    if (b === 0) {
        return Promise.reject(new Error('Cannot divide by 0'))
    }
    return Promise.resolve(a / b);
}

divide2(200, 0)
    .then(r => {
        console.log('200/2 = ', r)
    })
    .catch(e => {
        console.error(e.message)
    })
// bez async / await KONIEC;

try {
    const result = await divide(10, 2);
    console.log(result);
    divide(10).then((r) => console.log('then returned', r)) // to be continued... (Event Loop - wyjaśnienie, dlaczego w innej kolejności console.log)

    console.log(await divide(9, 3))

    await divide(100, 0)

    console.log('try console.log')
} catch (e) {
    console.log(e.message)
} finally {
    console.log('I run always...')
}


console.log('(Un)reachable console.log !');

