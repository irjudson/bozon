/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ToolOval=function(_56c){ToolGeneric.call(this,_56c);};ToolOval.prototype=new ToolGeneric;ToolOval.prototype.type="ToolOval";ToolOval.prototype.execute=function(x,y){var _56f=new Oval();_56f.setDimension(100,60);_56f.setBackgroundColor(new Color(255,255,255));this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_56f,x,y));ToolGeneric.prototype.execute.call(this,x,y);};