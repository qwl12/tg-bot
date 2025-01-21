const { InlineKeyboard } = require("grammy");

const rpsKeyboard = new InlineKeyboard()
  .text("🪨 Камень", "rock")
  .text("✂️ Ножницы", "scissors")
  .text("📜 Бумага", "paper");

module.exports = { rpsKeyboard };