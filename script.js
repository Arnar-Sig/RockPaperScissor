function computerPlay(){
    let tala = Math.floor(Math.random() *3)+1;
    
    if(tala==1){
        return "ROCK";
    }
    else if(tala==2){
        return "PAPER";
    }
    else{
        return "SCISSOR";
    }
}

function oneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection==computerSelection){
        console.log('jafntefli!');
    }
    else if(playerSelection=="ROCK"){
        if(computerSelection=="PAPER"){
            console.log('tölva vinnur')
        }
        else{
            console.log('þú vinnur');
        }
    }
    else if(playerSelection=="PAPER"){
        if(computerSelection=="SCISSOR"){
            console.log('tölva vinnur')
        }
        else{
            console.log('þú vinnur');
        }
    }
    else if(playerSelection=="SCISSOR"){
        if(computerSelection=="ROCK"){
            console.log('tölva vinnur')
        }
        else{
            console.log('þú vinnur');
        }
    }
    else{
        console.log("þarft að skrifa rock, paper eða scissor svo þú tapar í þetta skipti")
    }
}

function leikur(){
    for(let i=0; i<5; i++){
        promptUtkoma = window.prompt("ROCK,PAPER,SCISSOR");
        oneRound(promptUtkoma,computerPlay());
    }
}

leikur();