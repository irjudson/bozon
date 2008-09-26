ToolInputBox=function(_3c4e){
ToolGeneric.call(this,_3c4e);
};
ToolInputBox.prototype=new ToolGeneric;
ToolInputBox.prototype.type="ToolInputBox";
ToolInputBox.prototype.execute=function(x,y){
var _3c51=new InputBoxFigure();
_3c51.setDimension(100,20);
this.palette.workflow.addFigure(_3c51,x,y);
var _3c52=this.palette.workflow.getBestCompartmentFigure(x,y);
if(_3c52){
_3c52.addChild(_3c51);
}
ToolGeneric.prototype.execute.call(this,x,y);
};
