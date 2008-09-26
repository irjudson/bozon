/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolLine=function(_559){ToolGeneric.call(this,_559);};ToolLine.prototype=new ToolGeneric;ToolLine.prototype.type="ToolLine";ToolLine.prototype.execute=function(x,y){var _55c=new Line();_55c.setStartPoint(x,y);_55c.setEndPoint(x+100,y+100);this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_55c));ToolGeneric.prototype.execute.call(this,x,y);};