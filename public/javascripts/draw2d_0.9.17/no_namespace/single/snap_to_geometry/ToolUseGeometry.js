ToolUseGeometry=function(_4659){
ToggleButton.call(this,_4659);
};
ToolUseGeometry.prototype=new ToggleButton;
ToolUseGeometry.prototype.type="ToolUseGeometry";
ToolUseGeometry.prototype.execute=function(){
this.getToolPalette().getWorkflow().setSnapToGeometry(this.isDown());
};
