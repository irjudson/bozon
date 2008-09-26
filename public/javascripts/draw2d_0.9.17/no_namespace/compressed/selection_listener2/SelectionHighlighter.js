/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

SelectionHighlighter=function(_df0){this.workflow=_df0;this.counter=0;this.black=new Color(0,0,0);this.gray=new Color(200,200,200);};SelectionHighlighter.prototype.type="SelectionHighlighter";SelectionHighlighter.prototype.onSelectionChanged=function(_df1){this.counter++;debugLabel.setText("Count:"+this.counter);var _df2=(_df1==null)?1:0.2;var _df3=(_df1==null)?this.black:this.gray;var doc=this.workflow.getDocument();var _df5=doc.getFigures();for(var i=0;i<_df5.getSize();i++){_df5.get(i).setAlpha(_df2);}var _df7=doc.getLines();for(var i=0;i<_df7.getSize();i++){_df7.get(i).setColor(_df3);}if(_df1!=null){_df1.setAlpha(1);if(_df1 instanceof Node){var _df8=_df1.getPorts();for(var i=0;i<_df8.getSize();i++){var port=_df8.get(i);var _dfa=port.getConnections();for(var j=0;j<_dfa.getSize();j++){_dfa.get(j).setColor(this.black);}}}}};