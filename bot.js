const { Bot, InlineKeyboard} = require('grammy');

const bot = new Bot('7744251076:AAEvkaRlygAhQFE2IYTL4mkCwGfmLLte9TE');


//старт
bot.command('start',(ctx) => {
    const keyboard = new InlineKeyboard()
    .text('Орел и решка', 'option1')
    .text('Камень, ножница, бумага', 'option2')
    .text('Угадай число', 'option3')
    .row()
    .text('помощь', 'help');
    
    ctx.reply('Привет я саня шляпик, если ты еще тут, то посмотри во что я умею играть:', {reply_markup: keyboard});
});

//обработка кнопок
bot.on('callback_query:data', (ctx) => {
    const data = ctx.callbackQuery.data;
    const keyboard = new InlineKeyboard();
    if ( data === 'option1') {
        
        ctx.answerCallbackQuery( );
        ctx.reply('Сыграем в орел и решку, выбери сторону:', {reply_markup: keyboard});
        if ( data === 'reshka'){

        }
    } 
    else if ( data === 'option2') {
        ctx.answerCallbackQuery('Запуск опции 2.');
        ctx.reply('Содержание опции 2.');
    } 
    else if ( data === 'option 2') {
        ctx.answerCallbackQuery('Запуск опции 2.');
        ctx.reply('Содержание опции 2.');
    } 
    else if (data === 'help') {
        ctx.answerCallbackQuery('Выберите опцию для получения информации.');
        ctx.reply('Для получения информации выберите опцию.');
    } 
    else {
        ctx.reply('Неверная команда');
    }
});





function orelireshka(ctx) {

}
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