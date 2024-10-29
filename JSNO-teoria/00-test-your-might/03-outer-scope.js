/**
 * 3
 *
 * Mając ograniczenie w postaci miejsca — w którym można pisać rozwiązanie.
 * Spraw, aby asercja w linii 20 nie zwracała błędu.
 * Wyrażenie fullName === expectedValue powinno być prawdą
 * */
const assert = require('assert')

let fullName = ''

function computeFullName() {
	const firstName = 'John';
	const lasName = 'Kowalsky';
	// Kod możesz pisać tylko w tym miejscu:
	// fullName = firstName + ' ' + lasName;
	fullName = [firstName, lasName].join(' ');
}

computeFullName();

// Sprawdzenie poprawności rozwiązania:
const expectedValue = 'John Kowalsky';
assert(fullName === expectedValue, `Imię i nazwisko to "${fullName}" a powinno być "${expectedValue}"`);

console.log(fullName)


// Literały w JS: obiektowy, tablicowy i RegExpowy:

// Obiekty
console.log(new Object());
// ale w JS robisz to samo tak:
console.log({}); // literał obiektowy

// Tablice
console.log(new Array());
// ale w JS robisz to samo tak:
console.log([]); // literał tablicowy

// Wyrażenia regularne
console.log(new RegExp('(?:)'));
// w JS możesz to robić to samo tak:
console.log(/(?:)/);

console.log('890-293'.match(/\d+/g))
console.log(/\d+/.test('abc'))
console.log(/\d+/.test('123abc'))