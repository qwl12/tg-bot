const { Bot, InlineKeyboard } = require('grammy');

const bot = new Bot('7744251076:AAEvkaRlygAhQFE2IYTL4mkCwGfmLLte9TE');


//старт
bot.command('start',(ctx) => {
    const keyboard = new InlineKeyboard()
    .text('Орел и решка', 'flipcoin')
    .text('Камень, ножница, бумага', 'option2')
    .text('Угадай число', 'option3')
    .row()
    .text('помощь', 'help');
    
    ctx.reply('Привет я саня шляпик, если ты еще тут, то посмотри во что я умею играть:', {reply_markup: keyboard});
});

bot.command('flipcoin', (ctx) =>{
   const keyboard = new InlineKeyboard().text('Решка', 'reshka').text('Орел', 'orel');
   ctx.reply('Выбери орел или решка', {reply_markup: keyboard});
})

//обработка кнопок
bot.on('callback_query:data', async (ctx) => {
    
    const data = ctx.callbackQuery.data;    

        if( data === 'reshka' || data === 'orel') {
            const result = Math.random() < 0.5 ? 'reshka' : 'orel';
            const userChoice = data === 'orel' ? 'Орел' : 'Решка';
            const botResult = result === 'orel' ? 'Орел' : 'Решка';
               
            const resultMessage = userChoice === botResult
            ? `ты выбрал ${userChoice}, и угадал(а) Сыграем еще?`
            :  `ты выбрал ${userChoice}, но выпал ${botResult}, Сыграем еще?`;


            const playAgainKeyboard = new InlineKeyboard()
            .text('да', 'flipcoin')
            .text('нет', 'start');

            await ctx.reply(resultMessage, {reply_markup: playAgainKeyboard});
        } else if (data === 'flipcoin') {
            ctx.reply('Сыграем в орел и решку? /flipcoin')
        } else if (data === 'start') {
            ctx.reply ('Перейдем в начало. /start')
        }


    });






//помощь
bot.command('help',(ctx) => {
    ctx.reply('/shlyapa - привет шляпик\n/echo - передразнить тебя\n/jonkler - щутка :)');
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