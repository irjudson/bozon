/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SelectionHighlighter=function(_26f3){this.workflow=_26f3;this.counter=0;this.black=new draw2d.Color(0,0,0);this.gray=new draw2d.Color(200,200,200);};draw2d.SelectionHighlighter.prototype.type="SelectionHighlighter";draw2d.SelectionHighlighter.prototype.onSelectionChanged=function(_26f4){this.counter++;debugLabel.setText("Count:"+this.counter);var alpha=(_26f4==null)?1:0.2;var color=(_26f4==null)?this.black:this.gray;var doc=this.workflow.getDocument();var _26f8=doc.getFigures();for(var i=0;i<_26f8.getSize();i++){_26f8.get(i).setAlpha(alpha);}var lines=doc.getLines();for(var i=0;i<lines.getSize();i++){lines.get(i).setColor(color);}if(_26f4!=null){_26f4.setAlpha(1);if(_26f4 instanceof draw2d.Node){var ports=_26f4.getPorts();for(var i=0;i<ports.getSize();i++){var port=ports.get(i);var _26fd=port.getConnections();for(var j=0;j<_26fd.getSize();j++){_26fd.get(j).setColor(this.black);}}}}};