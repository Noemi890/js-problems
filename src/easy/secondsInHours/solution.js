
const minutes = 60
const seconds = 60

const getSeconds = (hours) => `The seconds are ${hours * minutes * seconds}`


console.log('expect 3600', getSeconds(1))
console.log('expect 18000', getSeconds(5))