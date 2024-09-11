//String data types
let courseTitle = "frontend development"
let salary = '3000'
let greeting = `Hello Everyone`
const matricNum = `4010135091`

// let gender
let age = 99
gender = `male`

// matricNum = `7239832932`

// variable reassignment
greeting = `Hello World`

// nesting a string
let quote1 = "Mohammed ali say \"suffer now, and live the rest of your life a champion\""

let quote2 = '"'

let quote3 = "Mohammed ali say 'suffer now, and live the rest of your life a champion'"

let quote4 = 'It\'s coming home'

let quote5 = "It's coming home"


// concartinating strings(+)
let aboutMe = 'I am a '+ gender + ` I teach ` + courseTitle + ' and I am ' + age + ' years old'

let aboutMe2 = `I am a ${gender}, I teach ${courseTitle} and I am ${age} years old. I was born in ${new Date().getFullYear() - age}!`


console.log(gender)
console.log(quote2)
console.log(quote4)
console.log(quote3)
console.log(quote5)



// lenght of a string
console.log(aboutMe.length)







// boolean
let maritalstatus = true
let maritalstatus2 = false

// undefined
let tutorsAge;  // Automatically becomes undefined

// null
let ethicalHackingClass = null

// Objects: This data type has other sub data types in it
// Arrays
let husaynData = ['Husayn', 'Alawiye', '20 years', 'guy']
let ages = [12, 24, 89, 100, 54]

// Objects
let fawazData = {
    fname: 'Fawaz',
    lname: 'Yinka',
    age: '26',
    genda: 'male',
    isMarried: true
}


// String
let myName = "Husayn"

// Number
let myAge = 18

// Boolean
let amIMariied = false

// Undefined 
let dadsAge;

// Null,
let tomorrow = null

// Object
let myBox = ['body cream', 'hair wax', 'vitamin c serum'] //Array
let boxItems = [4, 3, 6] //Array
let myBoxData = {
    bodyCream:'Nivea',
    fileName: 'my tools',
    hairWax: 'Alovera',
} //Object.literal


let currentAge = 4
if(currentAge >= 16){
    console.log('You are eligible')
}else if(currentAge <= 16 && currentAge > 10){
    console.log('You are not eligible')
}else(
    console.log("Wait till you are grown up")
)

//Data types in JavaScript
//strings
let name = 'Fawaz'

//numbers
let num = 1.8
let num3 = 18

//boolean
let maritalStatus = true
let maritalStatus2 = false



//Object literals
let chisomData = {
fname: 'Chisom',
lname: 'Yinka',
age: 26,
gender: 'female',
isMarried: true
}


// JAVASCRIPT OPERATORS
//Arithmetic operators
//addition operator (+)
let num1 = 2;
let num2 = 3
let sumOfnum = num1 + num2;
// Note: It can also be used as a concatenation operator

//substraction operator (-)
//multiplication operator (*)
//division operator (/)

//modulus operator (%): this returns the remainder of a division operation from left to right.
let mod = 5 % 2 //answer is 1
let mod2 = 7 % 5 //answer is 2

//Increment and Decrement operators
//increment (++)
++num1
num1++
console.log(num1)

//decrement (--)
num2--
console.log(num2)

num2 += 5
console.log(num2)

//assignment operators
// =
let names = 'Fawaz Adebowale'


//Comparison operators
//greater than (>)
//less than (<)
// equal to
// loosely equal to or loose-type equal to (==)
// strict equal to (===)
//not equal to
// loosely equal to or loose-type equal to (!=)
// strict equal to (!==)
//greater than or equal to (>=)
//less than or equal to (<=)


//Logical Operators
//AND operators (&&): this returns true when all values or operands are true
//OR operators (||): this returns true when either of the values or operands is true
//NOT operators (!): this returns the inverse of a value


//Ternary operators (?:)


//Conditionals In JavaScript
//if statement
/* if(condition){
action
}
*/
let legalAge = 18;
/*
if(legalAge >= 18){
console.log("I am an adult")
}
*/

if(legalAge >= 18){
console.log("I am an adult")
}else{
console.log('I am not an adult')
}


if(legalAge >= 18){
console.log("I am an adult")
}else if(legalAge >= 13 && legalAge < 18){
console.log('I am a teenager')
}else{
console.log('I am a child')
}

// LOOPS
// 1. for loops
// 2. while loops
// 3. do...while loops

//for loop
// for (initializer; condition; increment/decrement factor) {
// const element = array[index];

// }
for(let index = 1; index < 6; index ++){
console.log('Welcome')
}

//Calculate average ages in class

// step 1:::: Collect ages
// step 2:::: stoore/save ages
let stdAges = [23, 54, 82, 91, 10, 25, 63];
let sum = 0;

//step 3:: add up the ages
for(let index = 0; index < stdAges.length; index++){
//total num of ages
sum += stdAges[index];
}
let averageAge = sum/stdAges.length // 348/7
console.log(averageAge)

//Do...while loop
let i = 5
do {
console.log(i);
i++
} while (i < 4);

//while loop
let j = 8
while (j < 4) {
console.log(j)
}