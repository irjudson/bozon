/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandResize=function(_1e68,width,_1e6a){draw2d.Command.call(this,"resize figure");this.figure=_1e68;if(width==undefined){this.oldWidth=_1e68.getWidth();this.oldHeight=_1e68.getHeight();}else{this.oldWidth=width;this.oldHeight=_1e6a;}};draw2d.CommandResize.prototype=new draw2d.Command;draw2d.CommandResize.prototype.type="draw2d.CommandResize";draw2d.CommandResize.prototype.setDimension=function(width,_1e6c){this.newWidth=width;this.newHeight=_1e6c;};draw2d.CommandResize.prototype.canExecute=function(){return this.newWidth!=this.oldWidth||this.newHeight!=this.oldHeight;};draw2d.CommandResize.prototype.execute=function(){this.redo();};draw2d.CommandResize.prototype.undo=function(){this.figure.setDimension(this.oldWidth,this.oldHeight);this.figure.workflow.moveResizeHandles(this.figure);};draw2d.CommandResize.prototype.redo=function(){this.figure.setDimension(this.newWidth,this.newHeight);this.figure.workflow.moveResizeHandles(this.figure);};