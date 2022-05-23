const distance = (milesPerHour, minutesTravelled) => {
    let hoursTravelled = minutesTravelled / 60;
    console.log("My hours", hoursTravelled)
    return Math.round(hoursTravelled * milesPerHour);
}

console.log("distance", distance(25, 120))

console.log("distance", distance(70, 500))