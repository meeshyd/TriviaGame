
// Game timer	Function for count down timer, ends game once time runs out		-5
// Load question	Load question utilize “this”, and for loop to append to page		-5
// Next question	Change from current questions to next question ++		-5
// Done function	Detect if question answered is correct or incorrect		-5
// Reset	Resets everything back to beginning or 0		-5
// Results	Display the results to the player, incorrectly and correctly		-5
// Include CDN	5 points will be deducted for not including the jQuery CDN properly		-5


var trivia = [
	{
		question: "Which ingredients make up a negroni?",
		possibleAnswers: [
		"vodka, gin, bitters, orange peel",
		"campari, gin, dry vermouth, lemon peel",
		"campari, vodka, sweet vermouth, lemon peel",
		"campari, gin, sweet vermouth, orange peel"
		],
		correctAnswer: 3,
		image:""
	},
	{
		question: "Which ingredients make up a sazerac?",
		possibleAnswers: [
		"whiskey, absinthe, orange juice, Peychaud’s bitters, orange peel",
		"cognac or rye whiskey, absinthe, Peychaud’s bitters, sugar cube, lemon peel",
		"cognac or rye whiskey, absinthe, lemon juice, lemon peel",
		"whiskey, Peychaud’s bitters, sugar cube, lemon peel"
		],
		correctAnswer: 1,
		image:""
	},
	{
		question: "Which ingredients make up a manhattan?",
		possibleAnswers: [
		"dry vermouth, whiskey, bitters, cherry",
		"sweet vermouth, whiskey, bitters, cherry",
		"bourbon, bitters, sugar cube, orange slice, cherry",
		"bourbon, dry vermouth, sugar cube, orange slice, cherry"
		],
		correctAnswer: 1,
		image:""
	},
	{
		question: "Which ingredients make up a martini?",
		possibleAnswers: [
		"white rum, dry vermouth, olive or lemon peel",
		"white rum, sweet vermouth, olive or lemon peel",
		"gin, dry vermouth, olive or lemon peel",
		"gin, St. Germain, olive or lemon peel"
		],
		correctAnswer: 2,
		image:""
	},
	{
		question: "Which ingredients make up a vesper?",
		possibleAnswers: [
		"vodka, gin, Lillet, lemon peel",
		"gin, St. Germain, soda water, lemon peel",
		"vodka, soda water, Lillet, lemon peel",
		"vodka, gin, lemon-lime soda, lemon peel"
		],
		correctAnswer: 0,
		image:""
	},
	{
		question: "Which ingredients make up a mojito?",
		possibleAnswers: [
		"vodka, mint, water, lemon juice",
		"gin, mint, soda water, lime juice, sugar",
		"gin, white rum, mint, sugar",
		"white rum, mint, soda water, lime juice, sugar"
		],
		correctAnswer: 3,
		image:""
	},
	{
		question: "Which ingredients make up a white russian?",
		possibleAnswers: [
		"chocolate liquor, white rum, cream",
		"coffee liquor, white rum, cream",
		"coffee liquor, vodka, cream",
		"coffee liquor, vodka, egg white"
		],
		correctAnswer: 2,
		image:""
	},
	{
		question: "Which ingredients make up a whiskey sour?",
		possibleAnswers: [
		"whiskey, orange, simple syrup, egg white, orange peel",
		"whiskey, lemon juice, simple syrup, egg white, lemon peel",
		"whiskey, bitters, egg white, lemon peel",
		"whiskey, dry vermouth, lemon juice, egg white, lemon peel"
		],
		correctAnswer: 1,
		image:""
	}
];

var $triviaContainer = $("#trivia-container");
var $timerDiv = $("#timer-div");
var $questionDiv = $('#questions-div');
var $answerBtnsDiv = $("#answer-buttons");
var time = 30;
var intervalId;
var userChoice;


function start(){
	// $('#finalMessage').empty();
	// $('#correctAnswers').empty();
	// $('#incorrectAnswers').empty();
	// $('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	wrongAnswer = 0;
	unanswered = 0;
	renderQuestion();
}

start();

function renderQuestion(){

	$questionDiv.html('<h2>' + trivia[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var $answerBtn = $('<button>');
		$answerBtn.text(trivia[currentQuestion].possibleAnswers[i]);
		$answerBtn.attr({'data-index': i });
		$answerBtn.addClass('answerChoice');
		$answerBtnsDiv.append($answerBtn);
	}
	countDown();
	$('.answerChoice').on('click',function(){
		userChoice = $(this).data('index');
		console.log(userChoice);
		stopTimer();
		evaluate();
	});
}

function evaluate() {
	if (userChoice === trivia[currentQuestion].correctAnswer) {
		alert ('yay');
	}else{
		alert ('nope');
	}
}



//QUESTION TIMER FUNCTIONS

function thirtySecTimer() {
	intervalId = setInterval(countDown, 1000);
};
    
function countDown() {
	time--;
	$timerDiv.html("<h3>Time left: " + time + "</h2>");
	if (time === 0) {
    	stop();
		alert("Time Up!");
	};
};

function stopTimer() {
	clearInterval(intervalId);
};

thirtySecTimer();

//END QUESTION TIMER FUNCTIONS

