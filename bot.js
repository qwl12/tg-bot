const { Bot, InlineKeyboard } = require('grammy');
const { rpsKeyboard } = require('./keyboards/RPSKeyboard');
const bot = new Bot('7744251076:AAEvkaRlygAhQFE2IYTL4mkCwGfmLLte9TE');
const { RPSplay } = require('./src/RPSgame');
const { flipcoin } = require('./src/flipcoin');
const { handleHelpCommand } = require("./src/help");
const {startGuessGame, handleGuess} = require('./src/findNum');



//старт
bot.command('start',(ctx) => {
    const keyboard = new InlineKeyboard()
    .text('Орел и решка', 'flipcoin')
    .text('Камень, ножница, бумага', 'RPS')
    .text('Угадай число', 'guess')
    .row()
    .text('Помощь','help');

    
    ctx.reply('Привет я саня шляпик, если ты еще тут, то посмотри во что я умею играть:', {reply_markup: keyboard});
});

// ОРЕЛ ИЛИ РЕШКА
bot.command('flipcoin', (ctx) =>{
   const keyboard = new InlineKeyboard().text('Решка', 'reshka').text('Орел', 'orel');
   ctx.reply('Выбери орел или решка', {reply_markup: keyboard});
})

// КАМЕНЬ НОЖНИЦЫ БУМАГА
bot.command("rps", async (ctx) => {
    await ctx.reply("Играем в 'Камень, ножницы, бумага'! Выберите свой ход:", {
      reply_markup: rpsKeyboard,
    });
});

// Угадай число
bot.command("guess", (ctx) => {
    startGuessGame(ctx);
  });

//btn`s
bot.callbackQuery("guess", (ctx) => {
  ctx.answerCallbackQuery(); 
  ctx.reply("Вы выбрали игру 'Угадай число'. Введите /guess, чтобы начать!");
});
bot.callbackQuery("flipcoin", (ctx) => {
  ctx.answerCallbackQuery(); 
  ctx.reply("Вы выбрали игру 'Орел и решка'. Введите /flipcoin, чтобы начать!");
});
bot.callbackQuery("RPS", (ctx) => {
    ctx.answerCallbackQuery(); 
    ctx.reply("Вы выбрали игру 'Камень ножницы бумага'. Введите /RPS, чтобы начать!");
  });
  bot.callbackQuery("help", (ctx) => {

    ctx.reply(`Привет! Я ваш игровой бот. Вот что я умею:
  
  🎮 **Игры**:
  - /guess — Угадай число от 1 до 100
  - /rps — Камень, ножницы, бумага
  - /coin — Орёл или решка
  
  🛠 **Дополнительно**:
  - /start — Начать общение с ботом
  - /help — Показать это сообщение
  
  Выберите команду и начните игру! 🎉
    `)
  });


//обработка кнопок для игр
bot.on("callback_query:data", async (ctx) => {
    const data = ctx.callbackQuery.data;

    if (["rock", "scissors", "paper"].includes(data)) {
      const resultMessage = RPSplay(data);
      await ctx.reply(resultMessage);
    }
    if (["orel","reshka"].includes(data)) {
        const resultMessage = flipcoin(data);
        await ctx.reply(resultMessage);
    }

});


bot.command("help", (ctx) => {
    handleHelpCommand(ctx);
  });

bot.on("message", (ctx) => {
    handleGuess(ctx);
  });


//повторить сообщение
bot.command('echo',(ctx) => {
    const message = ctx.message.text.split(' ').slice(1).join(' ');
    ctx.reply(message || 'введи сообщение для пива');
});

//шутка
bot.command('jonkler', async (ctx) => {
    const jokes = [
        'Купаются как-то два тимы в бассейне',
        'Тима умный',
        'Войти в айти (ахвхаывхаыхвах разрывная)',
    ];

    const randomjoke = jokes[Math.floor(Math.random() * jokes.length)];
    await ctx.reply(randomjoke);
});

bot.start();
console.log('стартуем');