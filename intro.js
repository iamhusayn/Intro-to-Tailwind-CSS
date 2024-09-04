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