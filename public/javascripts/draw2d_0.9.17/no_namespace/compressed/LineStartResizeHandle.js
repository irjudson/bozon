/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

LineStartResizeHandle=function(_165b){ResizeHandle.call(this,_165b,9);this.setDimension(10,10);this.setBackgroundColor(new Color(100,255,0));this.setZOrder(10000);};LineStartResizeHandle.prototype=new ResizeHandle;LineStartResizeHandle.prototype.type="LineStartResizeHandle";LineStartResizeHandle.prototype.onDragend=function(){if(this.workflow.currentSelection instanceof Connection){if(this.command!=null){this.command.cancel();}}else{if(this.command!=null){this.getWorkflow().getCommandStack().execute(this.command);}}this.command=null;};LineStartResizeHandle.prototype.onDragstart=function(x,y){if(!this.canDrag){return false;}this.command=this.workflow.currentSelection.createCommand(new EditPolicy(EditPolicy.MOVE));return true;};LineStartResizeHandle.prototype.onDrag=function(){var oldX=this.getX();var oldY=this.getY();Rectangle.prototype.onDrag.call(this);var diffX=oldX-this.getX();var diffY=oldY-this.getY();var _1662=this.workflow.currentSelection.getStartPoint();var line=this.workflow.currentSelection;line.setStartPoint(_1662.x-diffX,_1662.y-diffY);line.isMoving=true;};LineStartResizeHandle.prototype.onDrop=function(_1664){var line=this.workflow.currentSelection;line.isMoving=false;if(line instanceof Connection){this.command.setNewPorts(_1664,line.getTarget());this.getWorkflow().getCommandStack().execute(this.command);}this.command=null;};