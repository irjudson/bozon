/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandMoveTable=function(_de2){Command.call(this,"move model");this.model=_de2;this.oldX=_de2.getPosition().getX();this.oldY=_de2.getPosition().getY();};CommandMoveTable.prototype=new Command;CommandMoveTable.prototype.type="CommandMoveTable";CommandMoveTable.prototype.setPosition=function(x,y){this.newX=x;this.newY=y;};CommandMoveTable.prototype.canExecute=function(){return this.newX!=this.oldX||this.newY!=this.oldY;};CommandMoveTable.prototype.execute=function(){this.redo();};CommandMoveTable.prototype.undo=function(){this.model.setPosition(this.oldX,this.oldY);};CommandMoveTable.prototype.redo=function(){this.model.setPosition(this.newX,this.newY);};