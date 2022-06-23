const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}

const morseCodeCoverter = (word, object) => {
    let myWord = []
    let wordUC = word
    if (typeof word === "string") {
        wordUC = word.toUpperCase()
    }
    for (let i = 0; i < wordUC.length; i++) {
        
        if (object[wordUC[i]]) {
            myWord .push(object[wordUC[i]])
        }
        else {
            myWord.push(wordUC[i])
        }
    }
    return myWord
}

const swap = (object) => {
    const swapped = Object.entries(object).map(
        ([key, value]) => [value, key]
      );
    
      return Object.fromEntries(swapped);
}

const morseCodeToEnglish = (word, object) => {
    const swapped = swap(object)
    const myMorseCode = morseCodeCoverter(word, object)
    const toEnglish = morseCodeCoverter(myMorseCode, swapped)
    return toEnglish.join('')
}

console.log('my result', morseCodeCoverter('Hello, my name is Noemi', morseCode))
console.log('my result to English', morseCodeToEnglish('Hello, my name is Noemi', morseCode))
