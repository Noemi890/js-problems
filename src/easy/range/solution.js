const difference = (list) => {
    const maxNumber = Math.max(... list)
    console.log("MaxNumber", maxNumber)
    const minNumber = Math.min(... list)
    console.log("MinNumber", minNumber)

    return maxNumber - minNumber;
}


console.log("Result", difference([2, 9, 10, 5, 3, 12]))

console.log("Result", difference([5, 25, 3, 7, 10, 110]))