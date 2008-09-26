/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

TableFigure=function(){this.table=null;this.header=null;Node.call(this);this.setResizeable(false);};TableFigure.prototype=new Node;TableFigure.prototype.type="TableFigure";TableFigure.prototype.paint=function(){var _1cc=this.getModel();this.setPosition(_1cc.getPosition().x,_1cc.getPosition().y);this.header.innerHTML=_1cc.getName();this.setDimension(this.getWidth(),this.getHeight());var _1cd=this.model.getFieldModels();for(var i=0;i<_1cd.getSize();i++){this.addColumn(_1cd.get(i).getName(),_1cd.get(i).getExtendedDescriptionLabel());}};TableFigure.prototype.propertyChange=function(_1cf){switch(_1cf.property){case TableModel.EVENT_POSITION_CHANGED:this.setPosition(_1cf.newValue.x,_1cf.newValue.y);break;case TableModel.EVENT_FIELD_ADDED:this.addColumn(_1cf.newValue.getName(),_1cf.newValue.getExtendedDescriptionLabel());break;case TableModel.EVENT_KEY_ADDED:this.refreshConnections();break;case TableModel.EVENT_NAME_CHANGED:this.header.innerHTML=model.getName();break;}};TableFigure.prototype.createCommand=function(_1d0){if(_1d0.getPolicy()==EditPolicy.MOVE){if(!this.canDrag){return null;}return new CommandMoveTable(this.model);}return null;};TableFigure.prototype.createHTMLElement=function(){var item=Node.prototype.createHTMLElement.call(this);item.style.width="100px";item.style.height="100px";item.style.margin="0px";item.style.padding="0px";this.table=document.createElement("table");this.table.style.fontSize="8pt";this.table.style.margin="0px";this.table.style.padding="0px";this.table.cellPadding="0";this.table.cellSpacing="0";var row=this.table.insertRow(0);this.header=row.insertCell(0);this.header.innerHTML="";this.header.colSpan="2";this.header.style.background="transparent url(header.png) repeat-x";this.header.style.height="25px";this.header.style.paddingLeft="5px";this.header.style.paddingRight="5px";this.disableTextSelection(this.header);item.appendChild(this.table);return item;};TableFigure.prototype.getWidth=function(){if(this.table==null){return 10;}if(window.getComputedStyle){return parseInt(getComputedStyle(this.table,"").getPropertyValue("width"));}return (this.table.clientWidth);};TableFigure.prototype.getHeight=function(){if(this.table==null){return 10;}if(window.getComputedStyle){return parseInt(getComputedStyle(this.table,"").getPropertyValue("height"));}return (this.table.clientHeight);};TableFigure.prototype.addColumn=function(name,_1d4){var x=this.table.insertRow(this.table.rows.length);var y=x.insertCell(0);y.innerHTML=_1d4;y.style.backgroundColor="gray";y.style.whiteSpace="nowrap";y.style.padding="2px";this.disableTextSelection(y);this.setDimension(this.getWidth(),this.getHeight());var port=new InputFieldFigure();port.setWorkflow(this.workflow);port.setName("in_"+name);this.addPort(port,-5,y.offsetTop+y.clientHeight/2);port.paint();var port=new OutputFieldFigure();port.setWorkflow(this.workflow);port.setName("out_"+name);this.addPort(port,y.offsetWidth+5,y.offsetTop+y.clientHeight/2);port.paint();};TableFigure.prototype.getModelSourceConnections=function(){return this.getModel().getForeignKeyModels();};