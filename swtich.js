console.log("------------------SWITCH STATEMENT---------------")

let language = "EN" // We wrote this here, but imagine that this comes from the language of your browser

// In reality this comes from the user, with a logic similar to the following
// When the page loads: {
//     let language = getLanguageFromBrowserLanguage()
// }
// Beware, this one above is not JS code, it's just an example in pseudo-code that I just invented :)

// // I want to print a message based on the user language
if (language === "IT") {
    console.log("Buongiorno e benvenuto!")
} else if (language === "EN") {
    console.log("Good morning and welcome!")
} else if (language === "DE") {
    console.log("Guten morgen!!")
} else if (language === "PT") {
    console.log("Bon dia!")
} else if(language === "ES") {
    console.log("Buenos dias!")
} else if (language === "NG") {
    console.log("Eka ro!!")
} else {
    console.log("Language not supported!")
}


// // Doing something in many different ways based on
// // many conditions all on the same variable: the language
// // The conditions only check if the variable is equal to a certain value,
// // otherwise to another one, otherwise to another one, etc etc.

// // We can solve cases like this one using a switch.
// // It is JUST SYNTACTIC SUGAR FOR A CHAIN OF IF-ELSEIF-ELSEIF....
switch (language) {
    case "IT":
        console.log("Buongiorno e benvenuto!")
        break;

    case "EN":
        console.log("Good morning and welcome!")
        break;

    case "ES":
        console.log("Buenos dias!")
        break;

    case "NG":
        console.log("Eka ro!!")
        break;

    default: // otheriwise, in all other cases
        console.log("Language not supported!")
        break;
}
