// The Vue instance
let app = new Vue({
	// Options
	el: '#app',
	data: {        
		played: false,
		choices: ["rock", "paper", "scissors"],
		computerChoice : '',
		playerChoice: '',
		isError: false,
		errorMessage: '',
		resultMessage: ''
	},
	methods: {
		playGame: function () {
			this.played = true;			
			
			if(this.playerChoice === ''){
				this.isError = true;
				this.errorMessage = 'Please make a choice.';
				this.played = false;
			}
			else{
				this.isError = false;
				
				// randomly pick a value between 1 and 3
				let computerChoiceIndex = Math.floor(Math.random() * 3);           
				this.computerChoice = this.choices[computerChoiceIndex];
				
				let winner = this.determineWinner(this.playerChoice, this.computerChoice);
				if(winner != "tie") {
					 this.resultMessage = "The winner is the " + winner + ".";
				}
				else {
					 this.resultMessage = "The game is a tie.";
				}				
			}
		},
		determineWinner : function (userChoice, computerChoice) {
			let winner = '';

			if(userChoice == "paper"){
				if(computerChoice == "rock"){
					winner = "user";
				}
				else if(computerChoice == "scissors") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}

			if(userChoice == "rock"){
				if(computerChoice == "scissors"){
					winner = "user";
				}
				else if(computerChoice == "paper") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}
			
			if(userChoice == "scissors"){
				if(computerChoice == "paper"){
					winner = "user";
				}
				else if(computerChoice == "rock") {
					winner = "computer";
				}
				else {
					winner = "tie";
				}
			}

			return winner;
		},
		resetGame: function () {
			this.played = false;
			this.playerChoice = '';
		}
	}
})

