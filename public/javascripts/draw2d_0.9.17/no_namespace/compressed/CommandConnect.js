/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandConnect=function(_1595,_1596,_1597){Command.call(this,"create connection");this.workflow=_1595;this.source=_1596;this.target=_1597;this.connection=null;};CommandConnect.prototype=new Command;CommandConnect.prototype.type="CommandConnect";CommandConnect.prototype.setConnection=function(_1598){this.connection=_1598;};CommandConnect.prototype.execute=function(){if(this.connection==null){this.connection=new Connection();}this.connection.setSource(this.source);this.connection.setTarget(this.target);this.workflow.addFigure(this.connection);};CommandConnect.prototype.redo=function(){this.workflow.addFigure(this.connection);this.connection.reconnect();};CommandConnect.prototype.undo=function(){this.workflow.removeFigure(this.connection);};