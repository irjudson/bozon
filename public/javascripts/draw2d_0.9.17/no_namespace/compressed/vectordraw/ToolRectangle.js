/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolRectangle=function(_145b){ToolGeneric.call(this,_145b);};ToolRectangle.prototype=new ToolGeneric;ToolRectangle.prototype.type="ToolRectangle";ToolRectangle.prototype.execute=function(x,y){var _145e=new Rectangle();_145e.setDimension(100,60);_145e.setBackgroundColor(new Color(255,255,255));this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_145e,x,y));ToolGeneric.prototype.execute.call(this,x,y);};