/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

shape.uml.Actor=function(name){VectorFigure.call(this);this.setName(name);this.setDimension(50,90);};shape.uml.Actor.prototype=new VectorFigure;shape.uml.Actor.prototype.type="shape.uml.Actor";shape.uml.Actor.prototype.setName=function(name){this.label.innerHTML=name;};shape.uml.Actor.prototype.setWorkflow=function(_1226){VectorFigure.prototype.setWorkflow.call(this,_1226);if(_1226!=null&&this.portRight==null){this.portRight=new Port();this.portRight.setWorkflow(_1226);this.addPort(this.portRight,this.width,this.height/2);this.portLeft=new Port();this.portLeft.setWorkflow(_1226);this.addPort(this.portLeft,0,this.height/2);}};shape.uml.Actor.prototype.createHTMLElement=function(){var item=Figure.prototype.createHTMLElement.call(this);this.label=document.createElement("div");this.label.style.width="100%";this.label.style.height="20px";this.label.style.position="absolute";this.label.style.textAlign="center";this.label.style.top="0px";this.label.style.left="0px";this.label.style.fontSize="8pt";return item;};shape.uml.Actor.prototype.setDimension=function(w,h){VectorFigure.prototype.setDimension.call(this,w,h);if(this.portRight!=null){this.portRight.setPosition(this.width,this.height/2);this.portLeft.setPosition(0,this.height/2);}};shape.uml.Actor.prototype.paint=function(){VectorFigure.prototype.paint.call(this);var _122a=this.getWidth()/2;var _122b=this.getWidth()/4;var _122c=this.getHeight()/2;var _122d=parseInt(this.label.style.height);var _122e=this.getWidth()*0.2;var _122f=this.getHeight()*0.1;this.graphics.drawOval(_122a-_122e/2,0,_122e,_122f);this.graphics.drawLine(_122a,_122f,_122a,_122c);this.graphics.drawLine(_122b,_122f*2,this.getWidth()-_122b,_122f*2);this.graphics.drawLine(_122a,_122c,_122b,this.getHeight()-_122d);this.graphics.drawLine(_122a,_122c,this.getWidth()-_122b,this.getHeight()-_122d);this.graphics.paint();this.label.style.top=(this.getHeight()-_122d)+"px";this.html.appendChild(this.label);};