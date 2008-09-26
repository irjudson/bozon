/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolGeneric=function(_d90){this.x=0;this.y=0;this.enabled=true;this.tooltip=null;this.palette=_d90;this.setDimension(10,10);this.html=this.createHTMLElement();};ToolGeneric.prototype.type="ToolGeneric";ToolGeneric.prototype.dispose=function(){};ToolGeneric.prototype.getImageUrl=function(){if(this.enabled){return this.type+".png";}else{return this.type+"_disabled.png";}};ToolGeneric.prototype.createHTMLElement=function(){var item=document.createElement("div");item.id=this.id;item.style.position="absolute";item.style.left=this.x+"px";item.style.top=this.y+"px";item.style.height="24px";item.style.width="24px";item.style.margin="0px";item.style.padding="0px";if(this.getImageUrl()!=null){item.style.backgroundImage="url("+this.getImageUrl()+")";}else{item.style.backgroundImage="";}var _d92=this;this.click=function(_d93){if(_d92.enabled){_d92.palette.setActiveTool(_d92);}_d93.cancelBubble=true;_d93.returnValue=false;};if(item.addEventListener){item.addEventListener("click",this.click,false);}else{if(item.attachEvent){item.attachEvent("onclick",this.click);}}return item;};ToolGeneric.prototype.getHTMLElement=function(){if(this.html==null){this.html=this.createHTMLElement();}return this.html;};ToolGeneric.prototype.execute=function(x,y){if(this.enabled){this.palette.setActiveTool(null);}};ToolGeneric.prototype.setTooltip=function(_d96){this.tooltip=_d96;if(this.tooltip!=null){this.html.title=this.tooltip;}else{this.html.title="";}};ToolGeneric.prototype.setActive=function(flag){if(!this.enabled){return;}if(flag==true){this.html.style.border="2px inset";}else{this.html.style.border="0px";}};ToolGeneric.prototype.setEnabled=function(flag){this.enabled=flag;if(this.getImageUrl()!=null){this.html.style.backgroundImage="url("+this.getImageUrl()+")";}else{this.html.style.backgroundImage="";}};ToolGeneric.prototype.setDimension=function(w,h){this.width=w;this.height=h;if(this.html==null){return;}this.html.style.width=this.width+"px";this.html.style.height=this.height+"px";};ToolGeneric.prototype.setPosition=function(xPos,yPos){this.x=Math.max(0,xPos);this.y=Math.max(0,yPos);if(this.html==null){return;}this.html.style.left=this.x+"px";this.html.style.top=this.y+"px";};ToolGeneric.prototype.getWidth=function(){return this.width;};ToolGeneric.prototype.getHeight=function(){return this.height;};ToolGeneric.prototype.getY=function(){return this.y;};ToolGeneric.prototype.getX=function(){return this.x;};ToolGeneric.prototype.getPosition=function(){return new Point(this.x,this.y);};