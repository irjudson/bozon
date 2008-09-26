/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ChopboxConnectionAnchor=function(_be5){ConnectionAnchor.call(this,_be5);};ChopboxConnectionAnchor.prototype=new ConnectionAnchor;ChopboxConnectionAnchor.prototype.type="ChopboxConnectionAnchor";ChopboxConnectionAnchor.prototype.getLocation=function(_be6){var r=new Dimension();r.setBounds(this.getBox());r.translate(-1,-1);r.resize(1,1);var _be8=r.x+r.w/2;var _be9=r.y+r.h/2;if(r.isEmpty()||(_be6.x==_be8&&_be6.y==_be9)){return new Point(_be8,_be9);}var dx=_be6.x-_be8;var dy=_be6.y-_be9;var _bec=0.5/Math.max(Math.abs(dx)/r.w,Math.abs(dy)/r.h);dx*=_bec;dy*=_bec;_be8+=dx;_be9+=dy;return new Point(Math.round(_be8),Math.round(_be9));};ChopboxConnectionAnchor.prototype.getBox=function(){return this.getOwner().getParent().getBounds();};ChopboxConnectionAnchor.prototype.getReferencePoint=function(){return this.getBox().getCenter();};