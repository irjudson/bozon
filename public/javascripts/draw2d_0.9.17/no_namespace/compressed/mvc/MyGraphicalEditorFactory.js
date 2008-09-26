/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyGraphicalEditorFactory=function(){EditPartFactory.call(this);};MyGraphicalEditorFactory.prototype=new EditPartFactory;MyGraphicalEditorFactory.prototype.type="MyGraphicalEditorFactory";MyGraphicalEditorFactory.prototype.createEditPart=function(model){var _160f;if(model instanceof TableModel){_160f=new TableFigure();}if(model instanceof ForeignKeyModel){_160f=new ForeignKeyFigure();}if(_160f==null){alert("factory called with unknown model class:"+model.type);}_160f.setModel(model);return _160f;};