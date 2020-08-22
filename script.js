let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
   target =  Math.floor(Math.random() * 10);
   return target;
}

function compareGuesses(human, comp, secret){
   humanDifference = Math.abs(human - secret);
   compDifference = Math.abs(comp - secret);
   if(human < 0 || human > 9){
    return alert("Please use a number between 0 - 9!");
   }
   if(human == comp){
      return true;
   } 
   if(humanDifference < compDifference){
      return true;
   } else {
      return false;
   }

   function getAbsoluteDistance(human, comp){
     return human - comp;
   }
}

function updateScore(winner){
   if(winner == 'human'){
     humanScore++;
   } else {
     computerScore++;
   }
}

function advanceRound(){
  currentRoundNumber++
}