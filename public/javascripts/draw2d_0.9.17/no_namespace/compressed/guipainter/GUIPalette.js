/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

GUIPalette=function(){ToolPalette.call(this,"Tools");this.tool1=new ToolGroup(this);this.tool2=new ToolInputBox(this);this.tool3=new ToolCheckBox(this);this.tool4=new ToolFormButton(this);this.tool1.setPosition(10,30);this.tool2.setPosition(10,80);this.tool3.setPosition(40,80);this.tool4.setPosition(10,130);this.addChild(this.tool1);this.addChild(this.tool2);this.addChild(this.tool3);this.addChild(this.tool4);this.undoTool=new ToolUndo(this);this.undoTool.setPosition(10,200);this.undoTool.setEnabled(false);this.addChild(this.undoTool);this.redoTool=new ToolRedo(this);this.redoTool.setPosition(40,200);this.redoTool.setEnabled(false);this.addChild(this.redoTool);this.clearTool=new ToolClear(this);this.clearTool.setPosition(40,250);this.clearTool.setEnabled(true);this.addChild(this.clearTool);};GUIPalette.prototype=new ToolPalette;GUIPalette.prototype.onSetDocumentDirty=function(){this.undoTool.setEnabled(this.workflow.getCommandStack().canUndo());this.redoTool.setEnabled(this.workflow.getCommandStack().canRedo());};