//STEP 1
let name = prompt('Enter your name here')
alert(name.length)
//STEP 2
let name = prompt('Enter your name here')
let number = prompt('Enter a number no higher than the number of letters in your name')
alert(name.charAt(number))
//STEP 3
let name = prompt('Enter your first name here')
let lastName = prompt('Enter your last name here')
alert(`Your name is: ${name.concat(lastName)}`)
//STEP 4
let text = 'The quick brown fox jumps over the lazy dog'
alert(text.indexOf('fox'))
//STEP 5
let text = 'The quick brown fox jumps over the lazy fox'
alert(text.lastIndexOf('fox'))
//STEP 6
let text = 'The quick brown fox jumped over the lazy dog'
let fullName = prompt('Enter your full name')
alert(text.replace('the lazy dog', fullName))
//STEP 7
let text = 'The quick brown fox jumps over the lazy dog'
let word = prompt('Enter a word from the quote \'The quick brown fox jumps over the lazy dog\'')
alert(text.search(word))
//STEP 8
let old_string = 'The quick brown fox jumps over the lazy dog'
let new_string = old_string.slice(31, 43)
alert(new_string.toUpperCase())
//STEP 9
let text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
alert(text.trim().toLowerCase().toString())
//STEP 10
let text = 'the quick brown fox jumps over the lazy dog'
alert(text.replace('the', 'The'))