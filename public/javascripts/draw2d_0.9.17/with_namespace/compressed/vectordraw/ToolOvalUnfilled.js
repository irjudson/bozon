/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolOvalUnfilled=function(_2b4f){draw2d.ToolGeneric.call(this,_2b4f);};draw2d.ToolOvalUnfilled.prototype=new draw2d.ToolGeneric;draw2d.ToolOvalUnfilled.prototype.type="ToolOvalUnfilled";draw2d.ToolOvalUnfilled.prototype.execute=function(x,y){var _2b52=new draw2d.Oval();_2b52.setDimension(100,60);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_2b52,x,y));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};