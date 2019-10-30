<template>
  <div class="mainDiv">
    <input type='radio' id='rock' value='rock' v-model='playerChoice'>
    <label for='rock'>Rock</label>
        
    <input type='radio' id='paper' value='paper' v-model='playerChoice'>
    <label for='paper'>Paper</label>
        
    <input type='radio' id='scissors' value='scissors' v-model='playerChoice'>
    <label for='scissors'>Scissors</label>
    
    <br />
    <button v-if='!played' @click='playGame'>Play</button>					
				
    <div v-if='played' :class="{ success : !isError }">
      <p v-if='!isError'>
        The computer chose : {{ computerChoice }}
        <br />
        {{ resultMessage }}
        <br />
        <button @click='resetGame'>Reset</button>	
      </p>							      
    </div>
    <div v-if='isError' :class="{ error : isError }">
      <p>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RockPaperScissors',
    data: function () {
      return {        
        played: false,
        choices: ["rock", "paper", "scissors"],
        computerChoice : '',
        playerChoice: '',
        isError: false,
        errorMessage: '',
        resultMessage: ''
      }
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
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    background-color: red;
    color: white;
  }

  .success {	
    color: green;
  }

  .mainDiv {
    padding-top : 20px;
  }
</style>
