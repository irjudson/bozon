/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolUndo=function(_15b8){Button.call(this,_15b8);};ToolUndo.prototype=new Button;ToolUndo.prototype.type="ToolUndo";ToolUndo.prototype.execute=function(){this.palette.workflow.getCommandStack().undo();ToolGeneric.prototype.execute.call(this);};