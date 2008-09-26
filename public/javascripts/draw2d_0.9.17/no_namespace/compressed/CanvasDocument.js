/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CanvasDocument=function(_190){this.canvas=_190;};CanvasDocument.prototype.type="CanvasDocument";CanvasDocument.prototype.getFigures=function(){var _191=new ArrayList();var _192=this.canvas.figures;var _193=this.canvas.dialogs;for(var i=0;i<_192.getSize();i++){var _195=_192.get(i);if(_193.indexOf(_195)==-1&&_195.getParent()==null&&!(_195 instanceof WindowFigure)){_191.add(_195);}}return _191;};CanvasDocument.prototype.getFigure=function(id){return this.canvas.getFigure(id);};CanvasDocument.prototype.getLines=function(){return this.canvas.getLines();};CanvasDocument.prototype.getLine=function(id){return this.canvas.getLine(id);};