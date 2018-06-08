var coralSquareDim = 130
var coralSquareCount = Math.ceil((window.innerWidth / 130));

var introRows = 0;
var introRowDelayArray = [];
var introFullTime = 0;

var allObjectsFound = 0;

$(document).ready(function() {

	while(allObjectsFound !== true)
	{
		var getNumber = allObjectsFound;
	      allObjectsFound = addNewTriviaObject(getNumber);
	}

	//console.log(allObjectsFound, triviaObjects.length);
});

function startIntro()
{
	$("#start-square").css({animation: "none", transform: "none"});
	setTimeout('$("#start-square").css({transform: "scale(0,0)"})', 1);
	setTimeout('$("#start-square").remove();', 100);
	setTimeout(startIntroTransition, 100);
}

function startIntroTransition()
{
	var introRowDelayAmount = 50; //fade in each row 50 milliseconds apart

	for(var rows = 1; rows <= coralSquareCount + 1; rows++) //create a delay for the squares from right to left
	{
		introRowDelayArray[rows] = introRowDelayAmount * (coralSquareCount - rows);
	}

	introRowDelayArray.reverse(); //make the delay from left to right

	while(introRows * 130 < window.innerHeight) //create as rows to fill starting viewport height
	{
		introRows++;
		generateRow("intro", introRows);
	}

	introFullTime = (introRows * 110) + introRowDelayArray[coralSquareCount] + 1000;
	setTimeout("generateSquare('introBackground')", introFullTime);
	setTimeout("$('.intro-square-row').remove()", introFullTime + 100);

	//add water
	setTimeout('generateRow("introWater")', introFullTime + 1250);
	setTimeout('$("#introWaterRow").css({transform: "translateY(-200px) translateX(-25px)"})', introFullTime + 2700);
	setTimeout('$(".coralIntroBackground").css({transform: "translateY(-200px)"})', introFullTime + 2700);
	setTimeout('$("body").css({backgroundColor: "rgb(40,86,128)"})', introFullTime + 2700);

	//add buttons
	setTimeout('generateRow("introButtons")', introFullTime + 1250);	
}

function generateRow(type, delay) 
{
	if(type === "intro") //creates a div with full width located 130px lower than the previous row
	{
		var $myDiv = $("<div></div>");
		$myDiv.css({width: "100%", height: "130px", position: "absolute", top: ((introRows * 130) - 130) + "px", left: "0px"});
		$myDiv.addClass("intro-square-row");
		$myDiv.attr("id","introSquareRow" + introRows);

		for(var squareCount = 1; squareCount <= coralSquareCount + 1; squareCount++)
		{
			var $myIntroSVG = generateSquare("intro", squareCount);
			$myDiv.append($myIntroSVG);
		}
		
		setTimeout(function () { $myDiv.appendTo($("body"))}, (delay * 110));
	}
	else if(type === "introWater")
	{
		var $myDiv = $("<div></div>");
		$myDiv.addClass("intro-water-row");
		$myDiv.attr("id","introWaterRow");

		for(var squareCount = 1; squareCount <= coralSquareCount; squareCount++)
		{
			var $myIntroWaterSVG = generateSquare("introWater", squareCount);
			$myDiv.append($myIntroWaterSVG);
		}

		setTimeout(function () { $myDiv.appendTo($("body"))}, 1250);
	}
	else if(type === "introButtons")
	{
		var $myDiv = $("<div></div>");
		$myDiv.addClass("intro-button_blur");
		$myDiv.attr("id","intro-button-play");
		$myDiv.text("Play");

		$myDiv.appendTo($("body"));

		var $myDiv2 = $("<div></div>");
		$myDiv2.addClass("intro-button");
		$myDiv2.attr("id","intro-button-play");
		$myDiv2.on("mouseenter", function(e) { generateHighlight(e, "play-background", "rgb(178,207,218)", "rgba(178,207,218, 0.5)") });
		$myDiv2.on("mouseleave", function(e) { removeHighlight(e) });
		$myDiv2.text("Play");

		setTimeout("$('#intro-button-play').css({opacity: '1'})", 30);
		setTimeout("$('#intro-button-play').css({filter: 'blur(0px)'})", 30);
		setTimeout(function () { $('#intro-button-play').replaceWith($myDiv2); }, 1300);
		setTimeout(function () { $('#intro-button-play').on("click", closeIntro); }, 2320);

		//add button background
		var $myDiv3 = $("<div></div>");
		$myDiv3.addClass("intro-button-background");
		$myDiv3.attr("id","play-background");
		setTimeout(function () { $($myDiv3).appendTo($("body")); }, 1300);
	}
}

function generateSquare(type, delay)
{
	if(type === "intro") //create an svg element with a rectangle inside
	{	
		if(introRowDelayArray[delay] == null)
		{
			delay = introRowDelayArray.length - 2;
		}

		var $mySVG = $(document.createElementNS("http://www.w3.org/2000/svg","svg"));
		$mySVG.attr("width", coralSquareDim + "px");
		$mySVG.attr("height", coralSquareDim + "px");
		$mySVG.css({animationDelay: introRowDelayArray[delay] + "ms"});
		$mySVG.addClass("intro-square-svg");

		var $myRect = $(document.createElementNS("http://www.w3.org/2000/svg","rect"));
		$myRect.attr("width", coralSquareDim + "px");
		$myRect.attr("height", coralSquareDim + "px");
		$myRect.addClass("intro-square");
		$myRect.attr("style", "transition: opacity 100ms; transform-origin: center; fill: rgb(255, 160, 122);");

		$myRect.appendTo($mySVG);

		return $mySVG;
	}
	else if(type === "introWater") 
	{	
		var $mySVG = $(document.createElementNS("http://www.w3.org/2000/svg","svg"));
		$mySVG.attr("width", coralSquareDim + "px");
		$mySVG.attr("height", coralSquareDim + "px");
		$mySVG.css({animationDelay: (delay * 110) + "ms"});
		$mySVG.addClass("intro-water-square-svg");

		var $myRect = $(document.createElementNS("http://www.w3.org/2000/svg","rect"));
		$myRect.attr("width", coralSquareDim + "px");
		$myRect.attr("height", coralSquareDim + "px");
		$myRect.addClass("intro-water-square");
		$myRect.attr("style", "fill: rgb(255, 160, 122);");

		$myRect.appendTo($mySVG);

		return $mySVG;
	}
	else if(type === "introBackground")
	{
		var $mySVG = $(document.createElementNS("http://www.w3.org/2000/svg","svg"));
		$mySVG.attr("width", (window.screen.width * window.devicePixelRatio) + "px");
		$mySVG.attr("height", window.innerHeight);
		$mySVG.addClass("coralIntroBackground");

	
		var $myRect = $(document.createElementNS("http://www.w3.org/2000/svg","rect"));
		$myRect.attr("width", (window.screen.width * window.devicePixelRatio)+ "px");
		$myRect.attr("height", window.innerHeight);
		$myRect.attr("style", "fill: rgb(255, 160, 122);");

		$myRect.appendTo($mySVG);
		$("body").append($mySVG);

		
		var $myImg = $("<img>");
		$myImg.attr("src", "./assets/images/logoa2.png");
		$myImg.addClass("intro-image-class_blur");
		$myImg.attr("id","intro-image");
	
		var $myImg2 = $("<img>");
		$myImg2.attr("src", "./assets/images/logoa2.png");
		$myImg2.addClass("intro-image-class");
		$myImg2.attr("id","intro-image");

		$("body").append($myImg);
		setTimeout("$('#intro-image').css({opacity: '0.7'})", 30);
		setTimeout("$('#intro-image').css({filter: 'blur(0px)'})", 30);
		setTimeout(function () { $('#intro-image').replaceWith($myImg2); }, 1250);
	}
}

function generateHighlight(event, background, color, color2)
{
	var circle_centerX = event.offsetX;
	var circle_centerY = event.offsetY;

	var $mySVG = $(document.createElementNS("http://www.w3.org/2000/svg","svg"));
	$mySVG.css({width: "10px", height: "10px", position: "absolute", top: (circle_centerY - 5) + "px", left: (circle_centerX - 5) + "px"});
	$mySVG.addClass("highlight-square-svg");
	$mySVG.attr("id", event.target.id + "-HS");

	var $myRect = $(document.createElementNS("http://www.w3.org/2000/svg","rect"));
	$myRect.addClass("highlight-square");
	$myRect.attr("width", "10px");
	$myRect.attr("height", "10px");
	$myRect.attr("style", "fill: " + color2);

	$myRect.appendTo($mySVG);
	$("#" + background).append($mySVG);


	var $mySVG2 = $(document.createElementNS("http://www.w3.org/2000/svg","svg"));
	$mySVG2.css({width: "10px", height: "10px", position: "absolute", top: (circle_centerY - 5) + "px", left: (circle_centerX - 5) + "px"});
	$mySVG2.addClass("highlight-square-svg2");
	$mySVG2.attr("id", event.target.id + "-HS2");

	var $myRect2 = $(document.createElementNS("http://www.w3.org/2000/svg","rect"));
	$myRect2.addClass("highlight-square");
	$myRect2.attr("width", "10px");
	$myRect2.attr("height", "10px");
	$myRect2.attr("style", "fill: " + color);

	$myRect2.appendTo($mySVG2);
	$("#" + background).append($mySVG2);

	setTimeout(function () { $("#" + event.target.id + "-HS").css({opacity: "1", transform: "scale(35,35)"}); }, 30);
	setTimeout(function () { $("#" + event.target.id + "-HS2").css({opacity: "1", transform: "scale(35,35)"}); }, 30);


}

function removeHighlight(event)
{
	$("#" + event.target.id + "-HS").remove();
	$("#" + event.target.id + "-HS2").remove();
}

function closeIntro()
{
	$("#intro-button-play").off();
	$("#introWaterRow").css({transition: "transform ease-in 4s"});
	$(".coralIntroBackground").css({transition: "transform ease-in 4s"});
	$(".intro-image-class").css({transition: "opacity 250ms"});
	$(".intro-button").css({transition: "opacity 250ms"});
	$(".intro-button-background").css({transition: "opacity 250ms"});
	
	setTimeout( function () {
	$("#introWaterRow").css({transform: "translateY(" + (-(window.innerHeight + 260)) + "px)"});
	$(".coralIntroBackground").css({transform: "translateY(" + (-(window.innerHeight + 260)) + "px)"});
	$(".intro-image-class").css({opacity: "0"});
	$(".intro-button").css({opacity: "0"});
	$(".intro-button-background").css({opacity: "0"});
	}, 30);

	setTimeout("closeTransition()", 4030);
}

function closeTransition()
{
	$("#introWaterRow svg").css({animationPlayState: "paused"});
	
	introRows = 0;
	
	introRowDelayArray.reverse(); //make the delay from right to left

	while(introRows * 130 < window.innerHeight) //create as rows to fill starting viewport height
	{
		introRows++;
		generateRow("intro", introRows);
	}

	//removeIntroElements
	$(".intro-image-class").remove();
	$(".intro-button").remove();
	$(".intro-button-background").remove();

	//remove animation
	$("#introWaterRow").css({transition: "none"});
	$(".coralIntroBackground").css({transition: "none"});

	setTimeout( function () {
	$("#introWaterRow").css({transform: "translateY(0px) translateX(-25px)"});
	$(".coralIntroBackground").css({transform: "translateY(0px)"});
	}, introFullTime);

	setTimeout("$('.intro-square-row').remove()", introFullTime + 100);
	setTimeout(showModeSelect, introFullTime);
}

