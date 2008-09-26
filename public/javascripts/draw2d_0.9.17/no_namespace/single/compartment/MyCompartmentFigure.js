MyCompartmentFigure=function(){
CompartmentFigure.call(this);
this.defaultColor=new Color(230,230,250);
this.setBackgroundColor(this.defaultColor);
};
MyCompartmentFigure.prototype=new CompartmentFigure;
MyCompartmentFigure.prototype.onFigureLeave=function(_35b6){
CompartmentFigure.prototype.onFigureLeave.call(this,_35b6);
if(_35b6 instanceof CompartmentFigure){
_35b6.setBackgroundColor(_35b6.defaultColor);
}
};
MyCompartmentFigure.prototype.onFigureDrop=function(_35b7){
CompartmentFigure.prototype.onFigureDrop.call(this,_35b7);
if(_35b7 instanceof CompartmentFigure){
_35b7.setBackgroundColor(this.getBackgroundColor().darker(0.1));
}
};
MyCompartmentFigure.prototype.setBackgroundColor=function(color){
CompartmentFigure.prototype.setBackgroundColor.call(this,color);
for(var i=0;i<this.children.getSize();i++){
var child=this.children.get(i);
if(child instanceof CompartmentFigure){
child.setBackgroundColor(this.getBackgroundColor().darker(0.1));
}
}
};
