let sum = 0;

function threeOrFive(num1, num2, maxNum) {
  for (let i= 0; i <= maxNum; i++) {
    if (i % num1 === 0) {
      sum += i;
    }
  }
  for (let j= 0; j <= maxNum; j++) {
    if (j % num2 === 0) {
      sum += j;
    }
  }
  return sum;
}

console.log("Sum of 3", threeOrFive(3, 0, 1000))
console.log("Sum of 5", threeOrFive(0, 5, 1000))
console.log("Total Sum", threeOrFive(3, 5, 1000))