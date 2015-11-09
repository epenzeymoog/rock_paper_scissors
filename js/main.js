//Global variables
var computerWins = 0;
var userWins = 0;
var lastWinner = "none";

//Link functions to events
document.getElementById('rock-btn').addEventListener("click", function() {
	runGame("rock");
});
document.getElementById('paper-btn').addEventListener("click", function() {
	runGame("paper");
});
document.getElementById('scissors-btn').addEventListener("click", function() {
	runGame("scissors");
});

//Functions

function runGame(userChoice) {
	var computerChoice = getComputerChoice();
	var results = determineWinner(userChoice, computerChoice); //core of the logic of this project
	if(results == "user"){
		lastWinner = "user"; 
		userWins +=1;
	}else if(results == "computer"){
		lastWinner = "computer";
		computerWins += 1;
	}else{ //do nothing it's tied
		lastWinner = "none";
		//don't need this - if it's not the computer or the user winning, has to be a tie.
	}

	var trashTalk = getTrashTalk(results, computerChoice, userChoice);
	updateUserInterface(trashTalk);

}

function getComputerChoice(){
	var rand = Math.random();
	if(rand < .333){
		return "rock";
	}else if(rand < .666){
		return "paper";
	}else{
	return "scissors";
	}
}

function determineWinner(userChoice, computerChoice){ 
	var thisWinner	
	if(userChoice == "rock" && computerChoice == "scissors"){
		return "user" 
	}
	else if (userChoice == computerChoice){
		return "tie"
	}
	// else if(userChoice == "rock" && computerChoice == "paper"){
	// 	return "computer"
	// }
	// else if(userChoice == "rock" && computerChoice == "rock"){
	// 	return "tie"
	// }
	// else if(userChoice == "paper" && computerChoice == "scissors"){
	// 	return "computer"
	// }
	else if(userChoice == "paper" && computerChoice == "rock"){
		return "user"
	}
	// else if(userChoice == "paper" && computerChoice == "paper"){
	// 	return "tie"
	// }
	// else if(userChoice == "scissors" && computerChoice == "rock"){
	// 	return "computer"
	// }
	else if(userChoice == "scissors" && computerChoice == "paper"){
		return "user"
	}
	// else if(userChoice == "scissors" && computerChoice == "scissors"){
	// 	return "tie"
	// }
	else{
		return "computer";
	}
}

// Hi Dave! So, this part below was my attempt to use what you had in the lab_starter_code file 
// as inspiration to be able to have a message for when the user or computer won twice in a row, using
// a combination of thisWinner and LastWinner to get at it. But, I couldn't get it to work! I'm happy
// with what I ended up with, but I played around with this for a loooong time and couldn't figure it out.
// If you know what I was doing wrong here I'd love to know!

// 	if(thisWinner == "user"){
// 		if(lastWinner == "none"){
// 			message = "The user wins once.";
// 		}
// 		else if(lastWinner == "computer"){
// 			message = "The user wins once.";
// 		}
// 		else if(lastWinner == "user"){
// 			message = "The user wins twice";
// 		}
// 	}
	
// 	else if(thisWinner == "computer"){
// 		if(lastWinner == "none"){
// 			message = "The computer wins once";
// 		}
// 		else if(lastWinner == "user"){
// 			message = "The computer wins once";
// 		}
// 		else if(lastWinner == "computer"){
// 			message = "the computer wins twice";
// 		}
// 	}
	
// 	else if(thisWinner == "tie"){
// 		message = "it's a tie.";
// 	}

function updateUserInterface(trashTalk){
	document.getElementById('user-score').innerHTML = userWins;
	document.getElementById('computer-score').innerHTML = computerWins;
	document.getElementById('trash-talk').innerHTML = trashTalk;
}

function getTrashTalk(thisWinner, computerChoice, userChoice){
	var message;
		
	if(thisWinner == "tie"){
		message = "Looks like we both picked " + userChoice + ".<br> Stop copying me.";
	}
	else if(thisWinner == "user" && userWins == 1){
		message = "<span class='capitalize'>" + userChoice + "</span>" + " beats " + computerChoice + ". <br>You win...this time.";
	}
	else if(thisWinner == "computer" && computerWins == 1){
		message = "I win. You might as well go putz <br> around your facebook now.";
	}
	else if(thisWinner == "user" && userWins == 2){
		message = "Two wins for you. You must be feeling pretty good right about now.";
	}
	else if(thisWinner == "computer" && computerWins == 2){
		message = "That's two for me now. You're embarassing yourself.";
	}
	else if(thisWinner == "user" && userWins <= 5){
		message = "I hope the fact that you keep on winning <br> is filling some type of pathetic void in your life.";
	}
	else if(thisWinner == "computer" && computerWins <= 5){
		message = "I keep on winning. You're a sad <br> human who's losing to a computer.";
	}
	else if(thisWinner == "computer" && computerWins <= 7){
		message = "So I won again. Why don't you go do something with your life instead of playing with me all day?";
	}
	else if(thisWinner == "user" && userWins <= 7){
		message = "Great, you win again. Might as well quit with this happy feeling in your heart and go do something useful with your time.";
	}
	else if(thisWinner == "user" && userWins >7){
		message = "Seriously, stop playing already. You win and win and win, I get it. Go away."
	}
	else if(thisWinner == "computer" && computerWins >7){
		message = "I win. And you've been playing this game for too long. Go away."
	}


// console.log(thisWinner, lastWinner);
	return message;
}
