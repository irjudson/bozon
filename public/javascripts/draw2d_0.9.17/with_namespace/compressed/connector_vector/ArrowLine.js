/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ArrowLine=function(){this.lineColor=new draw2d.Color(0,0,0);this.stroke=1;this.canvas=null;this.workflow=null;this.html=null;this.graphics=null;this.id=draw2d.UUID.create();this.startX=30;this.startY=30;this.endX=100;this.endY=100;this.zOrder=draw2d.Line.ZOrderBaseIndex;this.setSelectable(true);this.setDeleteable(true);this.arrowWidth=8;this.arrowLength=20;this.lineWidth=2;};draw2d.ArrowLine.prototype=new draw2d.Line;draw2d.ArrowLine.prototype.type="draw2d.ArrowLine";draw2d.ArrowLine.prototype.paint=function(){if(this.graphics==null){this.graphics=new jsGraphics(this.id);}else{this.graphics.clear();}this.graphics.setStroke(this.stroke);this.graphics.setColor(this.lineColor.getHTMLStyle());var endY=this.getLength();var _1e74=[0,0,endY-this.arrowLength,endY-this.arrowLength,endY,endY-this.arrowLength,endY-this.arrowLength,0];var _1e75=[-this.lineWidth,+this.lineWidth,+this.lineWidth,this.lineWidth+this.arrowWidth/2,0,-(this.lineWidth+this.arrowWidth/2),-this.lineWidth,-this.lineWidth];var _1e76=this.getAngle()*Math.PI/180;var rotX=new Array();var rotY=new Array();for(var i=0;i<_1e74.length;i++){rotX[i]=this.startX+_1e74[i]*Math.cos(_1e76)-_1e75[i]*Math.sin(_1e76);rotY[i]=this.startY+_1e74[i]*Math.sin(_1e76)+_1e75[i]*Math.cos(_1e76);}this.graphics.drawPolyLine(rotX,rotY);this.graphics.paint();};