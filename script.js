//  make global variables for questions
//  on start button hide starting-paragraph, start timer, and show questions
//  questions shows a question from the array each with their own listed buttons
//  maybe make a for loop for questions and use return so it only progresses once each time
//  on choices: if correct add point, show correct on feedback, and go to next question. 
//  on choices: Else subtract 10 seconds from time, show wrong on feedback and got to next question.
//  repeat until moved through array
//  at last choice click timeout the timer, show scoring-screen, show time in end-score.
//  on submit log the end-score and intials on the local storage of highscore.html

// array of questions to pull from
let questions = [
    {
        title: "_____ loop one of the most common loops; is used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.",
        choices: ["Four", "For", "Loop D", "conditional"],
        answer: "For"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "An Array's index begins at what numerical value:",
        choices: ["0", "-1", "1", "Where ever you want it to"],
        answer: "0"
    },
    {
        title: "This comparison a >= b eqates to: ",
        choices: ["a is less then or equal to b", "a is greater then b", "a is greater then or equal to b", " a is angry eyebrows face b"],
        answer: "a is greater then or equal to b"
    },
    {
        title:" Javescript DOES NOT have____",
        choices: ["functions","arrays", "objects", "coffee :'("],
        answer: "coffee :'("
    },
]