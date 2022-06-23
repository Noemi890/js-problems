Power = (num, cube) => {

    let power = 0
    for (let i = 0; i < num.length; i++) {
        power += Math.pow(num[i], cube)
    }
    return power
}

console.log('Power with standard for Loop', Power([1, 5, 9], 3))

//Another approach

anotherPower = (num, cube) => {
    let power = 0
    num.forEach(element => {
        power += Math.pow(element, cube)
    })
    return power
}

console.log('power with forEach', anotherPower([1, 5, 9], 3))