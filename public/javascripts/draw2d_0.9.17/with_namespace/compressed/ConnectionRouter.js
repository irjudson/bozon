/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ConnectionRouter=function(){};draw2d.ConnectionRouter.prototype.type="draw2d.ConnectionRouter";draw2d.ConnectionRouter.prototype.getDirection=function(r,p){var _1d33=Math.abs(r.x-p.x);var _1d34=3;var i=Math.abs(r.y-p.y);if(i<=_1d33){_1d33=i;_1d34=0;}i=Math.abs(r.getBottom()-p.y);if(i<=_1d33){_1d33=i;_1d34=2;}i=Math.abs(r.getRight()-p.x);if(i<_1d33){_1d33=i;_1d34=1;}return _1d34;};draw2d.ConnectionRouter.prototype.getEndDirection=function(conn){var p=conn.getEndPoint();var rect=conn.getTarget().getParent().getBounds();return this.getDirection(rect,p);};draw2d.ConnectionRouter.prototype.getStartDirection=function(conn){var p=conn.getStartPoint();var rect=conn.getSource().getParent().getBounds();return this.getDirection(rect,p);};draw2d.ConnectionRouter.prototype.route=function(_1d3c){};