const double = (string) => {
    let doubles = "";
    for (let i = 0; i < string.length; i++) {
        doubles += string[i].repeat(2)
    }
    return doubles
}

console.log("double string", double("How you doing?!"))
console.log("double string", double("Oh My God!"))
console.log("double string", double("It is all a MOO point"))