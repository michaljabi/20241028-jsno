import path from "node:path";
import readline from "node:readline";
import process from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import { makeDirname } from "./utils/make-dirname.js";

const dataPath = path.resolve(
  makeDirname(import.meta.url),
  "files",
  "data.txt"
);
const read = readline.createInterface(process.stdin, process.stdout);

// odczyt pliku
readFile(dataPath, "utf-8")
  .then((data) => {
    console.log("Dane z pliku:");
    console.log(data);
    // throw new Error("You are not allowed to add data... sorry");
    console.log("-------------");
    askAboutDataToAdd();
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("Plik data nie ma danych...");
      return askAboutDataToAdd();
    }
    console.log("Problem z odczytem pliku");
    console.error(err.message);
    closeProgram(1);
  });
// .finally(() => {
//   console.log("Zawsze sie uruchomię....");
// });

function askAboutDataToAdd() {
  read.question("Czy chcesz coś dopisać na koniec pliku (y/n): ", (letter) => {
    if (letter.toLowerCase() !== "y") {
      closeProgram();
    }
    getDataFromUser();
  });
}

function getDataFromUser() {
  read.question("Wpisz dane do pliku: ", (dataToAdd) => {
    writeFile(dataPath, dataToAdd + "\n", { encoding: "utf-8", flag: "a" })
      .then(() => {
        closeProgram();
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
}

function closeProgram(exitCode = 0) {
  read.close();
  process.exit(exitCode);
}
