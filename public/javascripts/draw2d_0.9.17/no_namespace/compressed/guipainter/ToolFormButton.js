/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolFormButton=function(_1c4){ToolGeneric.call(this,_1c4);};ToolFormButton.prototype=new ToolGeneric;ToolFormButton.prototype.type="ToolFormButton";ToolFormButton.prototype.execute=function(x,y){var _1c7=new ButtonFigure();_1c7.setDimension(100,20);var _1c8=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_1c7,x,y,_1c8));ToolGeneric.prototype.execute.call(this,x,y);};