draw2d.ToolGroup=function(_4ee7){draw2d.ToolGeneric.call(this,_4ee7);this.setTooltip("Form Group");};draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;draw2d.ToolGroup.prototype.type="ToolGroup";draw2d.ToolGroup.prototype.execute=function(x,y){var _4eea=new draw2d.GroupFigure();_4eea.setDimension(100,60);this.palette.workflow.addFigure(_4eea,x,y);draw2d.ToolGeneric.prototype.execute.call(this,x,y);};