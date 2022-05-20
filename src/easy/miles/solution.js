function miles(kilometers) {
    let milesRounded = kilometers / 1.60;
    return Math.ceil(milesRounded);
}

console.log(miles(10))
console.log(miles(25.3))