/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyGraphicalEditor=function(id,model){this.model=model;GraphicalEditor.call(this,id);};MyGraphicalEditor.prototype=new GraphicalEditor;MyGraphicalEditor.prototype.type="MyGraphicalEditor";MyGraphicalEditor.prototype.initializeGraphicalViewer=function(){this.getGraphicalViewer().setModel(this.model);this.getGraphicalViewer().setEditPartFactory(new MyGraphicalEditorFactory());};