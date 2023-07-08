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
