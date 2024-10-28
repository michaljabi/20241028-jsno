const mySentence = "To jest mój banner";

// 1. zrobić duże litery
// 2. podzielić na słowa
// 3. iterować po tablicy (for...of)
// 4. dodać * patrz: repeat() dla stringa + .length
// 5. wypisać na ekranie wszystkie bannery

const words = mySentence.split(" ");

// words; //=
// const PADDING_LENGTH = 4;
for (const word of words) {
  makeBanner(word);
}

function makeBanner(word) {
  const insideWord = `* ${word.toUpperCase()} *`;
  const border = "*".repeat(insideWord.length);
  console.log(border);
  console.log(insideWord);
  console.log(border);
  // return insideWord;
}
// console.log(border)

// words.forEach((word) => {
//   console.log("*".repeat(word.length + 4));
//   console.log(`* ${word} *`);
//   console.log("*".repeat(word.length + 4));
// });

makeBanner("Michał");

// words; //=
// words.map(makeBanner); //=
// words; //=
