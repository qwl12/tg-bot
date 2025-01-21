const { InlineKeyboard } = require("grammy");

const flipcoinKeyBoard = new InlineKeyboard()
  .text(" Орел", "orel")
  .text(" reshka", "reshka")

module.exports = { flipcoinKeyBoard };