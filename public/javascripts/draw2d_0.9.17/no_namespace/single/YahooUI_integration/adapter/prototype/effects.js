String.prototype.parseColor=function(){
var color="#";
if(this.slice(0,4)=="rgb("){
var cols=this.slice(4,this.length-1).split(",");
var i=0;
do{
color+=parseInt(cols[i]).toColorPart();
}while(++i<3);
}else{
if(this.slice(0,1)=="#"){
if(this.length==4){
for(var i=1;i<4;i++){
color+=(this.charAt(i)+this.charAt(i)).toLowerCase();
}
}
if(this.length==7){
color=this.toLowerCase();
}
}
}
return (color.length==7?color:(arguments[0]||this));
};
Element.collectTextNodes=function(_47e5){
return $A($(_47e5).childNodes).collect(function(node){
return (node.nodeType==3?node.nodeValue:(node.hasChildNodes()?Element.collectTextNodes(node):""));
}).flatten().join("");
};
Element.collectTextNodesIgnoreClass=function(_47e7,_47e8){
return $A($(_47e7).childNodes).collect(function(node){
return (node.nodeType==3?node.nodeValue:((node.hasChildNodes()&&!Element.hasClassName(node,_47e8))?Element.collectTextNodesIgnoreClass(node,_47e8):""));
}).flatten().join("");
};
Element.setContentZoom=function(_47ea,_47eb){
_47ea=$(_47ea);
_47ea.setStyle({fontSize:(_47eb/100)+"em"});
if(navigator.appVersion.indexOf("AppleWebKit")>0){
window.scrollBy(0,0);
}
return _47ea;
};
Element.getOpacity=function(_47ec){
return $(_47ec).getStyle("opacity");
};
Element.setOpacity=function(_47ed,value){
return $(_47ed).setStyle({opacity:value});
};
Element.getInlineOpacity=function(_47ef){
return $(_47ef).style.opacity||"";
};
Element.forceRerendering=function(_47f0){
try{
_47f0=$(_47f0);
var n=document.createTextNode(" ");
_47f0.appendChild(n);
_47f0.removeChild(n);
}
catch(e){
}
};
Array.prototype.call=function(){
var args=arguments;
this.each(function(f){
f.apply(this,args);
});
};
var Effect={_elementDoesNotExistError:{name:"ElementDoesNotExistError",message:"The specified DOM element does not exist, but is required for this effect to operate"},tagifyText:function(_47f4){
if(typeof Builder=="undefined"){
throw ("Effect.tagifyText requires including script.aculo.us' builder.js library");
}
var _47f5="position:relative";
if(/MSIE/.test(navigator.userAgent)&&!window.opera){
_47f5+=";zoom:1";
}
_47f4=$(_47f4);
$A(_47f4.childNodes).each(function(child){
if(child.nodeType==3){
child.nodeValue.toArray().each(function(_47f7){
_47f4.insertBefore(Builder.node("span",{style:_47f5},_47f7==" "?String.fromCharCode(160):_47f7),child);
});
Element.remove(child);
}
});
},multiple:function(_47f8,_47f9){
var _47fa;
if(((typeof _47f8=="object")||(typeof _47f8=="function"))&&(_47f8.length)){
_47fa=_47f8;
}else{
_47fa=$(_47f8).childNodes;
}
var _47fb=Object.extend({speed:0.1,delay:0},arguments[2]||{});
var _47fc=_47fb.delay;
$A(_47fa).each(function(_47fd,index){
new _47f9(_47fd,Object.extend(_47fb,{delay:index*_47fb.speed+_47fc}));
});
},PAIRS:{"slide":["SlideDown","SlideUp"],"blind":["BlindDown","BlindUp"],"appear":["Appear","Fade"]},toggle:function(_47ff,_4800){
_47ff=$(_47ff);
_4800=(_4800||"appear").toLowerCase();
var _4801=Object.extend({queue:{position:"end",scope:(_47ff.id||"global"),limit:1}},arguments[2]||{});
Effect[_47ff.visible()?Effect.PAIRS[_4800][1]:Effect.PAIRS[_4800][0]](_47ff,_4801);
}};
var Effect2=Effect;
Effect.Transitions={linear:Prototype.K,sinoidal:function(pos){
return (-Math.cos(pos*Math.PI)/2)+0.5;
},reverse:function(pos){
return 1-pos;
},flicker:function(pos){
return ((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;
},wobble:function(pos){
return (-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;
},pulse:function(pos,_4807){
_4807=_4807||5;
return (Math.round((pos%(1/_4807))*_4807)==0?((pos*_4807*2)-Math.floor(pos*_4807*2)):1-((pos*_4807*2)-Math.floor(pos*_4807*2)));
},none:function(pos){
return 0;
},full:function(pos){
return 1;
}};
Effect.ScopedQueue=Class.create();
Object.extend(Object.extend(Effect.ScopedQueue.prototype,Enumerable),{initialize:function(){
this.effects=[];
this.interval=null;
},_each:function(_480a){
this.effects._each(_480a);
},add:function(_480b){
var _480c=new Date().getTime();
var _480d=(typeof _480b.options.queue=="string")?_480b.options.queue:_480b.options.queue.position;
switch(_480d){
case "front":
this.effects.findAll(function(e){
return e.state=="idle";
}).each(function(e){
e.startOn+=_480b.finishOn;
e.finishOn+=_480b.finishOn;
});
break;
case "with-last":
_480c=this.effects.pluck("startOn").max()||_480c;
break;
case "end":
_480c=this.effects.pluck("finishOn").max()||_480c;
break;
}
_480b.startOn+=_480c;
_480b.finishOn+=_480c;
if(!_480b.options.queue.limit||(this.effects.length<_480b.options.queue.limit)){
this.effects.push(_480b);
}
if(!this.interval){
this.interval=setInterval(this.loop.bind(this),15);
}
},remove:function(_4810){
this.effects=this.effects.reject(function(e){
return e==_4810;
});
if(this.effects.length==0){
clearInterval(this.interval);
this.interval=null;
}
},loop:function(){
var _4812=new Date().getTime();
for(var i=0,len=this.effects.length;i<len;i++){
if(this.effects[i]){
this.effects[i].loop(_4812);
}
}
}});
Effect.Queues={instances:$H(),get:function(_4814){
if(typeof _4814!="string"){
return _4814;
}
if(!this.instances[_4814]){
this.instances[_4814]=new Effect.ScopedQueue();
}
return this.instances[_4814];
}};
Effect.Queue=Effect.Queues.get("global");
Effect.DefaultOptions={transition:Effect.Transitions.sinoidal,duration:1,fps:60,sync:false,from:0,to:1,delay:0,queue:"parallel"};
Effect.Base=function(){
};
Effect.Base.prototype={position:null,start:function(_4815){
this.options=Object.extend(Object.extend({},Effect.DefaultOptions),_4815||{});
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
Effect.Queues.get(typeof this.options.queue=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_4816){
if(_4816>=this.startOn){
if(_4816>=this.finishOn){
this.render(1);
this.cancel();
this.event("beforeFinish");
if(this.finish){
this.finish();
}
this.event("afterFinish");
return;
}
var pos=(_4816-this.startOn)/(this.finishOn-this.startOn);
var frame=Math.round(pos*this.options.fps*this.options.duration);
if(frame>this.currentFrame){
this.render(pos);
this.currentFrame=frame;
}
}
},render:function(pos){
if(this.state=="idle"){
this.state="running";
this.event("beforeSetup");
if(this.setup){
this.setup();
}
this.event("afterSetup");
}
if(this.state=="running"){
if(this.options.transition){
pos=this.options.transition(pos);
}
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.position=pos;
this.event("beforeUpdate");
if(this.update){
this.update(pos);
}
this.event("afterUpdate");
}
},cancel:function(){
if(!this.options.sync){
Effect.Queues.get(typeof this.options.queue=="string"?"global":this.options.queue.scope).remove(this);
}
this.state="finished";
},event:function(_481a){
if(this.options[_481a+"Internal"]){
this.options[_481a+"Internal"](this);
}
if(this.options[_481a]){
this.options[_481a](this);
}
},inspect:function(){
var data=$H();
for(property in this){
if(typeof this[property]!="function"){
data[property]=this[property];
}
}
return "#<Effect:"+data.inspect()+",options:"+$H(this.options).inspect()+">";
}};
Effect.Parallel=Class.create();
Object.extend(Object.extend(Effect.Parallel.prototype,Effect.Base.prototype),{initialize:function(_481c){
this.effects=_481c||[];
this.start(arguments[1]);
},update:function(_481d){
this.effects.invoke("render",_481d);
},finish:function(_481e){
this.effects.each(function(_481f){
_481f.render(1);
_481f.cancel();
_481f.event("beforeFinish");
if(_481f.finish){
_481f.finish(_481e);
}
_481f.event("afterFinish");
});
}});
Effect.Event=Class.create();
Object.extend(Object.extend(Effect.Event.prototype,Effect.Base.prototype),{initialize:function(){
var _4820=Object.extend({duration:0},arguments[0]||{});
this.start(_4820);
},update:Prototype.emptyFunction});
Effect.Opacity=Class.create();
Object.extend(Object.extend(Effect.Opacity.prototype,Effect.Base.prototype),{initialize:function(_4821){
this.element=$(_4821);
if(!this.element){
throw (Effect._elementDoesNotExistError);
}
if(/MSIE/.test(navigator.userAgent)&&!window.opera&&(!this.element.currentStyle.hasLayout)){
this.element.setStyle({zoom:1});
}
var _4822=Object.extend({from:this.element.getOpacity()||0,to:1},arguments[1]||{});
this.start(_4822);
},update:function(_4823){
this.element.setOpacity(_4823);
}});
Effect.Move=Class.create();
Object.extend(Object.extend(Effect.Move.prototype,Effect.Base.prototype),{initialize:function(_4824){
this.element=$(_4824);
if(!this.element){
throw (Effect._elementDoesNotExistError);
}
var _4825=Object.extend({x:0,y:0,mode:"relative"},arguments[1]||{});
this.start(_4825);
},setup:function(){
this.element.makePositioned();
this.originalLeft=parseFloat(this.element.getStyle("left")||"0");
this.originalTop=parseFloat(this.element.getStyle("top")||"0");
if(this.options.mode=="absolute"){
this.options.x=this.options.x-this.originalLeft;
this.options.y=this.options.y-this.originalTop;
}
},update:function(_4826){
this.element.setStyle({left:Math.round(this.options.x*_4826+this.originalLeft)+"px",top:Math.round(this.options.y*_4826+this.originalTop)+"px"});
}});
Effect.MoveBy=function(_4827,toTop,_4829){
return new Effect.Move(_4827,Object.extend({x:_4829,y:toTop},arguments[3]||{}));
};
Effect.Scale=Class.create();
Object.extend(Object.extend(Effect.Scale.prototype,Effect.Base.prototype),{initialize:function(_482a,_482b){
this.element=$(_482a);
if(!this.element){
throw (Effect._elementDoesNotExistError);
}
var _482c=Object.extend({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_482b},arguments[2]||{});
this.start(_482c);
},setup:function(){
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=this.element.getStyle("position");
this.originalStyle={};
["top","left","width","height","fontSize"].each(function(k){
this.originalStyle[k]=this.element.style[k];
}.bind(this));
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var _482e=this.element.getStyle("font-size")||"100%";
["em","px","%","pt"].each(function(_482f){
if(_482e.indexOf(_482f)>0){
this.fontSize=parseFloat(_482e);
this.fontSizeType=_482f;
}
}.bind(this));
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
this.dims=null;
if(this.options.scaleMode=="box"){
this.dims=[this.element.offsetHeight,this.element.offsetWidth];
}
if(/^content/.test(this.options.scaleMode)){
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
}
if(!this.dims){
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
}
},update:function(_4830){
var _4831=(this.options.scaleFrom/100)+(this.factor*_4830);
if(this.options.scaleContent&&this.fontSize){
this.element.setStyle({fontSize:this.fontSize*_4831+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_4831,this.dims[1]*_4831);
},finish:function(_4832){
if(this.restoreAfterFinish){
this.element.setStyle(this.originalStyle);
}
},setDimensions:function(_4833,width){
var d={};
if(this.options.scaleX){
d.width=Math.round(width)+"px";
}
if(this.options.scaleY){
d.height=Math.round(_4833)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_4833-this.dims[0])/2;
var leftd=(width-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-leftd+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-leftd+"px";
}
}
}
this.element.setStyle(d);
}});
Effect.Highlight=Class.create();
Object.extend(Object.extend(Effect.Highlight.prototype,Effect.Base.prototype),{initialize:function(_4838){
this.element=$(_4838);
if(!this.element){
throw (Effect._elementDoesNotExistError);
}
var _4839=Object.extend({startcolor:"#ffff99"},arguments[1]||{});
this.start(_4839);
},setup:function(){
if(this.element.getStyle("display")=="none"){
this.cancel();
return;
}
this.oldStyle={};
if(!this.options.keepBackgroundImage){
this.oldStyle.backgroundImage=this.element.getStyle("background-image");
this.element.setStyle({backgroundImage:"none"});
}
if(!this.options.endcolor){
this.options.endcolor=this.element.getStyle("background-color").parseColor("#ffffff");
}
if(!this.options.restorecolor){
this.options.restorecolor=this.element.getStyle("background-color");
}
this._base=$R(0,2).map(function(i){
return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);
}.bind(this));
this._delta=$R(0,2).map(function(i){
return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];
}.bind(this));
},update:function(_483c){
this.element.setStyle({backgroundColor:$R(0,2).inject("#",function(m,v,i){
return m+(Math.round(this._base[i]+(this._delta[i]*_483c)).toColorPart());
}.bind(this))});
},finish:function(){
this.element.setStyle(Object.extend(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
Effect.ScrollTo=Class.create();
Object.extend(Object.extend(Effect.ScrollTo.prototype,Effect.Base.prototype),{initialize:function(_4840){
this.element=$(_4840);
this.start(arguments[1]||{});
},setup:function(){
Position.prepare();
var _4841=Position.cumulativeOffset(this.element);
if(this.options.offset){
_4841[1]+=this.options.offset;
}
var max=window.innerHeight?window.height-window.innerHeight:document.body.scrollHeight-(document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight);
this.scrollStart=Position.deltaY;
this.delta=(_4841[1]>max?max:_4841[1])-this.scrollStart;
},update:function(_4843){
Position.prepare();
window.scrollTo(Position.deltaX,this.scrollStart+(_4843*this.delta));
}});
Effect.Fade=function(_4844){
_4844=$(_4844);
var _4845=_4844.getInlineOpacity();
var _4846=Object.extend({from:_4844.getOpacity()||1,to:0,afterFinishInternal:function(_4847){
if(_4847.options.to!=0){
return;
}
_4847.element.hide().setStyle({opacity:_4845});
}},arguments[1]||{});
return new Effect.Opacity(_4844,_4846);
};
Effect.Appear=function(_4848){
_4848=$(_4848);
var _4849=Object.extend({from:(_4848.getStyle("display")=="none"?0:_4848.getOpacity()||0),to:1,afterFinishInternal:function(_484a){
_484a.element.forceRerendering();
},beforeSetup:function(_484b){
_484b.element.setOpacity(_484b.options.from).show();
}},arguments[1]||{});
return new Effect.Opacity(_4848,_4849);
};
Effect.Puff=function(_484c){
_484c=$(_484c);
var _484d={opacity:_484c.getInlineOpacity(),position:_484c.getStyle("position"),top:_484c.style.top,left:_484c.style.left,width:_484c.style.width,height:_484c.style.height};
return new Effect.Parallel([new Effect.Scale(_484c,200,{sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true}),new Effect.Opacity(_484c,{sync:true,to:0})],Object.extend({duration:1,beforeSetupInternal:function(_484e){
Position.absolutize(_484e.effects[0].element);
},afterFinishInternal:function(_484f){
_484f.effects[0].element.hide().setStyle(_484d);
}},arguments[1]||{}));
};
Effect.BlindUp=function(_4850){
_4850=$(_4850);
_4850.makeClipping();
return new Effect.Scale(_4850,0,Object.extend({scaleContent:false,scaleX:false,restoreAfterFinish:true,afterFinishInternal:function(_4851){
_4851.element.hide().undoClipping();
}},arguments[1]||{}));
};
Effect.BlindDown=function(_4852){
_4852=$(_4852);
var _4853=_4852.getDimensions();
return new Effect.Scale(_4852,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_4853.height,originalWidth:_4853.width},restoreAfterFinish:true,afterSetup:function(_4854){
_4854.element.makeClipping().setStyle({height:"0px"}).show();
},afterFinishInternal:function(_4855){
_4855.element.undoClipping();
}},arguments[1]||{}));
};
Effect.SwitchOff=function(_4856){
_4856=$(_4856);
var _4857=_4856.getInlineOpacity();
return new Effect.Appear(_4856,Object.extend({duration:0.4,from:0,transition:Effect.Transitions.flicker,afterFinishInternal:function(_4858){
new Effect.Scale(_4858.element,1,{duration:0.3,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true,beforeSetup:function(_4859){
_4859.element.makePositioned().makeClipping();
},afterFinishInternal:function(_485a){
_485a.element.hide().undoClipping().undoPositioned().setStyle({opacity:_4857});
}});
}},arguments[1]||{}));
};
Effect.DropOut=function(_485b){
_485b=$(_485b);
var _485c={top:_485b.getStyle("top"),left:_485b.getStyle("left"),opacity:_485b.getInlineOpacity()};
return new Effect.Parallel([new Effect.Move(_485b,{x:0,y:100,sync:true}),new Effect.Opacity(_485b,{sync:true,to:0})],Object.extend({duration:0.5,beforeSetup:function(_485d){
_485d.effects[0].element.makePositioned();
},afterFinishInternal:function(_485e){
_485e.effects[0].element.hide().undoPositioned().setStyle(_485c);
}},arguments[1]||{}));
};
Effect.Shake=function(_485f){
_485f=$(_485f);
var _4860={top:_485f.getStyle("top"),left:_485f.getStyle("left")};
return new Effect.Move(_485f,{x:20,y:0,duration:0.05,afterFinishInternal:function(_4861){
new Effect.Move(_4861.element,{x:-40,y:0,duration:0.1,afterFinishInternal:function(_4862){
new Effect.Move(_4862.element,{x:40,y:0,duration:0.1,afterFinishInternal:function(_4863){
new Effect.Move(_4863.element,{x:-40,y:0,duration:0.1,afterFinishInternal:function(_4864){
new Effect.Move(_4864.element,{x:40,y:0,duration:0.1,afterFinishInternal:function(_4865){
new Effect.Move(_4865.element,{x:-20,y:0,duration:0.05,afterFinishInternal:function(_4866){
_4866.element.undoPositioned().setStyle(_4860);
}});
}});
}});
}});
}});
}});
};
Effect.SlideDown=function(_4867){
_4867=$(_4867).cleanWhitespace();
var _4868=_4867.down().getStyle("bottom");
var _4869=_4867.getDimensions();
return new Effect.Scale(_4867,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:window.opera?0:1,scaleMode:{originalHeight:_4869.height,originalWidth:_4869.width},restoreAfterFinish:true,afterSetup:function(_486a){
_486a.element.makePositioned();
_486a.element.down().makePositioned();
if(window.opera){
_486a.element.setStyle({top:""});
}
_486a.element.makeClipping().setStyle({height:"0px"}).show();
},afterUpdateInternal:function(_486b){
_486b.element.down().setStyle({bottom:(_486b.dims[0]-_486b.element.clientHeight)+"px"});
},afterFinishInternal:function(_486c){
_486c.element.undoClipping().undoPositioned();
_486c.element.down().undoPositioned().setStyle({bottom:_4868});
}},arguments[1]||{}));
};
Effect.SlideUp=function(_486d){
_486d=$(_486d).cleanWhitespace();
var _486e=_486d.down().getStyle("bottom");
return new Effect.Scale(_486d,window.opera?0:1,Object.extend({scaleContent:false,scaleX:false,scaleMode:"box",scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_486f){
_486f.element.makePositioned();
_486f.element.down().makePositioned();
if(window.opera){
_486f.element.setStyle({top:""});
}
_486f.element.makeClipping().show();
},afterUpdateInternal:function(_4870){
_4870.element.down().setStyle({bottom:(_4870.dims[0]-_4870.element.clientHeight)+"px"});
},afterFinishInternal:function(_4871){
_4871.element.hide().undoClipping().undoPositioned().setStyle({bottom:_486e});
_4871.element.down().undoPositioned();
}},arguments[1]||{}));
};
Effect.Squish=function(_4872){
return new Effect.Scale(_4872,window.opera?1:0,{restoreAfterFinish:true,beforeSetup:function(_4873){
_4873.element.makeClipping();
},afterFinishInternal:function(_4874){
_4874.element.hide().undoClipping();
}});
};
Effect.Grow=function(_4875){
_4875=$(_4875);
var _4876=Object.extend({direction:"center",moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.full},arguments[1]||{});
var _4877={top:_4875.style.top,left:_4875.style.left,height:_4875.style.height,width:_4875.style.width,opacity:_4875.getInlineOpacity()};
var dims=_4875.getDimensions();
var _4879,initialMoveY;
var moveX,moveY;
switch(_4876.direction){
case "top-left":
_4879=initialMoveY=moveX=moveY=0;
break;
case "top-right":
_4879=dims.width;
initialMoveY=moveY=0;
moveX=-dims.width;
break;
case "bottom-left":
_4879=moveX=0;
initialMoveY=dims.height;
moveY=-dims.height;
break;
case "bottom-right":
_4879=dims.width;
initialMoveY=dims.height;
moveX=-dims.width;
moveY=-dims.height;
break;
case "center":
_4879=dims.width/2;
initialMoveY=dims.height/2;
moveX=-dims.width/2;
moveY=-dims.height/2;
break;
}
return new Effect.Move(_4875,{x:_4879,y:initialMoveY,duration:0.01,beforeSetup:function(_487b){
_487b.element.hide().makeClipping().makePositioned();
},afterFinishInternal:function(_487c){
new Effect.Parallel([new Effect.Opacity(_487c.element,{sync:true,to:1,from:0,transition:_4876.opacityTransition}),new Effect.Move(_487c.element,{x:moveX,y:moveY,sync:true,transition:_4876.moveTransition}),new Effect.Scale(_487c.element,100,{scaleMode:{originalHeight:dims.height,originalWidth:dims.width},sync:true,scaleFrom:window.opera?1:0,transition:_4876.scaleTransition,restoreAfterFinish:true})],Object.extend({beforeSetup:function(_487d){
_487d.effects[0].element.setStyle({height:"0px"}).show();
},afterFinishInternal:function(_487e){
_487e.effects[0].element.undoClipping().undoPositioned().setStyle(_4877);
}},_4876));
}});
};
Effect.Shrink=function(_487f){
_487f=$(_487f);
var _4880=Object.extend({direction:"center",moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.none},arguments[1]||{});
var _4881={top:_487f.style.top,left:_487f.style.left,height:_487f.style.height,width:_487f.style.width,opacity:_487f.getInlineOpacity()};
var dims=_487f.getDimensions();
var moveX,moveY;
switch(_4880.direction){
case "top-left":
moveX=moveY=0;
break;
case "top-right":
moveX=dims.width;
moveY=0;
break;
case "bottom-left":
moveX=0;
moveY=dims.height;
break;
case "bottom-right":
moveX=dims.width;
moveY=dims.height;
break;
case "center":
moveX=dims.width/2;
moveY=dims.height/2;
break;
}
return new Effect.Parallel([new Effect.Opacity(_487f,{sync:true,to:0,from:1,transition:_4880.opacityTransition}),new Effect.Scale(_487f,window.opera?1:0,{sync:true,transition:_4880.scaleTransition,restoreAfterFinish:true}),new Effect.Move(_487f,{x:moveX,y:moveY,sync:true,transition:_4880.moveTransition})],Object.extend({beforeStartInternal:function(_4884){
_4884.effects[0].element.makePositioned().makeClipping();
},afterFinishInternal:function(_4885){
_4885.effects[0].element.hide().undoClipping().undoPositioned().setStyle(_4881);
}},_4880));
};
Effect.Pulsate=function(_4886){
_4886=$(_4886);
var _4887=arguments[1]||{};
var _4888=_4886.getInlineOpacity();
var _4889=_4887.transition||Effect.Transitions.sinoidal;
var _488a=function(pos){
return _4889(1-Effect.Transitions.pulse(pos,_4887.pulses));
};
_488a.bind(_4889);
return new Effect.Opacity(_4886,Object.extend(Object.extend({duration:2,from:0,afterFinishInternal:function(_488c){
_488c.element.setStyle({opacity:_4888});
}},_4887),{transition:_488a}));
};
Effect.Fold=function(_488d){
_488d=$(_488d);
var _488e={top:_488d.style.top,left:_488d.style.left,width:_488d.style.width,height:_488d.style.height};
_488d.makeClipping();
return new Effect.Scale(_488d,5,Object.extend({scaleContent:false,scaleX:false,afterFinishInternal:function(_488f){
new Effect.Scale(_488d,1,{scaleContent:false,scaleY:false,afterFinishInternal:function(_4890){
_4890.element.hide().undoClipping().setStyle(_488e);
}});
}},arguments[1]||{}));
};
Effect.Morph=Class.create();
Object.extend(Object.extend(Effect.Morph.prototype,Effect.Base.prototype),{initialize:function(_4891){
this.element=$(_4891);
if(!this.element){
throw (Effect._elementDoesNotExistError);
}
var _4892=Object.extend({style:{}},arguments[1]||{});
if(typeof _4892.style=="string"){
if(_4892.style.indexOf(":")==-1){
var _4893="",selector="."+_4892.style;
$A(document.styleSheets).reverse().each(function(_4894){
if(_4894.cssRules){
cssRules=_4894.cssRules;
}else{
if(_4894.rules){
cssRules=_4894.rules;
}
}
$A(cssRules).reverse().each(function(rule){
if(selector==rule.selectorText){
_4893=rule.style.cssText;
throw $break;
}
});
if(_4893){
throw $break;
}
});
this.style=_4893.parseStyle();
_4892.afterFinishInternal=function(_4896){
_4896.element.addClassName(_4896.options.style);
_4896.transforms.each(function(_4897){
if(_4897.style!="opacity"){
_4896.element.style[_4897.style.camelize()]="";
}
});
};
}else{
this.style=_4892.style.parseStyle();
}
}else{
this.style=$H(_4892.style);
}
this.start(_4892);
},setup:function(){
function parseColor(color){
if(!color||["rgba(0, 0, 0, 0)","transparent"].include(color)){
color="#ffffff";
}
color=color.parseColor();
return $R(0,2).map(function(i){
return parseInt(color.slice(i*2+1,i*2+3),16);
});
}
this.transforms=this.style.map(function(pair){
var _489b=pair[0].underscore().dasherize(),value=pair[1],unit=null;
if(value.parseColor("#zzzzzz")!="#zzzzzz"){
value=value.parseColor();
unit="color";
}else{
if(_489b=="opacity"){
value=parseFloat(value);
if(/MSIE/.test(navigator.userAgent)&&!window.opera&&(!this.element.currentStyle.hasLayout)){
this.element.setStyle({zoom:1});
}
}else{
if(Element.CSS_LENGTH.test(value)){
var _489c=value.match(/^([\+\-]?[0-9\.]+)(.*)$/),value=parseFloat(_489c[1]),unit=(_489c.length==3)?_489c[2]:null;
}
}
}
var _489d=this.element.getStyle(_489b);
return $H({style:_489b,originalValue:unit=="color"?parseColor(_489d):parseFloat(_489d||0),targetValue:unit=="color"?parseColor(value):value,unit:unit});
}.bind(this)).reject(function(_489e){
return ((_489e.originalValue==_489e.targetValue)||(_489e.unit!="color"&&(isNaN(_489e.originalValue)||isNaN(_489e.targetValue))));
});
},update:function(_489f){
var style=$H(),value=null;
this.transforms.each(function(_48a1){
value=_48a1.unit=="color"?$R(0,2).inject("#",function(m,v,i){
return m+(Math.round(_48a1.originalValue[i]+(_48a1.targetValue[i]-_48a1.originalValue[i])*_489f)).toColorPart();
}):_48a1.originalValue+Math.round(((_48a1.targetValue-_48a1.originalValue)*_489f)*1000)/1000+_48a1.unit;
style[_48a1.style]=value;
});
this.element.setStyle(style);
}});
Effect.Transform=Class.create();
Object.extend(Effect.Transform.prototype,{initialize:function(_48a5){
this.tracks=[];
this.options=arguments[1]||{};
this.addTracks(_48a5);
},addTracks:function(_48a6){
_48a6.each(function(track){
var data=$H(track).values().first();
this.tracks.push($H({ids:$H(track).keys().first(),effect:Effect.Morph,options:{style:data}}));
}.bind(this));
return this;
},play:function(){
return new Effect.Parallel(this.tracks.map(function(track){
var _48aa=[$(track.ids)||$$(track.ids)].flatten();
return _48aa.map(function(e){
return new track.effect(e,Object.extend({sync:true},track.options));
});
}).flatten(),this.options);
}});
Element.CSS_PROPERTIES=$w("backgroundColor backgroundPosition borderBottomColor borderBottomStyle "+"borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth "+"borderRightColor borderRightStyle borderRightWidth borderSpacing "+"borderTopColor borderTopStyle borderTopWidth bottom clip color "+"fontSize fontWeight height left letterSpacing lineHeight "+"marginBottom marginLeft marginRight marginTop markerOffset maxHeight "+"maxWidth minHeight minWidth opacity outlineColor outlineOffset "+"outlineWidth paddingBottom paddingLeft paddingRight paddingTop "+"right textIndent top width wordSpacing zIndex");
Element.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
String.prototype.parseStyle=function(){
var _48ac=Element.extend(document.createElement("div"));
_48ac.innerHTML="<div style=\""+this+"\"></div>";
var style=_48ac.down().style,styleRules=$H();
Element.CSS_PROPERTIES.each(function(_48ae){
if(style[_48ae]){
styleRules[_48ae]=style[_48ae];
}
});
if(/MSIE/.test(navigator.userAgent)&&!window.opera&&this.indexOf("opacity")>-1){
styleRules.opacity=this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1];
}
return styleRules;
};
Element.morph=function(_48af,style){
new Effect.Morph(_48af,Object.extend({style:style},arguments[2]||{}));
return _48af;
};
["setOpacity","getOpacity","getInlineOpacity","forceRerendering","setContentZoom","collectTextNodes","collectTextNodesIgnoreClass","morph"].each(function(f){
Element.Methods[f]=Element[f];
});
Element.Methods.visualEffect=function(_48b2,_48b3,_48b4){
s=_48b3.gsub(/_/,"-").camelize();
effect_class=s.charAt(0).toUpperCase()+s.substring(1);
new Effect[effect_class](_48b2,_48b4);
return $(_48b2);
};
Element.addMethods();
