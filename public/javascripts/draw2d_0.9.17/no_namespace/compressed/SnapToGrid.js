/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

SnapToGrid=function(_d6c){SnapToHelper.call(this,_d6c);};SnapToGrid.prototype=new SnapToHelper;SnapToGrid.prototype.type="SnapToGrid";SnapToGrid.prototype.snapPoint=function(_d6d,_d6e,_d6f){_d6f.x=this.workflow.gridWidthX*Math.floor(((_d6e.x+this.workflow.gridWidthX/2)/this.workflow.gridWidthX));_d6f.y=this.workflow.gridWidthY*Math.floor(((_d6e.y+this.workflow.gridWidthY/2)/this.workflow.gridWidthY));return 0;};SnapToGrid.prototype.snapRectangle=function(_d70,_d71){_d71.x=_d70.x;_d71.y=_d70.y;_d71.w=_d70.w;_d71.h=_d70.h;return 0;};