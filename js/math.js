//STEP 1
let number = prompt("Enter a number")
console.log(Math.abs(number))
//STEP 2
let number = prompt('Enter a decimal')
console.log(Math.ceil(number))
//STEP 3
let number = prompt('Enter a decimal')
console.log(Math.floor(number))
//STEP 4
let number = prompt("Enter five(5) numbers between 0-9  with commas(,) in between")
let newNumber = number.match(/[0-9]+/g)
console.log(Math.max(...newNumber))
console.log(Math.min(...newNumber))
//STEP 5
let number = prompt('Enter a number')
console.log(Math.sqrt(number))

