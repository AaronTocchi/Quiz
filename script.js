//  make global variables for questions
// create timer
// create loop for questions
//  on start button hide starting-paragraph, start timer, and show questions
//  questions shows a question from the array each with their own listed buttons
//  on choices: if correct add point, show correct on feedback, and go to next question. 
//  on choices: Else subtract 10 seconds from time, show wrong on feedback and got to next question.
//  repeat until moved through array
//  at last choice click timeout the timer, show scoring-screen, show time in end-score.
//  on submit log the end-score and intials on the local storage of highscore.html

// array of questions to pull from
let questions = [
    {
        title: "_____ loop, one of the most common loops; is used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.",
        choice: [" Four", " For", " Loop D", " conditional"],
        answer: "For"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choice: [" quotes", " curly brackets", " parentheses", " square brackets"],
        answer: "parentheses"
    },
    {
        title: "An Array's index begins at what numerical value:",
        choice: [" 0", " -1", " 1", " Where ever you want it to"],
        answer: "0"
    },
    {
        title: "This comparison a >= b eqates to: ",
        choice: [" a is less then or equal to b", " a is greater then b", " a is greater then or equal to b", " a is angry eyebrows face b"],
        answer: "a is greater then or equal to b"
    },
    {
        title:" Javescript DOES NOT have____",
        choice: [" functions"," arrays", " objects", " coffee :'("],
        answer: "coffee :'("
    },
];

// Start timer function
function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent =":" + seconds;

        if (--timer === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

    // hide starting-paragraph and start timer
    $("#start").on("click", function(){
        $(".start").addClass("d-none");
        let oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display); 
        // for loop for the questions    
    for(let i = 0; i < questions.length; i ++){
    //    isolated the variables
        let titles = questions[i].title;
        let choices = questions[i].choice;
        let answers = questions[i].answer;
       
       
    //    show question title
        $("#question-title").append(titles);
        $("#questions").attr("class", "jumbotron");
   
    //  show choices and make buttons loop through for buttons
      
        for(let i = 0; i < choices.length; i ++){
    let choiceButton = $("<button>"+ choices[i] +"</button>");
          
        $("#choices").append(choiceButton);
        }
        return;
          
          
    }
    
    })
