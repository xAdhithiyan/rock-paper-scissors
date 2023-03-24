function getComputerChoice(){
    const n = Math.floor(Math.random() * 3);
    if(n == 0){
        return("rock");
    }else if(n == 2){
        return("paper");
    }else{
        return("scissors");
    }
}

function playRound(playerSelection,compSelection){
    const x1 = playerSelection.toLowerCase();
    const x2 = compSelection;
    if(x1 == x2){
        return(`Draw! ${x1} draws ${x2}`);
    }else if(x1 == "rock" && x2 == "paper" || x1 == "paper" && x2 == "scissors" || x1 == "scissors" && x2 == "rock"){
        return(`U Lose! ${x2} beats ${x1}`)
    }else{
        return(`U Win! ${x1} beats ${x2}`)
    }
}

const playerSelection = "Paper";
const compSelection = getComputerChoice();

console.log(playRound(playerSelection,compSelection));