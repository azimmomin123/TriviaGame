// Define number of seconds to answer questions
var number = 6;
var questionNumber = 0;

// Question, Choices, Answers Array
var questions = [{
                question : 'Who won the 2016 NBA championship?',
                answers: [
                "Golden State Warriors",
                "Cleveland Cavalier",
                "Atlanta Falcons",
                "Houston Rockets",
                ],
                rightAnswer: 1,
                rightGif:'http://gph.is/2fBm2VW',
                wrongGif:'http://gph.is/1u24Kkf',
            	},{
	            question : 'What is the name of the ship that crashed into an iceberg?',
	            answers: [
	            "Gigantic", "Titanic", "Monsterous", "Indestructible"
	            ],
	            rightAnswer: 1
	            }];

//Variable that will hold the setInterval when we execute the run function
var counter;
$("#start").click(displayQuestion);

// Displays the question and runs the timer after the start button is clicked. 
function displayQuestion(){
	run();
	$(".questions").html("")
	$(".displayQuestion").html(questions[questionNumber].question);
	// Displays each answer Choice
	for(var i = 0; i < 4; i++){
		var q = $("<button>");
		q.addClass("choice");
		// Gives each button a true of false depending on if its the correct answer.
		if (questions[questionNumber].rightAnswer === i){
			q.attr("value", true);
		}else{
			q.attr("value", false);
		}

		q.text(questions[questionNumber].answers[i]);
	 	$(".questions").append(q);

	 	//if ($(.q.attr("value")) == true)
	}

	//Givine the class "choice" a onclick function
	$(".choice").on("click", function(){
		var x = $(this).attr("value");

		if (x === "true"){
			console.log("right");
			showRightAnswer();
		}else if (x === "false"){
			console.log("wrong");
			showWrongAnswer();
		}
	});	
}

function showRightAnswer(){
	$(".content").html("")
}

// Starts the Timer
function run (){
	counter = setInterval(decrement, 1000);
}
// Reduces the timer each second and displays it. Alert is shown when timer is finished.
function decrement(){
	number --;

	$("#timer").html("<h2>Time Remaining: " + number + "</h2>");

	//If timer runs out then switch to the next question
	if (number === 0){
		stop();
		questionNumber++;
		number = 6;
		displayQuestion();
	}
}

// Prevents thh timer from going past 0.
function stop(){
	clearInterval(counter);
	//Empty the "questions" div.
    //$(".body").hide();
    //correctAnswers();
}
