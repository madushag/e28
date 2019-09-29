// The Vue instance
let app = new Vue({
  // Options
  el: '#app',
  data: {
		isAdmin : true,
        playerName: "",
		guess: null,
        'guesses': []
    },
	methods: {
		playGame : function (event) {
			var choices = ["Rock", "Paper", "Scissors"];
			var userChoice = document.querySelector('input[name="choices"]:checked');

			if(userChoice == null){
				alert("Please choose one option...");
				return;
			}
			else{
				var userChoiceText = userChoice.value;               
				var computerChoice = Math.floor(Math.random() * 3);           
				computerChoiceText = choices[computerChoice];
				
				var winner = determineWinner(userChoiceText, computerChoiceText);

				document.getElementById("computerChoice").innerHTML = computerChoiceText;
				
				var resultText;
				if(winner != "tie"){
					resultText = "The winner is the " + winner + ".";
				}
				else{
					resultText = "The game is a tie.";
				}
					
				document.getElementById("result").innerHTML = resultText;
				document.getElementById("divResult").className = "visible";
			}    
		},
		determineWinner : function (userChoiceText, computerChoiceText) {
			var winner = "";

			if(userChoiceText == "Paper"){
				if(computerChoiceText == "Rock"){
					winner = "user";
				}
				else if(computerChoiceText == "Scissors") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}

			if(userChoiceText == "Rock"){
				if(computerChoiceText == "Scissors"){
					winner = "user";
				}
				else if(computerChoiceText == "Paper") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}
			
			if(userChoiceText == "Scissors"){
				if(computerChoiceText == "Paper"){
					winner = "user";
				}
				else if(computerChoiceText == "Rock") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}

			return winner;
		}
	}
})
