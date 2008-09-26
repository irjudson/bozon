XMLSerializer_01=function(){
};
XMLSerializer_01.prototype.type="XMLSerializer_01";
XMLSerializer_01.prototype.toXML=function(_36c5){
var xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";
xml=xml+"<form>\n";
var _36c7=_36c5.getFigures();
for(var i=0;i<_36c7.getSize();i++){
var _36c9=_36c7.get(i);
xml=xml+"<"+_36c9.type+" x=\""+_36c9.getX()+"\" y=\""+_36c9.getY()+"\" id=\""+_36c9.getId()+"\">\n";
xml=xml+this.getPropertyXML(_36c9,"   ");
if(_36c9 instanceof CompartmentFigure){
xml=xml+this.getChildXML(_36c9,"   ");
}
xml=xml+"</"+_36c9.type+">\n";
}
xml=xml+"</form>\n";
return xml;
};
XMLSerializer_01.prototype.getChildXML=function(_36ca,_36cb){
var xml="";
var _36cd=_36ca.getChildren();
for(var i=0;i<_36cd.getSize();i++){
var _36cf=_36cd.get(i);
xml=xml+_36cb+"<"+_36cf.type+" x=\""+_36cf.getX()+"\" y=\""+_36cf.getY()+"\" id=\""+_36cf.getId()+"\">\n";
xml=xml+this.getPropertyXML(_36cf,"   "+_36cb);
if(_36cf instanceof CompartmentFigure){
xml=xml+this.getChildXML(_36cf,"   "+_36cb);
}
xml=xml+_36cb+"</"+_36cf.type+">\n";
}
return xml;
};
XMLSerializer_01.prototype.getPropertyXML=function(_36d0,_36d1){
var xml="";
var _36d3=_36d0.getProperties();
for(key in _36d3){
var value=_36d3[key];
if(value!=null){
xml=xml+_36d1+"<property name=\""+key+"\" value=\""+value+"\">\n";
}
}
return xml;
};
