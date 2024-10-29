import readline from "node:readline";
import process from "node:process";
import { makeProgramTitle } from "./program-title.js";
import { makeBanner } from "./make-banner.js";

const read = readline.createInterface(process.stdin, process.stdout);

makeProgramTitle();

askAboutBanner();

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
      const lowerLetter = letter.toLowerCase();
      if (lowerLetter === "k") {
        read.close();
        process.exit();
      } else if (lowerLetter === "n") {
        askAboutBanner();
      } else {
        console.log(`Nieobsługiwany wybór "${letter}"!  `);
        askWhatNext();
      }
      // switch (lowerLetter) {
      //   case "k":
      //     read.close();
      //     process.exit();
      //     break;
      //   case "n":
      //     askAboutBanner();
      //     break;
      //   default:
      //     console.log(`Nieobsługiwany wybór "${letter}"!  `);
      //     askWhatNext();
      // }
    }
  );
}
