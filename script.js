//Variables to set starting scores and round number
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Genterate a number to use as target
function generateTarget(){
   target =  Math.floor(Math.random() * 10);
   return target;
}

//Function to compare numbers against target number
function compareGuesses(human, comp, secret){
   //Checks between human and computer against target number
   humanDifference = Math.abs(human - secret);
   compDifference = Math.abs(comp - secret);
   //Checks the number between 0 - 9 and creates an alert if it is not
   if(human < 0 || human > 9){
    return alert("Please use a number between 0 - 9!");
   }
   //Checks if human is same as computer and returns true
   if(human == comp){
      return true;
   } 
   //Checks human difference against taregt returns true if less than computer or false if not
   if(humanDifference < compDifference){
      return true;
   } else {
      return false;
   }

   //Returns difference between human and computer
function getAbsoluteDistance(human, comp){
   return human - comp;
   }
}

//Checks human is winner and increases there score by 1 if so or increases computer score if not
function updateScore(winner){
   if(winner == 'human'){
     humanScore++;
   } else {
     computerScore++;
   }
}

//Increases round number by 1
function advanceRound(){
  currentRoundNumber++
}