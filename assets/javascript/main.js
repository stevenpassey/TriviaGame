var learning_title = "Learn Mode";
var exam_title = "Exam Mode";
var mode_learning_desc = "<span style='font-size: 45px' class='blurGlow'></span><hr noshade> <div id='details_learning_desc'>Show answer explanations after each queston</div>"
var mode_exam_desc = "<span style='font-size: 45px' class='blurGlow'></span><hr noshade> <div id='details_exam_desc'>Show all answer explanations at the end of the game</div>";
var learning_title_dyn;
var exam_title_dyn;

var divLabelText = ["", "Mode", "Selection", mode_learning_desc, mode_exam_desc];
var divLabelId = ["", "mode", "selection", "learning-desc", "exam-desc"];
var divLabelClass = ["", "mode-label", "mode-label", "mode-desc", "mode-desc"];
var divLabelTransform = ["", "translateX(" + (-(window.innerWidth)) + "px)", "translateX(" + window.innerWidth + "px)", "translateX(" + (-(window.innerWidth)) + "px)", "translateX(" + window.innerWidth + "px)"];
var divLabelTransformFinal = ["", "translateX(-80px)", "translateX(80px)", "translateX(-300px)", "translateX(300px)"];

var chosenMode = "learning";

function showModeSelect()
{
	for(var labelCount = 1; labelCount <= 4; labelCount++) 
	{
		generateModeLabels(labelCount);
	}

	setTimeout('$("#mode-label-learning-desc").on("mouseenter", removeBlur)', 30);
	setTimeout('$("#mode-label-learning-desc").on("mouseleave", reAddBlur)', 30);

	setTimeout('$("#mode-label-exam-desc").on("mouseenter", removeBlur)', 30);
	setTimeout('$("#mode-label-exam-desc").on("mouseleave", reAddBlur)', 30);

	setTimeout('$("#mode-label-learning-desc").on("click", loadGame)', 30);
	setTimeout('$("#mode-label-exam-desc").on("click", loadGame)', 30);

	//add glow to blurred text
	var learning_title = ["L","e","a","r","n", "&nbsp;", "M","o","d","e"];
	var exam_title = ["E","x","a","m", "&nbsp;", "M","o","d","e"];

	for(var glowingLetter in learning_title)
	{
		var randomDelay = Math.floor(Math.random() * 4000) + 1;
		var wrapper = "<span style='animation-delay: " + randomDelay + "ms;'>" + learning_title[glowingLetter] + "</span>";
		$(".blurGlow:eq(0)").append(wrapper);
		learning_title_dyn = $(".blurGlow:eq(0)").html();
	}

	for(var glowingLetter2 in exam_title)
	{
		var randomDelay2 = Math.floor(Math.random() * 4000) + 1;
		var wrapper2 = "<span style='animation-delay: " + randomDelay2 + "ms;'>" + exam_title[glowingLetter2] + "</span>";
		$(".blurGlow:eq(1)").append(wrapper2);
		exam_title_dyn = $(".blurGlow:eq(1)").html();
	}
}

function generateModeLabels(labelCount)
{
	var $myDiv = $("<div></div>");
	$myDiv.addClass(divLabelClass[labelCount]);
	$myDiv.attr("id","mode-label-" + divLabelId[labelCount].toLowerCase());
	$myDiv.html(divLabelText[labelCount]);
	$myDiv.css({transform: divLabelTransform[labelCount]});
	$myDiv.css({transition: "transform ease-out 500ms"});

	$("body").append($myDiv);

	setTimeout(function () { $("#mode-label-" + divLabelId[labelCount]).css({transform: divLabelTransformFinal[labelCount]}) }, 130);
}

function removeBlur(e)
{
	$(this).addClass("mode-desc_noblur");
	$(this.lastChild).css({opacity: "1", transform: "translateY(0px)"});

	var senderId = this.id;
	var new_html = senderId.indexOf("learning") !== -1 ? learning_title : exam_title;
	var new_id = senderId.indexOf("learning") !== -1 ? ".blurGlow:eq(0)" : ".blurGlow:eq(1)";
	$(new_id).html(new_html)
}

function reAddBlur(e)
{
	$(this).removeClass("mode-desc_noblur");
	$(this.lastChild).css({opacity: "0", transform: "translateY(-40px)"});

	var senderId = this.id;
	var new_html = senderId.indexOf("learning") !== -1 ? learning_title_dyn : exam_title_dyn;
	var new_id = senderId.indexOf("learning") !== -1 ? ".blurGlow:eq(0)" : ".blurGlow:eq(1)";
	$(new_id).html(new_html);
}

function loadGame(e)
{
	var senderId = this.id;
	$("#" + senderId).css({cursor: "default"});

	if(senderId.indexOf("learning") !== -1)
	{
		chosenMode = "learning";

		$('#mode-label-exam-desc').css({transform: divLabelTransform[4]});
		$('#mode-label-learning-desc').off();
		$('#mode-label-learning-desc hr').remove();
		$('#details_learning_desc').css({opacity: "0", transform: "translateY(-40px)"});
		setTimeout('$("#mode-label-mode").css({opacity: "0"})', 500);
		setTimeout('$("#mode-label-selection").css({transform: "translate(160px) scaleX(0.4)"})', 1000);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 220) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 1000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 1500);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 270) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 1500);
		
		//The Crunch
		setTimeout('$("#mode-label-selection").css({transition: "transform ease-out 90ms"})', 1600);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transition: "transform ease-out 90ms"});
		}, 1600);
		
		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2500);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 270) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2500);

		setTimeout('$("#mode-label-selection").css({transform: "translate(150px) scaleX(0.4)"})', 2600);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 230) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2600);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2700);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 270) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2700);

		setTimeout('$("#mode-label-selection").css({transform: "translate(150px) scaleX(0.4)"})', 2800);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 230) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2800);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2900);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 270) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2900);

		setTimeout('$("#mode-label-selection").css({transition: "transform ease-out 450ms"})', 3000);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transition: "transform ease-out 450ms"});
		}, 3000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(160px) scaleX(0.4)"})', 3500);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 220) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 3500);

		setTimeout('$("#mode-label-selection").css({transform: "translate(190px) scaleX(0)"})', 4000);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 155) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 4000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(190px) scaleX(0)"})', 4500);
		setTimeout(function () { 
		$('#mode-label-learning-desc').css({transform: "translateX(-" + 72 + "px) translateY(" + distance_to_finalY + "px)"});
		}, 4500);

		var current_offsetX = $('#mode-label-learning-desc').offset().left;
		var current_offsetY = $('#mode-label-learning-desc').offset().top;
		var final_offsetX = $('#mode-label-mode').offset().left;
		var final_offsetY = $('#mode-label-mode').offset().top;
		var distance_to_finalX = -(current_offsetX - final_offsetX);
		var distance_to_finalY = -(current_offsetY - final_offsetY);

		$('#mode-label-learning-desc').css({transform: "translateX(" + (distance_to_finalX - 368) + "px) translateY(" + distance_to_finalY + "px)"});
	}
	else if(senderId.indexOf("exam") !== -1)
	{
		chosenMode = "exam";
		
		$('#mode-label-learning-desc').css({transform: divLabelTransform[3]});
		$('#mode-label-exam-desc').off();
		$('#mode-label-exam-desc hr').remove();
		$('#details_exam_desc').css({opacity: "0", transform: "translateY(-40px)"});
		setTimeout('$("#mode-label-mode").css({opacity: "0"})', 500);
		setTimeout('$("#mode-label-selection").css({transform: "translate(160px) scaleX(0.4)"})', 1000);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (220 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 1000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 1500);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (270 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 1500);
		
		//The Crunch
		setTimeout('$("#mode-label-selection").css({transition: "transform ease-out 90ms"})', 1600);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transition: "transform ease-out 90ms"});
		}, 1600);
		
		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2500);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (270 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2500);

		setTimeout('$("#mode-label-selection").css({transform: "translate(150px) scaleX(0.4)"})', 2600);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (230 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2600);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2700);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (270 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2700);

		setTimeout('$("#mode-label-selection").css({transform: "translate(150px) scaleX(0.4)"})', 2800);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (230 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2800);

		setTimeout('$("#mode-label-selection").css({transform: "translate(130px) scaleX(0.5)"})', 2900);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (270 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 2900);

		setTimeout('$("#mode-label-selection").css({transition: "transform ease-out 450ms"})', 3000);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transition: "transform ease-out 450ms"});
		}, 3000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(160px) scaleX(0.4)"})', 3500);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (220 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 3500);

		setTimeout('$("#mode-label-selection").css({transform: "translate(190px) scaleX(0)"})', 4000);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (155 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
		}, 4000);

		setTimeout('$("#mode-label-selection").css({transform: "translate(190px) scaleX(0)"})', 4500);
		setTimeout(function () { 
		$('#mode-label-exam-desc').css({transform: "translateX(-" + 72 + "px) translateY(" + distance_to_finalY + "px)"});
		}, 4500);

		var current_offsetX = $('#mode-label-exam-desc').offset().left;
		var current_offsetY = $('#mode-label-exam-desc').offset().top;
		var final_offsetX = $('#mode-label-mode').offset().left;
		var final_offsetY = $('#mode-label-mode').offset().top;
		var distance_to_finalX = -(current_offsetX - final_offsetX);
		var distance_to_finalY = -(current_offsetY - final_offsetY);

		$('#mode-label-exam-desc').css({transform: "translateX(" + (distance_to_finalX - (368 - 600)) + "px) translateY(" + distance_to_finalY + "px)"});
	}

	setTimeout(showClock, 5000);
}

function showClock()
{
	$('body').append('<svg height="144" width="144" id="analog-timer"><circle id="analog-circumference" cx="72" cy="72" r="70" stroke="rgb(77,48,37)" stroke-width="1" fill="none"></circle></svg>');

	$('body').append('<div id="timer-text">45</div>');

	startClockIntro();
}

function startClockIntro()
{
	$("#analog-circumference").css({animation: "countdown 4s linear", animationFillMode: "forwards", animationDirection: "reverse"});
	$("#timer-text").text("4");
	$("#timer-text").css({opacity: "1", animation: "none"});

	//loadTrivia
	showTriviaContainers();

	setTimeout('$("#timer-text").text("3"); ', 925);
	setTimeout('$("#timer-text").text("2")', 1925);
	setTimeout('$("#timer-text").text("1"); $("#timer-text").css({opacity: "0"});', 2925);
	setTimeout('$("#analog-circumference").css({animation: "none"});', 4000);
	setTimeout('$("#timer-text").text("45"); $("#timer-text").css({opacity: "1"}); startClock()', 4030);
}

var clockTimer;
function startClock()
{
	$("#analog-circumference").css({animation: "countdown 45s linear", animationFillMode: "forwards"});
	clockTimer = setInterval(decreaseClock, 1000);

	$("#introWaterRow").css({transform: "translateY(-50px) translateX(-25px)"});
	$(".coralIntroBackground").css({transform: "translateY(-50px)"});

	//add water transition
	$("#introWaterRow").css({transition: "transform ease-in-out 900ms"});
	$(".coralIntroBackground").css({transition: "transform ease-in-out 900ms"});

	//resume water animation
	$("#introWaterRow svg").css({animationPlayState: "running"});

	//unBlur trivia
	$(".optional-message-text").css({filter: "blur(0px)"});
	$(".question-text").css({filter: "blur(0px)"});
	$(".answer-text").addClass("answer-text-enabled");

	//add mouse events
	$(".answer-text").on("click", clickAnswer);

}

var global_clock_time = 45;
var global_question_selection = 0;
var water_level = 0;
var water_increase_height = ((window.innerHeight - 170) / global_clock_time);

function decreaseClock()
{
	if(global_clock_time === 1)
	{
		clearInterval(clockTimer);
		
		$(".answer-text").off();
		$(".answer-text").removeClass("answer-text-enabled");
		$(".answer-text").css({filter: "blur(0px)"});
		
		/*$("#introWaterRow").css({transform: "translateY(" + (-(window.innerHeight + 260)) + "px)"});
		$(".coralIntroBackground").css({transform: "translateY(" + (-(window.innerHeight + 260)) + "px)"});*/
	}
	
	global_clock_time--;
	$("#timer-text").text(global_clock_time);

	water_level++;
	var water_translateY = "translateY(" + -((water_level * water_increase_height) + 50) + "px)";
	
	$("#introWaterRow").css({transform: water_translateY + " translateX(-25px)"});
	$(".coralIntroBackground").css({transform: water_translateY});
}

function showTriviaContainers()
{
	var addedHeight = 100;	
	
	if(triviaObjects[global_question_selection].optionalMessage !== "")
	{
		addedHeight = 200;

		var $myDiv = $("<div></div>");
		$myDiv.addClass("optional-message-text");
		$myDiv.attr("id","optionalMessage");
		$myDiv.html(triviaObjects[global_question_selection].optionalMessage);
		
		$("body").append($myDiv);
	}

	var $myDiv2 = $("<div></div>");
	$myDiv2.addClass("question-text");
	$myDiv2.attr("id","questionText");
	$myDiv2.css({top: (82 + addedHeight) + "px"});
	$myDiv2.html(triviaObjects[global_question_selection].question);
		
	$("body").append($myDiv2);

	//combine all answers into an array
	var myAnswerArray = [triviaObjects[global_question_selection].correctAnswer, 
				   triviaObjects[global_question_selection].wrongAnswers[0],
				   triviaObjects[global_question_selection].wrongAnswers[1],
				   triviaObjects[global_question_selection].wrongAnswers[2]]

	//randomizeOrder
	var myRandomAnswerArray = randomizeArrayOrder(myAnswerArray);

	//const swap
	var myIndexLetters = {0:"A",1:"B",2:"C",3:"D"};

	for(var currentAnswer = 0; currentAnswer < 4; currentAnswer++)
	{
		var $myDiv3 = $("<div></div>");
		$myDiv3.addClass("answer-text");
		$myDiv3.attr("id","answerText" + (currentAnswer + 1));
		$myDiv3.css({top: ($("#questionText").outerHeight() + 99 + (currentAnswer * 50) + addedHeight) + "px"});
		$myDiv3.html(myRandomAnswerArray[currentAnswer]);
		
		$("body").append($myDiv3);

		//prepend letters
		$(".answer-text:eq(" + currentAnswer + ")").prepend(myIndexLetters[currentAnswer] + ": &nbsp;");

		var answerText_width = $("#answerText" + (currentAnswer + 1)).outerWidth();
		var answerText_left = "calc((100vw / 2) - " + (answerText_width / 2) + "px)"; 
		$("#answerText" + (currentAnswer + 1)).css({left: answerText_left});
	}
}

function randomizeArrayOrder(array)
{
	var myAnswerArrayLength = array.length;
	var answersLeft;
	var myRandomAnswerArray;

  	while (myAnswerArrayLength) 
	{
    		answersLeft = Math.floor(Math.random() * myAnswerArrayLength--);

    		myRandomAnswerArray = array[myAnswerArrayLength];
    		array[myAnswerArrayLength] = array[answersLeft];
    		array[answersLeft] = myRandomAnswerArray;
  	}

  	return array;
}

var whichMessageToShow;
var whichErrorToShow;
function clickAnswer(event)
{
	$(".answer-text").off();
	$("#analog-circumference").css({animation: "none"});
	clearInterval(clockTimer);
	

	var answer = $(this).text().substr(4, $(this).text().length);

	var isRight = triviaObjects[global_question_selection].correctAnswer.indexOf(answer);
	var whichWrong = triviaObjects[global_question_selection].wrongAnswers.indexOf(answer);

	$(".answer-text").removeClass("answer-text-enabled");
	$(".answer-text").css({filter: "blur(0px)"});

	$("#timer-text").html("&nbsp;&#9654;");
	$("#timer-text").css({cursor: "pointer", transform: "translateX(-5px), translateY(-2px)"});

	if(isRight !== -1)
	{
		if(chosenMode === "learning")
		{
			$(this).text(answer);
			$(this).prepend("&nbsp; &nbsp;");

			var currentAnswerIndex = this.id.substr(this.id.length - 1, this.id.length);

			if(currentAnswerIndex !== "4")
			{
				var newWhy = (4 - currentAnswerIndex) * 50;
				$("#answerText" + currentAnswerIndex).css({transform: "translateY(" + newWhy + "px)"});
			}

			var wrongAnswersIndexArray = [];
			for(var removeAnswers = 1; removeAnswers < 5; removeAnswers++)
			{
				if(removeAnswers != currentAnswerIndex)
				{
					$("#answerText" + removeAnswers ).css({animation: "none"});
					wrongAnswersIndexArray.push(removeAnswers);
				}
			}

			setTimeout(function () {  $("#answerText" + wrongAnswersIndexArray[0]).css({animation: "showClock 1s linear forwards", animationDirection: "reverse"}); }, 30);
			setTimeout(function () {  $("#answerText" + wrongAnswersIndexArray[1]).css({animation: "showClock 1s linear forwards", animationDirection: "reverse"}); }, 30);
			setTimeout(function () {  $("#answerText" + wrongAnswersIndexArray[2]).css({animation: "showClock 1s linear forwards", animationDirection: "reverse"}); }, 30);


			setTimeout(createCheckmark, 1000);
		}
	}
	else
	{
		if(chosenMode === "learning")
		{
			var otherAnswerIndex = this.id.substr(this.id.length - 1, this.id.length);

			var currentAnswerIndex;
			
			for(var findRightAnswer = 0; findRightAnswer < 4; findRightAnswer++)
			{
				var pickAnAnswer = $("#answerText" + (findRightAnswer + 1)).text().substr(4, $("#answerText" + (findRightAnswer + 1)).text().length);
				
				if(triviaObjects[global_question_selection].correctAnswer.indexOf(pickAnAnswer) !== -1)
				{
					currentAnswerIndex = (findRightAnswer + 1);
				}
			}

			$(this).text(answer);
			$(this).prepend("&nbsp; &nbsp;");
			
			$("#answerText" + currentAnswerIndex).text($("#answerText" + currentAnswerIndex).text().substr(4, $("#answerText" + currentAnswerIndex).text().length));
			$("#answerText" + currentAnswerIndex).prepend("&nbsp; &nbsp;");

			$(this).css({transition: "transform 1s"});
			$("#answerText" + currentAnswerIndex).css({transition: "transform 1s"});

			$("body").append('<svg width="45" height="30" class="myGreenCheckmark"><rect width="10" height="20" style="fill:rgb(39,130,39); transform-origin: top; transform: rotateZ(-45deg);"></rect><rect width="10" height="30" style="fill:rgb(39,130,39); transform-origin: top; transform: translateX(-17px) translateY(14px) rotateZ(-136deg);"></rect></svg>');
			var checkMarkTopLocation = $("#answerText" + currentAnswerIndex).offset().top - 12;
			var checkMarkLeftLocation = $("#answerText" + currentAnswerIndex).offset().left - 40;
			$(".myGreenCheckmark").css({top: checkMarkTopLocation + "px"});
			$(".myGreenCheckmark").css({left: checkMarkLeftLocation + "px"});

			$("body").append('<svg width="45" height="30" class="myRedX"><rect width="10" height="30" style="fill:rgb(130,39,39); transform-origin: top; transform: rotateZ(-45deg) translateX(10px);"></rect><rect width="10" height="30" style="fill:rgb(130,39,39); transform-origin: top; transform: translateX(-17px) translateY(14px) rotateZ(-136deg);"></rect></svg>');
			var xTopLocation = $("#answerText" + otherAnswerIndex).offset().top - 4;
			var xLeftLocation = $("#answerText" + otherAnswerIndex).offset().left - 40;
			$(".myRedX").css({top: xTopLocation + "px"});
			$(".myRedX").css({left: xLeftLocation + "px"});


			var newWhy = (4 - currentAnswerIndex) * 50;
			setTimeout(function () { $("#answerText" + currentAnswerIndex).css({transform: "translateY(" + newWhy + "px) translateX(5px)"}); 
							 $(".myGreenCheckmark").css({transform: "translateY(" + newWhy + "px) translateX(5px)"});				
			}, 1000);
			

			
			var newWhy2 = -((otherAnswerIndex - 1) * 50);
			setTimeout(function () { $("#answerText" + otherAnswerIndex).css({transform: "translateY(" + newWhy2 + "px) translateX(5px)"}); 
							 $(".myRedX").css({transform: "translateY(" + newWhy2 + "px) translateX(5px)"});							
			}, 1000);
			

			var wrongAnswersIndexArray = [];
			for(var removeAnswers = 1; removeAnswers < 5; removeAnswers++)
			{
				if(removeAnswers != otherAnswerIndex && removeAnswers != currentAnswerIndex)
				{
					$("#answerText" + removeAnswers ).css({animation: "none"});
					wrongAnswersIndexArray.push(removeAnswers);
				}
				else if(removeAnswers == currentAnswerIndex)
				{
					whichMessageToShow = triviaObjects[global_question_selection].explanation[triviaObjects[global_question_selection].wrongAnswers.indexOf(answer)];
					whichErrorToShow = triviaObjects[global_question_selection].errorMessage[triviaObjects[global_question_selection].wrongAnswers.indexOf(answer)];
				}
			}

			setTimeout(function () {  $("#answerText" + wrongAnswersIndexArray[0]).css({animation: "showClock 1s linear forwards", animationDirection: "reverse"}); }, 30);
			setTimeout(function () {  $("#answerText" + wrongAnswersIndexArray[1]).css({animation: "showClock 1s linear forwards", animationDirection: "reverse"}); }, 30);

			setTimeout(createError, 1000);
		}
	}
}

function createCheckmark()
{
	$("body").append('<svg width="45" height="30" class="myGreenCheckmark"><rect width="10" height="20" style="fill:rgb(39,130,39); transform-origin: top; transform: rotateZ(-45deg);"></rect><rect width="10" height="30" style="fill:rgb(39,130,39); transform-origin: top; transform: translateX(-17px) translateY(14px) rotateZ(-136deg);"></rect></svg>');
	$(".myGreenCheckmark").css({top: ($(".question-text").offset().top + $(".question-text").outerHeight())});
	$(".myGreenCheckmark").css({transform: "translateY(107.5px)"});

	$("body").append('<div class="success-message">' + triviaObjects[global_question_selection].explanation[3] + "</div>");
	var explainText_width = $(".success-message").outerWidth();
	var explainText_left = "calc((100vw / 2) - " + (explainText_width / 2) + "px)"; 
	$(".success-message").css({left: explainText_left});
	$(".success-message").css({top: ($(".question-text").offset().top + $(".question-text").outerHeight())});
	$(".success-message").css({transform: "translateY(50px)"});

	//setTimeout('$("#answerText" + currentAnswerIndex).css({transform: "translateX(10px) translateY(" + newWhy + "px)"})', 1000);
}

function createError()
{	
	$("body").append('<div class="error-message">' + whichErrorToShow + "</div>");
	var explainText_width = (document.getElementsByClassName("error-message")[0].offsetWidth / 2);
	var explainText_left = "calc(50vw - " + explainText_width + "px)";
	$(".error-message").css({left: explainText_left});
	$(".error-message").css({top: ($(".question-text").offset().top + $(".question-text").outerHeight())});
	$(".error-message").css({transform: "translateY(64px)"});
	
	$("body").append('<div class="success-message">' + whichMessageToShow + "</div>");
	var explainText_width2 = (document.getElementsByClassName("success-message")[0].getBoundingClientRect().width / 2);
	var explainText_left2 = (window.innerWidth / 2 - explainText_width2) + "px"; 
	$(".success-message").css({left: explainText_left2});
	$(".success-message").css({top: ($(".question-text").offset().top + $(".question-text").outerHeight())});
	$(".success-message").css({transform: "translateY(114px)"});
}

function nextQuestion()
{
	
}
