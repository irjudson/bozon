FlowMenu=function(_3e15){
this.actionDelete=new ButtonDelete(this);
this.actionFront=new ButtonMoveFront(this);
this.actionBack=new ButtonMoveBack(this);
ToolPalette.call(this);
this.setDimension(20,60);
this.setBackgroundColor(new Color(220,255,255));
this.currentFigure=null;
this.myworkflow=_3e15;
this.added=false;
this.setDeleteable(false);
this.setCanDrag(false);
this.setResizeable(false);
this.setSelectable(false);
this.setBackgroundColor(null);
this.setColor(null);
this.scrollarea.style.borderBottom="0px";
this.actionDelete.setPosition(0,0);
this.actionFront.setPosition(0,18);
this.actionBack.setPosition(0,36);
this.addChild(this.actionDelete);
this.addChild(this.actionFront);
this.addChild(this.actionBack);
};
FlowMenu.prototype=new ToolPalette;
FlowMenu.prototype.setAlpha=function(_3e16){
Figure.prototype.setAlpha.call(this,_3e16);
};
FlowMenu.prototype.hasTitleBar=function(){
return false;
};
FlowMenu.prototype.onSelectionChanged=function(_3e17){
if(_3e17==this.currentFigure){
return;
}
if(this.added==true){
this.myworkflow.removeFigure(this);
this.added=false;
}
if(_3e17!=null&&this.added==false){
if(this.myworkflow.getEnableSmoothFigureHandling()==true){
this.setAlpha(0.01);
}
this.myworkflow.addFigure(this,100,100);
this.added=true;
}
if(this.currentFigure!=null){
this.currentFigure.detachMoveListener(this);
}
this.currentFigure=_3e17;
if(this.currentFigure!=null){
this.currentFigure.attachMoveListener(this);
this.onOtherFigureMoved(this.currentFigure);
}
};
FlowMenu.prototype.setWorkflow=function(_3e18){
Figure.prototype.setWorkflow.call(this,_3e18);
};
FlowMenu.prototype.onOtherFigureMoved=function(_3e19){
var pos=_3e19.getPosition();
this.setPosition(pos.x+_3e19.getWidth()+7,pos.y-16);
};
