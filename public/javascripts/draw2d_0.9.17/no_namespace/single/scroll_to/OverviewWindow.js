OverviewWindow=function(name){
WindowFigure.call(this,"Overview Window");
this.setDimension(180,150);
this.servers=new Object();
this.name=name;
};
OverviewWindow.prototype=new WindowFigure;
OverviewWindow.prototype.type="OverviewWindow";
OverviewWindow.prototype.createHTMLElement=function(){
var item=WindowFigure.prototype.createHTMLElement.call(this);
this.inputDiv=document.createElement("div");
this.inputDiv.style.position="absolute";
this.inputDiv.style.left="10px";
this.inputDiv.style.top="20px";
this.inputDiv.style.overflow="auto";
this.inputDiv.style.border="1px solid black";
this.inputDiv.style.font="normal 10px verdana";
item.appendChild(this.inputDiv);
return item;
};
OverviewWindow.prototype.setDimension=function(w,h){
WindowFigure.prototype.setDimension.call(this,w,h);
if(this.inputDiv!=null){
this.inputDiv.style.height=(h-30)+"px";
this.inputDiv.style.width=(w-20)+"px";
}
};
OverviewWindow.prototype.addServer=function(_3e78){
this.servers[_3e78.id]=_3e78;
this.createList();
};
OverviewWindow.prototype.removeServer=function(_3e79){
this.servers[_3e79.id]=null;
this.createList();
};
OverviewWindow.prototype.createList=function(){
this.inputDiv.innerHTML="";
var list=document.createElement("ul");
for(key in this.servers){
var _3e7b=this.servers[key];
if(_3e7b!=null){
var li=document.createElement("li");
var a=document.createElement("a");
a.href="javascript:OverviewWindow.scrollTo('"+_3e7b.id+"')";
a.innerHTML=_3e7b.ip;
li.appendChild(a);
if(_3e7b.isReachable()){
a.style.color="green";
}else{
a.style.color="red";
a.style.fontWeight="bold";
}
list.appendChild(li);
}
}
this.inputDiv.appendChild(list);
};
OverviewWindow.scrollTo=function(id){
var _3e7f=workflow.getFigure(id);
workflow.scrollTo(_3e7f.getX()-OverviewWindow.screenWidth()/2,_3e7f.getY()-OverviewWindow.screenHeight()/2);
};
OverviewWindow.prototype.onDragend=function(){
WindowFigure.prototype.onDragend.call(this);
};
OverviewWindow.screenWidth=function(){
var _3e80=0;
if(typeof (window.innerWidth)=="number"){
_3e80=window.innerWidth;
}else{
if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
_3e80=document.documentElement.clientWidth;
}else{
if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
_3e80=document.body.clientWidth;
}
}
}
return _3e80;
};
OverviewWindow.screenHeight=function(){
var _3e81=0;
if(typeof (window.innerWidth)=="number"){
_3e81=window.innerHeight;
}else{
if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
_3e81=document.documentElement.clientHeight;
}else{
if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
_3e81=document.body.clientHeight;
}
}
}
return _3e81;
};
