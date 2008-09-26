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
draw2d.Border=function()
{
/** @private **/
  this.color = null;
}

draw2d.Border.prototype.type="draw2d.Border";

/**
 * @private
 **/
draw2d.Border.prototype.dispose=function()
{
  this.color=null;
}

/**
 * @private
 **/
draw2d.Border.prototype.getHTMLStyle = function()
{
  return "";
}

/**
 * @param {draw2d.Color} c The new color of the border figure
 **/
draw2d.Border.prototype.setColor= function(c /*:draw2d.Color*/)
{
  this.color=c;
}

/**
 * @type draw2d.Color
 **/
draw2d.Border.prototype.getColor=function()
{
  return this.color;
}

/**
 * Sub class must implement this method to refresh the correspondig figure.
 * @private
 **/
draw2d.Border.prototype.refresh=function()
{
}