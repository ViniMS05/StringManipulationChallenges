const separators = /[.!?;]/g;

const revertPhrasesOrder = (text: string) => {
  const parsedText = text.trim();

  const sentences = text.match(separators)!;

  const separatedText = parsedText
    .split(separators)
    .filter((item) => item !== "");

  separatedText.forEach((phrase, idx) => {
    separatedText[idx] = phrase + sentences[idx];
  });

  const arr = [];
  for (let i = 0; i < separatedText.length; i++) {
    let reversedPhraseOrder = separatedText[i].split(" ").reverse().join(" ");

    arr.push(reversedPhraseOrder);
  }

  const reversedTextOrder = arr.reverse().join("");

  return reversedTextOrder;
};
