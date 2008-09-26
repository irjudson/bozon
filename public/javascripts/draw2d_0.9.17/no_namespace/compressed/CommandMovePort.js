/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandMovePort=function(port){Command.call(this,"move port");this.port=port;};CommandMovePort.prototype=new Command;CommandMovePort.prototype.type="CommandMovePort";CommandMovePort.prototype.execute=function(){this.port.setAlpha(1);this.port.setPosition(this.port.originX,this.port.originY);this.port.parentNode.workflow.hideConnectionLine();};CommandMovePort.prototype.undo=function(){};CommandMovePort.prototype.redo=function(){};CommandMovePort.prototype.setPosition=function(x,y){};