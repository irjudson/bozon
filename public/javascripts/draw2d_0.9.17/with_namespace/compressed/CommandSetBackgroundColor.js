/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandSetBackgroundColor=function(_3062,color){draw2d.Command.call(this,"set background color");this.figure=_3062;this.newColor=color;this.oldColor=_3062.getBackgroundColor();};draw2d.CommandSetBackgroundColor.prototype=new draw2d.Command;draw2d.CommandSetBackgroundColor.prototype.type="draw2d.CommandSetBackgroundColor";draw2d.CommandSetBackgroundColor.prototype.execute=function(){this.redo();};draw2d.CommandSetBackgroundColor.prototype.undo=function(){this.figure.setBackgroundColor(this.oldColor);};draw2d.CommandSetBackgroundColor.prototype.redo=function(){this.figure.setBackgroundColor(this.newColor);};