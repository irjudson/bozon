/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolCircle=function(_1666){ToolGeneric.call(this,_1666);};ToolCircle.prototype=new ToolGeneric;ToolCircle.prototype.type="ToolCircle";ToolCircle.prototype.execute=function(x,y){var _1669=new Circle();_1669.setDimension(100,100);_1669.setBackgroundColor(new Color(255,255,255));this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_1669,x,y));ToolGeneric.prototype.execute.call(this,x,y);};