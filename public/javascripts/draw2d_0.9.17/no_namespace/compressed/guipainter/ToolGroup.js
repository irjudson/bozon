/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolGroup=function(_dbc){ToolGeneric.call(this,_dbc);this.setTooltip("Form Group");};ToolGroup.prototype=new ToolGeneric;ToolGroup.prototype.type="ToolGroup";ToolGroup.prototype.execute=function(x,y){var _dbf=new GroupFigure();_dbf.setDimension(100,60);var _dc0=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_dbf,x,y,_dc0));ToolGeneric.prototype.execute.call(this,x,y);};