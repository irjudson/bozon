VectorPropertyWindow=function(){
PropertyWindow.call(this);
this.setDimension(180,150);
};
VectorPropertyWindow.prototype=new PropertyWindow;
VectorPropertyWindow.prototype.type="VectorPropertyWindow";
VectorPropertyWindow.prototype.createHTMLElement=function(){
var item=PropertyWindow.prototype.createHTMLElement.call(this);
this.lineColorLabel=this.createLabel("Line Color:",15,100);
item.appendChild(this.lineColorLabel);
this.fillColorLabel=this.createLabel("Fill Color:",15,120);
item.appendChild(this.fillColorLabel);
this.lineColorArea=this.createLabel("&nbsp;",85,100);
this.lineColorArea.style.width="50px";
this.lineColorArea.style.border="1px solid gray";
this.lineColorArea.hostDialog=this;
this.lineColorArea.onclick=function(){
this.hostDialog.showLineColorDialog();
};
item.appendChild(this.lineColorArea);
this.fillColorArea=this.createLabel("&nbsp;",85,120);
this.fillColorArea.style.width="50px";
this.fillColorArea.style.border="1px solid gray";
this.fillColorArea.hostDialog=this;
this.fillColorArea.onclick=function(){
this.hostDialog.showFillColorDialog();
};
item.appendChild(this.fillColorArea);
return item;
};
VectorPropertyWindow.prototype.onSelectionChanged=function(_349e){
PropertyWindow.prototype.onSelectionChanged.call(this,_349e);
if(_349e!=null&&(typeof _349e.getColor=="function")){
if(_349e.getColor()!=null){
this.lineColorArea.style.background=_349e.getColor().getHTMLStyle();
}else{
this.lineColorArea.style.background="transparent";
}
this.lineColorArea.style.cursor="pointer";
this.lineColorArea.style.border="1px solid gray";
this.lineColorLabel.style.color="black";
}else{
this.lineColorArea.style.background="transparent";
this.lineColorArea.style.cursor=null;
this.lineColorArea.style.border="1px solid #d0d0d0";
this.lineColorLabel.style.color="#d0d0d0";
}
if(_349e!=null&&(typeof _349e.getBackgroundColor=="function")){
if(_349e.getBackgroundColor()!=null){
this.fillColorArea.style.background=_349e.getBackgroundColor().getHTMLStyle();
}else{
this.fillColorArea.style.background="transparent";
}
this.fillColorArea.style.cursor="pointer";
this.fillColorArea.style.border="1px solid gray";
this.fillColorLabel.style.color="black";
}else{
this.fillColorArea.style.background="transparent";
this.fillColorArea.style.cursor=null;
this.fillColorArea.style.border="1px solid #d0d0d0";
this.fillColorLabel.style.color="#d0d0d0";
}
};
VectorPropertyWindow.prototype.showLineColorDialog=function(){
if((this.getCurrentSelection()==null)||(typeof this.getCurrentSelection().getColor!="function")){
return;
}
var _349f=new LineColorDialog(this.getCurrentSelection());
_349f.setColor(this.getCurrentSelection().getColor());
this.workflow.showDialog(_349f);
};
VectorPropertyWindow.prototype.showFillColorDialog=function(){
if(typeof this.getCurrentSelection().getBackgroundColor!="function"){
return;
}
var _34a0=new BackgroundColorDialog(this.getCurrentSelection());
_34a0.setColor(this.getCurrentSelection().getBackgroundColor());
this.workflow.showDialog(_34a0);
};
