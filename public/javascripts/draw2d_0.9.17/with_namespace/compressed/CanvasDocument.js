/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CanvasDocument=function(_1ea7){this.canvas=_1ea7;};draw2d.CanvasDocument.prototype.type="draw2d.CanvasDocument";draw2d.CanvasDocument.prototype.getFigures=function(){var _1ea8=new draw2d.ArrayList();var _1ea9=this.canvas.figures;var _1eaa=this.canvas.dialogs;for(var i=0;i<_1ea9.getSize();i++){var _1eac=_1ea9.get(i);if(_1eaa.indexOf(_1eac)==-1&&_1eac.getParent()==null&&!(_1eac instanceof draw2d.WindowFigure)){_1ea8.add(_1eac);}}return _1ea8;};draw2d.CanvasDocument.prototype.getFigure=function(id){return this.canvas.getFigure(id);};draw2d.CanvasDocument.prototype.getLines=function(){return this.canvas.getLines();};draw2d.CanvasDocument.prototype.getLine=function(id){return this.canvas.getLine(id);};