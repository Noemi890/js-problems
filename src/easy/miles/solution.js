function miles(kilometers) {
    let milesRounded = kilometers / 1.60;
    if (milesRounded) {

    }
    return Math.round(milesRounded);
}

console.log(miles(10))
console.log(miles(25.3))