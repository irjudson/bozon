/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.LineStartResizeHandle=function(_26d6){draw2d.ResizeHandle.call(this,_26d6,9);this.setDimension(10,10);this.setBackgroundColor(new draw2d.Color(100,255,0));this.setZOrder(10000);};draw2d.LineStartResizeHandle.prototype=new draw2d.ResizeHandle;draw2d.LineStartResizeHandle.prototype.type="draw2d.LineStartResizeHandle";draw2d.LineStartResizeHandle.prototype.onDragend=function(){if(this.workflow.currentSelection instanceof draw2d.Connection){if(this.command!=null){this.command.cancel();}}else{if(this.command!=null){this.getWorkflow().getCommandStack().execute(this.command);}}this.command=null;};draw2d.LineStartResizeHandle.prototype.onDragstart=function(x,y){if(!this.canDrag){return false;}this.command=this.workflow.currentSelection.createCommand(new draw2d.EditPolicy(draw2d.EditPolicy.MOVE));return true;};draw2d.LineStartResizeHandle.prototype.onDrag=function(){var oldX=this.getX();var oldY=this.getY();draw2d.Rectangle.prototype.onDrag.call(this);var diffX=oldX-this.getX();var diffY=oldY-this.getY();var _26dd=this.workflow.currentSelection.getStartPoint();var line=this.workflow.currentSelection;line.setStartPoint(_26dd.x-diffX,_26dd.y-diffY);line.isMoving=true;};draw2d.LineStartResizeHandle.prototype.onDrop=function(_26df){var line=this.workflow.currentSelection;line.isMoving=false;if(line instanceof draw2d.Connection){this.command.setNewPorts(_26df,line.getTarget());this.getWorkflow().getCommandStack().execute(this.command);}this.command=null;};