//STEP 1
let date = new Date()
console.log(date.getMonth())
//STEP 2
let month = prompt('Enter a date (XX/XX/XXX')
let date = new Date(month)
console.log(date.toDateString().slice(4, 7))
//STEP 3
let weekend = prompt('Enter a date (XX/XX/XXXX')
let date = new Date(weekend)
let day = date.getDay()
if (day === 0 || day === 6) {
    console.log('That is a weekend day')
} else {
    console.log('That is not a weekend day')
}
//STEP 4
let date = prompt('Enter today\'s date (XX/XX/XXXX)')
let today = new Date(date)
let yesterday = new Date(today - 1)
console.log(`Yesterday was ${yesterday.toDateString()}`)
//STEP 5
let date = prompt('Enter today\'s date (XX/XX/XXXX)')
let today = new Date(date)
console.log(today.toDateString().charAt(0))