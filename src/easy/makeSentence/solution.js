function makeSentence (string) {
    if (["!", "?", "."].includes(string[string.length -1])) {
        return string[0].toUpperCase() + string.substring(1);
    }
    
    return string[0].toUpperCase() + string.substring(1) + "."
}

console.log(makeSentence("oh My God"))
console.log(makeSentence("how you doing?"))