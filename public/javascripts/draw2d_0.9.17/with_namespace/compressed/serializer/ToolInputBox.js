/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolInputBox=function(_29a2){draw2d.ToolGeneric.call(this,_29a2);};draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;draw2d.ToolInputBox.prototype.type="ToolInputBox";draw2d.ToolInputBox.prototype.execute=function(x,y){var _29a5=new draw2d.InputBoxFigure();_29a5.setDimension(100,20);this.palette.workflow.addFigure(_29a5,x,y);var _29a6=this.palette.workflow.getBestCompartmentFigure(x,y);if(_29a6){_29a6.addChild(_29a5);}draw2d.ToolGeneric.prototype.execute.call(this,x,y);};