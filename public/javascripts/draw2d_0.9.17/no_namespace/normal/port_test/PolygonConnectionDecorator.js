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
 *
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
PolygonConnectionDecorator=function()
{
}

PolygonConnectionDecorator.prototype = new ConnectionDecorator;

/**
 **/
PolygonConnectionDecorator.prototype.paint=function(/*:Graphics*/ g)
{
  // draw the background
  //
  g.setColor(new  Color(128,255,255));
  g.fillPolygon([3,15,30,15,3],[0,5,0,-5,0]);

  // draw the border
  g.setColor(new  Color(128,128,255));
  g.setStroke(1);
  g.drawPolygon([3,15,30,15,3],[0,5,0,-5,0]);
}
