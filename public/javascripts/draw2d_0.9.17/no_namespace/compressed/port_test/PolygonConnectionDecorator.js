/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

PolygonConnectionDecorator=function(){};PolygonConnectionDecorator.prototype=new ConnectionDecorator;PolygonConnectionDecorator.prototype.paint=function(g){g.setColor(new Color(128,255,255));g.fillPolygon([3,15,30,15,3],[0,5,0,-5,0]);g.setColor(new Color(128,128,255));g.setStroke(1);g.drawPolygon([3,15,30,15,3],[0,5,0,-5,0]);};