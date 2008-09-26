/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandResize=function(_13a4,width,_13a6){Command.call(this,"resize figure");this.figure=_13a4;if(width==undefined){this.oldWidth=_13a4.getWidth();this.oldHeight=_13a4.getHeight();}else{this.oldWidth=width;this.oldHeight=_13a6;}};CommandResize.prototype=new Command;CommandResize.prototype.type="CommandResize";CommandResize.prototype.setDimension=function(width,_13a8){this.newWidth=width;this.newHeight=_13a8;};CommandResize.prototype.canExecute=function(){return this.newWidth!=this.oldWidth||this.newHeight!=this.oldHeight;};CommandResize.prototype.execute=function(){this.redo();};CommandResize.prototype.undo=function(){this.figure.setDimension(this.oldWidth,this.oldHeight);this.figure.workflow.moveResizeHandles(this.figure);};CommandResize.prototype.redo=function(){this.figure.setDimension(this.newWidth,this.newHeight);this.figure.workflow.moveResizeHandles(this.figure);};