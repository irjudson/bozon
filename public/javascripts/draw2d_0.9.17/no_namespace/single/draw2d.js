
/**This notice must be untouched at all times.
This is the COMPRESSED version of the Draw2D Library
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/
Event=function(){
this.type=null;
this.target=null;
this.relatedTarget=null;
this.cancelable=false;
this.timeStamp=null;
this.returnValue=true;
};
Event.prototype.initEvent=function(sType,_3e28){
this.type=sType;
this.cancelable=_3e28;
this.timeStamp=(new Date()).getTime();
};
Event.prototype.preventDefault=function(){
if(this.cancelable){
this.returnValue=false;
}
};
Event.fireDOMEvent=function(_3e29,_3e2a){
if(document.createEvent){
var evt=document.createEvent("Events");
evt.initEvent(_3e29,true,true);
_3e2a.dispatchEvent(evt);
}else{
if(document.createEventObject){
var evt=document.createEventObject();
_3e2a.fireEvent("on"+_3e29,evt);
}
}
};
EventTarget=function(){
this.eventhandlers=new Object();
};
EventTarget.prototype.addEventListener=function(sType,_3e2d){
if(typeof this.eventhandlers[sType]=="undefined"){
this.eventhandlers[sType]=new Array;
}
this.eventhandlers[sType][this.eventhandlers[sType].length]=_3e2d;
};
EventTarget.prototype.dispatchEvent=function(_3e2e){
_3e2e.target=this;
if(typeof this.eventhandlers[_3e2e.type]!="undefined"){
for(var i=0;i<this.eventhandlers[_3e2e.type].length;i++){
this.eventhandlers[_3e2e.type][i](_3e2e);
}
}
return _3e2e.returnValue;
};
EventTarget.prototype.removeEventListener=function(sType,_3e31){
if(typeof this.eventhandlers[sType]!="undefined"){
var _3e32=new Array;
for(var i=0;i<this.eventhandlers[sType].length;i++){
if(this.eventhandlers[sType][i]!=_3e31){
_3e32[_3e32.length]=this.eventhandlers[sType][i];
}
}
this.eventhandlers[sType]=_3e32;
}
};
String.prototype.trim=function(){
return (this.replace(new RegExp("^([\\s]+)|([\\s]+)$","gm"),""));
};
String.prototype.lefttrim=function(){
return (this.replace(new RegExp("^[\\s]+","gm"),""));
};
String.prototype.righttrim=function(){
return (this.replace(new RegExp("[\\s]+$","gm"),""));
};
String.prototype.between=function(left,right,_468a){
if(!_468a){
_468a=0;
}
var li=this.indexOf(left,_468a);
if(li==-1){
return null;
}
var ri=this.indexOf(right,li);
if(ri==-1){
return null;
}
return this.substring(li+left.length,ri);
};
UUID=function(){
};
UUID.prototype.type="UUID";
UUID.create=function(){
var _401a=function(){
return (((1+Math.random())*65536)|0).toString(16).substring(1);
};
return (_401a()+_401a()+"-"+_401a()+"-"+_401a()+"-"+_401a()+"-"+_401a()+_401a()+_401a());
};
ArrayList=function(){
this.increment=10;
this.size=0;
this.data=new Array(this.increment);
};
ArrayList.EMPTY_LIST=new ArrayList();
ArrayList.prototype.type="ArrayList";
ArrayList.prototype.reverse=function(){
var _423d=new Array(this.size);
for(var i=0;i<this.size;i++){
_423d[i]=this.data[this.size-i-1];
}
this.data=_423d;
};
ArrayList.prototype.getCapacity=function(){
return this.data.length;
};
ArrayList.prototype.getSize=function(){
return this.size;
};
ArrayList.prototype.isEmpty=function(){
return this.getSize()==0;
};
ArrayList.prototype.getLastElement=function(){
if(this.data[this.getSize()-1]!=null){
return this.data[this.getSize()-1];
}
};
ArrayList.prototype.getFirstElement=function(){
if(this.data[0]!=null){
return this.data[0];
}
};
ArrayList.prototype.get=function(i){
return this.data[i];
};
ArrayList.prototype.add=function(obj){
if(this.getSize()==this.data.length){
this.resize();
}
this.data[this.size++]=obj;
};
ArrayList.prototype.addAll=function(obj){
for(var i=0;i<obj.getSize();i++){
this.add(obj.get(i));
}
};
ArrayList.prototype.remove=function(obj){
var index=this.indexOf(obj);
if(index>=0){
return this.removeElementAt(index);
}
return null;
};
ArrayList.prototype.insertElementAt=function(obj,index){
if(this.size==this.capacity){
this.resize();
}
for(var i=this.getSize();i>index;i--){
this.data[i]=this.data[i-1];
}
this.data[index]=obj;
this.size++;
};
ArrayList.prototype.removeElementAt=function(index){
var _4249=this.data[index];
for(var i=index;i<(this.getSize()-1);i++){
this.data[i]=this.data[i+1];
}
this.data[this.getSize()-1]=null;
this.size--;
return _4249;
};
ArrayList.prototype.removeAllElements=function(){
this.size=0;
for(var i=0;i<this.data.length;i++){
this.data[i]=null;
}
};
ArrayList.prototype.indexOf=function(obj){
for(var i=0;i<this.getSize();i++){
if(this.data[i]==obj){
return i;
}
}
return -1;
};
ArrayList.prototype.contains=function(obj){
for(var i=0;i<this.getSize();i++){
if(this.data[i]==obj){
return true;
}
}
return false;
};
ArrayList.prototype.resize=function(){
newData=new Array(this.data.length+this.increment);
for(var i=0;i<this.data.length;i++){
newData[i]=this.data[i];
}
this.data=newData;
};
ArrayList.prototype.trimToSize=function(){
if(this.data.length==this.size){
return;
}
var temp=new Array(this.getSize());
for(var i=0;i<this.getSize();i++){
temp[i]=this.data[i];
}
this.size=temp.length;
this.data=temp;
};
ArrayList.prototype.sort=function(f){
var i,j;
var _4255;
var _4256;
var _4257;
var _4258;
for(i=1;i<this.getSize();i++){
_4256=this.data[i];
_4255=_4256[f];
j=i-1;
_4257=this.data[j];
_4258=_4257[f];
while(j>=0&&_4258>_4255){
this.data[j+1]=this.data[j];
j--;
if(j>=0){
_4257=this.data[j];
_4258=_4257[f];
}
}
this.data[j+1]=_4256;
}
};
ArrayList.prototype.clone=function(){
var _4259=new ArrayList(this.size);
for(var i=0;i<this.size;i++){
_4259.add(this.data[i]);
}
return _4259;
};
ArrayList.prototype.overwriteElementAt=function(obj,index){
this.data[index]=obj;
};
ArrayList.prototype.getPersistentAttributes=function(){
return {data:this.data,increment:this.increment,size:this.getSize()};
};
function trace(_4234){
var _4235=openwindow("about:blank",700,400);
_4235.document.writeln("<pre>"+_4234+"</pre>");
}
function openwindow(url,width,_4238){
var left=(screen.width-width)/2;
var top=(screen.height-_4238)/2;
property="left="+left+", top="+top+", toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,alwaysRaised,width="+width+",height="+_4238;
return window.open(url,"_blank",property);
}
function dumpObject(obj){
trace("----------------------------------------------------------------------------");
trace("- Object dump");
trace("----------------------------------------------------------------------------");
for(var i in obj){
try{
if(typeof obj[i]!="function"){
trace(i+" --&gt; "+obj[i]);
}
}
catch(e){
}
}
for(var i in obj){
try{
if(typeof obj[i]=="function"){
trace(i+" --&gt; "+obj[i]);
}
}
catch(e){
}
}
trace("----------------------------------------------------------------------------");
}
Drag=function(){
};
Drag.current=null;
Drag.currentTarget=null;
Drag.dragging=false;
Drag.isDragging=function(){
return this.dragging;
};
Drag.setCurrent=function(_3677){
this.current=_3677;
this.dragging=true;
};
Drag.getCurrent=function(){
return this.current;
};
Drag.clearCurrent=function(){
this.current=null;
this.dragging=false;
this.currentTarget=null;
};
Draggable=function(_3678,_3679){
EventTarget.call(this);
this.construct(_3678,_3679);
this.diffX=0;
this.diffY=0;
this.targets=new ArrayList();
};
Draggable.prototype=new EventTarget;
Draggable.prototype.construct=function(_367a,_367b){
this.element=_367a;
this.constraints=_367b;
var oThis=this;
var _367d=function(){
var _367e=new DragDropEvent();
_367e.initDragDropEvent("dblclick",true);
oThis.dispatchEvent(_367e);
var _367f=arguments[0]||window.event;
_367f.cancelBubble=true;
_367f.returnValue=false;
};
var _3680=function(){
var _3681=arguments[0]||window.event;
var _3682=new DragDropEvent();
var _3683=oThis.node.workflow.getAbsoluteX();
var _3684=oThis.node.workflow.getAbsoluteY();
var _3685=oThis.node.workflow.getScrollLeft();
var _3686=oThis.node.workflow.getScrollTop();
_3682.x=_3681.clientX-oThis.element.offsetLeft+_3685-_3683;
_3682.y=_3681.clientY-oThis.element.offsetTop+_3686-_3684;
if(_3681.button==2){
_3682.initDragDropEvent("contextmenu",true);
oThis.dispatchEvent(_3682);
}else{
_3682.initDragDropEvent("dragstart",true);
if(oThis.dispatchEvent(_3682)){
oThis.diffX=_3681.clientX-oThis.element.offsetLeft;
oThis.diffY=_3681.clientY-oThis.element.offsetTop;
Drag.setCurrent(oThis);
if(oThis.isAttached==true){
oThis.detachEventHandlers();
}
oThis.attachEventHandlers();
}
}
_3681.cancelBubble=true;
_3681.returnValue=false;
};
var _3687=function(){
if(Drag.getCurrent()==null){
var _3688=arguments[0]||window.event;
if(Drag.currentHover!=null&&oThis!=Drag.currentHover){
var _3689=new DragDropEvent();
_3689.initDragDropEvent("mouseleave",false,oThis);
Drag.currentHover.dispatchEvent(_3689);
}
if(oThis!=null&&oThis!=Drag.currentHover){
var _3689=new DragDropEvent();
_3689.initDragDropEvent("mouseenter",false,oThis);
oThis.dispatchEvent(_3689);
}
Drag.currentHover=oThis;
}else{
}
};
if(this.element.addEventListener){
this.element.addEventListener("mousemove",_3687,false);
this.element.addEventListener("mousedown",_3680,false);
this.element.addEventListener("dblclick",_367d,false);
}else{
if(this.element.attachEvent){
this.element.attachEvent("onmousemove",_3687);
this.element.attachEvent("onmousedown",_3680);
this.element.attachEvent("ondblclick",_367d);
}else{
throw new Error("Drag not supported in this browser.");
}
}
};
Draggable.prototype.attachEventHandlers=function(){
var oThis=this;
oThis.isAttached=true;
this.tempMouseMove=function(){
var _368b=arguments[0]||window.event;
var _368c=new Point(_368b.clientX-oThis.diffX,_368b.clientY-oThis.diffY);
if(oThis.node.getCanSnapToHelper()){
_368c=oThis.node.getWorkflow().snapToHelper(oThis.node,_368c);
}
oThis.element.style.left=_368c.x+"px";
oThis.element.style.top=_368c.y+"px";
var _368d=oThis.node.workflow.getScrollLeft();
var _368e=oThis.node.workflow.getScrollTop();
var _368f=oThis.node.workflow.getAbsoluteX();
var _3690=oThis.node.workflow.getAbsoluteY();
var _3691=oThis.getDropTarget(_368b.clientX+_368d-_368f,_368b.clientY+_368e-_3690);
var _3692=oThis.getCompartment(_368b.clientX+_368d-_368f,_368b.clientY+_368e-_3690);
if(Drag.currentTarget!=null&&_3691!=Drag.currentTarget){
var _3693=new DragDropEvent();
_3693.initDragDropEvent("dragleave",false,oThis);
Drag.currentTarget.dispatchEvent(_3693);
}
if(_3691!=null&&_3691!=Drag.currentTarget){
var _3693=new DragDropEvent();
_3693.initDragDropEvent("dragenter",false,oThis);
_3691.dispatchEvent(_3693);
}
Drag.currentTarget=_3691;
if(Drag.currentCompartment!=null&&_3692!=Drag.currentCompartment){
var _3693=new DragDropEvent();
_3693.initDragDropEvent("figureleave",false,oThis);
Drag.currentCompartment.dispatchEvent(_3693);
}
if(_3692!=null&&_3692.node!=oThis.node&&_3692!=Drag.currentCompartment){
var _3693=new DragDropEvent();
_3693.initDragDropEvent("figureenter",false,oThis);
_3692.dispatchEvent(_3693);
}
Drag.currentCompartment=_3692;
var _3694=new DragDropEvent();
_3694.initDragDropEvent("drag",false);
oThis.dispatchEvent(_3694);
};
oThis.tempMouseUp=function(){
oThis.detachEventHandlers();
var _3695=arguments[0]||window.event;
var _3696=oThis.node.workflow.getScrollLeft();
var _3697=oThis.node.workflow.getScrollTop();
var _3698=oThis.node.workflow.getAbsoluteX();
var _3699=oThis.node.workflow.getAbsoluteY();
var _369a=oThis.getDropTarget(_3695.clientX+_3696-_3698,_3695.clientY+_3697-_3699);
var _369b=oThis.getCompartment(_3695.clientX+_3696-_3698,_3695.clientY+_3697-_3699);
if(_369a!=null){
var _369c=new DragDropEvent();
_369c.initDragDropEvent("drop",false,oThis);
_369a.dispatchEvent(_369c);
}
if(_369b!=null&&_369b.node!=oThis.node){
var _369c=new DragDropEvent();
_369c.initDragDropEvent("figuredrop",false,oThis);
_369b.dispatchEvent(_369c);
}
if(Drag.currentTarget!=null){
var _369c=new DragDropEvent();
_369c.initDragDropEvent("dragleave",false,oThis);
Drag.currentTarget.dispatchEvent(_369c);
Drag.currentTarget=null;
}
var _369d=new DragDropEvent();
_369d.initDragDropEvent("dragend",false);
oThis.dispatchEvent(_369d);
Drag.currentCompartment=null;
Drag.clearCurrent();
};
if(document.body.addEventListener){
document.body.addEventListener("mousemove",this.tempMouseMove,false);
document.body.addEventListener("mouseup",this.tempMouseUp,false);
}else{
if(document.body.attachEvent){
document.body.attachEvent("onmousemove",this.tempMouseMove);
document.body.attachEvent("onmouseup",this.tempMouseUp);
}else{
throw new Error("Drag doesn't support this browser.");
}
}
};
Draggable.prototype.detachEventHandlers=function(){
this.isAttached=false;
if(document.body.removeEventListener){
document.body.removeEventListener("mousemove",this.tempMouseMove,false);
document.body.removeEventListener("mouseup",this.tempMouseUp,false);
}else{
if(document.body.detachEvent){
document.body.detachEvent("onmousemove",this.tempMouseMove);
document.body.detachEvent("onmouseup",this.tempMouseUp);
}else{
throw new Error("Drag doesn't support this browser.");
}
}
};
Draggable.prototype.getDropTarget=function(x,y){
for(var i=0;i<this.targets.getSize();i++){
var _36a1=this.targets.get(i);
if(_36a1.node.isOver(x,y)&&_36a1.node!=this.node){
return _36a1;
}
}
return null;
};
Draggable.prototype.getCompartment=function(x,y){
var _36a4=null;
for(var i=0;i<this.node.workflow.compartments.getSize();i++){
var _36a6=this.node.workflow.compartments.get(i);
if(_36a6.isOver(x,y)&&_36a6!=this.node){
if(_36a4==null){
_36a4=_36a6;
}else{
if(_36a4.getZOrder()<_36a6.getZOrder()){
_36a4=_36a6;
}
}
}
}
return _36a4==null?null:_36a4.dropable;
};
Draggable.prototype.getLeft=function(){
return this.element.offsetLeft;
};
Draggable.prototype.getTop=function(){
return this.element.offsetTop;
};
DragDropEvent=function(){
Event.call(this);
};
DragDropEvent.prototype=new Event();
DragDropEvent.prototype.initDragDropEvent=function(sType,_36a8,_36a9){
this.initEvent(sType,_36a8);
this.relatedTarget=_36a9;
};
DropTarget=function(_36aa){
EventTarget.call(this);
this.construct(_36aa);
};
DropTarget.prototype=new EventTarget;
DropTarget.prototype.construct=function(_36ab){
this.element=_36ab;
};
DropTarget.prototype.getLeft=function(){
var el=this.element;
var ol=el.offsetLeft;
while((el=el.offsetParent)!=null){
ol+=el.offsetLeft;
}
return ol;
};
DropTarget.prototype.getTop=function(){
var el=this.element;
var ot=el.offsetTop;
while((el=el.offsetParent)!=null){
ot+=el.offsetTop;
}
return ot;
};
DropTarget.prototype.getHeight=function(){
return this.element.offsetHeight;
};
DropTarget.prototype.getWidth=function(){
return this.element.offsetWidth;
};
PositionConstants=function(){
};
PositionConstants.NORTH=1;
PositionConstants.SOUTH=4;
PositionConstants.WEST=8;
PositionConstants.EAST=16;
Color=function(red,green,blue){
if(typeof green=="undefined"){
var rgb=this.hex2rgb(red);
this.red=rgb[0];
this.green=rgb[1];
this.blue=rgb[2];
}else{
this.red=red;
this.green=green;
this.blue=blue;
}
};
Color.prototype.type="Color";
Color.prototype.getHTMLStyle=function(){
return "rgb("+this.red+","+this.green+","+this.blue+")";
};
Color.prototype.getRed=function(){
return this.red;
};
Color.prototype.getGreen=function(){
return this.green;
};
Color.prototype.getBlue=function(){
return this.blue;
};
Color.prototype.getIdealTextColor=function(){
var _44ae=105;
var _44af=(this.red*0.299)+(this.green*0.587)+(this.blue*0.114);
return (255-_44af<_44ae)?new Color(0,0,0):new Color(255,255,255);
};
Color.prototype.hex2rgb=function(_44b0){
_44b0=_44b0.replace("#","");
return ({0:parseInt(_44b0.substr(0,2),16),1:parseInt(_44b0.substr(2,2),16),2:parseInt(_44b0.substr(4,2),16)});
};
Color.prototype.hex=function(){
return (this.int2hex(this.red)+this.int2hex(this.green)+this.int2hex(this.blue));
};
Color.prototype.int2hex=function(v){
v=Math.round(Math.min(Math.max(0,v),255));
return ("0123456789ABCDEF".charAt((v-v%16)/16)+"0123456789ABCDEF".charAt(v%16));
};
Color.prototype.darker=function(_44b2){
var red=parseInt(Math.round(this.getRed()*(1-_44b2)));
var green=parseInt(Math.round(this.getGreen()*(1-_44b2)));
var blue=parseInt(Math.round(this.getBlue()*(1-_44b2)));
if(red<0){
red=0;
}else{
if(red>255){
red=255;
}
}
if(green<0){
green=0;
}else{
if(green>255){
green=255;
}
}
if(blue<0){
blue=0;
}else{
if(blue>255){
blue=255;
}
}
return new Color(red,green,blue);
};
Color.prototype.lighter=function(_44b6){
var red=parseInt(Math.round(this.getRed()*(1+_44b6)));
var green=parseInt(Math.round(this.getGreen()*(1+_44b6)));
var blue=parseInt(Math.round(this.getBlue()*(1+_44b6)));
if(red<0){
red=0;
}else{
if(red>255){
red=255;
}
}
if(green<0){
green=0;
}else{
if(green>255){
green=255;
}
}
if(blue<0){
blue=0;
}else{
if(blue>255){
blue=255;
}
}
return new Color(red,green,blue);
};
Point=function(x,y){
this.x=x;
this.y=y;
};
Point.prototype.type="Point";
Point.prototype.getX=function(){
return this.x;
};
Point.prototype.getY=function(){
return this.y;
};
Point.prototype.getPosition=function(p){
var dx=p.x-this.x;
var dy=p.y-this.y;
if(Math.abs(dx)>Math.abs(dy)){
if(dx<0){
return PositionConstants.WEST;
}
return PositionConstants.EAST;
}
if(dy<0){
return PositionConstants.NORTH;
}
return PositionConstants.SOUTH;
};
Point.prototype.equals=function(o){
return this.x==o.x&&this.y==o.y;
};
Point.prototype.getDistance=function(other){
return Math.sqrt((this.x-other.x)*(this.x-other.x)+(this.y-other.y)*(this.y-other.y));
};
Point.prototype.getTranslated=function(other){
return new Point(this.x+other.x,this.y+other.y);
};
Point.prototype.getPersistentAttributes=function(){
return {x:this.x,y:this.y};
};
Dimension=function(x,y,w,h){
Point.call(this,x,y);
this.w=w;
this.h=h;
};
Dimension.prototype=new Point;
Dimension.prototype.type="Dimension";
Dimension.prototype.translate=function(dx,dy){
this.x+=dx;
this.y+=dy;
return this;
};
Dimension.prototype.resize=function(dw,dh){
this.w+=dw;
this.h+=dh;
return this;
};
Dimension.prototype.setBounds=function(rect){
this.x=rect.x;
this.y=rect.y;
this.w=rect.w;
this.h=rect.h;
return this;
};
Dimension.prototype.isEmpty=function(){
return this.w<=0||this.h<=0;
};
Dimension.prototype.getWidth=function(){
return this.w;
};
Dimension.prototype.getHeight=function(){
return this.h;
};
Dimension.prototype.getRight=function(){
return this.x+this.w;
};
Dimension.prototype.getBottom=function(){
return this.y+this.h;
};
Dimension.prototype.getTopLeft=function(){
return new Point(this.x,this.y);
};
Dimension.prototype.getCenter=function(){
return new Point(this.x+this.w/2,this.y+this.h/2);
};
Dimension.prototype.getBottomRight=function(){
return new Point(this.x+this.w,this.y+this.h);
};
Dimension.prototype.equals=function(o){
return this.x==o.x&&this.y==o.y&&this.w==o.w&&this.h==o.h;
};
SnapToHelper=function(_44c6){
this.workflow=_44c6;
};
SnapToHelper.NORTH=1;
SnapToHelper.SOUTH=4;
SnapToHelper.WEST=8;
SnapToHelper.EAST=16;
SnapToHelper.CENTER=32;
SnapToHelper.NORTH_EAST=SnapToHelper.NORTH|SnapToHelper.EAST;
SnapToHelper.NORTH_WEST=SnapToHelper.NORTH|SnapToHelper.WEST;
SnapToHelper.SOUTH_EAST=SnapToHelper.SOUTH|SnapToHelper.EAST;
SnapToHelper.SOUTH_WEST=SnapToHelper.SOUTH|SnapToHelper.WEST;
SnapToHelper.NORTH_SOUTH=SnapToHelper.NORTH|SnapToHelper.SOUTH;
SnapToHelper.EAST_WEST=SnapToHelper.EAST|SnapToHelper.WEST;
SnapToHelper.NSEW=SnapToHelper.NORTH_SOUTH|SnapToHelper.EAST_WEST;
SnapToHelper.prototype.snapPoint=function(_44c7,_44c8,_44c9){
return _44c8;
};
SnapToHelper.prototype.snapRectangle=function(_44ca,_44cb){
return _44ca;
};
SnapToHelper.prototype.onSetDocumentDirty=function(){
};
SnapToGrid=function(_3de4){
SnapToHelper.call(this,_3de4);
};
SnapToGrid.prototype=new SnapToHelper;
SnapToGrid.prototype.type="SnapToGrid";
SnapToGrid.prototype.snapPoint=function(_3de5,_3de6,_3de7){
_3de7.x=this.workflow.gridWidthX*Math.floor(((_3de6.x+this.workflow.gridWidthX/2)/this.workflow.gridWidthX));
_3de7.y=this.workflow.gridWidthY*Math.floor(((_3de6.y+this.workflow.gridWidthY/2)/this.workflow.gridWidthY));
return 0;
};
SnapToGrid.prototype.snapRectangle=function(_3de8,_3de9){
_3de9.x=_3de8.x;
_3de9.y=_3de8.y;
_3de9.w=_3de8.w;
_3de9.h=_3de8.h;
return 0;
};
SnapToGeometryEntry=function(type,_3dd7){
this.type=type;
this.location=_3dd7;
};
SnapToGeometryEntry.prototype.getLocation=function(){
return this.location;
};
SnapToGeometryEntry.prototype.getType=function(){
return this.type;
};
SnapToGeometry=function(_46b5){
SnapToHelper.call(this,_46b5);
};
SnapToGeometry.prototype=new SnapToHelper;
SnapToGeometry.THRESHOLD=5;
SnapToGeometry.prototype.snapPoint=function(_46b6,_46b7,_46b8){
if(this.rows==null||this.cols==null){
this.populateRowsAndCols();
}
if((_46b6&SnapToHelper.EAST)!=0){
var _46b9=this.getCorrectionFor(this.cols,_46b7.getX()-1,1);
if(_46b9!=SnapToGeometry.THRESHOLD){
_46b6&=~SnapToHelper.EAST;
_46b8.x+=_46b9;
}
}
if((_46b6&SnapToHelper.WEST)!=0){
var _46ba=this.getCorrectionFor(this.cols,_46b7.getX(),-1);
if(_46ba!=SnapToGeometry.THRESHOLD){
_46b6&=~SnapToHelper.WEST;
_46b8.x+=_46ba;
}
}
if((_46b6&SnapToHelper.SOUTH)!=0){
var _46bb=this.getCorrectionFor(this.rows,_46b7.getY()-1,1);
if(_46bb!=SnapToGeometry.THRESHOLD){
_46b6&=~SnapToHelper.SOUTH;
_46b8.y+=_46bb;
}
}
if((_46b6&SnapToHelper.NORTH)!=0){
var _46bc=this.getCorrectionFor(this.rows,_46b7.getY(),-1);
if(_46bc!=SnapToGeometry.THRESHOLD){
_46b6&=~SnapToHelper.NORTH;
_46b8.y+=_46bc;
}
}
return _46b6;
};
SnapToGeometry.prototype.snapRectangle=function(_46bd,_46be){
var _46bf=_46bd.getTopLeft();
var _46c0=_46bd.getBottomRight();
var _46c1=this.snapPoint(SnapToHelper.NORTH_WEST,_46bd.getTopLeft(),_46bf);
_46be.x=_46bf.x;
_46be.y=_46bf.y;
var _46c2=this.snapPoint(SnapToHelper.SOUTH_EAST,_46bd.getBottomRight(),_46c0);
if(_46c1&SnapToHelper.WEST){
_46be.x=_46c0.x-_46bd.getWidth();
}
if(_46c1&SnapToHelper.NORTH){
_46be.y=_46c0.y-_46bd.getHeight();
}
return _46c1|_46c2;
};
SnapToGeometry.prototype.populateRowsAndCols=function(){
this.rows=new Array();
this.cols=new Array();
var _46c3=this.workflow.getDocument().getFigures();
var index=0;
for(var i=0;i<_46c3.getSize();i++){
var _46c6=_46c3.get(i);
if(_46c6!=this.workflow.getCurrentSelection()){
var _46c7=_46c6.getBounds();
this.cols[index*3]=new SnapToGeometryEntry(-1,_46c7.getX());
this.rows[index*3]=new SnapToGeometryEntry(-1,_46c7.getY());
this.cols[index*3+1]=new SnapToGeometryEntry(0,_46c7.x+(_46c7.getWidth()-1)/2);
this.rows[index*3+1]=new SnapToGeometryEntry(0,_46c7.y+(_46c7.getHeight()-1)/2);
this.cols[index*3+2]=new SnapToGeometryEntry(1,_46c7.getRight()-1);
this.rows[index*3+2]=new SnapToGeometryEntry(1,_46c7.getBottom()-1);
index++;
}
}
};
SnapToGeometry.prototype.getCorrectionFor=function(_46c8,value,side){
var _46cb=SnapToGeometry.THRESHOLD;
var _46cc=SnapToGeometry.THRESHOLD;
for(var i=0;i<_46c8.length;i++){
var entry=_46c8[i];
var _46cf;
if(entry.type==-1&&side!=0){
_46cf=Math.abs(value-entry.location);
if(_46cf<_46cb){
_46cb=_46cf;
_46cc=entry.location-value;
}
}else{
if(entry.type==0&&side==0){
_46cf=Math.abs(value-entry.location);
if(_46cf<_46cb){
_46cb=_46cf;
_46cc=entry.location-value;
}
}else{
if(entry.type==1&&side!=0){
_46cf=Math.abs(value-entry.location);
if(_46cf<_46cb){
_46cb=_46cf;
_46cc=entry.location-value;
}
}
}
}
}
return _46cc;
};
SnapToGeometry.prototype.onSetDocumentDirty=function(){
this.rows=null;
this.cols=null;
};
Border=function(){
this.color=null;
};
Border.prototype.type="Border";
Border.prototype.dispose=function(){
this.color=null;
};
Border.prototype.getHTMLStyle=function(){
return "";
};
Border.prototype.setColor=function(c){
this.color=c;
};
Border.prototype.getColor=function(){
return this.color;
};
Border.prototype.refresh=function(){
};
LineBorder=function(width){
Border.call(this);
this.width=1;
if(width){
this.width=width;
}
this.figure=null;
};
LineBorder.prototype=new Border;
LineBorder.prototype.type="LineBorder";
LineBorder.prototype.dispose=function(){
Border.prototype.dispose.call(this);
this.figure=null;
};
LineBorder.prototype.setLineWidth=function(w){
this.width=w;
if(this.figure!=null){
this.figure.html.style.border=this.getHTMLStyle();
}
};
LineBorder.prototype.getHTMLStyle=function(){
if(this.getColor()!=null){
return this.width+"px solid "+this.getColor().getHTMLStyle();
}
return this.width+"px solid black";
};
LineBorder.prototype.refresh=function(){
this.setLineWidth(this.width);
};
Figure=function(){
this.construct();
};
Figure.prototype.type="Figure";
Figure.ZOrderBaseIndex=100;
Figure.setZOrderBaseIndex=function(index){
Figure.ZOrderBaseIndex=index;
};
Figure.prototype.construct=function(){
this.lastDragStartTime=0;
this.x=0;
this.y=0;
this.border=null;
this.setDimension(10,10);
this.id=UUID.create();
this.html=this.createHTMLElement();
this.canvas=null;
this.workflow=null;
this.draggable=null;
this.parent=null;
this.isMoving=false;
this.canSnapToHelper=true;
this.snapToGridAnchor=new Point(0,0);
this.timer=-1;
this.model=null;
this.setDeleteable(true);
this.setCanDrag(true);
this.setResizeable(true);
this.setSelectable(true);
this.properties=new Object();
this.moveListener=new ArrayList();
};
Figure.prototype.dispose=function(){
this.canvas=null;
this.workflow=null;
this.moveListener=null;
if(this.draggable!=null){
this.draggable.removeEventListener("mouseenter",this.tmpMouseEnter);
this.draggable.removeEventListener("mouseleave",this.tmpMouseLeave);
this.draggable.removeEventListener("dragend",this.tmpDragend);
this.draggable.removeEventListener("dragstart",this.tmpDragstart);
this.draggable.removeEventListener("drag",this.tmpDrag);
this.draggable.removeEventListener("dblclick",this.tmpDoubleClick);
this.draggable.node=null;
this.draggable.target.removeAllElements();
}
this.draggable=null;
if(this.border!=null){
this.border.dispose();
}
this.border=null;
if(this.parent!=null){
this.parent.removeChild(this);
}
};
Figure.prototype.getProperties=function(){
return this.properties;
};
Figure.prototype.getProperty=function(key){
return this.properties[key];
};
Figure.prototype.setProperty=function(key,value){
this.properties[key]=value;
this.setDocumentDirty();
};
Figure.prototype.getId=function(){
return this.id;
};
Figure.prototype.setId=function(id){
this.id=id;
if(this.html!=null){
this.html.id=id;
}
};
Figure.prototype.setCanvas=function(_4262){
this.canvas=_4262;
};
Figure.prototype.getWorkflow=function(){
return this.workflow;
};
Figure.prototype.setWorkflow=function(_4263){
if(this.draggable==null){
this.html.tabIndex="0";
var oThis=this;
this.keyDown=function(event){
event.cancelBubble=true;
event.returnValue=true;
oThis.onKeyDown(event.keyCode,event.ctrlKey);
};
if(this.html.addEventListener){
this.html.addEventListener("keydown",this.keyDown,false);
}else{
if(this.html.attachEvent){
this.html.attachEvent("onkeydown",this.keyDown);
}
}
this.draggable=new Draggable(this.html,Draggable.DRAG_X|Draggable.DRAG_Y);
this.draggable.node=this;
this.tmpContextMenu=function(_4266){
oThis.onContextMenu(oThis.x+_4266.x,_4266.y+oThis.y);
};
this.tmpMouseEnter=function(_4267){
oThis.onMouseEnter();
};
this.tmpMouseLeave=function(_4268){
oThis.onMouseLeave();
};
this.tmpDragend=function(_4269){
oThis.onDragend();
};
this.tmpDragstart=function(_426a){
var w=oThis.workflow;
w.showMenu(null);
if(w.toolPalette&&w.toolPalette.activeTool){
_426a.returnValue=false;
w.onMouseDown(oThis.x+_426a.x,_426a.y+oThis.y);
w.onMouseUp(oThis.x+_426a.x,_426a.y+oThis.y);
return;
}
if(!(oThis instanceof ResizeHandle)&&!(oThis instanceof Port)){
var line=w.getBestLine(oThis.x+_426a.x,_426a.y+oThis.y);
if(line!=null){
_426a.returnValue=false;
w.setCurrentSelection(line);
w.showLineResizeHandles(line);
w.onMouseDown(oThis.x+_426a.x,_426a.y+oThis.y);
return;
}else{
if(oThis.isSelectable()){
w.showResizeHandles(oThis);
w.setCurrentSelection(oThis);
}
}
}
_426a.returnValue=oThis.onDragstart(_426a.x,_426a.y);
};
this.tmpDrag=function(_426d){
oThis.onDrag();
};
this.tmpDoubleClick=function(_426e){
oThis.onDoubleClick();
};
this.draggable.addEventListener("contextmenu",this.tmpContextMenu);
this.draggable.addEventListener("mouseenter",this.tmpMouseEnter);
this.draggable.addEventListener("mouseleave",this.tmpMouseLeave);
this.draggable.addEventListener("dragend",this.tmpDragend);
this.draggable.addEventListener("dragstart",this.tmpDragstart);
this.draggable.addEventListener("drag",this.tmpDrag);
this.draggable.addEventListener("dblclick",this.tmpDoubleClick);
}
this.workflow=_4263;
};
Figure.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height=this.width+"px";
item.style.width=this.height+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.outline="none";
item.style.zIndex=""+Figure.ZOrderBaseIndex;
return item;
};
Figure.prototype.setParent=function(_4270){
this.parent=_4270;
};
Figure.prototype.getParent=function(){
return this.parent;
};
Figure.prototype.getZOrder=function(){
return this.html.style.zIndex;
};
Figure.prototype.setZOrder=function(index){
this.html.style.zIndex=index;
};
Figure.prototype.hasFixedPosition=function(){
return false;
};
Figure.prototype.getMinWidth=function(){
return 5;
};
Figure.prototype.getMinHeight=function(){
return 5;
};
Figure.prototype.getHTMLElement=function(){
if(this.html==null){
this.html=this.createHTMLElement();
}
return this.html;
};
Figure.prototype.paint=function(){
};
Figure.prototype.setBorder=function(_4272){
if(this.border!=null){
this.border.figure=null;
}
this.border=_4272;
this.border.figure=this;
this.border.refresh();
this.setDocumentDirty();
};
Figure.prototype.onContextMenu=function(x,y){
var menu=this.getContextMenu();
if(menu!=null){
this.workflow.showMenu(menu,x,y);
}
};
Figure.prototype.getContextMenu=function(){
return null;
};
Figure.prototype.onDoubleClick=function(){
};
Figure.prototype.onMouseEnter=function(){
};
Figure.prototype.onMouseLeave=function(){
};
Figure.prototype.onDrag=function(){
this.x=this.draggable.getLeft();
this.y=this.draggable.getTop();
if(this.isMoving==false){
this.isMoving=true;
this.setAlpha(0.5);
}
this.fireMoveEvent();
};
Figure.prototype.onDragend=function(){
if(this.getWorkflow().getEnableSmoothFigureHandling()==true){
var _4276=this;
var _4277=function(){
if(_4276.alpha<1){
_4276.setAlpha(Math.min(1,_4276.alpha+0.05));
}else{
window.clearInterval(_4276.timer);
_4276.timer=-1;
}
};
if(_4276.timer>0){
window.clearInterval(_4276.timer);
}
_4276.timer=window.setInterval(_4277,20);
}else{
this.setAlpha(1);
}
this.command.setPosition(this.x,this.y);
this.workflow.commandStack.execute(this.command);
this.command=null;
this.isMoving=false;
this.workflow.hideSnapToHelperLines();
this.fireMoveEvent();
};
Figure.prototype.onDragstart=function(x,y){
this.command=this.createCommand(new EditPolicy(EditPolicy.MOVE));
return this.command!=null;
};
Figure.prototype.setCanDrag=function(flag){
this.canDrag=flag;
if(flag){
this.html.style.cursor="move";
}else{
this.html.style.cursor="";
}
};
Figure.prototype.setAlpha=function(_427b){
if(this.alpha==_427b){
return;
}
try{
this.html.style.MozOpacity=_427b;
}
catch(exc){
}
try{
this.html.style.opacity=_427b;
}
catch(exc){
}
try{
var _427c=Math.round(_427b*100);
if(_427c>=99){
this.html.style.filter="";
}else{
this.html.style.filter="alpha(opacity="+_427c+")";
}
}
catch(exc){
}
this.alpha=_427b;
};
Figure.prototype.setDimension=function(w,h){
this.width=Math.max(this.getMinWidth(),w);
this.height=Math.max(this.getMinHeight(),h);
if(this.html==null){
return;
}
this.html.style.width=this.width+"px";
this.html.style.height=this.height+"px";
this.fireMoveEvent();
if(this.workflow!=null&&this.workflow.getCurrentSelection()==this){
this.workflow.showResizeHandles(this);
}
};
Figure.prototype.setPosition=function(xPos,yPos){
this.x=xPos;
this.y=yPos;
if(this.html==null){
return;
}
this.html.style.left=this.x+"px";
this.html.style.top=this.y+"px";
this.fireMoveEvent();
if(this.workflow!=null&&this.workflow.getCurrentSelection()==this){
this.workflow.showResizeHandles(this);
}
};
Figure.prototype.isResizeable=function(){
return this.resizeable;
};
Figure.prototype.setResizeable=function(flag){
this.resizeable=flag;
};
Figure.prototype.isSelectable=function(){
return this.selectable;
};
Figure.prototype.setSelectable=function(flag){
this.selectable=flag;
};
Figure.prototype.isStrechable=function(){
return true;
};
Figure.prototype.isDeleteable=function(){
return this.deleteable;
};
Figure.prototype.setDeleteable=function(flag){
this.deleteable=flag;
};
Figure.prototype.setCanSnapToHelper=function(flag){
this.canSnapToHelper=flag;
};
Figure.prototype.getCanSnapToHelper=function(){
return this.canSnapToHelper;
};
Figure.prototype.getSnapToGridAnchor=function(){
return this.snapToGridAnchor;
};
Figure.prototype.setSnapToGridAnchor=function(point){
this.snapToGridAnchor=point;
};
Figure.prototype.getBounds=function(){
return new Dimension(this.getX(),this.getY(),this.getWidth(),this.getHeight());
};
Figure.prototype.getWidth=function(){
return this.width;
};
Figure.prototype.getHeight=function(){
return this.height;
};
Figure.prototype.getY=function(){
return this.y;
};
Figure.prototype.getX=function(){
return this.x;
};
Figure.prototype.getAbsoluteY=function(){
return this.y;
};
Figure.prototype.getAbsoluteX=function(){
return this.x;
};
Figure.prototype.onKeyDown=function(_4286,ctrl){
if(_4286==46){
this.workflow.getCommandStack().execute(this.createCommand(new EditPolicy(EditPolicy.DELETE)));
}
if(ctrl){
this.workflow.onKeyDown(_4286,ctrl);
}
};
Figure.prototype.getPosition=function(){
return new Point(this.x,this.y);
};
Figure.prototype.isOver=function(iX,iY){
var x=this.getAbsoluteX();
var y=this.getAbsoluteY();
var iX2=x+this.width;
var iY2=y+this.height;
return (iX>=x&&iX<=iX2&&iY>=y&&iY<=iY2);
};
Figure.prototype.attachMoveListener=function(_428e){
if(_428e==null||this.moveListener==null){
return;
}
this.moveListener.add(_428e);
};
Figure.prototype.detachMoveListener=function(_428f){
if(_428f==null||this.moveListener==null){
return;
}
this.moveListener.remove(_428f);
};
Figure.prototype.fireMoveEvent=function(){
this.setDocumentDirty();
var size=this.moveListener.getSize();
for(var i=0;i<size;i++){
this.moveListener.get(i).onOtherFigureMoved(this);
}
};
Figure.prototype.setModel=function(model){
if(this.model!=null){
this.model.removePropertyChangeListener(this);
}
this.model=model;
if(this.model!=null){
this.model.addPropertyChangeListener(this);
}
};
Figure.prototype.getModel=function(){
return this.model;
};
Figure.prototype.onOtherFigureMoved=function(_4293){
};
Figure.prototype.setDocumentDirty=function(){
if(this.workflow!=null){
this.workflow.setDocumentDirty();
}
};
Figure.prototype.disableTextSelection=function(e){
if(typeof e.onselectstart!="undefined"){
e.onselectstart=function(){
return false;
};
}else{
if(typeof e.style.MozUserSelect!="undefined"){
e.style.MozUserSelect="none";
}
}
};
Figure.prototype.createCommand=function(_4295){
if(_4295.getPolicy()==EditPolicy.MOVE){
if(!this.canDrag){
return null;
}
return new CommandMove(this);
}
if(_4295.getPolicy()==EditPolicy.DELETE){
if(!this.isDeleteable()){
return null;
}
return new CommandDelete(this);
}
if(_4295.getPolicy()==EditPolicy.RESIZE){
if(!this.isResizeable()){
return null;
}
return new CommandResize(this);
}
return null;
};
Node=function(){
this.bgColor=null;
this.lineColor=new Color(128,128,255);
this.lineStroke=1;
this.ports=new ArrayList();
Figure.call(this);
};
Node.prototype=new Figure;
Node.prototype.type="Node";
Node.prototype.dispose=function(){
for(var i=0;i<this.ports.getSize();i++){
this.ports.get(i).dispose();
}
this.ports=null;
Figure.prototype.dispose.call(this);
};
Node.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
item.style.width="auto";
item.style.height="auto";
item.style.margin="0px";
item.style.padding="0px";
if(this.lineColor!=null){
item.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
}
item.style.fontSize="1px";
if(this.bgColor!=null){
item.style.backgroundColor=this.bgColor.getHTMLStyle();
}
return item;
};
Node.prototype.paint=function(){
Figure.prototype.paint.call(this);
for(var i=0;i<this.ports.getSize();i++){
this.ports.get(i).paint();
}
};
Node.prototype.getPorts=function(){
return this.ports;
};
Node.prototype.getPort=function(_36b4){
if(this.ports==null){
return null;
}
for(var i=0;i<this.ports.getSize();i++){
var port=this.ports.get(i);
if(port.getName()==_36b4){
return port;
}
}
};
Node.prototype.addPort=function(port,x,y){
this.ports.add(port);
port.setOrigin(x,y);
port.setPosition(x,y);
port.setParent(this);
port.setDeleteable(false);
this.html.appendChild(port.getHTMLElement());
if(this.workflow!=null){
this.workflow.registerPort(port);
}
};
Node.prototype.removePort=function(port){
if(this.ports!=null){
this.ports.removeElementAt(this.ports.indexOf(port));
}
try{
this.html.removeChild(port.getHTMLElement());
}
catch(exc){
}
if(this.workflow!=null){
this.workflow.unregisterPort(port);
}
};
Node.prototype.setWorkflow=function(_36bb){
var _36bc=this.workflow;
Figure.prototype.setWorkflow.call(this,_36bb);
if(_36bc!=null){
for(var i=0;i<this.ports.getSize();i++){
_36bc.unregisterPort(this.ports.get(i));
}
}
if(this.workflow!=null){
for(var i=0;i<this.ports.getSize();i++){
this.workflow.registerPort(this.ports.get(i));
}
}
};
Node.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.bgColor!=null){
this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
}else{
this.html.style.backgroundColor="transparent";
}
};
Node.prototype.getBackgroundColor=function(){
return this.bgColor;
};
Node.prototype.setColor=function(color){
this.lineColor=color;
if(this.lineColor!=null){
this.html.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
}else{
this.html.style.border="0px";
}
};
Node.prototype.setLineWidth=function(w){
this.lineStroke=w;
if(this.lineColor!=null){
this.html.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
}else{
this.html.style.border="0px";
}
};
Node.prototype.getModelSourceConnections=function(){
throw "You must override the method [Node.prototype.getModelSourceConnections]";
};
Node.prototype.refreshConnections=function(){
if(this.workflow!=null){
this.workflow.refreshConnections(this);
}
};
VectorFigure=function(){
this.bgColor=null;
this.lineColor=new Color(0,0,0);
this.stroke=1;
this.graphics=null;
Node.call(this);
};
VectorFigure.prototype=new Node;
VectorFigure.prototype.type="VectorFigure";
VectorFigure.prototype.dispose=function(){
Node.prototype.dispose.call(this);
this.bgColor=null;
this.lineColor=null;
if(this.graphics!=null){
this.graphics.clear();
}
this.graphics=null;
};
VectorFigure.prototype.createHTMLElement=function(){
var item=Node.prototype.createHTMLElement.call(this);
item.style.border="0px";
item.style.backgroundColor="transparent";
return item;
};
VectorFigure.prototype.setWorkflow=function(_42e7){
Node.prototype.setWorkflow.call(this,_42e7);
if(this.workflow==null){
this.graphics.clear();
this.graphics=null;
}
};
VectorFigure.prototype.paint=function(){
if(this.graphics==null){
this.graphics=new jsGraphics(this.id);
}else{
this.graphics.clear();
}
Node.prototype.paint.call(this);
for(var i=0;i<this.ports.getSize();i++){
this.getHTMLElement().appendChild(this.ports.get(i).getHTMLElement());
}
};
VectorFigure.prototype.setDimension=function(w,h){
Node.prototype.setDimension.call(this,w,h);
if(this.graphics!=null){
this.paint();
}
};
VectorFigure.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.graphics!=null){
this.paint();
}
};
VectorFigure.prototype.getBackgroundColor=function(){
return this.bgColor;
};
VectorFigure.prototype.setLineWidth=function(w){
this.stroke=w;
if(this.graphics!=null){
this.paint();
}
};
VectorFigure.prototype.setColor=function(color){
this.lineColor=color;
if(this.graphics!=null){
this.paint();
}
};
VectorFigure.prototype.getColor=function(){
return this.lineColor;
};
SVGFigure=function(width,_34be){
this.bgColor=null;
this.lineColor=new Color(0,0,0);
this.stroke=1;
this.context=null;
Node.call(this);
if(width&&_34be){
this.setDimension(width,_34be);
}
};
SVGFigure.prototype=new Node;
SVGFigure.prototype.type="SVGFigure";
SVGFigure.prototype.createHTMLElement=function(){
var item=new MooCanvas(this.id,{width:100,height:100});
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.zIndex=""+Figure.ZOrderBaseIndex;
this.context=item.getContext("2d");
return item;
};
SVGFigure.prototype.paint=function(){
this.context.clearRect(0,0,this.getWidth(),this.getHeight());
this.context.fillStyle="rgba(200,0,0,0.3)";
this.context.fillRect(0,0,this.getWidth(),this.getHeight());
};
SVGFigure.prototype.setDimension=function(w,h){
Node.prototype.setDimension.call(this,w,h);
this.html.width=w;
this.html.height=h;
this.html.style.width=w+"px";
this.html.style.height=h+"px";
if(this.context!=null){
if(this.context.element){
this.context.element.style.width=w+"px";
this.context.element.style.height=h+"px";
}
this.paint();
}
};
SVGFigure.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.graphics!=null){
this.paint();
}
};
SVGFigure.prototype.getBackgroundColor=function(){
return this.bgColor;
};
SVGFigure.prototype.setLineWidth=function(w){
this.stroke=w;
if(this.context!=null){
this.paint();
}
};
SVGFigure.prototype.setColor=function(color){
this.lineColor=color;
if(this.context!=null){
this.paint();
}
};
SVGFigure.prototype.getColor=function(){
return this.lineColor;
};
Label=function(msg){
this.msg=msg;
this.bgColor=null;
this.color=new Color(0,0,0);
this.fontSize=10;
this.textNode=null;
this.align="center";
Figure.call(this);
};
Label.prototype=new Figure;
Label.prototype.type="Label";
Label.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
this.textNode=document.createTextNode(this.msg);
item.appendChild(this.textNode);
item.style.color=this.color.getHTMLStyle();
item.style.fontSize=this.fontSize+"pt";
item.style.width="auto";
item.style.height="auto";
item.style.paddingLeft="3px";
item.style.paddingRight="3px";
item.style.textAlign=this.align;
item.style.MozUserSelect="none";
this.disableTextSelection(item);
if(this.bgColor!=null){
item.style.backgroundColor=this.bgColor.getHTMLStyle();
}
return item;
};
Label.prototype.isResizeable=function(){
return false;
};
Label.prototype.setWordwrap=function(flag){
this.html.style.whiteSpace=flag?"wrap":"nowrap";
};
Label.prototype.setAlign=function(align){
this.align=align;
this.html.style.textAlign=align;
};
Label.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.bgColor!=null){
this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
}else{
this.html.style.backgroundColor="transparent";
}
};
Label.prototype.setColor=function(color){
this.color=color;
this.html.style.color=this.color.getHTMLStyle();
};
Label.prototype.setFontSize=function(size){
this.fontSize=size;
this.html.style.fontSize=this.fontSize+"pt";
};
Label.prototype.getWidth=function(){
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.html,"").getPropertyValue("width"));
}
return parseInt(this.html.clientWidth);
};
Label.prototype.getHeight=function(){
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.html,"").getPropertyValue("height"));
}
return parseInt(this.html.clientHeight);
};
Label.prototype.getText=function(){
return this.msg;
};
Label.prototype.setText=function(text){
this.msg=text;
this.html.removeChild(this.textNode);
this.textNode=document.createTextNode(this.msg);
this.html.appendChild(this.textNode);
};
Label.prototype.setStyledText=function(text){
this.msg=text;
this.html.removeChild(this.textNode);
this.textNode=document.createElement("div");
this.textNode.style.whiteSpace="nowrap";
this.textNode.innerHTML=text;
this.html.appendChild(this.textNode);
};
Oval=function(){
VectorFigure.call(this);
};
Oval.prototype=new VectorFigure;
Oval.prototype.type="Oval";
Oval.prototype.paint=function(){
VectorFigure.prototype.paint.call(this);
this.graphics.setStroke(this.stroke);
if(this.bgColor!=null){
this.graphics.setColor(this.bgColor.getHTMLStyle());
this.graphics.fillOval(0,0,this.getWidth()-1,this.getHeight()-1);
}
if(this.lineColor!=null){
this.graphics.setColor(this.lineColor.getHTMLStyle());
this.graphics.drawOval(0,0,this.getWidth()-1,this.getHeight()-1);
}
this.graphics.paint();
};
Circle=function(_4509){
Oval.call(this);
if(_4509){
this.setDimension(_4509,_4509);
}
};
Circle.prototype=new Oval;
Circle.prototype.type="Circle";
Circle.prototype.setDimension=function(w,h){
if(w>h){
Oval.prototype.setDimension.call(this,w,w);
}else{
Oval.prototype.setDimension.call(this,h,h);
}
};
Circle.prototype.isStrechable=function(){
return false;
};
Rectangle=function(width,_42a9){
this.bgColor=null;
this.lineColor=new Color(0,0,0);
this.lineStroke=1;
Figure.call(this);
if(width&&_42a9){
this.setDimension(width,_42a9);
}
};
Rectangle.prototype=new Figure;
Rectangle.prototype.type="Rectangle";
Rectangle.prototype.dispose=function(){
Figure.prototype.dispose.call(this);
this.bgColor=null;
this.lineColor=null;
};
Rectangle.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
item.style.width="auto";
item.style.height="auto";
item.style.margin="0px";
item.style.padding="0px";
item.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
item.style.fontSize="1px";
item.style.lineHeight="1px";
item.innerHTML="&nbsp";
if(this.bgColor!=null){
item.style.backgroundColor=this.bgColor.getHTMLStyle();
}
return item;
};
Rectangle.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.bgColor!=null){
this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
}else{
this.html.style.backgroundColor="transparent";
}
};
Rectangle.prototype.getBackgroundColor=function(){
return this.bgColor;
};
Rectangle.prototype.setColor=function(color){
this.lineColor=color;
if(this.lineColor!=null){
this.html.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
}else{
this.html.style.border=this.lineStroke+"0px";
}
};
Rectangle.prototype.getColor=function(){
return this.lineColor;
};
Rectangle.prototype.getWidth=function(){
return Figure.prototype.getWidth.call(this)+2*this.lineStroke;
};
Rectangle.prototype.getHeight=function(){
return Figure.prototype.getHeight.call(this)+2*this.lineStroke;
};
Rectangle.prototype.setDimension=function(w,h){
return Figure.prototype.setDimension.call(this,w-2*this.lineStroke,h-2*this.lineStroke);
};
Rectangle.prototype.setLineWidth=function(w){
var diff=w-this.lineStroke;
this.setDimension(this.getWidth()-2*diff,this.getHeight()-2*diff);
this.lineStroke=w;
var c="transparent";
if(this.lineColor!=null){
c=this.lineColor.getHTMLStyle();
}
this.html.style.border=this.lineStroke+"px solid "+c;
};
Rectangle.prototype.getLineWidth=function(){
return this.lineStroke;
};
ImageFigure=function(url){
this.url=url;
Node.call(this);
this.setDimension(40,40);
};
ImageFigure.prototype=new Node;
ImageFigure.prototype.type="Image";
ImageFigure.prototype.createHTMLElement=function(){
var item=Node.prototype.createHTMLElement.call(this);
item.style.width=this.width+"px";
item.style.height=this.height+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.border="0px";
if(this.url!=null){
item.style.backgroundImage="url("+this.url+")";
}else{
item.style.backgroundImage="";
}
return item;
};
ImageFigure.prototype.setColor=function(color){
};
ImageFigure.prototype.isResizeable=function(){
return false;
};
ImageFigure.prototype.setImage=function(url){
this.url=url;
if(this.url!=null){
this.html.style.backgroundImage="url("+this.url+")";
}else{
this.html.style.backgroundImage="";
}
};
Port=function(_4793,_4794){
Corona=function(){
};
Corona.prototype=new Circle;
Corona.prototype.setAlpha=function(_4795){
Circle.prototype.setAlpha.call(this,Math.min(0.3,_4795));
};
if(_4793==null){
this.currentUIRepresentation=new Circle();
}else{
this.currentUIRepresentation=_4793;
}
if(_4794==null){
this.connectedUIRepresentation=new Circle();
this.connectedUIRepresentation.setColor(null);
}else{
this.connectedUIRepresentation=_4794;
}
this.disconnectedUIRepresentation=this.currentUIRepresentation;
this.hideIfConnected=false;
this.uiRepresentationAdded=true;
this.parentNode=null;
this.originX=0;
this.originY=0;
this.coronaWidth=10;
this.corona=null;
Rectangle.call(this);
this.setDimension(8,8);
this.setBackgroundColor(new Color(100,180,100));
this.setColor(new Color(90,150,90));
Rectangle.prototype.setColor.call(this,null);
this.dropable=new DropTarget(this.html);
this.dropable.node=this;
this.dropable.addEventListener("dragenter",function(_4796){
_4796.target.node.onDragEnter(_4796.relatedTarget.node);
});
this.dropable.addEventListener("dragleave",function(_4797){
_4797.target.node.onDragLeave(_4797.relatedTarget.node);
});
this.dropable.addEventListener("drop",function(_4798){
_4798.relatedTarget.node.onDrop(_4798.target.node);
});
};
Port.prototype=new Rectangle;
Port.prototype.type="Port";
Port.ZOrderBaseIndex=5000;
Port.setZOrderBaseIndex=function(index){
Port.ZOrderBaseIndex=index;
};
Port.prototype.setHideIfConnected=function(flag){
this.hideIfConnected=flag;
};
Port.prototype.dispose=function(){
var size=this.moveListener.getSize();
for(var i=0;i<size;i++){
var _479d=this.moveListener.get(i);
this.parentNode.workflow.removeFigure(_479d);
_479d.dispose();
}
Rectangle.prototype.dispose.call(this);
this.parentNode=null;
this.dropable.node=null;
this.dropable=null;
this.disconnectedUIRepresentation.dispose();
this.connectedUIRepresentation.dispose();
};
Port.prototype.createHTMLElement=function(){
var item=Rectangle.prototype.createHTMLElement.call(this);
item.style.zIndex=Port.ZOrderBaseIndex;
this.currentUIRepresentation.html.zIndex=Port.ZOrderBaseIndex;
item.appendChild(this.currentUIRepresentation.html);
this.uiRepresentationAdded=true;
return item;
};
Port.prototype.setUiRepresentation=function(_479f){
if(_479f==null){
_479f=new Figure();
}
if(this.uiRepresentationAdded){
this.html.removeChild(this.currentUIRepresentation.getHTMLElement());
}
this.html.appendChild(_479f.getHTMLElement());
_479f.paint();
this.currentUIRepresentation=_479f;
};
Port.prototype.onMouseEnter=function(){
this.setLineWidth(2);
};
Port.prototype.onMouseLeave=function(){
this.setLineWidth(0);
};
Port.prototype.setDimension=function(width,_47a1){
Rectangle.prototype.setDimension.call(this,width,_47a1);
this.connectedUIRepresentation.setDimension(width,_47a1);
this.disconnectedUIRepresentation.setDimension(width,_47a1);
this.setPosition(this.x,this.y);
};
Port.prototype.setBackgroundColor=function(color){
this.currentUIRepresentation.setBackgroundColor(color);
};
Port.prototype.getBackgroundColor=function(){
return this.currentUIRepresentation.getBackgroundColor();
};
Port.prototype.getConnections=function(){
var _47a3=new ArrayList();
var size=this.moveListener.getSize();
for(var i=0;i<size;i++){
var _47a6=this.moveListener.get(i);
if(_47a6 instanceof Connection){
_47a3.add(_47a6);
}
}
return _47a3;
};
Port.prototype.setColor=function(color){
this.currentUIRepresentation.setColor(color);
};
Port.prototype.getColor=function(){
return this.currentUIRepresentation.getColor();
};
Port.prototype.setLineWidth=function(width){
this.currentUIRepresentation.setLineWidth(width);
};
Port.prototype.getLineWidth=function(){
return this.currentUIRepresentation.getLineWidth();
};
Port.prototype.paint=function(){
this.currentUIRepresentation.paint();
};
Port.prototype.setPosition=function(xPos,yPos){
this.originX=xPos;
this.originY=yPos;
Rectangle.prototype.setPosition.call(this,xPos,yPos);
if(this.html==null){
return;
}
this.html.style.left=(this.x-this.getWidth()/2)+"px";
this.html.style.top=(this.y-this.getHeight()/2)+"px";
};
Port.prototype.setParent=function(_47ab){
if(this.parentNode!=null){
this.parentNode.detachMoveListener(this);
}
this.parentNode=_47ab;
if(this.parentNode!=null){
this.parentNode.attachMoveListener(this);
}
};
Port.prototype.attachMoveListener=function(_47ac){
Rectangle.prototype.attachMoveListener.call(this,_47ac);
if(this.hideIfConnected==true){
this.setUiRepresentation(this.connectedUIRepresentation);
}
};
Port.prototype.detachMoveListener=function(_47ad){
Rectangle.prototype.detachMoveListener.call(this,_47ad);
if(this.getConnections().getSize()==0){
this.setUiRepresentation(this.disconnectedUIRepresentation);
}
};
Port.prototype.getParent=function(){
return this.parentNode;
};
Port.prototype.onDrag=function(){
Rectangle.prototype.onDrag.call(this);
this.parentNode.workflow.showConnectionLine(this.parentNode.x+this.x,this.parentNode.y+this.y,this.parentNode.x+this.originX,this.parentNode.y+this.originY);
};
Port.prototype.getCoronaWidth=function(){
return this.coronaWidth;
};
Port.prototype.setCoronaWidth=function(width){
this.coronaWidth=width;
};
Port.prototype.setOrigin=function(x,y){
this.originX=x;
this.originY=y;
};
Port.prototype.onDragend=function(){
this.setAlpha(1);
this.setPosition(this.originX,this.originY);
this.parentNode.workflow.hideConnectionLine();
};
Port.prototype.onDragEnter=function(port){
this.parentNode.workflow.connectionLine.setColor(new Color(0,150,0));
this.parentNode.workflow.connectionLine.setLineWidth(3);
this.showCorona(true);
};
Port.prototype.onDragLeave=function(port){
this.parentNode.workflow.connectionLine.setColor(new Color(0,0,0));
this.parentNode.workflow.connectionLine.setLineWidth(1);
this.showCorona(false);
};
Port.prototype.onDrop=function(port){
var _47b4=new EditPolicy(EditPolicy.CONNECT);
_47b4.canvas=this.parentNode.workflow;
_47b4.source=port;
_47b4.target=this;
var _47b5=this.createCommand(_47b4);
if(_47b5!=null){
this.parentNode.workflow.getCommandStack().execute(_47b5);
}
};
Port.prototype.getAbsolutePosition=function(){
return new Point(this.getAbsoluteX(),this.getAbsoluteY());
};
Port.prototype.getAbsoluteBounds=function(){
return new Dimension(this.getAbsoluteX(),this.getAbsoluteY(),this.getWidth(),this.getHeight());
};
Port.prototype.getAbsoluteY=function(){
return this.originY+this.parentNode.getY();
};
Port.prototype.getAbsoluteX=function(){
return this.originX+this.parentNode.getX();
};
Port.prototype.onOtherFigureMoved=function(_47b6){
this.fireMoveEvent();
};
Port.prototype.getName=function(){
return this.name;
};
Port.prototype.setName=function(name){
this.name=name;
};
Port.prototype.isOver=function(iX,iY){
var x=this.getAbsoluteX()-this.coronaWidth-this.getWidth()/2;
var y=this.getAbsoluteY()-this.coronaWidth-this.getHeight()/2;
var iX2=x+this.width+(this.coronaWidth*2)+this.getWidth()/2;
var iY2=y+this.height+(this.coronaWidth*2)+this.getHeight()/2;
return (iX>=x&&iX<=iX2&&iY>=y&&iY<=iY2);
};
Port.prototype.showCorona=function(flag,_47bf){
if(flag==true){
this.corona=new Corona();
this.corona.setAlpha(0.3);
this.corona.setBackgroundColor(new Color(0,125,125));
this.corona.setColor(null);
this.corona.setDimension(this.getWidth()+(this.getCoronaWidth()*2),this.getWidth()+(this.getCoronaWidth()*2));
this.parentNode.getWorkflow().addFigure(this.corona,this.getAbsoluteX()-this.getCoronaWidth()-this.getWidth()/2,this.getAbsoluteY()-this.getCoronaWidth()-this.getHeight()/2);
}else{
if(flag==false&&this.corona!=null){
this.parentNode.getWorkflow().removeFigure(this.corona);
this.corona=null;
}
}
};
Port.prototype.createCommand=function(_47c0){
if(_47c0.getPolicy()==EditPolicy.MOVE){
return new CommandMovePort(this);
}
if(_47c0.getPolicy()==EditPolicy.CONNECT){
if(_47c0.source.parentNode.id==_47c0.target.parentNode.id){
return null;
}else{
return new CommandConnect(_47c0.canvas,_47c0.source,_47c0.target);
}
}
return null;
};
InputPort=function(_4611){
Port.call(this,_4611);
};
InputPort.prototype=new Port;
InputPort.prototype.type="InputPort";
InputPort.prototype.onDragEnter=function(port){
if(port instanceof OutputPort){
Port.prototype.onDragEnter.call(this,port);
}else{
if(port instanceof LineStartResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getSource() instanceof InputPort){
Port.prototype.onDragEnter.call(this,line.getSource());
}
}else{
if(port instanceof LineEndResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getTarget() instanceof InputPort){
Port.prototype.onDragEnter.call(this,line.getTarget());
}
}
}
}
};
InputPort.prototype.onDragLeave=function(port){
if(port instanceof OutputPort){
Port.prototype.onDragLeave.call(this,port);
}else{
if(port instanceof LineStartResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getSource() instanceof InputPort){
Port.prototype.onDragLeave.call(this,line.getSource());
}
}else{
if(port instanceof LineEndResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getTarget() instanceof InputPort){
Port.prototype.onDragLeave.call(this,line.getTarget());
}
}
}
}
};
InputPort.prototype.createCommand=function(_4616){
if(_4616.getPolicy()==EditPolicy.CONNECT){
if(_4616.source.parentNode.id==_4616.target.parentNode.id){
return null;
}
if(_4616.source instanceof OutputPort){
return new CommandConnect(_4616.canvas,_4616.source,_4616.target);
}
return null;
}
return Port.prototype.createCommand.call(this,_4616);
};
OutputPort=function(_398e){
Port.call(this,_398e);
this.maxFanOut=100;
};
OutputPort.prototype=new Port;
OutputPort.prototype.type="OutputPort";
OutputPort.prototype.onDragEnter=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(port instanceof InputPort){
Port.prototype.onDragEnter.call(this,port);
}else{
if(port instanceof LineStartResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getSource() instanceof OutputPort){
Port.prototype.onDragEnter.call(this,line.getSource());
}
}else{
if(port instanceof LineEndResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getTarget() instanceof OutputPort){
Port.prototype.onDragEnter.call(this,line.getTarget());
}
}
}
}
};
OutputPort.prototype.onDragLeave=function(port){
if(port instanceof InputPort){
Port.prototype.onDragLeave.call(this,port);
}else{
if(port instanceof LineStartResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getSource() instanceof OutputPort){
Port.prototype.onDragLeave.call(this,line.getSource());
}
}else{
if(port instanceof LineEndResizeHandle){
var line=this.workflow.currentSelection;
if(line instanceof Connection&&line.getTarget() instanceof OutputPort){
Port.prototype.onDragLeave.call(this,line.getTarget());
}
}
}
}
};
OutputPort.prototype.onDragstart=function(x,y){
if(this.maxFanOut==-1){
return true;
}
if(this.getMaxFanOut()<=this.getFanOut()){
return false;
}
return true;
};
OutputPort.prototype.setMaxFanOut=function(count){
this.maxFanOut=count;
};
OutputPort.prototype.getMaxFanOut=function(){
return this.maxFanOut;
};
OutputPort.prototype.getFanOut=function(){
if(this.getParent().workflow==null){
return 0;
}
var count=0;
var lines=this.getParent().workflow.getLines();
var size=lines.getSize();
for(var i=0;i<size;i++){
var line=lines.get(i);
if(line instanceof Connection){
if(line.getSource()==this){
count++;
}else{
if(line.getTarget()==this){
count++;
}
}
}
}
return count;
};
OutputPort.prototype.createCommand=function(_399b){
if(_399b.getPolicy()==EditPolicy.CONNECT){
if(_399b.source.parentNode.id==_399b.target.parentNode.id){
return null;
}
if(_399b.source instanceof InputPort){
return new CommandConnect(_399b.canvas,_399b.target,_399b.source);
}
return null;
}
return Port.prototype.createCommand.call(this,_399b);
};
Line=function(){
this.lineColor=new Color(0,0,0);
this.stroke=1;
this.canvas=null;
this.workflow=null;
this.html=null;
this.graphics=null;
this.id=UUID.create();
this.startX=30;
this.startY=30;
this.endX=100;
this.endY=100;
this.alpha=1;
this.isMoving=false;
this.model=null;
this.zOrder=Line.ZOrderBaseIndex;
this.corona=Line.CoronaWidth;
this.properties=new Object();
this.moveListener=new ArrayList();
this.setSelectable(true);
this.setDeleteable(true);
};
Line.prototype.type="Line";
Line.ZOrderBaseIndex=200;
Line.ZOrderBaseIndex=200;
Line.CoronaWidth=5;
Line.setZOrderBaseIndex=function(index){
Line.ZOrderBaseIndex=index;
};
Line.setDefaultCoronaWidth=function(width){
Line.CoronaWidth=width;
};
Line.prototype.dispose=function(){
this.canvas=null;
this.workflow=null;
if(this.graphics!=null){
this.graphics.clear();
}
this.graphics=null;
};
Line.prototype.getZOrder=function(){
return this.zOrder;
};
Line.prototype.setZOrder=function(index){
if(this.html!=null){
this.html.style.zIndex=index;
}
this.zOrder=index;
};
Line.prototype.setCoronaWidth=function(width){
this.corona=width;
};
Line.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left="0px";
item.style.top="0px";
item.style.height="0px";
item.style.width="0px";
item.style.zIndex=this.zOrder;
return item;
};
Line.prototype.setId=function(id){
this.id=id;
if(this.html!=null){
this.html.id=id;
}
};
Line.prototype.getProperties=function(){
return this.properties;
};
Line.prototype.getProperty=function(key){
return this.properties[key];
};
Line.prototype.setProperty=function(key,value){
this.properties[key]=value;
this.setDocumentDirty();
};
Line.prototype.getHTMLElement=function(){
if(this.html==null){
this.html=this.createHTMLElement();
}
return this.html;
};
Line.prototype.getWorkflow=function(){
return this.workflow;
};
Line.prototype.isResizeable=function(){
return true;
};
Line.prototype.setCanvas=function(_446d){
this.canvas=_446d;
if(this.graphics!=null){
this.graphics.clear();
}
this.graphics=null;
};
Line.prototype.setWorkflow=function(_446e){
this.workflow=_446e;
if(this.graphics!=null){
this.graphics.clear();
}
this.graphics=null;
};
Line.prototype.paint=function(){
if(this.graphics==null){
this.graphics=new jsGraphics(this.id);
}else{
this.graphics.clear();
}
this.graphics.setStroke(this.stroke);
this.graphics.setColor(this.lineColor.getHTMLStyle());
this.graphics.drawLine(this.startX,this.startY,this.endX,this.endY);
this.graphics.paint();
};
Line.prototype.attachMoveListener=function(_446f){
this.moveListener.add(_446f);
};
Line.prototype.detachMoveListener=function(_4470){
this.moveListener.remove(_4470);
};
Line.prototype.fireMoveEvent=function(){
var size=this.moveListener.getSize();
for(var i=0;i<size;i++){
this.moveListener.get(i).onOtherFigureMoved(this);
}
};
Line.prototype.onOtherFigureMoved=function(_4473){
};
Line.prototype.setLineWidth=function(w){
this.stroke=w;
if(this.graphics!=null){
this.paint();
}
this.setDocumentDirty();
};
Line.prototype.setColor=function(color){
this.lineColor=color;
if(this.graphics!=null){
this.paint();
}
this.setDocumentDirty();
};
Line.prototype.getColor=function(){
return this.lineColor;
};
Line.prototype.setAlpha=function(_4476){
if(_4476==this.alpha){
return;
}
try{
this.html.style.MozOpacity=_4476;
}
catch(exc){
}
try{
this.html.style.opacity=_4476;
}
catch(exc){
}
try{
var _4477=Math.round(_4476*100);
if(_4477>=99){
this.html.style.filter="";
}else{
this.html.style.filter="alpha(opacity="+_4477+")";
}
}
catch(exc){
}
this.alpha=_4476;
};
Line.prototype.setStartPoint=function(x,y){
this.startX=x;
this.startY=y;
if(this.graphics!=null){
this.paint();
}
this.setDocumentDirty();
};
Line.prototype.setEndPoint=function(x,y){
this.endX=x;
this.endY=y;
if(this.graphics!=null){
this.paint();
}
this.setDocumentDirty();
};
Line.prototype.getStartX=function(){
return this.startX;
};
Line.prototype.getStartY=function(){
return this.startY;
};
Line.prototype.getStartPoint=function(){
return new Point(this.startX,this.startY);
};
Line.prototype.getEndX=function(){
return this.endX;
};
Line.prototype.getEndY=function(){
return this.endY;
};
Line.prototype.getEndPoint=function(){
return new Point(this.endX,this.endY);
};
Line.prototype.isSelectable=function(){
return this.selectable;
};
Line.prototype.setSelectable=function(flag){
this.selectable=flag;
};
Line.prototype.isDeleteable=function(){
return this.deleteable;
};
Line.prototype.setDeleteable=function(flag){
this.deleteable=flag;
};
Line.prototype.getLength=function(){
return Math.sqrt((this.startX-this.endX)*(this.startX-this.endX)+(this.startY-this.endY)*(this.startY-this.endY));
};
Line.prototype.getAngle=function(){
var _447e=this.getLength();
var angle=-(180/Math.PI)*Math.asin((this.startY-this.endY)/_447e);
if(angle<0){
if(this.endX<this.startX){
angle=Math.abs(angle)+180;
}else{
angle=360-Math.abs(angle);
}
}else{
if(this.endX<this.startX){
angle=180-angle;
}
}
return angle;
};
Line.prototype.createCommand=function(_4480){
if(_4480.getPolicy()==EditPolicy.MOVE){
var x1=this.getStartX();
var y1=this.getStartY();
var x2=this.getEndX();
var y2=this.getEndY();
return new CommandMoveLine(this,x1,y1,x2,y2);
}
if(_4480.getPolicy()==EditPolicy.DELETE){
if(this.isDeleteable()==false){
return null;
}
return new CommandDelete(this);
}
return null;
};
Line.prototype.setModel=function(model){
if(this.model!=null){
this.model.removePropertyChangeListener(this);
}
this.model=model;
if(this.model!=null){
this.model.addPropertyChangeListener(this);
}
};
Line.prototype.getModel=function(){
return this.model;
};
Line.prototype.onContextMenu=function(x,y){
var menu=this.getContextMenu();
if(menu!=null){
this.workflow.showMenu(menu,x,y);
}
};
Line.prototype.getContextMenu=function(){
return null;
};
Line.prototype.onDoubleClick=function(){
};
Line.prototype.setDocumentDirty=function(){
if(this.workflow!=null){
this.workflow.setDocumentDirty();
}
};
Line.prototype.containsPoint=function(px,py){
return Line.hit(this.corona,this.startX,this.startY,this.endX,this.endY,px,py);
};
Line.hit=function(_448b,X1,Y1,X2,Y2,px,py){
X2-=X1;
Y2-=Y1;
px-=X1;
py-=Y1;
var _4492=px*X2+py*Y2;
var _4493;
if(_4492<=0){
_4493=0;
}else{
px=X2-px;
py=Y2-py;
_4492=px*X2+py*Y2;
if(_4492<=0){
_4493=0;
}else{
_4493=_4492*_4492/(X2*X2+Y2*Y2);
}
}
var lenSq=px*px+py*py-_4493;
if(lenSq<0){
lenSq=0;
}
return Math.sqrt(lenSq)<_448b;
};
ConnectionRouter=function(){
};
ConnectionRouter.prototype.type="ConnectionRouter";
ConnectionRouter.prototype.getDirection=function(r,p){
var _4532=Math.abs(r.x-p.x);
var _4533=3;
var i=Math.abs(r.y-p.y);
if(i<=_4532){
_4532=i;
_4533=0;
}
i=Math.abs(r.getBottom()-p.y);
if(i<=_4532){
_4532=i;
_4533=2;
}
i=Math.abs(r.getRight()-p.x);
if(i<_4532){
_4532=i;
_4533=1;
}
return _4533;
};
ConnectionRouter.prototype.getEndDirection=function(conn){
var p=conn.getEndPoint();
var rect=conn.getTarget().getParent().getBounds();
return this.getDirection(rect,p);
};
ConnectionRouter.prototype.getStartDirection=function(conn){
var p=conn.getStartPoint();
var rect=conn.getSource().getParent().getBounds();
return this.getDirection(rect,p);
};
ConnectionRouter.prototype.route=function(_453b){
};
NullConnectionRouter=function(){
};
NullConnectionRouter.prototype=new ConnectionRouter;
NullConnectionRouter.prototype.type="NullConnectionRouter";
NullConnectionRouter.prototype.invalidate=function(){
};
NullConnectionRouter.prototype.route=function(_4514){
_4514.addPoint(_4514.getStartPoint());
_4514.addPoint(_4514.getEndPoint());
};
ManhattanConnectionRouter=function(){
this.MINDIST=20;
};
ManhattanConnectionRouter.prototype=new ConnectionRouter;
ManhattanConnectionRouter.prototype.type="ManhattanConnectionRouter";
ManhattanConnectionRouter.prototype.route=function(conn){
var _401e=conn.getStartPoint();
var _401f=this.getStartDirection(conn);
var toPt=conn.getEndPoint();
var toDir=this.getEndDirection(conn);
this._route(conn,toPt,toDir,_401e,_401f);
};
ManhattanConnectionRouter.prototype._route=function(conn,_4023,_4024,toPt,toDir){
var TOL=0.1;
var _4028=0.01;
var UP=0;
var RIGHT=1;
var DOWN=2;
var LEFT=3;
var xDiff=_4023.x-toPt.x;
var yDiff=_4023.y-toPt.y;
var point;
var dir;
if(((xDiff*xDiff)<(_4028))&&((yDiff*yDiff)<(_4028))){
conn.addPoint(new Point(toPt.x,toPt.y));
return;
}
if(_4024==LEFT){
if((xDiff>0)&&((yDiff*yDiff)<TOL)&&(toDir==RIGHT)){
point=toPt;
dir=toDir;
}else{
if(xDiff<0){
point=new Point(_4023.x-this.MINDIST,_4023.y);
}else{
if(((yDiff>0)&&(toDir==DOWN))||((yDiff<0)&&(toDir==UP))){
point=new Point(toPt.x,_4023.y);
}else{
if(_4024==toDir){
var pos=Math.min(_4023.x,toPt.x)-this.MINDIST;
point=new Point(pos,_4023.y);
}else{
point=new Point(_4023.x-(xDiff/2),_4023.y);
}
}
}
if(yDiff>0){
dir=UP;
}else{
dir=DOWN;
}
}
}else{
if(_4024==RIGHT){
if((xDiff<0)&&((yDiff*yDiff)<TOL)&&(toDir==LEFT)){
point=toPt;
dir=toDir;
}else{
if(xDiff>0){
point=new Point(_4023.x+this.MINDIST,_4023.y);
}else{
if(((yDiff>0)&&(toDir==DOWN))||((yDiff<0)&&(toDir==UP))){
point=new Point(toPt.x,_4023.y);
}else{
if(_4024==toDir){
var pos=Math.max(_4023.x,toPt.x)+this.MINDIST;
point=new Point(pos,_4023.y);
}else{
point=new Point(_4023.x-(xDiff/2),_4023.y);
}
}
}
if(yDiff>0){
dir=UP;
}else{
dir=DOWN;
}
}
}else{
if(_4024==DOWN){
if(((xDiff*xDiff)<TOL)&&(yDiff<0)&&(toDir==UP)){
point=toPt;
dir=toDir;
}else{
if(yDiff>0){
point=new Point(_4023.x,_4023.y+this.MINDIST);
}else{
if(((xDiff>0)&&(toDir==RIGHT))||((xDiff<0)&&(toDir==LEFT))){
point=new Point(_4023.x,toPt.y);
}else{
if(_4024==toDir){
var pos=Math.max(_4023.y,toPt.y)+this.MINDIST;
point=new Point(_4023.x,pos);
}else{
point=new Point(_4023.x,_4023.y-(yDiff/2));
}
}
}
if(xDiff>0){
dir=LEFT;
}else{
dir=RIGHT;
}
}
}else{
if(_4024==UP){
if(((xDiff*xDiff)<TOL)&&(yDiff>0)&&(toDir==DOWN)){
point=toPt;
dir=toDir;
}else{
if(yDiff<0){
point=new Point(_4023.x,_4023.y-this.MINDIST);
}else{
if(((xDiff>0)&&(toDir==RIGHT))||((xDiff<0)&&(toDir==LEFT))){
point=new Point(_4023.x,toPt.y);
}else{
if(_4024==toDir){
var pos=Math.min(_4023.y,toPt.y)-this.MINDIST;
point=new Point(_4023.x,pos);
}else{
point=new Point(_4023.x,_4023.y-(yDiff/2));
}
}
}
if(xDiff>0){
dir=LEFT;
}else{
dir=RIGHT;
}
}
}
}
}
}
this._route(conn,point,dir,toPt,toDir);
conn.addPoint(_4023);
};
BezierConnectionRouter=function(_3959){
if(!_3959){
this.cheapRouter=new ManhattanConnectionRouter();
}else{
this.cheapRouter=null;
}
this.iteration=5;
};
BezierConnectionRouter.prototype=new ConnectionRouter;
BezierConnectionRouter.prototype.type="BezierConnectionRouter";
BezierConnectionRouter.prototype.drawBezier=function(_395a,_395b,t,iter){
var n=_395a.length-1;
var q=new Array();
var _3960=n+1;
for(var i=0;i<_3960;i++){
q[i]=new Array();
q[i][0]=_395a[i];
}
for(var j=1;j<=n;j++){
for(var i=0;i<=(n-j);i++){
q[i][j]=new Point((1-t)*q[i][j-1].x+t*q[i+1][j-1].x,(1-t)*q[i][j-1].y+t*q[i+1][j-1].y);
}
}
var c1=new Array();
var c2=new Array();
for(var i=0;i<n+1;i++){
c1[i]=q[0][i];
c2[i]=q[i][n-i];
}
if(iter>=0){
this.drawBezier(c1,_395b,t,--iter);
this.drawBezier(c2,_395b,t,--iter);
}else{
for(var i=0;i<n;i++){
_395b.push(q[i][n-i]);
}
}
};
BezierConnectionRouter.prototype.route=function(conn){
if(this.cheapRouter!=null&&(conn.getSource().getParent().isMoving==true||conn.getTarget().getParent().isMoving==true)){
this.cheapRouter.route(conn);
return;
}
var _3966=new Array();
var _3967=conn.getStartPoint();
var toPt=conn.getEndPoint();
this._route(_3966,conn,toPt,this.getEndDirection(conn),_3967,this.getStartDirection(conn));
var _3969=new Array();
this.drawBezier(_3966,_3969,0.5,this.iteration);
for(var i=0;i<_3969.length;i++){
conn.addPoint(_3969[i]);
}
conn.addPoint(toPt);
};
BezierConnectionRouter.prototype._route=function(_396b,conn,_396d,_396e,toPt,toDir){
var TOL=0.1;
var _3972=0.01;
var _3973=90;
var UP=0;
var RIGHT=1;
var DOWN=2;
var LEFT=3;
var xDiff=_396d.x-toPt.x;
var yDiff=_396d.y-toPt.y;
var point;
var dir;
if(((xDiff*xDiff)<(_3972))&&((yDiff*yDiff)<(_3972))){
_396b.push(new Point(toPt.x,toPt.y));
return;
}
if(_396e==LEFT){
if((xDiff>0)&&((yDiff*yDiff)<TOL)&&(toDir==RIGHT)){
point=toPt;
dir=toDir;
}else{
if(xDiff<0){
point=new Point(_396d.x-_3973,_396d.y);
}else{
if(((yDiff>0)&&(toDir==DOWN))||((yDiff<0)&&(toDir==UP))){
point=new Point(toPt.x,_396d.y);
}else{
if(_396e==toDir){
var pos=Math.min(_396d.x,toPt.x)-_3973;
point=new Point(pos,_396d.y);
}else{
point=new Point(_396d.x-(xDiff/2),_396d.y);
}
}
}
if(yDiff>0){
dir=UP;
}else{
dir=DOWN;
}
}
}else{
if(_396e==RIGHT){
if((xDiff<0)&&((yDiff*yDiff)<TOL)&&(toDir==LEFT)){
point=toPt;
dir=toDir;
}else{
if(xDiff>0){
point=new Point(_396d.x+_3973,_396d.y);
}else{
if(((yDiff>0)&&(toDir==DOWN))||((yDiff<0)&&(toDir==UP))){
point=new Point(toPt.x,_396d.y);
}else{
if(_396e==toDir){
var pos=Math.max(_396d.x,toPt.x)+_3973;
point=new Point(pos,_396d.y);
}else{
point=new Point(_396d.x-(xDiff/2),_396d.y);
}
}
}
if(yDiff>0){
dir=UP;
}else{
dir=DOWN;
}
}
}else{
if(_396e==DOWN){
if(((xDiff*xDiff)<TOL)&&(yDiff<0)&&(toDir==UP)){
point=toPt;
dir=toDir;
}else{
if(yDiff>0){
point=new Point(_396d.x,_396d.y+_3973);
}else{
if(((xDiff>0)&&(toDir==RIGHT))||((xDiff<0)&&(toDir==LEFT))){
point=new Point(_396d.x,toPt.y);
}else{
if(_396e==toDir){
var pos=Math.max(_396d.y,toPt.y)+_3973;
point=new Point(_396d.x,pos);
}else{
point=new Point(_396d.x,_396d.y-(yDiff/2));
}
}
}
if(xDiff>0){
dir=LEFT;
}else{
dir=RIGHT;
}
}
}else{
if(_396e==UP){
if(((xDiff*xDiff)<TOL)&&(yDiff>0)&&(toDir==DOWN)){
point=toPt;
dir=toDir;
}else{
if(yDiff<0){
point=new Point(_396d.x,_396d.y-_3973);
}else{
if(((xDiff>0)&&(toDir==RIGHT))||((xDiff<0)&&(toDir==LEFT))){
point=new Point(_396d.x,toPt.y);
}else{
if(_396e==toDir){
var pos=Math.min(_396d.y,toPt.y)-_3973;
point=new Point(_396d.x,pos);
}else{
point=new Point(_396d.x,_396d.y-(yDiff/2));
}
}
}
if(xDiff>0){
dir=LEFT;
}else{
dir=RIGHT;
}
}
}
}
}
}
this._route(_396b,conn,point,dir,toPt,toDir);
_396b.push(_396d);
};
FanConnectionRouter=function(){
};
FanConnectionRouter.prototype=new NullConnectionRouter;
FanConnectionRouter.prototype.type="FanConnectionRouter";
FanConnectionRouter.prototype.route=function(conn){
var _46a1=conn.getStartPoint();
var toPt=conn.getEndPoint();
var lines=conn.getSource().getConnections();
var _46a4=new ArrayList();
var index=0;
for(var i=0;i<lines.getSize();i++){
var _46a7=lines.get(i);
if(_46a7.getTarget()==conn.getTarget()||_46a7.getSource()==conn.getTarget()){
_46a4.add(_46a7);
if(conn==_46a7){
index=_46a4.getSize();
}
}
}
if(_46a4.getSize()>1){
this.routeCollision(conn,index);
}else{
NullConnectionRouter.prototype.route.call(this,conn);
}
};
FanConnectionRouter.prototype.routeNormal=function(conn){
conn.addPoint(conn.getStartPoint());
conn.addPoint(conn.getEndPoint());
};
FanConnectionRouter.prototype.routeCollision=function(conn,index){
var start=conn.getStartPoint();
var end=conn.getEndPoint();
conn.addPoint(start);
var _46ad=10;
var _46ae=new Point((end.x+start.x)/2,(end.y+start.y)/2);
var _46af=end.getPosition(start);
var ray;
if(_46af==PositionConstants.SOUTH||_46af==PositionConstants.EAST){
ray=new Point(end.x-start.x,end.y-start.y);
}else{
ray=new Point(start.x-end.x,start.y-end.y);
}
var _46b1=Math.sqrt(ray.x*ray.x+ray.y*ray.y);
var _46b2=_46ad*ray.x/_46b1;
var _46b3=_46ad*ray.y/_46b1;
var _46b4;
if(index%2==0){
_46b4=new Point(_46ae.x+(index/2)*(-1*_46b3),_46ae.y+(index/2)*_46b2);
}else{
_46b4=new Point(_46ae.x+(index/2)*_46b3,_46ae.y+(index/2)*(-1*_46b2));
}
conn.addPoint(_46b4);
conn.addPoint(end);
};
Graphics=function(_3e8b,_3e8c,_3e8d){
this.jsGraphics=_3e8b;
this.xt=_3e8d.x;
this.yt=_3e8d.y;
this.radian=_3e8c*Math.PI/180;
this.sinRadian=Math.sin(this.radian);
this.cosRadian=Math.cos(this.radian);
};
Graphics.prototype.setStroke=function(x){
this.jsGraphics.setStroke(x);
};
Graphics.prototype.drawLine=function(x1,y1,x2,y2){
var _x1=this.xt+x1*this.cosRadian-y1*this.sinRadian;
var _y1=this.yt+x1*this.sinRadian+y1*this.cosRadian;
var _x2=this.xt+x2*this.cosRadian-y2*this.sinRadian;
var _y2=this.yt+x2*this.sinRadian+y2*this.cosRadian;
this.jsGraphics.drawLine(_x1,_y1,_x2,_y2);
};
Graphics.prototype.fillRect=function(x,y,w,h){
var x1=this.xt+x*this.cosRadian-y*this.sinRadian;
var y1=this.yt+x*this.sinRadian+y*this.cosRadian;
var x2=this.xt+(x+w)*this.cosRadian-y*this.sinRadian;
var y2=this.yt+(x+w)*this.sinRadian+y*this.cosRadian;
var x3=this.xt+(x+w)*this.cosRadian-(y+h)*this.sinRadian;
var y3=this.yt+(x+w)*this.sinRadian+(y+h)*this.cosRadian;
var x4=this.xt+x*this.cosRadian-(y+h)*this.sinRadian;
var y4=this.yt+x*this.sinRadian+(y+h)*this.cosRadian;
this.jsGraphics.fillPolygon([x1,x2,x3,x4],[y1,y2,y3,y4]);
};
Graphics.prototype.fillPolygon=function(_3ea3,_3ea4){
var rotX=new Array();
var rotY=new Array();
for(var i=0;i<_3ea3.length;i++){
rotX[i]=this.xt+_3ea3[i]*this.cosRadian-_3ea4[i]*this.sinRadian;
rotY[i]=this.yt+_3ea3[i]*this.sinRadian+_3ea4[i]*this.cosRadian;
}
this.jsGraphics.fillPolygon(rotX,rotY);
};
Graphics.prototype.setColor=function(color){
this.jsGraphics.setColor(color.getHTMLStyle());
};
Graphics.prototype.drawPolygon=function(_3ea9,_3eaa){
var rotX=new Array();
var rotY=new Array();
for(var i=0;i<_3ea9.length;i++){
rotX[i]=this.xt+_3ea9[i]*this.cosRadian-_3eaa[i]*this.sinRadian;
rotY[i]=this.yt+_3ea9[i]*this.sinRadian+_3eaa[i]*this.cosRadian;
}
this.jsGraphics.drawPolygon(rotX,rotY);
};
Connection=function(){
Line.call(this);
this.sourcePort=null;
this.targetPort=null;
this.sourceDecorator=null;
this.targetDecorator=null;
this.sourceAnchor=new ConnectionAnchor();
this.targetAnchor=new ConnectionAnchor();
this.router=Connection.defaultRouter;
this.lineSegments=new ArrayList();
this.children=new ArrayList();
this.setColor(new Color(0,0,115));
this.setLineWidth(1);
};
Connection.prototype=new Line;
Connection.prototype.type="Connection";
Connection.defaultRouter=new ManhattanConnectionRouter();
Connection.setDefaultRouter=function(_3210){
Connection.defaultRouter=_3210;
};
Connection.prototype.disconnect=function(){
if(this.sourcePort!=null){
this.sourcePort.detachMoveListener(this);
this.fireSourcePortRouteEvent();
}
if(this.targetPort!=null){
this.targetPort.detachMoveListener(this);
this.fireTargetPortRouteEvent();
}
};
Connection.prototype.reconnect=function(){
if(this.sourcePort!=null){
this.sourcePort.attachMoveListener(this);
this.fireSourcePortRouteEvent();
}
if(this.targetPort!=null){
this.targetPort.attachMoveListener(this);
this.fireTargetPortRouteEvent();
}
};
Connection.prototype.isResizeable=function(){
return true;
};
Connection.prototype.addFigure=function(_3211,_3212){
var entry=new Object();
entry.figure=_3211;
entry.locator=_3212;
this.children.add(entry);
if(this.graphics!=null){
this.paint();
}
var oThis=this;
var _3215=function(){
var _3216=arguments[0]||window.event;
_3216.returnValue=false;
oThis.getWorkflow().setCurrentSelection(oThis);
oThis.getWorkflow().showLineResizeHandles(oThis);
};
if(_3211.getHTMLElement().addEventListener){
_3211.getHTMLElement().addEventListener("mousedown",_3215,false);
}else{
if(this.html.attachEvent){
_3211.getHTMLElement().attachEvent("onmouseup",mouseUp);
}
}
};
Connection.prototype.setSourceDecorator=function(_3217){
this.sourceDecorator=_3217;
if(this.graphics!=null){
this.paint();
}
};
Connection.prototype.setTargetDecorator=function(_3218){
this.targetDecorator=_3218;
if(this.graphics!=null){
this.paint();
}
};
Connection.prototype.setSourceAnchor=function(_3219){
this.sourceAnchor=_3219;
this.sourceAnchor.setOwner(this.sourcePort);
if(this.graphics!=null){
this.paint();
}
};
Connection.prototype.setTargetAnchor=function(_321a){
this.targetAnchor=_321a;
this.targetAnchor.setOwner(this.targetPort);
if(this.graphics!=null){
this.paint();
}
};
Connection.prototype.setRouter=function(_321b){
if(_321b!=null){
this.router=_321b;
}else{
this.router=new NullConnectionRouter();
}
if(this.graphics!=null){
this.paint();
}
};
Connection.prototype.getRouter=function(){
return this.router;
};
Connection.prototype.setWorkflow=function(_321c){
Line.prototype.setWorkflow.call(this,_321c);
for(var i=0;i<this.children.getSize();i++){
this.children.get(i).isAppended=false;
}
};
Connection.prototype.paint=function(){
for(var i=0;i<this.children.getSize();i++){
var entry=this.children.get(i);
if(entry.isAppended==true){
this.html.removeChild(entry.figure.getHTMLElement());
}
entry.isAppended=false;
}
if(this.graphics==null){
this.graphics=new jsGraphics(this.id);
}else{
this.graphics.clear();
}
this.graphics.setStroke(this.stroke);
this.graphics.setColor(this.lineColor.getHTMLStyle());
this.startStroke();
this.router.route(this);
if(this.getSource().getParent().isMoving==false&&this.getTarget().getParent().isMoving==false){
if(this.targetDecorator!=null){
this.targetDecorator.paint(new Graphics(this.graphics,this.getEndAngle(),this.getEndPoint()));
}
if(this.sourceDecorator!=null){
this.sourceDecorator.paint(new Graphics(this.graphics,this.getStartAngle(),this.getStartPoint()));
}
}
this.finishStroke();
for(var i=0;i<this.children.getSize();i++){
var entry=this.children.get(i);
this.html.appendChild(entry.figure.getHTMLElement());
entry.isAppended=true;
entry.locator.relocate(entry.figure);
}
};
Connection.prototype.getStartPoint=function(){
if(this.isMoving==false){
return this.sourceAnchor.getLocation(this.targetAnchor.getReferencePoint());
}else{
return Line.prototype.getStartPoint.call(this);
}
};
Connection.prototype.getEndPoint=function(){
if(this.isMoving==false){
return this.targetAnchor.getLocation(this.sourceAnchor.getReferencePoint());
}else{
return Line.prototype.getEndPoint.call(this);
}
};
Connection.prototype.startStroke=function(){
this.oldPoint=null;
this.lineSegments=new ArrayList();
};
Connection.prototype.finishStroke=function(){
this.graphics.paint();
this.oldPoint=null;
};
Connection.prototype.getPoints=function(){
var _3220=new ArrayList();
var line;
for(var i=0;i<this.lineSegments.getSize();i++){
line=this.lineSegments.get(i);
_3220.add(line.start);
}
_3220.add(line.end);
return _3220;
};
Connection.prototype.addPoint=function(p){
p=new Point(parseInt(p.x),parseInt(p.y));
if(this.oldPoint!=null){
this.graphics.drawLine(this.oldPoint.x,this.oldPoint.y,p.x,p.y);
var line=new Object();
line.start=this.oldPoint;
line.end=p;
this.lineSegments.add(line);
}
this.oldPoint=new Object();
this.oldPoint.x=p.x;
this.oldPoint.y=p.y;
};
Connection.prototype.setSource=function(port){
if(this.sourcePort!=null){
this.sourcePort.detachMoveListener(this);
}
this.sourcePort=port;
if(this.sourcePort==null){
return;
}
this.sourceAnchor.setOwner(this.sourcePort);
this.fireSourcePortRouteEvent();
this.sourcePort.attachMoveListener(this);
this.setStartPoint(port.getAbsoluteX(),port.getAbsoluteY());
};
Connection.prototype.getSource=function(){
return this.sourcePort;
};
Connection.prototype.setTarget=function(port){
if(this.targetPort!=null){
this.targetPort.detachMoveListener(this);
}
this.targetPort=port;
if(this.targetPort==null){
return;
}
this.targetAnchor.setOwner(this.targetPort);
this.fireTargetPortRouteEvent();
this.targetPort.attachMoveListener(this);
this.setEndPoint(port.getAbsoluteX(),port.getAbsoluteY());
};
Connection.prototype.getTarget=function(){
return this.targetPort;
};
Connection.prototype.onOtherFigureMoved=function(_3227){
if(_3227==this.sourcePort){
this.setStartPoint(this.sourcePort.getAbsoluteX(),this.sourcePort.getAbsoluteY());
}else{
this.setEndPoint(this.targetPort.getAbsoluteX(),this.targetPort.getAbsoluteY());
}
};
Connection.prototype.containsPoint=function(px,py){
for(var i=0;i<this.lineSegments.getSize();i++){
var line=this.lineSegments.get(i);
if(Line.hit(this.corona,line.start.x,line.start.y,line.end.x,line.end.y,px,py)){
return true;
}
}
return false;
};
Connection.prototype.getStartAngle=function(){
var p1=this.lineSegments.get(0).start;
var p2=this.lineSegments.get(0).end;
if(this.router instanceof BezierConnectionRouter){
p2=this.lineSegments.get(5).end;
}
var _322e=Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
var angle=-(180/Math.PI)*Math.asin((p1.y-p2.y)/_322e);
if(angle<0){
if(p2.x<p1.x){
angle=Math.abs(angle)+180;
}else{
angle=360-Math.abs(angle);
}
}else{
if(p2.x<p1.x){
angle=180-angle;
}
}
return angle;
};
Connection.prototype.getEndAngle=function(){
var p1=this.lineSegments.get(this.lineSegments.getSize()-1).end;
var p2=this.lineSegments.get(this.lineSegments.getSize()-1).start;
if(this.router instanceof BezierConnectionRouter){
p2=this.lineSegments.get(this.lineSegments.getSize()-5).end;
}
var _3232=Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
var angle=-(180/Math.PI)*Math.asin((p1.y-p2.y)/_3232);
if(angle<0){
if(p2.x<p1.x){
angle=Math.abs(angle)+180;
}else{
angle=360-Math.abs(angle);
}
}else{
if(p2.x<p1.x){
angle=180-angle;
}
}
return angle;
};
Connection.prototype.fireSourcePortRouteEvent=function(){
var _3234=this.sourcePort.getConnections();
for(var i=0;i<_3234.getSize();i++){
_3234.get(i).paint();
}
};
Connection.prototype.fireTargetPortRouteEvent=function(){
var _3236=this.targetPort.getConnections();
for(var i=0;i<_3236.getSize();i++){
_3236.get(i).paint();
}
};
Connection.prototype.createCommand=function(_3238){
if(_3238.getPolicy()==EditPolicy.MOVE){
return new CommandReconnect(this);
}
if(_3238.getPolicy()==EditPolicy.DELETE){
if(this.isDeleteable()==true){
return new CommandDelete(this);
}
return null;
}
return null;
};
ConnectionAnchor=function(owner){
this.owner=owner;
};
ConnectionAnchor.prototype.type="ConnectionAnchor";
ConnectionAnchor.prototype.getLocation=function(_469c){
return this.getReferencePoint();
};
ConnectionAnchor.prototype.getOwner=function(){
return this.owner;
};
ConnectionAnchor.prototype.setOwner=function(owner){
this.owner=owner;
};
ConnectionAnchor.prototype.getBox=function(){
return this.getOwner().getAbsoluteBounds();
};
ConnectionAnchor.prototype.getReferencePoint=function(){
if(this.getOwner()==null){
return null;
}else{
return this.getOwner().getAbsolutePosition();
}
};
ChopboxConnectionAnchor=function(owner){
ConnectionAnchor.call(this,owner);
};
ChopboxConnectionAnchor.prototype=new ConnectionAnchor;
ChopboxConnectionAnchor.prototype.type="ChopboxConnectionAnchor";
ChopboxConnectionAnchor.prototype.getLocation=function(_3c5e){
var r=new Dimension();
r.setBounds(this.getBox());
r.translate(-1,-1);
r.resize(1,1);
var _3c60=r.x+r.w/2;
var _3c61=r.y+r.h/2;
if(r.isEmpty()||(_3c5e.x==_3c60&&_3c5e.y==_3c61)){
return new Point(_3c60,_3c61);
}
var dx=_3c5e.x-_3c60;
var dy=_3c5e.y-_3c61;
var scale=0.5/Math.max(Math.abs(dx)/r.w,Math.abs(dy)/r.h);
dx*=scale;
dy*=scale;
_3c60+=dx;
_3c61+=dy;
return new Point(Math.round(_3c60),Math.round(_3c61));
};
ChopboxConnectionAnchor.prototype.getBox=function(){
return this.getOwner().getParent().getBounds();
};
ChopboxConnectionAnchor.prototype.getReferencePoint=function(){
return this.getBox().getCenter();
};
ConnectionDecorator=function(){
this.color=new Color(0,0,0);
this.backgroundColor=new Color(250,250,250);
};
ConnectionDecorator.prototype.type="ConnectionDecorator";
ConnectionDecorator.prototype.paint=function(g){
};
ConnectionDecorator.prototype.setColor=function(c){
this.color=c;
};
ConnectionDecorator.prototype.setBackgroundColor=function(c){
this.backgroundColor=c;
};
ArrowConnectionDecorator=function(){
};
ArrowConnectionDecorator.prototype=new ConnectionDecorator;
ArrowConnectionDecorator.prototype.type="ArrowConnectionDecorator";
ArrowConnectionDecorator.prototype.paint=function(g){
if(this.backgroundColor!=null){
g.setColor(this.backgroundColor);
g.fillPolygon([3,20,20,3],[0,5,-5,0]);
}
g.setColor(this.color);
g.setStroke(1);
g.drawPolygon([3,20,20,3],[0,5,-5,0]);
};
CompartmentFigure=function(){
Node.call(this);
this.children=new ArrayList();
this.setBorder(new LineBorder(1));
this.dropable=new DropTarget(this.html);
this.dropable.node=this;
this.dropable.addEventListener("figureenter",function(_4632){
_4632.target.node.onFigureEnter(_4632.relatedTarget.node);
});
this.dropable.addEventListener("figureleave",function(_4633){
_4633.target.node.onFigureLeave(_4633.relatedTarget.node);
});
this.dropable.addEventListener("figuredrop",function(_4634){
_4634.target.node.onFigureDrop(_4634.relatedTarget.node);
});
};
CompartmentFigure.prototype=new Node;
CompartmentFigure.prototype.type="CompartmentFigure";
CompartmentFigure.prototype.onFigureEnter=function(_4635){
};
CompartmentFigure.prototype.onFigureLeave=function(_4636){
};
CompartmentFigure.prototype.onFigureDrop=function(_4637){
};
CompartmentFigure.prototype.getChildren=function(){
return this.children;
};
CompartmentFigure.prototype.addChild=function(_4638){
_4638.setZOrder(this.getZOrder()+1);
_4638.setParent(this);
this.children.add(_4638);
};
CompartmentFigure.prototype.removeChild=function(_4639){
_4639.setParent(null);
this.children.remove(_4639);
};
CompartmentFigure.prototype.setZOrder=function(index){
Node.prototype.setZOrder.call(this,index);
for(var i=0;i<this.children.getSize();i++){
this.children.get(i).setZOrder(index+1);
}
};
CompartmentFigure.prototype.setPosition=function(xPos,yPos){
var oldX=this.getX();
var oldY=this.getY();
Node.prototype.setPosition.call(this,xPos,yPos);
for(var i=0;i<this.children.getSize();i++){
var child=this.children.get(i);
child.setPosition(child.getX()+this.getX()-oldX,child.getY()+this.getY()-oldY);
}
};
CompartmentFigure.prototype.onDrag=function(){
var oldX=this.getX();
var oldY=this.getY();
Node.prototype.onDrag.call(this);
for(var i=0;i<this.children.getSize();i++){
var child=this.children.get(i);
child.setPosition(child.getX()+this.getX()-oldX,child.getY()+this.getY()-oldY);
}
};
CanvasDocument=function(_3208){
this.canvas=_3208;
};
CanvasDocument.prototype.type="CanvasDocument";
CanvasDocument.prototype.getFigures=function(){
var _3209=new ArrayList();
var _320a=this.canvas.figures;
var _320b=this.canvas.dialogs;
for(var i=0;i<_320a.getSize();i++){
var _320d=_320a.get(i);
if(_320b.indexOf(_320d)==-1&&_320d.getParent()==null&&!(_320d instanceof WindowFigure)){
_3209.add(_320d);
}
}
return _3209;
};
CanvasDocument.prototype.getFigure=function(id){
return this.canvas.getFigure(id);
};
CanvasDocument.prototype.getLines=function(){
return this.canvas.getLines();
};
CanvasDocument.prototype.getLine=function(id){
return this.canvas.getLine(id);
};
Annotation=function(msg){
this.msg=msg;
this.color=new Color(0,0,0);
this.bgColor=new Color(241,241,121);
this.fontSize=10;
this.textNode=null;
Figure.call(this);
};
Annotation.prototype=new Figure;
Annotation.prototype.type="Annotation";
Annotation.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
item.style.color=this.color.getHTMLStyle();
item.style.backgroundColor=this.bgColor.getHTMLStyle();
item.style.fontSize=this.fontSize+"pt";
item.style.width="auto";
item.style.height="auto";
item.style.margin="0px";
item.style.padding="0px";
item.onselectstart=function(){
return false;
};
item.unselectable="on";
item.style.cursor="default";
this.textNode=document.createTextNode(this.msg);
item.appendChild(this.textNode);
this.disableTextSelection(item);
return item;
};
Annotation.prototype.onDoubleClick=function(){
var _4673=new AnnotationDialog(this);
this.workflow.showDialog(_4673);
};
Annotation.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.bgColor!=null){
this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
}else{
this.html.style.backgroundColor="transparent";
}
};
Annotation.prototype.getBackgroundColor=function(){
return this.bgColor;
};
Annotation.prototype.setFontSize=function(size){
this.fontSize=size;
this.html.style.fontSize=this.fontSize+"pt";
};
Annotation.prototype.getText=function(){
return this.msg;
};
Annotation.prototype.setText=function(text){
this.msg=text;
this.html.removeChild(this.textNode);
this.textNode=document.createTextNode(this.msg);
this.html.appendChild(this.textNode);
};
Annotation.prototype.setStyledText=function(text){
this.msg=text;
this.html.removeChild(this.textNode);
this.textNode=document.createElement("div");
this.textNode.innerHTML=text;
this.html.appendChild(this.textNode);
};
ResizeHandle=function(_3113,type){
Rectangle.call(this,5,5);
this.type=type;
var _3115=this.getWidth();
var _3116=_3115/2;
switch(this.type){
case 1:
this.setSnapToGridAnchor(new Point(_3115,_3115));
break;
case 2:
this.setSnapToGridAnchor(new Point(_3116,_3115));
break;
case 3:
this.setSnapToGridAnchor(new Point(0,_3115));
break;
case 4:
this.setSnapToGridAnchor(new Point(0,_3116));
break;
case 5:
this.setSnapToGridAnchor(new Point(0,0));
break;
case 6:
this.setSnapToGridAnchor(new Point(_3116,0));
break;
case 7:
this.setSnapToGridAnchor(new Point(_3115,0));
break;
case 8:
this.setSnapToGridAnchor(new Point(_3115,_3116));
case 9:
this.setSnapToGridAnchor(new Point(_3116,_3116));
break;
}
this.setBackgroundColor(new Color(0,255,0));
this.setWorkflow(_3113);
this.setZOrder(10000);
};
ResizeHandle.prototype=new Rectangle;
ResizeHandle.prototype.type="ResizeHandle";
ResizeHandle.prototype.getSnapToDirection=function(){
switch(this.type){
case 1:
return SnapToHelper.NORTH_WEST;
case 2:
return SnapToHelper.NORTH;
case 3:
return SnapToHelper.NORTH_EAST;
case 4:
return SnapToHelper.EAST;
case 5:
return SnapToHelper.SOUTH_EAST;
case 6:
return SnapToHelper.SOUTH;
case 7:
return SnapToHelper.SOUTH_WEST;
case 8:
return SnapToHelper.WEST;
case 9:
return SnapToHelper.CENTER;
}
};
ResizeHandle.prototype.onDragend=function(){
var _3117=this.workflow.currentSelection;
if(this.commandMove!=null){
this.commandMove.setPosition(_3117.getX(),_3117.getY());
this.workflow.getCommandStack().execute(this.commandMove);
this.commandMove=null;
}
if(this.commandResize!=null){
this.commandResize.setDimension(_3117.getWidth(),_3117.getHeight());
this.workflow.getCommandStack().execute(this.commandResize);
this.commandResize=null;
}
this.workflow.hideSnapToHelperLines();
};
ResizeHandle.prototype.setPosition=function(xPos,yPos){
this.x=xPos;
this.y=yPos;
this.html.style.left=this.x+"px";
this.html.style.top=this.y+"px";
};
ResizeHandle.prototype.onDragstart=function(x,y){
if(!this.canDrag){
return false;
}
var _311c=this.workflow.currentSelection;
this.commandMove=_311c.createCommand(new EditPolicy(EditPolicy.MOVE));
this.commandResize=_311c.createCommand(new EditPolicy(EditPolicy.RESIZE));
return true;
};
ResizeHandle.prototype.onDrag=function(){
var oldX=this.getX();
var oldY=this.getY();
Rectangle.prototype.onDrag.call(this);
var diffX=oldX-this.getX();
var diffY=oldY-this.getY();
var _3121=this.workflow.currentSelection.getX();
var _3122=this.workflow.currentSelection.getY();
var _3123=this.workflow.currentSelection.getWidth();
var _3124=this.workflow.currentSelection.getHeight();
switch(this.type){
case 1:
this.workflow.currentSelection.setPosition(_3121-diffX,_3122-diffY);
this.workflow.currentSelection.setDimension(_3123+diffX,_3124+diffY);
break;
case 2:
this.workflow.currentSelection.setPosition(_3121,_3122-diffY);
this.workflow.currentSelection.setDimension(_3123,_3124+diffY);
break;
case 3:
this.workflow.currentSelection.setPosition(_3121,_3122-diffY);
this.workflow.currentSelection.setDimension(_3123-diffX,_3124+diffY);
break;
case 4:
this.workflow.currentSelection.setPosition(_3121,_3122);
this.workflow.currentSelection.setDimension(_3123-diffX,_3124);
break;
case 5:
this.workflow.currentSelection.setPosition(_3121,_3122);
this.workflow.currentSelection.setDimension(_3123-diffX,_3124-diffY);
break;
case 6:
this.workflow.currentSelection.setPosition(_3121,_3122);
this.workflow.currentSelection.setDimension(_3123,_3124-diffY);
break;
case 7:
this.workflow.currentSelection.setPosition(_3121-diffX,_3122);
this.workflow.currentSelection.setDimension(_3123+diffX,_3124-diffY);
break;
case 8:
this.workflow.currentSelection.setPosition(_3121-diffX,_3122);
this.workflow.currentSelection.setDimension(_3123+diffX,_3124);
break;
}
this.workflow.moveResizeHandles(this.workflow.getCurrentSelection());
};
ResizeHandle.prototype.setCanDrag=function(flag){
Rectangle.prototype.setCanDrag.call(this,flag);
if(!flag){
this.html.style.cursor="";
return;
}
switch(this.type){
case 1:
this.html.style.cursor="nw-resize";
break;
case 2:
this.html.style.cursor="s-resize";
break;
case 3:
this.html.style.cursor="ne-resize";
break;
case 4:
this.html.style.cursor="w-resize";
break;
case 5:
this.html.style.cursor="se-resize";
break;
case 6:
this.html.style.cursor="n-resize";
break;
case 7:
this.html.style.cursor="sw-resize";
break;
case 8:
this.html.style.cursor="e-resize";
break;
case 9:
this.html.style.cursor="resize";
break;
}
};
ResizeHandle.prototype.onKeyDown=function(_3126,ctrl){
this.workflow.onKeyDown(_3126,ctrl);
};
ResizeHandle.prototype.fireMoveEvent=function(){
};
LineStartResizeHandle=function(_46d3){
ResizeHandle.call(this,_46d3,9);
this.setDimension(10,10);
this.setBackgroundColor(new Color(100,255,0));
this.setZOrder(10000);
};
LineStartResizeHandle.prototype=new ResizeHandle;
LineStartResizeHandle.prototype.type="LineStartResizeHandle";
LineStartResizeHandle.prototype.onDragend=function(){
if(this.workflow.currentSelection instanceof Connection){
if(this.command!=null){
this.command.cancel();
}
}else{
if(this.command!=null){
this.getWorkflow().getCommandStack().execute(this.command);
}
}
this.command=null;
};
LineStartResizeHandle.prototype.onDragstart=function(x,y){
if(!this.canDrag){
return false;
}
this.command=this.workflow.currentSelection.createCommand(new EditPolicy(EditPolicy.MOVE));
return true;
};
LineStartResizeHandle.prototype.onDrag=function(){
var oldX=this.getX();
var oldY=this.getY();
Rectangle.prototype.onDrag.call(this);
var diffX=oldX-this.getX();
var diffY=oldY-this.getY();
var _46da=this.workflow.currentSelection.getStartPoint();
var line=this.workflow.currentSelection;
line.setStartPoint(_46da.x-diffX,_46da.y-diffY);
line.isMoving=true;
};
LineStartResizeHandle.prototype.onDrop=function(_46dc){
var line=this.workflow.currentSelection;
line.isMoving=false;
if(line instanceof Connection){
this.command.setNewPorts(_46dc,line.getTarget());
this.getWorkflow().getCommandStack().execute(this.command);
}
this.command=null;
};
LineEndResizeHandle=function(_44d8){
ResizeHandle.call(this,_44d8,9);
this.setDimension(10,10);
this.setBackgroundColor(new Color(0,255,0));
this.setZOrder(10000);
};
LineEndResizeHandle.prototype=new ResizeHandle;
LineEndResizeHandle.prototype.type="LineEndResizeHandle";
LineEndResizeHandle.prototype.onDragend=function(){
if(this.workflow.currentSelection instanceof Connection){
if(this.command!=null){
this.command.cancel();
}
}else{
if(this.command!=null){
this.workflow.getCommandStack().execute(this.command);
}
}
this.command=null;
};
LineEndResizeHandle.prototype.onDragstart=function(x,y){
if(!this.canDrag){
return false;
}
this.command=this.workflow.currentSelection.createCommand(new EditPolicy(EditPolicy.MOVE));
return true;
};
LineEndResizeHandle.prototype.onDrag=function(){
var oldX=this.getX();
var oldY=this.getY();
Rectangle.prototype.onDrag.call(this);
var diffX=oldX-this.getX();
var diffY=oldY-this.getY();
var _44df=this.workflow.currentSelection.getEndPoint();
var line=this.workflow.currentSelection;
line.setEndPoint(_44df.x-diffX,_44df.y-diffY);
line.isMoving=true;
};
LineEndResizeHandle.prototype.onDrop=function(_44e1){
var line=this.workflow.currentSelection;
line.isMoving=false;
if(line instanceof Connection){
this.command.setNewPorts(line.getSource(),_44e1);
this.getWorkflow().getCommandStack().execute(this.command);
}
this.command=null;
};
Canvas=function(_42cf){
if(_42cf){
this.construct(_42cf);
}
this.enableSmoothFigureHandling=false;
this.canvasLines=new ArrayList();
};
Canvas.prototype.type="Canvas";
Canvas.prototype.construct=function(_42d0){
this.canvasId=_42d0;
this.html=document.getElementById(this.canvasId);
this.scrollArea=document.body.parentNode;
};
Canvas.prototype.setViewPort=function(divId){
this.scrollArea=document.getElementById(divId);
};
Canvas.prototype.addFigure=function(_42d2,xPos,yPos,_42d5){
if(this.enableSmoothFigureHandling==true){
if(_42d2.timer<=0){
_42d2.setAlpha(0.001);
}
var _42d6=_42d2;
var _42d7=function(){
if(_42d6.alpha<1){
_42d6.setAlpha(Math.min(1,_42d6.alpha+0.05));
}else{
window.clearInterval(_42d6.timer);
_42d6.timer=-1;
}
};
if(_42d6.timer>0){
window.clearInterval(_42d6.timer);
}
_42d6.timer=window.setInterval(_42d7,30);
}
_42d2.setCanvas(this);
if(xPos&&yPos){
_42d2.setPosition(xPos,yPos);
}
if(_42d2 instanceof Line){
this.canvasLines.add(_42d2);
this.html.appendChild(_42d2.getHTMLElement());
}else{
var obj=this.canvasLines.getFirstElement();
if(obj==null){
this.html.appendChild(_42d2.getHTMLElement());
}else{
this.html.insertBefore(_42d2.getHTMLElement(),obj.getHTMLElement());
}
}
if(!_42d5){
_42d2.paint();
}
};
Canvas.prototype.removeFigure=function(_42d9){
if(this.enableSmoothFigureHandling==true){
var oThis=this;
var _42db=_42d9;
var _42dc=function(){
if(_42db.alpha>0){
_42db.setAlpha(Math.max(0,_42db.alpha-0.05));
}else{
window.clearInterval(_42db.timer);
_42db.timer=-1;
oThis.html.removeChild(_42db.html);
_42db.setCanvas(null);
}
};
if(_42db.timer>0){
window.clearInterval(_42db.timer);
}
_42db.timer=window.setInterval(_42dc,20);
}else{
this.html.removeChild(_42d9.html);
_42d9.setCanvas(null);
}
if(_42d9 instanceof Line){
this.canvasLines.remove(_42d9);
}
};
Canvas.prototype.getEnableSmoothFigureHandling=function(){
return this.enableSmoothFigureHandling;
};
Canvas.prototype.setEnableSmoothFigureHandling=function(flag){
this.enableSmoothFigureHandling=flag;
};
Canvas.prototype.getWidth=function(){
return parseInt(this.html.style.width);
};
Canvas.prototype.getHeight=function(){
return parseInt(this.html.style.height);
};
Canvas.prototype.setBackgroundImage=function(_42de,_42df){
if(_42de!=null){
if(_42df){
this.html.style.background="transparent url("+_42de+") ";
}else{
this.html.style.background="transparent url("+_42de+") no-repeat";
}
}else{
this.html.style.background="transparent";
}
};
Canvas.prototype.getY=function(){
return this.y;
};
Canvas.prototype.getX=function(){
return this.x;
};
Canvas.prototype.getAbsoluteY=function(){
var el=this.html;
var ot=el.offsetTop;
while((el=el.offsetParent)!=null){
ot+=el.offsetTop;
}
return ot;
};
Canvas.prototype.getAbsoluteX=function(){
var el=this.html;
var ol=el.offsetLeft;
while((el=el.offsetParent)!=null){
ol+=el.offsetLeft;
}
return ol;
};
Canvas.prototype.getScrollLeft=function(){
return this.scrollArea.scrollLeft;
};
Canvas.prototype.getScrollTop=function(){
return this.scrollArea.scrollTop;
};
Workflow=function(id){
if(!id){
return;
}
this.gridWidthX=10;
this.gridWidthY=10;
this.snapToGridHelper=null;
this.verticalSnapToHelperLine=null;
this.horizontalSnapToHelperLine=null;
this.figures=new ArrayList();
this.lines=new ArrayList();
this.commonPorts=new ArrayList();
this.dropTargets=new ArrayList();
this.compartments=new ArrayList();
this.selectionListeners=new ArrayList();
this.dialogs=new ArrayList();
this.toolPalette=null;
this.dragging=false;
this.tooltip=null;
this.draggingLine=null;
this.draggingLineCommand=null;
this.commandStack=new CommandStack();
this.oldScrollPosLeft=0;
this.oldScrollPosTop=0;
this.currentSelection=null;
this.currentMenu=null;
this.connectionLine=new Line();
this.resizeHandleStart=new LineStartResizeHandle(this);
this.resizeHandleEnd=new LineEndResizeHandle(this);
this.resizeHandle1=new ResizeHandle(this,1);
this.resizeHandle2=new ResizeHandle(this,2);
this.resizeHandle3=new ResizeHandle(this,3);
this.resizeHandle4=new ResizeHandle(this,4);
this.resizeHandle5=new ResizeHandle(this,5);
this.resizeHandle6=new ResizeHandle(this,6);
this.resizeHandle7=new ResizeHandle(this,7);
this.resizeHandle8=new ResizeHandle(this,8);
this.resizeHandleHalfWidth=parseInt(this.resizeHandle2.getWidth()/2);
Canvas.call(this,id);
this.setPanning(false);
if(this.html!=null){
this.html.style.backgroundImage="url(grid_10.png)";
oThis=this;
this.html.tabIndex="0";
var _46e3=function(){
var _46e4=arguments[0]||window.event;
var diffX=_46e4.clientX;
var diffY=_46e4.clientY;
var _46e7=oThis.getScrollLeft();
var _46e8=oThis.getScrollTop();
var _46e9=oThis.getAbsoluteX();
var _46ea=oThis.getAbsoluteY();
if(oThis.getBestFigure(diffX+_46e7-_46e9,diffY+_46e8-_46ea)!=null){
return;
}
var line=oThis.getBestLine(diffX+_46e7-_46e9,diffY+_46e8-_46ea,null);
if(line!=null){
line.onContextMenu(diffX+_46e7-_46e9,diffY+_46e8-_46ea);
}else{
oThis.onContextMenu(diffX+_46e7-_46e9,diffY+_46e8-_46ea);
}
};
this.html.oncontextmenu=function(){
return false;
};
var oThis=this;
var _46ed=function(event){
var ctrl=event.ctrlKey;
oThis.onKeyDown(event.keyCode,ctrl);
};
var _46f0=function(){
var _46f1=arguments[0]||window.event;
if(_46f1.returnValue==false){
return;
}
var diffX=_46f1.clientX;
var diffY=_46f1.clientY;
var _46f4=oThis.getScrollLeft();
var _46f5=oThis.getScrollTop();
var _46f6=oThis.getAbsoluteX();
var _46f7=oThis.getAbsoluteY();
oThis.onMouseDown(diffX+_46f4-_46f6,diffY+_46f5-_46f7);
};
var _46f8=function(){
var _46f9=arguments[0]||window.event;
if(oThis.currentMenu!=null){
oThis.removeFigure(oThis.currentMenu);
oThis.currentMenu=null;
}
if(_46f9.button==2){
return;
}
var diffX=_46f9.clientX;
var diffY=_46f9.clientY;
var _46fc=oThis.getScrollLeft();
var _46fd=oThis.getScrollTop();
var _46fe=oThis.getAbsoluteX();
var _46ff=oThis.getAbsoluteY();
oThis.onMouseUp(diffX+_46fc-_46fe,diffY+_46fd-_46ff);
};
var _4700=function(){
var _4701=arguments[0]||window.event;
var diffX=_4701.clientX;
var diffY=_4701.clientY;
var _4704=oThis.getScrollLeft();
var _4705=oThis.getScrollTop();
var _4706=oThis.getAbsoluteX();
var _4707=oThis.getAbsoluteY();
oThis.currentMouseX=diffX+_4704-_4706;
oThis.currentMouseY=diffY+_4705-_4707;
var obj=oThis.getBestFigure(oThis.currentMouseX,oThis.currentMouseY);
if(Drag.currentHover!=null&&obj==null){
var _4709=new DragDropEvent();
_4709.initDragDropEvent("mouseleave",false,oThis);
Drag.currentHover.dispatchEvent(_4709);
}else{
var diffX=_4701.clientX;
var diffY=_4701.clientY;
var _4704=oThis.getScrollLeft();
var _4705=oThis.getScrollTop();
var _4706=oThis.getAbsoluteX();
var _4707=oThis.getAbsoluteY();
oThis.onMouseMove(diffX+_4704-_4706,diffY+_4705-_4707);
}
if(obj==null){
Drag.currentHover=null;
}
if(oThis.tooltip!=null){
if(Math.abs(oThis.currentTooltipX-oThis.currentMouseX)>10||Math.abs(oThis.currentTooltipY-oThis.currentMouseY)>10){
oThis.showTooltip(null);
}
}
};
var _470a=function(_470b){
var _470b=arguments[0]||window.event;
var diffX=_470b.clientX;
var diffY=_470b.clientY;
var _470e=oThis.getScrollLeft();
var _470f=oThis.getScrollTop();
var _4710=oThis.getAbsoluteX();
var _4711=oThis.getAbsoluteY();
var line=oThis.getBestLine(diffX+_470e-_4710,diffY+_470f-_4711,null);
if(line!=null){
line.onDoubleClick();
}
};
if(this.html.addEventListener){
this.html.addEventListener("contextmenu",_46e3,false);
this.html.addEventListener("mousemove",_4700,false);
this.html.addEventListener("mouseup",_46f8,false);
this.html.addEventListener("mousedown",_46f0,false);
this.html.addEventListener("keydown",_46ed,false);
this.html.addEventListener("dblclick",_470a,false);
}else{
if(this.html.attachEvent){
this.html.attachEvent("oncontextmenu",_46e3);
this.html.attachEvent("onmousemove",_4700);
this.html.attachEvent("onmousedown",_46f0);
this.html.attachEvent("onmouseup",_46f8);
this.html.attachEvent("onkeydown",_46ed);
this.html.attachEvent("ondblclick",_470a);
}else{
throw new Error("Open-jACOB Draw2D not supported in this browser.");
}
}
}
};
Workflow.prototype=new Canvas;
Workflow.prototype.type="Workflow";
Workflow.COLOR_GREEN=new Color(0,255,0);
Workflow.prototype.clear=function(){
this.scrollTo(0,0,true);
this.gridWidthX=10;
this.gridWidthY=10;
this.snapToGridHelper=null;
this.verticalSnapToHelperLine=null;
this.horizontalSnapToHelperLine=null;
var _4713=this.getDocument();
var _4714=_4713.getLines().clone();
for(var i=0;i<_4714.getSize();i++){
new CommandDelete(_4714.get(i)).execute();
}
var _4716=_4713.getFigures().clone();
for(var i=0;i<_4716.getSize();i++){
new CommandDelete(_4716.get(i)).execute();
}
this.commonPorts.removeAllElements();
this.dropTargets.removeAllElements();
this.compartments.removeAllElements();
this.selectionListeners.removeAllElements();
this.dialogs.removeAllElements();
this.commandStack=new CommandStack();
this.currentSelection=null;
this.currentMenu=null;
Drag.clearCurrent();
};
Workflow.prototype.onScroll=function(){
var _4717=this.getScrollLeft();
var _4718=this.getScrollTop();
var _4719=_4717-this.oldScrollPosLeft;
var _471a=_4718-this.oldScrollPosTop;
for(var i=0;i<this.figures.getSize();i++){
var _471c=this.figures.get(i);
if(_471c.hasFixedPosition&&_471c.hasFixedPosition()==true){
_471c.setPosition(_471c.getX()+_4719,_471c.getY()+_471a);
}
}
this.oldScrollPosLeft=_4717;
this.oldScrollPosTop=_4718;
};
Workflow.prototype.setPanning=function(flag){
this.panning=flag;
if(flag){
this.html.style.cursor="move";
}else{
this.html.style.cursor="default";
}
};
Workflow.prototype.scrollTo=function(x,y,fast){
if(fast){
this.scrollArea.scrollLeft=x;
this.scrollArea.scrollTop=y;
}else{
var steps=40;
var xStep=(x-this.getScrollLeft())/steps;
var yStep=(y-this.getScrollTop())/steps;
var oldX=this.getScrollLeft();
var oldY=this.getScrollTop();
for(var i=0;i<steps;i++){
this.scrollArea.scrollLeft=oldX+(xStep*i);
this.scrollArea.scrollTop=oldY+(yStep*i);
}
}
};
Workflow.prototype.showTooltip=function(_4727,_4728){
if(this.tooltip!=null){
this.removeFigure(this.tooltip);
this.tooltip=null;
if(this.tooltipTimer>=0){
window.clearTimeout(this.tooltipTimer);
this.tooltipTimer=-1;
}
}
this.tooltip=_4727;
if(this.tooltip!=null){
this.currentTooltipX=this.currentMouseX;
this.currentTooltipY=this.currentMouseY;
this.addFigure(this.tooltip,this.currentTooltipX+10,this.currentTooltipY+10);
var oThis=this;
var _472a=function(){
oThis.tooltipTimer=-1;
oThis.showTooltip(null);
};
if(_4728==true){
this.tooltipTimer=window.setTimeout(_472a,5000);
}
}
};
Workflow.prototype.showDialog=function(_472b,xPos,yPos){
if(xPos){
this.addFigure(_472b,xPos,yPos);
}else{
this.addFigure(_472b,200,100);
}
this.dialogs.add(_472b);
};
Workflow.prototype.showMenu=function(menu,xPos,yPos){
if(this.menu!=null){
this.html.removeChild(this.menu.getHTMLElement());
this.menu.setWorkflow();
}
this.menu=menu;
if(this.menu!=null){
this.menu.setWorkflow(this);
this.menu.setPosition(xPos,yPos);
this.html.appendChild(this.menu.getHTMLElement());
this.menu.paint();
}
};
Workflow.prototype.onContextMenu=function(x,y){
var menu=this.getContextMenu();
if(menu!=null){
this.showMenu(menu,x,y);
}
};
Workflow.prototype.getContextMenu=function(){
return null;
};
Workflow.prototype.setToolWindow=function(_4734,x,y){
this.toolPalette=_4734;
if(y){
this.addFigure(_4734,x,y);
}else{
this.addFigure(_4734,20,20);
}
this.dialogs.add(_4734);
};
Workflow.prototype.setSnapToGrid=function(flag){
if(flag){
this.snapToGridHelper=new SnapToGrid(this);
}else{
this.snapToGridHelper=null;
}
};
Workflow.prototype.setSnapToGeometry=function(flag){
if(flag){
this.snapToGeometryHelper=new SnapToGeometry(this);
}else{
this.snapToGeometryHelper=null;
}
};
Workflow.prototype.setGridWidth=function(dx,dy){
this.gridWidthX=dx;
this.gridWidthY=dy;
};
Workflow.prototype.addFigure=function(_473b,xPos,yPos){
Canvas.prototype.addFigure.call(this,_473b,xPos,yPos,true);
_473b.setWorkflow(this);
var _473e=this;
if(_473b instanceof CompartmentFigure){
this.compartments.add(_473b);
}
if(_473b instanceof Line){
this.lines.add(_473b);
}else{
this.figures.add(_473b);
_473b.draggable.addEventListener("drag",function(_473f){
var _4740=_473e.getFigure(_473f.target.element.id);
if(_4740==null){
return;
}
if(_4740.isSelectable()==false){
return;
}
_473e.moveResizeHandles(_4740);
});
}
_473b.paint();
this.setDocumentDirty();
};
Workflow.prototype.removeFigure=function(_4741){
Canvas.prototype.removeFigure.call(this,_4741);
this.figures.remove(_4741);
this.lines.remove(_4741);
this.dialogs.remove(_4741);
_4741.setWorkflow(null);
if(_4741 instanceof CompartmentFigure){
this.compartments.remove(_4741);
}
if(_4741 instanceof Connection){
_4741.disconnect();
}
if(this.currentSelection==_4741){
this.setCurrentSelection(null);
}
this.setDocumentDirty();
};
Workflow.prototype.moveFront=function(_4742){
this.html.removeChild(_4742.getHTMLElement());
this.html.appendChild(_4742.getHTMLElement());
};
Workflow.prototype.moveBack=function(_4743){
this.html.removeChild(_4743.getHTMLElement());
this.html.insertBefore(_4743.getHTMLElement(),this.html.firstChild);
};
Workflow.prototype.getBestCompartmentFigure=function(x,y,_4746){
var _4747=null;
for(var i=0;i<this.figures.getSize();i++){
var _4749=this.figures.get(i);
if((_4749 instanceof CompartmentFigure)&&_4749.isOver(x,y)==true&&_4749!=_4746){
if(_4747==null){
_4747=_4749;
}else{
if(_4747.getZOrder()<_4749.getZOrder()){
_4747=_4749;
}
}
}
}
return _4747;
};
Workflow.prototype.getBestFigure=function(x,y,_474c){
var _474d=null;
for(var i=0;i<this.figures.getSize();i++){
var _474f=this.figures.get(i);
if(_474f.isOver(x,y)==true&&_474f!=_474c){
if(_474d==null){
_474d=_474f;
}else{
if(_474d.getZOrder()<_474f.getZOrder()){
_474d=_474f;
}
}
}
}
return _474d;
};
Workflow.prototype.getBestLine=function(x,y,_4752){
var _4753=null;
var count=this.lines.getSize();
for(var i=0;i<count;i++){
var line=this.lines.get(i);
if(line.containsPoint(x,y)==true&&line!=_4752){
if(_4753==null){
_4753=line;
}else{
if(_4753.getZOrder()<line.getZOrder()){
_4753=line;
}
}
}
}
return _4753;
};
Workflow.prototype.getFigure=function(id){
for(var i=0;i<this.figures.getSize();i++){
var _4759=this.figures.get(i);
if(_4759.id==id){
return _4759;
}
}
return null;
};
Workflow.prototype.getFigures=function(){
return this.figures;
};
Workflow.prototype.getDocument=function(){
return new CanvasDocument(this);
};
Workflow.prototype.addSelectionListener=function(w){
if(w!=null){
this.selectionListeners.add(w);
}
};
Workflow.prototype.removeSelectionListener=function(w){
this.selectionListeners.remove(w);
};
Workflow.prototype.setCurrentSelection=function(_475c){
if(_475c==null){
this.hideResizeHandles();
this.hideLineResizeHandles();
}
this.currentSelection=_475c;
for(var i=0;i<this.selectionListeners.getSize();i++){
var w=this.selectionListeners.get(i);
if(w.onSelectionChanged){
w.onSelectionChanged(this.currentSelection);
}
}
};
Workflow.prototype.getCurrentSelection=function(){
return this.currentSelection;
};
Workflow.prototype.getLine=function(id){
var count=this.lines.getSize();
for(var i=0;i<count;i++){
var line=this.lines.get(i);
if(line.getId()==id){
return line;
}
}
return null;
};
Workflow.prototype.getLines=function(){
return this.lines;
};
Workflow.prototype.registerPort=function(port){
port.draggable.targets=this.dropTargets;
this.commonPorts.add(port);
this.dropTargets.add(port.dropable);
};
Workflow.prototype.unregisterPort=function(port){
port.draggable.targets=null;
this.commonPorts.remove(port);
this.dropTargets.remove(port.dropable);
};
Workflow.prototype.getCommandStack=function(){
return this.commandStack;
};
Workflow.prototype.showConnectionLine=function(x1,y1,x2,y2){
this.connectionLine.setStartPoint(x1,y1);
this.connectionLine.setEndPoint(x2,y2);
if(this.connectionLine.canvas==null){
Canvas.prototype.addFigure.call(this,this.connectionLine);
}
};
Workflow.prototype.hideConnectionLine=function(){
if(this.connectionLine.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.connectionLine);
}
};
Workflow.prototype.showLineResizeHandles=function(_4769){
var _476a=this.resizeHandleStart.getWidth()/2;
var _476b=this.resizeHandleStart.getHeight()/2;
var _476c=_4769.getStartPoint();
var _476d=_4769.getEndPoint();
Canvas.prototype.addFigure.call(this,this.resizeHandleStart,_476c.x-_476a,_476c.y-_476a);
Canvas.prototype.addFigure.call(this,this.resizeHandleEnd,_476d.x-_476a,_476d.y-_476a);
this.resizeHandleStart.setCanDrag(_4769.isResizeable());
this.resizeHandleEnd.setCanDrag(_4769.isResizeable());
if(_4769.isResizeable()){
this.resizeHandleStart.setBackgroundColor(Workflow.COLOR_GREEN);
this.resizeHandleEnd.setBackgroundColor(Workflow.COLOR_GREEN);
this.resizeHandleStart.draggable.targets=this.dropTargets;
this.resizeHandleEnd.draggable.targets=this.dropTargets;
}else{
this.resizeHandleStart.setBackgroundColor(null);
this.resizeHandleEnd.setBackgroundColor(null);
}
};
Workflow.prototype.hideLineResizeHandles=function(){
if(this.resizeHandleStart.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandleStart);
}
if(this.resizeHandleEnd.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandleEnd);
}
};
Workflow.prototype.showResizeHandles=function(_476e){
this.hideLineResizeHandles();
this.hideResizeHandles();
if(this.getEnableSmoothFigureHandling()==true&&this.getCurrentSelection()!=_476e){
this.resizeHandle1.setAlpha(0.01);
this.resizeHandle2.setAlpha(0.01);
this.resizeHandle3.setAlpha(0.01);
this.resizeHandle4.setAlpha(0.01);
this.resizeHandle5.setAlpha(0.01);
this.resizeHandle6.setAlpha(0.01);
this.resizeHandle7.setAlpha(0.01);
this.resizeHandle8.setAlpha(0.01);
}
var _476f=this.resizeHandle1.getWidth();
var _4770=this.resizeHandle1.getHeight();
var _4771=_476e.getHeight();
var _4772=_476e.getWidth();
var xPos=_476e.getX();
var yPos=_476e.getY();
Canvas.prototype.addFigure.call(this,this.resizeHandle1,xPos-_476f,yPos-_4770);
Canvas.prototype.addFigure.call(this,this.resizeHandle3,xPos+_4772,yPos-_4770);
Canvas.prototype.addFigure.call(this,this.resizeHandle5,xPos+_4772,yPos+_4771);
Canvas.prototype.addFigure.call(this,this.resizeHandle7,xPos-_476f,yPos+_4771);
this.moveFront(this.resizeHandle1);
this.moveFront(this.resizeHandle3);
this.moveFront(this.resizeHandle5);
this.moveFront(this.resizeHandle7);
this.resizeHandle1.setCanDrag(_476e.isResizeable());
this.resizeHandle3.setCanDrag(_476e.isResizeable());
this.resizeHandle5.setCanDrag(_476e.isResizeable());
this.resizeHandle7.setCanDrag(_476e.isResizeable());
if(_476e.isResizeable()){
var green=new Color(0,255,0);
this.resizeHandle1.setBackgroundColor(green);
this.resizeHandle3.setBackgroundColor(green);
this.resizeHandle5.setBackgroundColor(green);
this.resizeHandle7.setBackgroundColor(green);
}else{
this.resizeHandle1.setBackgroundColor(null);
this.resizeHandle3.setBackgroundColor(null);
this.resizeHandle5.setBackgroundColor(null);
this.resizeHandle7.setBackgroundColor(null);
}
if(_476e.isStrechable()&&_476e.isResizeable()){
this.resizeHandle2.setCanDrag(_476e.isResizeable());
this.resizeHandle4.setCanDrag(_476e.isResizeable());
this.resizeHandle6.setCanDrag(_476e.isResizeable());
this.resizeHandle8.setCanDrag(_476e.isResizeable());
Canvas.prototype.addFigure.call(this,this.resizeHandle2,xPos+(_4772/2)-this.resizeHandleHalfWidth,yPos-_4770);
Canvas.prototype.addFigure.call(this,this.resizeHandle4,xPos+_4772,yPos+(_4771/2)-(_4770/2));
Canvas.prototype.addFigure.call(this,this.resizeHandle6,xPos+(_4772/2)-this.resizeHandleHalfWidth,yPos+_4771);
Canvas.prototype.addFigure.call(this,this.resizeHandle8,xPos-_476f,yPos+(_4771/2)-(_4770/2));
this.moveFront(this.resizeHandle2);
this.moveFront(this.resizeHandle4);
this.moveFront(this.resizeHandle6);
this.moveFront(this.resizeHandle8);
}
};
Workflow.prototype.hideResizeHandles=function(){
if(this.resizeHandle1.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle1);
}
if(this.resizeHandle2.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle2);
}
if(this.resizeHandle3.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle3);
}
if(this.resizeHandle4.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle4);
}
if(this.resizeHandle5.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle5);
}
if(this.resizeHandle6.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle6);
}
if(this.resizeHandle7.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle7);
}
if(this.resizeHandle8.canvas!=null){
Canvas.prototype.removeFigure.call(this,this.resizeHandle8);
}
};
Workflow.prototype.moveResizeHandles=function(_4776){
var _4777=this.resizeHandle1.getWidth();
var _4778=this.resizeHandle1.getHeight();
var _4779=_4776.getHeight();
var _477a=_4776.getWidth();
var xPos=_4776.getX();
var yPos=_4776.getY();
this.resizeHandle1.setPosition(xPos-_4777,yPos-_4778);
this.resizeHandle3.setPosition(xPos+_477a,yPos-_4778);
this.resizeHandle5.setPosition(xPos+_477a,yPos+_4779);
this.resizeHandle7.setPosition(xPos-_4777,yPos+_4779);
if(_4776.isStrechable()){
this.resizeHandle2.setPosition(xPos+(_477a/2)-this.resizeHandleHalfWidth,yPos-_4778);
this.resizeHandle4.setPosition(xPos+_477a,yPos+(_4779/2)-(_4778/2));
this.resizeHandle6.setPosition(xPos+(_477a/2)-this.resizeHandleHalfWidth,yPos+_4779);
this.resizeHandle8.setPosition(xPos-_4777,yPos+(_4779/2)-(_4778/2));
}
};
Workflow.prototype.onMouseDown=function(x,y){
this.dragging=true;
this.mouseDownPosX=x;
this.mouseDownPosY=y;
if(this.toolPalette!=null&&this.toolPalette.getActiveTool()!=null){
this.toolPalette.getActiveTool().execute(x,y);
}
this.setCurrentSelection(null);
this.showMenu(null);
var line=this.getBestLine(x,y);
if(line!=null&&line.isSelectable()){
this.hideResizeHandles();
this.setCurrentSelection(line);
this.showLineResizeHandles(this.currentSelection);
if(line instanceof Line&&!(line instanceof Connection)){
this.draggingLineCommand=line.createCommand(new EditPolicy(EditPolicy.MOVE));
if(this.draggingLineCommand!=null){
this.draggingLine=line;
}
}
}
};
Workflow.prototype.onMouseUp=function(x,y){
this.dragging=false;
if(this.draggingLineCommand!=null){
this.getCommandStack().execute(this.draggingLineCommand);
this.draggingLine=null;
this.draggingLineCommand=null;
}
};
Workflow.prototype.onMouseMove=function(x,y){
if(this.dragging==true&&this.draggingLine!=null){
var diffX=x-this.mouseDownPosX;
var diffY=y-this.mouseDownPosY;
this.draggingLine.startX=this.draggingLine.getStartX()+diffX;
this.draggingLine.startY=this.draggingLine.getStartY()+diffY;
this.draggingLine.setEndPoint(this.draggingLine.getEndX()+diffX,this.draggingLine.getEndY()+diffY);
this.mouseDownPosX=x;
this.mouseDownPosY=y;
this.showLineResizeHandles(this.currentSelection);
}else{
if(this.dragging==true&&this.panning==true){
var diffX=x-this.mouseDownPosX;
var diffY=y-this.mouseDownPosY;
this.scrollTo(this.getScrollLeft()-diffX,this.getScrollTop()-diffY,true);
this.onScroll();
}
}
};
Workflow.prototype.onKeyDown=function(_4786,ctrl){
if(_4786==46&&this.currentSelection!=null){
this.commandStack.execute(this.currentSelection.createCommand(new EditPolicy(EditPolicy.DELETE)));
}else{
if(_4786==90&&ctrl){
this.commandStack.undo();
}else{
if(_4786==89&&ctrl){
this.commandStack.redo();
}
}
}
};
Workflow.prototype.setDocumentDirty=function(){
for(var i=0;i<this.dialogs.getSize();i++){
var d=this.dialogs.get(i);
if(d!=null&&d.onSetDocumentDirty){
d.onSetDocumentDirty();
}
}
if(this.snapToGeometryHelper!=null){
this.snapToGeometryHelper.onSetDocumentDirty();
}
if(this.snapToGridHelper!=null){
this.snapToGridHelper.onSetDocumentDirty();
}
};
Workflow.prototype.snapToHelper=function(_478a,pos){
if(this.snapToGeometryHelper!=null){
if(_478a instanceof ResizeHandle){
var _478c=_478a.getSnapToGridAnchor();
pos.x+=_478c.x;
pos.y+=_478c.y;
var _478d=new Point(pos.x,pos.y);
var _478e=_478a.getSnapToDirection();
var _478f=this.snapToGeometryHelper.snapPoint(_478e,pos,_478d);
if((_478e&SnapToHelper.EAST_WEST)&&!(_478f&SnapToHelper.EAST_WEST)){
this.showSnapToHelperLineVertical(_478d.x);
}else{
this.hideSnapToHelperLineVertical();
}
if((_478e&SnapToHelper.NORTH_SOUTH)&&!(_478f&SnapToHelper.NORTH_SOUTH)){
this.showSnapToHelperLineHorizontal(_478d.y);
}else{
this.hideSnapToHelperLineHorizontal();
}
_478d.x-=_478c.x;
_478d.y-=_478c.y;
return _478d;
}else{
var _4790=new Dimension(pos.x,pos.y,_478a.getWidth(),_478a.getHeight());
var _478d=new Dimension(pos.x,pos.y,_478a.getWidth(),_478a.getHeight());
var _478e=SnapToHelper.NSEW;
var _478f=this.snapToGeometryHelper.snapRectangle(_4790,_478d);
if((_478e&SnapToHelper.WEST)&&!(_478f&SnapToHelper.WEST)){
this.showSnapToHelperLineVertical(_478d.x);
}else{
if((_478e&SnapToHelper.EAST)&&!(_478f&SnapToHelper.EAST)){
this.showSnapToHelperLineVertical(_478d.getX()+_478d.getWidth());
}else{
this.hideSnapToHelperLineVertical();
}
}
if((_478e&SnapToHelper.NORTH)&&!(_478f&SnapToHelper.NORTH)){
this.showSnapToHelperLineHorizontal(_478d.y);
}else{
if((_478e&SnapToHelper.SOUTH)&&!(_478f&SnapToHelper.SOUTH)){
this.showSnapToHelperLineHorizontal(_478d.getY()+_478d.getHeight());
}else{
this.hideSnapToHelperLineHorizontal();
}
}
return _478d.getTopLeft();
}
}else{
if(this.snapToGridHelper!=null){
var _478c=_478a.getSnapToGridAnchor();
pos.x=pos.x+_478c.x;
pos.y=pos.y+_478c.y;
var _478d=new Point(pos.x,pos.y);
this.snapToGridHelper.snapPoint(0,pos,_478d);
_478d.x=_478d.x-_478c.x;
_478d.y=_478d.y-_478c.y;
return _478d;
}
}
return pos;
};
Workflow.prototype.showSnapToHelperLineHorizontal=function(_4791){
if(this.horizontalSnapToHelperLine==null){
this.horizontalSnapToHelperLine=new Line();
this.horizontalSnapToHelperLine.setColor(new Color(175,175,255));
this.addFigure(this.horizontalSnapToHelperLine);
}
this.horizontalSnapToHelperLine.setStartPoint(0,_4791);
this.horizontalSnapToHelperLine.setEndPoint(this.getWidth(),_4791);
};
Workflow.prototype.showSnapToHelperLineVertical=function(_4792){
if(this.verticalSnapToHelperLine==null){
this.verticalSnapToHelperLine=new Line();
this.verticalSnapToHelperLine.setColor(new Color(175,175,255));
this.addFigure(this.verticalSnapToHelperLine);
}
this.verticalSnapToHelperLine.setStartPoint(_4792,0);
this.verticalSnapToHelperLine.setEndPoint(_4792,this.getHeight());
};
Workflow.prototype.hideSnapToHelperLines=function(){
this.hideSnapToHelperLineHorizontal();
this.hideSnapToHelperLineVertical();
};
Workflow.prototype.hideSnapToHelperLineHorizontal=function(){
if(this.horizontalSnapToHelperLine!=null){
this.removeFigure(this.horizontalSnapToHelperLine);
this.horizontalSnapToHelperLine=null;
}
};
Workflow.prototype.hideSnapToHelperLineVertical=function(){
if(this.verticalSnapToHelperLine!=null){
this.removeFigure(this.verticalSnapToHelperLine);
this.verticalSnapToHelperLine=null;
}
};
WindowFigure=function(title){
this.title=title;
this.titlebar=null;
Figure.call(this);
this.setDeleteable(false);
this.setCanSnapToHelper(false);
this.setZOrder(WindowFigure.ZOrderIndex);
};
WindowFigure.prototype=new Figure;
WindowFigure.prototype.type=":WindowFigure";
WindowFigure.ZOrderIndex=50000;
WindowFigure.setZOrderBaseIndex=function(index){
WindowFigure.ZOrderBaseIndex=index;
};
WindowFigure.prototype.hasFixedPosition=function(){
return true;
};
WindowFigure.prototype.hasTitleBar=function(){
return true;
};
WindowFigure.prototype.createHTMLElement=function(){
var item=Figure.prototype.createHTMLElement.call(this);
item.style.margin="0px";
item.style.padding="0px";
item.style.border="1px solid black";
item.style.backgroundImage="url(window_bg.png)";
item.style.zIndex=WindowFigure.ZOrderBaseIndex;
item.style.cursor=null;
if(this.hasTitleBar()){
this.titlebar=document.createElement("div");
this.titlebar.style.position="absolute";
this.titlebar.style.left="0px";
this.titlebar.style.top="0px";
this.titlebar.style.width=this.getWidth()+"px";
this.titlebar.style.height="15px";
this.titlebar.style.margin="0px";
this.titlebar.style.padding="0px";
this.titlebar.style.font="normal 10px verdana";
this.titlebar.style.backgroundColor="blue";
this.titlebar.style.borderBottom="2px solid gray";
this.titlebar.style.whiteSpace="nowrap";
this.titlebar.style.textAlign="center";
this.titlebar.style.backgroundImage="url(window_toolbar.png)";
this.textNode=document.createTextNode(this.title);
this.titlebar.appendChild(this.textNode);
item.appendChild(this.titlebar);
}
return item;
};
WindowFigure.prototype.setDocumentDirty=function(_3df9){
};
WindowFigure.prototype.onDragend=function(){
};
WindowFigure.prototype.onDragstart=function(x,y){
if(this.titlebar==null){
return false;
}
if(this.canDrag==true&&x<parseInt(this.titlebar.style.width)&&y<parseInt(this.titlebar.style.height)){
return true;
}
return false;
};
WindowFigure.prototype.isSelectable=function(){
return false;
};
WindowFigure.prototype.setCanDrag=function(flag){
Figure.prototype.setCanDrag.call(this,flag);
this.html.style.cursor="";
if(this.titlebar==null){
return;
}
if(flag){
this.titlebar.style.cursor="move";
}else{
this.titlebar.style.cursor="";
}
};
WindowFigure.prototype.setWorkflow=function(_3dfd){
var _3dfe=this.workflow;
Figure.prototype.setWorkflow.call(this,_3dfd);
if(_3dfe!=null){
_3dfe.removeSelectionListener(this);
}
if(this.workflow!=null){
this.workflow.addSelectionListener(this);
}
};
WindowFigure.prototype.setDimension=function(w,h){
Figure.prototype.setDimension.call(this,w,h);
if(this.titlebar!=null){
this.titlebar.style.width=this.getWidth()+"px";
}
};
WindowFigure.prototype.setTitle=function(title){
this.title=title;
};
WindowFigure.prototype.getMinWidth=function(){
return 50;
};
WindowFigure.prototype.getMinHeight=function(){
return 50;
};
WindowFigure.prototype.isResizeable=function(){
return false;
};
WindowFigure.prototype.setAlpha=function(_3e02){
};
WindowFigure.prototype.setBackgroundColor=function(color){
this.bgColor=color;
if(this.bgColor!=null){
this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
}else{
this.html.style.backgroundColor="transparent";
this.html.style.backgroundImage="";
}
};
WindowFigure.prototype.setColor=function(color){
this.lineColor=color;
if(this.lineColor!=null){
this.html.style.border=this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
}else{
this.html.style.border="0px";
}
};
WindowFigure.prototype.setLineWidth=function(w){
this.lineStroke=w;
this.html.style.border=this.lineStroke+"px solid black";
};
WindowFigure.prototype.onSelectionChanged=function(_3e06){
};
Button=function(_468d,width,_468f){
this.x=0;
this.y=0;
this.id=UUID.create();
this.enabled=true;
this.active=false;
this.palette=_468d;
if(width&&_468f){
this.setDimension(width,_468f);
}else{
this.setDimension(24,24);
}
this.html=this.createHTMLElement();
};
Button.prototype.type="Button";
Button.prototype.dispose=function(){
};
Button.prototype.getImageUrl=function(){
if(this.enabled){
return this.type+".png";
}else{
return this.type+"_disabled.png";
}
};
Button.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height=this.width+"px";
item.style.width=this.height+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.outline="none";
if(this.getImageUrl()!=null){
item.style.backgroundImage="url("+this.getImageUrl()+")";
}else{
item.style.backgroundImage="";
}
var oThis=this;
this.omousedown=function(event){
if(oThis.enabled){
oThis.setActive(true);
}
event.cancelBubble=true;
event.returnValue=false;
};
this.omouseup=function(event){
if(oThis.enabled){
oThis.setActive(false);
oThis.execute();
}
event.cancelBubble=true;
event.returnValue=false;
};
if(item.addEventListener){
item.addEventListener("mousedown",this.omousedown,false);
item.addEventListener("mouseup",this.omouseup,false);
}else{
if(item.attachEvent){
item.attachEvent("onmousedown",this.omousedown);
item.attachEvent("onmouseup",this.omouseup);
}
}
return item;
};
Button.prototype.getHTMLElement=function(){
if(this.html==null){
this.html=this.createHTMLElement();
}
return this.html;
};
Button.prototype.execute=function(){
};
Button.prototype.setTooltip=function(_4694){
this.tooltip=_4694;
if(this.tooltip!=null){
this.html.title=this.tooltip;
}else{
this.html.title="";
}
};
Button.prototype.setActive=function(flag){
if(!this.enabled){
return;
}
this.active=flag;
if(flag==true){
this.html.style.border="2px inset";
}else{
this.html.style.border="0px";
}
};
Button.prototype.isActive=function(){
return this.active;
};
Button.prototype.setEnabled=function(flag){
this.enabled=flag;
if(this.getImageUrl()!=null){
this.html.style.backgroundImage="url("+this.getImageUrl()+")";
}else{
this.html.style.backgroundImage="";
}
};
Button.prototype.setDimension=function(w,h){
this.width=w;
this.height=h;
if(this.html==null){
return;
}
this.html.style.width=this.width+"px";
this.html.style.height=this.height+"px";
};
Button.prototype.setPosition=function(xPos,yPos){
this.x=Math.max(0,xPos);
this.y=Math.max(0,yPos);
if(this.html==null){
return;
}
this.html.style.left=this.x+"px";
this.html.style.top=this.y+"px";
};
Button.prototype.getWidth=function(){
return this.width;
};
Button.prototype.getHeight=function(){
return this.height;
};
Button.prototype.getY=function(){
return this.y;
};
Button.prototype.getX=function(){
return this.x;
};
Button.prototype.getPosition=function(){
return new Point(this.x,this.y);
};
Button.prototype.getToolPalette=function(){
return this.palette;
};
ToggleButton=function(_42ee){
Button.call(this,_42ee);
this.isDownFlag=false;
};
ToggleButton.prototype=new Button;
ToggleButton.prototype.type="ToggleButton";
ToggleButton.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height="24px";
item.style.width="24px";
item.style.margin="0px";
item.style.padding="0px";
if(this.getImageUrl()!=null){
item.style.backgroundImage="url("+this.getImageUrl()+")";
}else{
item.style.backgroundImage="";
}
var oThis=this;
this.omousedown=function(event){
if(oThis.enabled){
if(!oThis.isDown()){
Button.prototype.setActive.call(oThis,true);
}
}
event.cancelBubble=true;
event.returnValue=false;
};
this.omouseup=function(event){
if(oThis.enabled){
if(oThis.isDown()){
Button.prototype.setActive.call(oThis,false);
}
oThis.isDownFlag=!oThis.isDownFlag;
oThis.execute();
}
event.cancelBubble=true;
event.returnValue=false;
};
if(item.addEventListener){
item.addEventListener("mousedown",this.omousedown,false);
item.addEventListener("mouseup",this.omouseup,false);
}else{
if(item.attachEvent){
item.attachEvent("onmousedown",this.omousedown);
item.attachEvent("onmouseup",this.omouseup);
}
}
return item;
};
ToggleButton.prototype.isDown=function(){
return this.isDownFlag;
};
ToggleButton.prototype.setActive=function(flag){
Button.prototype.setActive.call(this,flag);
this.isDownFlag=flag;
};
ToggleButton.prototype.execute=function(){
};
ToolGeneric=function(_3e08){
this.x=0;
this.y=0;
this.enabled=true;
this.tooltip=null;
this.palette=_3e08;
this.setDimension(10,10);
this.html=this.createHTMLElement();
};
ToolGeneric.prototype.type="ToolGeneric";
ToolGeneric.prototype.dispose=function(){
};
ToolGeneric.prototype.getImageUrl=function(){
if(this.enabled){
return this.type+".png";
}else{
return this.type+"_disabled.png";
}
};
ToolGeneric.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height="24px";
item.style.width="24px";
item.style.margin="0px";
item.style.padding="0px";
if(this.getImageUrl()!=null){
item.style.backgroundImage="url("+this.getImageUrl()+")";
}else{
item.style.backgroundImage="";
}
var oThis=this;
this.click=function(event){
if(oThis.enabled){
oThis.palette.setActiveTool(oThis);
}
event.cancelBubble=true;
event.returnValue=false;
};
if(item.addEventListener){
item.addEventListener("click",this.click,false);
}else{
if(item.attachEvent){
item.attachEvent("onclick",this.click);
}
}
return item;
};
ToolGeneric.prototype.getHTMLElement=function(){
if(this.html==null){
this.html=this.createHTMLElement();
}
return this.html;
};
ToolGeneric.prototype.execute=function(x,y){
if(this.enabled){
this.palette.setActiveTool(null);
}
};
ToolGeneric.prototype.setTooltip=function(_3e0e){
this.tooltip=_3e0e;
if(this.tooltip!=null){
this.html.title=this.tooltip;
}else{
this.html.title="";
}
};
ToolGeneric.prototype.setActive=function(flag){
if(!this.enabled){
return;
}
if(flag==true){
this.html.style.border="2px inset";
}else{
this.html.style.border="0px";
}
};
ToolGeneric.prototype.setEnabled=function(flag){
this.enabled=flag;
if(this.getImageUrl()!=null){
this.html.style.backgroundImage="url("+this.getImageUrl()+")";
}else{
this.html.style.backgroundImage="";
}
};
ToolGeneric.prototype.setDimension=function(w,h){
this.width=w;
this.height=h;
if(this.html==null){
return;
}
this.html.style.width=this.width+"px";
this.html.style.height=this.height+"px";
};
ToolGeneric.prototype.setPosition=function(xPos,yPos){
this.x=Math.max(0,xPos);
this.y=Math.max(0,yPos);
if(this.html==null){
return;
}
this.html.style.left=this.x+"px";
this.html.style.top=this.y+"px";
};
ToolGeneric.prototype.getWidth=function(){
return this.width;
};
ToolGeneric.prototype.getHeight=function(){
return this.height;
};
ToolGeneric.prototype.getY=function(){
return this.y;
};
ToolGeneric.prototype.getX=function(){
return this.x;
};
ToolGeneric.prototype.getPosition=function(){
return new Point(this.x,this.y);
};
ToolPalette=function(title){
WindowFigure.call(this,title);
this.setDimension(75,400);
this.activeTool=null;
this.children=new Object();
};
ToolPalette.prototype=new WindowFigure;
ToolPalette.prototype.type="ToolPalette";
ToolPalette.prototype.dispose=function(){
WindowFigure.prototype.dispose.call(this);
};
ToolPalette.prototype.createHTMLElement=function(){
var item=WindowFigure.prototype.createHTMLElement.call(this);
this.scrollarea=document.createElement("div");
this.scrollarea.style.position="absolute";
this.scrollarea.style.left="0px";
if(this.hasTitleBar()){
this.scrollarea.style.top="15px";
}else{
this.scrollarea.style.top="0px";
}
this.scrollarea.style.width=this.getWidth()+"px";
this.scrollarea.style.height="15px";
this.scrollarea.style.margin="0px";
this.scrollarea.style.padding="0px";
this.scrollarea.style.font="normal 10px verdana";
this.scrollarea.style.borderBottom="2px solid gray";
this.scrollarea.style.whiteSpace="nowrap";
this.scrollarea.style.textAlign="center";
this.scrollarea.style.overflowX="auto";
this.scrollarea.style.overflowY="auto";
this.scrollarea.style.overflow="auto";
item.appendChild(this.scrollarea);
return item;
};
ToolPalette.prototype.setDimension=function(w,h){
WindowFigure.prototype.setDimension.call(this,w,h);
if(this.scrollarea!=null){
this.scrollarea.style.width=this.getWidth()+"px";
if(this.hasTitleBar()){
this.scrollarea.style.height=(this.getHeight()-15)+"px";
}else{
this.scrollarea.style.height=this.getHeight()+"px";
}
}
};
ToolPalette.prototype.addChild=function(item){
this.children[item.id]=item;
this.scrollarea.appendChild(item.getHTMLElement());
};
ToolPalette.prototype.getChild=function(id){
return this.children[id];
};
ToolPalette.prototype.getActiveTool=function(){
return this.activeTool;
};
ToolPalette.prototype.setActiveTool=function(tool){
if(this.activeTool!=tool&&this.activeTool!=null){
this.activeTool.setActive(false);
}
if(tool!=null){
tool.setActive(true);
}
this.activeTool=tool;
};
Dialog=function(title){
this.buttonbar=null;
if(title){
WindowFigure.call(this,title);
}else{
WindowFigure.call(this,"Dialog");
}
this.setDimension(400,300);
};
Dialog.prototype=new WindowFigure;
Dialog.prototype.type="Dialog";
Dialog.prototype.createHTMLElement=function(){
var item=WindowFigure.prototype.createHTMLElement.call(this);
var oThis=this;
this.buttonbar=document.createElement("div");
this.buttonbar.style.position="absolute";
this.buttonbar.style.left="0px";
this.buttonbar.style.bottom="0px";
this.buttonbar.style.width=this.getWidth()+"px";
this.buttonbar.style.height="30px";
this.buttonbar.style.margin="0px";
this.buttonbar.style.padding="0px";
this.buttonbar.style.font="normal 10px verdana";
this.buttonbar.style.backgroundColor="#c0c0c0";
this.buttonbar.style.borderBottom="2px solid gray";
this.buttonbar.style.whiteSpace="nowrap";
this.buttonbar.style.textAlign="center";
this.okbutton=document.createElement("button");
this.okbutton.style.border="1px solid gray";
this.okbutton.style.font="normal 10px verdana";
this.okbutton.style.width="80px";
this.okbutton.style.margin="5px";
this.okbutton.innerHTML="Ok";
this.okbutton.onclick=function(){
oThis.onOk();
};
this.buttonbar.appendChild(this.okbutton);
this.cancelbutton=document.createElement("button");
this.cancelbutton.innerHTML="Cancel";
this.cancelbutton.style.font="normal 10px verdana";
this.cancelbutton.style.border="1px solid gray";
this.cancelbutton.style.width="80px";
this.cancelbutton.style.margin="5px";
this.cancelbutton.onclick=function(){
oThis.onCancel();
};
this.buttonbar.appendChild(this.cancelbutton);
item.appendChild(this.buttonbar);
return item;
};
Dialog.prototype.onOk=function(){
this.workflow.removeFigure(this);
};
Dialog.prototype.onCancel=function(){
this.workflow.removeFigure(this);
};
Dialog.prototype.setDimension=function(w,h){
WindowFigure.prototype.setDimension.call(this,w,h);
if(this.buttonbar!=null){
this.buttonbar.style.width=this.getWidth()+"px";
}
};
Dialog.prototype.setWorkflow=function(_35cd){
WindowFigure.prototype.setWorkflow.call(this,_35cd);
this.setFocus();
};
Dialog.prototype.setFocus=function(){
};
Dialog.prototype.onSetDocumentDirty=function(){
};
InputDialog=function(){
Dialog.call(this);
this.setDimension(400,100);
};
InputDialog.prototype=new Dialog;
InputDialog.prototype.type="InputDialog";
InputDialog.prototype.createHTMLElement=function(){
var item=Dialog.prototype.createHTMLElement.call(this);
return item;
};
InputDialog.prototype.onOk=function(){
this.workflow.removeFigure(this);
};
InputDialog.prototype.onCancel=function(){
this.workflow.removeFigure(this);
};
PropertyDialog=function(_44f1,_44f2,label){
this.figure=_44f1;
this.propertyName=_44f2;
this.label=label;
Dialog.call(this);
this.setDimension(400,120);
};
PropertyDialog.prototype=new Dialog;
PropertyDialog.prototype.type="PropertyDialog";
PropertyDialog.prototype.createHTMLElement=function(){
var item=Dialog.prototype.createHTMLElement.call(this);
var _44f5=document.createElement("form");
_44f5.style.position="absolute";
_44f5.style.left="10px";
_44f5.style.top="30px";
_44f5.style.width="375px";
_44f5.style.font="normal 10px verdana";
item.appendChild(_44f5);
this.labelDiv=document.createElement("div");
this.labelDiv.innerHTML=this.label;
this.disableTextSelection(this.labelDiv);
_44f5.appendChild(this.labelDiv);
this.input=document.createElement("input");
this.input.style.border="1px solid gray";
this.input.style.font="normal 10px verdana";
this.input.type="text";
var value=this.figure.getProperty(this.propertyName);
if(value){
this.input.value=value;
}else{
this.input.value="";
}
this.input.style.width="100%";
_44f5.appendChild(this.input);
this.input.focus();
return item;
};
PropertyDialog.prototype.onOk=function(){
Dialog.prototype.onOk.call(this);
this.figure.setProperty(this.propertyName,this.input.value);
};
AnnotationDialog=function(_325c){
this.figure=_325c;
Dialog.call(this);
this.setDimension(400,100);
};
AnnotationDialog.prototype=new Dialog;
AnnotationDialog.prototype.type="AnnotationDialog";
AnnotationDialog.prototype.createHTMLElement=function(){
var item=Dialog.prototype.createHTMLElement.call(this);
var _325e=document.createElement("form");
_325e.style.position="absolute";
_325e.style.left="10px";
_325e.style.top="30px";
_325e.style.width="375px";
_325e.style.font="normal 10px verdana";
item.appendChild(_325e);
this.label=document.createTextNode("Text");
_325e.appendChild(this.label);
this.input=document.createElement("input");
this.input.style.border="1px solid gray";
this.input.style.font="normal 10px verdana";
this.input.type="text";
var value=this.figure.getText();
if(value){
this.input.value=value;
}else{
this.input.value="";
}
this.input.style.width="100%";
_325e.appendChild(this.input);
this.input.focus();
return item;
};
AnnotationDialog.prototype.onOk=function(){
this.workflow.getCommandStack().execute(new CommandSetText(this.figure,this.input.value));
this.workflow.removeFigure(this);
};
PropertyWindow=function(){
this.currentSelection=null;
WindowFigure.call(this,"Property Window");
this.setDimension(200,100);
};
PropertyWindow.prototype=new WindowFigure;
PropertyWindow.prototype.type="PropertyWindow";
PropertyWindow.prototype.dispose=function(){
WindowFigure.prototype.dispose.call(this);
};
PropertyWindow.prototype.createHTMLElement=function(){
var item=WindowFigure.prototype.createHTMLElement.call(this);
item.appendChild(this.createLabel("Type:",15,25));
item.appendChild(this.createLabel("X :",15,50));
item.appendChild(this.createLabel("Y :",15,70));
item.appendChild(this.createLabel("Width :",85,50));
item.appendChild(this.createLabel("Height :",85,70));
this.labelType=this.createLabel("",50,25);
this.labelX=this.createLabel("",40,50);
this.labelY=this.createLabel("",40,70);
this.labelWidth=this.createLabel("",135,50);
this.labelHeight=this.createLabel("",135,70);
this.labelType.style.fontWeight="normal";
this.labelX.style.fontWeight="normal";
this.labelY.style.fontWeight="normal";
this.labelWidth.style.fontWeight="normal";
this.labelHeight.style.fontWeight="normal";
item.appendChild(this.labelType);
item.appendChild(this.labelX);
item.appendChild(this.labelY);
item.appendChild(this.labelWidth);
item.appendChild(this.labelHeight);
return item;
};
PropertyWindow.prototype.onSelectionChanged=function(_35db){
WindowFigure.prototype.onSelectionChanged.call(this,_35db);
if(this.currentSelection!=null){
this.currentSelection.detachMoveListener(this);
}
this.currentSelection=_35db;
if(_35db!=null&&_35db!=this){
this.labelType.innerHTML=_35db.type;
if(_35db.getX){
this.labelX.innerHTML=_35db.getX();
this.labelY.innerHTML=_35db.getY();
this.labelWidth.innerHTML=_35db.getWidth();
this.labelHeight.innerHTML=_35db.getHeight();
this.currentSelection=_35db;
this.currentSelection.attachMoveListener(this);
}else{
this.labelX.innerHTML="";
this.labelY.innerHTML="";
this.labelWidth.innerHTML="";
this.labelHeight.innerHTML="";
}
}else{
this.labelType.innerHTML="&lt;none&gt;";
this.labelX.innerHTML="";
this.labelY.innerHTML="";
this.labelWidth.innerHTML="";
this.labelHeight.innerHTML="";
}
};
PropertyWindow.prototype.getCurrentSelection=function(){
return this.currentSelection;
};
PropertyWindow.prototype.onOtherFigureMoved=function(_35dc){
if(_35dc==this.currentSelection){
this.onSelectionChanged(_35dc);
}
};
PropertyWindow.prototype.createLabel=function(text,x,y){
var l=document.createElement("div");
l.style.position="absolute";
l.style.left=x+"px";
l.style.top=y+"px";
l.style.font="normal 10px verdana";
l.style.whiteSpace="nowrap";
l.style.fontWeight="bold";
l.innerHTML=text;
return l;
};
ColorDialog=function(){
this.maxValue={"h":"359","s":"100","v":"100"};
this.HSV={0:359,1:100,2:100};
this.slideHSV={0:359,1:100,2:100};
this.SVHeight=165;
this.wSV=162;
this.wH=162;
Dialog.call(this,"Color Chooser");
this.loadSV();
this.setColor(new Color(255,0,0));
this.setDimension(219,244);
};
ColorDialog.prototype=new Dialog;
ColorDialog.prototype.type="ColorDialog";
ColorDialog.prototype.createHTMLElement=function(){
var oThis=this;
var item=Dialog.prototype.createHTMLElement.call(this);
this.outerDiv=document.createElement("div");
this.outerDiv.id="plugin";
this.outerDiv.style.top="15px";
this.outerDiv.style.left="0px";
this.outerDiv.style.width="201px";
this.outerDiv.style.position="absolute";
this.outerDiv.style.padding="9px";
this.outerDiv.display="block";
this.outerDiv.style.background="#0d0d0d";
this.plugHEX=document.createElement("div");
this.plugHEX.id="plugHEX";
this.plugHEX.innerHTML="F1FFCC";
this.plugHEX.style.color="white";
this.plugHEX.style.font="normal 10px verdana";
this.outerDiv.appendChild(this.plugHEX);
this.SV=document.createElement("div");
this.SV.onmousedown=function(event){
oThis.mouseDownSV(oThis.SVslide,event);
};
this.SV.id="SV";
this.SV.style.cursor="crosshair";
this.SV.style.background="#FF0000 url(SatVal.png)";
this.SV.style.position="absolute";
this.SV.style.height="166px";
this.SV.style.width="167px";
this.SV.style.marginRight="10px";
this.SV.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='SatVal.png', sizingMethod='scale')";
this.SV.style["float"]="left";
this.outerDiv.appendChild(this.SV);
this.SVslide=document.createElement("div");
this.SVslide.onmousedown=function(event){
oThis.mouseDownSV(event);
};
this.SVslide.style.top="40px";
this.SVslide.style.left="40px";
this.SVslide.style.position="absolute";
this.SVslide.style.cursor="crosshair";
this.SVslide.style.background="url(slide.gif)";
this.SVslide.style.height="9px";
this.SVslide.style.width="9px";
this.SVslide.style.lineHeight="1px";
this.outerDiv.appendChild(this.SVslide);
this.H=document.createElement("form");
this.H.id="H";
this.H.onmousedown=function(event){
oThis.mouseDownH(event);
};
this.H.style.border="1px solid #000000";
this.H.style.cursor="crosshair";
this.H.style.position="absolute";
this.H.style.width="19px";
this.H.style.top="28px";
this.H.style.left="191px";
this.outerDiv.appendChild(this.H);
this.Hslide=document.createElement("div");
this.Hslide.style.top="-7px";
this.Hslide.style.left="-8px";
this.Hslide.style.background="url(slideHue.gif)";
this.Hslide.style.height="5px";
this.Hslide.style.width="33px";
this.Hslide.style.position="absolute";
this.Hslide.style.lineHeight="1px";
this.H.appendChild(this.Hslide);
this.Hmodel=document.createElement("div");
this.Hmodel.style.height="1px";
this.Hmodel.style.width="19px";
this.Hmodel.style.lineHeight="1px";
this.Hmodel.style.margin="0px";
this.Hmodel.style.padding="0px";
this.Hmodel.style.fontSize="1px";
this.H.appendChild(this.Hmodel);
item.appendChild(this.outerDiv);
return item;
};
ColorDialog.prototype.onOk=function(){
Dialog.prototype.onOk.call(this);
};
browser=function(v){
return (Math.max(navigator.userAgent.toLowerCase().indexOf(v),0));
};
ColorDialog.prototype.showColor=function(c){
this.plugHEX.style.background="#"+c;
this.plugHEX.innerHTML=c;
};
ColorDialog.prototype.getSelectedColor=function(){
var rgb=this.hex2rgb(this.plugHEX.innerHTML);
return new Color(rgb[0],rgb[1],rgb[2]);
};
ColorDialog.prototype.setColor=function(color){
if(color==null){
color=new Color(100,100,100);
}
var hex=this.rgb2hex(Array(color.getRed(),color.getGreen(),color.getBlue()));
this.updateH(hex);
};
ColorDialog.prototype.XY=function(e,v){
var z=browser("msie")?Array(event.clientX+document.body.scrollLeft,event.clientY+document.body.scrollTop):Array(e.pageX,e.pageY);
return z[v];
};
ColorDialog.prototype.mkHSV=function(a,b,c){
return (Math.min(a,Math.max(0,Math.ceil((parseInt(c)/b)*a))));
};
ColorDialog.prototype.ckHSV=function(a,b){
if(a>=0&&a<=b){
return (a);
}else{
if(a>b){
return (b);
}else{
if(a<0){
return ("-"+oo);
}
}
}
};
ColorDialog.prototype.mouseDownH=function(e){
this.slideHSV[0]=this.HSV[0];
var oThis=this;
this.H.onmousemove=function(e){
oThis.dragH(e);
};
this.H.onmouseup=function(e){
oThis.H.onmousemove="";
oThis.H.onmouseup="";
};
this.dragH(e);
};
ColorDialog.prototype.dragH=function(e){
var y=this.XY(e,1)-this.getY()-40;
this.Hslide.style.top=(this.ckHSV(y,this.wH)-5)+"px";
this.slideHSV[0]=this.mkHSV(359,this.wH,this.Hslide.style.top);
this.updateSV();
this.showColor(this.commit());
this.SV.style.backgroundColor="#"+this.hsv2hex(Array(this.HSV[0],100,100));
};
ColorDialog.prototype.mouseDownSV=function(o,e){
this.slideHSV[0]=this.HSV[0];
var oThis=this;
function reset(){
oThis.SV.onmousemove="";
oThis.SV.onmouseup="";
oThis.SVslide.onmousemove="";
oThis.SVslide.onmouseup="";
}
this.SV.onmousemove=function(e){
oThis.dragSV(e);
};
this.SV.onmouseup=reset;
this.SVslide.onmousemove=function(e){
oThis.dragSV(e);
};
this.SVslide.onmouseup=reset;
this.dragSV(e);
};
ColorDialog.prototype.dragSV=function(e){
var x=this.XY(e,0)-this.getX()-1;
var y=this.XY(e,1)-this.getY()-20;
this.SVslide.style.left=this.ckHSV(x,this.wSV)+"px";
this.SVslide.style.top=this.ckHSV(y,this.wSV)+"px";
this.slideHSV[1]=this.mkHSV(100,this.wSV,this.SVslide.style.left);
this.slideHSV[2]=100-this.mkHSV(100,this.wSV,this.SVslide.style.top);
this.updateSV();
};
ColorDialog.prototype.commit=function(){
var r="hsv";
var z={};
var j="";
for(var i=0;i<=r.length-1;i++){
j=r.substr(i,1);
z[i]=(j=="h")?this.maxValue[j]-this.mkHSV(this.maxValue[j],this.wH,this.Hslide.style.top):this.HSV[i];
}
return (this.updateSV(this.hsv2hex(z)));
};
ColorDialog.prototype.updateSV=function(v){
this.HSV=v?this.hex2hsv(v):Array(this.slideHSV[0],this.slideHSV[1],this.slideHSV[2]);
if(!v){
v=this.hsv2hex(Array(this.slideHSV[0],this.slideHSV[1],this.slideHSV[2]));
}
this.showColor(v);
return v;
};
ColorDialog.prototype.loadSV=function(){
var z="";
for(var i=this.SVHeight;i>=0;i--){
z+="<div style=\"background:#"+this.hsv2hex(Array(Math.round((359/this.SVHeight)*i),100,100))+";\"><br/></div>";
}
this.Hmodel.innerHTML=z;
};
ColorDialog.prototype.updateH=function(v){
this.plugHEX.innerHTML=v;
this.HSV=this.hex2hsv(v);
this.SV.style.backgroundColor="#"+this.hsv2hex(Array(this.HSV[0],100,100));
this.SVslide.style.top=(parseInt(this.wSV-this.wSV*(this.HSV[1]/100))+20)+"px";
this.SVslide.style.left=(parseInt(this.wSV*(this.HSV[1]/100))+5)+"px";
this.Hslide.style.top=(parseInt(this.wH*((this.maxValue["h"]-this.HSV[0])/this.maxValue["h"]))-7)+"px";
};
ColorDialog.prototype.toHex=function(v){
v=Math.round(Math.min(Math.max(0,v),255));
return ("0123456789ABCDEF".charAt((v-v%16)/16)+"0123456789ABCDEF".charAt(v%16));
};
ColorDialog.prototype.hex2rgb=function(r){
return ({0:parseInt(r.substr(0,2),16),1:parseInt(r.substr(2,2),16),2:parseInt(r.substr(4,2),16)});
};
ColorDialog.prototype.rgb2hex=function(r){
return (this.toHex(r[0])+this.toHex(r[1])+this.toHex(r[2]));
};
ColorDialog.prototype.hsv2hex=function(h){
return (this.rgb2hex(this.hsv2rgb(h)));
};
ColorDialog.prototype.hex2hsv=function(v){
return (this.rgb2hsv(this.hex2rgb(v)));
};
ColorDialog.prototype.rgb2hsv=function(r){
var max=Math.max(r[0],r[1],r[2]);
var delta=max-Math.min(r[0],r[1],r[2]);
var H;
var S;
var V;
if(max!=0){
S=Math.round(delta/max*100);
if(r[0]==max){
H=(r[1]-r[2])/delta;
}else{
if(r[1]==max){
H=2+(r[2]-r[0])/delta;
}else{
if(r[2]==max){
H=4+(r[0]-r[1])/delta;
}
}
}
var H=Math.min(Math.round(H*60),360);
if(H<0){
H+=360;
}
}
return ({0:H?H:0,1:S?S:0,2:Math.round((max/255)*100)});
};
ColorDialog.prototype.hsv2rgb=function(r){
var R;
var B;
var G;
var S=r[1]/100;
var V=r[2]/100;
var H=r[0]/360;
if(S>0){
if(H>=1){
H=0;
}
H=6*H;
F=H-Math.floor(H);
A=Math.round(255*V*(1-S));
B=Math.round(255*V*(1-(S*F)));
C=Math.round(255*V*(1-(S*(1-F))));
V=Math.round(255*V);
switch(Math.floor(H)){
case 0:
R=V;
G=C;
B=A;
break;
case 1:
R=B;
G=V;
B=A;
break;
case 2:
R=A;
G=V;
B=C;
break;
case 3:
R=A;
G=B;
B=V;
break;
case 4:
R=C;
G=A;
B=V;
break;
case 5:
R=V;
G=A;
B=B;
break;
}
return ({0:R?R:0,1:G?G:0,2:B?B:0});
}else{
return ({0:(V=Math.round(V*255)),1:V,2:V});
}
};
LineColorDialog=function(_3255){
ColorDialog.call(this);
this.figure=_3255;
var color=_3255.getColor();
this.updateH(this.rgb2hex(color.getRed(),color.getGreen(),color.getBlue()));
};
LineColorDialog.prototype=new ColorDialog;
LineColorDialog.prototype.type="LineColorDialog";
LineColorDialog.prototype.onOk=function(){
var _3257=this.workflow;
ColorDialog.prototype.onOk.call(this);
if(typeof this.figure.setColor=="function"){
_3257.getCommandStack().execute(new CommandSetColor(this.figure,this.getSelectedColor()));
if(_3257.getCurrentSelection()==this.figure){
_3257.setCurrentSelection(this.figure);
}
}
};
BackgroundColorDialog=function(_467f){
ColorDialog.call(this);
this.figure=_467f;
var color=_467f.getBackgroundColor();
if(color!=null){
this.updateH(this.rgb2hex(color.getRed(),color.getGreen(),color.getBlue()));
}
};
BackgroundColorDialog.prototype=new ColorDialog;
BackgroundColorDialog.prototype.type="BackgroundColorDialog";
BackgroundColorDialog.prototype.onOk=function(){
var _4681=this.workflow;
ColorDialog.prototype.onOk.call(this);
if(typeof this.figure.setBackgroundColor=="function"){
_4681.getCommandStack().execute(new CommandSetBackgroundColor(this.figure,this.getSelectedColor()));
if(_4681.getCurrentSelection()==this.figure){
_4681.setCurrentSelection(this.figure);
}
}
};
AnnotationDialog=function(_325c){
this.figure=_325c;
Dialog.call(this);
this.setDimension(400,100);
};
AnnotationDialog.prototype=new Dialog;
AnnotationDialog.prototype.type="AnnotationDialog";
AnnotationDialog.prototype.createHTMLElement=function(){
var item=Dialog.prototype.createHTMLElement.call(this);
var _325e=document.createElement("form");
_325e.style.position="absolute";
_325e.style.left="10px";
_325e.style.top="30px";
_325e.style.width="375px";
_325e.style.font="normal 10px verdana";
item.appendChild(_325e);
this.label=document.createTextNode("Text");
_325e.appendChild(this.label);
this.input=document.createElement("input");
this.input.style.border="1px solid gray";
this.input.style.font="normal 10px verdana";
this.input.type="text";
var value=this.figure.getText();
if(value){
this.input.value=value;
}else{
this.input.value="";
}
this.input.style.width="100%";
_325e.appendChild(this.input);
this.input.focus();
return item;
};
AnnotationDialog.prototype.onOk=function(){
this.workflow.getCommandStack().execute(new CommandSetText(this.figure,this.input.value));
this.workflow.removeFigure(this);
};
Command=function(label){
this.label=label;
};
Command.prototype.type="Command";
Command.prototype.getLabel=function(){
return this.label;
};
Command.prototype.canExecute=function(){
return true;
};
Command.prototype.execute=function(){
};
Command.prototype.cancel=function(){
};
Command.prototype.undo=function(){
};
Command.prototype.redo=function(){
};
CommandStack=function(){
this.undostack=new Array();
this.redostack=new Array();
this.maxundo=50;
this.eventListeners=new ArrayList();
};
CommandStack.PRE_EXECUTE=1;
CommandStack.PRE_REDO=2;
CommandStack.PRE_UNDO=4;
CommandStack.POST_EXECUTE=8;
CommandStack.POST_REDO=16;
CommandStack.POST_UNDO=32;
CommandStack.POST_MASK=CommandStack.POST_EXECUTE|CommandStack.POST_UNDO|CommandStack.POST_REDO;
CommandStack.PRE_MASK=CommandStack.PRE_EXECUTE|CommandStack.PRE_UNDO|CommandStack.PRE_REDO;
CommandStack.prototype.type="CommandStack";
CommandStack.prototype.setUndoLimit=function(count){
this.maxundo=count;
};
CommandStack.prototype.markSaveLocation=function(){
this.undostack=new Array();
this.redostack=new Array();
};
CommandStack.prototype.execute=function(_4516){
if(_4516==null){
return;
}
if(_4516.canExecute()==false){
return;
}
this.notifyListeners(_4516,CommandStack.PRE_EXECUTE);
this.undostack.push(_4516);
_4516.execute();
this.redostack=new Array();
if(this.undostack.length>this.maxundo){
this.undostack=this.undostack.slice(this.undostack.length-this.maxundo);
}
this.notifyListeners(_4516,CommandStack.POST_EXECUTE);
};
CommandStack.prototype.undo=function(){
var _4517=this.undostack.pop();
if(_4517){
this.notifyListeners(_4517,CommandStack.PRE_UNDO);
this.redostack.push(_4517);
_4517.undo();
this.notifyListeners(_4517,CommandStack.POST_UNDO);
}
};
CommandStack.prototype.redo=function(){
var _4518=this.redostack.pop();
if(_4518){
this.notifyListeners(_4518,CommandStack.PRE_REDO);
this.undostack.push(_4518);
_4518.redo();
this.notifyListeners(_4518,CommandStack.POST_REDO);
}
};
CommandStack.prototype.canRedo=function(){
return this.redostack.length>0;
};
CommandStack.prototype.canUndo=function(){
return this.undostack.length>0;
};
CommandStack.prototype.addCommandStackEventListener=function(_4519){
this.eventListeners.add(_4519);
};
CommandStack.prototype.removeCommandStackEventListener=function(_451a){
this.eventListeners.remove(_451a);
};
CommandStack.prototype.notifyListeners=function(_451b,state){
var event=new CommandStackEvent(_451b,state);
var size=this.eventListeners.getSize();
for(var i=0;i<size;i++){
this.eventListeners.get(i).stackChanged(event);
}
};
CommandStackEvent=function(_42bc,_42bd){
this.command=_42bc;
this.details=_42bd;
};
CommandStackEvent.prototype.type="CommandStackEvent";
CommandStackEvent.prototype.getCommand=function(){
return this.command;
};
CommandStackEvent.prototype.getDetails=function(){
return this.details;
};
CommandStackEvent.prototype.isPostChangeEvent=function(){
return 0!=(this.getDetails()&CommandStack.POST_MASK);
};
CommandStackEvent.prototype.isPreChangeEvent=function(){
return 0!=(this.getDetails()&CommandStack.PRE_MASK);
};
CommandStackEventListener=function(){
};
CommandStackEventListener.prototype.type="CommandStackEventListener";
CommandStackEventListener.prototype.stackChanged=function(event){
};
CommandAdd=function(_4648,_4649,x,y,_464c){
Command.call(this,"add figure");
this.parent=_464c;
this.figure=_4649;
this.x=x;
this.y=y;
this.workflow=_4648;
};
CommandAdd.prototype=new Command;
CommandAdd.prototype.type="CommandAdd";
CommandAdd.prototype.execute=function(){
this.redo();
};
CommandAdd.prototype.redo=function(){
if(this.x&&this.y){
this.workflow.addFigure(this.figure,this.x,this.y);
}else{
this.workflow.addFigure(this.figure);
}
this.workflow.setCurrentSelection(this.figure);
if(this.parent!=null){
this.parent.addChild(this.figure);
}
};
CommandAdd.prototype.undo=function(){
this.workflow.removeFigure(this.figure);
this.workflow.setCurrentSelection(null);
if(this.parent!=null){
this.parent.removeChild(this.figure);
}
};
CommandDelete=function(_44ba){
Command.call(this,"delete figure");
this.parent=_44ba.parent;
this.figure=_44ba;
this.workflow=_44ba.workflow;
this.connections=null;
this.compartmentDeleteCommands=null;
};
CommandDelete.prototype=new Command;
CommandDelete.prototype.type="CommandDelete";
CommandDelete.prototype.execute=function(){
this.redo();
};
CommandDelete.prototype.undo=function(){
if(this.figure instanceof CompartmentFigure){
for(var i=0;i<this.compartmentDeleteCommands.getSize();i++){
var _44bc=this.compartmentDeleteCommands.get(i);
this.figure.addChild(_44bc.figure);
this.workflow.getCommandStack().undo();
}
}
this.workflow.addFigure(this.figure);
if(this.figure instanceof Connection){
this.figure.reconnect();
}
this.workflow.setCurrentSelection(this.figure);
if(this.parent!=null){
this.parent.addChild(this.figure);
}
for(var i=0;i<this.connections.getSize();++i){
this.workflow.addFigure(this.connections.get(i));
this.connections.get(i).reconnect();
}
};
CommandDelete.prototype.redo=function(){
if(this.figure instanceof CompartmentFigure){
if(this.compartmentDeleteCommands==null){
this.compartmentDeleteCommands=new ArrayList();
var _44bd=this.figure.getChildren().clone();
for(var i=0;i<_44bd.getSize();i++){
var child=_44bd.get(i);
this.figure.removeChild(child);
var _44c0=new CommandDelete(child);
this.compartmentDeleteCommands.add(_44c0);
this.workflow.getCommandStack().execute(_44c0);
}
}else{
for(var i=0;i<this.compartmentDeleteCommands.getSize();i++){
this.workflow.redo();
}
}
}
this.workflow.removeFigure(this.figure);
this.workflow.setCurrentSelection(null);
if(this.figure instanceof Node&&this.connections==null){
this.connections=new ArrayList();
var ports=this.figure.getPorts();
for(var i=0;i<ports.getSize();i++){
if(ports.get(i).getConnections){
this.connections.addAll(ports.get(i).getConnections());
}
}
}
if(this.connections==null){
this.connections=new ArrayList();
}
if(this.parent!=null){
this.parent.removeChild(this.figure);
}
for(var i=0;i<this.connections.getSize();++i){
this.workflow.removeFigure(this.connections.get(i));
}
};
CommandMove=function(_44cc,x,y){
Command.call(this,"move figure");
this.figure=_44cc;
if(x==undefined){
this.oldX=_44cc.getX();
this.oldY=_44cc.getY();
}else{
this.oldX=x;
this.oldY=y;
}
this.oldCompartment=_44cc.getParent();
};
CommandMove.prototype=new Command;
CommandMove.prototype.type="CommandMove";
CommandMove.prototype.setStartPosition=function(x,y){
this.oldX=x;
this.oldY=y;
};
CommandMove.prototype.setPosition=function(x,y){
this.newX=x;
this.newY=y;
this.newCompartment=this.figure.workflow.getBestCompartmentFigure(x,y,this.figure);
};
CommandMove.prototype.canExecute=function(){
return this.newX!=this.oldX||this.newY!=this.oldY;
};
CommandMove.prototype.execute=function(){
this.redo();
};
CommandMove.prototype.undo=function(){
this.figure.setPosition(this.oldX,this.oldY);
if(this.newCompartment!=null){
this.newCompartment.removeChild(this.figure);
}
if(this.oldCompartment!=null){
this.oldCompartment.addChild(this.figure);
}
this.figure.workflow.moveResizeHandles(this.figure);
};
CommandMove.prototype.redo=function(){
this.figure.setPosition(this.newX,this.newY);
if(this.oldCompartment!=null){
this.oldCompartment.removeChild(this.figure);
}
if(this.newCompartment!=null){
this.newCompartment.addChild(this.figure);
}
this.figure.workflow.moveResizeHandles(this.figure);
};
CommandResize=function(_441c,width,_441e){
Command.call(this,"resize figure");
this.figure=_441c;
if(width==undefined){
this.oldWidth=_441c.getWidth();
this.oldHeight=_441c.getHeight();
}else{
this.oldWidth=width;
this.oldHeight=_441e;
}
};
CommandResize.prototype=new Command;
CommandResize.prototype.type="CommandResize";
CommandResize.prototype.setDimension=function(width,_4420){
this.newWidth=width;
this.newHeight=_4420;
};
CommandResize.prototype.canExecute=function(){
return this.newWidth!=this.oldWidth||this.newHeight!=this.oldHeight;
};
CommandResize.prototype.execute=function(){
this.redo();
};
CommandResize.prototype.undo=function(){
this.figure.setDimension(this.oldWidth,this.oldHeight);
this.figure.workflow.moveResizeHandles(this.figure);
};
CommandResize.prototype.redo=function(){
this.figure.setDimension(this.newWidth,this.newHeight);
this.figure.workflow.moveResizeHandles(this.figure);
};
CommandSetText=function(_47c1,text){
Command.call(this,"set text");
this.figure=_47c1;
this.newText=text;
this.oldText=_47c1.getText();
};
CommandSetText.prototype=new Command;
CommandSetText.prototype.type="CommandSetText";
CommandSetText.prototype.execute=function(){
this.redo();
};
CommandSetText.prototype.redo=function(){
this.figure.setText(this.newText);
};
CommandSetText.prototype.undo=function(){
this.figure.setText(this.oldText);
};
CommandSetColor=function(_3e63,color){
Command.call(this,"set color");
this.figure=_3e63;
this.newColor=color;
this.oldColor=_3e63.getColor();
};
CommandSetColor.prototype=new Command;
CommandSetColor.prototype.type="CommandSetColor";
CommandSetColor.prototype.execute=function(){
this.redo();
};
CommandSetColor.prototype.undo=function(){
this.figure.setColor(this.oldColor);
};
CommandSetColor.prototype.redo=function(){
this.figure.setColor(this.newColor);
};
CommandSetBackgroundColor=function(_30fc,color){
Command.call(this,"set background color");
this.figure=_30fc;
this.newColor=color;
this.oldColor=_30fc.getBackgroundColor();
};
CommandSetBackgroundColor.prototype=new Command;
CommandSetBackgroundColor.prototype.type="CommandSetBackgroundColor";
CommandSetBackgroundColor.prototype.execute=function(){
this.redo();
};
CommandSetBackgroundColor.prototype.undo=function(){
this.figure.setBackgroundColor(this.oldColor);
};
CommandSetBackgroundColor.prototype.redo=function(){
this.figure.setBackgroundColor(this.newColor);
};
CommandConnect=function(_460d,_460e,_460f){
Command.call(this,"create connection");
this.workflow=_460d;
this.source=_460e;
this.target=_460f;
this.connection=null;
};
CommandConnect.prototype=new Command;
CommandConnect.prototype.type="CommandConnect";
CommandConnect.prototype.setConnection=function(_4610){
this.connection=_4610;
};
CommandConnect.prototype.execute=function(){
if(this.connection==null){
this.connection=new Connection();
}
this.connection.setSource(this.source);
this.connection.setTarget(this.target);
this.workflow.addFigure(this.connection);
};
CommandConnect.prototype.redo=function(){
this.workflow.addFigure(this.connection);
this.connection.reconnect();
};
CommandConnect.prototype.undo=function(){
this.workflow.removeFigure(this.connection);
};
CommandReconnect=function(con){
Command.call(this,"reconnect connection");
this.con=con;
this.oldSourcePort=con.getSource();
this.oldTargetPort=con.getTarget();
this.oldRouter=con.getRouter();
this.con.setRouter(new NullConnectionRouter());
};
CommandReconnect.prototype=new Command;
CommandReconnect.prototype.type="CommandReconnect";
CommandReconnect.prototype.canExecute=function(){
return true;
};
CommandReconnect.prototype.setNewPorts=function(_3955,_3956){
this.newSourcePort=_3955;
this.newTargetPort=_3956;
};
CommandReconnect.prototype.execute=function(){
this.redo();
};
CommandReconnect.prototype.cancel=function(){
var start=this.con.sourceAnchor.getLocation(this.con.targetAnchor.getReferencePoint());
var end=this.con.targetAnchor.getLocation(this.con.sourceAnchor.getReferencePoint());
this.con.setStartPoint(start.x,start.y);
this.con.setEndPoint(end.x,end.y);
this.con.getWorkflow().showLineResizeHandles(this.con);
this.con.setRouter(this.oldRouter);
};
CommandReconnect.prototype.undo=function(){
this.con.setSource(this.oldSourcePort);
this.con.setTarget(this.oldTargetPort);
this.con.setRouter(this.oldRouter);
if(this.con.getWorkflow().getCurrentSelection()==this.con){
this.con.getWorkflow().showLineResizeHandles(this.con);
}
};
CommandReconnect.prototype.redo=function(){
this.con.setSource(this.newSourcePort);
this.con.setTarget(this.newTargetPort);
this.con.setRouter(this.oldRouter);
if(this.con.getWorkflow().getCurrentSelection()==this.con){
this.con.getWorkflow().showLineResizeHandles(this.con);
}
};
CommandMoveLine=function(line,_39aa,_39ab,endX,endY){
Command.call(this,"move line");
this.line=line;
this.startX1=_39aa;
this.startY1=_39ab;
this.endX1=endX;
this.endY1=endY;
};
CommandMoveLine.prototype=new Command;
CommandMoveLine.prototype.type="CommandMoveLine";
CommandMoveLine.prototype.canExecute=function(){
return this.startX1!=this.startX2||this.startY1!=this.startY2||this.endX1!=this.endX2||this.endY1!=this.endY2;
};
CommandMoveLine.prototype.execute=function(){
this.startX2=this.line.getStartX();
this.startY2=this.line.getStartY();
this.endX2=this.line.getEndX();
this.endY2=this.line.getEndY();
this.redo();
};
CommandMoveLine.prototype.undo=function(){
this.line.setStartPoint(this.startX1,this.startY1);
this.line.setEndPoint(this.endX1,this.endY1);
if(this.line.workflow.getCurrentSelection()==this.line){
this.line.workflow.showLineResizeHandles(this.line);
}
};
CommandMoveLine.prototype.redo=function(){
this.line.setStartPoint(this.startX2,this.startY2);
this.line.setEndPoint(this.endX2,this.endY2);
if(this.line.workflow.getCurrentSelection()==this.line){
this.line.workflow.showLineResizeHandles(this.line);
}
};
CommandMovePort=function(port){
Command.call(this,"move port");
this.port=port;
};
CommandMovePort.prototype=new Command;
CommandMovePort.prototype.type="CommandMovePort";
CommandMovePort.prototype.execute=function(){
this.port.setAlpha(1);
this.port.setPosition(this.port.originX,this.port.originY);
this.port.parentNode.workflow.hideConnectionLine();
};
CommandMovePort.prototype.undo=function(){
};
CommandMovePort.prototype.redo=function(){
};
CommandMovePort.prototype.setPosition=function(x,y){
};
Menu=function(){
this.menuItems=new ArrayList();
Figure.call(this);
this.setSelectable(false);
this.setDeleteable(false);
this.setCanDrag(false);
this.setResizeable(false);
this.setSelectable(false);
this.setZOrder(10000);
this.dirty=false;
};
Menu.prototype=new Figure;
Menu.prototype.type="Menu";
Menu.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.zIndex=""+Figure.ZOrderBaseIndex;
item.style.border="1px solid gray";
item.style.background="lavender";
item.style.cursor="pointer";
return item;
};
Menu.prototype.setWorkflow=function(_47c7){
this.workflow=_47c7;
};
Menu.prototype.appendMenuItem=function(item){
this.menuItems.add(item);
item.parentMenu=this;
this.dirty=true;
};
Menu.prototype.getHTMLElement=function(){
var html=Figure.prototype.getHTMLElement.call(this);
if(this.dirty){
this.createList();
}
return html;
};
Menu.prototype.createList=function(){
this.dirty=false;
this.html.innerHTML="";
var oThis=this;
for(var i=0;i<this.menuItems.getSize();i++){
var item=this.menuItems.get(i);
var li=document.createElement("a");
li.innerHTML=item.getLabel();
li.style.display="block";
li.style.fontFamily="Verdana, Arial, Helvetica, sans-serif";
li.style.fontSize="9pt";
li.style.color="dimgray";
li.style.borderBottom="1px solid silver";
li.style.paddingLeft="5px";
li.style.paddingRight="5px";
li.style.cursor="pointer";
this.html.appendChild(li);
li.menuItem=item;
if(li.addEventListener){
li.addEventListener("click",function(event){
var _47cf=arguments[0]||window.event;
_47cf.cancelBubble=true;
_47cf.returnValue=false;
var diffX=_47cf.clientX;
var diffY=_47cf.clientY;
var _47d2=document.body.parentNode.scrollLeft;
var _47d3=document.body.parentNode.scrollTop;
this.menuItem.execute(diffX+_47d2,diffY+_47d3);
},false);
li.addEventListener("mouseup",function(event){
event.cancelBubble=true;
event.returnValue=false;
},false);
li.addEventListener("mousedown",function(event){
event.cancelBubble=true;
event.returnValue=false;
},false);
li.addEventListener("mouseover",function(event){
this.style.backgroundColor="silver";
},false);
li.addEventListener("mouseout",function(event){
this.style.backgroundColor="transparent";
},false);
}else{
if(li.attachEvent){
li.attachEvent("onclick",function(event){
var _47d9=arguments[0]||window.event;
_47d9.cancelBubble=true;
_47d9.returnValue=false;
var diffX=_47d9.clientX;
var diffY=_47d9.clientY;
var _47dc=document.body.parentNode.scrollLeft;
var _47dd=document.body.parentNode.scrollTop;
event.srcElement.menuItem.execute(diffX+_47dc,diffY+_47dd);
});
li.attachEvent("onmousedown",function(event){
event.cancelBubble=true;
event.returnValue=false;
});
li.attachEvent("onmouseup",function(event){
event.cancelBubble=true;
event.returnValue=false;
});
li.attachEvent("onmouseover",function(event){
event.srcElement.style.backgroundColor="silver";
});
li.attachEvent("onmouseout",function(event){
event.srcElement.style.backgroundColor="transparent";
});
}
}
}
};
MenuItem=function(label,_44fc,_44fd){
this.label=label;
this.iconUrl=_44fc;
this.parentMenu=null;
this.action=_44fd;
};
MenuItem.prototype.type="MenuItem";
MenuItem.prototype.isEnabled=function(){
return true;
};
MenuItem.prototype.getLabel=function(){
return this.label;
};
MenuItem.prototype.execute=function(x,y){
this.parentMenu.workflow.showMenu(null);
this.action(x,y);
};
Locator=function(){
};
Locator.prototype.type="Locator";
Locator.prototype.relocate=function(_3eb7){
};
ConnectionLocator=function(_4513){
Locator.call(this);
this.connection=_4513;
};
ConnectionLocator.prototype=new Locator;
ConnectionLocator.prototype.type="ConnectionLocator";
ConnectionLocator.prototype.getConnection=function(){
return this.connection;
};
ManhattanMidpointLocator=function(_465f){
ConnectionLocator.call(this,_465f);
};
ManhattanMidpointLocator.prototype=new ConnectionLocator;
ManhattanMidpointLocator.prototype.type="ManhattanMidpointLocator";
ManhattanMidpointLocator.prototype.relocate=function(_4660){
var conn=this.getConnection();
var p=new Point();
var _4663=conn.getPoints();
var index=Math.floor((_4663.getSize()-2)/2);
var p1=_4663.get(index);
var p2=_4663.get(index+1);
p.x=(p2.x-p1.x)/2+p1.x+5;
p.y=(p2.y-p1.y)/2+p1.y+5;
_4660.setPosition(p.x,p.y);
};
EditPartFactory=function(){
};
EditPartFactory.prototype.typet="EditPartFactory";
EditPartFactory.prototype.createEditPart=function(model){
};
AbstractObjectModel=function(){
this.listeners=new ArrayList();
this.id=UUID.create();
};
AbstractObjectModel.prototype.type="AbstractObjectModel";
AbstractObjectModel.prototype.getModelChildren=function(){
return new ArrayList();
};
AbstractObjectModel.prototype.getModelParent=function(){
return this.modelParent;
};
AbstractObjectModel.prototype.setModelParent=function(_4500){
this.modelParent=_4500;
};
AbstractObjectModel.prototype.getId=function(){
return this.id;
};
AbstractObjectModel.prototype.firePropertyChange=function(_4501,_4502,_4503){
var count=this.listeners.getSize();
if(count==0){
return;
}
var event=new PropertyChangeEvent(this,_4501,_4502,_4503);
for(var i=0;i<count;i++){
try{
this.listeners.get(i).propertyChange(event);
}
catch(e){
}
}
};
AbstractObjectModel.prototype.addPropertyChangeListener=function(_4507){
if(_4507!=null){
this.listeners.add(_4507);
}
};
AbstractObjectModel.prototype.removePropertyChangeListener=function(_4508){
if(_4508!=null){
this.listeners.remove(_4508);
}
};
AbstractObjectModel.prototype.getPersistentAttributes=function(){
return {id:this.id};
};
AbstractConnectionModel=function(){
AbstractObjectModel.call(this);
};
AbstractConnectionModel.prototype=new AbstractObjectModel;
AbstractConnectionModel.prototype.type="AbstractConnectionModel";
AbstractConnectionModel.prototype.getSourceModel=function(){
throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";
};
AbstractConnectionModel.prototype.getTargetModel=function(){
throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";
};
AbstractConnectionModel.prototype.getSourcePortName=function(){
throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";
};
AbstractConnectionModel.prototype.getTargetPortName=function(){
throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";
};
PropertyChangeEvent=function(model,_464e,_464f,_4650){
this.model=model;
this.property=_464e;
this.oldValue=_464f;
this.newValue=_4650;
};
PropertyChangeEvent.prototype.type="PropertyChangeEvent";
GraphicalViewer=function(id){
Workflow.call(this,id);
this.factory=null;
this.model=null;
this.initDone=false;
};
GraphicalViewer.prototype=new Workflow;
GraphicalViewer.prototype.type="GraphicalViewer";
GraphicalViewer.prototype.setEditPartFactory=function(_4618){
this.factory=_4618;
this.checkInit();
};
GraphicalViewer.prototype.setModel=function(model){
if(model instanceof AbstractObjectModel){
this.model=model;
this.checkInit();
}else{
alert("Invalid model class type:"+model.type);
}
};
GraphicalViewer.prototype.checkInit=function(){
if(this.factory!=null&&this.model!=null&&this.initDone==false){
var _461a=this.model.getModelChildren();
var count=_461a.getSize();
for(var i=0;i<count;i++){
var child=_461a.get(i);
var _461e=this.factory.createEditPart(child);
_461e.setId(child.getId());
this.addFigure(_461e);
}
var _461f=this.getDocument().getFigures();
var count=_461f.getSize();
for(var i=0;i<count;i++){
var _461e=_461f.get(i);
if(_461e instanceof Node){
var _4620=_461e.getModelSourceConnections();
}
}
}
};
GraphicalViewer.prototype.refreshConnections=function(node){
try{
var _4622=node.getModelSourceConnections();
var count=_4622.getSize();
for(var i=0;i<count;i++){
var _4625=_4622.get(i);
var _4626=this.getLine(_4625.getId());
if(_4626==null){
_4626=this.factory.createEditPart(_4625);
var _4627=_4625.getSourceModel();
var _4628=_4625.getTargetModel();
var _4629=this.getFigure(_4627.getId());
var _462a=this.getFigure(_4628.getId());
var _462b=_4629.getPort(_4625.getSourcePortName());
var _462c=_462a.getPort(_4625.getTargetPortName());
_4626.setTarget(_462c);
_4626.setSource(_462b);
this.addFigure(_4626);
}
}
}
catch(e){
alert(e);
}
};
GraphicalEditor=function(id){
this.view=new GraphicalViewer(id);
this.initializeGraphicalViewer();
};
GraphicalEditor.prototype.type="GraphicalEditor";
GraphicalEditor.prototype.initializeGraphicalViewer=function(){
};
GraphicalEditor.prototype.getGraphicalViewer=function(){
return this.view;
};
var whitespace="\n\r\t ";
XMLP=function(_3fb4){
_3fb4=SAXStrings.replace(_3fb4,null,null,"\r\n","\n");
_3fb4=SAXStrings.replace(_3fb4,null,null,"\r","\n");
this.m_xml=_3fb4;
this.m_iP=0;
this.m_iState=XMLP._STATE_PROLOG;
this.m_stack=new Stack();
this._clearAttributes();
};
XMLP._NONE=0;
XMLP._ELM_B=1;
XMLP._ELM_E=2;
XMLP._ELM_EMP=3;
XMLP._ATT=4;
XMLP._TEXT=5;
XMLP._ENTITY=6;
XMLP._PI=7;
XMLP._CDATA=8;
XMLP._COMMENT=9;
XMLP._DTD=10;
XMLP._ERROR=11;
XMLP._CONT_XML=0;
XMLP._CONT_ALT=1;
XMLP._ATT_NAME=0;
XMLP._ATT_VAL=1;
XMLP._STATE_PROLOG=1;
XMLP._STATE_DOCUMENT=2;
XMLP._STATE_MISC=3;
XMLP._errs=new Array();
XMLP._errs[XMLP.ERR_CLOSE_PI=0]="PI: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_DTD=1]="DTD: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_COMMENT=2]="Comment: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_CDATA=3]="CDATA: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ELM=4]="Element: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ENTITY=5]="Entity: missing closing sequence";
XMLP._errs[XMLP.ERR_PI_TARGET=6]="PI: target is required";
XMLP._errs[XMLP.ERR_ELM_EMPTY=7]="Element: cannot be both empty and closing";
XMLP._errs[XMLP.ERR_ELM_NAME=8]="Element: name must immediatly follow \"<\"";
XMLP._errs[XMLP.ERR_ELM_LT_NAME=9]="Element: \"<\" not allowed in element names";
XMLP._errs[XMLP.ERR_ATT_VALUES=10]="Attribute: values are required and must be in quotes";
XMLP._errs[XMLP.ERR_ATT_LT_NAME=11]="Element: \"<\" not allowed in attribute names";
XMLP._errs[XMLP.ERR_ATT_LT_VALUE=12]="Attribute: \"<\" not allowed in attribute values";
XMLP._errs[XMLP.ERR_ATT_DUP=13]="Attribute: duplicate attributes not allowed";
XMLP._errs[XMLP.ERR_ENTITY_UNKNOWN=14]="Entity: unknown entity";
XMLP._errs[XMLP.ERR_INFINITELOOP=15]="Infininte loop";
XMLP._errs[XMLP.ERR_DOC_STRUCTURE=16]="Document: only comments, processing instructions, or whitespace allowed outside of document element";
XMLP._errs[XMLP.ERR_ELM_NESTING=17]="Element: must be nested correctly";
XMLP.prototype._addAttribute=function(name,value){
this.m_atts[this.m_atts.length]=new Array(name,value);
};
XMLP.prototype._checkStructure=function(_3fb7){
if(XMLP._STATE_PROLOG==this.m_iState){
if((XMLP._TEXT==_3fb7)||(XMLP._ENTITY==_3fb7)){
if(SAXStrings.indexOfNonWhitespace(this.getContent(),this.getContentBegin(),this.getContentEnd())!=-1){
return this._setErr(XMLP.ERR_DOC_STRUCTURE);
}
}
if((XMLP._ELM_B==_3fb7)||(XMLP._ELM_EMP==_3fb7)){
this.m_iState=XMLP._STATE_DOCUMENT;
}
}
if(XMLP._STATE_DOCUMENT==this.m_iState){
if((XMLP._ELM_B==_3fb7)||(XMLP._ELM_EMP==_3fb7)){
this.m_stack.push(this.getName());
}
if((XMLP._ELM_E==_3fb7)||(XMLP._ELM_EMP==_3fb7)){
var _3fb8=this.m_stack.pop();
if((_3fb8==null)||(_3fb8!=this.getName())){
return this._setErr(XMLP.ERR_ELM_NESTING);
}
}
if(this.m_stack.count()==0){
this.m_iState=XMLP._STATE_MISC;
return _3fb7;
}
}
if(XMLP._STATE_MISC==this.m_iState){
if((XMLP._ELM_B==_3fb7)||(XMLP._ELM_E==_3fb7)||(XMLP._ELM_EMP==_3fb7)||(XMLP.EVT_DTD==_3fb7)){
return this._setErr(XMLP.ERR_DOC_STRUCTURE);
}
if((XMLP._TEXT==_3fb7)||(XMLP._ENTITY==_3fb7)){
if(SAXStrings.indexOfNonWhitespace(this.getContent(),this.getContentBegin(),this.getContentEnd())!=-1){
return this._setErr(XMLP.ERR_DOC_STRUCTURE);
}
}
}
return _3fb7;
};
XMLP.prototype._clearAttributes=function(){
this.m_atts=new Array();
};
XMLP.prototype._findAttributeIndex=function(name){
for(var i=0;i<this.m_atts.length;i++){
if(this.m_atts[i][XMLP._ATT_NAME]==name){
return i;
}
}
return -1;
};
XMLP.prototype.getAttributeCount=function(){
return this.m_atts?this.m_atts.length:0;
};
XMLP.prototype.getAttributeName=function(index){
return ((index<0)||(index>=this.m_atts.length))?null:this.m_atts[index][XMLP._ATT_NAME];
};
XMLP.prototype.getAttributeValue=function(index){
return ((index<0)||(index>=this.m_atts.length))?null:__unescapeString(this.m_atts[index][XMLP._ATT_VAL]);
};
XMLP.prototype.getAttributeValueByName=function(name){
return this.getAttributeValue(this._findAttributeIndex(name));
};
XMLP.prototype.getColumnNumber=function(){
return SAXStrings.getColumnNumber(this.m_xml,this.m_iP);
};
XMLP.prototype.getContent=function(){
return (this.m_cSrc==XMLP._CONT_XML)?this.m_xml:this.m_cAlt;
};
XMLP.prototype.getContentBegin=function(){
return this.m_cB;
};
XMLP.prototype.getContentEnd=function(){
return this.m_cE;
};
XMLP.prototype.getLineNumber=function(){
return SAXStrings.getLineNumber(this.m_xml,this.m_iP);
};
XMLP.prototype.getName=function(){
return this.m_name;
};
XMLP.prototype.next=function(){
return this._checkStructure(this._parse());
};
XMLP.prototype._parse=function(){
if(this.m_iP==this.m_xml.length){
return XMLP._NONE;
}
if(this.m_iP==this.m_xml.indexOf("<?",this.m_iP)){
return this._parsePI(this.m_iP+2);
}else{
if(this.m_iP==this.m_xml.indexOf("<!DOCTYPE",this.m_iP)){
return this._parseDTD(this.m_iP+9);
}else{
if(this.m_iP==this.m_xml.indexOf("<!--",this.m_iP)){
return this._parseComment(this.m_iP+4);
}else{
if(this.m_iP==this.m_xml.indexOf("<![CDATA[",this.m_iP)){
return this._parseCDATA(this.m_iP+9);
}else{
if(this.m_iP==this.m_xml.indexOf("<",this.m_iP)){
return this._parseElement(this.m_iP+1);
}else{
if(this.m_iP==this.m_xml.indexOf("&",this.m_iP)){
return this._parseEntity(this.m_iP+1);
}else{
return this._parseText(this.m_iP);
}
}
}
}
}
}
};
XMLP.prototype._parseAttribute=function(iB,iE){
var iNB,iNE,iEq,iVB,iVE;
var _3fc1,strN,strV;
this.m_cAlt="";
iNB=SAXStrings.indexOfNonWhitespace(this.m_xml,iB,iE);
if((iNB==-1)||(iNB>=iE)){
return iNB;
}
iEq=this.m_xml.indexOf("=",iNB);
if((iEq==-1)||(iEq>iE)){
return this._setErr(XMLP.ERR_ATT_VALUES);
}
iNE=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,iNB,iEq);
iVB=SAXStrings.indexOfNonWhitespace(this.m_xml,iEq+1,iE);
if((iVB==-1)||(iVB>iE)){
return this._setErr(XMLP.ERR_ATT_VALUES);
}
_3fc1=this.m_xml.charAt(iVB);
if(SAXStrings.QUOTES.indexOf(_3fc1)==-1){
return this._setErr(XMLP.ERR_ATT_VALUES);
}
iVE=this.m_xml.indexOf(_3fc1,iVB+1);
if((iVE==-1)||(iVE>iE)){
return this._setErr(XMLP.ERR_ATT_VALUES);
}
strN=this.m_xml.substring(iNB,iNE+1);
strV=this.m_xml.substring(iVB+1,iVE);
if(strN.indexOf("<")!=-1){
return this._setErr(XMLP.ERR_ATT_LT_NAME);
}
if(strV.indexOf("<")!=-1){
return this._setErr(XMLP.ERR_ATT_LT_VALUE);
}
strV=SAXStrings.replace(strV,null,null,"\n"," ");
strV=SAXStrings.replace(strV,null,null,"\t"," ");
iRet=this._replaceEntities(strV);
if(iRet==XMLP._ERROR){
return iRet;
}
strV=this.m_cAlt;
if(this._findAttributeIndex(strN)==-1){
this._addAttribute(strN,strV);
}else{
return this._setErr(XMLP.ERR_ATT_DUP);
}
this.m_iP=iVE+2;
return XMLP._ATT;
};
XMLP.prototype._parseCDATA=function(iB){
var iE=this.m_xml.indexOf("]]>",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_CDATA);
}
this._setContent(XMLP._CONT_XML,iB,iE);
this.m_iP=iE+3;
return XMLP._CDATA;
};
XMLP.prototype._parseComment=function(iB){
var iE=this.m_xml.indexOf("-"+"->",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_COMMENT);
}
this._setContent(XMLP._CONT_XML,iB,iE);
this.m_iP=iE+3;
return XMLP._COMMENT;
};
XMLP.prototype._parseDTD=function(iB){
var iE,strClose,iInt,iLast;
iE=this.m_xml.indexOf(">",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_DTD);
}
iInt=this.m_xml.indexOf("[",iB);
strClose=((iInt!=-1)&&(iInt<iE))?"]>":">";
while(true){
if(iE==iLast){
return this._setErr(XMLP.ERR_INFINITELOOP);
}
iLast=iE;
iE=this.m_xml.indexOf(strClose,iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_DTD);
}
if(this.m_xml.substring(iE-1,iE+2)!="]]>"){
break;
}
}
this.m_iP=iE+strClose.length;
return XMLP._DTD;
};
XMLP.prototype._parseElement=function(iB){
var iE,iDE,iNE,iRet;
var iType,strN,iLast;
iDE=iE=this.m_xml.indexOf(">",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_ELM);
}
if(this.m_xml.charAt(iB)=="/"){
iType=XMLP._ELM_E;
iB++;
}else{
iType=XMLP._ELM_B;
}
if(this.m_xml.charAt(iE-1)=="/"){
if(iType==XMLP._ELM_E){
return this._setErr(XMLP.ERR_ELM_EMPTY);
}
iType=XMLP._ELM_EMP;
iDE--;
}
iDE=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,iB,iDE);
if(iE-iB!=1){
if(SAXStrings.indexOfNonWhitespace(this.m_xml,iB,iDE)!=iB){
return this._setErr(XMLP.ERR_ELM_NAME);
}
}
this._clearAttributes();
iNE=SAXStrings.indexOfWhitespace(this.m_xml,iB,iDE);
if(iNE==-1){
iNE=iDE+1;
}else{
this.m_iP=iNE;
while(this.m_iP<iDE){
if(this.m_iP==iLast){
return this._setErr(XMLP.ERR_INFINITELOOP);
}
iLast=this.m_iP;
iRet=this._parseAttribute(this.m_iP,iDE);
if(iRet==XMLP._ERROR){
return iRet;
}
}
}
strN=this.m_xml.substring(iB,iNE);
if(strN.indexOf("<")!=-1){
return this._setErr(XMLP.ERR_ELM_LT_NAME);
}
this.m_name=strN;
this.m_iP=iE+1;
return iType;
};
XMLP.prototype._parseEntity=function(iB){
var iE=this.m_xml.indexOf(";",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_ENTITY);
}
this.m_iP=iE+1;
return this._replaceEntity(this.m_xml,iB,iE);
};
XMLP.prototype._parsePI=function(iB){
var iE,iTB,iTE,iCB,iCE;
iE=this.m_xml.indexOf("?>",iB);
if(iE==-1){
return this._setErr(XMLP.ERR_CLOSE_PI);
}
iTB=SAXStrings.indexOfNonWhitespace(this.m_xml,iB,iE);
if(iTB==-1){
return this._setErr(XMLP.ERR_PI_TARGET);
}
iTE=SAXStrings.indexOfWhitespace(this.m_xml,iTB,iE);
if(iTE==-1){
iTE=iE;
}
iCB=SAXStrings.indexOfNonWhitespace(this.m_xml,iTE,iE);
if(iCB==-1){
iCB=iE;
}
iCE=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,iCB,iE);
if(iCE==-1){
iCE=iE-1;
}
this.m_name=this.m_xml.substring(iTB,iTE);
this._setContent(XMLP._CONT_XML,iCB,iCE+1);
this.m_iP=iE+2;
return XMLP._PI;
};
XMLP.prototype._parseText=function(iB){
var iE,iEE;
iE=this.m_xml.indexOf("<",iB);
if(iE==-1){
iE=this.m_xml.length;
}
iEE=this.m_xml.indexOf("&",iB);
if((iEE!=-1)&&(iEE<=iE)){
iE=iEE;
}
this._setContent(XMLP._CONT_XML,iB,iE);
this.m_iP=iE;
return XMLP._TEXT;
};
XMLP.prototype._replaceEntities=function(strD,iB,iE){
if(SAXStrings.isEmpty(strD)){
return "";
}
iB=iB||0;
iE=iE||strD.length;
var iEB,iEE,strRet="";
iEB=strD.indexOf("&",iB);
iEE=iB;
while((iEB>0)&&(iEB<iE)){
strRet+=strD.substring(iEE,iEB);
iEE=strD.indexOf(";",iEB)+1;
if((iEE==0)||(iEE>iE)){
return this._setErr(XMLP.ERR_CLOSE_ENTITY);
}
iRet=this._replaceEntity(strD,iEB+1,iEE-1);
if(iRet==XMLP._ERROR){
return iRet;
}
strRet+=this.m_cAlt;
iEB=strD.indexOf("&",iEE);
}
if(iEE!=iE){
strRet+=strD.substring(iEE,iE);
}
this._setContent(XMLP._CONT_ALT,strRet);
return XMLP._ENTITY;
};
XMLP.prototype._replaceEntity=function(strD,iB,iE){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
switch(strD.substring(iB,iE)){
case "amp":
strEnt="&";
break;
case "lt":
strEnt="<";
break;
case "gt":
strEnt=">";
break;
case "apos":
strEnt="'";
break;
case "quot":
strEnt="\"";
break;
default:
if(strD.charAt(iB)=="#"){
strEnt=String.fromCharCode(parseInt(strD.substring(iB+1,iE)));
}else{
return this._setErr(XMLP.ERR_ENTITY_UNKNOWN);
}
break;
}
this._setContent(XMLP._CONT_ALT,strEnt);
return XMLP._ENTITY;
};
XMLP.prototype._setContent=function(iSrc){
var args=arguments;
if(XMLP._CONT_XML==iSrc){
this.m_cAlt=null;
this.m_cB=args[1];
this.m_cE=args[2];
}else{
this.m_cAlt=args[1];
this.m_cB=0;
this.m_cE=args[1].length;
}
this.m_cSrc=iSrc;
};
XMLP.prototype._setErr=function(iErr){
var _3fdb=XMLP._errs[iErr];
this.m_cAlt=_3fdb;
this.m_cB=0;
this.m_cE=_3fdb.length;
this.m_cSrc=XMLP._CONT_ALT;
return XMLP._ERROR;
};
SAXDriver=function(){
this.m_hndDoc=null;
this.m_hndErr=null;
this.m_hndLex=null;
};
SAXDriver.DOC_B=1;
SAXDriver.DOC_E=2;
SAXDriver.ELM_B=3;
SAXDriver.ELM_E=4;
SAXDriver.CHARS=5;
SAXDriver.PI=6;
SAXDriver.CD_B=7;
SAXDriver.CD_E=8;
SAXDriver.CMNT=9;
SAXDriver.DTD_B=10;
SAXDriver.DTD_E=11;
SAXDriver.prototype.parse=function(strD){
var _3fdd=new XMLP(strD);
if(this.m_hndDoc&&this.m_hndDoc.setDocumentLocator){
this.m_hndDoc.setDocumentLocator(this);
}
this.m_parser=_3fdd;
this.m_bErr=false;
if(!this.m_bErr){
this._fireEvent(SAXDriver.DOC_B);
}
this._parseLoop();
if(!this.m_bErr){
this._fireEvent(SAXDriver.DOC_E);
}
this.m_xml=null;
this.m_iP=0;
};
SAXDriver.prototype.setDocumentHandler=function(hnd){
this.m_hndDoc=hnd;
};
SAXDriver.prototype.setErrorHandler=function(hnd){
this.m_hndErr=hnd;
};
SAXDriver.prototype.setLexicalHandler=function(hnd){
this.m_hndLex=hnd;
};
SAXDriver.prototype.getColumnNumber=function(){
return this.m_parser.getColumnNumber();
};
SAXDriver.prototype.getLineNumber=function(){
return this.m_parser.getLineNumber();
};
SAXDriver.prototype.getMessage=function(){
return this.m_strErrMsg;
};
SAXDriver.prototype.getPublicId=function(){
return null;
};
SAXDriver.prototype.getSystemId=function(){
return null;
};
SAXDriver.prototype.getLength=function(){
return this.m_parser.getAttributeCount();
};
SAXDriver.prototype.getName=function(index){
return this.m_parser.getAttributeName(index);
};
SAXDriver.prototype.getValue=function(index){
return this.m_parser.getAttributeValue(index);
};
SAXDriver.prototype.getValueByName=function(name){
return this.m_parser.getAttributeValueByName(name);
};
SAXDriver.prototype._fireError=function(_3fe4){
this.m_strErrMsg=_3fe4;
this.m_bErr=true;
if(this.m_hndErr&&this.m_hndErr.fatalError){
this.m_hndErr.fatalError(this);
}
};
SAXDriver.prototype._fireEvent=function(iEvt){
var hnd,func,args=arguments,iLen=args.length-1;
if(this.m_bErr){
return;
}
if(SAXDriver.DOC_B==iEvt){
func="startDocument";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.DOC_E==iEvt){
func="endDocument";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.ELM_B==iEvt){
func="startElement";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.ELM_E==iEvt){
func="endElement";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.CHARS==iEvt){
func="characters";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.PI==iEvt){
func="processingInstruction";
hnd=this.m_hndDoc;
}else{
if(SAXDriver.CD_B==iEvt){
func="startCDATA";
hnd=this.m_hndLex;
}else{
if(SAXDriver.CD_E==iEvt){
func="endCDATA";
hnd=this.m_hndLex;
}else{
if(SAXDriver.CMNT==iEvt){
func="comment";
hnd=this.m_hndLex;
}
}
}
}
}
}
}
}
}
if(hnd&&hnd[func]){
if(0==iLen){
hnd[func]();
}else{
if(1==iLen){
hnd[func](args[1]);
}else{
if(2==iLen){
hnd[func](args[1],args[2]);
}else{
if(3==iLen){
hnd[func](args[1],args[2],args[3]);
}
}
}
}
}
};
SAXDriver.prototype._parseLoop=function(_3fe7){
var _3fe8,_3fe7;
_3fe7=this.m_parser;
while(!this.m_bErr){
_3fe8=_3fe7.next();
if(_3fe8==XMLP._ELM_B){
this._fireEvent(SAXDriver.ELM_B,_3fe7.getName(),this);
}else{
if(_3fe8==XMLP._ELM_E){
this._fireEvent(SAXDriver.ELM_E,_3fe7.getName());
}else{
if(_3fe8==XMLP._ELM_EMP){
this._fireEvent(SAXDriver.ELM_B,_3fe7.getName(),this);
this._fireEvent(SAXDriver.ELM_E,_3fe7.getName());
}else{
if(_3fe8==XMLP._TEXT){
this._fireEvent(SAXDriver.CHARS,_3fe7.getContent(),_3fe7.getContentBegin(),_3fe7.getContentEnd()-_3fe7.getContentBegin());
}else{
if(_3fe8==XMLP._ENTITY){
this._fireEvent(SAXDriver.CHARS,_3fe7.getContent(),_3fe7.getContentBegin(),_3fe7.getContentEnd()-_3fe7.getContentBegin());
}else{
if(_3fe8==XMLP._PI){
this._fireEvent(SAXDriver.PI,_3fe7.getName(),_3fe7.getContent().substring(_3fe7.getContentBegin(),_3fe7.getContentEnd()));
}else{
if(_3fe8==XMLP._CDATA){
this._fireEvent(SAXDriver.CD_B);
this._fireEvent(SAXDriver.CHARS,_3fe7.getContent(),_3fe7.getContentBegin(),_3fe7.getContentEnd()-_3fe7.getContentBegin());
this._fireEvent(SAXDriver.CD_E);
}else{
if(_3fe8==XMLP._COMMENT){
this._fireEvent(SAXDriver.CMNT,_3fe7.getContent(),_3fe7.getContentBegin(),_3fe7.getContentEnd()-_3fe7.getContentBegin());
}else{
if(_3fe8==XMLP._DTD){
}else{
if(_3fe8==XMLP._ERROR){
this._fireError(_3fe7.getContent());
}else{
if(_3fe8==XMLP._NONE){
return;
}
}
}
}
}
}
}
}
}
}
}
}
};
SAXStrings=function(){
};
SAXStrings.WHITESPACE=" \t\n\r";
SAXStrings.QUOTES="\"'";
SAXStrings.getColumnNumber=function(strD,iP){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iP=iP||strD.length;
var arrD=strD.substring(0,iP).split("\n");
var _3fec=arrD[arrD.length-1];
arrD.length--;
var _3fed=arrD.join("\n").length;
return iP-_3fed;
};
SAXStrings.getLineNumber=function(strD,iP){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iP=iP||strD.length;
return strD.substring(0,iP).split("\n").length;
};
SAXStrings.indexOfNonWhitespace=function(strD,iB,iE){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iB;i<iE;i++){
if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i))==-1){
return i;
}
}
return -1;
};
SAXStrings.indexOfWhitespace=function(strD,iB,iE){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iB;i<iE;i++){
if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i))!=-1){
return i;
}
}
return -1;
};
SAXStrings.isEmpty=function(strD){
return (strD==null)||(strD.length==0);
};
SAXStrings.lastIndexOfNonWhitespace=function(strD,iB,iE){
if(SAXStrings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iE-1;i>=iB;i--){
if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i))==-1){
return i;
}
}
return -1;
};
SAXStrings.replace=function(strD,iB,iE,strF,strR){
if(SAXStrings.isEmpty(strD)){
return "";
}
iB=iB||0;
iE=iE||strD.length;
return strD.substring(iB,iE).split(strF).join(strR);
};
Stack=function(){
this.m_arr=new Array();
};
Stack.prototype.clear=function(){
this.m_arr=new Array();
};
Stack.prototype.count=function(){
return this.m_arr.length;
};
Stack.prototype.destroy=function(){
this.m_arr=null;
};
Stack.prototype.peek=function(){
if(this.m_arr.length==0){
return null;
}
return this.m_arr[this.m_arr.length-1];
};
Stack.prototype.pop=function(){
if(this.m_arr.length==0){
return null;
}
var o=this.m_arr[this.m_arr.length-1];
this.m_arr.length--;
return o;
};
Stack.prototype.push=function(o){
this.m_arr[this.m_arr.length]=o;
};
function isEmpty(str){
return (str==null)||(str.length==0);
}
function trim(_4005,_4006,_4007){
if(isEmpty(_4005)){
return "";
}
if(_4006==null){
_4006=true;
}
if(_4007==null){
_4007=true;
}
var left=0;
var right=0;
var i=0;
var k=0;
if(_4006==true){
while((i<_4005.length)&&(whitespace.indexOf(_4005.charAt(i++))!=-1)){
left++;
}
}
if(_4007==true){
k=_4005.length-1;
while((k>=left)&&(whitespace.indexOf(_4005.charAt(k--))!=-1)){
right++;
}
}
return _4005.substring(left,_4005.length-right);
}
function __escapeString(str){
var _400d=/&/g;
var _400e=/</g;
var _400f=/>/g;
var _4010=/"/g;
var _4011=/'/g;
str=str.replace(_400d,"&amp;");
str=str.replace(_400e,"&lt;");
str=str.replace(_400f,"&gt;");
str=str.replace(_4010,"&quot;");
str=str.replace(_4011,"&apos;");
return str;
}
function __unescapeString(str){
var _4013=/&amp;/g;
var _4014=/&lt;/g;
var _4015=/&gt;/g;
var _4016=/&quot;/g;
var _4017=/&apos;/g;
str=str.replace(_4013,"&");
str=str.replace(_4014,"<");
str=str.replace(_4015,">");
str=str.replace(_4016,"\"");
str=str.replace(_4017,"'");
return str;
}
function addClass(_42f8,_42f9){
if(_42f8){
if(_42f8.indexOf("|"+_42f9+"|")<0){
_42f8+=_42f9+"|";
}
}else{
_42f8="|"+_42f9+"|";
}
return _42f8;
}
DOMException=function(code){
this._class=addClass(this._class,"DOMException");
this.code=code;
};
DOMException.INDEX_SIZE_ERR=1;
DOMException.DOMSTRING_SIZE_ERR=2;
DOMException.HIERARCHY_REQUEST_ERR=3;
DOMException.WRONG_DOCUMENT_ERR=4;
DOMException.INVALID_CHARACTER_ERR=5;
DOMException.NO_DATA_ALLOWED_ERR=6;
DOMException.NO_MODIFICATION_ALLOWED_ERR=7;
DOMException.NOT_FOUND_ERR=8;
DOMException.NOT_SUPPORTED_ERR=9;
DOMException.INUSE_ATTRIBUTE_ERR=10;
DOMException.INVALID_STATE_ERR=11;
DOMException.SYNTAX_ERR=12;
DOMException.INVALID_MODIFICATION_ERR=13;
DOMException.NAMESPACE_ERR=14;
DOMException.INVALID_ACCESS_ERR=15;
DOMImplementation=function(){
this._class=addClass(this._class,"DOMImplementation");
this._p=null;
this.preserveWhiteSpace=false;
this.namespaceAware=true;
this.errorChecking=true;
};
DOMImplementation.prototype.escapeString=function DOMNode__escapeString(str){
return __escapeString(str);
};
DOMImplementation.prototype.unescapeString=function DOMNode__unescapeString(str){
return __unescapeString(str);
};
DOMImplementation.prototype.hasFeature=function DOMImplementation_hasFeature(_42fd,_42fe){
var ret=false;
if(_42fd.toLowerCase()=="xml"){
ret=(!_42fe||(_42fe=="1.0")||(_42fe=="2.0"));
}else{
if(_42fd.toLowerCase()=="core"){
ret=(!_42fe||(_42fe=="2.0"));
}
}
return ret;
};
DOMImplementation.prototype.loadXML=function DOMImplementation_loadXML(_4300){
var _4301;
try{
_4301=new XMLP(_4300);
}
catch(e){
alert("Error Creating the SAX Parser. Did you include xmlsax.js or tinyxmlsax.js in your web page?\nThe SAX parser is needed to populate XML for <SCRIPT>'s W3C DOM Parser with data.");
}
var doc=new DOMDocument(this);
this._parseLoop(doc,_4301);
doc._parseComplete=true;
return doc;
};
DOMImplementation.prototype.translateErrCode=function DOMImplementation_translateErrCode(code){
var msg="";
switch(code){
case DOMException.INDEX_SIZE_ERR:
msg="INDEX_SIZE_ERR: Index out of bounds";
break;
case DOMException.DOMSTRING_SIZE_ERR:
msg="DOMSTRING_SIZE_ERR: The resulting string is too long to fit in a DOMString";
break;
case DOMException.HIERARCHY_REQUEST_ERR:
msg="HIERARCHY_REQUEST_ERR: The Node can not be inserted at this location";
break;
case DOMException.WRONG_DOCUMENT_ERR:
msg="WRONG_DOCUMENT_ERR: The source and the destination Documents are not the same";
break;
case DOMException.INVALID_CHARACTER_ERR:
msg="INVALID_CHARACTER_ERR: The string contains an invalid character";
break;
case DOMException.NO_DATA_ALLOWED_ERR:
msg="NO_DATA_ALLOWED_ERR: This Node / NodeList does not support data";
break;
case DOMException.NO_MODIFICATION_ALLOWED_ERR:
msg="NO_MODIFICATION_ALLOWED_ERR: This object cannot be modified";
break;
case DOMException.NOT_FOUND_ERR:
msg="NOT_FOUND_ERR: The item cannot be found";
break;
case DOMException.NOT_SUPPORTED_ERR:
msg="NOT_SUPPORTED_ERR: This implementation does not support function";
break;
case DOMException.INUSE_ATTRIBUTE_ERR:
msg="INUSE_ATTRIBUTE_ERR: The Attribute has already been assigned to another Element";
break;
case DOMException.INVALID_STATE_ERR:
msg="INVALID_STATE_ERR: The object is no longer usable";
break;
case DOMException.SYNTAX_ERR:
msg="SYNTAX_ERR: Syntax error";
break;
case DOMException.INVALID_MODIFICATION_ERR:
msg="INVALID_MODIFICATION_ERR: Cannot change the type of the object";
break;
case DOMException.NAMESPACE_ERR:
msg="NAMESPACE_ERR: The namespace declaration is incorrect";
break;
case DOMException.INVALID_ACCESS_ERR:
msg="INVALID_ACCESS_ERR: The object does not support this function";
break;
default:
msg="UNKNOWN: Unknown Exception Code ("+code+")";
}
return msg;
};
DOMImplementation.prototype._parseLoop=function DOMImplementation__parseLoop(doc,p){
var iEvt,iNode,iAttr,strName;
iNodeParent=doc;
var _4308=0;
var _4309=new Array();
var _430a=new Array();
if(this.namespaceAware){
var iNS=doc.createNamespace("");
iNS.setValue("http://www.w3.org/2000/xmlns/");
doc._namespaces.setNamedItem(iNS);
}
while(true){
iEvt=p.next();
if(iEvt==XMLP._ELM_B){
var pName=p.getName();
pName=trim(pName,true,true);
if(!this.namespaceAware){
iNode=doc.createElement(p.getName());
for(var i=0;i<p.getAttributeCount();i++){
strName=p.getAttributeName(i);
iAttr=iNode.getAttributeNode(strName);
if(!iAttr){
iAttr=doc.createAttribute(strName);
}
iAttr.setValue(p.getAttributeValue(i));
iNode.setAttributeNode(iAttr);
}
}else{
iNode=doc.createElementNS("",p.getName());
iNode._namespaces=iNodeParent._namespaces._cloneNodes(iNode);
for(var i=0;i<p.getAttributeCount();i++){
strName=p.getAttributeName(i);
if(this._isNamespaceDeclaration(strName)){
var _430e=this._parseNSName(strName);
if(strName!="xmlns"){
iNS=doc.createNamespace(strName);
}else{
iNS=doc.createNamespace("");
}
iNS.setValue(p.getAttributeValue(i));
iNode._namespaces.setNamedItem(iNS);
}else{
iAttr=iNode.getAttributeNode(strName);
if(!iAttr){
iAttr=doc.createAttributeNS("",strName);
}
iAttr.setValue(p.getAttributeValue(i));
iNode.setAttributeNodeNS(iAttr);
if(this._isIdDeclaration(strName)){
iNode.id=p.getAttributeValue(i);
}
}
}
if(iNode._namespaces.getNamedItem(iNode.prefix)){
iNode.namespaceURI=iNode._namespaces.getNamedItem(iNode.prefix).value;
}
for(var i=0;i<iNode.attributes.length;i++){
if(iNode.attributes.item(i).prefix!=""){
if(iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix)){
iNode.attributes.item(i).namespaceURI=iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix).value;
}
}
}
}
if(iNodeParent.nodeType==DOMNode.DOCUMENT_NODE){
iNodeParent.documentElement=iNode;
}
iNodeParent.appendChild(iNode);
iNodeParent=iNode;
}else{
if(iEvt==XMLP._ELM_E){
iNodeParent=iNodeParent.parentNode;
}else{
if(iEvt==XMLP._ELM_EMP){
pName=p.getName();
pName=trim(pName,true,true);
if(!this.namespaceAware){
iNode=doc.createElement(pName);
for(var i=0;i<p.getAttributeCount();i++){
strName=p.getAttributeName(i);
iAttr=iNode.getAttributeNode(strName);
if(!iAttr){
iAttr=doc.createAttribute(strName);
}
iAttr.setValue(p.getAttributeValue(i));
iNode.setAttributeNode(iAttr);
}
}else{
iNode=doc.createElementNS("",p.getName());
iNode._namespaces=iNodeParent._namespaces._cloneNodes(iNode);
for(var i=0;i<p.getAttributeCount();i++){
strName=p.getAttributeName(i);
if(this._isNamespaceDeclaration(strName)){
var _430e=this._parseNSName(strName);
if(strName!="xmlns"){
iNS=doc.createNamespace(strName);
}else{
iNS=doc.createNamespace("");
}
iNS.setValue(p.getAttributeValue(i));
iNode._namespaces.setNamedItem(iNS);
}else{
iAttr=iNode.getAttributeNode(strName);
if(!iAttr){
iAttr=doc.createAttributeNS("",strName);
}
iAttr.setValue(p.getAttributeValue(i));
iNode.setAttributeNodeNS(iAttr);
if(this._isIdDeclaration(strName)){
iNode.id=p.getAttributeValue(i);
}
}
}
if(iNode._namespaces.getNamedItem(iNode.prefix)){
iNode.namespaceURI=iNode._namespaces.getNamedItem(iNode.prefix).value;
}
for(var i=0;i<iNode.attributes.length;i++){
if(iNode.attributes.item(i).prefix!=""){
if(iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix)){
iNode.attributes.item(i).namespaceURI=iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix).value;
}
}
}
}
if(iNodeParent.nodeType==DOMNode.DOCUMENT_NODE){
iNodeParent.documentElement=iNode;
}
iNodeParent.appendChild(iNode);
}else{
if(iEvt==XMLP._TEXT||iEvt==XMLP._ENTITY){
var _430f=p.getContent().substring(p.getContentBegin(),p.getContentEnd());
if(!this.preserveWhiteSpace){
if(trim(_430f,true,true)==""){
_430f="";
}
}
if(_430f.length>0){
var _4310=doc.createTextNode(_430f);
iNodeParent.appendChild(_4310);
if(iEvt==XMLP._ENTITY){
_4309[_4309.length]=_4310;
}else{
_430a[_430a.length]=_4310;
}
}
}else{
if(iEvt==XMLP._PI){
iNodeParent.appendChild(doc.createProcessingInstruction(p.getName(),p.getContent().substring(p.getContentBegin(),p.getContentEnd())));
}else{
if(iEvt==XMLP._CDATA){
_430f=p.getContent().substring(p.getContentBegin(),p.getContentEnd());
if(!this.preserveWhiteSpace){
_430f=trim(_430f,true,true);
_430f.replace(/ +/g," ");
}
if(_430f.length>0){
iNodeParent.appendChild(doc.createCDATASection(_430f));
}
}else{
if(iEvt==XMLP._COMMENT){
var _430f=p.getContent().substring(p.getContentBegin(),p.getContentEnd());
if(!this.preserveWhiteSpace){
_430f=trim(_430f,true,true);
_430f.replace(/ +/g," ");
}
if(_430f.length>0){
iNodeParent.appendChild(doc.createComment(_430f));
}
}else{
if(iEvt==XMLP._DTD){
}else{
if(iEvt==XMLP._ERROR){
throw (new DOMException(DOMException.SYNTAX_ERR));
}else{
if(iEvt==XMLP._NONE){
if(iNodeParent==doc){
break;
}else{
throw (new DOMException(DOMException.SYNTAX_ERR));
}
}
}
}
}
}
}
}
}
}
}
}
var _4311=_4309.length;
for(intLoop=0;intLoop<_4311;intLoop++){
var _4312=_4309[intLoop];
var _4313=_4312.getParentNode();
if(_4313){
_4313.normalize();
if(!this.preserveWhiteSpace){
var _4314=_4313.getChildNodes();
var _4315=_4314.getLength();
for(intLoop2=0;intLoop2<_4315;intLoop2++){
var child=_4314.item(intLoop2);
if(child.getNodeType()==DOMNode.TEXT_NODE){
var _4317=child.getData();
_4317=trim(_4317,true,true);
_4317.replace(/ +/g," ");
child.setData(_4317);
}
}
}
}
}
if(!this.preserveWhiteSpace){
var _4311=_430a.length;
for(intLoop=0;intLoop<_4311;intLoop++){
var node=_430a[intLoop];
if(node.getParentNode()!=null){
var _4319=node.getData();
_4319=trim(_4319,true,true);
_4319.replace(/ +/g," ");
node.setData(_4319);
}
}
}
};
DOMImplementation.prototype._isNamespaceDeclaration=function DOMImplementation__isNamespaceDeclaration(_431a){
return (_431a.indexOf("xmlns")>-1);
};
DOMImplementation.prototype._isIdDeclaration=function DOMImplementation__isIdDeclaration(_431b){
return (_431b.toLowerCase()=="id");
};
DOMImplementation.prototype._isValidName=function DOMImplementation__isValidName(name){
return name.match(re_validName);
};
re_validName=/^[a-zA-Z_:][a-zA-Z0-9\.\-_:]*$/;
DOMImplementation.prototype._isValidString=function DOMImplementation__isValidString(name){
return (name.search(re_invalidStringChars)<0);
};
re_invalidStringChars=/\x01|\x02|\x03|\x04|\x05|\x06|\x07|\x08|\x0B|\x0C|\x0E|\x0F|\x10|\x11|\x12|\x13|\x14|\x15|\x16|\x17|\x18|\x19|\x1A|\x1B|\x1C|\x1D|\x1E|\x1F|\x7F/;
DOMImplementation.prototype._parseNSName=function DOMImplementation__parseNSName(_431e){
var _431f=new Object();
_431f.prefix=_431e;
_431f.namespaceName="";
delimPos=_431e.indexOf(":");
if(delimPos>-1){
_431f.prefix=_431e.substring(0,delimPos);
_431f.namespaceName=_431e.substring(delimPos+1,_431e.length);
}
return _431f;
};
DOMImplementation.prototype._parseQName=function DOMImplementation__parseQName(_4320){
var _4321=new Object();
_4321.localName=_4320;
_4321.prefix="";
delimPos=_4320.indexOf(":");
if(delimPos>-1){
_4321.prefix=_4320.substring(0,delimPos);
_4321.localName=_4320.substring(delimPos+1,_4320.length);
}
return _4321;
};
DOMNodeList=function(_4322,_4323){
this._class=addClass(this._class,"DOMNodeList");
this._nodes=new Array();
this.length=0;
this.parentNode=_4323;
this.ownerDocument=_4322;
this._readonly=false;
};
DOMNodeList.prototype.getLength=function DOMNodeList_getLength(){
return this.length;
};
DOMNodeList.prototype.item=function DOMNodeList_item(index){
var ret=null;
if((index>=0)&&(index<this._nodes.length)){
ret=this._nodes[index];
}
return ret;
};
DOMNodeList.prototype._findItemIndex=function DOMNodeList__findItemIndex(id){
var ret=-1;
if(id>-1){
for(var i=0;i<this._nodes.length;i++){
if(this._nodes[i]._id==id){
ret=i;
break;
}
}
}
return ret;
};
DOMNodeList.prototype._insertBefore=function DOMNodeList__insertBefore(_4329,_432a){
if((_432a>=0)&&(_432a<this._nodes.length)){
var _432b=new Array();
_432b=this._nodes.slice(0,_432a);
if(_4329.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
_432b=_432b.concat(_4329.childNodes._nodes);
}else{
_432b[_432b.length]=_4329;
}
this._nodes=_432b.concat(this._nodes.slice(_432a));
this.length=this._nodes.length;
}
};
DOMNodeList.prototype._replaceChild=function DOMNodeList__replaceChild(_432c,_432d){
var ret=null;
if((_432d>=0)&&(_432d<this._nodes.length)){
ret=this._nodes[_432d];
if(_432c.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
var _432f=new Array();
_432f=this._nodes.slice(0,_432d);
_432f=_432f.concat(_432c.childNodes._nodes);
this._nodes=_432f.concat(this._nodes.slice(_432d+1));
}else{
this._nodes[_432d]=_432c;
}
}
return ret;
};
DOMNodeList.prototype._removeChild=function DOMNodeList__removeChild(_4330){
var ret=null;
if(_4330>-1){
ret=this._nodes[_4330];
var _4332=new Array();
_4332=this._nodes.slice(0,_4330);
this._nodes=_4332.concat(this._nodes.slice(_4330+1));
this.length=this._nodes.length;
}
return ret;
};
DOMNodeList.prototype._appendChild=function DOMNodeList__appendChild(_4333){
if(_4333.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
this._nodes=this._nodes.concat(_4333.childNodes._nodes);
}else{
this._nodes[this._nodes.length]=_4333;
}
this.length=this._nodes.length;
};
DOMNodeList.prototype._cloneNodes=function DOMNodeList__cloneNodes(deep,_4335){
var _4336=new DOMNodeList(this.ownerDocument,_4335);
for(var i=0;i<this._nodes.length;i++){
_4336._appendChild(this._nodes[i].cloneNode(deep));
}
return _4336;
};
DOMNodeList.prototype.toString=function DOMNodeList_toString(){
var ret="";
for(var i=0;i<this.length;i++){
ret+=this._nodes[i].toString();
}
return ret;
};
DOMNamedNodeMap=function(_433a,_433b){
this._class=addClass(this._class,"DOMNamedNodeMap");
this.DOMNodeList=DOMNodeList;
this.DOMNodeList(_433a,_433b);
};
DOMNamedNodeMap.prototype=new DOMNodeList;
DOMNamedNodeMap.prototype.getNamedItem=function DOMNamedNodeMap_getNamedItem(name){
var ret=null;
var _433e=this._findNamedItemIndex(name);
if(_433e>-1){
ret=this._nodes[_433e];
}
return ret;
};
DOMNamedNodeMap.prototype.setNamedItem=function DOMNamedNodeMap_setNamedItem(arg){
if(this.ownerDocument.implementation.errorChecking){
if(this.ownerDocument!=arg.ownerDocument){
throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
}
if(this._readonly||(this.parentNode&&this.parentNode._readonly)){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(arg.ownerElement&&(arg.ownerElement!=this.parentNode)){
throw (new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
}
}
var _4340=this._findNamedItemIndex(arg.name);
var ret=null;
if(_4340>-1){
ret=this._nodes[_4340];
if(this.ownerDocument.implementation.errorChecking&&ret._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}else{
this._nodes[_4340]=arg;
}
}else{
this._nodes[this.length]=arg;
}
this.length=this._nodes.length;
arg.ownerElement=this.parentNode;
return ret;
};
DOMNamedNodeMap.prototype.removeNamedItem=function DOMNamedNodeMap_removeNamedItem(name){
var ret=null;
if(this.ownerDocument.implementation.errorChecking&&(this._readonly||(this.parentNode&&this.parentNode._readonly))){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
var _4344=this._findNamedItemIndex(name);
if(this.ownerDocument.implementation.errorChecking&&(_4344<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
var _4345=this._nodes[_4344];
if(this.ownerDocument.implementation.errorChecking&&_4345._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
return this._removeChild(_4344);
};
DOMNamedNodeMap.prototype.getNamedItemNS=function DOMNamedNodeMap_getNamedItemNS(_4346,_4347){
var ret=null;
var _4349=this._findNamedItemNSIndex(_4346,_4347);
if(_4349>-1){
ret=this._nodes[_4349];
}
return ret;
};
DOMNamedNodeMap.prototype.setNamedItemNS=function DOMNamedNodeMap_setNamedItemNS(arg){
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly||(this.parentNode&&this.parentNode._readonly)){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.ownerDocument!=arg.ownerDocument){
throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
}
if(arg.ownerElement&&(arg.ownerElement!=this.parentNode)){
throw (new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
}
}
var _434b=this._findNamedItemNSIndex(arg.namespaceURI,arg.localName);
var ret=null;
if(_434b>-1){
ret=this._nodes[_434b];
if(this.ownerDocument.implementation.errorChecking&&ret._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}else{
this._nodes[_434b]=arg;
}
}else{
this._nodes[this.length]=arg;
}
this.length=this._nodes.length;
arg.ownerElement=this.parentNode;
return ret;
};
DOMNamedNodeMap.prototype.removeNamedItemNS=function DOMNamedNodeMap_removeNamedItemNS(_434d,_434e){
var ret=null;
if(this.ownerDocument.implementation.errorChecking&&(this._readonly||(this.parentNode&&this.parentNode._readonly))){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
var _4350=this._findNamedItemNSIndex(_434d,_434e);
if(this.ownerDocument.implementation.errorChecking&&(_4350<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
var _4351=this._nodes[_4350];
if(this.ownerDocument.implementation.errorChecking&&_4351._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
return this._removeChild(_4350);
};
DOMNamedNodeMap.prototype._findNamedItemIndex=function DOMNamedNodeMap__findNamedItemIndex(name){
var ret=-1;
for(var i=0;i<this._nodes.length;i++){
if(this._nodes[i].name==name){
ret=i;
break;
}
}
return ret;
};
DOMNamedNodeMap.prototype._findNamedItemNSIndex=function DOMNamedNodeMap__findNamedItemNSIndex(_4355,_4356){
var ret=-1;
if(_4356){
for(var i=0;i<this._nodes.length;i++){
if((this._nodes[i].namespaceURI==_4355)&&(this._nodes[i].localName==_4356)){
ret=i;
break;
}
}
}
return ret;
};
DOMNamedNodeMap.prototype._hasAttribute=function DOMNamedNodeMap__hasAttribute(name){
var ret=false;
var _435b=this._findNamedItemIndex(name);
if(_435b>-1){
ret=true;
}
return ret;
};
DOMNamedNodeMap.prototype._hasAttributeNS=function DOMNamedNodeMap__hasAttributeNS(_435c,_435d){
var ret=false;
var _435f=this._findNamedItemNSIndex(_435c,_435d);
if(_435f>-1){
ret=true;
}
return ret;
};
DOMNamedNodeMap.prototype._cloneNodes=function DOMNamedNodeMap__cloneNodes(_4360){
var _4361=new DOMNamedNodeMap(this.ownerDocument,_4360);
for(var i=0;i<this._nodes.length;i++){
_4361._appendChild(this._nodes[i].cloneNode(false));
}
return _4361;
};
DOMNamedNodeMap.prototype.toString=function DOMNamedNodeMap_toString(){
var ret="";
for(var i=0;i<this.length-1;i++){
ret+=this._nodes[i].toString()+" ";
}
if(this.length>0){
ret+=this._nodes[this.length-1].toString();
}
return ret;
};
DOMNamespaceNodeMap=function(_4365,_4366){
this._class=addClass(this._class,"DOMNamespaceNodeMap");
this.DOMNamedNodeMap=DOMNamedNodeMap;
this.DOMNamedNodeMap(_4365,_4366);
};
DOMNamespaceNodeMap.prototype=new DOMNamedNodeMap;
DOMNamespaceNodeMap.prototype._findNamedItemIndex=function DOMNamespaceNodeMap__findNamedItemIndex(_4367){
var ret=-1;
for(var i=0;i<this._nodes.length;i++){
if(this._nodes[i].localName==_4367){
ret=i;
break;
}
}
return ret;
};
DOMNamespaceNodeMap.prototype._cloneNodes=function DOMNamespaceNodeMap__cloneNodes(_436a){
var _436b=new DOMNamespaceNodeMap(this.ownerDocument,_436a);
for(var i=0;i<this._nodes.length;i++){
_436b._appendChild(this._nodes[i].cloneNode(false));
}
return _436b;
};
DOMNamespaceNodeMap.prototype.toString=function DOMNamespaceNodeMap_toString(){
var ret="";
for(var ind=0;ind<this._nodes.length;ind++){
var ns=null;
try{
var ns=this.parentNode.parentNode._namespaces.getNamedItem(this._nodes[ind].localName);
}
catch(e){
break;
}
if(!(ns&&(""+ns.nodeValue==""+this._nodes[ind].nodeValue))){
ret+=this._nodes[ind].toString()+" ";
}
}
return ret;
};
DOMNode=function(_4370){
this._class=addClass(this._class,"DOMNode");
if(_4370){
this._id=_4370._genId();
}
this.namespaceURI="";
this.prefix="";
this.localName="";
this.nodeName="";
this.nodeValue="";
this.nodeType=0;
this.parentNode=null;
this.childNodes=new DOMNodeList(_4370,this);
this.firstChild=null;
this.lastChild=null;
this.previousSibling=null;
this.nextSibling=null;
this.attributes=new DOMNamedNodeMap(_4370,this);
this.ownerDocument=_4370;
this._namespaces=new DOMNamespaceNodeMap(_4370,this);
this._readonly=false;
};
DOMNode.ELEMENT_NODE=1;
DOMNode.ATTRIBUTE_NODE=2;
DOMNode.TEXT_NODE=3;
DOMNode.CDATA_SECTION_NODE=4;
DOMNode.ENTITY_REFERENCE_NODE=5;
DOMNode.ENTITY_NODE=6;
DOMNode.PROCESSING_INSTRUCTION_NODE=7;
DOMNode.COMMENT_NODE=8;
DOMNode.DOCUMENT_NODE=9;
DOMNode.DOCUMENT_TYPE_NODE=10;
DOMNode.DOCUMENT_FRAGMENT_NODE=11;
DOMNode.NOTATION_NODE=12;
DOMNode.NAMESPACE_NODE=13;
DOMNode.prototype.hasAttributes=function DOMNode_hasAttributes(){
if(this.attributes.length==0){
return false;
}else{
return true;
}
};
DOMNode.prototype.getNodeName=function DOMNode_getNodeName(){
return this.nodeName;
};
DOMNode.prototype.getNodeValue=function DOMNode_getNodeValue(){
return this.nodeValue;
};
DOMNode.prototype.setNodeValue=function DOMNode_setNodeValue(_4371){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
this.nodeValue=_4371;
};
DOMNode.prototype.getNodeType=function DOMNode_getNodeType(){
return this.nodeType;
};
DOMNode.prototype.getParentNode=function DOMNode_getParentNode(){
return this.parentNode;
};
DOMNode.prototype.getChildNodes=function DOMNode_getChildNodes(){
return this.childNodes;
};
DOMNode.prototype.getFirstChild=function DOMNode_getFirstChild(){
return this.firstChild;
};
DOMNode.prototype.getLastChild=function DOMNode_getLastChild(){
return this.lastChild;
};
DOMNode.prototype.getPreviousSibling=function DOMNode_getPreviousSibling(){
return this.previousSibling;
};
DOMNode.prototype.getNextSibling=function DOMNode_getNextSibling(){
return this.nextSibling;
};
DOMNode.prototype.getAttributes=function DOMNode_getAttributes(){
return this.attributes;
};
DOMNode.prototype.getOwnerDocument=function DOMNode_getOwnerDocument(){
return this.ownerDocument;
};
DOMNode.prototype.getNamespaceURI=function DOMNode_getNamespaceURI(){
return this.namespaceURI;
};
DOMNode.prototype.getPrefix=function DOMNode_getPrefix(){
return this.prefix;
};
DOMNode.prototype.setPrefix=function DOMNode_setPrefix(_4372){
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(!this.ownerDocument.implementation._isValidName(_4372)){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
if(!this.ownerDocument._isValidNamespace(this.namespaceURI,_4372+":"+this.localName)){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
if((_4372=="xmlns")&&(this.namespaceURI!="http://www.w3.org/2000/xmlns/")){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
if((_4372=="")&&(this.localName=="xmlns")){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
}
this.prefix=_4372;
if(this.prefix!=""){
this.nodeName=this.prefix+":"+this.localName;
}else{
this.nodeName=this.localName;
}
};
DOMNode.prototype.getLocalName=function DOMNode_getLocalName(){
return this.localName;
};
DOMNode.prototype.insertBefore=function DOMNode_insertBefore(_4373,_4374){
var _4375;
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.ownerDocument!=_4373.ownerDocument){
throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
}
if(this._isAncestor(_4373)){
throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
}
}
if(_4374){
var _4376=this.childNodes._findItemIndex(_4374._id);
if(this.ownerDocument.implementation.errorChecking&&(_4376<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
var _4377=_4373.parentNode;
if(_4377){
_4377.removeChild(_4373);
}
this.childNodes._insertBefore(_4373,this.childNodes._findItemIndex(_4374._id));
_4375=_4374.previousSibling;
if(_4373.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
if(_4373.childNodes._nodes.length>0){
for(var ind=0;ind<_4373.childNodes._nodes.length;ind++){
_4373.childNodes._nodes[ind].parentNode=this;
}
_4374.previousSibling=_4373.childNodes._nodes[_4373.childNodes._nodes.length-1];
}
}else{
_4373.parentNode=this;
_4374.previousSibling=_4373;
}
}else{
_4375=this.lastChild;
this.appendChild(_4373);
}
if(_4373.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
if(_4373.childNodes._nodes.length>0){
if(_4375){
_4375.nextSibling=_4373.childNodes._nodes[0];
}else{
this.firstChild=_4373.childNodes._nodes[0];
}
_4373.childNodes._nodes[0].previousSibling=_4375;
_4373.childNodes._nodes[_4373.childNodes._nodes.length-1].nextSibling=_4374;
}
}else{
if(_4375){
_4375.nextSibling=_4373;
}else{
this.firstChild=_4373;
}
_4373.previousSibling=_4375;
_4373.nextSibling=_4374;
}
return _4373;
};
DOMNode.prototype.replaceChild=function DOMNode_replaceChild(_4379,_437a){
var ret=null;
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.ownerDocument!=_4379.ownerDocument){
throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
}
if(this._isAncestor(_4379)){
throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
}
}
var index=this.childNodes._findItemIndex(_437a._id);
if(this.ownerDocument.implementation.errorChecking&&(index<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
var _437d=_4379.parentNode;
if(_437d){
_437d.removeChild(_4379);
}
ret=this.childNodes._replaceChild(_4379,index);
if(_4379.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
if(_4379.childNodes._nodes.length>0){
for(var ind=0;ind<_4379.childNodes._nodes.length;ind++){
_4379.childNodes._nodes[ind].parentNode=this;
}
if(_437a.previousSibling){
_437a.previousSibling.nextSibling=_4379.childNodes._nodes[0];
}else{
this.firstChild=_4379.childNodes._nodes[0];
}
if(_437a.nextSibling){
_437a.nextSibling.previousSibling=_4379;
}else{
this.lastChild=_4379.childNodes._nodes[_4379.childNodes._nodes.length-1];
}
_4379.childNodes._nodes[0].previousSibling=_437a.previousSibling;
_4379.childNodes._nodes[_4379.childNodes._nodes.length-1].nextSibling=_437a.nextSibling;
}
}else{
_4379.parentNode=this;
if(_437a.previousSibling){
_437a.previousSibling.nextSibling=_4379;
}else{
this.firstChild=_4379;
}
if(_437a.nextSibling){
_437a.nextSibling.previousSibling=_4379;
}else{
this.lastChild=_4379;
}
_4379.previousSibling=_437a.previousSibling;
_4379.nextSibling=_437a.nextSibling;
}
return ret;
};
DOMNode.prototype.removeChild=function DOMNode_removeChild(_437f){
if(this.ownerDocument.implementation.errorChecking&&(this._readonly||_437f._readonly)){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
var _4380=this.childNodes._findItemIndex(_437f._id);
if(this.ownerDocument.implementation.errorChecking&&(_4380<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
this.childNodes._removeChild(_4380);
_437f.parentNode=null;
if(_437f.previousSibling){
_437f.previousSibling.nextSibling=_437f.nextSibling;
}else{
this.firstChild=_437f.nextSibling;
}
if(_437f.nextSibling){
_437f.nextSibling.previousSibling=_437f.previousSibling;
}else{
this.lastChild=_437f.previousSibling;
}
_437f.previousSibling=null;
_437f.nextSibling=null;
return _437f;
};
DOMNode.prototype.appendChild=function DOMNode_appendChild(_4381){
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.ownerDocument!=_4381.ownerDocument){
throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
}
if(this._isAncestor(_4381)){
throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
}
}
var _4382=_4381.parentNode;
if(_4382){
_4382.removeChild(_4381);
}
this.childNodes._appendChild(_4381);
if(_4381.nodeType==DOMNode.DOCUMENT_FRAGMENT_NODE){
if(_4381.childNodes._nodes.length>0){
for(var ind=0;ind<_4381.childNodes._nodes.length;ind++){
_4381.childNodes._nodes[ind].parentNode=this;
}
if(this.lastChild){
this.lastChild.nextSibling=_4381.childNodes._nodes[0];
_4381.childNodes._nodes[0].previousSibling=this.lastChild;
this.lastChild=_4381.childNodes._nodes[_4381.childNodes._nodes.length-1];
}else{
this.lastChild=_4381.childNodes._nodes[_4381.childNodes._nodes.length-1];
this.firstChild=_4381.childNodes._nodes[0];
}
}
}else{
_4381.parentNode=this;
if(this.lastChild){
this.lastChild.nextSibling=_4381;
_4381.previousSibling=this.lastChild;
this.lastChild=_4381;
}else{
this.lastChild=_4381;
this.firstChild=_4381;
}
}
return _4381;
};
DOMNode.prototype.hasChildNodes=function DOMNode_hasChildNodes(){
return (this.childNodes.length>0);
};
DOMNode.prototype.cloneNode=function DOMNode_cloneNode(deep){
try{
return this.ownerDocument.importNode(this,deep);
}
catch(e){
return null;
}
};
DOMNode.prototype.normalize=function DOMNode_normalize(){
var inode;
var _4386=new DOMNodeList();
if(this.nodeType==DOMNode.ELEMENT_NODE||this.nodeType==DOMNode.DOCUMENT_NODE){
var _4387=null;
for(var i=0;i<this.childNodes.length;i++){
inode=this.childNodes.item(i);
if(inode.nodeType==DOMNode.TEXT_NODE){
if(inode.length<1){
_4386._appendChild(inode);
}else{
if(_4387){
_4387.appendData(inode.data);
_4386._appendChild(inode);
}else{
_4387=inode;
}
}
}else{
_4387=null;
inode.normalize();
}
}
for(var i=0;i<_4386.length;i++){
inode=_4386.item(i);
inode.parentNode.removeChild(inode);
}
}
};
DOMNode.prototype.isSupported=function DOMNode_isSupported(_4389,_438a){
return this.ownerDocument.implementation.hasFeature(_4389,_438a);
};
DOMNode.prototype.getElementsByTagName=function DOMNode_getElementsByTagName(_438b){
return this._getElementsByTagNameRecursive(_438b,new DOMNodeList(this.ownerDocument));
};
DOMNode.prototype._getElementsByTagNameRecursive=function DOMNode__getElementsByTagNameRecursive(_438c,_438d){
if(this.nodeType==DOMNode.ELEMENT_NODE||this.nodeType==DOMNode.DOCUMENT_NODE){
if((this.nodeName==_438c)||(_438c=="*")){
_438d._appendChild(this);
}
for(var i=0;i<this.childNodes.length;i++){
_438d=this.childNodes.item(i)._getElementsByTagNameRecursive(_438c,_438d);
}
}
return _438d;
};
DOMNode.prototype.getXML=function DOMNode_getXML(){
return this.toString();
};
DOMNode.prototype.getElementsByTagNameNS=function DOMNode_getElementsByTagNameNS(_438f,_4390){
return this._getElementsByTagNameNSRecursive(_438f,_4390,new DOMNodeList(this.ownerDocument));
};
DOMNode.prototype._getElementsByTagNameNSRecursive=function DOMNode__getElementsByTagNameNSRecursive(_4391,_4392,_4393){
if(this.nodeType==DOMNode.ELEMENT_NODE||this.nodeType==DOMNode.DOCUMENT_NODE){
if(((this.namespaceURI==_4391)||(_4391=="*"))&&((this.localName==_4392)||(_4392=="*"))){
_4393._appendChild(this);
}
for(var i=0;i<this.childNodes.length;i++){
_4393=this.childNodes.item(i)._getElementsByTagNameNSRecursive(_4391,_4392,_4393);
}
}
return _4393;
};
DOMNode.prototype._isAncestor=function DOMNode__isAncestor(node){
return ((this==node)||((this.parentNode)&&(this.parentNode._isAncestor(node))));
};
DOMNode.prototype.importNode=function DOMNode_importNode(_4396,deep){
var _4398;
this.getOwnerDocument()._performingImportNodeOperation=true;
try{
if(_4396.nodeType==DOMNode.ELEMENT_NODE){
if(!this.ownerDocument.implementation.namespaceAware){
_4398=this.ownerDocument.createElement(_4396.tagName);
for(var i=0;i<_4396.attributes.length;i++){
_4398.setAttribute(_4396.attributes.item(i).name,_4396.attributes.item(i).value);
}
}else{
_4398=this.ownerDocument.createElementNS(_4396.namespaceURI,_4396.nodeName);
for(var i=0;i<_4396.attributes.length;i++){
_4398.setAttributeNS(_4396.attributes.item(i).namespaceURI,_4396.attributes.item(i).name,_4396.attributes.item(i).value);
}
for(var i=0;i<_4396._namespaces.length;i++){
_4398._namespaces._nodes[i]=this.ownerDocument.createNamespace(_4396._namespaces.item(i).localName);
_4398._namespaces._nodes[i].setValue(_4396._namespaces.item(i).value);
}
}
}else{
if(_4396.nodeType==DOMNode.ATTRIBUTE_NODE){
if(!this.ownerDocument.implementation.namespaceAware){
_4398=this.ownerDocument.createAttribute(_4396.name);
}else{
_4398=this.ownerDocument.createAttributeNS(_4396.namespaceURI,_4396.nodeName);
for(var i=0;i<_4396._namespaces.length;i++){
_4398._namespaces._nodes[i]=this.ownerDocument.createNamespace(_4396._namespaces.item(i).localName);
_4398._namespaces._nodes[i].setValue(_4396._namespaces.item(i).value);
}
}
_4398.setValue(_4396.value);
}else{
if(_4396.nodeType==DOMNode.DOCUMENT_FRAGMENT){
_4398=this.ownerDocument.createDocumentFragment();
}else{
if(_4396.nodeType==DOMNode.NAMESPACE_NODE){
_4398=this.ownerDocument.createNamespace(_4396.nodeName);
_4398.setValue(_4396.value);
}else{
if(_4396.nodeType==DOMNode.TEXT_NODE){
_4398=this.ownerDocument.createTextNode(_4396.data);
}else{
if(_4396.nodeType==DOMNode.CDATA_SECTION_NODE){
_4398=this.ownerDocument.createCDATASection(_4396.data);
}else{
if(_4396.nodeType==DOMNode.PROCESSING_INSTRUCTION_NODE){
_4398=this.ownerDocument.createProcessingInstruction(_4396.target,_4396.data);
}else{
if(_4396.nodeType==DOMNode.COMMENT_NODE){
_4398=this.ownerDocument.createComment(_4396.data);
}else{
throw (new DOMException(DOMException.NOT_SUPPORTED_ERR));
}
}
}
}
}
}
}
}
if(deep){
for(var i=0;i<_4396.childNodes.length;i++){
_4398.appendChild(this.ownerDocument.importNode(_4396.childNodes.item(i),true));
}
}
this.getOwnerDocument()._performingImportNodeOperation=false;
return _4398;
}
catch(eAny){
this.getOwnerDocument()._performingImportNodeOperation=false;
throw eAny;
}
};
DOMNode.prototype.__escapeString=function DOMNode__escapeString(str){
return __escapeString(str);
};
DOMNode.prototype.__unescapeString=function DOMNode__unescapeString(str){
return __unescapeString(str);
};
DOMDocument=function(_439c){
this._class=addClass(this._class,"DOMDocument");
this.DOMNode=DOMNode;
this.DOMNode(this);
this.doctype=null;
this.implementation=_439c;
this.documentElement=null;
this.all=new Array();
this.nodeName="#document";
this.nodeType=DOMNode.DOCUMENT_NODE;
this._id=0;
this._lastId=0;
this._parseComplete=false;
this.ownerDocument=this;
this._performingImportNodeOperation=false;
};
DOMDocument.prototype=new DOMNode;
DOMDocument.prototype.getDoctype=function DOMDocument_getDoctype(){
return this.doctype;
};
DOMDocument.prototype.getImplementation=function DOMDocument_implementation(){
return this.implementation;
};
DOMDocument.prototype.getDocumentElement=function DOMDocument_getDocumentElement(){
return this.documentElement;
};
DOMDocument.prototype.createElement=function DOMDocument_createElement(_439d){
if(this.ownerDocument.implementation.errorChecking&&(!this.ownerDocument.implementation._isValidName(_439d))){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
var node=new DOMElement(this);
node.tagName=_439d;
node.nodeName=_439d;
this.all[this.all.length]=node;
return node;
};
DOMDocument.prototype.createDocumentFragment=function DOMDocument_createDocumentFragment(){
var node=new DOMDocumentFragment(this);
return node;
};
DOMDocument.prototype.createTextNode=function DOMDocument_createTextNode(data){
var node=new DOMText(this);
node.data=data;
node.nodeValue=data;
node.length=data.length;
return node;
};
DOMDocument.prototype.createComment=function DOMDocument_createComment(data){
var node=new DOMComment(this);
node.data=data;
node.nodeValue=data;
node.length=data.length;
return node;
};
DOMDocument.prototype.createCDATASection=function DOMDocument_createCDATASection(data){
var node=new DOMCDATASection(this);
node.data=data;
node.nodeValue=data;
node.length=data.length;
return node;
};
DOMDocument.prototype.createProcessingInstruction=function DOMDocument_createProcessingInstruction(_43a6,data){
if(this.ownerDocument.implementation.errorChecking&&(!this.implementation._isValidName(_43a6))){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
var node=new DOMProcessingInstruction(this);
node.target=_43a6;
node.nodeName=_43a6;
node.data=data;
node.nodeValue=data;
node.length=data.length;
return node;
};
DOMDocument.prototype.createAttribute=function DOMDocument_createAttribute(name){
if(this.ownerDocument.implementation.errorChecking&&(!this.ownerDocument.implementation._isValidName(name))){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
var node=new DOMAttr(this);
node.name=name;
node.nodeName=name;
return node;
};
DOMDocument.prototype.createElementNS=function DOMDocument_createElementNS(_43ab,_43ac){
if(this.ownerDocument.implementation.errorChecking){
if(!this.ownerDocument._isValidNamespace(_43ab,_43ac)){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
if(!this.ownerDocument.implementation._isValidName(_43ac)){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
}
var node=new DOMElement(this);
var qname=this.implementation._parseQName(_43ac);
node.nodeName=_43ac;
node.namespaceURI=_43ab;
node.prefix=qname.prefix;
node.localName=qname.localName;
node.tagName=_43ac;
this.all[this.all.length]=node;
return node;
};
DOMDocument.prototype.createAttributeNS=function DOMDocument_createAttributeNS(_43af,_43b0){
if(this.ownerDocument.implementation.errorChecking){
if(!this.ownerDocument._isValidNamespace(_43af,_43b0,true)){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
if(!this.ownerDocument.implementation._isValidName(_43b0)){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
}
var node=new DOMAttr(this);
var qname=this.implementation._parseQName(_43b0);
node.nodeName=_43b0;
node.namespaceURI=_43af;
node.prefix=qname.prefix;
node.localName=qname.localName;
node.name=_43b0;
node.nodeValue="";
return node;
};
DOMDocument.prototype.createNamespace=function DOMDocument_createNamespace(_43b3){
var node=new DOMNamespace(this);
var qname=this.implementation._parseQName(_43b3);
node.nodeName=_43b3;
node.prefix=qname.prefix;
node.localName=qname.localName;
node.name=_43b3;
node.nodeValue="";
return node;
};
DOMDocument.prototype.getElementById=function DOMDocument_getElementById(_43b6){
retNode=null;
for(var i=0;i<this.all.length;i++){
var node=this.all[i];
if((node.id==_43b6)&&(node._isAncestor(node.ownerDocument.documentElement))){
retNode=node;
break;
}
}
return retNode;
};
DOMDocument.prototype._genId=function DOMDocument__genId(){
this._lastId+=1;
return this._lastId;
};
DOMDocument.prototype._isValidNamespace=function DOMDocument__isValidNamespace(_43b9,_43ba,_43bb){
if(this._performingImportNodeOperation==true){
return true;
}
var valid=true;
var qName=this.implementation._parseQName(_43ba);
if(this._parseComplete==true){
if(qName.localName.indexOf(":")>-1){
valid=false;
}
if((valid)&&(!_43bb)){
if(!_43b9){
valid=false;
}
}
if((valid)&&(qName.prefix=="")){
valid=false;
}
}
if((valid)&&(qName.prefix=="xml")&&(_43b9!="http://www.w3.org/XML/1998/namespace")){
valid=false;
}
return valid;
};
DOMDocument.prototype.toString=function DOMDocument_toString(){
return ""+this.childNodes;
};
DOMElement=function(_43be){
this._class=addClass(this._class,"DOMElement");
this.DOMNode=DOMNode;
this.DOMNode(_43be);
this.tagName="";
this.id="";
this.nodeType=DOMNode.ELEMENT_NODE;
};
DOMElement.prototype=new DOMNode;
DOMElement.prototype.getTagName=function DOMElement_getTagName(){
return this.tagName;
};
DOMElement.prototype.getAttribute=function DOMElement_getAttribute(name){
var ret="";
var attr=this.attributes.getNamedItem(name);
if(attr){
ret=attr.value;
}
return ret;
};
DOMElement.prototype.setAttribute=function DOMElement_setAttribute(name,value){
var attr=this.attributes.getNamedItem(name);
if(!attr){
attr=this.ownerDocument.createAttribute(name);
}
var value=new String(value);
if(this.ownerDocument.implementation.errorChecking){
if(attr._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(!this.ownerDocument.implementation._isValidString(value)){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
}
if(this.ownerDocument.implementation._isIdDeclaration(name)){
this.id=value;
}
attr.value=value;
attr.nodeValue=value;
if(value.length>0){
attr.specified=true;
}else{
attr.specified=false;
}
this.attributes.setNamedItem(attr);
};
DOMElement.prototype.removeAttribute=function DOMElement_removeAttribute(name){
return this.attributes.removeNamedItem(name);
};
DOMElement.prototype.getAttributeNode=function DOMElement_getAttributeNode(name){
return this.attributes.getNamedItem(name);
};
DOMElement.prototype.setAttributeNode=function DOMElement_setAttributeNode(_43c7){
if(this.ownerDocument.implementation._isIdDeclaration(_43c7.name)){
this.id=_43c7.value;
}
return this.attributes.setNamedItem(_43c7);
};
DOMElement.prototype.removeAttributeNode=function DOMElement_removeAttributeNode(_43c8){
if(this.ownerDocument.implementation.errorChecking&&_43c8._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
var _43c9=this.attributes._findItemIndex(_43c8._id);
if(this.ownerDocument.implementation.errorChecking&&(_43c9<0)){
throw (new DOMException(DOMException.NOT_FOUND_ERR));
}
return this.attributes._removeChild(_43c9);
};
DOMElement.prototype.getAttributeNS=function DOMElement_getAttributeNS(_43ca,_43cb){
var ret="";
var attr=this.attributes.getNamedItemNS(_43ca,_43cb);
if(attr){
ret=attr.value;
}
return ret;
};
DOMElement.prototype.setAttributeNS=function DOMElement_setAttributeNS(_43ce,_43cf,value){
var attr=this.attributes.getNamedItem(_43ce,_43cf);
if(!attr){
attr=this.ownerDocument.createAttributeNS(_43ce,_43cf);
}
var value=new String(value);
if(this.ownerDocument.implementation.errorChecking){
if(attr._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(!this.ownerDocument._isValidNamespace(_43ce,_43cf)){
throw (new DOMException(DOMException.NAMESPACE_ERR));
}
if(!this.ownerDocument.implementation._isValidString(value)){
throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
}
}
if(this.ownerDocument.implementation._isIdDeclaration(name)){
this.id=value;
}
attr.value=value;
attr.nodeValue=value;
if(value.length>0){
attr.specified=true;
}else{
attr.specified=false;
}
this.attributes.setNamedItemNS(attr);
};
DOMElement.prototype.removeAttributeNS=function DOMElement_removeAttributeNS(_43d2,_43d3){
return this.attributes.removeNamedItemNS(_43d2,_43d3);
};
DOMElement.prototype.getAttributeNodeNS=function DOMElement_getAttributeNodeNS(_43d4,_43d5){
return this.attributes.getNamedItemNS(_43d4,_43d5);
};
DOMElement.prototype.setAttributeNodeNS=function DOMElement_setAttributeNodeNS(_43d6){
if((_43d6.prefix=="")&&this.ownerDocument.implementation._isIdDeclaration(_43d6.name)){
this.id=_43d6.value;
}
return this.attributes.setNamedItemNS(_43d6);
};
DOMElement.prototype.hasAttribute=function DOMElement_hasAttribute(name){
return this.attributes._hasAttribute(name);
};
DOMElement.prototype.hasAttributeNS=function DOMElement_hasAttributeNS(_43d8,_43d9){
return this.attributes._hasAttributeNS(_43d8,_43d9);
};
DOMElement.prototype.toString=function DOMElement_toString(){
var ret="";
var ns=this._namespaces.toString();
if(ns.length>0){
ns=" "+ns;
}
var attrs=this.attributes.toString();
if(attrs.length>0){
attrs=" "+attrs;
}
ret+="<"+this.nodeName+ns+attrs+">";
ret+=this.childNodes.toString();
ret+="</"+this.nodeName+">";
return ret;
};
DOMAttr=function(_43dd){
this._class=addClass(this._class,"DOMAttr");
this.DOMNode=DOMNode;
this.DOMNode(_43dd);
this.name="";
this.specified=false;
this.value="";
this.nodeType=DOMNode.ATTRIBUTE_NODE;
this.ownerElement=null;
this.childNodes=null;
this.attributes=null;
};
DOMAttr.prototype=new DOMNode;
DOMAttr.prototype.getName=function DOMAttr_getName(){
return this.nodeName;
};
DOMAttr.prototype.getSpecified=function DOMAttr_getSpecified(){
return this.specified;
};
DOMAttr.prototype.getValue=function DOMAttr_getValue(){
return this.nodeValue;
};
DOMAttr.prototype.setValue=function DOMAttr_setValue(value){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
this.setNodeValue(value);
};
DOMAttr.prototype.setNodeValue=function DOMAttr_setNodeValue(value){
this.nodeValue=new String(value);
this.value=this.nodeValue;
this.specified=(this.value.length>0);
};
DOMAttr.prototype.toString=function DOMAttr_toString(){
var ret="";
ret+=this.nodeName+"=\""+this.__escapeString(this.nodeValue)+"\"";
return ret;
};
DOMAttr.prototype.getOwnerElement=function(){
return this.ownerElement;
};
DOMNamespace=function(_43e1){
this._class=addClass(this._class,"DOMNamespace");
this.DOMNode=DOMNode;
this.DOMNode(_43e1);
this.name="";
this.specified=false;
this.value="";
this.nodeType=DOMNode.NAMESPACE_NODE;
};
DOMNamespace.prototype=new DOMNode;
DOMNamespace.prototype.getValue=function DOMNamespace_getValue(){
return this.nodeValue;
};
DOMNamespace.prototype.setValue=function DOMNamespace_setValue(value){
this.nodeValue=new String(value);
this.value=this.nodeValue;
};
DOMNamespace.prototype.toString=function DOMNamespace_toString(){
var ret="";
if(this.nodeName!=""){
ret+=this.nodeName+"=\""+this.__escapeString(this.nodeValue)+"\"";
}else{
ret+="xmlns=\""+this.__escapeString(this.nodeValue)+"\"";
}
return ret;
};
DOMCharacterData=function(_43e4){
this._class=addClass(this._class,"DOMCharacterData");
this.DOMNode=DOMNode;
this.DOMNode(_43e4);
this.data="";
this.length=0;
};
DOMCharacterData.prototype=new DOMNode;
DOMCharacterData.prototype.getData=function DOMCharacterData_getData(){
return this.nodeValue;
};
DOMCharacterData.prototype.setData=function DOMCharacterData_setData(data){
this.setNodeValue(data);
};
DOMCharacterData.prototype.setNodeValue=function DOMCharacterData_setNodeValue(data){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
this.nodeValue=new String(data);
this.data=this.nodeValue;
this.length=this.nodeValue.length;
};
DOMCharacterData.prototype.getLength=function DOMCharacterData_getLength(){
return this.nodeValue.length;
};
DOMCharacterData.prototype.substringData=function DOMCharacterData_substringData(_43e7,count){
var ret=null;
if(this.data){
if(this.ownerDocument.implementation.errorChecking&&((_43e7<0)||(_43e7>this.data.length)||(count<0))){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
if(!count){
ret=this.data.substring(_43e7);
}else{
ret=this.data.substring(_43e7,_43e7+count);
}
}
return ret;
};
DOMCharacterData.prototype.appendData=function DOMCharacterData_appendData(arg){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
this.setData(""+this.data+arg);
};
DOMCharacterData.prototype.insertData=function DOMCharacterData_insertData(_43eb,arg){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.data){
if(this.ownerDocument.implementation.errorChecking&&((_43eb<0)||(_43eb>this.data.length))){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
this.setData(this.data.substring(0,_43eb).concat(arg,this.data.substring(_43eb)));
}else{
if(this.ownerDocument.implementation.errorChecking&&(_43eb!=0)){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
this.setData(arg);
}
};
DOMCharacterData.prototype.deleteData=function DOMCharacterData_deleteData(_43ed,count){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.data){
if(this.ownerDocument.implementation.errorChecking&&((_43ed<0)||(_43ed>this.data.length)||(count<0))){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
if(!count||(_43ed+count)>this.data.length){
this.setData(this.data.substring(0,_43ed));
}else{
this.setData(this.data.substring(0,_43ed).concat(this.data.substring(_43ed+count)));
}
}
};
DOMCharacterData.prototype.replaceData=function DOMCharacterData_replaceData(_43ef,count,arg){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if(this.data){
if(this.ownerDocument.implementation.errorChecking&&((_43ef<0)||(_43ef>this.data.length)||(count<0))){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
this.setData(this.data.substring(0,_43ef).concat(arg,this.data.substring(_43ef+count)));
}else{
this.setData(arg);
}
};
DOMText=function(_43f2){
this._class=addClass(this._class,"DOMText");
this.DOMCharacterData=DOMCharacterData;
this.DOMCharacterData(_43f2);
this.nodeName="#text";
this.nodeType=DOMNode.TEXT_NODE;
};
DOMText.prototype=new DOMCharacterData;
DOMText.prototype.splitText=function DOMText_splitText(_43f3){
var data,inode;
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if((_43f3<0)||(_43f3>this.data.length)){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
}
if(this.parentNode){
data=this.substringData(_43f3);
inode=this.ownerDocument.createTextNode(data);
if(this.nextSibling){
this.parentNode.insertBefore(inode,this.nextSibling);
}else{
this.parentNode.appendChild(inode);
}
this.deleteData(_43f3);
}
return inode;
};
DOMText.prototype.toString=function DOMText_toString(){
return this.__escapeString(""+this.nodeValue);
};
DOMCDATASection=function(_43f5){
this._class=addClass(this._class,"DOMCDATASection");
this.DOMCharacterData=DOMCharacterData;
this.DOMCharacterData(_43f5);
this.nodeName="#cdata-section";
this.nodeType=DOMNode.CDATA_SECTION_NODE;
};
DOMCDATASection.prototype=new DOMCharacterData;
DOMCDATASection.prototype.splitText=function DOMCDATASection_splitText(_43f6){
var data,inode;
if(this.ownerDocument.implementation.errorChecking){
if(this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
if((_43f6<0)||(_43f6>this.data.length)){
throw (new DOMException(DOMException.INDEX_SIZE_ERR));
}
}
if(this.parentNode){
data=this.substringData(_43f6);
inode=this.ownerDocument.createCDATASection(data);
if(this.nextSibling){
this.parentNode.insertBefore(inode,this.nextSibling);
}else{
this.parentNode.appendChild(inode);
}
this.deleteData(_43f6);
}
return inode;
};
DOMCDATASection.prototype.toString=function DOMCDATASection_toString(){
var ret="";
ret+="<![CDATA["+this.nodeValue+"]]>";
return ret;
};
DOMComment=function(_43f9){
this._class=addClass(this._class,"DOMComment");
this.DOMCharacterData=DOMCharacterData;
this.DOMCharacterData(_43f9);
this.nodeName="#comment";
this.nodeType=DOMNode.COMMENT_NODE;
};
DOMComment.prototype=new DOMCharacterData;
DOMComment.prototype.toString=function DOMComment_toString(){
var ret="";
ret+="<!--"+this.nodeValue+"-->";
return ret;
};
DOMProcessingInstruction=function(_43fb){
this._class=addClass(this._class,"DOMProcessingInstruction");
this.DOMNode=DOMNode;
this.DOMNode(_43fb);
this.target="";
this.data="";
this.nodeType=DOMNode.PROCESSING_INSTRUCTION_NODE;
};
DOMProcessingInstruction.prototype=new DOMNode;
DOMProcessingInstruction.prototype.getTarget=function DOMProcessingInstruction_getTarget(){
return this.nodeName;
};
DOMProcessingInstruction.prototype.getData=function DOMProcessingInstruction_getData(){
return this.nodeValue;
};
DOMProcessingInstruction.prototype.setData=function DOMProcessingInstruction_setData(data){
this.setNodeValue(data);
};
DOMProcessingInstruction.prototype.setNodeValue=function DOMProcessingInstruction_setNodeValue(data){
if(this.ownerDocument.implementation.errorChecking&&this._readonly){
throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
}
this.nodeValue=new String(data);
this.data=this.nodeValue;
};
DOMProcessingInstruction.prototype.toString=function DOMProcessingInstruction_toString(){
var ret="";
ret+="<?"+this.nodeName+" "+this.nodeValue+" ?>";
return ret;
};
DOMDocumentFragment=function(_43ff){
this._class=addClass(this._class,"DOMDocumentFragment");
this.DOMNode=DOMNode;
this.DOMNode(_43ff);
this.nodeName="#document-fragment";
this.nodeType=DOMNode.DOCUMENT_FRAGMENT_NODE;
};
DOMDocumentFragment.prototype=new DOMNode;
DOMDocumentFragment.prototype.toString=function DOMDocumentFragment_toString(){
var xml="";
var _4401=this.getChildNodes().getLength();
for(intLoop=0;intLoop<_4401;intLoop++){
xml+=this.getChildNodes().item(intLoop).toString();
}
return xml;
};
DOMDocumentType=function(){
alert("DOMDocumentType.constructor(): Not Implemented");
};
DOMEntity=function(){
alert("DOMEntity.constructor(): Not Implemented");
};
DOMEntityReference=function(){
alert("DOMEntityReference.constructor(): Not Implemented");
};
DOMNotation=function(){
alert("DOMNotation.constructor(): Not Implemented");
};
Strings=new Object();
Strings.WHITESPACE=" \t\n\r";
Strings.QUOTES="\"'";
Strings.isEmpty=function Strings_isEmpty(strD){
return (strD==null)||(strD.length==0);
};
Strings.indexOfNonWhitespace=function Strings_indexOfNonWhitespace(strD,iB,iE){
if(Strings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iB;i<iE;i++){
if(Strings.WHITESPACE.indexOf(strD.charAt(i))==-1){
return i;
}
}
return -1;
};
Strings.lastIndexOfNonWhitespace=function Strings_lastIndexOfNonWhitespace(strD,iB,iE){
if(Strings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iE-1;i>=iB;i--){
if(Strings.WHITESPACE.indexOf(strD.charAt(i))==-1){
return i;
}
}
return -1;
};
Strings.indexOfWhitespace=function Strings_indexOfWhitespace(strD,iB,iE){
if(Strings.isEmpty(strD)){
return -1;
}
iB=iB||0;
iE=iE||strD.length;
for(var i=iB;i<iE;i++){
if(Strings.WHITESPACE.indexOf(strD.charAt(i))!=-1){
return i;
}
}
return -1;
};
Strings.replace=function Strings_replace(strD,iB,iE,strF,strR){
if(Strings.isEmpty(strD)){
return "";
}
iB=iB||0;
iE=iE||strD.length;
return strD.substring(iB,iE).split(strF).join(strR);
};
Strings.getLineNumber=function Strings_getLineNumber(strD,iP){
if(Strings.isEmpty(strD)){
return -1;
}
iP=iP||strD.length;
return strD.substring(0,iP).split("\n").length;
};
Strings.getColumnNumber=function Strings_getColumnNumber(strD,iP){
if(Strings.isEmpty(strD)){
return -1;
}
iP=iP||strD.length;
var arrD=strD.substring(0,iP).split("\n");
var _4419=arrD[arrD.length-1];
arrD.length--;
var _441a=arrD.join("\n").length;
return iP-_441a;
};
StringBuffer=function(){
this._a=new Array();
};
StringBuffer.prototype.append=function StringBuffer_append(d){
this._a[this._a.length]=d;
};
StringBuffer.prototype.toString=function StringBuffer_toString(){
return this._a.join("");
};
XMLSerializer=function(){
alert("do not init this class. Use the static methods instead");
};
XMLSerializer.toXML=function(obj,_34a9,_34aa){
if(_34a9==undefined){
_34a9="model";
}
_34aa=_34aa?_34aa:"";
var t=XMLSerializer.getTypeName(obj);
var s=_34aa+"<"+_34a9+" type=\""+t+"\">";
switch(t){
case "int":
case "number":
case "string":
case "boolean":
s+=obj;
break;
case "date":
s+=obj.toLocaleString();
break;
case "Array":
case "array":
s+="\n";
for(var i=0;i<obj.length;i++){
s+=XMLSerializer.toXML(obj[i],("index"+i),_34aa+"   ");
}
s+=_34aa;
break;
default:
if(obj!=null){
s+="\n";
if(obj instanceof ArrayList){
obj.trimToSize();
}
var _34ae=obj.getPersistentAttributes();
for(var name in _34ae){
s+=XMLSerializer.toXML(_34ae[name],name,_34aa+"   ");
}
s+=_34aa;
}
break;
}
s+="</"+_34a9+">\n";
return s;
};
XMLSerializer.isSimpleVar=function(t){
switch(t){
case "int":
case "string":
case "String":
case "Number":
case "number":
case "Boolean":
case "boolean":
case "bool":
case "dateTime":
case "Date":
case "date":
case "float":
return true;
}
return false;
};
XMLSerializer.getTypeName=function(obj){
if(obj==null){
return "undefined";
}
if(obj instanceof Array){
return "Array";
}
if(obj instanceof Date){
return "Date";
}
var t=typeof (obj);
if(t=="number"){
return (parseInt(obj).toString()==obj)?"int":"number";
}
if(XMLSerializer.isSimpleVar(t)){
return t;
}
return obj.type.replace("@"+"NAMESPACE"+"@","");
};
XMLDeserializer=function(){
alert("do not init this class. Use the static methods instead");
};
XMLDeserializer.fromXML=function(node,_3e83){
var _3e84=""+node.getAttributes().getNamedItem("type").getNodeValue();
var value=node.getNodeValue();
switch(_3e84){
case "int":
return parseInt(""+node.getChildNodes().item(0).getNodeValue());
case "string":
case "String":
return ""+node.getChildNodes().item(0).getNodeValue();
case "Number":
case "number":
return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
case "Boolean":
case "boolean":
case "bool":
return parseBool(""+node.getChildNodes().item(0).getNodeValue());
case "dateTime":
case "Date":
case "date":
return new Date(""+node.getChildNodes().item(0).getNodeValue());
case "float":
return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
break;
}
_3e84=_3e84.replace("@NAMESPACE"+"@","");
var obj=eval("new "+_3e84+"()");
if(_3e83!=undefined&&obj.setModelParent!=undefined){
obj.setModelParent(_3e83);
}
var _3e87=node.getChildNodes();
for(var i=0;i<_3e87.length;i++){
var child=_3e87.item(i);
var _3e8a=child.getNodeName();
if(obj instanceof Array){
_3e8a=parseInt(_3e8a.replace("index",""));
}
obj[_3e8a]=XMLDeserializer.fromXML(child,obj instanceof AbstractObjectModel?obj:_3e83);
}
return obj;
};
EditPolicy=function(_466f){
this.policy=_466f;
};
EditPolicy.DELETE="DELETE";
EditPolicy.MOVE="MOVE";
EditPolicy.CONNECT="CONNECT";
EditPolicy.RESIZE="RESIZE";
EditPolicy.prototype.type="EditPolicy";
EditPolicy.prototype.getPolicy=function(){
return this.policy;
};
