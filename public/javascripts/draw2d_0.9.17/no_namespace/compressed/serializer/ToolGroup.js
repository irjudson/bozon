/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolGroup=function(_15f3){ToolGeneric.call(this,_15f3);this.setTooltip("Form Group");};ToolGroup.prototype=new ToolGeneric;ToolGroup.prototype.type="ToolGroup";ToolGroup.prototype.execute=function(x,y){var _15f6=new GroupFigure();_15f6.setDimension(100,60);this.palette.workflow.addFigure(_15f6,x,y);ToolGeneric.prototype.execute.call(this,x,y);};