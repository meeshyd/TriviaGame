// Create an object	Create an object to hold questions, answers, and correct answers, images		-10
// Game timer	Function for count down timer, ends game once time runs out		-5
// Load question	Load question utilize “this”, and for loop to append to page		-5
// Next question	Change from current questions to next question ++		-5
// Done function	Detect if question answered is correct or incorrect		-5
// Reset	Resets everything back to beginning or 0		-5
// Results	Display the results to the player, incorrectly and correctly		-5
// Include CDN	5 points will be deducted for not including the jQuery CDN properly		-5


var drinksObj = {
	negroni: {
		question: "What ingredients make up a negroni?",
		answers: ["1234","5678","1111","campari, gin, sweet vermouth, orange peel"],
		correctAnswer: "",
		image:""
	},
	sazerac: {
		question: "What ingredients make upa sazerac?",
		answers: ["1256","cognac, absinthe, Peychaud’s bitters, sugar cube, lemon peel","7891","2222"],
		correctAnswer: "cognac, absinthe, Peychaud’s bitters, sugar cube, lemon peel",
		image:""
	},
	manhattan: {
		question: "What ingredients make upa manhattan?",
		answers: ["1111","sweet vermouth, whiskey, bitters, cherry","2222","3333"],
		correctAnswer: "sweet vermouth, whiskey, bitters, cherry",
		image:""
	},
	martini: {
		question: "What ingredients make upa martini?",
		answers: ["gin, dry vermouth, olive","4444","5555","6666"],
		correctAnswer: "gin, dry vermouth, olive",
		image:""
	},
	vesper: {
		question: "What ingredients make upa vesper?",
		answers: ["vodka, gin, Lillet, lemon peel","7777","8888","9999"],
		correctAnswer: "vodka, gin, Lillet, lemon peel",
		image:""
	},
	mojito: {
		question: "What ingredients make up a mojito?",
		answers: ["1111","3333","6666","white rum, mint, soda water, lime juice, sugar"],
		correctAnswer: "white rum, mint, soda water, lime juice, sugar",
		image:""
	},
	whiteRussion: {
		question: "What ingredients make up a white russian?",
		answers: ["3333","7777","coffee liquor, vodka, cream","9999"],
		correctAnswer: "offee liquor, vodka, cream",
		image:""
	},
	whiskeySour: {
		question: "What ingredients make up a whiskey sour?",
		answers: ["0000","whiskey, lemon, simple syrup, egg white, lemon peel","7777","5555"],
		correctAnswer: "whiskey, lemon, simple syrup, egg white, lemon peel",
		image:""
	}
}