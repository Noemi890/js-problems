sumNumbersStandard = (num1, num2) => {
    let sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i
    }
    return sum
}

console.log('expect 52', sumNumbersStandard(3, 10))
console.log('expect 200', sumNumbersStandard(5, 20))
console.log('expect 5050', sumNumbersStandard(1, 100))


// Another approach

helperFunction = () => {
    let arrayOfNumbers = []
    for (let i = 0; i <= 100; i++) {
        arrayOfNumbers.push(i)
    }
    return arrayOfNumbers
}

sumNumbersArray = () => {
    const initialValue = 0
    return helperFunction().reduce((previous, current) => previous + current, initialValue )
}

console.log('my array, expected 5050', sumNumbersArray())