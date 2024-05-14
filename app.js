let userscore = 0;
let computerscore = 0;

const userChoice = document.querySelectorAll("#choice");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let computer_score = document.querySelector("#computer-score");
const genCompChoice = ()=>{
    const possibleChoices = ["rock","paper","sicssors"];
    let randomInd = Math.floor(Math.random()*3);
    const computerChoice = possibleChoices[randomInd];
    return computerChoice;
};

const playgame = (choiceid)=>{

    let computerTurn = genCompChoice();
    let userWin = true;
    if(computerTurn === choiceid)
    {
        msg.innerText = "game is drawn, please try again"
        msg.style.backgroundColor = "#081b31";
    }
    else
    {
        if(choiceid === "rock")
        {
           userWin = computerTurn === "paper" ? false : true;
        }
        else if(choiceid === "paper")
        {
            userWin = computerTurn === "sicssors" ? false : true;
        }
        else
        {
            userWin = computerTurn === "rock" ? false : true;
        }
        showResult(userWin,computerTurn,choiceid);
    }
};

 const showResult = (userWin,computerTurn,choiceid)=>{

    if(userWin)
    {
        msg.innerText = `You Win!, ${choiceid} beats ${computerTurn}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userscore++;
        user_score.innerText = userscore;
    }
    else
    {
        msg.innerText = `You lose!, ${computerTurn} beats your ${choiceid}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        computerscore++;
        computer_score.innerText = computerscore;
    }

 };

 userChoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceid = choice.getAttribute("class");
        playgame(choiceid);
    });
 });