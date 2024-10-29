
async function giveMeTheNumber() {
    throw new Error('OH no.....')
    return 300
}

try {
    const num = await giveMeTheNumber();
    console.log(num)
} catch (e) {
    console.error('dostałem Error:', e);
} finally {
    console.log('Zawsze się wykonam...')
}



// giveMeTheNumber()
//     .then((num) => {
//         console.log(num)
//     })


// to do czego będziemy dążyć to składnia async/await dla Promise (lukier składniowy)