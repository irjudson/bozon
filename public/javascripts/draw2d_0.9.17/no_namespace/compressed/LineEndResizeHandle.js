/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

LineEndResizeHandle=function(_1460){ResizeHandle.call(this,_1460,9);this.setDimension(10,10);this.setBackgroundColor(new Color(0,255,0));this.setZOrder(10000);};LineEndResizeHandle.prototype=new ResizeHandle;LineEndResizeHandle.prototype.type="LineEndResizeHandle";LineEndResizeHandle.prototype.onDragend=function(){if(this.workflow.currentSelection instanceof Connection){if(this.command!=null){this.command.cancel();}}else{if(this.command!=null){this.workflow.getCommandStack().execute(this.command);}}this.command=null;};LineEndResizeHandle.prototype.onDragstart=function(x,y){if(!this.canDrag){return false;}this.command=this.workflow.currentSelection.createCommand(new EditPolicy(EditPolicy.MOVE));return true;};LineEndResizeHandle.prototype.onDrag=function(){var oldX=this.getX();var oldY=this.getY();Rectangle.prototype.onDrag.call(this);var diffX=oldX-this.getX();var diffY=oldY-this.getY();var _1467=this.workflow.currentSelection.getEndPoint();var line=this.workflow.currentSelection;line.setEndPoint(_1467.x-diffX,_1467.y-diffY);line.isMoving=true;};LineEndResizeHandle.prototype.onDrop=function(_1469){var line=this.workflow.currentSelection;line.isMoving=false;if(line instanceof Connection){this.command.setNewPorts(line.getSource(),_1469);this.getWorkflow().getCommandStack().execute(this.command);}this.command=null;};