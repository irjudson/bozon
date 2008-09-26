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

/**
 * A factory for creating new EditParts. EditPartViewers can be configured with an EditPartFactory.
 * Whenever an EditPart in that viewer needs to create another EditPart, it can use the Viewer's factory.
 * The factory is also used by the viewer whenever EditPartViewer.setContents(Object)  is called.
 * 
 * @version 0.9.17
 * @author Andreas Herz
 * @since 0.9.15
 * @constructor
 */
draw2d.GraphicalViewer=function(/*:String*/ id)
{
   draw2d.Workflow.call(this,id);

   this.factory = null; //draw2d.EditPartFactory
   this.model   = null; //draw2d.ArrayList<AbstractObjectModel>
   this.initDone= false;
}


draw2d.GraphicalViewer.prototype = new draw2d.Workflow;
/** @private **/
draw2d.GraphicalViewer.prototype.type="draw2d.GraphicalViewer";


draw2d.GraphicalViewer.prototype.setEditPartFactory=function(/*:draw2d.EditPartFactory*/ factory )
{
   this.factory = factory;
   this.checkInit();
}

draw2d.GraphicalViewer.prototype.setModel=function(/*:draw2d.AbstractObjectModel*/ model )
{
   if(model instanceof draw2d.AbstractObjectModel)
   {
     this.model = model;
     this.checkInit();
   }
   else
   {
     alert("Invalid model class type:"+model.type);
   }
}

/**
 *
 * @private
 **/
draw2d.GraphicalViewer.prototype.checkInit=function()
{
   if(this.factory !=null && this.model!=null && this.initDone==false)
   {
     var children = this.model.getModelChildren();
     var count = children.getSize();
     for(var i=0;i<count;i++)
     {
       var child = children.get(i);
       var figure = this.factory.createEditPart(child);
       figure.setId(child.getId());
       this.addFigure(figure);
     }

     // all figures are added. create now the transistions between these figures
     //
     var figures = this.getDocument().getFigures();
     var count = figures.getSize();
     for(var i=0;i<count;i++)
     {
       var figure = figures.get(i);
       if(figure instanceof draw2d.Node)
       {
         var connections = figure.getModelSourceConnections();
//         alert(connections.getSize());
       }
     }
   }
}

/**
 *
 * @private
 **/
draw2d.GraphicalViewer.prototype.refreshConnections=function(/*:draw2d.Node*/ node )
{
   try
   {
     // check if all required connections already exists
     var modelConnect = node.getModelSourceConnections();

     var count = modelConnect.getSize();
     for(var i=0;i<count;i++)
     {
        var lineModel = modelConnect.get(i);

        var lineFigure= this.getLine(lineModel.getId());
        if(lineFigure==null)
        {
           lineFigure = this.factory.createEditPart(lineModel);
           var sourceModel = lineModel.getSourceModel();
           var targetModel = lineModel.getTargetModel();

           var sourceFigure= this.getFigure(sourceModel.getId());
           var targetFigure= this.getFigure(targetModel.getId());

           var sourcePort = sourceFigure.getPort(lineModel.getSourcePortName());
           var targetPort = targetFigure.getPort(lineModel.getTargetPortName());

           lineFigure.setTarget(targetPort);
           lineFigure.setSource(sourcePort);
           this.addFigure(lineFigure);
        }
     }
   }
   catch(e)
   {
      alert(e);
   }
}
