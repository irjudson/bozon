draw2d.ToolOvalUnfilled=function(_5bc7){draw2d.ToolGeneric.call(this,_5bc7);};draw2d.ToolOvalUnfilled.prototype=new draw2d.ToolGeneric;draw2d.ToolOvalUnfilled.prototype.type="ToolOvalUnfilled";draw2d.ToolOvalUnfilled.prototype.execute=function(x,y){var _5bca=new draw2d.Oval();_5bca.setDimension(100,60);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_5bca,x,y));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};