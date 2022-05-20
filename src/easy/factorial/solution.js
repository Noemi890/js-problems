function factorial (num) {
    let newNum = 1;
    for (let i = num; i > 1; i--) {
        newNum *= i;
    }
    return newNum;
}

console.log(factorial(5));
  