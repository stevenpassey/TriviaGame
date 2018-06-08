

var triviaObjects = [];

function Trivia(question, correct, wrong, error, desc, optional)
{
	this.question = question;
	this.correctAnswer = correct;
	this.wrongAnswers = wrong;
	this.errorMessage = error;
	this.explanation = desc;

	this.optionalMessage = optional
}

function addNewTriviaObject(question)
{
	if(question === 0)
	{
		var newQuestion = "<pre>$(element).addClass(className);</pre>";

		var newCorrectAnswer = "element.classList.add(className);";
		
		var newWrongAnswers = ["element.addClass(className);", 
					     "element.class.add(className);", 
					     "element.classes = className;"];

		var newErrorMessage = ["Console output: Uncaught TypeError: element.addClass is not a function", 
					     "Console output: Uncaught TypeError: Cannot read property 'add' of undefined",  
					     "Console output: &quot;className&quot;"];

		var newExplanation = ["DOM elements do have a method that adds classes, but it is a method of the classList property:", 
					    "&quot;class&quot; is a reserved keyword in Javascript and cannot be used. DOM Elements have a classList property:",  
					    "DOM Elements have a property named classList:",
					    "Correct! DOM Elements have a property named classList"];

		var newOption = "What is the plain Javascript equivalent of the following jQuery code?";
	}
	else
	{
		return true;
	}

	var newTriviaObject = new Trivia(newQuestion, newCorrectAnswer, newWrongAnswers, newErrorMessage, newExplanation, newOption);
	
	triviaObjects.push(newTriviaObject);

	return (question + 1);
}
