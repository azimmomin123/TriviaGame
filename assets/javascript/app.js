// Define number of seconds to answer questions
var number = 6;

//Variable that will hold the setInterval when we
//execute the run function
var counter;

function run (){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	number --;

	$(".timer").html("<h2>Time Remaining: " + number + "</h2>");

	if (number === 0){
		alert("Time is Up! Next time do it faster! SLOW POKE!")
		stop();
	}
}

function stop(){
	clearInterval(counter);
	//Empty the "questions" div.
    $(".questions").html("");
    //Empty the "Timer" div.
    $(".timer").html("");
    correctAnswers();
}

function correctAnswers(){
	//Empty the "laps" div.
    $(".questions").html("All Done!");

}

run();