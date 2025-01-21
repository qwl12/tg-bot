function flipcoin(userChoice) {
    const choices = ['orel', 'reshka', ];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];


    const result = userChoice === botChoice ? "WW!" : "Lose!";
    return `Ваш выбор: ${getResult(userChoice)}\n    
            Выбор бота: ${getResult(botChoice)}\n
            
            \n${result}`;

            
    function getResult(choice) {
    switch (choice) {
        case "orel":
            return "Орёл";
        case "reshka":
            return "Решка";
        default:
            return "";
        }
        }
        
    
}

module.exports = { flipcoin };