/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SnapToGrid=function(_2164){draw2d.SnapToHelper.call(this,_2164);};draw2d.SnapToGrid.prototype=new draw2d.SnapToHelper;draw2d.SnapToGrid.prototype.type="draw2d.SnapToGrid";draw2d.SnapToGrid.prototype.snapPoint=function(_2165,_2166,_2167){_2167.x=this.workflow.gridWidthX*Math.floor(((_2166.x+this.workflow.gridWidthX/2)/this.workflow.gridWidthX));_2167.y=this.workflow.gridWidthY*Math.floor(((_2166.y+this.workflow.gridWidthY/2)/this.workflow.gridWidthY));return 0;};draw2d.SnapToGrid.prototype.snapRectangle=function(_2168,_2169){_2169.x=_2168.x;_2169.y=_2168.y;_2169.w=_2168.w;_2169.h=_2168.h;return 0;};