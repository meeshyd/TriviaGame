//game object stores Qs, possible answers, the index of the correct answer, and image URL
var trivia = [
	{
		question: "Which set of ingredients make a Negroni?",
		possibleAnswers: [
		"vodka, gin, bitters, orange peel",
		"Campari, gin, dry vermouth, lemon peel",
		"Campari, vodka, sweet vermouth, lemon peel",
		"Campari, gin, sweet vermouth, orange peel"
		],
		correctAnswer: 3,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Sazerac?",
		possibleAnswers: [
		"whiskey, absinthe, orange juice, Peychaud's bitters, orange peel",
		"cognac or rye whiskey, absinthe, Peychaud's bitters, sugar cube, lemon peel",
		"cognac or rye whiskey, absinthe, lemon juice, lemon peel",
		"whiskey, Peychaud's bitters, sugar cube, lemon peel"
		],
		correctAnswer: 1,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Manhattan?",
		possibleAnswers: [
		"dry vermouth, whiskey, bitters, cherry",
		"sweet vermouth, whiskey, bitters, cherry",
		"bourbon, bitters, sugar cube, orange slice, cherry",
		"bourbon, dry vermouth, sugar cube, orange slice, cherry"
		],
		correctAnswer: 1,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Martini?",
		possibleAnswers: [
		"white rum, dry vermouth, olive or lemon peel",
		"white rum, sweet vermouth, olive or lemon peel",
		"gin, dry vermouth, olive or lemon peel",
		"gin, St. Germain, olive or lemon peel"
		],
		correctAnswer: 2,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Vesper?",
		possibleAnswers: [
		"vodka, gin, Lillet, lemon peel",
		"gin, St. Germain, soda water, lemon peel",
		"vodka, soda water, Lillet, lemon peel",
		"vodka, gin, lemon-lime soda, lemon peel"
		],
		correctAnswer: 0,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Mojito?",
		possibleAnswers: [
		"vodka, mint, water, lemon juice",
		"gin, mint, soda water, lime juice, sugar",
		"gin, white rum, mint, sugar",
		"white rum, mint, soda water, lime juice, sugar"
		],
		correctAnswer: 3,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a White Russian?",
		possibleAnswers: [
		"chocolate liquor, white rum, cream",
		"coffee liquor, white rum, cream",
		"coffee liquor, vodka, cream",
		"coffee liquor, vodka, egg white"
		],
		correctAnswer: 2,
		image:"http://pipsum.com/200x310.jpg"
	},
	{
		question: "Which set of ingredients make a Whiskey Sour?",
		possibleAnswers: [
		"whiskey, orange, simple syrup, egg white, orange peel",
		"whiskey, lemon juice, simple syrup, egg white, lemon peel",
		"whiskey, bitters, egg white, lemon peel",
		"whiskey, dry vermouth, lemon juice, egg white, lemon peel"
		],
		correctAnswer: 1,
		image:"http://pipsum.com/200x310.jpg"
	}
];
//global variables
var $triviaContainer = $('#trivia-container');
var $timerDiv = $('#timer-div');
var $questionDiv = $('#questions-div');
var $answerChoicesDiv = $('#answer-choices');
var $startResetDiv= $('#start-reset-div');
var $endMessageDiv = $('#end-message');
var $correctCtDiv = $('#correct-ct');
var $wrongCtDiv = $('#wrong-ct');
var $unansweredCtDiv = $('#unanswered-ct');
var seconds; var intervalId; var userChoice; var currentQuestion;
var correctAnswerCt; var wrongAnswerCt; var unansweredCt;

//start function
$( document ).ready(function() {
		currentQuestion = 0;
		correctAnswerCt = 0;
		wrongAnswerCt = 0;
		unansweredCt = 0;
		var $startButton = $('<button>');
		$startButton.text("Start")
		$startResetDiv.append($startButton);

		$startButton.on('click', function() {
			$(this).hide();
			renderQuestion();
		});
});

//function to display question and possible answers.
//calls function to start 20 second timer
//When a possible answer is clicked, the index of the choice is stored in a varible,
//the timer is stoped and the evaluate function is called
function renderQuestion(){
	$answerChoicesDiv.empty();
	$questionDiv.html('<h2>' + trivia[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var $answerChoice = $('<li>');
		$answerChoice.text(trivia[currentQuestion].possibleAnswers[i]);
		$answerChoice.attr({'data-index': i });
		$answerChoice.addClass('answer-choice');
		$answerChoicesDiv.append($answerChoice);
	};
	timer();

	$('.answer-choice').on('click',function(){
		userChoice = $(this).data('index');
		clearInterval(time);
		evaluate();
	});
}

//this function evaluates whether correct answer has been picked - 
//will perform different actions depending on whether time has run out (unansswered), correct answer picked, 
//or inccorect answer picked. 
//also evaluates whether all questions have been answered- if yes, execute game over function. if no, next question
function evaluate() {
	var answerIndex = trivia[currentQuestion].correctAnswer;
	
	if (seconds < 1){
		$answerChoicesDiv.empty();
		$questionDiv.html("<p>Sorry, time's up! These are the correct ingredients: </p>"+"<p>"+trivia[currentQuestion].possibleAnswers[answerIndex]+"</p>");
		unansweredCt++;

	
	}else if (userChoice === answerIndex) {
		$answerChoicesDiv.empty();
		$questionDiv.html("<p>Correct!</p>");
		$questionDiv.append("<img src=" + trivia[currentQuestion].image + ">").hide().fadeIn(1000);
		correctAnswerCt++;

	}else{
		$answerChoicesDiv.empty();
		$questionDiv.html("<p>Nope, these are the correct ingredients: </p>"+"<p>"+trivia[currentQuestion].possibleAnswers[answerIndex]+"</p>");
		wrongAnswerCt++;
	};

	if(currentQuestion == (trivia.length-1)){
		setTimeout(gameOver, 4500);
	} else{
		currentQuestion++;
		setTimeout(renderQuestion, 4500);
	};	
}

//game over function displays correct/incorrect/unanswered question counts and a reset button. 
//reset button empties divs, sets score variables to 0 and calls the question function
function gameOver() {
	$answerChoicesDiv.empty();
	$questionDiv.empty();

	$endMessageDiv.text("All done! Here's how you did:");
	$correctCtDiv.text("Correct Answers: " + correctAnswerCt);
	$wrongCtDiv.text("Wrong Answers: " + wrongAnswerCt);
	$unansweredCtDiv.text("Unanswered Questions: " + unansweredCt);

	var $resetButton = $('<button>');
	$resetButton.text("Start Over")
	$startResetDiv.append($resetButton);

	$resetButton.on('click', function() {
		$(this).hide();
		currentQuestion = 0;
		correctAnswerCt = 0;
		wrongAnswerCt = 0;
		unansweredCt = 0;
		$endMessageDiv.empty();
		$correctCtDiv.empty();
		$wrongCtDiv.empty();
		$unansweredCtDiv.empty();
		renderQuestion();
	});
};

//timer functions - displays a countdown on screen, allows 20 seconds for each question
//also considers when time has run out- if < 1 sec, timer stops and evaluate function is called
function timer() {
	seconds=20;
	$timerDiv.html("<h3>Time left: " + seconds + "</h3>");
	time = setInterval(countDown, 1000);
};
    
function countDown() {
	seconds--;
	$timerDiv.html("<h3>Time left: " + seconds + "</h3>");
	if (seconds < 1) {
    	clearInterval(time);
    	evaluate();
	};
};


