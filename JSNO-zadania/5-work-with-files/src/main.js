import path from "node:path";
import readline from "node:readline";
import process from "node:process";
import { readFile, writeFile } from "node:fs";
import { makeDirname } from "./utils/make-dirname.js";

const dataPath = path.resolve(
  makeDirname(import.meta.url),
  "files",
  "data.txt"
);
const read = readline.createInterface(process.stdin, process.stdout);

// odczyt pliku
readFile(dataPath, "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.log("Plik data nie ma danych...");
      return askAboutDataToAdd();
    }
    console.log("Problem z odczytem pliku");
    console.error(err.message);
    closeProgram(1);
  }
  console.log("Dane z pliku:");
  console.log(data);
  console.log("-------------");
  askAboutDataToAdd();
});

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
    writeFile(
      dataPath,
      dataToAdd + "\n",
      { encoding: "utf-8", flag: "a" },
      (err) => {
        if (err) {
          console.error(err.message);
        }
        closeProgram();
      }
    );
  });
}

function closeProgram(exitCode = 0) {
  read.close();
  process.exit(exitCode);
}
