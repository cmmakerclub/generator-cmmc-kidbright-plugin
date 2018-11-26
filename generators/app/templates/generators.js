Blockly.JavaScript['<%= classNameLowerCase %>.random-text'] = function (block) {
  return [`DEV_IO.<%= className %>().random()`, Blockly.JavaScript.ORDER_ATOMIC]
}

Blockly.JavaScript['<%= classNameLowerCase %>.basic_string'] = function (block) {
  return [`(char*) "${block.getFieldValue('VALUE')}"`, Blockly.JavaScript.ORDER_ATOMIC]
}
