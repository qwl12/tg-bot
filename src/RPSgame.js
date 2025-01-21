function RPSplay (userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === botChoice) {
        result = 'ничья';
    } else if 
    (userChoice === 'rock' && botChoice === 'paper' ||
    userChoice === 'scissors' && botChoice === 'rock'||
    userChoice === 'paper' && botChoice === 'scissors')
    {
        result = 'lose :(';
    } else {
        result = 'WW!';
    }

    return `Ваш выбор: ${getResult(userChoice)}Выбор бота: ${getResult(botChoice)}
    
    \n${result}`;
}
function getResult(choice) {
    switch (choice) {

    case "rock":
        return "rock";
    case "paper":
        return "paper";
    case "scissors":
        return "scissors";
    default:
        return "";
    }
    }

module.exports = { RPSplay };