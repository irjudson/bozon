/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolCheckBox=function(_1892){draw2d.ToolGeneric.call(this,_1892);};draw2d.ToolCheckBox.prototype=new draw2d.ToolGeneric;draw2d.ToolCheckBox.prototype.type="ToolCheckBox";draw2d.ToolCheckBox.prototype.execute=function(x,y){var _1895=new draw2d.CheckBoxFigure();_1895.setDimension(100,20);this.palette.workflow.addFigure(_1895,x,y);var _1896=this.palette.workflow.getBestCompartmentFigure(x,y);if(_1896){_1896.addChild(_1895);}draw2d.ToolGeneric.prototype.execute.call(this,x,y);};