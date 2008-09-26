/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ResizeHandle=function(_9b,_9c){Rectangle.call(this,5,5);this.type=_9c;var _9d=this.getWidth();var _9e=_9d/2;switch(this.type){case 1:this.setSnapToGridAnchor(new Point(_9d,_9d));break;case 2:this.setSnapToGridAnchor(new Point(_9e,_9d));break;case 3:this.setSnapToGridAnchor(new Point(0,_9d));break;case 4:this.setSnapToGridAnchor(new Point(0,_9e));break;case 5:this.setSnapToGridAnchor(new Point(0,0));break;case 6:this.setSnapToGridAnchor(new Point(_9e,0));break;case 7:this.setSnapToGridAnchor(new Point(_9d,0));break;case 8:this.setSnapToGridAnchor(new Point(_9d,_9e));case 9:this.setSnapToGridAnchor(new Point(_9e,_9e));break;}this.setBackgroundColor(new Color(0,255,0));this.setWorkflow(_9b);this.setZOrder(10000);};ResizeHandle.prototype=new Rectangle;ResizeHandle.prototype.type="ResizeHandle";ResizeHandle.prototype.getSnapToDirection=function(){switch(this.type){case 1:return SnapToHelper.NORTH_WEST;case 2:return SnapToHelper.NORTH;case 3:return SnapToHelper.NORTH_EAST;case 4:return SnapToHelper.EAST;case 5:return SnapToHelper.SOUTH_EAST;case 6:return SnapToHelper.SOUTH;case 7:return SnapToHelper.SOUTH_WEST;case 8:return SnapToHelper.WEST;case 9:return SnapToHelper.CENTER;}};ResizeHandle.prototype.onDragend=function(){var _9f=this.workflow.currentSelection;if(this.commandMove!=null){this.commandMove.setPosition(_9f.getX(),_9f.getY());this.workflow.getCommandStack().execute(this.commandMove);this.commandMove=null;}if(this.commandResize!=null){this.commandResize.setDimension(_9f.getWidth(),_9f.getHeight());this.workflow.getCommandStack().execute(this.commandResize);this.commandResize=null;}this.workflow.hideSnapToHelperLines();};ResizeHandle.prototype.setPosition=function(_a0,_a1){this.x=_a0;this.y=_a1;this.html.style.left=this.x+"px";this.html.style.top=this.y+"px";};ResizeHandle.prototype.onDragstart=function(x,y){if(!this.canDrag){return false;}var _a4=this.workflow.currentSelection;this.commandMove=_a4.createCommand(new EditPolicy(EditPolicy.MOVE));this.commandResize=_a4.createCommand(new EditPolicy(EditPolicy.RESIZE));return true;};ResizeHandle.prototype.onDrag=function(){var _a5=this.getX();var _a6=this.getY();Rectangle.prototype.onDrag.call(this);var _a7=_a5-this.getX();var _a8=_a6-this.getY();var _a9=this.workflow.currentSelection.getX();var _aa=this.workflow.currentSelection.getY();var _ab=this.workflow.currentSelection.getWidth();var _ac=this.workflow.currentSelection.getHeight();switch(this.type){case 1:this.workflow.currentSelection.setPosition(_a9-_a7,_aa-_a8);this.workflow.currentSelection.setDimension(_ab+_a7,_ac+_a8);break;case 2:this.workflow.currentSelection.setPosition(_a9,_aa-_a8);this.workflow.currentSelection.setDimension(_ab,_ac+_a8);break;case 3:this.workflow.currentSelection.setPosition(_a9,_aa-_a8);this.workflow.currentSelection.setDimension(_ab-_a7,_ac+_a8);break;case 4:this.workflow.currentSelection.setPosition(_a9,_aa);this.workflow.currentSelection.setDimension(_ab-_a7,_ac);break;case 5:this.workflow.currentSelection.setPosition(_a9,_aa);this.workflow.currentSelection.setDimension(_ab-_a7,_ac-_a8);break;case 6:this.workflow.currentSelection.setPosition(_a9,_aa);this.workflow.currentSelection.setDimension(_ab,_ac-_a8);break;case 7:this.workflow.currentSelection.setPosition(_a9-_a7,_aa);this.workflow.currentSelection.setDimension(_ab+_a7,_ac-_a8);break;case 8:this.workflow.currentSelection.setPosition(_a9-_a7,_aa);this.workflow.currentSelection.setDimension(_ab+_a7,_ac);break;}this.workflow.moveResizeHandles(this.workflow.getCurrentSelection());};ResizeHandle.prototype.setCanDrag=function(_ad){Rectangle.prototype.setCanDrag.call(this,_ad);if(!_ad){this.html.style.cursor="";return;}switch(this.type){case 1:this.html.style.cursor="nw-resize";break;case 2:this.html.style.cursor="s-resize";break;case 3:this.html.style.cursor="ne-resize";break;case 4:this.html.style.cursor="w-resize";break;case 5:this.html.style.cursor="se-resize";break;case 6:this.html.style.cursor="n-resize";break;case 7:this.html.style.cursor="sw-resize";break;case 8:this.html.style.cursor="e-resize";break;case 9:this.html.style.cursor="resize";break;}};ResizeHandle.prototype.onKeyDown=function(_ae,_af){this.workflow.onKeyDown(_ae,_af);};ResizeHandle.prototype.fireMoveEvent=function(){};