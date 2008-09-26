ToolCheckBox=function(_3080){
ToolGeneric.call(this,_3080);
};
ToolCheckBox.prototype=new ToolGeneric;
ToolCheckBox.prototype.type="ToolCheckBox";
ToolCheckBox.prototype.execute=function(x,y){
var _3083=new CheckBoxFigure();
_3083.setDimension(100,20);
this.palette.workflow.addFigure(_3083,x,y);
var _3084=this.palette.workflow.getBestCompartmentFigure(x,y);
if(_3084){
_3084.addChild(_3083);
}
ToolGeneric.prototype.execute.call(this,x,y);
};
