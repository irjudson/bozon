/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolCheckBox=function(_899){ToolGeneric.call(this,_899);};ToolCheckBox.prototype=new ToolGeneric;ToolCheckBox.prototype.type="ToolCheckBox";ToolCheckBox.prototype.execute=function(x,y){var _89c=new CheckBoxFigure();_89c.setDimension(100,20);var _89d=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_89c,x,y,_89d));ToolGeneric.prototype.execute.call(this,x,y);};