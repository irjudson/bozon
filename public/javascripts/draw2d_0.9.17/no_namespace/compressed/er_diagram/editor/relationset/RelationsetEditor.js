/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

RelationsetEditor=function(id,_da7){Workflow.call(this,id);this.relationset=_da7;var _da8=this.relationset.getTableAliasModels();for(var i=0;i<_da8.getSize();i++){var _daa=new TableAliasFigure(_da8.get(i));this.addFigure(_daa);}};RelationsetEditor.prototype=new Workflow;RelationsetEditor.prototype.type="RelationsetEditor";