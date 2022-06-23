fibonacci = () => {
    const myArray = []
    let firstNumber = 1
    let secondNumber = 1
    let sum = 0
    for (let i = 1; i < 100; i++) {
        if (secondNumber === 1) {
            myArray.push(firstNumber, secondNumber)
            sum = firstNumber + secondNumber
            firstNumber = secondNumber
            secondNumber = sum
        }
        else {
        myArray.push(firstNumber+secondNumber)
        sum = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = sum
        }
    }
    return myArray
}

console.log(fibonacci())