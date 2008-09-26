/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ColorDialog=function(){this.maxValue={"h":"359","s":"100","v":"100"};this.HSV={0:359,1:100,2:100};this.slideHSV={0:359,1:100,2:100};this.SVHeight=165;this.wSV=162;this.wH=162;Dialog.call(this,"Color Chooser");this.loadSV();this.setColor(new Color(255,0,0));this.setDimension(219,244);};ColorDialog.prototype=new Dialog;ColorDialog.prototype.type="ColorDialog";ColorDialog.prototype.createHTMLElement=function(){var oThis=this;var item=Dialog.prototype.createHTMLElement.call(this);this.outerDiv=document.createElement("div");this.outerDiv.id="plugin";this.outerDiv.style.top="15px";this.outerDiv.style.left="0px";this.outerDiv.style.width="201px";this.outerDiv.style.position="absolute";this.outerDiv.style.padding="9px";this.outerDiv.display="block";this.outerDiv.style.background="#0d0d0d";this.plugHEX=document.createElement("div");this.plugHEX.id="plugHEX";this.plugHEX.innerHTML="F1FFCC";this.plugHEX.style.color="white";this.plugHEX.style.font="normal 10px verdana";this.outerDiv.appendChild(this.plugHEX);this.SV=document.createElement("div");this.SV.onmousedown=function(event){oThis.mouseDownSV(oThis.SVslide,event);};this.SV.id="SV";this.SV.style.cursor="crosshair";this.SV.style.background="#FF0000 url(SatVal.png)";this.SV.style.position="absolute";this.SV.style.height="166px";this.SV.style.width="167px";this.SV.style.marginRight="10px";this.SV.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='SatVal.png', sizingMethod='scale')";this.SV.style["float"]="left";this.outerDiv.appendChild(this.SV);this.SVslide=document.createElement("div");this.SVslide.onmousedown=function(event){oThis.mouseDownSV(event);};this.SVslide.style.top="40px";this.SVslide.style.left="40px";this.SVslide.style.position="absolute";this.SVslide.style.cursor="crosshair";this.SVslide.style.background="url(slide.gif)";this.SVslide.style.height="9px";this.SVslide.style.width="9px";this.SVslide.style.lineHeight="1px";this.outerDiv.appendChild(this.SVslide);this.H=document.createElement("form");this.H.id="H";this.H.onmousedown=function(event){oThis.mouseDownH(event);};this.H.style.border="1px solid #000000";this.H.style.cursor="crosshair";this.H.style.position="absolute";this.H.style.width="19px";this.H.style.top="28px";this.H.style.left="191px";this.outerDiv.appendChild(this.H);this.Hslide=document.createElement("div");this.Hslide.style.top="-7px";this.Hslide.style.left="-8px";this.Hslide.style.background="url(slideHue.gif)";this.Hslide.style.height="5px";this.Hslide.style.width="33px";this.Hslide.style.position="absolute";this.Hslide.style.lineHeight="1px";this.H.appendChild(this.Hslide);this.Hmodel=document.createElement("div");this.Hmodel.style.height="1px";this.Hmodel.style.width="19px";this.Hmodel.style.lineHeight="1px";this.Hmodel.style.margin="0px";this.Hmodel.style.padding="0px";this.Hmodel.style.fontSize="1px";this.H.appendChild(this.Hmodel);item.appendChild(this.outerDiv);return item;};ColorDialog.prototype.onOk=function(){Dialog.prototype.onOk.call(this);};browser=function(v){return (Math.max(navigator.userAgent.toLowerCase().indexOf(v),0));};ColorDialog.prototype.showColor=function(c){this.plugHEX.style.background="#"+c;this.plugHEX.innerHTML=c;};ColorDialog.prototype.getSelectedColor=function(){var rgb=this.hex2rgb(this.plugHEX.innerHTML);return new Color(rgb[0],rgb[1],rgb[2]);};ColorDialog.prototype.setColor=function(color){if(color==null){color=new Color(100,100,100);}var hex=this.rgb2hex(Array(color.getRed(),color.getGreen(),color.getBlue()));this.updateH(hex);};ColorDialog.prototype.XY=function(e,v){var z=browser("msie")?Array(event.clientX+document.body.scrollLeft,event.clientY+document.body.scrollTop):Array(e.pageX,e.pageY);return z[v];};ColorDialog.prototype.mkHSV=function(a,b,c){return (Math.min(a,Math.max(0,Math.ceil((parseInt(c)/b)*a))));};ColorDialog.prototype.ckHSV=function(a,b){if(a>=0&&a<=b){return (a);}else{if(a>b){return (b);}else{if(a<0){return ("-"+oo);}}}};ColorDialog.prototype.mouseDownH=function(e){this.slideHSV[0]=this.HSV[0];var oThis=this;this.H.onmousemove=function(e){oThis.dragH(e);};this.H.onmouseup=function(e){oThis.H.onmousemove="";oThis.H.onmouseup="";};this.dragH(e);};ColorDialog.prototype.dragH=function(e){var y=this.XY(e,1)-this.getY()-40;this.Hslide.style.top=(this.ckHSV(y,this.wH)-5)+"px";this.slideHSV[0]=this.mkHSV(359,this.wH,this.Hslide.style.top);this.updateSV();this.showColor(this.commit());this.SV.style.backgroundColor="#"+this.hsv2hex(Array(this.HSV[0],100,100));};ColorDialog.prototype.mouseDownSV=function(o,e){this.slideHSV[0]=this.HSV[0];var oThis=this;function reset(){oThis.SV.onmousemove="";oThis.SV.onmouseup="";oThis.SVslide.onmousemove="";oThis.SVslide.onmouseup="";}this.SV.onmousemove=function(e){oThis.dragSV(e);};this.SV.onmouseup=reset;this.SVslide.onmousemove=function(e){oThis.dragSV(e);};this.SVslide.onmouseup=reset;this.dragSV(e);};ColorDialog.prototype.dragSV=function(e){var x=this.XY(e,0)-this.getX()-1;var y=this.XY(e,1)-this.getY()-20;this.SVslide.style.left=this.ckHSV(x,this.wSV)+"px";this.SVslide.style.top=this.ckHSV(y,this.wSV)+"px";this.slideHSV[1]=this.mkHSV(100,this.wSV,this.SVslide.style.left);this.slideHSV[2]=100-this.mkHSV(100,this.wSV,this.SVslide.style.top);this.updateSV();};ColorDialog.prototype.commit=function(){var r="hsv";var z={};var j="";for(var i=0;i<=r.length-1;i++){j=r.substr(i,1);z[i]=(j=="h")?this.maxValue[j]-this.mkHSV(this.maxValue[j],this.wH,this.Hslide.style.top):this.HSV[i];}return (this.updateSV(this.hsv2hex(z)));};ColorDialog.prototype.updateSV=function(v){this.HSV=v?this.hex2hsv(v):Array(this.slideHSV[0],this.slideHSV[1],this.slideHSV[2]);if(!v){v=this.hsv2hex(Array(this.slideHSV[0],this.slideHSV[1],this.slideHSV[2]));}this.showColor(v);return v;};ColorDialog.prototype.loadSV=function(){var z="";for(var i=this.SVHeight;i>=0;i--){z+="<div style=\"background:#"+this.hsv2hex(Array(Math.round((359/this.SVHeight)*i),100,100))+";\"><br/></div>";}this.Hmodel.innerHTML=z;};ColorDialog.prototype.updateH=function(v){this.plugHEX.innerHTML=v;this.HSV=this.hex2hsv(v);this.SV.style.backgroundColor="#"+this.hsv2hex(Array(this.HSV[0],100,100));this.SVslide.style.top=(parseInt(this.wSV-this.wSV*(this.HSV[1]/100))+20)+"px";this.SVslide.style.left=(parseInt(this.wSV*(this.HSV[1]/100))+5)+"px";this.Hslide.style.top=(parseInt(this.wH*((this.maxValue["h"]-this.HSV[0])/this.maxValue["h"]))-7)+"px";};ColorDialog.prototype.toHex=function(v){v=Math.round(Math.min(Math.max(0,v),255));return ("0123456789ABCDEF".charAt((v-v%16)/16)+"0123456789ABCDEF".charAt(v%16));};ColorDialog.prototype.hex2rgb=function(r){return ({0:parseInt(r.substr(0,2),16),1:parseInt(r.substr(2,2),16),2:parseInt(r.substr(4,2),16)});};ColorDialog.prototype.rgb2hex=function(r){return (this.toHex(r[0])+this.toHex(r[1])+this.toHex(r[2]));};ColorDialog.prototype.hsv2hex=function(h){return (this.rgb2hex(this.hsv2rgb(h)));};ColorDialog.prototype.hex2hsv=function(v){return (this.rgb2hsv(this.hex2rgb(v)));};ColorDialog.prototype.rgb2hsv=function(r){var max=Math.max(r[0],r[1],r[2]);var delta=max-Math.min(r[0],r[1],r[2]);var H;var S;var V;if(max!=0){S=Math.round(delta/max*100);if(r[0]==max){H=(r[1]-r[2])/delta;}else{if(r[1]==max){H=2+(r[2]-r[0])/delta;}else{if(r[2]==max){H=4+(r[0]-r[1])/delta;}}}var H=Math.min(Math.round(H*60),360);if(H<0){H+=360;}}return ({0:H?H:0,1:S?S:0,2:Math.round((max/255)*100)});};ColorDialog.prototype.hsv2rgb=function(r){var R;var B;var G;var S=r[1]/100;var V=r[2]/100;var H=r[0]/360;if(S>0){if(H>=1){H=0;}H=6*H;F=H-Math.floor(H);A=Math.round(255*V*(1-S));B=Math.round(255*V*(1-(S*F)));C=Math.round(255*V*(1-(S*(1-F))));V=Math.round(255*V);switch(Math.floor(H)){case 0:R=V;G=C;B=A;break;case 1:R=B;G=V;B=A;break;case 2:R=A;G=V;B=C;break;case 3:R=A;G=B;B=V;break;case 4:R=C;G=A;B=V;break;case 5:R=V;G=A;B=B;break;}return ({0:R?R:0,1:G?G:0,2:B?B:0});}else{return ({0:(V=Math.round(V*255)),1:V,2:V});}};