function rockPaperScissors(userInput) {
    userInput = userInput.toString()
    let random = Math.random()*10;
    var botInput;

    if(random < (10/3)) {
        botInput = 'rock';
    } else if(random >= (10/3) && random < (20/3)) {
        botInput = 'paper';
    } else {
        botInput = 'scissors';
    }
    
    if(userInput === botInput) {
        console.log("I had " + userInput + " too. It's a draw!");
    } else {
        if(userInput === 'rock') {
            if(botInput === 'scissors') {
                console.log("I had scissors. You win!");
            } else {
                console.log("I had paper. I win!");
            }
        } else if(userInput === 'scissors'){
            if(botInput === 'paper') {
                console.log("I had paper. You win!");
            } else {
                console.log("I had rock. I win!");
            }
        } else if(userInput === 'paper'){
            if(botInput === 'rock') {
                console.log("I had rock. You win!");
            } else {
                console.log("I had scissors. I win!");
            }
        } else {
            console.log("Invalid input!");
        }
    }
}