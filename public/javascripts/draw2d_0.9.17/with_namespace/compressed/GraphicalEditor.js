/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.GraphicalEditor=function(id){this.view=new draw2d.GraphicalViewer(id);this.initializeGraphicalViewer();};draw2d.GraphicalEditor.prototype.type="draw2d.GraphicalEditor";draw2d.GraphicalEditor.prototype.initializeGraphicalViewer=function(){};draw2d.GraphicalEditor.prototype.getGraphicalViewer=function(){return this.view;};