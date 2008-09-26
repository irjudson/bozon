/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolInputBox=function(_dd4){ToolGeneric.call(this,_dd4);};ToolInputBox.prototype=new ToolGeneric;ToolInputBox.prototype.type="ToolInputBox";ToolInputBox.prototype.execute=function(x,y){var _dd7=new InputBoxFigure();_dd7.setDimension(100,20);var _dd8=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_dd7,x,y,_dd8));ToolGeneric.prototype.execute.call(this,x,y);};