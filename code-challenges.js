// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
var temp = 216

if(temp < 212){
    console.log(`The temperature is ${temp}, which is below the boiling point`); // logs temp is less than boiling point
} else if(temp > 212){
    console.log(`The temperature is ${temp}, which is above the boiling point`); // logs temp is more than boiling point
} else{
    console.log(`The temperature is ${temp}, which is at the boiling point`);
} // logs the temp is equal to the boiling point

// -----NOTE * Since this problem had 3 different outcomes, I used an if else statement. I used the less than greater than operators to allow for any temperature to be given. I tried template literals to help reflect what temp was input by the end user.



// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp = 350
// // var temp = 212
var temp = 42
if(temp === 42){
    console.log("42 is below the boiling point");
} else if(temp === 350){
    console.log("350 is above the boiling point");
} else if(temp === 212){
console.log("212 is at the boiling point");
}
//-------NOTE * Piggy backing off the first code, I change the parameters to be more specific to the given variables by using the ===. 


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

var combined = myNumbers1.concat(myNumbers2)
// console.log(combined);
console.log(combined.length);
//------- NOTE * On this problem, I simply reasoned that since I was already given you two variables, that a third one would be needed to hold them both.


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"


var currentCohort = "Echo 2021"

var reversed = currentCohort.split("")
console.log(reversed.reverse().join(""));
//-------NOTE * This problem gave me some trouble! I didn't realize that two built in methods could be combined like this. I saw this format while researching another problem and gave it a try. I was excited to see the answer pop up.


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]


for(let i = 0; i < myArray.length; i++){
  if(myArray[i] % 2 === 0){
      console.log("even");
  }else{
      console.log("odd");
  }
}
// -------NOTE * This problem took me a long while to figure out. I had to play and play with it. Saying out loud line by line what the formatting in the "for" method did and represented. Finally I tried myArray[i] as a guess and found a happy outcome.

// // --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var number1 = 58
// var number2 = 100

// var number1 = 27
// var number2 = 24

var number1 = 27
var number2 = 27

if(number1 < number2){
    console.log(number2 - number1)
} else if(number1 > number2){
    console.log(number1 - number2)
} else{
    console.log("The numbers can not be equal!");
}
// ------NOTE * This problem was straight forward with me. I knew 3 outcomes would be needed so an "if else" state would be needed. I created additional variables that were equal to help the outcome if the user input two numbers that were equal.