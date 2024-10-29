import readline from "node:readline";
import { makeProgramTitle } from "./program-title.js";
import { makeBanner } from "./make-banner.js";

const read = readline.createInterface(process.stdin, process.stdout);

makeProgramTitle();

function askAboutBanner() {
  read.question("Podaj zdanie jakie chcesz zamienić w banner: ", (sentence) => {
    const words = sentence.split(" ");
    for (const word of words) {
      makeBanner(word);
    }
    askWhatNext();
  });
}

function askWhatNext() {
  read.question(
    `Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner
`,
    (letter) => {
      if (letter.toLowerCase() === "k") {
        read.close();
        process.exit();
      } else if (letter.toLowerCase() === "n") {
        askAboutBanner();
      } else {
        console.log(`Nieobsługiwany wybór "${letter}"!  `);
        askWhatNext();
      }
    }
  );
}

askAboutBanner();
