$(document).ready(function () {

    var time = 50;
    var intervalId;

    var timerRunning = false;

// Set function to start timer (Had issues with if statement so that if press start again wouldn't speed up the timer)

    function run() {
        time = 50;
        if (timerRunning) {
            intervalId = setInterval(decrement, 1000);
            timerRunning = true;
        }
    };

    function decrement() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        if (time === 0) {
            alert("Time's up buddy.")
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId)
    }

    $("#startbutton").on("click", run);

// Commented out a function that I tried but also didn't work out

    // var intervalId;
    // var clockRunning = false;
    // var timer = 50;

    // function reset() {
    //     timer = 50;
    //     $("#timer").text("00:50");
    //     stop();
    // }

    // function start() {
    //     if (!clockRunning) {
    //         intervalId = setInterval(decrement, 1000);
    //         clockRunning = true;

    //     if (timer === 0) {
    //         reset();
    //     }
    //     }
    // }

    // function stop() {
    //     clearInterval(intervalId);
    // }

    // function decrement() {
    //     timer--;
    //     $("#timer").text(timer);
    // }

    // function timeConverter(t) {
    //     var minutes = Math.floor(t / 60);
    //     var seconds = t - (minutes * 60);
    //     if (seconds < 10) {
    //         seconds = "0" + seconds;
    //     }
    //     if (minutes === 0) {
    //         minutes = "00";
    //     }

    //     else if (minutes < 10) {
    //         minutes = "0" + minutes;
    //     }
    //     return minutes + ":" + seconds;
    // }

// Set variables for correct, incorrect, and unaswered questions

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Set array for questions, choices, and answer

    var questions = [
        {
            question: "What is 2 + 2?",
            choices: {
                a: "Fish",
                b: "4",
                c: "22",
                d: "All the above"
            }
            ,
            correctChoice: "d"
        },
        {
            question: "What goes around the world but also stays in the corner?",
            choices: {
                a: "My self esteem",
                b: "My credit card",
                c: "A stamp",
                d: "A network"
            }
            ,
            correctChoice: "c"
        },
        {
            question: "How long did it take me to finish this assignment?",
            choices: {
                a: "10 hours",
                b: "20 hours",
                c: "You didn't finish (sadface)",
                d: "5 hours"
            }
            ,
            correctChoice: "c"
        },
        {
            question: "There are 5 apples in a barrel. You take 3. How many apples do you have now?",
            choices: {
                a: "3",
                b: "5",
                c: "8",
                d: "Good cholesterol"
            }
            ,
            correctChoice: "3"
        },
        {
            question: "Best gaming platform?",
            choices: {
                a: "XBOX",
                b: "PC MASTER RACE",
                c: "PLAYSTATION",
                d: "I'm broke"
            }
            ,
            correctChoice: "b"
        }

    ];

// Make function to generate questions and pop up on screen (Unfinished)

    function questionShow() {
        for (var i = 0; i < questions.length; i++) {
            var answers = questions[i];

        }
    }


})

// Create function and if statements for comparing userchoice with correctChoice

// Display correct, incorrect, and unanswered when timer reaches end