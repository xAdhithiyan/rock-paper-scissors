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


// plays one single game
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


//for playing 5 rounds and dispalying winner
function game(playerSelection,compSelection){


    //getting and printing result for a single game
    let ans = playRound(playerSelection,compSelection)
    const body = document.querySelector("body");
    const result = document.createElement("div");
    result.textContent = ans;
    result.style.cssText = "text-align:center; padding:10px; "
    body.appendChild(result);
    


    //checking and printing the result for a round(5 games)
    if(ans[0] == "2"){
        lose++;
    }else if(ans[0] == "3"){
        win++;
    }
    if(win == 5){
        const finalResult = document.createElement("div")
        finalResult.textContent = "U WIN THIS ROUND"
        body.appendChild(finalResult)
        win = 0;
        lose = 0;

    }else if(lose == 5){
        const finalResult = document.createElement("div")
        finalResult.textContent = "U LOSE THIS ROUND"
        body.appendChild(finalResult)
        win = 0;
        lose = 0;
    }

}

function gettingInputs(){
    const playerSelection = this.classList.value;
    if(playerSelection){
        const compSelection = getComputerChoice();
        game(playerSelection , compSelection);
    }
}


let win = 0 ,lose = 0;
const btns = document.querySelectorAll("button"); 
btns.forEach(n => n.addEventListener("click", gettingInputs));

console