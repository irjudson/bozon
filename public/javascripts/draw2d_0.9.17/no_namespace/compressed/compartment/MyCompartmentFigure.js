/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyCompartmentFigure=function(){CompartmentFigure.call(this);this.defaultColor=new Color(230,230,250);this.setBackgroundColor(this.defaultColor);};MyCompartmentFigure.prototype=new CompartmentFigure;MyCompartmentFigure.prototype.onFigureLeave=function(_53e){CompartmentFigure.prototype.onFigureLeave.call(this,_53e);if(_53e instanceof CompartmentFigure){_53e.setBackgroundColor(_53e.defaultColor);}};MyCompartmentFigure.prototype.onFigureDrop=function(_53f){CompartmentFigure.prototype.onFigureDrop.call(this,_53f);if(_53f instanceof CompartmentFigure){_53f.setBackgroundColor(this.getBackgroundColor().darker(0.1));}};MyCompartmentFigure.prototype.setBackgroundColor=function(_540){CompartmentFigure.prototype.setBackgroundColor.call(this,_540);for(var i=0;i<this.children.getSize();i++){var _542=this.children.get(i);if(_542 instanceof CompartmentFigure){_542.setBackgroundColor(this.getBackgroundColor().darker(0.1));}}};