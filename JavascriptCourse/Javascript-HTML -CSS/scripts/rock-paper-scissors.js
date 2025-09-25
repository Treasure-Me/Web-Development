let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
    
}

function updateScore(result){
    if (result == 'Tie'){
        score.ties += 1;
    }else if (result == 'You win'){
        score.wins += 1;
    }else if (result == 'You lose'){
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}
        Ties: ${score.ties}`;

    document.querySelector('.js-result').innerHTML = `${result}`;
}

function playGame(playerMove){
    const computerMove = computerMoves();

    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

    const rules = {
        'rock':'scissors',
        'scissors':'paper',
        'paper':'rock'
    }

    if (playerMove === computerMove){
        return [computerMove, 'Tie']
    }else if (rules[playerMove] === computerMove){
        return [computerMove,'You win']
    }else{
        return [computerMove,'You lose']
    }
}

let computerMove = '';

function computerMoves(){
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper'
    }else if (randomNumber>=2/3 && randomNumber<1){
        computerMove = 'scissors'
    }

    return computerMove
}

document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}
    Ties: ${score.ties}`;