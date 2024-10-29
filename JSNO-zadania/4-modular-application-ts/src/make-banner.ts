export function makeBanner(word: string): void {
  const insideWord = `* ${word.toUpperCase()} *`;
  const border = "*".repeat(insideWord.length);
  console.log(border);
  console.log(insideWord);
  console.log(border);
}
