SelectionHighlighter=function(_3e68){
this.workflow=_3e68;
this.counter=0;
this.black=new Color(0,0,0);
this.gray=new Color(200,200,200);
};
SelectionHighlighter.prototype.type="SelectionHighlighter";
SelectionHighlighter.prototype.onSelectionChanged=function(_3e69){
this.counter++;
debugLabel.setText("Count:"+this.counter);
var alpha=(_3e69==null)?1:0.2;
var color=(_3e69==null)?this.black:this.gray;
var doc=this.workflow.getDocument();
var _3e6d=doc.getFigures();
for(var i=0;i<_3e6d.getSize();i++){
_3e6d.get(i).setAlpha(alpha);
}
var lines=doc.getLines();
for(var i=0;i<lines.getSize();i++){
lines.get(i).setColor(color);
}
if(_3e69!=null){
_3e69.setAlpha(1);
if(_3e69 instanceof Node){
var ports=_3e69.getPorts();
for(var i=0;i<ports.getSize();i++){
var port=ports.get(i);
var _3e72=port.getConnections();
for(var j=0;j<_3e72.getSize();j++){
_3e72.get(j).setColor(this.black);
}
}
}
}
};
