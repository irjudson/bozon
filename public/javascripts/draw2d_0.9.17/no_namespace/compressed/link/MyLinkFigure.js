/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyLinkFigure=function(){Rectangle.call(this);this.setDimension(50,50);this.setBackgroundColor(new Color(220,255,255));};MyLinkFigure.prototype=new Rectangle;MyLinkFigure.prototype.type="MyLinkFigure";MyLinkFigure.prototype.createHTMLElement=function(){var item=Rectangle.prototype.createHTMLElement.call(this);this.time=document.createElement("a");this.time.href="#";this.time.style.position="absolute";this.time.style.left="5px";this.time.style.top="5px";this.time.style.backgroundColor="rgb(255,255,128)";this.time.style.fontSize="9pt";this.time.style.padding="8px";this.time.style.border="1px solid rgb(255,128,255)";this.time.style.textAlign="left";this.time.style.fontSize="9px";this.time.style.whiteSpace="nowrap";this.time.innerHTML="click";var _dc2=this;var tmp=function(){_dc2.requestDay();};this.time.onclick=tmp;this.disableTextSelection(this.time);item.appendChild(this.time);return item;};MyLinkFigure.prototype.requestDay=function(){var obj=new Circle(200);this.getWorkflow().addFigure(obj,this.getX(),this.getY());};MyLinkFigure.prototype.toggle=function(){if(this.highlight){this.setBackgroundColor(new Color(245,115,115));}else{this.setBackgroundColor(new Color(115,245,115));}this.highlight=!this.highlight;};