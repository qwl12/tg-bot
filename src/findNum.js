const gameState = {}; 
const randomNumbers = {}; 

function startGuessGame(ctx) {
  const randomNumber = Math.floor(Math.random() * 100) + 1; 
  randomNumbers[ctx.chat.id] = randomNumber; 
  gameState[ctx.chat.id] = "active";

  ctx.reply("Я загадал число от 1 до 100. Попробуйте угадать! Напишите число в чат.");
}
function handleGuess(ctx) {
  const chatId = ctx.chat.id;
  const userMessage = ctx.message.text;

  if (gameState[chatId] !== "active") {
    return ctx.reply("Игра не начата. Используйте команду /guess, чтобы начать.");
  }

  const guessedNumber = parseInt(userMessage, 10);
  if (isNaN(guessedNumber)) {
    return ctx.reply("Пожалуйста, введите число от 1 до 100.");
  }

  const targetNumber = randomNumbers[chatId];

  if (guessedNumber === targetNumber) {
    ctx.reply(`🎉 WW! Вы угадали число: ${targetNumber}`);
    delete randomNumbers[chatId];
    delete gameState[chatId]; 
  } else if (guessedNumber < targetNumber) {
    ctx.reply("🔼 Больше!");
  } else {
    ctx.reply("🔽 Меньше!");
  }
}

module.exports = { startGuessGame, handleGuess };
