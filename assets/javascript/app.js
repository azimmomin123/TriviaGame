// Define number of seconds to answer questions
var number = 3;
var questionNumber = 0;
var wrong = 0;
var correct = 0;
var unanswered = 0;


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
	            question : 'Who founded the game of basketball?',
	            answers: [
	            "Dean Smith", 
	            "John Wooden", 
	            "Red Auerbach", 
	            "James Naismith"
	            ],
	            rightAnswer: 3,
                rightGif:'http://i.giphy.com/xTiTndWekwvdJrFpcI.gif',	
                wrongGif:'http://i.giphy.com/Z3TYZ4Jv2sMne.gif',		
                time: 'http://i.giphy.com/HKIfI1mg2PX6o.gif',		
	            },{
	            question : 'Which NBA team plays at Madison Square Garden??',
	            answers: [
	            "Chicago Bulls", 
	            "New Jersey Nets", 
	            "New York Knicks", 
	            "Orlando Magic"
	            ],
	            rightAnswer: 2,
                rightGif:'http://i.giphy.com/l0K4ctr53d203FYpq.gif',	
                wrongGif:'http://i.giphy.com/yeVBYWLaNf2bS.gif',		
                time: 'http://i.giphy.com/l4hLT6kXPi9js7xFC.gif',		//need to change
	            },{
	            question : 'Who founded the game of basketball?',
	            answers: [
	            "Dean Smith", 
	            "John Wooden", 
	            "Red Auerbach", 
	            "James Naismith"
	            ],
	            rightAnswer: 3,
                rightGif:'http://i.giphy.com/12ue2nYFnV3m3m.gif',	
                wrongGif:'http://i.giphy.com/wk8scedJ5erFC.gif',		
                time: 'http://i.giphy.com/l4hLT6kXPi9js7xFC.gif',		//need to change
	            },{
	            question : 'Which NBA team plays at Madison Square Garden??',
	            answers: [
	            "Chicago Bulls", 
	            "New Jersey Nets", 
	            "New York Knicks", 
	            "Orlando Magic"
	            ],
	            rightAnswer: 2,
                rightGif:'http://i.giphy.com/l0HlRP71GpG8FOcMM.gif',	//need to change
                wrongGif:'http://i.giphy.com/FrohR8ByEivHG.gif',		
                time: 'http://i.giphy.com/l4hLT6kXPi9js7xFC.gif',		//need to change
	            }];

//Variable that will hold the setInterval when we execute the run function
var counter;
//Clicking start will display the question and hide the button
$("#start").click(function(){
		displayQuestion();
		//Hides the button after click
        $(this).hide();
    });

// Displays the question and runs the timer after the start button is clicked. 
function displayQuestion(){
	//Running this part of the if only if the there are enough questions for user input
	var y = questionNumber + 1;
	if (questions.length >= y){
		run();
			$(".content").html("");
			//Displays the question in the console
			console.log(questions[questionNumber].question);
			//appends the question in to the content tag
			$(".content").append(questions[questionNumber].question + "<br>");
			// Displays each answer Choice
			for(var i = 0; i < 4; i++){
				//Button attribute given to each choice
				var q = $("<button>");
				//giving each button a choice class
				q.addClass("choice");
				// Gives each button a true of false depending on if its the correct answer.
				if (questions[questionNumber].rightAnswer === i){
					q.attr("value", true);
				}else{
					q.attr("value", false);
				}

				q.text(questions[questionNumber].answers[i]);
				//appends q with everything that is set above
			 	$(".content").append(q);
			}

			//Givine the class "choice" a onclick function
			$(".choice").on("click", function(){
				var x = $(this).attr("value");
				//Checking if true then calling appropriate display to the user
				if (x === "true"){
					console.log("right");
					rightAnswer();
				}else if (x === "false"){
					console.log("wrong");
					wrongAnswer();
				}
			});	
	}else{
		//gameOver when there are no more questions left
		gameOver();
	}
		
}

function wrongAnswer(){
	stop();
	//Removes the question and choices from page
	$(".content").html("");
	//X is the array index for the right answer
	var x = questions[questionNumber].rightAnswer;
	//This will output the correct anwer and gif
	$(".content").append("Sorry!!!! The correct answer is " + questions[questionNumber].answers[x] + "<br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].wrongGif);
	$(".content").append(imageGif);
	//Counter for wrong answers
	wrong++;
	//Display to the user the wrongAnswer screen for X seconds and 
	//then calls next function to display next question
	setTimeout(next,3000); 
}

function rightAnswer(){
	stop();
	//Removes the question and choices from page
	$(".content").html("");
	//This will output the correct anwer and gif
	$(".content").append("Correct!!! <br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].rightGif);
	$(".content").append(imageGif);
	//Counter for correct answers
	correct++;
	//Display to the user the wrongAnswer screen for X seconds and 
	//then calls next function to display next question
	setTimeout(next,3000); 
}

function outOfTime(){
	stop();
	//Removes the question and choices from page
	$(".content").html("");
	//X is the array index for the right answer
	var x = questions[questionNumber].rightAnswer;
	//This will output the correct anwer and gif
	$(".content").append("TOO SLOW, SLOW POKE!!!! The correct answer is " + questions[questionNumber].answers[x] + "<br>");
	var imageGif = $("<img>").attr("src", questions[questionNumber].time);
	$(".content").append(imageGif);
	//Counter for unanswers
	unanswered++;
	//Display to the user the wrongAnswer screen for X seconds and 
	//then calls next function to display next question
	setTimeout(next,3000); 
}

//Timer for next question
function next(){
	number = 3;
	//After selecting an answer we set it to the next question number
	questionNumber++;
	displayQuestion();
}

//GameOver
function gameOver(){
	stop();
	$("#timer").html("");
	$(".content").html("Game Over" + "<br>");
	$(".content").append("Correct Answers: " + correct + "<br>");
	$(".content").append("Incorrect Answers: " + wrong + "<br>");
	$(".content").append("Unanswered: " + unanswered + "<br>");

	$("#start").show();
	
	// Redefine number of seconds to answer questions
	number = 3;
	questionNumber = 0;
	wrong = 0;
	correct = 0;
	unanswered = 0;       
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
	if (number <= 0){
		outOfTime();
	}
}

// Prevents thh timer from going past 0.
function stop(){
	clearInterval(counter);
}
