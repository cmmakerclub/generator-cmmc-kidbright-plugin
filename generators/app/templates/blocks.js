Blockly.Blocks["<%= classNameLowerCase %>.random-text"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.<%= className %>_TEXT_TITLE);

        // this.appendDummyInput()
        // 	.appendField(Blockly.Msg.CHANNEL)
        // 	.appendField(new Blockly.FieldDropdown(channel_array), 'CHANNEL');
        // device addess
        // this.appendDummyInput()
        // 	.appendField(Blockly.Msg.ADDRESS)
        // 	.appendField(new Blockly.FieldDropdown([
        // 		["0x29", "41"],
        // 		["0x39", "57"],
        // 		["0x49", "73"]
        // 	]), 'ADDRESS');

        this.setOutput(true, 'String');
        this.setInputsInline(true)
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(58);
        this.setTooltip(Blockly.Msg.<%= className %>_TEXT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.<%= className %>_TEXT_HELPURL);
    }
};

Blockly.Blocks["<%= classNameLowerCase %>.basic_string"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC', 12, 12, '*'))
      .appendField(new Blockly.FieldTextInput('Hello <%= className %> \!'), 'VALUE')
      .appendField(new Blockly.FieldImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==', 12, 12, '*'));
    this.setOutput(true, 'String');
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour(basic_colour);
    this.setTooltip(Blockly.Msg.BASIC_STRING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.BASIC_STRING_HELPURL);
  }
};
