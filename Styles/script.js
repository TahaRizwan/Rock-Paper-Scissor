let computerScore,humanScore;
let name;
name = prompt("Enter your name : ");
let computer;
let human;
function humanPlay(){
    let signs = prompt("Choose between Rock , Paper and Scissor");
    let choice = signs.toUpperCase();
    return choice;
}

function computerPlay(){
    let signs=["Rock","Paper","Scissor"];
    let number=Math.floor(Math.random()*3);
    let choice=signs[number].toUpperCase();
    return choice;
}

function playRound(human,computer){
    if((human ==="ROCK")&&(computer ==="ROCK")){
        console.log(human+" ties "+computer);
        console.log("It's a Tie");
    }
    if((human ==="PAPER")&&(computer ==="PAPER")){
        console.log(human+" ties "+computer);
        console.log("It's a Tie");
    }
    if((human ==="SCISSOR")&&(computer ==="SCISSOR")){
        console.log(human+" ties "+computer);
        console.log("It's a Tie");
    }
    else if((human==="ROCK")&&(computer==="PAPER")){
        console.log(computer+" beats "+human);
        console.log("Computer Wins");
        computerWins();
    }
    else if((human==="ROCK")&&(computer==="SCISSOR")){
        console.log(human+" beats "+computer);
        console.log(`${name} Wins`);
        humanWins();
    }
    else if((human==="PAPER")&&(computer==="SCISSOR")){
        console.log(computer+" beats "+human);
        console.log("Computer Wins");
        computerWins();
    }
    else if((human==="PAPER")&&(computer==="ROCK")){
        console.log(human+" beats "+computer);
        console.log(`${name} Wins`);
        humanWins();
    }
    else if((human==="SCISSOR")&&(computer==="PAPER")){
        console.log(computer+" beats "+human);
        console.log("Computer Wins");
        computerWins();
    }
    else if((human==="SCISSOR")&&(computer==="ROCK")){
        console.log(human+" beats "+computer);
        console.log(`${name} Wins`);
        humanWins();
    }
}
function computerWins(){
    computerScore++;
    return;
}
function humanWins(){
    humanScore++;
    return;
}
function game(){
    computerScore=0;
    humanScore=0;
    
    for(let i=0;i<5;i++){
        computer = computerPlay();
        human = humanPlay();

        playRound(human,computer);
    }
    console.log("Computer Score is "+computerScore);
    console.log(`${name} Score is `+humanScore);
}
game();