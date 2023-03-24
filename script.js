function getComputerChoice(){
    const n = Math.floor(Math.random() * 3);
    if(n == 0){
        return("rock");
    }else if(n == 1){
        return("paper");
    }else{
        return("scissors");
    }
}

function playRound(playerSelection,compSelection){
    const x1 = playerSelection.toLowerCase();
    const x2 = compSelection;
    if(x1 == x2){
        return(`1. Draw! ${x1} draws ${x2}`);
    }else if(x1 == "rock" && x2 == "paper" || x1 == "paper" && x2 == "scissors" || x1 == "scissors" && x2 == "rock"){
        return(`2. U Lose! ${x2} beats ${x1}`)
    }else{
        return(`3. U Win! ${x1} beats ${x2}`)
    }
}

function game(){
    let ans,win = 0 ,lose = 0;
    while(win < 5 && lose < 5){
        const playerSelection = prompt("Enter ur choice")
        const compSelection = getComputerChoice();
        ans = playRound(playerSelection,compSelection);
        console.log(ans);
        if(ans[0] == "2"){
            lose++;
        }else if(ans[0] == "3"){
            win++;
        }  
    }
    if(win>lose){
        return("win");
    }else{
        return(lose)
    }
}


const finalans = game();
finalans == "win" ? console.log("U win this round") : console.log("u lose this round");
