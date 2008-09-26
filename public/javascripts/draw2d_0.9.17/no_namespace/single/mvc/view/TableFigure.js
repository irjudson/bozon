TableFigure=function(){
this.table=null;
this.header=null;
Node.call(this);
this.setResizeable(false);
};
TableFigure.prototype=new Node;
TableFigure.prototype.type="TableFigure";
TableFigure.prototype.paint=function(){
var model=this.getModel();
this.setPosition(model.getPosition().x,model.getPosition().y);
this.header.innerHTML=model.getName();
this.setDimension(this.getWidth(),this.getHeight());
var _3245=this.model.getFieldModels();
for(var i=0;i<_3245.getSize();i++){
this.addColumn(_3245.get(i).getName(),_3245.get(i).getExtendedDescriptionLabel());
}
};
TableFigure.prototype.propertyChange=function(event){
switch(event.property){
case TableModel.EVENT_POSITION_CHANGED:
this.setPosition(event.newValue.x,event.newValue.y);
break;
case TableModel.EVENT_FIELD_ADDED:
this.addColumn(event.newValue.getName(),event.newValue.getExtendedDescriptionLabel());
break;
case TableModel.EVENT_KEY_ADDED:
this.refreshConnections();
break;
case TableModel.EVENT_NAME_CHANGED:
this.header.innerHTML=model.getName();
break;
}
};
TableFigure.prototype.createCommand=function(_3248){
if(_3248.getPolicy()==EditPolicy.MOVE){
if(!this.canDrag){
return null;
}
return new CommandMoveTable(this.model);
}
return null;
};
TableFigure.prototype.createHTMLElement=function(){
var item=Node.prototype.createHTMLElement.call(this);
item.style.width="100px";
item.style.height="100px";
item.style.margin="0px";
item.style.padding="0px";
this.table=document.createElement("table");
this.table.style.fontSize="8pt";
this.table.style.margin="0px";
this.table.style.padding="0px";
this.table.cellPadding="0";
this.table.cellSpacing="0";
var row=this.table.insertRow(0);
this.header=row.insertCell(0);
this.header.innerHTML="";
this.header.colSpan="2";
this.header.style.background="transparent url(header.png) repeat-x";
this.header.style.height="25px";
this.header.style.paddingLeft="5px";
this.header.style.paddingRight="5px";
this.disableTextSelection(this.header);
item.appendChild(this.table);
return item;
};
TableFigure.prototype.getWidth=function(){
if(this.table==null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("width"));
}
return (this.table.clientWidth);
};
TableFigure.prototype.getHeight=function(){
if(this.table==null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("height"));
}
return (this.table.clientHeight);
};
TableFigure.prototype.addColumn=function(name,label){
var x=this.table.insertRow(this.table.rows.length);
var y=x.insertCell(0);
y.innerHTML=label;
y.style.backgroundColor="gray";
y.style.whiteSpace="nowrap";
y.style.padding="2px";
this.disableTextSelection(y);
this.setDimension(this.getWidth(),this.getHeight());
var port=new InputFieldFigure();
port.setWorkflow(this.workflow);
port.setName("in_"+name);
this.addPort(port,-5,y.offsetTop+y.clientHeight/2);
port.paint();
var port=new OutputFieldFigure();
port.setWorkflow(this.workflow);
port.setName("out_"+name);
this.addPort(port,y.offsetWidth+5,y.offsetTop+y.clientHeight/2);
port.paint();
};
TableFigure.prototype.getModelSourceConnections=function(){
return this.getModel().getForeignKeyModels();
};
