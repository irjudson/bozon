/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

SVGFigure=function(_445,_446){this.bgColor=null;this.lineColor=new Color(0,0,0);this.stroke=1;this.context=null;Node.call(this);if(_445&&_446){this.setDimension(_445,_446);}};SVGFigure.prototype=new Node;SVGFigure.prototype.type="SVGFigure";SVGFigure.prototype.createHTMLElement=function(){var item=new MooCanvas(this.id,{width:100,height:100});item.style.position="absolute";item.style.left=this.x+"px";item.style.top=this.y+"px";item.style.zIndex=""+Figure.ZOrderBaseIndex;this.context=item.getContext("2d");return item;};SVGFigure.prototype.paint=function(){this.context.clearRect(0,0,this.getWidth(),this.getHeight());this.context.fillStyle="rgba(200,0,0,0.3)";this.context.fillRect(0,0,this.getWidth(),this.getHeight());};SVGFigure.prototype.setDimension=function(w,h){Node.prototype.setDimension.call(this,w,h);this.html.width=w;this.html.height=h;this.html.style.width=w+"px";this.html.style.height=h+"px";if(this.context!=null){if(this.context.element){this.context.element.style.width=w+"px";this.context.element.style.height=h+"px";}this.paint();}};SVGFigure.prototype.setBackgroundColor=function(_44a){this.bgColor=_44a;if(this.graphics!=null){this.paint();}};SVGFigure.prototype.getBackgroundColor=function(){return this.bgColor;};SVGFigure.prototype.setLineWidth=function(w){this.stroke=w;if(this.context!=null){this.paint();}};SVGFigure.prototype.setColor=function(_44c){this.lineColor=_44c;if(this.context!=null){this.paint();}};SVGFigure.prototype.getColor=function(){return this.lineColor;};