draw2d.ToolInputBox=function(_5a1a){draw2d.ToolGeneric.call(this,_5a1a);};draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;draw2d.ToolInputBox.prototype.type="ToolInputBox";draw2d.ToolInputBox.prototype.execute=function(x,y){var _5a1d=new draw2d.InputBoxFigure();_5a1d.setDimension(100,20);this.palette.workflow.addFigure(_5a1d,x,y);var _5a1e=this.palette.workflow.getBestCompartmentFigure(x,y);if(_5a1e){_5a1e.addChild(_5a1d);}draw2d.ToolGeneric.prototype.execute.call(this,x,y);};