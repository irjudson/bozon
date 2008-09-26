/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandMove=function(_1454,x,y){Command.call(this,"move figure");this.figure=_1454;if(x==undefined){this.oldX=_1454.getX();this.oldY=_1454.getY();}else{this.oldX=x;this.oldY=y;}this.oldCompartment=_1454.getParent();};CommandMove.prototype=new Command;CommandMove.prototype.type="CommandMove";CommandMove.prototype.setStartPosition=function(x,y){this.oldX=x;this.oldY=y;};CommandMove.prototype.setPosition=function(x,y){this.newX=x;this.newY=y;this.newCompartment=this.figure.workflow.getBestCompartmentFigure(x,y,this.figure);};CommandMove.prototype.canExecute=function(){return this.newX!=this.oldX||this.newY!=this.oldY;};CommandMove.prototype.execute=function(){this.redo();};CommandMove.prototype.undo=function(){this.figure.setPosition(this.oldX,this.oldY);if(this.newCompartment!=null){this.newCompartment.removeChild(this.figure);}if(this.oldCompartment!=null){this.oldCompartment.addChild(this.figure);}this.figure.workflow.moveResizeHandles(this.figure);};CommandMove.prototype.redo=function(){this.figure.setPosition(this.newX,this.newY);if(this.oldCompartment!=null){this.oldCompartment.removeChild(this.figure);}if(this.newCompartment!=null){this.newCompartment.addChild(this.figure);}this.figure.workflow.moveResizeHandles(this.figure);};