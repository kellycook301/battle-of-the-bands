// changed 'const' to 'let' so it can be called again
// changed 'let bandNumber = 1' to 'let bandNumber = 0'
// This is so that when you console.log the first band, it will be returned as
// 1. "band name"
let bandNumber = 0

// creating a function so that you are adding a number plus ". " followed by the name
// of the band.

const takeNumber = function (name) {
    // adding 1 each time
    bandNumber += 1;
    // returning what the bandNumber is plus a period followed by a space
    // and lastly, the name of the band
    return bandNumber + ". " + name;
}

// invoking the function "takeNumber" with whatever you want in the parantheses
// as the name of the band.
// the variable name must be called in the console log. They must match.
const scum = takeNumber("Galactic Scum")
console.log(scum)

// Same rules apply to the two below.
const great = takeNumber("The Best Band Ever")
console.log(great)

const wow = takeNumber("My Cool Band")
console.log(wow)

const 