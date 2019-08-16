//save background colour for incorrect choice
var bckgColor = "#232323";

var numOfSquares = 6;

//set array of colours
var colours = generateRandomColours(numOfSquares);

var squares = document.querySelectorAll(".square");

var pickedColour = pickColour();

var colourDisplay = document.getElementById("colourDisplay");

var header = document.querySelector("h1");

var message = document.getElementById("message");

var resetBtn = document.querySelector("#reset");

var modeBtn = document.querySelectorAll(".mode");

colourDisplay.textContent = pickedColour;

init ();

function init(){

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeBtn.length; i ++){
	
	modeBtn[i].addEventListener("click", function(){

			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "EASY" ? numOfSquares =3: numOfSquares =6;
			reset();
		});
	}	
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click",function(){
			if (this.style.backgroundColor.toUpperCase() === pickedColour.toUpperCase()) {
				message.textContent = "Winner";
				changeColours(pickedColour);
				header.style.backgroundColor = pickedColour;
				resetBtn.textContent = "Play again?"
			} else {
				this.style.backgroundColor = bckgColor;
				message.textContent = "Try again";
			}
		});
	}
}


function pickColour(){
	
	return colours[Math.floor(Math.random() * colours.length)];
}

function generateRandomColours(num){

	var arr = [];

	for (var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "RGB(" + red + ", " + green + ", " + blue + ")";
}

function changeColours(colour){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}


resetBtn.addEventListener("click", function(){
	reset();
});



function reset(){

	//generate all new colours

	colours = generateRandomColours(numOfSquares);

	//pick a new random colour from array
	pickedColour = pickColour();

	//change colour display
	colourDisplay.textContent = pickedColour;

	//change colours of squares
	for (var i = 0; i < squares.length; i++){

		if (colours[i]){
			//add initial colours to squares
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else squares[i].style.display = "none";
	}

	resetBtn.textContent = "New Colours"

	message.textContent = "";

	header.style.backgroundColor = "steelBlue";
}


//below code has been refactored.
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");

// 	numOfSquares = 3;

// 	colours = generateRandomColours(numOfSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;

// 	for (var i = 0; i < squares.length; i++){

// 		if (colours[i]) {
// 			squares[i].style.backgroundColor = colours[i];
// 		} else squares[i].style.display = "none";
// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");	

// 	numOfSquares = 6;

// 	colours = generateRandomColours(numOfSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;

// 	for (var i = 0; i < squares.length; i++){

// 		squares[i].style.backgroundColor = colours[i];
// 		squares[i].style.display = "block";
		
// 	}

// });