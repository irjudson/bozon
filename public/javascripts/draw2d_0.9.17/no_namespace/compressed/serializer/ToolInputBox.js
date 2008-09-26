/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolInputBox=function(_bd6){ToolGeneric.call(this,_bd6);};ToolInputBox.prototype=new ToolGeneric;ToolInputBox.prototype.type="ToolInputBox";ToolInputBox.prototype.execute=function(x,y){var _bd9=new InputBoxFigure();_bd9.setDimension(100,20);this.palette.workflow.addFigure(_bd9,x,y);var _bda=this.palette.workflow.getBestCompartmentFigure(x,y);if(_bda){_bda.addChild(_bd9);}ToolGeneric.prototype.execute.call(this,x,y);};