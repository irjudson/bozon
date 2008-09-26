ToolShowGrid=function(_469e){
ToggleButton.call(this,_469e);
};
ToolShowGrid.prototype=new ToggleButton;
ToolShowGrid.prototype.type="ToolShowGrid";
ToolShowGrid.prototype.execute=function(){
if(this.isDown()){
this.getToolPalette().getWorkflow().setBackgroundImage("grid_10.png",true);
}else{
this.getToolPalette().getWorkflow().setBackgroundImage(null,false);
}
};
