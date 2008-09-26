ArrowLine=function(){
this.lineColor=new Color(0,0,0);
this.stroke=1;
this.canvas=null;
this.workflow=null;
this.html=null;
this.graphics=null;
this.id=UUID.create();
this.startX=30;
this.startY=30;
this.endX=100;
this.endY=100;
this.zOrder=ArrowLine.ZOrderBaseIndex;
this.setSelectable(true);
this.setDeleteable(true);
this.arrowWidth=10;
this.arrowLength=20;
this.lineWidth=5;
};
ArrowLine.prototype=new Line;
ArrowLine.prototype.type="ArrowLine";
ArrowLine.prototype.paint=function(){
if(this.graphics==null){
this.graphics=new jsGraphics(this.id);
}else{
this.graphics.clear();
}
this.graphics.setStroke(this.stroke);
this.graphics.setColor(this.lineColor.getHTMLStyle());
var endY=this.getLength();
var _450d=[0,0,endY-this.arrowLength,endY-this.arrowLength,endY,endY-this.arrowLength,endY-this.arrowLength,0];
var _450e=[-this.lineWidth,+this.lineWidth,+this.lineWidth,this.lineWidth+this.arrowWidth/2,0,-(this.lineWidth+this.arrowWidth/2),-this.lineWidth,-this.lineWidth];
var _450f=this.getAngle()*Math.PI/180;
var rotX=new Array();
var rotY=new Array();
for(var i=0;i<_450d.length;i++){
rotX[i]=this.startX+_450d[i]*Math.cos(_450f)-_450e[i]*Math.sin(_450f);
rotY[i]=this.startY+_450d[i]*Math.sin(_450f)+_450e[i]*Math.cos(_450f);
}
this.graphics.drawPolyLine(rotX,rotY);
this.graphics.paint();
};
