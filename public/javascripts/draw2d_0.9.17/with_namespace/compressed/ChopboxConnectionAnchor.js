/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ChopboxConnectionAnchor=function(owner){draw2d.ConnectionAnchor.call(this,owner);};draw2d.ChopboxConnectionAnchor.prototype=new draw2d.ConnectionAnchor;draw2d.ChopboxConnectionAnchor.prototype.type="draw2d.ChopboxConnectionAnchor";draw2d.ChopboxConnectionAnchor.prototype.getLocation=function(_2b54){var r=new draw2d.Dimension();r.setBounds(this.getBox());r.translate(-1,-1);r.resize(1,1);var _2b56=r.x+r.w/2;var _2b57=r.y+r.h/2;if(r.isEmpty()||(_2b54.x==_2b56&&_2b54.y==_2b57)){return new Point(_2b56,_2b57);}var dx=_2b54.x-_2b56;var dy=_2b54.y-_2b57;var scale=0.5/Math.max(Math.abs(dx)/r.w,Math.abs(dy)/r.h);dx*=scale;dy*=scale;_2b56+=dx;_2b57+=dy;return new draw2d.Point(Math.round(_2b56),Math.round(_2b57));};draw2d.ChopboxConnectionAnchor.prototype.getBox=function(){return this.getOwner().getParent().getBounds();};draw2d.ChopboxConnectionAnchor.prototype.getReferencePoint=function(){return this.getBox().getCenter();};