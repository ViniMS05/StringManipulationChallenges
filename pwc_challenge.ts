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

const isPalindromeAnagram = (word: string) => {
  const revesedWord = word.trim().split("").reverse().join("");

  if (word === revesedWord) {
    return true;
  }
  return false;
};

function longestPalindromeSubstring(text: string) {
  let longestPalindrome = "";

  for (let startIndex = 0; startIndex < text.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= text.length; endIndex++) {
      let substring = text.substring(startIndex, endIndex);
      if (
        isPalindromeAnagram(substring) &&
        substring.length > longestPalindrome.length
      ) {
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
}

const capitalizePhrases = (text: string) => {
  const phrasesArray = text.trim().split(separators);

  const sentences = text.match(separators)!;

  let capitalizedPhrasesArray: string[] = [];
  phrasesArray.forEach((item, idx) => {
    if (!item) {
      phrasesArray.splice(idx, 1);
      return;
    }

    const charsArray = item.trim().split("");
    charsArray.forEach((char, indx) => {
      if (indx === 0) {
        charsArray[indx] = char.toUpperCase();
      }
    });
    charsArray.push(sentences[idx]);

    const capitalizedPhrase = charsArray.join("");
    capitalizedPhrasesArray.push(capitalizedPhrase);
  });

  const capitalizedText = capitalizedPhrasesArray.join(" ");

  return capitalizedText;
};

function reversedPhraseOrderSubmit(event: FormDataEvent) {
  event.preventDefault();

  const form = document.getElementById("first") as HTMLFormElement;
  const result = document.getElementById("firstResult") as HTMLHeadingElement;

  const formData = new FormData(form);

  const inputData = formData.get("word_order") as string;

  const reversedPhrase = revertPhrasesOrder(inputData);

  result.textContent = `Resultado: ${reversedPhrase}`;
}

function removeDuplicatedCharactersSubmit(event: FormDataEvent) {
  event.preventDefault();

  const form = document.getElementById("second") as HTMLFormElement;
  const result = document.getElementById("secondResult") as HTMLHeadingElement;

  const formData = new FormData(form);

  const inputData = formData.get("duplicated_chars") as string;

  const removedDuplicateds = removeDuplicatedCharacters(inputData);

  result.textContent = `Resultado: ${removedDuplicateds}`;
}

function longestPalindromeSubstringSubmit(event: FormDataEvent) {
  event.preventDefault();

  const form = document.getElementById("third") as HTMLFormElement;
  const result = document.getElementById("thirdResult") as HTMLHeadingElement;

  const formData = new FormData(form);

  const inputData = formData.get("palindrome_substring") as string;

  const longestPalindrome = longestPalindromeSubstring(inputData);

  result.textContent = `Resultado: ${longestPalindrome}`;
}

function capitalizePhrasesSubmit(event: FormDataEvent) {
  event.preventDefault();

  const form = document.getElementById("fourth") as HTMLFormElement;
  const result = document.getElementById("fourthResult") as HTMLHeadingElement;

  const formData = new FormData(form);

  const inputData = formData.get("capitalize") as string;

  const capitalizedPhrase = capitalizePhrases(inputData);

  result.textContent = `Resultado: ${capitalizedPhrase}`;
}

function isPalindromeAnagramSubmit(event: FormDataEvent) {
  event.preventDefault();

  const form = document.getElementById("fifth") as HTMLFormElement;
  const result = document.getElementById("fifthResult") as HTMLHeadingElement;

  const formData = new FormData(form);

  const inputData = formData.get("palindrome_anagram") as string;

  const isPalindrome = isPalindromeAnagram(inputData);

  result.textContent = `Resultado: ${isPalindrome}`;
}
