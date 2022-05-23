const list = (number1, number2) => {
    const myArray = [];
    let myNumber1 = 0;
    for (let i = 0; i < number2; i++) {
        myNumber1 += number1;
        myArray.push(myNumber1)
    }

    return myArray;
}

console.log("array", list(5, 10))

console.log("array number 2", list(2, 20))