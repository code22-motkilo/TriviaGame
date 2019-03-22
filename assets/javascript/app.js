

$(document).ready(function () {

    //Object of Trivia Questions/answers for the game
    triviaQuestions = [{
    
        question_ID: 1,
        question: "What actor played the computer nerd in War Games?",
        answers: {
            correct: "Mathew Broderick",
            incorrect_1: "Ferris Bueller",
            incorrect_2: "a monkey",
            incorrect_3: "a robot",
            incorrect_4: "Joshua"
            },
    },

    {
        question_ID: 2,
        question: "What was the game used to beat the WOPR?",
        answers:{
            correct: "tic-tac-toe",
            incorrect_1: "hopscotch",
            incorrect_2: "jenga",
            incorrect_3: "chess",
            incorrect_4: "dodge-balls"
        },

    },
    {
        question_ID: 3,
        question: "What city did the hacker David Lightman live in?",
        answers: {
            correct: "Seattle",
            incorrect_1: "Tattooine",
            incorrect_2: "San Francisco",
            incorrect_3: "Washington D.C.",
            incorrect_4: "NYC"
        },

    }];

    //variables
    var intervalID;
    var questionInPlay = "";
    var clockRunning = false;
    var time = 10;

    $("#yes-play-button").on("click", function(){
        console.log("You picked the yes button");
        initializeGame();

        // need to get the timer to reset

    });

    $("#no-play-button").on("click", function() {
        console.log("you picked the no button.");
        
    });

    function initializeGame() {
        randomizer();
        startTimer(); 
    }

    function randomizer() {
        var objKeys = Object.keys(triviaQuestions);
        questionInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
        //console.log("This is the question in play: " + questionInPlay);
        theQuestionIs = (triviaQuestions[questionInPlay].question);
        console.log(theQuestionIs);
        correct = (triviaQuestions[questionInPlay].answers.correct);
        incorrect_1 = (triviaQuestions[questionInPlay].answers.incorrect_1);
        incorrect_2 = (triviaQuestions[questionInPlay].answers.incorrect_2);
        incorrect_3 = (triviaQuestions[questionInPlay].answers.incorrect_3);
        incorrect_4 = (triviaQuestions[questionInPlay].answers.incorrect_4);

        $("#question-text").text(theQuestionIs);
        $("#choice-1").text(correct);
        $("#choice-2").text(incorrect_1);
        $("#choice-3").text(incorrect_2);
        $("#choice-4").text(incorrect_3);
        $("#choice-5").text(incorrect_4);

        // Need to find a way to randomize which answers are applied to the buttons

    }

    function update_QA() {
        if (time > 0 ) {
           randomizer();
           // update scores 
        }
        else {
            stopGame();
        }

    }

    // need to develope a score tracker function


    $(".selection").on("click", function() {
        update_QA();
        
    });

        


        
    //========================================
    // Timer Functions
    //========================================

    // Timer Reset
    function reset () {

        time = 0;
    
        $("#display").text("00:00");
    }

    //Count Down 
    function countDown() {

        //decrement time
        time--;
    
        // Convert the time display to a standard format
        var converted = timeConverter(time);
        console.log(converted);
    
        //Display the time in the html
        $("#display").text(converted);
    }

    function startTimer() {

        if(!clockRunning) {
            intervalID = setInterval(countDown, 1000);
            clockRunning = true;
        }
    }

    function stopGame() {
        clearInterval(intervalID);
        clockRunning = false;
    }

    //Time Converter
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        return minutes + ":" + seconds;
    }

});


