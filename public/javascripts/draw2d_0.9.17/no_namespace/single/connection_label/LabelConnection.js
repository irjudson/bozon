LabelConnection=function(){
Connection.call(this);
var label=new Label("Message");
label.setBackgroundColor(new Color(230,230,250));
label.setBorder(new LineBorder(1));
this.addFigure(label,new ManhattanMidpointLocator(this));
};
LabelConnection.prototype=new Connection;
LabelConnection.prototype.type="LabelConnection";
