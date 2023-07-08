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

const removeDuplicatedCharacters = (text: string) => {
  const charArr = text.trim().split("");

  const unduplicatedCharactersArray: any[] = [];

  charArr.forEach((char) => {
    if (!unduplicatedCharactersArray.includes(char) || char === " ") {
      unduplicatedCharactersArray.push(char);
    }
  });

  const unduplicatedCharactersString = unduplicatedCharactersArray.join("");

  return unduplicatedCharactersString;
};
