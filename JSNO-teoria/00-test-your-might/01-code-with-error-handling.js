/**
 * 1
 *
 * Zrób funkcję, która dzieli 2 liczby
 * i rzuca błąd "Cannot divide by 0" jeśli 2 liczba to "0"
 * 
 * zobacz: przykład b301.
 * */


function divide(a, b = 1) {
    if (b === 0) {
        throw new Error('Cannot divide by 0')
    }
    return a / b;
}



try {
    divide(10, 2) //=
    divide(10) //=
    divide(10, 0) //=

    console.log('Unreachable console.log')
} catch (e) {
    console.log(e.message)
} finally {
    console.log('I run always...')
}


console.log('Unreachable console.log !');

