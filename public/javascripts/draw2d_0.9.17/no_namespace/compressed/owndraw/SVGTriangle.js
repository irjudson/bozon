/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

SVGTriangle=function(_544,_545){Figure.call(this);if(_544&&_545){this.setDimension(_544,_545);}};SVGTriangle.prototype=new SVGFigure;SVGTriangle.prototype.paint=function(){this.context.clearRect(0,0,this.getWidth(),this.getHeight());this.context.fillStyle="rgba(200,0,0,0.3)";this.context.fillStyle="rgb(0,200,0)";this.context.fillStyle="rgb(200,0,0)";this.context.fillRect(10,10,55,50);this.context.fillStyle="rgba(0, 0, 200, 0.5)";this.context.fillRect(30,30,55,50);this.context.beginPath();this.context.moveTo(this.width/2,0);this.context.lineTo(this.width,this.height);this.context.lineTo(0,this.height);this.context.closePath();this.context.stroke();};