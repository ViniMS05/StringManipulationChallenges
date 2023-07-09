var separators = /[.!?;]/g;
var revertPhrasesOrder = function (text) {
    var parsedText = text.trim();
    var sentences = text.match(separators);
    var separatedText = parsedText
        .split(separators)
        .filter(function (item) { return item !== ""; });
    separatedText.forEach(function (phrase, idx) {
        separatedText[idx] = phrase + sentences[idx];
    });
    var arr = [];
    for (var i = 0; i < separatedText.length; i++) {
        var reversedPhraseOrder = separatedText[i].split(" ").reverse().join(" ");
        arr.push(reversedPhraseOrder);
    }
    var reversedTextOrder = arr.reverse().join("");
    return reversedTextOrder;
};
var removeDuplicatedCharacters = function (text) {
    var charArr = text.trim().split("");
    var unduplicatedCharactersArray = [];
    charArr.forEach(function (char) {
        if (!unduplicatedCharactersArray.includes(char) || char === " ") {
            unduplicatedCharactersArray.push(char);
        }
    });
    var unduplicatedCharactersString = unduplicatedCharactersArray.join("");
    return unduplicatedCharactersString;
};
var isPalindromeAnagram = function (word) {
    var revesedWord = word.trim().split("").reverse().join("");
    if (word === revesedWord) {
        return true;
    }
    return false;
};
function longestPalindromeSubstring(text) {
    var longestPalindrome = "";
    for (var startIndex = 0; startIndex < text.length; startIndex++) {
        for (var endIndex = startIndex + 1; endIndex <= text.length; endIndex++) {
            var substring = text.substring(startIndex, endIndex);
            if (isPalindromeAnagram(substring) &&
                substring.length > longestPalindrome.length) {
                longestPalindrome = substring;
            }
        }
    }
    return longestPalindrome;
}
var capitalizePhrases = function (text) {
    var phrasesArray = text.trim().split(separators);
    var sentences = text.match(separators);
    var capitalizedPhrasesArray = [];
    phrasesArray.forEach(function (item, idx) {
        if (!item) {
            phrasesArray.splice(idx, 1);
            return;
        }
        var charsArray = item.trim().split("");
        charsArray.forEach(function (char, indx) {
            if (indx === 0) {
                charsArray[indx] = char.toUpperCase();
            }
        });
        charsArray.push(sentences[idx]);
        var capitalizedPhrase = charsArray.join("");
        capitalizedPhrasesArray.push(capitalizedPhrase);
    });
    var capitalizedText = capitalizedPhrasesArray.join(" ");
    return capitalizedText;
};
function reversedPhraseOrderSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("first");
    var result = document.getElementById("firstResult");
    var formData = new FormData(form);
    var inputData = formData.get("word_order");
    var reversedPhrase = revertPhrasesOrder(inputData);
    result.textContent = "Resultado: ".concat(reversedPhrase);
}
function removeDuplicatedCharactersSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("second");
    var result = document.getElementById("secondResult");
    var formData = new FormData(form);
    var inputData = formData.get("duplicated_chars");
    var removedDuplicateds = removeDuplicatedCharacters(inputData);
    result.textContent = "Resultado: ".concat(removedDuplicateds);
}
function longestPalindromeSubstringSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("third");
    var result = document.getElementById("thirdResult");
    var formData = new FormData(form);
    var inputData = formData.get("palindrome_substring");
    var longestPalindrome = longestPalindromeSubstring(inputData.toLowerCase());
    result.textContent = "Resultado: ".concat(longestPalindrome);
}
function capitalizePhrasesSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("fourth");
    var result = document.getElementById("fourthResult");
    var formData = new FormData(form);
    var inputData = formData.get("capitalize");
    var capitalizedPhrase = capitalizePhrases(inputData);
    result.textContent = "Resultado: ".concat(capitalizedPhrase);
}
function isPalindromeAnagramSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("fifth");
    var result = document.getElementById("fifthResult");
    var formData = new FormData(form);
    var inputData = formData.get("palindrome_anagram");
    var isPalindrome = isPalindromeAnagram(inputData.toLowerCase());
    result.textContent = "Resultado: ".concat(isPalindrome);
}
