/* This notice must be untouched at all times.

Open-jACOB Draw2D
The latest version is available at
http://www.openjacob.org

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/

draw2d.GUIPalette=function()
{
  draw2d.ToolPalette.call(this, "Tools");

  this.tool1 = new draw2d.ToolGroup(this);
  this.tool2 = new draw2d.ToolInputBox(this);
  this.tool3 = new draw2d.ToolCheckBox(this);
  this.tool4 = new draw2d.ToolFormButton(this);

  this.tool1.setPosition(10,30);

  this.tool2.setPosition(10,80);
  this.tool3.setPosition(40,80);
  this.tool4.setPosition(10,130);


  this.addChild(this.tool1);
  this.addChild(this.tool2);
  this.addChild(this.tool3);
  this.addChild(this.tool4);


  // undo / redo support
  //
  this.undoTool = new draw2d.ToolUndo(this);
  this.undoTool.setPosition(10,200);
  this.undoTool.setEnabled(false);
  this.addChild(this.undoTool);


  this.redoTool = new draw2d.ToolRedo(this);
  this.redoTool.setPosition(40,200);
  this.redoTool.setEnabled(false);
  this.addChild(this.redoTool);

  this.clearTool = new draw2d.ToolClear(this);
  this.clearTool.setPosition(40,250);
  this.clearTool.setEnabled(true);
  this.addChild(this.clearTool);
}


draw2d.GUIPalette.prototype = new draw2d.ToolPalette;

draw2d.GUIPalette.prototype.onSetDocumentDirty=function()
{
  this.undoTool.setEnabled(this.workflow.getCommandStack().canUndo());
  this.redoTool.setEnabled(this.workflow.getCommandStack().canRedo());
}
