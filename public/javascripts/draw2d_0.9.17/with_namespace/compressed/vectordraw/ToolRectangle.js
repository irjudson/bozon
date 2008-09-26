/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolRectangle=function(_29f8){draw2d.ToolGeneric.call(this,_29f8);};draw2d.ToolRectangle.prototype=new draw2d.ToolGeneric;draw2d.ToolRectangle.prototype.type="ToolRectangle";draw2d.ToolRectangle.prototype.execute=function(x,y){var _29fb=new draw2d.Rectangle();_29fb.setDimension(100,60);_29fb.setBackgroundColor(new draw2d.Color(255,255,255));this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_29fb,x,y));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};