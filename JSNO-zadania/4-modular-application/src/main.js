import readline from "node:readline";
import { makeProgramTitle } from "./program-title.js";
import { makeBanner } from "./make-banner.js";

const read = readline.createInterface(process.stdin, process.stdout);

makeProgramTitle();

read.question("Podaj zdanie jakie chcesz zamienić w banner: ", (sentence) => {
  const words = sentence.split(" ");
  for (const word of words) {
    makeBanner(word);
  }
  read.close();
});
