function handleHelpCommand(ctx) {
    const helpMessage = `
  Привет! Я ваш игровой бот. Вот что я умею:
  
  🎮 **Игры**:
  - /guess — Угадай число от 1 до 100
  - /rps — Камень, ножницы, бумага
  - /coin — Орёл или решка
  
  🛠 **Дополнительно**:
  - /start — Начать общение с ботом
  - /help — Показать это сообщение
  
  Выберите команду и начните игру! 🎉
    `;
    ctx.reply(helpMessage, { parse_mode: "Markdown" });
  }
  
  module.exports = { handleHelpCommand };
  