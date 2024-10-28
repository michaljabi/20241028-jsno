// CommonJS (2009)
const readline = require("readline");

// vs ESM => Ecma Script Modules (2015)
// import readline from "readline";
const read = readline.createInterface(process.stdin, process.stdout);

console.log(`
    ****************************************
    *   WITAJ W GENERATORZE BANNERÓW [!]   *
    ****************************************`);

read.question("Podaj zdanie jakie chcesz zamienić w banner: ", (sentence) => {
  const words = sentence.split(" ");
  for (const word of words) {
    makeBanner(word);
  }
  read.close();
});

// 1. zrobić duże litery
// 2. podzielić na słowa
// 3. iterować po tablicy (for...of)
// 4. dodać * patrz: repeat() dla stringa + .length
// 5. wypisać na ekranie wszystkie bannery

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

// makeBanner("Michał");

// words; //=
// words.map(makeBanner); //=
// words; //=
