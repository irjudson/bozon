/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandSetBackgroundColor=function(_84,_85){Command.call(this,"set background color");this.figure=_84;this.newColor=_85;this.oldColor=_84.getBackgroundColor();};CommandSetBackgroundColor.prototype=new Command;CommandSetBackgroundColor.prototype.type="CommandSetBackgroundColor";CommandSetBackgroundColor.prototype.execute=function(){this.redo();};CommandSetBackgroundColor.prototype.undo=function(){this.figure.setBackgroundColor(this.oldColor);};CommandSetBackgroundColor.prototype.redo=function(){this.figure.setBackgroundColor(this.newColor);};