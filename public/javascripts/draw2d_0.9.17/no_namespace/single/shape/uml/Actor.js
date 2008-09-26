shape.uml.Actor=function(name){
VectorFigure.call(this);
this.setName(name);
this.setDimension(50,90);
};
shape.uml.Actor.prototype=new VectorFigure;
shape.uml.Actor.prototype.type="shape.uml.Actor";
shape.uml.Actor.prototype.setName=function(name){
this.label.innerHTML=name;
};
shape.uml.Actor.prototype.setWorkflow=function(_429e){
VectorFigure.prototype.setWorkflow.call(this,_429e);
if(_429e!=null&&this.portRight==null){
this.portRight=new Port();
this.portRight.setWorkflow(_429e);
this.addPort(this.portRight,this.width,this.height/2);
this.portLeft=new Port();
this.portLeft.setWorkflow(_429e);
this.addPort(this.portLeft,0,this.height/2);
}
};
shape.uml.Actor.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
this.label=document.createElement("div");
this.label.style.width="100%";
this.label.style.height="20px";
this.label.style.position="absolute";
this.label.style.textAlign="center";
this.label.style.top="0px";
this.label.style.left="0px";
this.label.style.fontSize="8pt";
return item;
};
shape.uml.Actor.prototype.setDimension=function(w,h){
VectorFigure.prototype.setDimension.call(this,w,h);
if(this.portRight!=null){
this.portRight.setPosition(this.width,this.height/2);
this.portLeft.setPosition(0,this.height/2);
}
};
shape.uml.Actor.prototype.paint=function(){
VectorFigure.prototype.paint.call(this);
var _42a2=this.getWidth()/2;
var _42a3=this.getWidth()/4;
var _42a4=this.getHeight()/2;
var _42a5=parseInt(this.label.style.height);
var _42a6=this.getWidth()*0.2;
var _42a7=this.getHeight()*0.1;
this.graphics.drawOval(_42a2-_42a6/2,0,_42a6,_42a7);
this.graphics.drawLine(_42a2,_42a7,_42a2,_42a4);
this.graphics.drawLine(_42a3,_42a7*2,this.getWidth()-_42a3,_42a7*2);
this.graphics.drawLine(_42a2,_42a4,_42a3,this.getHeight()-_42a5);
this.graphics.drawLine(_42a2,_42a4,this.getWidth()-_42a3,this.getHeight()-_42a5);
this.graphics.paint();
this.label.style.top=(this.getHeight()-_42a5)+"px";
this.html.appendChild(this.label);
};
