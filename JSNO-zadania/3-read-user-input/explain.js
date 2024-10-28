const mySentence = "To jest mój banner";

// 1. zrobić duże litery
// 2. podzielić na słowa
// 3. iterować po tablicy (for...of)
// 4. dodać * patrz: repeat() dla stringa
// 5. wypisać na ekranie wszystkie bannery


console.log(mySentence.toLowerCase());

console.log(mySentence.split(" "));

// console.log(String);

// z cyklu "dobre zasady w JS":
// zasada: favor const over let

// console.log(mySentence)
// mySentence = 'To jest mój banner';

// mySentence = "?"

// mySentence = 2

console.log(mySentence);

// zasięg / zakres (scope) leksykalny zmiennej
{
  let y = 10;
}
// console.log(y);

// a co a var ? // mamy problem bo zakres się wylewa....
if (10 === 10) {
  var x = 22;
}
console.log(x);
