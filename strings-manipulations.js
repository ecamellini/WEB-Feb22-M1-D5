console.log("--------------STRINGS MANIPULATION-------------\n")

let longString = "This is a long string that I want to manipulate in some ways..."
// STRING ARE ACTUALLY ARRAYS. ARRAYS OF CHARACTERS.

console.log("--------------STRINGS ARE ARRAYS-------------\n")

console.log("The third character of the string is",  longString[2])

console.log("The length of the string is", longString.length)

console.log("Let's print every char of the string...")

// Syntactic sugar for the code below, the same thing
for (let char of longString) {
    console.log(char)
}

// EXACTLY THE SAME THING
// for (let index = 0; index < longString.length; index++) {
//     console.log(longString[index])
// }

// EXACTLY THE SAME THING
// let index = 0
// while (index < longString.length) {
//     console.log(longString[index])
//     index++
// }


// Since strings are arrays...
// In general, with arrays, you use the DOT to access some functionalities, some functions
// FUNCTIONS TO MANIPULATE THE ARRAY
// There are tens of funcions that you can use

// The same happens with strings.

console.log("\n---------SOME STRING MANIPULATION FUNCTIONS----------")

console.log("\nTo uppercase:");
console.log(longString.toUpperCase())

console.log("\nSplit:");
let words = longString.split(' ')
console.log(words)
console.log("The word count is:", words.length)

console.log("\nSlicing:");
console.log(longString.slice(0, 21))
