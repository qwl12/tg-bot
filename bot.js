const { Bot} = require('grammy');

const bot = new Bot('7744251076:AAEvkaRlygAhQFE2IYTL4mkCwGfmLLte9TE');

bot.command('start',(ctx) => {
    ctx.reply('Прив ку чикса! я саня. /help чтобы узнать что я умею.');
});

bot.command('help',(ctx) => {
    ctx.reply('/shlyapa - привет шляпик\n/echo - передразнить тебя\n/jonkler - щутка :)');
});

bot.command('echo',(ctx) => {
    const message = ctx.message.text.split('').slice(1).join('');
    ctx.reply(message || 'введи сообщение для пво');
});
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