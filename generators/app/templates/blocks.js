Blockly.Blocks["<%= className %>.random-text"] = {
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

