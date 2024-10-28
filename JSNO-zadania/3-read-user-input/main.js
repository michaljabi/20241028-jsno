const mySentence = "To jest mój banner";

// 1. zrobić duże litery
// 2. podzielić na słowa
// 3. iterować po tablicy (for...of)
// 4. dodać * patrz: repeat() dla stringa + .length
// 5. wypisać na ekranie wszystkie bannery

const upperSentence = mySentence.toUpperCase(); //=

const words = upperSentence.split(" ");

// words; //=
for (const word of words) {
  console.log("*".repeat(word.length + 4));
  console.log(`* ${word} *`);
  console.log("*".repeat(word.length + 4));
}
