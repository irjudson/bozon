/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.shape.uml.Actor=function(name){draw2d.VectorFigure.call(this);this.setName(name);this.setDimension(50,90);};draw2d.shape.uml.Actor.prototype=new draw2d.VectorFigure;draw2d.shape.uml.Actor.prototype.type="shape.uml.Actor";draw2d.shape.uml.Actor.prototype.setName=function(name){this.label.innerHTML=name;};draw2d.shape.uml.Actor.prototype.setWorkflow=function(_2051){draw2d.VectorFigure.prototype.setWorkflow.call(this,_2051);if(_2051!=null&&this.portRight==null){this.portRight=new draw2d.Port();this.portRight.setWorkflow(_2051);this.addPort(this.portRight,this.width,this.height/2);this.portLeft=new draw2d.Port();this.portLeft.setWorkflow(_2051);this.addPort(this.portLeft,0,this.height/2);}};draw2d.shape.uml.Actor.prototype.createHTMLElement=function(){var item=draw2d.Figure.prototype.createHTMLElement.call(this);this.label=document.createElement("div");this.label.style.width="100%";this.label.style.height="20px";this.label.style.position="absolute";this.label.style.textAlign="center";this.label.style.top="0px";this.label.style.left="0px";this.label.style.fontSize="8pt";return item;};draw2d.shape.uml.Actor.prototype.setDimension=function(w,h){draw2d.VectorFigure.prototype.setDimension.call(this,w,h);if(this.portRight!=null){this.portRight.setPosition(this.width,this.height/2);this.portLeft.setPosition(0,this.height/2);}};draw2d.shape.uml.Actor.prototype.paint=function(){draw2d.VectorFigure.prototype.paint.call(this);var _2055=this.getWidth()/2;var _2056=this.getWidth()/4;var _2057=this.getHeight()/2;var _2058=parseInt(this.label.style.height);var _2059=this.getWidth()*0.2;var _205a=this.getHeight()*0.1;this.graphics.drawOval(_2055-_2059/2,0,_2059,_205a);this.graphics.drawLine(_2055,_205a,_2055,_2057);this.graphics.drawLine(_2056,_205a*2,this.getWidth()-_2056,_205a*2);this.graphics.drawLine(_2055,_2057,_2056,this.getHeight()-_2058);this.graphics.drawLine(_2055,_2057,this.getWidth()-_2056,this.getHeight()-_2058);this.graphics.paint();this.label.style.top=(this.getHeight()-_2058)+"px";this.html.appendChild(this.label);};