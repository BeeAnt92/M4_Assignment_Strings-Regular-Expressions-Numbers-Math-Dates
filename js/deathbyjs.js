//STEP 1
let text = 'webmaster'
let organize = text.match(/\w/g)
console.log(organize.sort().toString().replace(/\,/g, ''))

//STEP 2
let text = 'the quick brown fox'
let capitalize = text.split(' ')
console.log(capitalize.toString().toUpperCase().replace(/\,/g, ' '))
//STEP 3
let text = 'The quick brown fox'
console.log(text.match(/[a,e,i,o,u]/g).length)
//STEP 4
function getRandomNumber() {
    let ranNum = Math.random()
    ranNum = Math.floor(ranNum * 9)
    ranNum = ranNum + 1 
    return ranNum
}

function getRandomLetter() {
    let letters = Math.floor(Math.random() * 26)
    let ranLet = String.fromCharCode(65 + letters)
    return ranLet
}

console.log(getRandomLetter() + getRandomNumber())
//STEP 5
function getLongestCountryName(Longest_Country_Name) {
    const result = Longest_Country_Name.sort((a, b) => b.length - a.length)
    return result[0] 
}
let longestCountryName = ["Australia", "Germany", "United States of America"]    
console.log(getLongestCountryName(longestCountryName))