// As a convention, try name functions with VERBS.
// Because they DO SOMETHING.
function printTitle(titleText) {
    // Here we don't want to store this result somewhere.
    // We just want to print it to the console...
    console.log("==========={{{ " + titleText + " }}}===========")

    // So we don't need any return statement
    // RETURN is OPTIONAL.
}
// Every time you write the same code/the same logic with just
// different values (parameters) three times, then it means that
// probably you can define a function for it.

printTitle("DEFINING A FUNCTION")

// Unfortunately, this will work also if you do:
printTitle(123)
printTitle(true)
// You have no way to ENFORCE the type of your parameters.
// That's why TypeScript was invented. SO BE CAREFUL :)

// Here, inside sum, you are not storing the '+', you are storing the result
let sum = 2 + 3
console.log("First sum:", sum)

// We DEFINED a function, that takes:
// - Two parameters named: firstNumber, secondNumber
// - Return value: the sum of the two
function plus(firstNumber, secondNumber) {
    // The two parameters are VISIBLE only inside the function block.
    // The scope of these variables/parameters does not go outside this block
    return firstNumber + secondNumber
}

// Here, firstNumber does not exist. The following line will give me an error.
// console.log(firstNumber)

// We can call the function by name, and we execute it immediatly
// using the round brackets and giving it the parameters it needs.
// This instruction will do the following:
// 1) realize that this is an ASSIGNMENT instruction/statement
// 2) execute the expression on the right side of the equal
//      In the example above it was 2 + 3
//      Here, it is plus(2, 3)
// 3) get the result of the expression, and save it inside the varaible sum
sum = plus(2, 3)
console.log("Second sum (using a function):", sum)

// We can also do more complex things
let complexSum = plus(2,3) + plus(5,4) * plus(4,5)
                 // This is like writing
                 // (2 + 3) + (5 + 4) * (4 + 5)
console.log("More complex sum:", complexSum)


function functionWith4Params(x, y, z, w) {
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(w)
}

// You can also have functions without parameters...
function printGenericError() {
    const error = "\nSomething went wrong..."
    // console.log(error)
}

printGenericError()
printGenericError()
printGenericError()



// You can write functions that have some effects
// even though they do not return/print anything
let number = 0

function incrementNumber(){
    number += 1 // This number variable is defined outside, always referring to the same
    // It's not a paramenter
    // We are modifying the outside variable
}
incrementNumber() // Increment number by 1
incrementNumber() // This is risky: this function has unexpected side effects, it's modifying the value of a var outside it
incrementNumber()
console.log(number)

// Another way to write this, but using return
function increment(numberToIncrement) {
    // We are not assigning something to number, we are not modifying number
    return numberToIncrement + 1
}

increment(number) // Nothing happens to number....
console.log(number)

number = increment(number) // I have to explicitly use the return value
console.log(number)

console.log(increment(300))
