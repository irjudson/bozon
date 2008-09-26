/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

RelationsetEditor=function(id,_2110){draw2d.Workflow.call(this,id);this.relationset=_2110;var _2111=this.relationset.getTableAliasModels();for(var i=0;i<_2111.getSize();i++){var _2113=new TableAliasFigure(_2111.get(i));this.addFigure(_2113);}};RelationsetEditor.prototype=new draw2d.Workflow;RelationsetEditor.prototype.type="RelationsetEditor";