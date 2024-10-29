
import { readFile } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { makeDirname } from './make-dirname.mjs';
// import process from 'node:process';

// const __dirname = dirname(fileURLToPath(import.meta.url))
const __dirname = makeDirname(import.meta.url)

const myFilePath = resolve(__dirname, 'sample-file.txt');

console.log(__dirname)
// to jest miejsce wywołania programu a nie ścieżka do tego pliku, więc nie wystarczy...
// console.log(process.cwd())

readFile(myFilePath, 'utf8', (err, data) => {
	if (err) {
		return console.error('Błąd odczytu pliku: ', err)
	}
	console.log('Treść pliku:')
	console.log(data);
})