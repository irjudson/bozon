/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandAdd=function(_15d0,_15d1,x,y,_15d4){Command.call(this,"add figure");this.parent=_15d4;this.figure=_15d1;this.x=x;this.y=y;this.workflow=_15d0;};CommandAdd.prototype=new Command;CommandAdd.prototype.type="CommandAdd";CommandAdd.prototype.execute=function(){this.redo();};CommandAdd.prototype.redo=function(){if(this.x&&this.y){this.workflow.addFigure(this.figure,this.x,this.y);}else{this.workflow.addFigure(this.figure);}this.workflow.setCurrentSelection(this.figure);if(this.parent!=null){this.parent.addChild(this.figure);}};CommandAdd.prototype.undo=function(){this.workflow.removeFigure(this.figure);this.workflow.setCurrentSelection(null);if(this.parent!=null){this.parent.removeChild(this.figure);}};