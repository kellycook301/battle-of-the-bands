// function written with a thicc arrow.

let testQuestion = 0

// See how the argument is written in the parantheses. After that there is the 
// thicc arrow. Then curly brackets.
const makeQuestion = (question) => {
    testQuestion += 1
    return testQuestion + ". " + question
}

const question1 = makeQuestion("Who am I?")
console.log(question1)

const question2 = makeQuestion("Who are you?")
console.log(question2)

const question3 = makeQuestion("What do you want?")
console.log(question3)

const question4 = makeQuestion("What are you looking for?")
console.log(question4)

const question5 = makeQuestion("Why are you like this?")
console.log(question5)