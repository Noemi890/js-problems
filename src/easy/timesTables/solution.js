timesTable = (number) => {
    const stopNumber = 12
    const myTable = []
    for (let i = 1; i <= stopNumber; i++) {
        let myNumber = number * i
        myTable.push(myNumber)
    }
    return myTable
}

console.log('Times Table 7', timesTable(7))
console.log('Times Table 2', timesTable(2))