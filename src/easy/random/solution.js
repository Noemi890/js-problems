randomNumber = (num1, num2) => Math.ceil(Math.random() * (num1 - num2) + num2)


console.log('first attempt', randomNumber(20, 5))
console.log('second attempt', randomNumber(5, 2))