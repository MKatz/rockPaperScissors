$(document).ready(function(){

    $('#rock').click(function(e){    
        var pickObject = prompt("Pick rock, paper, or scissors!");

		var computerPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
			if (computerPick === 1) {
				computerPick = "rock";
			} else if (computerPick === 2) {
				computerPick = "paper";
			} else {
				computerPick = "scissors";
		}

alert("The robots pick... " + computerPick);
    	game(pickObject, computerPick);
    })

// var pickObject = prompt("Pick rock, paper, or scissors!");

// var computerPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
// 	if (computerPick === 1) {
// 		computerPick = "rock";
// 		} else if (computerPick === 2) {
// 			computerPick = "paper";
// 		} else {
// 			computerPick = "scissors";
// 		}

// alert("The robots pick... " + computerPick);

var game = function(choiceA, choiceB){
	if (choiceA === choiceB) {
		alert("Tie! Pick again.");
		} else if (choiceA === "rock") {
			if (choiceB === "scissors") {
				alert("rock wins!");
					} else {
						alert("paper wins!");
					}
		} else if (choiceA === "paper") {
			if (choiceB === "rock") {
				alert("paper wins!");
				} else {
					alert("scissors wins!");
				}
		} else if (choiceA === "scissors") {
			if (choiceB === "rock") {
				alert("rock wins!");
				} else {
					alert("scissors wins!");
				}
			}
		}

// game(pickObject, computerPick);

});