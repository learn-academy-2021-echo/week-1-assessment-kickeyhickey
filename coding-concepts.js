// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.length)

// a) Your answer: The output will be 9
// b) Verify and explain: I was correct. The .length method simply gives you the character length of a string.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: The outcome will be "l". 
// b) Verify and explain:  The [3] next to the varable is logging the string but only a specific character in that string. In this case the third index which is the second "l" in "hello"


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: I believe it will return the string in the index [1] position in the languages array. Specifically "Ruby". 
// b) Verify and explain: languages[1] = languages[index]. This is because in this case "index" is a varable that holds the value of of 1.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will return a value of ["SATURDAY", "SUNDAY"]
// b) Verify and explain: I was wrong! It slipped my mind that this method doesn't work on arrays in this way. It is a string function.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: It will return "string", "string", "string"
// b) Verify and explain: I was wrong. It returned "number". I didn't immediatly make the connection that .length returns a number, therefore, the "typeof" function would be looking at the .length outcome. Then again, console.log(typeof dataTypes) game me back "object". Still struggling with teh difference between object vs string. Will be researching this more. 
