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
        answer: 1
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choice: [" quotes", " curly brackets", " parentheses", " square brackets"],
        answer: 2
    },
    {
        title: "An Array's index begins at what numerical value:",
        choice: [" 0", " -1", " 1", " Where ever you want it to"],
        answer: 0
    },
    {
        title: "This comparison a >= b eqates to: ",
        choice: [" a is less then or equal to b", " a is greater then b", " a is greater then or equal to b", " a is angry eyebrows face b"],
        answer: 2
    },
    {
        title:" Javescript DOES NOT have____",
        choice: [" functions"," arrays", " objects", " coffee :'("],
        answer: 3
    },
];

let display = document.querySelector('#time');
let oneMinute = 60;
let currentIndex = 0; // keeps track of current question
let questionLength;
let gameTimer;

if (currentIndex === questionLength){
    gameEnd();
}
// Start timer function
function startTimer(oneMinute, display) {
    gameTimer = setInterval(function () {
        oneMinute--;
        if (oneMinute === 0) {
            clearInterval(gameTimer);
        }
        display.textContent = oneMinute;
    }, 1000);
};
// on game end stop timer, hide questions,  save score
function gameEnd(){
    clearInterval(gameTimer);
    $("#questions").attr("class", "hide")
    $("#scoring-screen").attr("class", "jumbotron");
    $("#end-score").append(display);
}


     // function for on button click
     $("#questions").on("click", '.button', function(){
         console.log(this);
         let answer = parseInt($(this).attr('data-value'));
        console.log(answer);
        // if correct answer, then diplay "Correct"
        // increment currentIndex by 1
        // then displayQuestion()

        // if incorrect, display "Incorrect"
        // subtract 10 from total time (oneMinute)
        // incremember currentIndex by1
        // displayQuestion()

        // *** But include some condition that checks if currentIndex === questionsLength
        // if yes, endGame

        if (answer === questions[currentIndex].answer) {
            ++currentIndex;
           $("#question-title").empty();
           $("#choices").empty();
            displayQuestion();
            console.log(currentIndex);
            gameEnd();
            
        }
        else if (answer !=questions[currentIndex].answer) {
              oneMinute-10000;
            //  ++currentIndex;
            //  $("#question-title").empty();
            //  $("#choices").empty();
            //   displayQuestion(); 

        }
        else if (currentIndex === questionLength) {
            gameEnd();
        }
        
     });

     function displayQuestion() {
        
         titles = questions[currentIndex].title;
        choices = questions[currentIndex].choice; // array
        

        
       
       
    //    show question title
        $("#question-title").append(titles);
        $("#questions").attr("class", "jumbotron");
   
    //  show choices and make buttons loop through for buttons
      
        for (let i = 0; i < choices.length; i++){
            let choiceButton = $("<button>" + choices[i] + "</button>");
            choiceButton.addClass("button");
            choiceButton.attr('data-value', i)
            $("#choices").append(choiceButton);
        }
     }

    // hide starting-paragraph and start timer
    $("#start").on("click", function(){
        event.preventDefault();
        $(".start").addClass("d-none");
        display.textContent = oneMinute;
        startTimer(oneMinute, display); 
        displayQuestion();
    })
        /// CHECKPOINT: CONFIRMED ///


        /// OLD CODE ///
        // for loop for the questions    
    // for (currentIndex = 0; currentIndex < questions.length; currentIndex++){
        
    //    isolated the variables
    //     let titles = questions[currentIndex].title;
    //     let choices = questions[currentIndex].choice; // array
    //     let answers = questions[currentIndex].answer;
       
       
    // //    show question title
    //     $("#question-title").append(titles);
    //     $("#questions").attr("class", "jumbotron");
   
    // //  show choices and make buttons loop through for buttons
      
    //     for (let i = 0; i < choices.length; i++){
    //         let choiceButton = $("<button>" + choices[i] + "</button>");
    //         choiceButton.addClass("button");
    //         choiceButton.attr('data-value', i)
    //         $("#choices").append(choiceButton);
    //     }

        // return
/// OLD CODE ///

        //Choose answer based on event listner
        //create function check answer
        // 
          
          
    
    

