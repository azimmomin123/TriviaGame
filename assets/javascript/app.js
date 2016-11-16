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
                rightGif:'http://i.giphy.com/l0HlRP71GpG8FOcMM.gif',
                wrongGif:'http://i.giphy.com/iWREPosOrwzFm.gif',
                time: 'http://i.giphy.com/l4hLT6kXPi9js7xFC.gif',
            	},{
	            question : 'What is the name of the ship that crashed into an iceberg?',
	            answers: [
	            "Gigantic", "Titanic", "Monsterous", "Indestructible"
	            ],
	            rightAnswer: 1
	            }];

//Variable that will hold the setInterval when we execute the run function
var counter;
//Clicking start will display the question and hide the button
$("#start").click(displayQuestion);
$("#start").click(function(){
        $(this).hide();
    });

// Displays the question and runs the timer after the start button is clicked. 
function displayQuestion(){
	run();
	$(".questions").html("")
	console.log(questionNumber);
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
			rightAnswer();
		}else if (x === "false"){
			console.log("wrong");
			wrongAnswer();
		}
	});	
}

function wrongAnswer(){
	stop();
	//Removes the question and choices from page
	$(".content").html("")
	//X is the array index for the right answer
	var x = questions[questionNumber].rightAnswer;
	//This will output the correct anwer and gif
	$(".content").append("Sorry!!!! The correct answer is " + questions[questionNumber].answers[x] + "<br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].wrongGif);
	$(".content").append(imageGif);
	//After selecting an answer we set it to the next question number
	questionNumber++;
	setTimeout(next,3000); //not working here
}

function rightAnswer(){
	stop();
	//Removes the question and choices from page
	$(".content").html("")
	//X is the array index for the right answer
	var x = questions[questionNumber].rightAnswer;
	//This will output the correct anwer and gif
	$(".content").append("Correct!!! <br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].rightGif);
	$(".content").append(imageGif);
	//After selecting an answer we set it to the next question number
	questionNumber++;
	setTimeout(next,3000); //not working here
}

function outOfTime(){
	stop();
	//Removes the question and choices from page
	$(".content").html("")
	//X is the array index for the right answer
	var x = questions[questionNumber].rightAnswer;
	//This will output the correct anwer and gif
	$(".content").append("TOO SLOW, SLOW POKE!!!! The correct answer is " + questions[questionNumber].answers[x] + "<br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].time);
	$(".content").append(imageGif);
	//After selecting an answer we set it to the next question number
	questionNumber++;
	setTimeout(next,3000); //not working here
	
}

//Timer for next question
function next(){
	displayQuestion();
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
		outOfTime();
		questionNumber++;
		number = 6;	
		
	}
}

// Prevents thh timer from going past 0.
function stop(){
	clearInterval(counter);
	//Empty the "questions" div.
    //$(".body").hide();
    //correctAnswers();
}
