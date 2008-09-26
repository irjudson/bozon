/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ManhattanMidpointLocator=function(_20d9){draw2d.ConnectionLocator.call(this,_20d9);};draw2d.ManhattanMidpointLocator.prototype=new draw2d.ConnectionLocator;draw2d.ManhattanMidpointLocator.prototype.type="draw2d.ManhattanMidpointLocator";draw2d.ManhattanMidpointLocator.prototype.relocate=function(_20da){var conn=this.getConnection();var p=new draw2d.Point();var _20dd=conn.getPoints();var index=Math.floor((_20dd.getSize()-2)/2);var p1=_20dd.get(index);var p2=_20dd.get(index+1);p.x=(p2.x-p1.x)/2+p1.x+5;p.y=(p2.y-p1.y)/2+p1.y+5;_20da.setPosition(p.x,p.y);};