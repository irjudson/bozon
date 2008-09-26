/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.Triangle=function(width,_1d0c){draw2d.VectorFigure.call(this);if(width&&_1d0c){this.setDimension(width,_1d0c);}};draw2d.Triangle.prototype=new draw2d.VectorFigure;draw2d.Triangle.prototype.paint=function(){draw2d.VectorFigure.prototype.paint.call(this);var x=new Array(this.getWidth()/2,this.getWidth(),0);var y=new Array(0,this.getHeight(),this.getHeight());this.graphics.setStroke(this.stroke);if(this.bgColor!=null){this.graphics.setColor(this.bgColor.getHTMLStyle());this.graphics.fillPolygon(x,y);}if(this.lineColor!=null){this.graphics.setColor(this.lineColor.getHTMLStyle());this.graphics.drawPolygon(x,y);}this.graphics.paint();};