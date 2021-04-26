(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){'use strict';var _canvas=__webpack_require__(1);var _haze=__webpack_require__(3);var _haze2=_interopRequireDefault(_haze);var _hazeWater=__webpack_require__(14);var _hazeWater2=_interopRequireDefault(_hazeWater);var _gsap=__webpack_require__(15);var _gsap2=_interopRequireDefault(_gsap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var canvas=document.querySelector('.Background-canvas');var textureAlign={x:0.5,y:0.9};var textures=[{file:'assets/img/distortion.jpg',name:'image',align:textureAlign,scale:{x:1,y:1}},{file:'assets/img/water-maps.jpg',name:'maps',align:textureAlign,scale:{x:0.2,y:0.2}}];var haze=new _haze2.default({canvas:canvas,shader:_hazeWater2.default,textures:textures,loop:10000});haze.gl.createUniform('2f','mouse',0.5,0.5);var smooth=function smooth(){var n=arguments.length<=0||arguments[0]===undefined?6:arguments[0];var samples=[];return function(v){samples=samples.concat(v);if(samples.length>n){samples=samples.slice(samples.length-n,samples.length);}
return samples.reduce(function(l,cur){return l+cur;})/samples.length;};};var curve=function curve(v){var p=arguments.length<=1||arguments[1]===undefined?0.8:arguments[1];return v==0?0:Math.pow(Math.abs(v),p)*(v/Math.abs(v));};var smoothX=smooth();var smoothY=smooth();var isTouchDevice='ontouchstart'in document.documentElement;var parallaxPos={_x:0,_y:0,_willUpdate:false,get x(){return this._x;},set x(v){this._x=v;this.updatePos();},get y(){return this._y;},set y(v){this._y=v;this.updatePos();},updatePos:function updatePos(){var _this=this;if(this._willUpdate)return;this._willUpdate=true;requestAnimationFrame(function(){_this._willUpdate=false;haze.gl.createUniform('2f','mouse',-(-1+_this.x*2),-(-1+_this.y*2));});}};window.addEventListener('mousemove',function(event){if(!isTouchDevice&&_gsap2.default.to){_gsap2.default.to(parallaxPos,1,{x:event.pageX/window.innerWidth,y:event.pageY/window.innerHeight});}});function getDPI(){if(typeof window.devicePixelRatio!="undefined"){return window.devicePixelRatio;}else{return 1;}}
window.addEventListener('resize',updateSize);function updateSize(){var container=document.querySelector('.Background');var dimensions=container.getBoundingClientRect();haze.width=dimensions.width;haze.height=dimensions.height;haze.dpi=getDPI();haze.gl.createUniform('1f','dpi',haze.dpi);haze.gl.createUniform('2f','resolution',haze.width*haze.dpi,haze.height*haze.dpi);}
updateSize();},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.createCanvas=createCanvas;var _curry=__webpack_require__(2);var _curry2=_interopRequireDefault(_curry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}
exports.default=function(width,height){var dpiAware=arguments.length<=2||arguments[2]===undefined?true:arguments[2];var object={_width:width,_height:height,dpi:1,canvas:null,ctx:null,appendTo:function appendTo(obj){if(typeof obj=='string')obj=document.querySelector(obj);obj.appendChild(this.canvas);return this;},set fillStyle(v){this.ctx.fillStyle=v;},get fillStyle(){return this.ctx.fillStyle;},setFillStyle:function setFillStyle(v){this.fillStyle=v;return this;},setFill:function setFill(v){return this.setFillStyle(v);},set strokeStyle(v){this.ctx.strokeStyle=v;},get strokeStyle(){return this.ctx.strokeStyle;},setStrokeStyle:function setStrokeStyle(v){this.strokeStyle=v;return this;},setStroke:function setStroke(v){return this.setStrokeStyle(v);},set lineCap(v){this.ctx.lineCap=v;},get lineCap(){return this.ctx.lineCap;},setLineCap:function setLineCap(v){this.lineCap=v;return this;},set lineWidth(v){this.ctx.lineWidth=v;},get lineWidth(){return this.ctx.lineWidth;},setLineWidth:function setLineWidth(v){this.lineWidth=v;return this;},set globalAlpha(v){this.ctx.globalAlpha=v;},get globalAlpha(){return this.ctx.globalAlpha;},setGlobalAlpha:function setGlobalAlpha(v){this.globalAlpha=v;return this;},alpha:function alpha(v){return this.setGlobalAlpha(v);},get width(){return this._width;},set width(v){this.canvas.setAttribute('width',v*this.dpi);this.canvas.style.width=v+'px';this._width=v;},get height(){return this._height;},set height(v){this.canvas.setAttribute('height',v*this.dpi);this.canvas.style.height=v+'px';this._height=v;},clear:function clear(){this.clearRect(0,0,this.width,this.height);},clearRect:function clearRect(x,y,w,h){var _ctx;(_ctx=this.ctx).clearRect.apply(_ctx,_toConsumableArray(d(x,y,w,h)));return this;},fillRect:function fillRect(x,y,w,h){var _ctx2;(_ctx2=this.ctx).fillRect.apply(_ctx2,_toConsumableArray(d(x,y,w,h)));return this;},beginPath:function beginPath(){this.ctx.beginPath();return this;},moveTo:function moveTo(x,y){var _ctx3;(_ctx3=this.ctx).moveTo.apply(_ctx3,_toConsumableArray(d(x,y)));return this;},lineTo:function lineTo(x,y){var _ctx4;(_ctx4=this.ctx).lineTo.apply(_ctx4,_toConsumableArray(d(x,y)));return this;},quadraticCurveTo:function quadraticCurveTo(cpx,cpy,x,y){var _ctx5;(_ctx5=this.ctx).quadraticCurveTo.apply(_ctx5,_toConsumableArray(d(cpx,cpy,x,y)));return this;},bezierCurveTo:function bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y){var _ctx6;(_ctx6=this.ctx).bezierCurveTo.apply(_ctx6,_toConsumableArray(d(cp1x,cp1y,cp2x,cp2y,x,y)));return this;},arc:function arc(x,y,r,sAngle,eAngle){var _ctx7;var counterclockwise=arguments.length<=5||arguments[5]===undefined?false:arguments[5];(_ctx7=this.ctx).arc.apply(_ctx7,_toConsumableArray(d(x,y,r,sAngle,eAngle,counterclockwise)));return this;},circle:function circle(x,y,r){this.arc(x,y,r,0,Math.PI*2);return this;},fill:function fill(){this.ctx.fill();return this;},stroke:function stroke(){this.ctx.stroke();return this;}};var dpi=dpiAware?window.devicePixelRatio:1;var d=function d(){for(var _len=arguments.length,values=Array(_len),_key=0;_key<_len;_key++){values[_key]=arguments[_key];}
return mult(dpi,values);};object.dpi=dpi;object.canvas=createCanvas(width,height,object.dpi);object.ctx=object.canvas.getContext('2d');return object;};var mult=(0,_curry2.default)(function(multiplier,value){return!Array.isArray(value)?value*multiplier:value.map(function(v){return v*multiplier;});});function createCanvas(width,height){var multiplier=arguments.length<=2||arguments[2]===undefined?1:arguments[2];var canvas=document.createElement("canvas");if(multiplier!=1){canvas.style.width=width+'px';canvas.style.height=height+'px';}
canvas.width=width*multiplier;canvas.height=height*multiplier;return canvas;}},function(module,exports){var slice=Array.prototype.slice;var toArray=function(a){return slice.call(a)}
var tail=function(a){return slice.call(a,1)}
var createFn=function(fn,args,totalArity){var remainingArity=totalArity-args.length;switch(remainingArity){case 0:return function(){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 1:return function(a){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 2:return function(a,b){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 3:return function(a,b,c){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 4:return function(a,b,c,d){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 5:return function(a,b,c,d,e){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 6:return function(a,b,c,d,e,f){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 7:return function(a,b,c,d,e,f,g){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 8:return function(a,b,c,d,e,f,g,h){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 9:return function(a,b,c,d,e,f,g,h,i){return processInvocation(fn,concatArgs(args,arguments),totalArity)};case 10:return function(a,b,c,d,e,f,g,h,i,j){return processInvocation(fn,concatArgs(args,arguments),totalArity)};default:return createEvalFn(fn,args,remainingArity);}}
var concatArgs=function(args1,args2){return args1.concat(toArray(args2));}
var createEvalFn=function(fn,args,arity){var argList=makeArgList(arity);var fnStr='false||'+
'function('+argList+'){ return processInvocation(fn, concatArgs(args, arguments)); }';return eval(fnStr);}
var makeArgList=function(len){var a=[];for(var i=0;i<len;i+=1)a.push('a'+i.toString());return a.join(',');}
var trimArrLength=function(arr,length){if(arr.length>length)return arr.slice(0,length);else return arr;}
var processInvocation=function(fn,argsArr,totalArity){argsArr=trimArrLength(argsArr,totalArity);if(argsArr.length===totalArity)return fn.apply(null,argsArr);return createFn(fn,argsArr,totalArity);}
var curry=function(fn){return createFn(fn,[],fn.length);}
curry.to=curry(function(arity,fn){return createFn(fn,[],arity);});curry.adaptTo=curry(function(num,fn){return curry.to(num,function(context){var args=tail(arguments).concat(context);return fn.apply(this,args);});})
curry.adapt=function(fn){return curry.adaptTo(fn.length,fn)}
module.exports=curry;},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _glObj=__webpack_require__(4);var _glObj2=_interopRequireDefault(_glObj);var _simple=__webpack_require__(6);var _simple2=_interopRequireDefault(_simple);var _canvas=__webpack_require__(1);var _lodash=__webpack_require__(7);var _fill=__webpack_require__(9);var _fill2=_interopRequireDefault(_fill);var _eventDispatcher=__webpack_require__(10);var _eventDispatcher2=_interopRequireDefault(_eventDispatcher);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function Haze(_ref){var _this=this;var canvas=_ref.canvas;var frag=_ref.shader;var _ref$textures=_ref.textures;var textures=_ref$textures===undefined?[]:_ref$textures;var _ref$loops=_ref.loops;var loops=_ref$loops===undefined?1000:_ref$loops;this.loops=loops;this.canvas=canvas;this._width=canvas.width;this._height=canvas.height;var gl=new _glObj2.default(canvas,null,_simple2.default,frag);this.gl=gl;var haze=this;this._textures=textures.map(function(v,i){return loadTexture(_this,i,v);});Promise.all(this._textures).then(start);function start(){var last=0;var frame=1000/60;var time=0;gl.createUniform("1f","time",time);(function update(now){var delta=now-last;if(isNaN(delta)){delta=frame;}
var incr=delta/frame;if(incr>1.5)incr=1.5;incr*=haze.timeScale;time+=incr;if(time>haze.loops)time=0;last=now;gl.createUniform("1f","time",time);haze.dispatchEvent('predraw',{deltaTime:incr});gl.draw();requestAnimationFrame(update);})();}}
function loadTexture(haze,index,options){var defaultOptions={file:null,name:null,repeat:false,fill:true,align:{x:0.5,y:0.5},scale:{x:1,y:1}};options=(0,_lodash.assign)(defaultOptions,options);return new Promise(function(resolve,reject){var image=new Image();image.addEventListener('load',function(event){haze.gl.createUniform('1i',options.name,index);resolve(processTexture(haze,index,image,options));});image.src=options.file;});}
function processTexture(haze,index,image,options){var canvas=document.createElement('canvas');var ctx=canvas.getContext('2d');var textureObj=(0,_lodash.assign)({canvas:canvas,haze:haze,index:index,image:image,options:options,updateTexture:function updateTexture(){haze.gl.createTexture(canvas,index,options.repeat?haze.gl.gl.REPEAT:null);},render:function render(){canvas.width=(options.fill?haze.width:image.width)*haze.dpi*options.scale.x;canvas.height=(options.fill?haze.height:image.height)*haze.dpi*options.scale.y;var dimensions={x:0,y:0,width:canvas.width,height:canvas.height};if(options.fill){dimensions=(0,_fill2.default)(image.width,image.height,canvas.width,canvas.height,options.align.x,options.align.y);}
ctx.drawImage(image,dimensions.x,dimensions.y,dimensions.width,dimensions.height);this.updateTexture();},updateSize:function updateSize(){this.render();this.dispatchEvent('resize');}},(0,_eventDispatcher2.default)());textureObj.updateSize();haze.addEventListener('resize',textureObj.updateSize.bind(textureObj));return textureObj;}
Haze.prototype=(0,_lodash.assign)({canvas:null,_width:0,_height:0,_dpi:1,_willUpdateSize:false,_throttledUpdateSize:null,timeScale:1,_textures:null,loops:1000,get width(){return this._width;},set width(v){if(this._width==v)return;this._width=v;this.updateSize();},get height(){return this._height;},set height(v){if(this._height==v)return;this._height=v;this.updateSize();},get dpi(){return this._dpi;},set dpi(v){if(this._dpi==v)return;this._dpi=v;this.updateSize();},updateSize:function updateSize(){var _this2=this;if(this._throttledUpdateSize==null){this._throttledUpdateSize=(0,_lodash.throttle)(function(){if(_this2._willUpdateSize)return;_this2._willUpdateSize=true;requestAnimationFrame(function(){_this2._willUpdateSize=false;_this2.canvas.width=_this2.width*_this2.dpi;_this2.canvas.style.width=_this2.width+'px';_this2.canvas.height=_this2.height*_this2.dpi;_this2.canvas.style.height=_this2.height+'px';_this2.dispatchEvent('resize');_this2.gl.gl.viewport(0,0,_this2.canvas.width,_this2.canvas.height);});},300);}
this._throttledUpdateSize();},getTextureByName:function getTextureByName(name){var _this3=this;return new Promise(function(resolve,reject){_this3._textures.forEach(function(v){return v.then(function(texture){if(texture.options.name==name)resolve(texture);});});});}},(0,_eventDispatcher2.default)());exports.default=Haze;},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _webgl=__webpack_require__(5);var WebGL=_interopRequireWildcard(_webgl);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
function GL(canvas,options,vert,frag){this.init(canvas,options,vert,frag);}
GL.prototype={canvas:null,gl:null,program:null,width:0,height:0,init:function init(canvas,options,vert,frag){this.canvas=canvas;this.width=canvas.width;this.height=canvas.height;this.gl=WebGL.getContext(canvas,options);this.program=this.createProgram(vert,frag);this.useProgram(this.program);},createProgram:function createProgram(vert,frag){var program=WebGL.createProgram(this.gl,vert,frag);return program;},useProgram:function useProgram(program){this.program=program;this.gl.useProgram(program);},createTexture:function createTexture(source,i,wrap){return WebGL.createTexture(this.gl,source,i,wrap);},createUniform:function createUniform(type,name){for(var _len=arguments.length,v=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){v[_key-2]=arguments[_key];}
WebGL.createUniform.apply(WebGL,[this.gl,this.program,type,name].concat(v));},activeTexture:function activeTexture(i){WebGL.activeTexture(this.gl,i);},updateTexture:function updateTexture(source){WebGL.updateTexture(this.gl,source);},draw:function draw(){WebGL.setRectangle(this.gl,-1,-1,2,2);this.gl.drawArrays(this.gl.TRIANGLES,0,6);}};exports.default=GL;},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getContext=getContext;exports.createProgram=createProgram;exports.createShader=createShader;exports.createTexture=createTexture;exports.createUniform=createUniform;exports.activeTexture=activeTexture;exports.updateTexture=updateTexture;exports.setRectangle=setRectangle;function getContext(canvas){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var contexts=["webgl","experimental-webgl"];var context=null;contexts.some(function(name){try{context=canvas.getContext(name,options);}catch(e){};return context!=null;});if(context==null){document.body.classList.add("no-webgl");}
return context;}
function createProgram(gl,vertexScript,fragScript){var vertexShader=createShader(gl,vertexScript,gl.VERTEX_SHADER);var fragShader=createShader(gl,fragScript,gl.FRAGMENT_SHADER);var program=gl.createProgram();gl.attachShader(program,vertexShader);gl.attachShader(program,fragShader);gl.linkProgram(program);var linked=gl.getProgramParameter(program,gl.LINK_STATUS);if(!linked){var lastError=gl.getProgramInfoLog(program);error("Error in program linking: "+lastError);gl.deleteProgram(program);return null;}
var positionLocation=gl.getAttribLocation(program,"a_position");var texCoordLocation=gl.getAttribLocation(program,"a_texCoord");var texCoordBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1.0,-1.0,1.0,-1.0,-1.0,1.0,-1.0,1.0,1.0,-1.0,1.0,1.0]),gl.STATIC_DRAW);gl.enableVertexAttribArray(texCoordLocation);gl.vertexAttribPointer(texCoordLocation,2,gl.FLOAT,false,0,0);var buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.enableVertexAttribArray(positionLocation);gl.vertexAttribPointer(positionLocation,2,gl.FLOAT,false,0,0);return program;}
function createShader(gl,script,type){var shader=gl.createShader(type);gl.shaderSource(shader,script);gl.compileShader(shader);var compiled=gl.getShaderParameter(shader,gl.COMPILE_STATUS);if(!compiled){var lastError=gl.getShaderInfoLog(shader);error("Error compiling shader '"+shader+"':"+lastError);gl.deleteShader(shader);return null;}
return shader;}
function createTexture(gl,source,i){var wrap=arguments.length<=3||arguments[3]===undefined?null:arguments[3];if(wrap==null)wrap=gl.CLAMP_TO_EDGE;var texture=gl.createTexture();activeTexture(gl,i);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,wrap);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,wrap);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);updateTexture(gl,source);return texture;}
function createUniform(gl,program,type,name){var location=gl.getUniformLocation(program,"u_"+name);for(var _len=arguments.length,args=Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){args[_key-4]=arguments[_key];}
gl["uniform"+type].apply(gl,[location].concat(args));}
function activeTexture(gl,i){gl.activeTexture(gl["TEXTURE"+i]);}
function updateTexture(gl,source){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source);}
function setRectangle(gl,x,y,width,height){var x1=x;var x2=x+width;var y1=y;var y2=y+height;gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2]),gl.STATIC_DRAW);}
function error(msg){console.error(msg);}},function(module,exports){module.exports="precision mediump float;\r\n\r\nattribute vec2 a_position;\r\nvarying vec2 v_position;\r\n\r\nvoid main() {\r\n  v_position=(a_position+1.0)*0.5;\r\n  v_position.y=1.0-v_position.y;\r\n  gl_Position = vec4(a_position,0.0,1.0);\r\n}\r\n"},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(module,global){;(function(){var undefined;var VERSION='4.11.2';var LARGE_ARRAY_SIZE=200;var FUNC_ERROR_TEXT='Expected a function';var HASH_UNDEFINED='__lodash_hash_undefined__';var PLACEHOLDER='__lodash_placeholder__';var BIND_FLAG=1,BIND_KEY_FLAG=2,CURRY_BOUND_FLAG=4,CURRY_FLAG=8,CURRY_RIGHT_FLAG=16,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,ARY_FLAG=128,REARG_FLAG=256,FLIP_FLAG=512;var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';var HOT_COUNT=150,HOT_SPAN=16;var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;var reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g,reUnescapedHtml=/[&<>"'`]/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;var reBasicWord=/[a-zA-Z0-9]+/g;var reEscapeChar=/\\(\\)?/g;var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags=/\w*$/;var reHasHexPrefix=/^0x/i;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsHostCtor=/^\[object .+?Constructor\]$/;var reIsOctal=/^0o[0-7]+$/i;var reIsUint=/^(?:0|[1-9]\d*)$/;var reLatin1=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;var reNoMatch=/($^)/;var reUnescapedString=/['\n\r\u2028\u2029\\]/g;var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f\\ufe20-\\ufe23',rsComboSymbolsRange='\\u20d0-\\u20f0',rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboMarksRange+rsComboSymbolsRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';var rsLowerMisc='(?:'+rsLower+'|'+rsMisc+')',rsUpperMisc='(?:'+rsUpper+'|'+rsMisc+')',rsOptLowerContr='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptUpperContr='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';var reApos=RegExp(rsApos,'g');var reComboMark=RegExp(rsCombo,'g');var reComplexSymbol=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');var reComplexWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptLowerContr+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsUpperMisc+'+'+rsOptUpperContr+'(?='+[rsBreak,rsUpper+rsLowerMisc,'$'].join('|')+')',rsUpper+'?'+rsLowerMisc+'+'+rsOptLowerContr,rsUpper+'+'+rsOptUpperContr,rsDigits,rsEmoji].join('|'),'g');var reHasComplexSymbol=RegExp('['+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+']');var reHasComplexWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','Reflect','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];var templateCounter=-1;var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;var deburredLetters={'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcC':'I','\xcd':'I','\xce':'I','\xcf':'I','\xeC':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss'};var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'};var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&#96;':'`'};var objectTypes={'function':true,'object':true};var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};var freeParseFloat=parseFloat,freeParseInt=parseInt;var freeExports=(objectTypes[typeof exports]&&exports&&!exports.nodeType)?exports:undefined;var freeModule=(objectTypes[typeof module]&&module&&!module.nodeType)?module:undefined;var moduleExports=(freeModule&&freeModule.exports===freeExports)?freeExports:undefined;var freeGlobal=checkGlobal(freeExports&&freeModule&&typeof global=='object'&&global);var freeSelf=checkGlobal(objectTypes[typeof self]&&self);var freeWindow=checkGlobal(objectTypes[typeof window]&&window);var thisGlobal=checkGlobal(objectTypes[typeof this]&&this);var root=freeGlobal||((freeWindow!==(thisGlobal&&thisGlobal.window))&&freeWindow)||freeSelf||thisGlobal||Function('return this')();function addMapEntry(map,pair){map.set(pair[0],pair[1]);return map;}
function addSetEntry(set,value){set.add(value);return set;}
function apply(func,thisArg,args){var length=args.length;switch(length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}
return func.apply(thisArg,args);}
function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}
return accumulator;}
function arrayConcat(array,other){var index=-1,length=array.length,othIndex=-1,othLength=other.length,result=Array(length+othLength);while(++index<length){result[index]=array[index];}
while(++othIndex<othLength){result[index++]=other[othIndex];}
return result;}
function arrayEach(array,iteratee){var index=-1,length=array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}
return array;}
function arrayEachRight(array,iteratee){var length=array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}
return array;}
function arrayEvery(array,predicate){var index=-1,length=array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}
return true;}
function arrayFilter(array,predicate){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}
return result;}
function arrayIncludes(array,value){return!!array.length&&baseIndexOf(array,value,0)>-1;}
function arrayIncludesWith(array,value,comparator){var index=-1,length=array.length;while(++index<length){if(comparator(value,array[index])){return true;}}
return false;}
function arrayMap(array,iteratee){var index=-1,length=array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}
return result;}
function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}
return array;}
function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array.length;if(initAccum&&length){accumulator=array[++index];}
while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}
return accumulator;}
function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array.length;if(initAccum&&length){accumulator=array[--length];}
while(length--){accumulator=iteratee(accumulator,array[length],length,array);}
return accumulator;}
function arraySome(array,predicate){var index=-1,length=array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}
return false;}
function baseFind(collection,predicate,eachFunc,retKey){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=retKey?key:value;return false;}});return result;}
function baseFindIndex(array,predicate,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)){if(predicate(array[index],index,array)){return index;}}
return-1;}
function baseIndexOf(array,value,fromIndex){if(value!==value){return indexOfNaN(array,fromIndex);}
var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}
return-1;}
function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}
return-1;}
function baseMean(array,iteratee){var length=array?array.length:0;return length?(baseSum(array,iteratee)/length):NAN;}
function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}
function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}
return array;}
function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:(result+current);}}
return result;}
function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}
return result;}
function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}
function baseUnary(func){return function(value){return func(value);};}
function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}
function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;}
function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;}
function checkGlobal(value){return(value&&value.Object===Object)?value:null;}
function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){result++;}}
return result;}
function deburrLetter(letter){return deburredLetters[letter];}
function escapeHtmlChar(chr){return htmlEscapes[chr];}
function escapeStringChar(chr){return '\\'+stringEscapes[chr];}
function indexOfNaN(array,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?0:-1);while((fromRight?index--:++index<length)){var other=array[index];if(other!==other){return index;}}
return-1;}
function isHostObject(value){var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}
return result;}
function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}
return result;}
function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}
function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}
return result;}
function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}
function stringSize(string){if(!(string&&reHasComplexSymbol.test(string))){return string.length;}
var result=reComplexSymbol.lastIndex=0;while(reComplexSymbol.test(string)){result++;}
return result;}
function stringToArray(string){return string.match(reComplexSymbol);}
function unescapeHtmlChar(chr){return htmlUnescapes[chr];}
function runInContext(context){context=context?_.defaults({},context,_.pick(root,contextProps)):root;var Date=context.Date,Error=context.Error,Math=context.Math,RegExp=context.RegExp,TypeError=context.TypeError;var arrayProto=context.Array.prototype,objectProto=context.Object.prototype,stringProto=context.String.prototype;var funcToString=context.Function.prototype.toString;var hasOwnProperty=objectProto.hasOwnProperty;var idCounter=0;var objectCtorString=funcToString.call(Object);var objectToString=objectProto.toString;var oldDash=root._;var reIsNative=RegExp('^'+
funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');var Buffer=moduleExports?context.Buffer:undefined,Reflect=context.Reflect,Symbol=context.Symbol,Uint8Array=context.Uint8Array,clearTimeout=context.clearTimeout,enumerate=Reflect?Reflect.enumerate:undefined,getOwnPropertySymbols=Object.getOwnPropertySymbols,iteratorSymbol=typeof(iteratorSymbol=Symbol&&Symbol.iterator)=='symbol'?iteratorSymbol:undefined,objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,setTimeout=context.setTimeout,splice=arrayProto.splice;var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetPrototype=Object.getPrototypeOf,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=Object.keys,nativeMax=Math.max,nativeMin=Math.min,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReplace=stringProto.replace,nativeReverse=arrayProto.reverse,nativeSplit=stringProto.split;var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');var metaMap=WeakMap&&new WeakMap;var nonEnumShadows=!propertyIsEnumerable.call({'valueOf':1},'valueOf');var realNames={};var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}
if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}
return new LodashWrapper(value);}
function baseLodash(){}
function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}
lodash.templateSettings={'escape':reEscape,'evaluate':reEvaluate,'interpolate':reInterpolate,'variable':'','imports':{'_':lodash}};lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}
function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}
function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}
return result;}
function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:(start-1),iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||arrLength<LARGE_ARRAY_SIZE||(arrLength==length&&takeCount==length)){return baseWrapperValue(array,this.__actions__);}
var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}
result[resIndex++]=value;}
return result;}
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;function Hash(){}
function hashDelete(hash,key){return hashHas(hash,key)&&delete hash[key];}
function hashGet(hash,key){if(nativeCreate){var result=hash[key];return result===HASH_UNDEFINED?undefined:result;}
return hasOwnProperty.call(hash,key)?hash[key]:undefined;}
function hashHas(hash,key){return nativeCreate?hash[key]!==undefined:hasOwnProperty.call(hash,key);}
function hashSet(hash,key,value){hash[key]=(nativeCreate&&value===undefined)?HASH_UNDEFINED:value;}
Hash.prototype=nativeCreate?nativeCreate(null):objectProto;function MapCache(values){var index=-1,length=values?values.length:0;this.clear();while(++index<length){var entry=values[index];this.set(entry[0],entry[1]);}}
function mapClear(){this.__data__={'hash':new Hash,'map':Map?new Map:[],'string':new Hash};}
function mapDelete(key){var data=this.__data__;if(isKeyable(key)){return hashDelete(typeof key=='string'?data.string:data.hash,key);}
return Map?data.map['delete'](key):assocDelete(data.map,key);}
function mapGet(key){var data=this.__data__;if(isKeyable(key)){return hashGet(typeof key=='string'?data.string:data.hash,key);}
return Map?data.map.get(key):assocGet(data.map,key);}
function mapHas(key){var data=this.__data__;if(isKeyable(key)){return hashHas(typeof key=='string'?data.string:data.hash,key);}
return Map?data.map.has(key):assocHas(data.map,key);}
function mapSet(key,value){var data=this.__data__;if(isKeyable(key)){hashSet(typeof key=='string'?data.string:data.hash,key,value);}else if(Map){data.map.set(key,value);}else{assocSet(data.map,key,value);}
return this;}
MapCache.prototype.clear=mapClear;MapCache.prototype['delete']=mapDelete;MapCache.prototype.get=mapGet;MapCache.prototype.has=mapHas;MapCache.prototype.set=mapSet;function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache;while(++index<length){this.push(values[index]);}}
function cacheHas(cache,value){var map=cache.__data__;if(isKeyable(value)){var data=map.__data__,hash=typeof value=='string'?data.string:data.hash;return hash[value]===HASH_UNDEFINED;}
return map.has(value);}
function cachePush(value){var map=this.__data__;if(isKeyable(value)){var data=map.__data__,hash=typeof value=='string'?data.string:data.hash;hash[value]=HASH_UNDEFINED;}
else{map.set(value,HASH_UNDEFINED);}}
SetCache.prototype.push=cachePush;function Stack(values){var index=-1,length=values?values.length:0;this.clear();while(++index<length){var entry=values[index];this.set(entry[0],entry[1]);}}
function stackClear(){this.__data__={'array':[],'map':null};}
function stackDelete(key){var data=this.__data__,array=data.array;return array?assocDelete(array,key):data.map['delete'](key);}
function stackGet(key){var data=this.__data__,array=data.array;return array?assocGet(array,key):data.map.get(key);}
function stackHas(key){var data=this.__data__,array=data.array;return array?assocHas(array,key):data.map.has(key);}
function stackSet(key,value){var data=this.__data__,array=data.array;if(array){if(array.length<(LARGE_ARRAY_SIZE-1)){assocSet(array,key,value);}else{data.array=null;data.map=new MapCache(array);}}
var map=data.map;if(map){map.set(key,value);}
return this;}
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;function assocDelete(array,key){var index=assocIndexOf(array,key);if(index<0){return false;}
var lastIndex=array.length-1;if(index==lastIndex){array.pop();}else{splice.call(array,index,1);}
return true;}
function assocGet(array,key){var index=assocIndexOf(array,key);return index<0?undefined:array[index][1];}
function assocHas(array,key){return assocIndexOf(array,key)>-1;}
function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}
return-1;}
function assocSet(array,key,value){var index=assocIndexOf(array,key);if(index<0){array.push([key,value]);}else{array[index][1]=value;}}
function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||(eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key))){return srcValue;}
return objValue;}
function assignMergeValue(object,key,value){if((value!==undefined&&!eq(object[key],value))||(typeof key=='number'&&value===undefined&&!(key in object))){object[key]=value;}}
function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||(value===undefined&&!(key in object))){object[key]=value;}}
function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}
function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}
function baseAt(object,paths){var index=-1,isNil=object==null,length=paths.length,result=Array(length);while(++index<length){result[index]=isNil?undefined:get(object,paths[index]);}
return result;}
function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}
if(lower!==undefined){number=number>=lower?number:lower;}}
return number;}
function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}
if(result!==undefined){return result;}
if(!isObject(value)){return value;}
var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}
if(tag==objectTag||tag==argsTag||(isFunc&&!object)){if(isHostObject(value)){return object?value:{};}
result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}
result=initCloneByTag(value,tag,baseClone,isDeep);}}
stack||(stack=new Stack);var stacked=stack.get(value);if(stacked){return stacked;}
stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}
arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}
function baseConforms(source){var props=keys(source),length=props.length;return function(object){if(object==null){return!length;}
var index=length;while(index--){var key=props[index],predicate=source[key],value=object[key];if((value===undefined&&!(key in Object(object)))||!predicate(value)){return false;}}
return true;};}
function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}
function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return setTimeout(function(){func.apply(undefined,args);},wait);}
function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}
if(iteratee){values=arrayMap(values,baseUnary(iteratee));}
if(comparator){includes=arrayIncludesWith;isCommon=false;}
else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}
outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=(comparator||value!==0)?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}
result.push(value);}
else if(!includes(values,computed,comparator)){result.push(value);}}
return result;}
var baseEach=createBaseEach(baseForOwn);var baseEachRight=createBaseEach(baseForOwnRight,true);function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}
function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?(current===current&&!isSymbol(current)):comparator(current,computed))){var computed=current,result=value;}}
return result;}
function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:(length+start);}
end=(end===undefined||end>length)?length:toInteger(end);if(end<0){end+=length;}
end=start>end?0:toLength(end);while(start<end){array[start++]=value;}
return array;}
function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}
function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}
return result;}
var baseFor=createBaseFor();var baseForRight=createBaseFor(true);function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}
function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}
function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}
function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}
return(index&&index==length)?object:undefined;}
function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}
function baseGt(value,other){return value>other;}
function baseHas(object,key){return hasOwnProperty.call(object,key)||(typeof object=='object'&&key in object&&getPrototype(object)===null);}
function baseHasIn(object,key){return key in Object(object);}
function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}
function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}
maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||(length>=120&&array.length>=120))?new SetCache(othIndex&&array):undefined;}
array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=(comparator||value!==0)?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}
if(seen){seen.push(computed);}
result.push(value);}}
return result;}
function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}
function baseInvoke(object,path,args){if(!isKey(path,object)){path=castPath(path);object=parent(object,path);path=last(path);}
var func=object==null?object:object[toKey(path)];return func==null?undefined:apply(func,object,args);}
function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}
if(value==null||other==null||(!isObject(value)&&!isObjectLike(other))){return value!==value&&other!==other;}
return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}
function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}
if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}
var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack);return(objIsArr||isTypedArray(object))?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}
if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack);return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}
if(!isSameTag){return false;}
stack||(stack=new Stack);return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}
function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}
object=Object(object);while(index--){var data=matchData[index];if((noCustomizer&&data[2])?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}
while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack;if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}
if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}
return true;}
function baseIteratee(value){if(typeof value=='function'){return value;}
if(value==null){return identity;}
if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}
return property(value);}
function baseKeys(object){return nativeKeys(Object(object));}
function baseKeysIn(object){object=object==null?object:Object(object);var result=[];for(var key in object){result.push(key);}
return result;}
if(enumerate&&!propertyIsEnumerable.call({'valueOf':1},'valueOf')){baseKeysIn=function(object){return iteratorToArray(enumerate(object));};}
function baseLt(value,other){return value<other;}
function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}
function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}
return function(object){return object===source||baseIsMatch(object,source,matchData);};}
function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}
return function(object){var objValue=get(object,path);return(objValue===undefined&&objValue===srcValue)?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}
function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}
if(!(isArray(source)||isTypedArray(source))){var props=keysIn(source);}
arrayEach(props||source,function(srcValue,key){if(props){key=srcValue;srcValue=source[key];}
if(isObject(srcValue)){stack||(stack=new Stack);baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}
else{var newValue=customizer?customizer(object[key],srcValue,(key+''),object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}
assignMergeValue(object,key,newValue);}});}
function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}
var newValue=customizer?customizer(objValue,srcValue,(key+''),object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){newValue=srcValue;if(isArray(srcValue)||isTypedArray(srcValue)){if(isArray(objValue)){newValue=objValue;}
else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}
else{isCommon=false;newValue=baseClone(srcValue,true);}}
else if(isPlainObject(srcValue)||isArguments(srcValue)){if(isArguments(objValue)){newValue=toPlainObject(objValue);}
else if(!isObject(objValue)||(srcIndex&&isFunction(objValue))){isCommon=false;newValue=baseClone(srcValue,true);}
else{newValue=objValue;}}
else{isCommon=false;}}
stack.set(srcValue,newValue);if(isCommon){mergeFunc(newValue,srcValue,srcIndex,customizer,stack);}
stack['delete'](srcValue);assignMergeValue(object,key,newValue);}
function baseNth(array,n){var length=array.length;if(!length){return;}
n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}
function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}
function basePick(object,props){object=Object(object);return arrayReduce(props,function(result,key){if(key in object){result[key]=object[key];}
return result;},{});}
function basePickBy(object,predicate){var index=-1,props=getAllKeysIn(object),length=props.length,result={};while(++index<length){var key=props[index],value=object[key];if(predicate(value,key)){result[key]=value;}}
return result;}
function baseProperty(key){return function(object){return object==null?undefined:object[key];};}
function basePropertyDeep(path){return function(object){return baseGet(object,path);};}
function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}
while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}
splice.call(array,fromIndex,1);}}
return array;}
function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}
else if(!isKey(index,array)){var path=castPath(index),object=parent(array,path);if(object!=null){delete object[toKey(last(path))];}}
else{delete array[toKey(index)];}}}
return array;}
function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}
function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}
return result;}
function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}
do{if(n%2){result+=string;}
n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}
function baseSet(object,path,value,customizer){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]);if(isObject(nested)){var newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=objValue==null?(isIndex(path[index+1])?[]:{}):objValue;}}
assignValue(nested,key,newValue);}
nested=nested[key];}
return object;}
var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:(length+start);}
end=end>length?length:end;if(end<0){end+=length;}
length=start>end?0:((end-start)>>>0);start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}
return result;}
function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}
function baseSortedIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=(low+high)>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?(computed<=value):(computed<value))){low=mid+1;}else{high=mid;}}
return high;}
return baseSortedIndexBy(array,value,identity,retHighest);}
function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?(computed<=value):(computed<value);}
if(setLow){low=mid+1;}else{high=mid;}}
return nativeMin(high,MAX_ARRAY_INDEX);}
function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}
return result;}
function baseToNumber(value){if(typeof value=='number'){return value;}
if(isSymbol(value)){return NAN;}
return+value;}
function baseToString(value){if(typeof value=='string'){return value;}
if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}
var result=(value+'');return(result=='0'&&(1/value)==-INFINITY)?'-0':result;}
function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}
else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}
isCommon=false;includes=cacheHas;seen=new SetCache;}
else{seen=iteratee?[]:result;}
outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=(comparator||value!==0)?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}
if(iteratee){seen.push(computed);}
result.push(value);}
else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}
result.push(value);}}
return result;}
function baseUnset(object,path){path=isKey(path,object)?[path]:castPath(path);object=parent(object,path);var key=toKey(last(path));return!(object!=null&&baseHas(object,key))||delete object[key];}
function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}
function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}
return isDrop?baseSlice(array,(fromRight?0:index),(fromRight?index+1:length)):baseSlice(array,(fromRight?index+1:0),(fromRight?length:index));}
function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}
return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}
function baseXor(arrays,iteratee,comparator){var index=-1,length=arrays.length;while(++index<length){var result=result?arrayPush(baseDifference(result,arrays[index],iteratee,comparator),baseDifference(arrays[index],result,iteratee,comparator)):arrays[index];}
return(result&&result.length)?baseUniq(result,iteratee,comparator):[];}
function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}
return result;}
function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}
function castFunction(value){return typeof value=='function'?value:identity;}
function castPath(value){return isArray(value)?value:stringToPath(value);}
function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return(!start&&end>=length)?array:baseSlice(array,start,end);}
function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}
var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}
function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}
function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}
function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor);}
function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}
function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor);}
function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}
function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}
function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if((!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other)||(valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol)||(valIsNull&&othIsDefined&&othIsReflexive)||(!valIsDefined&&othIsReflexive)||!valIsReflexive){return 1;}
if((!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other)||(othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol)||(othIsNull&&valIsDefined&&valIsReflexive)||(!othIsDefined&&valIsReflexive)||!othIsReflexive){return-1;}}
return 0;}
function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}
var order=orders[index];return result*(order=='desc'?-1:1);}}
return object.index-other.index;}
function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}
while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}
while(rangeLength--){result[leftIndex++]=args[argsIndex++];}
return result;}
function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}
var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}
while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}
return result;}
function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}
return array;}
function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):source[key];assignValue(object,key,newValue);}
return object;}
function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}
function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee),accumulator);};}
function createAssigner(assigner){return rest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}
object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}
return object;});}
function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}
if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}
var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while((fromRight?index--:++index<length)){if(iteratee(iterable[index],index,iterable)===false){break;}}
return collection;};}
function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}
return object;};}
function createBaseWrapper(func,bitmask,thisArg){var isBind=bitmask&BIND_FLAG,Ctor=createCtorWrapper(func);function wrapper(){var fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}
return wrapper;}
function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=reHasComplexSymbol.test(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}
function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}
function createCtorWrapper(Ctor){return function(){var args=arguments;switch(args.length){case 0:return new Ctor;case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}
var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);return isObject(result)?result:thisBinding;};}
function createCurryWrapper(func,bitmask,arity){var Ctor=createCtorWrapper(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getPlaceholder(wrapper);while(index--){args[index]=arguments[index];}
var holders=(length<3&&args[0]!==placeholder&&args[length-1]!==placeholder)?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurryWrapper(func,bitmask,createHybridWrapper,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}
var fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;return apply(fn,this,args);}
return wrapper;}
function createFlow(fromRight){return rest(function(funcs){funcs=baseFlatten(funcs,1);var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}
while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}
index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(ARY_FLAG|CURRY_FLAG|PARTIAL_FLAG|REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=(func.length==1&&isLaziable(func))?wrapper[funcName]():wrapper.thru(func);}}
return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)&&value.length>=LARGE_ARRAY_SIZE){return wrapper.plant(value).value();}
var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}
return result;};});}
function createHybridWrapper(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&ARY_FLAG,isBind=bitmask&BIND_FLAG,isBindKey=bitmask&BIND_KEY_FLAG,isCurried=bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG),isFlip=bitmask&FLIP_FLAG,Ctor=isBindKey?undefined:createCtorWrapper(func);function wrapper(){var length=arguments.length,index=length,args=Array(length);while(index--){args[index]=arguments[index];}
if(isCurried){var placeholder=getPlaceholder(wrapper),holdersCount=countHolders(args,placeholder);}
if(partials){args=composeArgs(args,partials,holders,isCurried);}
if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}
length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurryWrapper(func,bitmask,createHybridWrapper,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}
var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}
if(isAry&&ary<length){args.length=ary;}
if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtorWrapper(fn);}
return fn.apply(thisBinding,args);}
return wrapper;}
function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}
function createMathOperation(operator){return function(value,other){var result;if(value===undefined&&other===undefined){return 0;}
if(value!==undefined){result=value;}
if(other!==undefined){if(result===undefined){return other;}
if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}
result=operator(value,other);}
return result;};}
function createOver(arrayFunc){return rest(function(iteratees){iteratees=(iteratees.length==1&&isArray(iteratees[0]))?arrayMap(iteratees[0],baseUnary(getIteratee())):arrayMap(baseFlatten(iteratees,1,isFlattenableIteratee),baseUnary(getIteratee()));return rest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}
function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}
var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return reHasComplexSymbol.test(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}
function createPartialWrapper(func,bitmask,thisArg,partials){var isBind=bitmask&BIND_FLAG,Ctor=createCtorWrapper(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}
while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}
return apply(fn,isBind?thisArg:this,args);}
return wrapper;}
function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}
start=toNumber(start);start=start===start?start:0;if(end===undefined){end=start;start=0;}else{end=toNumber(end)||0;}
step=step===undefined?(start<end?1:-1):(toNumber(step)||0);return baseRange(start,end,step,fromRight);};}
function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}
return operator(value,other);};}
function createRecurryWrapper(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=(isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG);bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);if(!(bitmask&CURRY_BOUND_FLAG)){bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);}
var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}
result.placeholder=placeholder;return result;}
function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=toInteger(precision);if(precision){var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}
return func(number);};}
var createSet=!(Set&&(1/setToArray(new Set([,-0]))[1])==INFINITY)?noop:function(values){return new Set(values);};function createWrapper(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
var length=partials?partials.length:0;if(!length){bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);partials=holders=undefined;}
ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}
var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}
func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]==null?(isBindKey?0:func.length):nativeMax(newData[9]-length,0);if(!arity&&bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG)){bitmask&=~(CURRY_FLAG|CURRY_RIGHT_FLAG);}
if(!bitmask||bitmask==BIND_FLAG){var result=createBaseWrapper(func,bitmask,thisArg);}else if(bitmask==CURRY_FLAG||bitmask==CURRY_RIGHT_FLAG){result=createCurryWrapper(func,bitmask,arity);}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!holders.length){result=createPartialWrapper(func,bitmask,thisArg,partials);}else{result=createHybridWrapper.apply(undefined,newData);}
var setter=data?baseSetData:setData;return setter(result,newData);}
function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var index=-1,isPartial=bitmask&PARTIAL_COMPARE_FLAG,isUnordered=bitmask&UNORDERED_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}
var stacked=stack.get(array);if(stacked){return stacked==other;}
var result=true;stack.set(array,other);while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}
if(compared!==undefined){if(compared){continue;}
result=false;break;}
if(isUnordered){if(!arraySome(other,function(othValue){return arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack);})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}
stack['delete'](array);return result;}
function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if((object.byteLength!=other.byteLength)||(object.byteOffset!=other.byteOffset)){return false;}
object=object.buffer;other=other.buffer;case arrayBufferTag:if((object.byteLength!=other.byteLength)||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}
return true;case boolTag:case dateTag:return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:return(object!=+object)?other!=+other:object==+other;case regexpTag:case stringTag:return object==(other+'');case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}
var stacked=stack.get(object);if(stacked){return stacked==other;}
bitmask|=UNORDERED_COMPARE_FLAG;stack.set(object,other);return equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}
return false;}
function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}
var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:baseHas(other,key))){return false;}}
var stacked=stack.get(object);if(stacked){return stacked==other;}
var result=true;stack.set(object,other);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}
if(!(compared===undefined?(objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack)):compared)){result=false;break;}
skipCtor||(skipCtor=key=='constructor');}
if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&('constructor'in object&&'constructor'in other)&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}
stack['delete'](object);return result;}
function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}
function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}
var getData=!metaMap?noop:function(func){return metaMap.get(func);};function getFuncName(func){var result=(func.name+''),array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}
return result;}
function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}
var getLength=baseProperty('length');function getMatchData(object){var result=toPairs(object),length=result.length;while(length--){result[length][2]=isStrictComparable(result[length][1]);}
return result;}
function getNative(object,key){var value=object[key];return isNative(value)?value:undefined;}
function getPlaceholder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}
function getPrototype(value){return nativeGetPrototype(Object(value));}
function getSymbols(object){return getOwnPropertySymbols(Object(object));}
if(!getOwnPropertySymbols){getSymbols=function(){return[];};}
var getSymbolsIn=!getOwnPropertySymbols?getSymbols:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}
return result;};function getTag(value){return objectToString.call(value);}
if((DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag)||(Map&&getTag(new Map)!=mapTag)||(Promise&&getTag(Promise.resolve())!=promiseTag)||(Set&&getTag(new Set)!=setTag)||(WeakMap&&getTag(new WeakMap)!=weakMapTag)){getTag=function(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}
return result;};}
function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case 'drop':start+=size;break;case 'dropRight':end-=size;break;case 'take':end=nativeMin(end,start+size);break;case 'takeRight':start=nativeMax(start,end-size);break;}}
return{'start':start,'end':end};}
function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}
object=object[key];}
if(result){return result;}
var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isString(object)||isArguments(object));}
function initCloneArray(array){var length=array.length,result=array.constructor(length);if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}
return result;}
function initCloneObject(object){return(typeof object.constructor=='function'&&!isPrototype(object))?baseCreate(getPrototype(object)):{};}
function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}
function indexKeys(object){var length=object?object.length:undefined;if(isLength(length)&&(isArray(object)||isString(object)||isArguments(object))){return baseTimes(length,String);}
return null;}
function isFlattenable(value){return isArrayLikeObject(value)&&(isArray(value)||isArguments(value));}
function isFlattenableIteratee(value){return isArray(value)&&!(value.length==2&&!isFunction(value[0]));}
function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&(value>-1&&value%1==0&&value<length);}
function isIterateeCall(value,index,object){if(!isObject(object)){return false;}
var type=typeof index;if(type=='number'?(isArrayLike(object)&&isIndex(index,object.length)):(type=='string'&&index in object)){return eq(object[index],value);}
return false;}
function isKey(value,object){if(isArray(value)){return false;}
var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}
return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||(object!=null&&value in Object(object));}
function isKeyable(value){var type=typeof value;return(type=='string'||type=='number'||type=='symbol'||type=='boolean')?(value!=='__proto__'):(value===null);}
function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}
if(func===other){return true;}
var data=getData(other);return!!data&&func===data[0];}
function isPrototype(value){var Ctor=value&&value.constructor,proto=(typeof Ctor=='function'&&Ctor.prototype)||objectProto;return value===proto;}
function isStrictComparable(value){return value===value&&!isObject(value);}
function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}
return object[key]===srcValue&&(srcValue!==undefined||(key in Object(object)));};}
function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(BIND_FLAG|BIND_KEY_FLAG|ARY_FLAG);var isCombo=((srcBitmask==ARY_FLAG)&&(bitmask==CURRY_FLAG))||((srcBitmask==ARY_FLAG)&&(bitmask==REARG_FLAG)&&(data[7].length<=source[8]))||((srcBitmask==(ARY_FLAG|REARG_FLAG))&&(source[7].length<=source[8])&&(bitmask==CURRY_FLAG));if(!(isCommon||isCombo)){return data;}
if(srcBitmask&BIND_FLAG){data[2]=source[2];newBitmask|=bitmask&BIND_FLAG?0:CURRY_BOUND_FLAG;}
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}
value=source[7];if(value){data[7]=value;}
if(srcBitmask&ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}
if(data[9]==null){data[9]=source[9];}
data[0]=source[0];data[1]=newBitmask;return data;}
function mergeDefaults(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){baseMerge(objValue,srcValue,undefined,mergeDefaults,stack.set(srcValue,objValue));}
return objValue;}
function parent(object,path){return path.length==1?object:baseGet(object,baseSlice(path,0,-1));}
function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}
return array;}
var setData=(function(){var count=0,lastCalled=0;return function(key,value){var stamp=now(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return key;}}else{count=0;}
return baseSetData(key,value);};}());var stringToPath=memoize(function(string){var result=[];toString(string).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):(number||match));});return result;});function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}
var result=(value+'');return(result=='0'&&(1/value)==-INFINITY)?'-0':result;}
function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}
try{return(func+'');}catch(e){}}
return '';}
function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}
var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}
function chunk(array,size,guard){if((guard?isIterateeCall(array,size,guard):size===undefined)){size=1;}else{size=nativeMax(toInteger(size),0);}
var length=array?array.length:0;if(!length||size<1){return[];}
var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,(index+=size));}
return result;}
function compact(array){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}
return result;}
function concat(){var length=arguments.length,array=castArray(arguments[0]);if(length<2){return length?copyArray(array):[];}
var args=Array(length-1);while(length--){args[length-1]=arguments[length];}
return arrayConcat(array,baseFlatten(args,1));}
var difference=rest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});var differenceBy=rest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee)):[];});var differenceWith=rest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}
return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});function drop(array,n,guard){var length=array?array.length:0;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}
function dropRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}
function dropRightWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),true,true):[];}
function dropWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),true):[];}
function fill(array,value,start,end){var length=array?array.length:0;if(!length){return[];}
if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}
return baseFill(array,value,start,end);}
function findIndex(array,predicate){return(array&&array.length)?baseFindIndex(array,getIteratee(predicate,3)):-1;}
function findLastIndex(array,predicate){return(array&&array.length)?baseFindIndex(array,getIteratee(predicate,3),true):-1;}
function flatten(array){var length=array?array.length:0;return length?baseFlatten(array,1):[];}
function flattenDeep(array){var length=array?array.length:0;return length?baseFlatten(array,INFINITY):[];}
function flattenDepth(array,depth){var length=array?array.length:0;if(!length){return[];}
depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}
function fromPairs(pairs){var index=-1,length=pairs?pairs.length:0,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}
return result;}
function head(array){return(array&&array.length)?array[0]:undefined;}
function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}
fromIndex=toInteger(fromIndex);if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}
return baseIndexOf(array,value,fromIndex);}
function initial(array){return dropRight(array,1);}
var intersection=rest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped):[];});var intersectionBy=rest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}
return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped,getIteratee(iteratee)):[];});var intersectionWith=rest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(comparator===last(mapped)){comparator=undefined;}else{mapped.pop();}
return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped,undefined,comparator):[];});function join(array,separator){return array?nativeJoin.call(array,separator):'';}
function last(array){var length=array?array.length:0;return length?array[length-1]:undefined;}
function lastIndexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}
var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=(index<0?nativeMax(length+index,0):nativeMin(index,length-1))+1;}
if(value!==value){return indexOfNaN(array,index,true);}
while(index--){if(array[index]===value){return index;}}
return-1;}
function nth(array,n){return(array&&array.length)?baseNth(array,toInteger(n)):undefined;}
var pull=rest(pullAll);function pullAll(array,values){return(array&&array.length&&values&&values.length)?basePullAll(array,values):array;}
function pullAllBy(array,values,iteratee){return(array&&array.length&&values&&values.length)?basePullAll(array,values,getIteratee(iteratee)):array;}
function pullAllWith(array,values,comparator){return(array&&array.length&&values&&values.length)?basePullAll(array,values,undefined,comparator):array;}
var pullAt=rest(function(array,indexes){indexes=baseFlatten(indexes,1);var length=array?array.length:0,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}
var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}
basePullAt(array,indexes);return result;}
function reverse(array){return array?nativeReverse.call(array):array;}
function slice(array,start,end){var length=array?array.length:0;if(!length){return[];}
if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}
else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}
return baseSlice(array,start,end);}
function sortedIndex(array,value){return baseSortedIndex(array,value);}
function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee));}
function sortedIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}
return-1;}
function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}
function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee),true);}
function sortedLastIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}
return-1;}
function sortedUniq(array){return(array&&array.length)?baseSortedUniq(array):[];}
function sortedUniqBy(array,iteratee){return(array&&array.length)?baseSortedUniq(array,getIteratee(iteratee)):[];}
function tail(array){return drop(array,1);}
function take(array,n,guard){if(!(array&&array.length)){return[];}
n=(guard||n===undefined)?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}
function takeRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}
function takeRightWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),false,true):[];}
function takeWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3)):[];}
var union=rest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});var unionBy=rest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee));});var unionWith=rest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});function uniq(array){return(array&&array.length)?baseUniq(array):[];}
function uniqBy(array,iteratee){return(array&&array.length)?baseUniq(array,getIteratee(iteratee)):[];}
function uniqWith(array,comparator){return(array&&array.length)?baseUniq(array,undefined,comparator):[];}
function unzip(array){if(!(array&&array.length)){return[];}
var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}
function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}
var result=unzip(array);if(iteratee==null){return result;}
return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}
var without=rest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});var xor=rest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});var xorBy=rest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee));});var xorWith=rest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}
return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});var zip=rest(unzip);function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}
function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}
var zipWith=rest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});function chain(value){var result=lodash(value);result.__chain__=true;return result;}
function tap(value,interceptor){interceptor(value);return value;}
function thru(value,interceptor){return interceptor(value);}
var wrapperAt=rest(function(paths){paths=baseFlatten(paths,1);var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}
value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}
return array;});});function wrapperChain(){return chain(this);}
function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}
function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}
var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}
function wrapperToIterator(){return this;}
function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}
var previous=clone;parent=parent.__wrapped__;}
previous.__wrapped__=value;return result;}
function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}
wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}
return this.thru(reverse);}
function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}
var countBy=createAggregator(function(result,value,key){hasOwnProperty.call(result,key)?++result[key]:(result[key]=1);});function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}
return func(collection,getIteratee(predicate,3));}
function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}
function find(collection,predicate){predicate=getIteratee(predicate,3);if(isArray(collection)){var index=baseFindIndex(collection,predicate);return index>-1?collection[index]:undefined;}
return baseFind(collection,predicate,baseEach);}
function findLast(collection,predicate){predicate=getIteratee(predicate,3);if(isArray(collection)){var index=baseFindIndex(collection,predicate,true);return index>-1?collection[index]:undefined;}
return baseFind(collection,predicate,baseEachRight);}
function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}
function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}
function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}
function forEach(collection,iteratee){return(typeof iteratee=='function'&&isArray(collection))?arrayEach(collection,iteratee):baseEach(collection,getIteratee(iteratee));}
function forEachRight(collection,iteratee){return(typeof iteratee=='function'&&isArray(collection))?arrayEachRight(collection,iteratee):baseEachRight(collection,getIteratee(iteratee));}
var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{result[key]=[value];}});function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=(fromIndex&&!guard)?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}
return isString(collection)?(fromIndex<=length&&collection.indexOf(value,fromIndex)>-1):(!!length&&baseIndexOf(collection,value,fromIndex)>-1);}
var invokeMap=rest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',isProp=isKey(path),result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){var func=isFunc?path:((isProp&&value!=null)?value[path]:undefined);result[++index]=func?apply(func,value,args):baseInvoke(value,path,args);});return result;});var keyBy=createAggregator(function(result,value,key){result[key]=value;});function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}
function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}
if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}
orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}
return baseOrderBy(collection,iteratees,orders);}
var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}
function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}
function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;predicate=getIteratee(predicate,3);return func(collection,function(value,index,collection){return!predicate(value,index,collection);});}
function sample(collection){var array=isArrayLike(collection)?collection:values(collection),length=array.length;return length>0?array[baseRandom(0,length-1)]:undefined;}
function sampleSize(collection,n,guard){var index=-1,result=toArray(collection),length=result.length,lastIndex=length-1;if((guard?isIterateeCall(collection,n,guard):n===undefined)){n=1;}else{n=baseClamp(toInteger(n),0,length);}
while(++index<n){var rand=baseRandom(index,lastIndex),value=result[rand];result[rand]=result[index];result[index]=value;}
result.length=n;return result;}
function shuffle(collection){return sampleSize(collection,MAX_ARRAY_LENGTH);}
function size(collection){if(collection==null){return 0;}
if(isArrayLike(collection)){var result=collection.length;return(result&&isString(collection))?stringSize(collection):result;}
if(isObjectLike(collection)){var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}}
return keys(collection).length;}
function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}
return func(collection,getIteratee(predicate,3));}
var sortBy=rest(function(collection,iteratees){if(collection==null){return[];}
var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}
iteratees=(iteratees.length==1&&isArray(iteratees[0]))?iteratees[0]:baseFlatten(iteratees,1,isFlattenableIteratee);return baseOrderBy(collection,iteratees,[]);});var now=Date.now;function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}
function ary(func,n,guard){n=guard?undefined:n;n=(func&&n==null)?func.length:n;return createWrapper(func,ARY_FLAG,undefined,undefined,undefined,undefined,n);}
function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}
if(n<=1){func=undefined;}
return result;};}
var bind=rest(function(func,thisArg,partials){var bitmask=BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getPlaceholder(bind));bitmask|=PARTIAL_FLAG;}
return createWrapper(func,bitmask,thisArg,partials,holders);});var bindKey=rest(function(object,key,partials){var bitmask=BIND_FLAG|BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getPlaceholder(bindKey));bitmask|=PARTIAL_FLAG;}
return createWrapper(key,bitmask,object,partials,holders);});function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrapper(func,CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}
function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrapper(func,CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}
function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime=0,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}
function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}
function leadingEdge(time){lastInvokeTime=time;timerId=setTimeout(timerExpired,wait);return leading?invokeFunc(time):result;}
function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}
function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return(!lastCallTime||(timeSinceLastCall>=wait)||(timeSinceLastCall<0)||(maxing&&timeSinceLastInvoke>=maxWait));}
function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}
timerId=setTimeout(timerExpired,remainingWait(time));}
function trailingEdge(time){clearTimeout(timerId);timerId=undefined;if(trailing&&lastArgs){return invokeFunc(time);}
lastArgs=lastThis=undefined;return result;}
function cancel(){if(timerId!==undefined){clearTimeout(timerId);}
lastCallTime=lastInvokeTime=0;lastArgs=lastThis=timerId=undefined;}
function flush(){return timerId===undefined?result:trailingEdge(now());}
function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}
if(maxing){clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}
if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}
return result;}
debounced.cancel=cancel;debounced.flush=flush;return debounced;}
var defer=rest(function(func,args){return baseDelay(func,1,args);});var delay=rest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});function flip(func){return createWrapper(func,FLIP_FLAG);}
function memoize(func,resolver){if(typeof func!='function'||(resolver&&typeof resolver!='function')){throw new TypeError(FUNC_ERROR_TEXT);}
var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}
var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache);return memoized;}
memoize.Cache=MapCache;function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return function(){return!predicate.apply(this,arguments);};}
function once(func){return before(2,func);}
var overArgs=rest(function(func,transforms){transforms=(transforms.length==1&&isArray(transforms[0]))?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1,isFlattenableIteratee),baseUnary(getIteratee()));var funcsLength=transforms.length;return rest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}
return apply(func,this,args);});});var partial=rest(function(func,partials){var holders=replaceHolders(partials,getPlaceholder(partial));return createWrapper(func,PARTIAL_FLAG,undefined,partials,holders);});var partialRight=rest(function(func,partials){var holders=replaceHolders(partials,getPlaceholder(partialRight));return createWrapper(func,PARTIAL_RIGHT_FLAG,undefined,partials,holders);});var rearg=rest(function(func,indexes){return createWrapper(func,REARG_FLAG,undefined,undefined,undefined,baseFlatten(indexes,1));});function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
start=nativeMax(start===undefined?(func.length-1):toInteger(start),0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}
switch(start){case 0:return func.call(this,array);case 1:return func.call(this,args[0],array);case 2:return func.call(this,args[0],args[1],array);}
var otherArgs=Array(start+1);index=-1;while(++index<start){otherArgs[index]=args[index];}
otherArgs[start]=array;return apply(func,this,otherArgs);};}
function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
start=start===undefined?0:nativeMax(toInteger(start),0);return rest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}
return apply(func,this,otherArgs);});}
function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}
return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}
function unary(func){return ary(func,1);}
function wrap(value,wrapper){wrapper=wrapper==null?identity:wrapper;return partial(wrapper,value);}
function castArray(){if(!arguments.length){return[];}
var value=arguments[0];return isArray(value)?value:[value];}
function clone(value){return baseClone(value,false,true);}
function cloneWith(value,customizer){return baseClone(value,false,true,customizer);}
function cloneDeep(value){return baseClone(value,true,true);}
function cloneDeepWith(value,customizer){return baseClone(value,true,true,customizer);}
function eq(value,other){return value===other||(value!==value&&other!==other);}
var gt=createRelationalOperation(baseGt);var gte=createRelationalOperation(function(value,other){return value>=other;});function isArguments(value){return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}
var isArray=Array.isArray;function isArrayBuffer(value){return isObjectLike(value)&&objectToString.call(value)==arrayBufferTag;}
function isArrayLike(value){return value!=null&&isLength(getLength(value))&&!isFunction(value);}
function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}
function isBoolean(value){return value===true||value===false||(isObjectLike(value)&&objectToString.call(value)==boolTag);}
var isBuffer=!Buffer?constant(false):function(value){return value instanceof Buffer;};function isDate(value){return isObjectLike(value)&&objectToString.call(value)==dateTag;}
function isElement(value){return!!value&&value.nodeType===1&&isObjectLike(value)&&!isPlainObject(value);}
function isEmpty(value){if(isArrayLike(value)&&(isArray(value)||isString(value)||isFunction(value.splice)||isArguments(value)||isBuffer(value))){return!value.length;}
if(isObjectLike(value)){var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}}
for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}
return!(nonEnumShadows&&keys(value).length);}
function isEqual(value,other){return baseIsEqual(value,other);}
function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,customizer):!!result;}
function isError(value){if(!isObjectLike(value)){return false;}
return(objectToString.call(value)==errorTag)||(typeof value.message=='string'&&typeof value.name=='string');}
function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}
function isFunction(value){var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}
function isInteger(value){return typeof value=='number'&&value==toInteger(value);}
function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}
function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}
function isObjectLike(value){return!!value&&typeof value=='object';}
function isMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}
function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}
function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}
function isNaN(value){return isNumber(value)&&value!=+value;}
function isNative(value){if(!isObject(value)){return false;}
var pattern=(isFunction(value)||isHostObject(value))?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}
function isNull(value){return value===null;}
function isNil(value){return value==null;}
function isNumber(value){return typeof value=='number'||(isObjectLike(value)&&objectToString.call(value)==numberTag);}
function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}
var proto=getPrototype(value);if(proto===null){return true;}
var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return(typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString);}
function isRegExp(value){return isObject(value)&&objectToString.call(value)==regexpTag;}
function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}
function isSet(value){return isObjectLike(value)&&getTag(value)==setTag;}
function isString(value){return typeof value=='string'||(!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag);}
function isSymbol(value){return typeof value=='symbol'||(isObjectLike(value)&&objectToString.call(value)==symbolTag);}
function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}
function isUndefined(value){return value===undefined;}
function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}
function isWeakSet(value){return isObjectLike(value)&&objectToString.call(value)==weakSetTag;}
var lt=createRelationalOperation(baseLt);var lte=createRelationalOperation(function(value,other){return value<=other;});function toArray(value){if(!value){return[];}
if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}
if(iteratorSymbol&&value[iteratorSymbol]){return iteratorToArray(value[iteratorSymbol]());}
var tag=getTag(value),func=tag==mapTag?mapToArray:(tag==setTag?setToArray:values);return func(value);}
function toInteger(value){if(!value){return value===0?value:0;}
value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=(value<0?-1:1);return sign*MAX_INTEGER;}
var remainder=value%1;return value===value?(remainder?value-remainder:value):0;}
function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}
function toNumber(value){if(typeof value=='number'){return value;}
if(isSymbol(value)){return NAN;}
if(isObject(value)){var other=isFunction(value.valueOf)?value.valueOf():value;value=isObject(other)?(other+''):other;}
if(typeof value!='string'){return value===0?value:+value;}
value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return(isBinary||reIsOctal.test(value))?freeParseInt(value.slice(2),isBinary?2:8):(reIsBadHex.test(value)?NAN:+value);}
function toPlainObject(value){return copyObject(value,keysIn(value));}
function toSafeInteger(value){return baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER);}
function toString(value){return value==null?'':baseToString(value);}
var assign=createAssigner(function(object,source){if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}
for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});var assignIn=createAssigner(function(object,source){if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){copyObject(source,keysIn(source),object);return;}
for(var key in source){assignValue(object,key,source[key]);}});var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});var at=rest(function(object,paths){return baseAt(object,baseFlatten(paths,1));});function create(prototype,properties){var result=baseCreate(prototype);return properties?baseAssign(result,properties):result;}
var defaults=rest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});var defaultsDeep=rest(function(args){args.push(undefined,mergeDefaults);return apply(mergeWith,undefined,args);});function findKey(object,predicate){return baseFind(object,getIteratee(predicate,3),baseForOwn,true);}
function findLastKey(object,predicate){return baseFind(object,getIteratee(predicate,3),baseForOwnRight,true);}
function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee),keysIn);}
function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee),keysIn);}
function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee));}
function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee));}
function functions(object){return object==null?[]:baseFunctions(object,keys(object));}
function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}
function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}
function has(object,path){return object!=null&&hasPath(object,path,baseHas);}
function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}
var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);var invoke=rest(baseInvoke);function keys(object){var isProto=isPrototype(object);if(!(isProto||isArrayLike(object))){return baseKeys(object);}
var indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;for(var key in object){if(baseHas(object,key)&&!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(isProto&&key=='constructor')){result.push(key);}}
return result;}
function keysIn(object){var index=-1,isProto=isPrototype(object),props=baseKeysIn(object),propsLength=props.length,indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;while(++index<propsLength){var key=props[index];if(!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}
return result;}
function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){result[iteratee(value,key,object)]=value;});return result;}
function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){result[key]=iteratee(value,key,object);});return result;}
var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});var omit=rest(function(object,props){if(object==null){return{};}
props=arrayMap(baseFlatten(props,1),toKey);return basePick(object,baseDifference(getAllKeysIn(object),props));});function omitBy(object,predicate){predicate=getIteratee(predicate);return basePickBy(object,function(value,key){return!predicate(value,key);});}
var pick=rest(function(object,props){return object==null?{}:basePick(object,arrayMap(baseFlatten(props,1),toKey));});function pickBy(object,predicate){return object==null?{}:basePickBy(object,getIteratee(predicate));}
function result(object,path,defaultValue){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length;if(!length){object=undefined;length=1;}
while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}
object=isFunction(value)?value.call(object):value;}
return object;}
function set(object,path,value){return object==null?object:baseSet(object,path,value);}
function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}
function toPairs(object){return baseToPairs(object,keys(object));}
function toPairsIn(object){return baseToPairs(object,keysIn(object));}
function transform(object,iteratee,accumulator){var isArr=isArray(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){if(isArr||isObject(object)){var Ctor=object.constructor;if(isArr){accumulator=isArray(object)?new Ctor:[];}else{accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}}else{accumulator={};}}
(isArr?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}
function unset(object,path){return object==null?true:baseUnset(object,path);}
function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}
function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}
function values(object){return object?baseValues(object,keys(object)):[];}
function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}
function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}
if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}
if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}
return baseClamp(toNumber(number),lower,upper);}
function inRange(number,start,end){start=toNumber(start)||0;if(end===undefined){end=start;start=0;}else{end=toNumber(end)||0;}
number=toNumber(number);return baseInRange(number,start,end);}
function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}
if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}
else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}
if(lower===undefined&&upper===undefined){lower=0;upper=1;}
else{lower=toNumber(lower)||0;if(upper===undefined){upper=lower;lower=0;}else{upper=toNumber(upper)||0;}}
if(lower>upper){var temp=lower;lower=upper;upper=temp;}
if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+(rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1)))),upper);}
return baseRandom(lower,upper);}
var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});function capitalize(string){return upperFirst(toString(string).toLowerCase());}
function deburr(string){string=toString(string);return string&&string.replace(reLatin1,deburrLetter).replace(reComboMark,'');}
function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);position-=target.length;return position>=0&&string.indexOf(target,position)==position;}
function escape(string){string=toString(string);return(string&&reHasUnescapedHtml.test(string))?string.replace(reUnescapedHtml,escapeHtmlChar):string;}
function escapeRegExp(string){string=toString(string);return(string&&reHasRegExpChar.test(string))?string.replace(reRegExpChar,'\\$&'):string;}
var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});var lowerFirst=createCaseFirst('toLowerCase');function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}
var mid=(length-strLength)/2;return(createPadding(nativeFloor(mid),chars)+
string+
createPadding(nativeCeil(mid),chars));}
function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return(length&&strLength<length)?(string+createPadding(length-strLength,chars)):string;}
function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return(length&&strLength<length)?(createPadding(length-strLength,chars)+string):string;}
function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}
string=toString(string).replace(reTrim,'');return nativeParseInt(string,radix||(reHasHexPrefix.test(string)?16:10));}
function repeat(string,n,guard){if((guard?isIterateeCall(string,n,guard):n===undefined)){n=1;}else{n=toInteger(n);}
return baseRepeat(toString(string),n);}
function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:nativeReplace.call(string,args[1],args[2]);}
var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}
limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}
string=toString(string);if(string&&(typeof separator=='string'||(separator!=null&&!isRegExp(separator)))){separator=baseToString(separator);if(separator==''&&reHasComplexSymbol.test(string)){return castSlice(stringToArray(string),0,limit);}}
return nativeSplit.call(string,separator,limit);}
var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});function startsWith(string,target,position){string=toString(string);position=baseClamp(toInteger(position),0,string.length);return string.lastIndexOf(baseToString(target),position)==position;}
function template(string,options,guard){var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}
string=toString(string);options=assignInWith({},options,settings,assignInDefaults);var imports=assignInWith({},options.imports,settings.imports,assignInDefaults),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+
interpolate.source+'|'+
(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+
(options.evaluate||reNoMatch).source+'|$','g');var sourceURL='//# sourceURL='+
('sourceURL'in options?options.sourceURL:('lodash.templateSources['+(++templateCounter)+']'))+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}
if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}
if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}
index=offset+match.length;return match;});source+="';\n";var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');source='function('+(variable||'obj')+') {\n'+
(variable?'':'obj || (obj = {});\n')+
"var __t, __p = ''"+
(isEscaping?', __e = _.escape':'')+
(isEvaluating?', __j = Array.prototype.join;\n'+
"function print() { __p += __j.call(arguments, '') }\n":';\n')+
source+
'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});result.source=source;if(isError(result)){throw result;}
return result;}
function toLower(value){return toString(value).toLowerCase();}
function toUpper(value){return toString(value).toUpperCase();}
function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}
function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}
function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}
function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}
string=toString(string);var strLength=string.length;if(reHasComplexSymbol.test(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}
if(length>=strLength){return string;}
var end=length-stringSize(omission);if(end<1){return omission;}
var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}
if(strSymbols){end+=(result.length-end);}
if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}
separator.lastIndex=0;while((match=separator.exec(substring))){var newEnd=match.index;}
result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}
return result+omission;}
function unescape(string){string=toString(string);return(string&&reHasEscapedHtml.test(string))?string.replace(reEscapedHtml,unescapeHtmlChar):string;}
var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});var upperFirst=createCaseFirst('toUpperCase');function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){pattern=reHasComplexWord.test(string)?reComplexWord:reBasicWord;}
return string.match(pattern)||[];}
var attempt=rest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});var bindAll=rest(function(object,methodNames){arrayEach(baseFlatten(methodNames,1),function(key){key=toKey(key);object[key]=bind(object[key],object);});return object;});function cond(pairs){var length=pairs?pairs.length:0,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return[toIteratee(pair[0]),pair[1]];});return rest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}
function conforms(source){return baseConforms(baseClone(source,true));}
function constant(value){return function(){return value;};}
var flow=createFlow();var flowRight=createFlow(true);function identity(value){return value;}
function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,true));}
function matches(source){return baseMatches(baseClone(source,true));}
function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,true));}
var method=rest(function(path,args){return function(object){return baseInvoke(object,path,args);};});var methodOf=rest(function(object,args){return function(path){return baseInvoke(object,path,args);};});function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}
var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}
return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}
function noConflict(){if(root._===this){root._=oldDash;}
return this;}
function noop(){}
function nthArg(n){n=toInteger(n);return rest(function(args){return baseNth(args,n);});}
var over=createOver(arrayMap);var overEvery=createOver(arrayEvery);var overSome=createOver(arraySome);function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}
function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}
var range=createRange();var rangeRight=createRange(true);function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}
var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}
return result;}
function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}
return isSymbol(value)?[value]:copyArray(stringToPath(value));}
function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}
var add=createMathOperation(function(augend,addend){return augend+addend;});var ceil=createRound('ceil');var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;});var floor=createRound('floor');function max(array){return(array&&array.length)?baseExtremum(array,identity,baseGt):undefined;}
function maxBy(array,iteratee){return(array&&array.length)?baseExtremum(array,getIteratee(iteratee),baseGt):undefined;}
function mean(array){return baseMean(array,identity);}
function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee));}
function min(array){return(array&&array.length)?baseExtremum(array,identity,baseLt):undefined;}
function minBy(array,iteratee){return(array&&array.length)?baseExtremum(array,getIteratee(iteratee),baseLt):undefined;}
var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;});var round=createRound('round');var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;});function sum(array){return(array&&array.length)?baseSum(array,identity):0;}
function sumBy(array,iteratee){return(array&&array.length)?baseSum(array,getIteratee(iteratee)):0;}
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;mixin(lodash,lodash);lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.deburr=deburr;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,(function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}()),{'chain':false});lodash.VERSION=VERSION;arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){var filtered=this.__filtered__;if(filtered&&!index){return new LazyWrapper(this);}
n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.clone();if(filtered){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}
return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=rest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}
return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){predicate=getIteratee(predicate,3);return this.filter(function(value){return!predicate(value);});};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}
if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}
if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}
return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?('take'+(methodName=='last'?'Right':'')):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}
lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return(isTaker&&chainAll)?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){isLazy=useLazy=false;}
var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}
if(isUnwrapped&&onlyLazy){return func.apply(this,args);}
result=this.thru(interceptor);return isUnwrapped?(isTaker?result.value()[0]:result.value()):result;};});arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}
return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=(lodashFunc.name+''),names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybridWrapper(undefined,BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;if(iteratorSymbol){lodash.prototype[iteratorSymbol]=wrapperToIterator;}
return lodash;}
var _=runInContext();(freeWindow||freeSelf||{})._=_;if(true){!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _;}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}
else if(freeExports&&freeModule){if(moduleExports){(freeModule.exports=_)._=_;}
freeExports._=_;}
else{root._=_;}}.call(this));}.call(exports,__webpack_require__(8)(module),(function(){return this;}())))},function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];module.children=[];module.webpackPolyfill=1;}
return module;}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(imageWidth,imageHeight,containerWidth,containerHeight,alignX,alignY){var target={x:0,y:0,width:containerWidth,height:containerHeight};var imageRatio=imageWidth/imageHeight;var containerRatio=containerWidth/containerHeight;var scale=void 0;if(imageRatio>containerRatio){scale=containerHeight/imageHeight;target.width=imageWidth*scale;target.x=(containerWidth-target.width)*alignX;}else{scale=containerWidth/imageWidth;target.height=imageHeight*scale;target.y=(containerHeight-target.height)*alignY;}
return target;};},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _lodash=__webpack_require__(7);exports.default=function(){return{_listeners:null,addEventListener:function addEventListener(event,callback){if(this._listeners==null)this._listeners=[];this._listeners.push({event:event,callback:callback});},dispatchEvent:function dispatchEvent(event){var _this=this;var data=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];if(this._listeners==null)return;this._listeners.filter(function(v){return v.event==event;}).forEach(function(v){return v.callback.call(_this,(0,_lodash.assign)({target:_this,currentTarget:_this},data));});},removeEventListener:function removeEventListener(event,callback){if(this._listeners==null)return;this._listeners=this._listeners.filter(function(v){return v.event!=event||v.callback!=callback;});}};};},,,,function(module,exports){module.exports="precision mediump float;\r\n\r\nuniform float u_time;\r\nvarying vec2 v_position;\r\nuniform sampler2D u_image;\r\nuniform sampler2D u_maps;\r\nuniform vec2 u_mouse;\r\nuniform float u_dpi;\r\nuniform vec2 u_resolution;\r\n\r\nvec2 pos(){\r\n  return vec2(0.0,0.0);\r\n}\r\n\r\nvec4 blend(vec4 bg,vec4 fg){\r\n  vec3 bgm=bg.rgb*bg.a;\r\n  vec3 fgm=fg.rgb*fg.a;\r\n  float ia=1.0-fg.a;\r\n  float a=(fg.a + bg.a * ia);\r\n  vec3 rgb;\r\n  if(a!=0.0){\r\n    rgb=(fgm + bgm * ia) / a;\r\n  }else{\r\n    rgb=vec3(0.0,0.0,0.0);\r\n  }\r\n  return vec4(rgb,a);\r\n}\r\nvec2 pixel(){\r\n  return vec2(1.0*u_dpi)/u_resolution;\r\n}\r\nfloat wave(float x,float freq, float speed){\r\n  return sin(x*freq+((u_time*(3.1415/2.0))*speed));\r\n}\r\nvec2 waves(vec2 pos){\r\n  vec4 maps=texture2D(u_maps,pos);\r\n  float mask=maps.r;\r\n  float y=maps.g;\r\n  float y2=pow(y,2.0);\r\n\r\n  vec2 intensity=vec2(\r\n    0.5-(y2*0.5),\r\n    0.2+(y2*1.8)\r\n  )*pixel();\r\n\r\n  vec2 waves=vec2(\r\n    wave(y,400.0-(y2*200.0),-0.03),\r\n     wave(y,400.0-(y2*400.0*0.05),-0.045)\r\n    +wave(y,900.0-(y2*900.0*0.05),-0.05)\r\n    +wave(pos.x,20.0+(y2*20.0*1.5),-0.01)\r\n  );\r\n  return pos+(waves*intensity*mask);\r\n}\r\nvec2 depth(vec2 pos){\r\n  vec2 intensity=vec2(0.01,0.01);\r\n  float d=0.05-pow(texture2D(u_maps,pos).b,1.0);\r\n  return pos+(intensity*u_mouse*d);\r\n}\r\nvoid main(){\r\n  vec2 pos=v_position.xy;\r\n\r\n  vec2 turbulence=depth(waves(pos));\r\n  vec2 noTurbulence=depth(pos);\r\n  vec4 c=texture2D(u_image,turbulence);\r\n\r\n\r\n  gl_FragColor=vec4(c.rgb,1.0);\r\n\r\n}\r\n"},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(global){/*!
* VERSION: 1.18.4
* DATE: 2016-04-26
* UPDATES AND DOCS AT: http://greensock.com
*
* Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
*
* @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
* This work is subject to the terms at http://greensock.com/standard-license or for
* Club GreenSock members, the software agreement that was issued with your membership.
*
* @author: Jack Doyle, jack@greensock.com
**/var _gsScope=(typeof(module)!=="undefined"&&module.exports&&typeof(global)!=="undefined")?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(Animation,SimpleTimeline,TweenLite){var _slice=function(a){var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++]));return b;},_applyCycle=function(vars,targets,i){var alt=vars.cycle,p,val;for(p in alt){val=alt[p];vars[p]=(typeof(val)==="function")?val.call(targets[i],i):val[i%val.length];}
delete vars.cycle;},TweenMax=function(target,duration,vars){TweenLite.call(this,target,duration,vars);this._cycle=0;this._yoyo=(this.vars.yoyo===true);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._dirty=true;this.render=TweenMax.prototype.render;},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_isSelector=TweenLiteInternals.isSelector,_isArray=TweenLiteInternals.isArray,p=TweenMax.prototype=TweenLite.to({},0.1,{}),_blankArray=[];TweenMax.version="1.18.4";p.constructor=TweenMax;p.kill()._gc=false;TweenMax.killTweensOf=TweenMax.killDelayedCallsTo=TweenLite.killTweensOf;TweenMax.getTweensOf=TweenLite.getTweensOf;TweenMax.lagSmoothing=TweenLite.lagSmoothing;TweenMax.ticker=TweenLite.ticker;TweenMax.render=TweenLite.render;p.invalidate=function(){this._yoyo=(this.vars.yoyo===true);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(true);return TweenLite.prototype.invalidate.call(this);};p.updateTo=function(vars,resetDuration){var curRatio=this.ratio,immediate=this.vars.immediateRender||vars.immediateRender,p;if(resetDuration&&this._startTime<this._timeline._time){this._startTime=this._timeline._time;this._uncache(false);if(this._gc){this._enabled(true,false);}else{this._timeline.insert(this,this._startTime-this._delay);}}
for(p in vars){this.vars[p]=vars[p];}
if(this._initted||immediate){if(resetDuration){this._initted=false;if(immediate){this.render(0,true,true);}}else{if(this._gc){this._enabled(true,false);}
if(this._notifyPluginsOfEnabled&&this._firstPT){TweenLite._onPluginEvent("_onDisable",this);}
if(this._time/this._duration>0.998){var prevTime=this._totalTime;this.render(0,true,false);this._initted=false;this.render(prevTime,true,false);}else{this._initted=false;this._init();if(this._time>0||immediate){var inv=1/(1-curRatio),pt=this._firstPT,endValue;while(pt){endValue=pt.s+pt.c;pt.c*=inv;pt.s=endValue-pt.c;pt=pt._next;}}}}}
return this;};p.render=function(time,suppressEvents,force){if(!this._initted)if(this._duration===0&&this.vars.repeat){this.invalidate();}
var totalDur=(!this._dirty)?this._totalDuration:this.totalDuration(),prevTime=this._time,prevTotalTime=this._totalTime,prevCycle=this._cycle,duration=this._duration,prevRawPrevTime=this._rawPrevTime,isComplete,callback,pt,cycleDuration,r,type,pow,rawPrevTime;if(time>=totalDur-0.0000001){this._totalTime=totalDur;this._cycle=this._repeat;if(this._yoyo&&(this._cycle&1)!==0){this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;}else{this._time=duration;this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1;}
if(!this._reversed){isComplete=true;callback="onComplete";force=(force||this._timeline.autoRemoveChildren);}
if(duration===0)if(this._initted||!this.vars.lazy||force){if(this._startTime===this._timeline._duration){time=0;}
if(prevRawPrevTime<0||(time<=0&&time>=-0.0000001)||(prevRawPrevTime===_tinyNum&&this.data!=="isPause"))if(prevRawPrevTime!==time){force=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}
this._rawPrevTime=rawPrevTime=(!suppressEvents||time||prevRawPrevTime===time)?time:_tinyNum;}}else if(time<0.0000001){this._totalTime=this._time=this._cycle=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(prevTotalTime!==0||(duration===0&&prevRawPrevTime>0)){callback="onReverseComplete";isComplete=this._reversed;}
if(time<0){this._active=false;if(duration===0)if(this._initted||!this.vars.lazy||force){if(prevRawPrevTime>=0){force=true;}
this._rawPrevTime=rawPrevTime=(!suppressEvents||time||prevRawPrevTime===time)?time:_tinyNum;}}
if(!this._initted){force=true;}}else{this._totalTime=this._time=time;if(this._repeat!==0){cycleDuration=duration+this._repeatDelay;this._cycle=(this._totalTime/cycleDuration)>>0;if(this._cycle!==0)if(this._cycle===this._totalTime/cycleDuration&&prevTotalTime<=time){this._cycle--;}
this._time=this._totalTime-(this._cycle*cycleDuration);if(this._yoyo)if((this._cycle&1)!==0){this._time=duration-this._time;}
if(this._time>duration){this._time=duration;}else if(this._time<0){this._time=0;}}
if(this._easeType){r=this._time/duration;type=this._easeType;pow=this._easePower;if(type===1||(type===3&&r>=0.5)){r=1-r;}
if(type===3){r*=2;}
if(pow===1){r*=r;}else if(pow===2){r*=r*r;}else if(pow===3){r*=r*r*r;}else if(pow===4){r*=r*r*r*r;}
if(type===1){this.ratio=1-r;}else if(type===2){this.ratio=r;}else if(this._time/duration<0.5){this.ratio=r/2;}else{this.ratio=1-(r/2);}}else{this.ratio=this._ease.getRatio(this._time/duration);}}
if(prevTime===this._time&&!force&&prevCycle===this._cycle){if(prevTotalTime!==this._totalTime)if(this._onUpdate)if(!suppressEvents){this._callback("onUpdate");}
return;}else if(!this._initted){this._init();if(!this._initted||this._gc){return;}else if(!force&&this._firstPT&&((this.vars.lazy!==false&&this._duration)||(this.vars.lazy&&!this._duration))){this._time=prevTime;this._totalTime=prevTotalTime;this._rawPrevTime=prevRawPrevTime;this._cycle=prevCycle;TweenLiteInternals.lazyTweens.push(this);this._lazy=[time,suppressEvents];return;}
if(this._time&&!isComplete){this.ratio=this._ease.getRatio(this._time/duration);}else if(isComplete&&this._ease._calcEnd){this.ratio=this._ease.getRatio((this._time===0)?0:1);}}
if(this._lazy!==false){this._lazy=false;}
if(!this._active)if(!this._paused&&this._time!==prevTime&&time>=0){this._active=true;}
if(prevTotalTime===0){if(this._initted===2&&time>0){this._init();}
if(this._startAt){if(time>=0){this._startAt.render(time,suppressEvents,force);}else if(!callback){callback="_dummyGS";}}
if(this.vars.onStart)if(this._totalTime!==0||duration===0)if(!suppressEvents){this._callback("onStart");}}
pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](pt.c*this.ratio+pt.s);}else{pt.t[pt.p]=pt.c*this.ratio+pt.s;}
pt=pt._next;}
if(this._onUpdate){if(time<0)if(this._startAt&&this._startTime){this._startAt.render(time,suppressEvents,force);}
if(!suppressEvents)if(this._totalTime!==prevTotalTime||callback){this._callback("onUpdate");}}
if(this._cycle!==prevCycle)if(!suppressEvents)if(!this._gc)if(this.vars.onRepeat){this._callback("onRepeat");}
if(callback)if(!this._gc||force){if(time<0&&this._startAt&&!this._onUpdate&&this._startTime){this._startAt.render(time,suppressEvents,force);}
if(isComplete){if(this._timeline.autoRemoveChildren){this._enabled(false,false);}
this._active=false;}
if(!suppressEvents&&this.vars[callback]){this._callback(callback);}
if(duration===0&&this._rawPrevTime===_tinyNum&&rawPrevTime!==_tinyNum){this._rawPrevTime=0;}}};TweenMax.to=function(target,duration,vars){return new TweenMax(target,duration,vars);};TweenMax.from=function(target,duration,vars){vars.runBackwards=true;vars.immediateRender=(vars.immediateRender!=false);return new TweenMax(target,duration,vars);};TweenMax.fromTo=function(target,duration,fromVars,toVars){toVars.startAt=fromVars;toVars.immediateRender=(toVars.immediateRender!=false&&fromVars.immediateRender!=false);return new TweenMax(target,duration,toVars);};TweenMax.staggerTo=TweenMax.allTo=function(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){stagger=stagger||0;var delay=0,a=[],finalComplete=function(){if(vars.onComplete){vars.onComplete.apply(vars.onCompleteScope||this,arguments);}
onCompleteAll.apply(onCompleteAllScope||vars.callbackScope||this,onCompleteAllParams||_blankArray);},cycle=vars.cycle,fromCycle=(vars.startAt&&vars.startAt.cycle),l,copy,i,p;if(!_isArray(targets)){if(typeof(targets)==="string"){targets=TweenLite.selector(targets)||targets;}
if(_isSelector(targets)){targets=_slice(targets);}}
targets=targets||[];if(stagger<0){targets=_slice(targets);targets.reverse();stagger*=-1;}
l=targets.length-1;for(i=0;i<=l;i++){copy={};for(p in vars){copy[p]=vars[p];}
if(cycle){_applyCycle(copy,targets,i);}
if(fromCycle){fromCycle=copy.startAt={};for(p in vars.startAt){fromCycle[p]=vars.startAt[p];}
_applyCycle(copy.startAt,targets,i);}
copy.delay=delay+(copy.delay||0);if(i===l&&onCompleteAll){copy.onComplete=finalComplete;}
a[i]=new TweenMax(targets[i],duration,copy);delay+=stagger;}
return a;};TweenMax.staggerFrom=TweenMax.allFrom=function(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){vars.runBackwards=true;vars.immediateRender=(vars.immediateRender!=false);return TweenMax.staggerTo(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};TweenMax.staggerFromTo=TweenMax.allFromTo=function(targets,duration,fromVars,toVars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){toVars.startAt=fromVars;toVars.immediateRender=(toVars.immediateRender!=false&&fromVars.immediateRender!=false);return TweenMax.staggerTo(targets,duration,toVars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};TweenMax.delayedCall=function(delay,callback,params,scope,useFrames){return new TweenMax(callback,0,{delay:delay,onComplete:callback,onCompleteParams:params,callbackScope:scope,onReverseComplete:callback,onReverseCompleteParams:params,immediateRender:false,useFrames:useFrames,overwrite:0});};TweenMax.set=function(target,vars){return new TweenMax(target,0,vars);};TweenMax.isTweening=function(target){return(TweenLite.getTweensOf(target,true).length>0);};var _getChildrenOf=function(timeline,includeTimelines){var a=[],cnt=0,tween=timeline._first;while(tween){if(tween instanceof TweenLite){a[cnt++]=tween;}else{if(includeTimelines){a[cnt++]=tween;}
a=a.concat(_getChildrenOf(tween,includeTimelines));cnt=a.length;}
tween=tween._next;}
return a;},getAllTweens=TweenMax.getAllTweens=function(includeTimelines){return _getChildrenOf(Animation._rootTimeline,includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline,includeTimelines));};TweenMax.killAll=function(complete,tweens,delayedCalls,timelines){if(tweens==null){tweens=true;}
if(delayedCalls==null){delayedCalls=true;}
var a=getAllTweens((timelines!=false)),l=a.length,allTrue=(tweens&&delayedCalls&&timelines),isDC,tween,i;for(i=0;i<l;i++){tween=a[i];if(allTrue||(tween instanceof SimpleTimeline)||((isDC=(tween.target===tween.vars.onComplete))&&delayedCalls)||(tweens&&!isDC)){if(complete){tween.totalTime(tween._reversed?0:tween.totalDuration());}else{tween._enabled(false,false);}}}};TweenMax.killChildTweensOf=function(parent,complete){if(parent==null){return;}
var tl=TweenLiteInternals.tweenLookup,a,curParent,p,i,l;if(typeof(parent)==="string"){parent=TweenLite.selector(parent)||parent;}
if(_isSelector(parent)){parent=_slice(parent);}
if(_isArray(parent)){i=parent.length;while(--i>-1){TweenMax.killChildTweensOf(parent[i],complete);}
return;}
a=[];for(p in tl){curParent=tl[p].target.parentNode;while(curParent){if(curParent===parent){a=a.concat(tl[p].tweens);}
curParent=curParent.parentNode;}}
l=a.length;for(i=0;i<l;i++){if(complete){a[i].totalTime(a[i].totalDuration());}
a[i]._enabled(false,false);}};var _changePause=function(pause,tweens,delayedCalls,timelines){tweens=(tweens!==false);delayedCalls=(delayedCalls!==false);timelines=(timelines!==false);var a=getAllTweens(timelines),allTrue=(tweens&&delayedCalls&&timelines),i=a.length,isDC,tween;while(--i>-1){tween=a[i];if(allTrue||(tween instanceof SimpleTimeline)||((isDC=(tween.target===tween.vars.onComplete))&&delayedCalls)||(tweens&&!isDC)){tween.paused(pause);}}};TweenMax.pauseAll=function(tweens,delayedCalls,timelines){_changePause(true,tweens,delayedCalls,timelines);};TweenMax.resumeAll=function(tweens,delayedCalls,timelines){_changePause(false,tweens,delayedCalls,timelines);};TweenMax.globalTimeScale=function(value){var tl=Animation._rootTimeline,t=TweenLite.ticker.time;if(!arguments.length){return tl._timeScale;}
value=value||_tinyNum;tl._startTime=t-((t-tl._startTime)*tl._timeScale/value);tl=Animation._rootFramesTimeline;t=TweenLite.ticker.frame;tl._startTime=t-((t-tl._startTime)*tl._timeScale/value);tl._timeScale=Animation._rootTimeline._timeScale=value;return value;};p.progress=function(value,suppressEvents){return(!arguments.length)?this._time/this.duration():this.totalTime(this.duration()*((this._yoyo&&(this._cycle&1)!==0)?1-value:value)+(this._cycle*(this._duration+this._repeatDelay)),suppressEvents);};p.totalProgress=function(value,suppressEvents){return(!arguments.length)?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*value,suppressEvents);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}
if(this._dirty){this.totalDuration();}
if(value>this._duration){value=this._duration;}
if(this._yoyo&&(this._cycle&1)!==0){value=(this._duration-value)+(this._cycle*(this._duration+this._repeatDelay));}else if(this._repeat!==0){value+=this._cycle*(this._duration+this._repeatDelay);}
return this.totalTime(value,suppressEvents);};p.duration=function(value){if(!arguments.length){return this._duration;}
return Animation.prototype.duration.call(this,value);};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){this._totalDuration=(this._repeat===-1)?999999999999:this._duration*(this._repeat+1)+(this._repeatDelay*this._repeat);this._dirty=false;}
return this._totalDuration;}
return(this._repeat===-1)?this:this.duration((value-(this._repeat*this._repeatDelay))/(this._repeat+1));};p.repeat=function(value){if(!arguments.length){return this._repeat;}
this._repeat=value;return this._uncache(true);};p.repeatDelay=function(value){if(!arguments.length){return this._repeatDelay;}
this._repeatDelay=value;return this._uncache(true);};p.yoyo=function(value){if(!arguments.length){return this._yoyo;}
this._yoyo=value;return this;};return TweenMax;},true);_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(Animation,SimpleTimeline,TweenLite){var TimelineLite=function(vars){SimpleTimeline.call(this,vars);this._labels={};this.autoRemoveChildren=(this.vars.autoRemoveChildren===true);this.smoothChildTiming=(this.vars.smoothChildTiming===true);this._sortChildren=true;this._onUpdate=this.vars.onUpdate;var v=this.vars,val,p;for(p in v){val=v[p];if(_isArray(val))if(val.join("").indexOf("{self}")!==-1){v[p]=this._swapSelfInParams(val);}}
if(_isArray(v.tweens)){this.add(v.tweens,0,v.align,v.stagger);}},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_internals=TimelineLite._internals={},_isSelector=TweenLiteInternals.isSelector,_isArray=TweenLiteInternals.isArray,_lazyTweens=TweenLiteInternals.lazyTweens,_lazyRender=TweenLiteInternals.lazyRender,_globals=_gsScope._gsDefine.globals,_copy=function(vars){var copy={},p;for(p in vars){copy[p]=vars[p];}
return copy;},_applyCycle=function(vars,targets,i){var alt=vars.cycle,p,val;for(p in alt){val=alt[p];vars[p]=(typeof(val)==="function")?val.call(targets[i],i):val[i%val.length];}
delete vars.cycle;},_pauseCallback=_internals.pauseCallback=function(){},_slice=function(a){var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++]));return b;},p=TimelineLite.prototype=new SimpleTimeline();TimelineLite.version="1.18.4";p.constructor=TimelineLite;p.kill()._gc=p._forcingPlayhead=p._hasPause=false;p.to=function(target,duration,vars,position){var Engine=(vars.repeat&&_globals.TweenMax)||TweenLite;return duration?this.add(new Engine(target,duration,vars),position):this.set(target,vars,position);};p.from=function(target,duration,vars,position){return this.add(((vars.repeat&&_globals.TweenMax)||TweenLite).from(target,duration,vars),position);};p.fromTo=function(target,duration,fromVars,toVars,position){var Engine=(toVars.repeat&&_globals.TweenMax)||TweenLite;return duration?this.add(Engine.fromTo(target,duration,fromVars,toVars),position):this.set(target,toVars,position);};p.staggerTo=function(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){var tl=new TimelineLite({onComplete:onCompleteAll,onCompleteParams:onCompleteAllParams,callbackScope:onCompleteAllScope,smoothChildTiming:this.smoothChildTiming}),cycle=vars.cycle,copy,i;if(typeof(targets)==="string"){targets=TweenLite.selector(targets)||targets;}
targets=targets||[];if(_isSelector(targets)){targets=_slice(targets);}
stagger=stagger||0;if(stagger<0){targets=_slice(targets);targets.reverse();stagger*=-1;}
for(i=0;i<targets.length;i++){copy=_copy(vars);if(copy.startAt){copy.startAt=_copy(copy.startAt);if(copy.startAt.cycle){_applyCycle(copy.startAt,targets,i);}}
if(cycle){_applyCycle(copy,targets,i);}
tl.to(targets[i],duration,copy,i*stagger);}
return this.add(tl,position);};p.staggerFrom=function(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){vars.immediateRender=(vars.immediateRender!=false);vars.runBackwards=true;return this.staggerTo(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};p.staggerFromTo=function(targets,duration,fromVars,toVars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){toVars.startAt=fromVars;toVars.immediateRender=(toVars.immediateRender!=false&&fromVars.immediateRender!=false);return this.staggerTo(targets,duration,toVars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};p.call=function(callback,params,scope,position){return this.add(TweenLite.delayedCall(0,callback,params,scope),position);};p.set=function(target,vars,position){position=this._parseTimeOrLabel(position,0,true);if(vars.immediateRender==null){vars.immediateRender=(position===this._time&&!this._paused);}
return this.add(new TweenLite(target,0,vars),position);};TimelineLite.exportRoot=function(vars,ignoreDelayedCalls){vars=vars||{};if(vars.smoothChildTiming==null){vars.smoothChildTiming=true;}
var tl=new TimelineLite(vars),root=tl._timeline,tween,next;if(ignoreDelayedCalls==null){ignoreDelayedCalls=true;}
root._remove(tl,true);tl._startTime=0;tl._rawPrevTime=tl._time=tl._totalTime=root._time;tween=root._first;while(tween){next=tween._next;if(!ignoreDelayedCalls||!(tween instanceof TweenLite&&tween.target===tween.vars.onComplete)){tl.add(tween,tween._startTime-tween._delay);}
tween=next;}
root.add(tl,0);return tl;};p.add=function(value,position,align,stagger){var curTime,l,i,child,tl,beforeRawTime;if(typeof(position)!=="number"){position=this._parseTimeOrLabel(position,0,true,value);}
if(!(value instanceof Animation)){if((value instanceof Array)||(value&&value.push&&_isArray(value))){align=align||"normal";stagger=stagger||0;curTime=position;l=value.length;for(i=0;i<l;i++){if(_isArray(child=value[i])){child=new TimelineLite({tweens:child});}
this.add(child,curTime);if(typeof(child)!=="string"&&typeof(child)!=="function"){if(align==="sequence"){curTime=child._startTime+(child.totalDuration()/child._timeScale);}else if(align==="start"){child._startTime-=child.delay();}}
curTime+=stagger;}
return this._uncache(true);}else if(typeof(value)==="string"){return this.addLabel(value,position);}else if(typeof(value)==="function"){value=TweenLite.delayedCall(0,value);}else{throw("Cannot add "+value+" into the timeline; it is not a tween, timeline, function, or string.");}}
SimpleTimeline.prototype.add.call(this,value,position);if(this._gc||this._time===this._duration)if(!this._paused)if(this._duration<this.duration()){tl=this;beforeRawTime=(tl.rawTime()>value._startTime);while(tl._timeline){if(beforeRawTime&&tl._timeline.smoothChildTiming){tl.totalTime(tl._totalTime,true);}else if(tl._gc){tl._enabled(true,false);}
tl=tl._timeline;}}
return this;};p.remove=function(value){if(value instanceof Animation){this._remove(value,false);var tl=value._timeline=value.vars.useFrames?Animation._rootFramesTimeline:Animation._rootTimeline;value._startTime=(value._paused?value._pauseTime:tl._time)-((!value._reversed?value._totalTime:value.totalDuration()-value._totalTime)/value._timeScale);return this;}else if(value instanceof Array||(value&&value.push&&_isArray(value))){var i=value.length;while(--i>-1){this.remove(value[i]);}
return this;}else if(typeof(value)==="string"){return this.removeLabel(value);}
return this.kill(null,value);};p._remove=function(tween,skipDisable){SimpleTimeline.prototype._remove.call(this,tween,skipDisable);var last=this._last;if(!last){this._time=this._totalTime=this._duration=this._totalDuration=0;}else if(this._time>last._startTime+last._totalDuration/last._timeScale){this._time=this.duration();this._totalTime=this._totalDuration;}
return this;};p.append=function(value,offsetOrLabel){return this.add(value,this._parseTimeOrLabel(null,offsetOrLabel,true,value));};p.insert=p.insertMultiple=function(value,position,align,stagger){return this.add(value,position||0,align,stagger);};p.appendMultiple=function(tweens,offsetOrLabel,align,stagger){return this.add(tweens,this._parseTimeOrLabel(null,offsetOrLabel,true,tweens),align,stagger);};p.addLabel=function(label,position){this._labels[label]=this._parseTimeOrLabel(position);return this;};p.addPause=function(position,callback,params,scope){var t=TweenLite.delayedCall(0,_pauseCallback,params,scope||this);t.vars.onComplete=t.vars.onReverseComplete=callback;t.data="isPause";this._hasPause=true;return this.add(t,position);};p.removeLabel=function(label){delete this._labels[label];return this;};p.getLabelTime=function(label){return(this._labels[label]!=null)?this._labels[label]:-1;};p._parseTimeOrLabel=function(timeOrLabel,offsetOrLabel,appendIfAbsent,ignore){var i;if(ignore instanceof Animation&&ignore.timeline===this){this.remove(ignore);}else if(ignore&&((ignore instanceof Array)||(ignore.push&&_isArray(ignore)))){i=ignore.length;while(--i>-1){if(ignore[i]instanceof Animation&&ignore[i].timeline===this){this.remove(ignore[i]);}}}
if(typeof(offsetOrLabel)==="string"){return this._parseTimeOrLabel(offsetOrLabel,(appendIfAbsent&&typeof(timeOrLabel)==="number"&&this._labels[offsetOrLabel]==null)?timeOrLabel-this.duration():0,appendIfAbsent);}
offsetOrLabel=offsetOrLabel||0;if(typeof(timeOrLabel)==="string"&&(isNaN(timeOrLabel)||this._labels[timeOrLabel]!=null)){i=timeOrLabel.indexOf("=");if(i===-1){if(this._labels[timeOrLabel]==null){return appendIfAbsent?(this._labels[timeOrLabel]=this.duration()+offsetOrLabel):offsetOrLabel;}
return this._labels[timeOrLabel]+offsetOrLabel;}
offsetOrLabel=parseInt(timeOrLabel.charAt(i-1)+"1",10)*Number(timeOrLabel.substr(i+1));timeOrLabel=(i>1)?this._parseTimeOrLabel(timeOrLabel.substr(0,i-1),0,appendIfAbsent):this.duration();}else if(timeOrLabel==null){timeOrLabel=this.duration();}
return Number(timeOrLabel)+offsetOrLabel;};p.seek=function(position,suppressEvents){return this.totalTime((typeof(position)==="number")?position:this._parseTimeOrLabel(position),(suppressEvents!==false));};p.stop=function(){return this.paused(true);};p.gotoAndPlay=function(position,suppressEvents){return this.play(position,suppressEvents);};p.gotoAndStop=function(position,suppressEvents){return this.pause(position,suppressEvents);};p.render=function(time,suppressEvents,force){if(this._gc){this._enabled(true,false);}
var totalDur=(!this._dirty)?this._totalDuration:this.totalDuration(),prevTime=this._time,prevStart=this._startTime,prevTimeScale=this._timeScale,prevPaused=this._paused,tween,isComplete,next,callback,internalForce,pauseTween,curTime;if(time>=totalDur-0.0000001){this._totalTime=this._time=totalDur;if(!this._reversed)if(!this._hasPausedChild()){isComplete=true;callback="onComplete";internalForce=!!this._timeline.autoRemoveChildren;if(this._duration===0)if((time<=0&&time>=-0.0000001)||this._rawPrevTime<0||this._rawPrevTime===_tinyNum)if(this._rawPrevTime!==time&&this._first){internalForce=true;if(this._rawPrevTime>_tinyNum){callback="onReverseComplete";}}}
this._rawPrevTime=(this._duration||!suppressEvents||time||this._rawPrevTime===time)?time:_tinyNum;time=totalDur+0.0001;}else if(time<0.0000001){this._totalTime=this._time=0;if(prevTime!==0||(this._duration===0&&this._rawPrevTime!==_tinyNum&&(this._rawPrevTime>0||(time<0&&this._rawPrevTime>=0)))){callback="onReverseComplete";isComplete=this._reversed;}
if(time<0){this._active=false;if(this._timeline.autoRemoveChildren&&this._reversed){internalForce=isComplete=true;callback="onReverseComplete";}else if(this._rawPrevTime>=0&&this._first){internalForce=true;}
this._rawPrevTime=time;}else{this._rawPrevTime=(this._duration||!suppressEvents||time||this._rawPrevTime===time)?time:_tinyNum;if(time===0&&isComplete){tween=this._first;while(tween&&tween._startTime===0){if(!tween._duration){isComplete=false;}
tween=tween._next;}}
time=0;if(!this._initted){internalForce=true;}}}else{if(this._hasPause&&!this._forcingPlayhead&&!suppressEvents){if(time>=prevTime){tween=this._first;while(tween&&tween._startTime<=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&!tween.ratio&&!(tween._startTime===0&&this._rawPrevTime===0)){pauseTween=tween;}
tween=tween._next;}}else{tween=this._last;while(tween&&tween._startTime>=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&tween._rawPrevTime>0){pauseTween=tween;}
tween=tween._prev;}}
if(pauseTween){this._time=time=pauseTween._startTime;this._totalTime=time+(this._cycle*(this._totalDuration+this._repeatDelay));}}
this._totalTime=this._time=this._rawPrevTime=time;}
if((this._time===prevTime||!this._first)&&!force&&!internalForce&&!pauseTween){return;}else if(!this._initted){this._initted=true;}
if(!this._active)if(!this._paused&&this._time!==prevTime&&time>0){this._active=true;}
if(prevTime===0)if(this.vars.onStart)if(this._time!==0)if(!suppressEvents){this._callback("onStart");}
curTime=this._time;if(curTime>=prevTime){tween=this._first;while(tween){next=tween._next;if(curTime!==this._time||(this._paused&&!prevPaused)){break;}else if(tween._active||(tween._startTime<=curTime&&!tween._paused&&!tween._gc)){if(pauseTween===tween){this.pause();}
if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render(((!tween._dirty)?tween._totalDuration:tween.totalDuration())-((time-tween._startTime)*tween._timeScale),suppressEvents,force);}}
tween=next;}}else{tween=this._last;while(tween){next=tween._prev;if(curTime!==this._time||(this._paused&&!prevPaused)){break;}else if(tween._active||(tween._startTime<=prevTime&&!tween._paused&&!tween._gc)){if(pauseTween===tween){pauseTween=tween._prev;while(pauseTween&&pauseTween.endTime()>this._time){pauseTween.render((pauseTween._reversed?pauseTween.totalDuration()-((time-pauseTween._startTime)*pauseTween._timeScale):(time-pauseTween._startTime)*pauseTween._timeScale),suppressEvents,force);pauseTween=pauseTween._prev;}
pauseTween=null;this.pause();}
if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render(((!tween._dirty)?tween._totalDuration:tween.totalDuration())-((time-tween._startTime)*tween._timeScale),suppressEvents,force);}}
tween=next;}}
if(this._onUpdate)if(!suppressEvents){if(_lazyTweens.length){_lazyRender();}
this._callback("onUpdate");}
if(callback)if(!this._gc)if(prevStart===this._startTime||prevTimeScale!==this._timeScale)if(this._time===0||totalDur>=this.totalDuration()){if(isComplete){if(_lazyTweens.length){_lazyRender();}
if(this._timeline.autoRemoveChildren){this._enabled(false,false);}
this._active=false;}
if(!suppressEvents&&this.vars[callback]){this._callback(callback);}}};p._hasPausedChild=function(){var tween=this._first;while(tween){if(tween._paused||((tween instanceof TimelineLite)&&tween._hasPausedChild())){return true;}
tween=tween._next;}
return false;};p.getChildren=function(nested,tweens,timelines,ignoreBeforeTime){ignoreBeforeTime=ignoreBeforeTime||-9999999999;var a=[],tween=this._first,cnt=0;while(tween){if(tween._startTime<ignoreBeforeTime){}else if(tween instanceof TweenLite){if(tweens!==false){a[cnt++]=tween;}}else{if(timelines!==false){a[cnt++]=tween;}
if(nested!==false){a=a.concat(tween.getChildren(true,tweens,timelines));cnt=a.length;}}
tween=tween._next;}
return a;};p.getTweensOf=function(target,nested){var disabled=this._gc,a=[],cnt=0,tweens,i;if(disabled){this._enabled(true,true);}
tweens=TweenLite.getTweensOf(target);i=tweens.length;while(--i>-1){if(tweens[i].timeline===this||(nested&&this._contains(tweens[i]))){a[cnt++]=tweens[i];}}
if(disabled){this._enabled(false,true);}
return a;};p.recent=function(){return this._recent;};p._contains=function(tween){var tl=tween.timeline;while(tl){if(tl===this){return true;}
tl=tl.timeline;}
return false;};p.shiftChildren=function(amount,adjustLabels,ignoreBeforeTime){ignoreBeforeTime=ignoreBeforeTime||0;var tween=this._first,labels=this._labels,p;while(tween){if(tween._startTime>=ignoreBeforeTime){tween._startTime+=amount;}
tween=tween._next;}
if(adjustLabels){for(p in labels){if(labels[p]>=ignoreBeforeTime){labels[p]+=amount;}}}
return this._uncache(true);};p._kill=function(vars,target){if(!vars&&!target){return this._enabled(false,false);}
var tweens=(!target)?this.getChildren(true,true,false):this.getTweensOf(target),i=tweens.length,changed=false;while(--i>-1){if(tweens[i]._kill(vars,target)){changed=true;}}
return changed;};p.clear=function(labels){var tweens=this.getChildren(false,true,true),i=tweens.length;this._time=this._totalTime=0;while(--i>-1){tweens[i]._enabled(false,false);}
if(labels!==false){this._labels={};}
return this._uncache(true);};p.invalidate=function(){var tween=this._first;while(tween){tween.invalidate();tween=tween._next;}
return Animation.prototype.invalidate.call(this);;};p._enabled=function(enabled,ignoreTimeline){if(enabled===this._gc){var tween=this._first;while(tween){tween._enabled(enabled,true);tween=tween._next;}}
return SimpleTimeline.prototype._enabled.call(this,enabled,ignoreTimeline);};p.totalTime=function(time,suppressEvents,uncapped){this._forcingPlayhead=true;var val=Animation.prototype.totalTime.apply(this,arguments);this._forcingPlayhead=false;return val;};p.duration=function(value){if(!arguments.length){if(this._dirty){this.totalDuration();}
return this._duration;}
if(this.duration()!==0&&value!==0){this.timeScale(this._duration/value);}
return this;};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){var max=0,tween=this._last,prevStart=999999999999,prev,end;while(tween){prev=tween._prev;if(tween._dirty){tween.totalDuration();}
if(tween._startTime>prevStart&&this._sortChildren&&!tween._paused){this.add(tween,tween._startTime-tween._delay);}else{prevStart=tween._startTime;}
if(tween._startTime<0&&!tween._paused){max-=tween._startTime;if(this._timeline.smoothChildTiming){this._startTime+=tween._startTime/this._timeScale;}
this.shiftChildren(-tween._startTime,false,-9999999999);prevStart=0;}
end=tween._startTime+(tween._totalDuration/tween._timeScale);if(end>max){max=end;}
tween=prev;}
this._duration=this._totalDuration=max;this._dirty=false;}
return this._totalDuration;}
return(value&&this.totalDuration())?this.timeScale(this._totalDuration/value):this;};p.paused=function(value){if(!value){var tween=this._first,time=this._time;while(tween){if(tween._startTime===time&&tween.data==="isPause"){tween._rawPrevTime=0;}
tween=tween._next;}}
return Animation.prototype.paused.apply(this,arguments);};p.usesFrames=function(){var tl=this._timeline;while(tl._timeline){tl=tl._timeline;}
return(tl===Animation._rootFramesTimeline);};p.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale;};return TimelineLite;},true);_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(TimelineLite,TweenLite,Ease){var TimelineMax=function(vars){TimelineLite.call(this,vars);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._cycle=0;this._yoyo=(this.vars.yoyo===true);this._dirty=true;},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_lazyTweens=TweenLiteInternals.lazyTweens,_lazyRender=TweenLiteInternals.lazyRender,_easeNone=new Ease(null,null,1,0),p=TimelineMax.prototype=new TimelineLite();p.constructor=TimelineMax;p.kill()._gc=false;TimelineMax.version="1.18.4";p.invalidate=function(){this._yoyo=(this.vars.yoyo===true);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(true);return TimelineLite.prototype.invalidate.call(this);};p.addCallback=function(callback,position,params,scope){return this.add(TweenLite.delayedCall(0,callback,params,scope),position);};p.removeCallback=function(callback,position){if(callback){if(position==null){this._kill(null,callback);}else{var a=this.getTweensOf(callback,false),i=a.length,time=this._parseTimeOrLabel(position);while(--i>-1){if(a[i]._startTime===time){a[i]._enabled(false,false);}}}}
return this;};p.removePause=function(position){return this.removeCallback(TimelineLite._internals.pauseCallback,position);};p.tweenTo=function(position,vars){vars=vars||{};var copy={ease:_easeNone,useFrames:this.usesFrames(),immediateRender:false},duration,p,t;for(p in vars){copy[p]=vars[p];}
copy.time=this._parseTimeOrLabel(position);duration=(Math.abs(Number(copy.time)-this._time)/this._timeScale)||0.001;t=new TweenLite(this,duration,copy);copy.onStart=function(){t.target.paused(true);if(t.vars.time!==t.target.time()&&duration===t.duration()){t.duration(Math.abs(t.vars.time-t.target.time())/t.target._timeScale);}
if(vars.onStart){t._callback("onStart");}};return t;};p.tweenFromTo=function(fromPosition,toPosition,vars){vars=vars||{};fromPosition=this._parseTimeOrLabel(fromPosition);vars.startAt={onComplete:this.seek,onCompleteParams:[fromPosition],callbackScope:this};vars.immediateRender=(vars.immediateRender!==false);var t=this.tweenTo(toPosition,vars);return t.duration((Math.abs(t.vars.time-fromPosition)/this._timeScale)||0.001);};p.render=function(time,suppressEvents,force){if(this._gc){this._enabled(true,false);}
var totalDur=(!this._dirty)?this._totalDuration:this.totalDuration(),dur=this._duration,prevTime=this._time,prevTotalTime=this._totalTime,prevStart=this._startTime,prevTimeScale=this._timeScale,prevRawPrevTime=this._rawPrevTime,prevPaused=this._paused,prevCycle=this._cycle,tween,isComplete,next,callback,internalForce,cycleDuration,pauseTween,curTime;if(time>=totalDur-0.0000001){if(!this._locked){this._totalTime=totalDur;this._cycle=this._repeat;}
if(!this._reversed)if(!this._hasPausedChild()){isComplete=true;callback="onComplete";internalForce=!!this._timeline.autoRemoveChildren;if(this._duration===0)if((time<=0&&time>=-0.0000001)||prevRawPrevTime<0||prevRawPrevTime===_tinyNum)if(prevRawPrevTime!==time&&this._first){internalForce=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}}
this._rawPrevTime=(this._duration||!suppressEvents||time||this._rawPrevTime===time)?time:_tinyNum;if(this._yoyo&&(this._cycle&1)!==0){this._time=time=0;}else{this._time=dur;time=dur+0.0001;}}else if(time<0.0000001){if(!this._locked){this._totalTime=this._cycle=0;}
this._time=0;if(prevTime!==0||(dur===0&&prevRawPrevTime!==_tinyNum&&(prevRawPrevTime>0||(time<0&&prevRawPrevTime>=0))&&!this._locked)){callback="onReverseComplete";isComplete=this._reversed;}
if(time<0){this._active=false;if(this._timeline.autoRemoveChildren&&this._reversed){internalForce=isComplete=true;callback="onReverseComplete";}else if(prevRawPrevTime>=0&&this._first){internalForce=true;}
this._rawPrevTime=time;}else{this._rawPrevTime=(dur||!suppressEvents||time||this._rawPrevTime===time)?time:_tinyNum;if(time===0&&isComplete){tween=this._first;while(tween&&tween._startTime===0){if(!tween._duration){isComplete=false;}
tween=tween._next;}}
time=0;if(!this._initted){internalForce=true;}}}else{if(dur===0&&prevRawPrevTime<0){internalForce=true;}
this._time=this._rawPrevTime=time;if(!this._locked){this._totalTime=time;if(this._repeat!==0){cycleDuration=dur+this._repeatDelay;this._cycle=(this._totalTime/cycleDuration)>>0;if(this._cycle!==0)if(this._cycle===this._totalTime/cycleDuration&&prevTotalTime<=time){this._cycle--;}
this._time=this._totalTime-(this._cycle*cycleDuration);if(this._yoyo)if((this._cycle&1)!==0){this._time=dur-this._time;}
if(this._time>dur){this._time=dur;time=dur+0.0001;}else if(this._time<0){this._time=time=0;}else{time=this._time;}}}
if(this._hasPause&&!this._forcingPlayhead&&!suppressEvents){time=this._time;if(time>=prevTime){tween=this._first;while(tween&&tween._startTime<=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&!tween.ratio&&!(tween._startTime===0&&this._rawPrevTime===0)){pauseTween=tween;}
tween=tween._next;}}else{tween=this._last;while(tween&&tween._startTime>=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&tween._rawPrevTime>0){pauseTween=tween;}
tween=tween._prev;}}
if(pauseTween){this._time=time=pauseTween._startTime;this._totalTime=time+(this._cycle*(this._totalDuration+this._repeatDelay));}}}
if(this._cycle!==prevCycle)if(!this._locked){var backwards=(this._yoyo&&(prevCycle&1)!==0),wrap=(backwards===(this._yoyo&&(this._cycle&1)!==0)),recTotalTime=this._totalTime,recCycle=this._cycle,recRawPrevTime=this._rawPrevTime,recTime=this._time;this._totalTime=prevCycle*dur;if(this._cycle<prevCycle){backwards=!backwards;}else{this._totalTime+=dur;}
this._time=prevTime;this._rawPrevTime=(dur===0)?prevRawPrevTime-0.0001:prevRawPrevTime;this._cycle=prevCycle;this._locked=true;prevTime=(backwards)?0:dur;this.render(prevTime,suppressEvents,(dur===0));if(!suppressEvents)if(!this._gc){if(this.vars.onRepeat){this._callback("onRepeat");}}
if(prevTime!==this._time){return;}
if(wrap){prevTime=(backwards)?dur+0.0001:-0.0001;this.render(prevTime,true,false);}
this._locked=false;if(this._paused&&!prevPaused){return;}
this._time=recTime;this._totalTime=recTotalTime;this._cycle=recCycle;this._rawPrevTime=recRawPrevTime;}
if((this._time===prevTime||!this._first)&&!force&&!internalForce&&!pauseTween){if(prevTotalTime!==this._totalTime)if(this._onUpdate)if(!suppressEvents){this._callback("onUpdate");}
return;}else if(!this._initted){this._initted=true;}
if(!this._active)if(!this._paused&&this._totalTime!==prevTotalTime&&time>0){this._active=true;}
if(prevTotalTime===0)if(this.vars.onStart)if(this._totalTime!==0)if(!suppressEvents){this._callback("onStart");}
curTime=this._time;if(curTime>=prevTime){tween=this._first;while(tween){next=tween._next;if(curTime!==this._time||(this._paused&&!prevPaused)){break;}else if(tween._active||(tween._startTime<=this._time&&!tween._paused&&!tween._gc)){if(pauseTween===tween){this.pause();}
if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render(((!tween._dirty)?tween._totalDuration:tween.totalDuration())-((time-tween._startTime)*tween._timeScale),suppressEvents,force);}}
tween=next;}}else{tween=this._last;while(tween){next=tween._prev;if(curTime!==this._time||(this._paused&&!prevPaused)){break;}else if(tween._active||(tween._startTime<=prevTime&&!tween._paused&&!tween._gc)){if(pauseTween===tween){pauseTween=tween._prev;while(pauseTween&&pauseTween.endTime()>this._time){pauseTween.render((pauseTween._reversed?pauseTween.totalDuration()-((time-pauseTween._startTime)*pauseTween._timeScale):(time-pauseTween._startTime)*pauseTween._timeScale),suppressEvents,force);pauseTween=pauseTween._prev;}
pauseTween=null;this.pause();}
if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render(((!tween._dirty)?tween._totalDuration:tween.totalDuration())-((time-tween._startTime)*tween._timeScale),suppressEvents,force);}}
tween=next;}}
if(this._onUpdate)if(!suppressEvents){if(_lazyTweens.length){_lazyRender();}
this._callback("onUpdate");}
if(callback)if(!this._locked)if(!this._gc)if(prevStart===this._startTime||prevTimeScale!==this._timeScale)if(this._time===0||totalDur>=this.totalDuration()){if(isComplete){if(_lazyTweens.length){_lazyRender();}
if(this._timeline.autoRemoveChildren){this._enabled(false,false);}
this._active=false;}
if(!suppressEvents&&this.vars[callback]){this._callback(callback);}}};p.getActive=function(nested,tweens,timelines){if(nested==null){nested=true;}
if(tweens==null){tweens=true;}
if(timelines==null){timelines=false;}
var a=[],all=this.getChildren(nested,tweens,timelines),cnt=0,l=all.length,i,tween;for(i=0;i<l;i++){tween=all[i];if(tween.isActive()){a[cnt++]=tween;}}
return a;};p.getLabelAfter=function(time){if(!time)if(time!==0){time=this._time;}
var labels=this.getLabelsArray(),l=labels.length,i;for(i=0;i<l;i++){if(labels[i].time>time){return labels[i].name;}}
return null;};p.getLabelBefore=function(time){if(time==null){time=this._time;}
var labels=this.getLabelsArray(),i=labels.length;while(--i>-1){if(labels[i].time<time){return labels[i].name;}}
return null;};p.getLabelsArray=function(){var a=[],cnt=0,p;for(p in this._labels){a[cnt++]={time:this._labels[p],name:p};}
a.sort(function(a,b){return a.time-b.time;});return a;};p.progress=function(value,suppressEvents){return(!arguments.length)?this._time/this.duration():this.totalTime(this.duration()*((this._yoyo&&(this._cycle&1)!==0)?1-value:value)+(this._cycle*(this._duration+this._repeatDelay)),suppressEvents);};p.totalProgress=function(value,suppressEvents){return(!arguments.length)?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*value,suppressEvents);};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){TimelineLite.prototype.totalDuration.call(this);this._totalDuration=(this._repeat===-1)?999999999999:this._duration*(this._repeat+1)+(this._repeatDelay*this._repeat);}
return this._totalDuration;}
return(this._repeat===-1||!value)?this:this.timeScale(this.totalDuration()/value);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}
if(this._dirty){this.totalDuration();}
if(value>this._duration){value=this._duration;}
if(this._yoyo&&(this._cycle&1)!==0){value=(this._duration-value)+(this._cycle*(this._duration+this._repeatDelay));}else if(this._repeat!==0){value+=this._cycle*(this._duration+this._repeatDelay);}
return this.totalTime(value,suppressEvents);};p.repeat=function(value){if(!arguments.length){return this._repeat;}
this._repeat=value;return this._uncache(true);};p.repeatDelay=function(value){if(!arguments.length){return this._repeatDelay;}
this._repeatDelay=value;return this._uncache(true);};p.yoyo=function(value){if(!arguments.length){return this._yoyo;}
this._yoyo=value;return this;};p.currentLabel=function(value){if(!arguments.length){return this.getLabelBefore(this._time+0.00000001);}
return this.seek(value,true);};return TimelineMax;},true);(function(){var _RAD2DEG=180/Math.PI,_r1=[],_r2=[],_r3=[],_corProps={},_globals=_gsScope._gsDefine.globals,Segment=function(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d;this.da=d-a;this.ca=c-a;this.ba=b-a;},_correlate=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",cubicToQuadratic=function(a,b,c,d){var q1={a:a},q2={},q3={},q4={c:d},mab=(a+b)/2,mbc=(b+c)/2,mcd=(c+d)/2,mabc=(mab+mbc)/2,mbcd=(mbc+mcd)/2,m8=(mbcd-mabc)/8;q1.b=mab+(a-mab)/4;q2.b=mabc+m8;q1.c=q2.a=(q1.b+q2.b)/2;q2.c=q3.a=(mabc+mbcd)/2;q3.b=mbcd-m8;q4.b=mcd+(d-mcd)/4;q3.c=q4.a=(q3.b+q4.b)/2;return[q1,q2,q3,q4];},_calculateControlPoints=function(a,curviness,quad,basic,correlate){var l=a.length-1,ii=0,cp1=a[0].a,i,p1,p2,p3,seg,m1,m2,mm,cp2,qb,r1,r2,tl;for(i=0;i<l;i++){seg=a[ii];p1=seg.a;p2=seg.d;p3=a[ii+1].d;if(correlate){r1=_r1[i];r2=_r2[i];tl=((r2+r1)*curviness*0.25)/(basic?0.5:_r3[i]||0.5);m1=p2-(p2-p1)*(basic?curviness*0.5:(r1!==0?tl/r1:0));m2=p2+(p3-p2)*(basic?curviness*0.5:(r2!==0?tl/r2:0));mm=p2-(m1+(((m2-m1)*((r1*3/(r1+r2))+0.5)/4)||0));}else{m1=p2-(p2-p1)*curviness*0.5;m2=p2+(p3-p2)*curviness*0.5;mm=p2-(m1+m2)/2;}
m1+=mm;m2+=mm;seg.c=cp2=m1;if(i!==0){seg.b=cp1;}else{seg.b=cp1=seg.a+(seg.c-seg.a)*0.6;}
seg.da=p2-p1;seg.ca=cp2-p1;seg.ba=cp1-p1;if(quad){qb=cubicToQuadratic(p1,cp1,cp2,p2);a.splice(ii,1,qb[0],qb[1],qb[2],qb[3]);ii+=4;}else{ii++;}
cp1=m2;}
seg=a[ii];seg.b=cp1;seg.c=cp1+(seg.d-cp1)*0.4;seg.da=seg.d-seg.a;seg.ca=seg.c-seg.a;seg.ba=cp1-seg.a;if(quad){qb=cubicToQuadratic(seg.a,cp1,seg.c,seg.d);a.splice(ii,1,qb[0],qb[1],qb[2],qb[3]);}},_parseAnchors=function(values,p,correlate,prepend){var a=[],l,i,p1,p2,p3,tmp;if(prepend){values=[prepend].concat(values);i=values.length;while(--i>-1){if(typeof((tmp=values[i][p]))==="string")if(tmp.charAt(1)==="="){values[i][p]=prepend[p]+Number(tmp.charAt(0)+tmp.substr(2));}}}
l=values.length-2;if(l<0){a[0]=new Segment(values[0][p],0,0,values[(l<-1)?0:1][p]);return a;}
for(i=0;i<l;i++){p1=values[i][p];p2=values[i+1][p];a[i]=new Segment(p1,0,0,p2);if(correlate){p3=values[i+2][p];_r1[i]=(_r1[i]||0)+(p2-p1)*(p2-p1);_r2[i]=(_r2[i]||0)+(p3-p2)*(p3-p2);}}
a[i]=new Segment(values[i][p],0,0,values[i+1][p]);return a;},bezierThrough=function(values,curviness,quadratic,basic,correlate,prepend){var obj={},props=[],first=prepend||values[0],i,p,a,j,r,l,seamless,last;correlate=(typeof(correlate)==="string")?","+correlate+",":_correlate;if(curviness==null){curviness=1;}
for(p in values[0]){props.push(p);}
if(values.length>1){last=values[values.length-1];seamless=true;i=props.length;while(--i>-1){p=props[i];if(Math.abs(first[p]-last[p])>0.05){seamless=false;break;}}
if(seamless){values=values.concat();if(prepend){values.unshift(prepend);}
values.push(values[1]);prepend=values[values.length-3];}}
_r1.length=_r2.length=_r3.length=0;i=props.length;while(--i>-1){p=props[i];_corProps[p]=(correlate.indexOf(","+p+",")!==-1);obj[p]=_parseAnchors(values,p,_corProps[p],prepend);}
i=_r1.length;while(--i>-1){_r1[i]=Math.sqrt(_r1[i]);_r2[i]=Math.sqrt(_r2[i]);}
if(!basic){i=props.length;while(--i>-1){if(_corProps[p]){a=obj[props[i]];l=a.length-1;for(j=0;j<l;j++){r=(a[j+1].da/_r2[j]+a[j].da/_r1[j])||0;_r3[j]=(_r3[j]||0)+r*r;}}}
i=_r3.length;while(--i>-1){_r3[i]=Math.sqrt(_r3[i]);}}
i=props.length;j=quadratic?4:1;while(--i>-1){p=props[i];a=obj[p];_calculateControlPoints(a,curviness,quadratic,basic,_corProps[p]);if(seamless){a.splice(0,j);a.splice(a.length-j,j);}}
return obj;},_parseBezierData=function(values,type,prepend){type=type||"soft";var obj={},inc=(type==="cubic")?3:2,soft=(type==="soft"),props=[],a,b,c,d,cur,i,j,l,p,cnt,tmp;if(soft&&prepend){values=[prepend].concat(values);}
if(values==null||values.length<inc+1){throw "invalid Bezier data";}
for(p in values[0]){props.push(p);}
i=props.length;while(--i>-1){p=props[i];obj[p]=cur=[];cnt=0;l=values.length;for(j=0;j<l;j++){a=(prepend==null)?values[j][p]:(typeof((tmp=values[j][p]))==="string"&&tmp.charAt(1)==="=")?prepend[p]+Number(tmp.charAt(0)+tmp.substr(2)):Number(tmp);if(soft)if(j>1)if(j<l-1){cur[cnt++]=(a+cur[cnt-2])/2;}
cur[cnt++]=a;}
l=cnt-inc+1;cnt=0;for(j=0;j<l;j+=inc){a=cur[j];b=cur[j+1];c=cur[j+2];d=(inc===2)?0:cur[j+3];cur[cnt++]=tmp=(inc===3)?new Segment(a,b,c,d):new Segment(a,(2*b+a)/3,(2*b+c)/3,c);}
cur.length=cnt;}
return obj;},_addCubicLengths=function(a,steps,resolution){var inc=1/resolution,j=a.length,d,d1,s,da,ca,ba,p,i,inv,bez,index;while(--j>-1){bez=a[j];s=bez.a;da=bez.d-s;ca=bez.c-s;ba=bez.b-s;d=d1=0;for(i=1;i<=resolution;i++){p=inc*i;inv=1-p;d=d1-(d1=(p*p*da+3*inv*(p*ca+inv*ba))*p);index=j*resolution+i-1;steps[index]=(steps[index]||0)+d*d;}}},_parseLengthData=function(obj,resolution){resolution=resolution>>0||6;var a=[],lengths=[],d=0,total=0,threshold=resolution-1,segments=[],curLS=[],p,i,l,index;for(p in obj){_addCubicLengths(obj[p],a,resolution);}
l=a.length;for(i=0;i<l;i++){d+=Math.sqrt(a[i]);index=i%resolution;curLS[index]=d;if(index===threshold){total+=d;index=(i/resolution)>>0;segments[index]=curLS;lengths[index]=total;d=0;curLS=[];}}
return{length:total,lengths:lengths,segments:segments};},BezierPlugin=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.5",API:2,global:true,init:function(target,vars,tween){this._target=target;if(vars instanceof Array){vars={values:vars};}
this._func={};this._round={};this._props=[];this._timeRes=(vars.timeResolution==null)?6:parseInt(vars.timeResolution,10);var values=vars.values||[],first={},second=values[0],autoRotate=vars.autoRotate||tween.vars.orientToBezier,p,isFunc,i,j,prepend;this._autoRotate=autoRotate?(autoRotate instanceof Array)?autoRotate:[["x","y","rotation",((autoRotate===true)?0:Number(autoRotate)||0)]]:null;for(p in second){this._props.push(p);}
i=this._props.length;while(--i>-1){p=this._props[i];this._overwriteProps.push(p);isFunc=this._func[p]=(typeof(target[p])==="function");first[p]=(!isFunc)?parseFloat(target[p]):target[((p.indexOf("set")||typeof(target["get"+p.substr(3)])!=="function")?p:"get"+p.substr(3))]();if(!prepend)if(first[p]!==values[0][p]){prepend=first;}}
this._beziers=(vars.type!=="cubic"&&vars.type!=="quadratic"&&vars.type!=="soft")?bezierThrough(values,isNaN(vars.curviness)?1:vars.curviness,false,(vars.type==="thruBasic"),vars.correlate,prepend):_parseBezierData(values,vars.type,first);this._segCount=this._beziers[p].length;if(this._timeRes){var ld=_parseLengthData(this._beziers,this._timeRes);this._length=ld.length;this._lengths=ld.lengths;this._segments=ld.segments;this._l1=this._li=this._s1=this._si=0;this._l2=this._lengths[0];this._curSeg=this._segments[0];this._s2=this._curSeg[0];this._prec=1/this._curSeg.length;}
if((autoRotate=this._autoRotate)){this._initialRotations=[];if(!(autoRotate[0]instanceof Array)){this._autoRotate=autoRotate=[autoRotate];}
i=autoRotate.length;while(--i>-1){for(j=0;j<3;j++){p=autoRotate[i][j];this._func[p]=(typeof(target[p])==="function")?target[((p.indexOf("set")||typeof(target["get"+p.substr(3)])!=="function")?p:"get"+p.substr(3))]:false;}
p=autoRotate[i][2];this._initialRotations[i]=(this._func[p]?this._func[p].call(this._target):this._target[p])||0;}}
this._startRatio=tween.vars.runBackwards?1:0;return true;},set:function(v){var segments=this._segCount,func=this._func,target=this._target,notStart=(v!==this._startRatio),curIndex,inv,i,p,b,t,val,l,lengths,curSeg;if(!this._timeRes){curIndex=(v<0)?0:(v>=1)?segments-1:(segments*v)>>0;t=(v-(curIndex*(1/segments)))*segments;}else{lengths=this._lengths;curSeg=this._curSeg;v*=this._length;i=this._li;if(v>this._l2&&i<segments-1){l=segments-1;while(i<l&&(this._l2=lengths[++i])<=v){}
this._l1=lengths[i-1];this._li=i;this._curSeg=curSeg=this._segments[i];this._s2=curSeg[(this._s1=this._si=0)];}else if(v<this._l1&&i>0){while(i>0&&(this._l1=lengths[--i])>=v){}
if(i===0&&v<this._l1){this._l1=0;}else{i++;}
this._l2=lengths[i];this._li=i;this._curSeg=curSeg=this._segments[i];this._s1=curSeg[(this._si=curSeg.length-1)-1]||0;this._s2=curSeg[this._si];}
curIndex=i;v-=this._l1;i=this._si;if(v>this._s2&&i<curSeg.length-1){l=curSeg.length-1;while(i<l&&(this._s2=curSeg[++i])<=v){}
this._s1=curSeg[i-1];this._si=i;}else if(v<this._s1&&i>0){while(i>0&&(this._s1=curSeg[--i])>=v){}
if(i===0&&v<this._s1){this._s1=0;}else{i++;}
this._s2=curSeg[i];this._si=i;}
t=((i+(v-this._s1)/(this._s2-this._s1))*this._prec)||0;}
inv=1-t;i=this._props.length;while(--i>-1){p=this._props[i];b=this._beziers[p][curIndex];val=(t*t*b.da+3*inv*(t*b.ca+inv*b.ba))*t+b.a;if(this._round[p]){val=Math.round(val);}
if(func[p]){target[p](val);}else{target[p]=val;}}
if(this._autoRotate){var ar=this._autoRotate,b2,x1,y1,x2,y2,add,conv;i=ar.length;while(--i>-1){p=ar[i][2];add=ar[i][3]||0;conv=(ar[i][4]===true)?1:_RAD2DEG;b=this._beziers[ar[i][0]];b2=this._beziers[ar[i][1]];if(b&&b2){b=b[curIndex];b2=b2[curIndex];x1=b.a+(b.b-b.a)*t;x2=b.b+(b.c-b.b)*t;x1+=(x2-x1)*t;x2+=((b.c+(b.d-b.c)*t)-x2)*t;y1=b2.a+(b2.b-b2.a)*t;y2=b2.b+(b2.c-b2.b)*t;y1+=(y2-y1)*t;y2+=((b2.c+(b2.d-b2.c)*t)-y2)*t;val=notStart?Math.atan2(y2-y1,x2-x1)*conv+add:this._initialRotations[i];if(func[p]){target[p](val);}else{target[p]=val;}}}}}}),p=BezierPlugin.prototype;BezierPlugin.bezierThrough=bezierThrough;BezierPlugin.cubicToQuadratic=cubicToQuadratic;BezierPlugin._autoCSS=true;BezierPlugin.quadraticToCubic=function(a,b,c){return new Segment(a,(2*b+a)/3,(2*b+c)/3,c);};BezierPlugin._cssRegister=function(){var CSSPlugin=_globals.CSSPlugin;if(!CSSPlugin){return;}
var _internals=CSSPlugin._internals,_parseToProxy=_internals._parseToProxy,_setPluginRatio=_internals._setPluginRatio,CSSPropTween=_internals.CSSPropTween;_internals._registerComplexSpecialProp("bezier",{parser:function(t,e,prop,cssp,pt,plugin){if(e instanceof Array){e={values:e};}
plugin=new BezierPlugin();var values=e.values,l=values.length-1,pluginValues=[],v={},i,p,data;if(l<0){return pt;}
for(i=0;i<=l;i++){data=_parseToProxy(t,values[i],cssp,pt,plugin,(l!==i));pluginValues[i]=data.end;}
for(p in e){v[p]=e[p];}
v.values=pluginValues;pt=new CSSPropTween(t,"bezier",0,0,data.pt,2);pt.data=data;pt.plugin=plugin;pt.setRatio=_setPluginRatio;if(v.autoRotate===0){v.autoRotate=true;}
if(v.autoRotate&&!(v.autoRotate instanceof Array)){i=(v.autoRotate===true)?0:Number(v.autoRotate);v.autoRotate=(data.end.left!=null)?[["left","top","rotation",i,false]]:(data.end.x!=null)?[["x","y","rotation",i,false]]:false;}
if(v.autoRotate){if(!cssp._transform){cssp._enableTransforms(false);}
data.autoRotate=cssp._target._gsTransform;}
plugin._onInitTween(data.proxy,v,cssp._tween);return pt;}});};p._roundProps=function(lookup,value){var op=this._overwriteProps,i=op.length;while(--i>-1){if(lookup[op[i]]||lookup.bezier||lookup.bezierThrough){this._round[op[i]]=value;}}};p._kill=function(lookup){var a=this._props,p,i;for(p in this._beziers){if(p in lookup){delete this._beziers[p];delete this._func[p];i=a.length;while(--i>-1){if(a[i]===p){a.splice(i,1);}}}}
return this._super._kill.call(this,lookup);};}());_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(TweenPlugin,TweenLite){var CSSPlugin=function(){TweenPlugin.call(this,"css");this._overwriteProps.length=0;this.setRatio=CSSPlugin.prototype.setRatio;},_globals=_gsScope._gsDefine.globals,_hasPriority,_suffixMap,_cs,_overwriteProps,_specialProps={},p=CSSPlugin.prototype=new TweenPlugin("css");p.constructor=CSSPlugin;CSSPlugin.version="1.18.4";CSSPlugin.API=2;CSSPlugin.defaultTransformPerspective=0;CSSPlugin.defaultSkewType="compensated";CSSPlugin.defaultSmoothOrigin=true;p="px";CSSPlugin.suffixMap={top:p,right:p,bottom:p,left:p,width:p,height:p,fontSize:p,padding:p,margin:p,perspective:p,lineHeight:""};var _numExp=/(?:\-|\.|\b)(\d|\.|e\-)+/g,_relNumExp=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,_valuesExp=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,_NaNExp=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,_suffixExp=/(?:\d|\-|\+|=|#|\.)*/g,_opacityExp=/opacity *= *([^)]*)/i,_opacityValExp=/opacity:([^;]*)/i,_alphaFilterExp=/alpha\(opacity *=.+?\)/i,_rgbhslExp=/^(rgb|hsl)/,_capsExp=/([A-Z])/g,_camelExp=/-([a-z])/gi,_urlExp=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,_camelFunc=function(s,g){return g.toUpperCase();},_horizExp=/(?:Left|Right|Width)/i,_ieGetMatrixExp=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,_ieSetMatrixExp=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,_commasOutsideParenExp=/,(?=[^\)]*(?:\(|$))/gi,_complexExp=/[\s,\(]/i,_DEG2RAD=Math.PI/180,_RAD2DEG=180/Math.PI,_forcePT={},_doc=document,_createElement=function(type){return _doc.createElementNS?_doc.createElementNS("http://www.w3.org/1999/xhtml",type):_doc.createElement(type);},_tempDiv=_createElement("div"),_tempImg=_createElement("img"),_internals=CSSPlugin._internals={_specialProps:_specialProps},_agent=navigator.userAgent,_autoRound,_reqSafariFix,_isSafari,_isFirefox,_isSafariLT6,_ieVers,_supportsOpacity=(function(){var i=_agent.indexOf("Android"),a=_createElement("a");_isSafari=(_agent.indexOf("Safari")!==-1&&_agent.indexOf("Chrome")===-1&&(i===-1||Number(_agent.substr(i+8,1))>3));_isSafariLT6=(_isSafari&&(Number(_agent.substr(_agent.indexOf("Version/")+8,1))<6));_isFirefox=(_agent.indexOf("Firefox")!==-1);if((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent)||(/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)){_ieVers=parseFloat(RegExp.$1);}
if(!a){return false;}
a.style.cssText="top:1px;opacity:.55;";return /^0.55/.test(a.style.opacity);}()),_getIEOpacity=function(v){return(_opacityExp.test(((typeof(v)==="string")?v:(v.currentStyle?v.currentStyle.filter:v.style.filter)||""))?(parseFloat(RegExp.$1)/100):1);},_log=function(s){if(window.console){console.log(s);}},_prefixCSS="",_prefix="",_checkPropPrefix=function(p,e){e=e||_tempDiv;var s=e.style,a,i;if(s[p]!==undefined){return p;}
p=p.charAt(0).toUpperCase()+p.substr(1);a=["O","Moz","ms","Ms","Webkit"];i=5;while(--i>-1&&s[a[i]+p]===undefined){}
if(i>=0){_prefix=(i===3)?"ms":a[i];_prefixCSS="-"+_prefix.toLowerCase()+"-";return _prefix+p;}
return null;},_getComputedStyle=_doc.defaultView?_doc.defaultView.getComputedStyle:function(){},_getStyle=CSSPlugin.getStyle=function(t,p,cs,calc,dflt){var rv;if(!_supportsOpacity)if(p==="opacity"){return _getIEOpacity(t);}
if(!calc&&t.style[p]){rv=t.style[p];}else if((cs=cs||_getComputedStyle(t))){rv=cs[p]||cs.getPropertyValue(p)||cs.getPropertyValue(p.replace(_capsExp,"-$1").toLowerCase());}else if(t.currentStyle){rv=t.currentStyle[p];}
return(dflt!=null&&(!rv||rv==="none"||rv==="auto"||rv==="auto auto"))?dflt:rv;},_convertToPixels=_internals.convertToPixels=function(t,p,v,sfx,recurse){if(sfx==="px"||!sfx){return v;}
if(sfx==="auto"||!v){return 0;}
var horiz=_horizExp.test(p),node=t,style=_tempDiv.style,neg=(v<0),pix,cache,time;if(neg){v=-v;}
if(sfx==="%"&&p.indexOf("border")!==-1){pix=(v/100)*(horiz?t.clientWidth:t.clientHeight);}else{style.cssText="border:0 solid red;position:"+_getStyle(t,"position")+";line-height:0;";if(sfx==="%"||!node.appendChild||sfx.charAt(0)==="v"||sfx==="rem"){node=t.parentNode||_doc.body;cache=node._gsCache;time=TweenLite.ticker.frame;if(cache&&horiz&&cache.time===time){return cache.width*v/100;}
style[(horiz?"width":"height")]=v+sfx;}else{style[(horiz?"borderLeftWidth":"borderTopWidth")]=v+sfx;}
node.appendChild(_tempDiv);pix=parseFloat(_tempDiv[(horiz?"offsetWidth":"offsetHeight")]);node.removeChild(_tempDiv);if(horiz&&sfx==="%"&&CSSPlugin.cacheWidths!==false){cache=node._gsCache=node._gsCache||{};cache.time=time;cache.width=pix/v*100;}
if(pix===0&&!recurse){pix=_convertToPixels(t,p,v,sfx,true);}}
return neg?-pix:pix;},_calculateOffset=_internals.calculateOffset=function(t,p,cs){if(_getStyle(t,"position",cs)!=="absolute"){return 0;}
var dim=((p==="left")?"Left":"Top"),v=_getStyle(t,"margin"+dim,cs);return t["offset"+dim]-(_convertToPixels(t,p,parseFloat(v),v.replace(_suffixExp,""))||0);},_getAllStyles=function(t,cs){var s={},i,tr,p;if((cs=cs||_getComputedStyle(t,null))){if((i=cs.length)){while(--i>-1){p=cs[i];if(p.indexOf("-transform")===-1||_transformPropCSS===p){s[p.replace(_camelExp,_camelFunc)]=cs.getPropertyValue(p);}}}else{for(i in cs){if(i.indexOf("Transform")===-1||_transformProp===i){s[i]=cs[i];}}}}else if((cs=t.currentStyle||t.style)){for(i in cs){if(typeof(i)==="string"&&s[i]===undefined){s[i.replace(_camelExp,_camelFunc)]=cs[i];}}}
if(!_supportsOpacity){s.opacity=_getIEOpacity(t);}
tr=_getTransform(t,cs,false);s.rotation=tr.rotation;s.skewX=tr.skewX;s.scaleX=tr.scaleX;s.scaleY=tr.scaleY;s.x=tr.x;s.y=tr.y;if(_supports3D){s.z=tr.z;s.rotationX=tr.rotationX;s.rotationY=tr.rotationY;s.scaleZ=tr.scaleZ;}
if(s.filters){delete s.filters;}
return s;},_cssDif=function(t,s1,s2,vars,forceLookup){var difs={},style=t.style,val,p,mpt;for(p in s2){if(p!=="cssText")if(p!=="length")if(isNaN(p))if(s1[p]!==(val=s2[p])||(forceLookup&&forceLookup[p]))if(p.indexOf("Origin")===-1)if(typeof(val)==="number"||typeof(val)==="string"){difs[p]=(val==="auto"&&(p==="left"||p==="top"))?_calculateOffset(t,p):((val===""||val==="auto"||val==="none")&&typeof(s1[p])==="string"&&s1[p].replace(_NaNExp,"")!=="")?0:val;if(style[p]!==undefined){mpt=new MiniPropTween(style,p,style[p],mpt);}}}
if(vars){for(p in vars){if(p!=="className"){difs[p]=vars[p];}}}
return{difs:difs,firstMPT:mpt};},_dimensions={width:["Left","Right"],height:["Top","Bottom"]},_margins=["marginLeft","marginRight","marginTop","marginBottom"],_getDimension=function(t,p,cs){if((t.nodeName+"").toLowerCase()==="svg"){return(cs||_getComputedStyle(t))[p]||0;}else if(t.getBBox&&_isSVG(t)){return t.getBBox()[p]||0;}
var v=parseFloat((p==="width")?t.offsetWidth:t.offsetHeight),a=_dimensions[p],i=a.length;cs=cs||_getComputedStyle(t,null);while(--i>-1){v-=parseFloat(_getStyle(t,"padding"+a[i],cs,true))||0;v-=parseFloat(_getStyle(t,"border"+a[i]+"Width",cs,true))||0;}
return v;},_parsePosition=function(v,recObj){if(v==="contain"||v==="auto"||v==="auto auto"){return v+" ";}
if(v==null||v===""){v="0 0";}
var a=v.split(" "),x=(v.indexOf("left")!==-1)?"0%":(v.indexOf("right")!==-1)?"100%":a[0],y=(v.indexOf("top")!==-1)?"0%":(v.indexOf("bottom")!==-1)?"100%":a[1],i;if(a.length>3&&!recObj){a=v.split(", ").join(",").split(",");v=[];for(i=0;i<a.length;i++){v.push(_parsePosition(a[i]));}
return v.join(",");}
if(y==null){y=(x==="center")?"50%":"0";}else if(y==="center"){y="50%";}
if(x==="center"||(isNaN(parseFloat(x))&&(x+"").indexOf("=")===-1)){x="50%";}
v=x+" "+y+((a.length>2)?" "+a[2]:"");if(recObj){recObj.oxp=(x.indexOf("%")!==-1);recObj.oyp=(y.indexOf("%")!==-1);recObj.oxr=(x.charAt(1)==="=");recObj.oyr=(y.charAt(1)==="=");recObj.ox=parseFloat(x.replace(_NaNExp,""));recObj.oy=parseFloat(y.replace(_NaNExp,""));recObj.v=v;}
return recObj||v;},_parseChange=function(e,b){return(typeof(e)==="string"&&e.charAt(1)==="=")?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):(parseFloat(e)-parseFloat(b))||0;},_parseVal=function(v,d){return(v==null)?d:(typeof(v)==="string"&&v.charAt(1)==="=")?parseInt(v.charAt(0)+"1",10)*parseFloat(v.substr(2))+d:parseFloat(v)||0;},_parseAngle=function(v,d,p,directionalEnd){var min=0.000001,cap,split,dif,result,isRelative;if(v==null){result=d;}else if(typeof(v)==="number"){result=v;}else{cap=360;split=v.split("_");isRelative=(v.charAt(1)==="=");dif=(isRelative?parseInt(v.charAt(0)+"1",10)*parseFloat(split[0].substr(2)):parseFloat(split[0]))*((v.indexOf("rad")===-1)?1:_RAD2DEG)-(isRelative?0:d);if(split.length){if(directionalEnd){directionalEnd[p]=d+dif;}
if(v.indexOf("short")!==-1){dif=dif%cap;if(dif!==dif%(cap/2)){dif=(dif<0)?dif+cap:dif-cap;}}
if(v.indexOf("_cw")!==-1&&dif<0){dif=((dif+cap*9999999999)%cap)-((dif/cap)|0)*cap;}else if(v.indexOf("ccw")!==-1&&dif>0){dif=((dif-cap*9999999999)%cap)-((dif/cap)|0)*cap;}}
result=d+dif;}
if(result<min&&result>-min){result=0;}
return result;},_colorLookup={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},_hue=function(h,m1,m2){h=(h<0)?h+1:(h>1)?h-1:h;return((((h*6<1)?m1+(m2-m1)*h*6:(h<0.5)?m2:(h*3<2)?m1+(m2-m1)*(2/3-h)*6:m1)*255)+0.5)|0;},_parseColor=CSSPlugin.parseColor=function(v,toHSL){var a,r,g,b,h,s,l,max,min,d,wasHSL;if(!v){a=_colorLookup.black;}else if(typeof(v)==="number"){a=[v>>16,(v>>8)&255,v&255];}else{if(v.charAt(v.length-1)===","){v=v.substr(0,v.length-1);}
if(_colorLookup[v]){a=_colorLookup[v];}else if(v.charAt(0)==="#"){if(v.length===4){r=v.charAt(1);g=v.charAt(2);b=v.charAt(3);v="#"+r+r+g+g+b+b;}
v=parseInt(v.substr(1),16);a=[v>>16,(v>>8)&255,v&255];}else if(v.substr(0,3)==="hsl"){a=wasHSL=v.match(_numExp);if(!toHSL){h=(Number(a[0])%360)/360;s=Number(a[1])/100;l=Number(a[2])/100;g=(l<=0.5)?l*(s+1):l+s-l*s;r=l*2-g;if(a.length>3){a[3]=Number(v[3]);}
a[0]=_hue(h+1/3,r,g);a[1]=_hue(h,r,g);a[2]=_hue(h-1/3,r,g);}else if(v.indexOf("=")!==-1){return v.match(_relNumExp);}}else{a=v.match(_numExp)||_colorLookup.transparent;}
a[0]=Number(a[0]);a[1]=Number(a[1]);a[2]=Number(a[2]);if(a.length>3){a[3]=Number(a[3]);}}
if(toHSL&&!wasHSL){r=a[0]/255;g=a[1]/255;b=a[2]/255;max=Math.max(r,g,b);min=Math.min(r,g,b);l=(max+min)/2;if(max===min){h=s=0;}else{d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);h=(max===r)?(g-b)/d+(g<b?6:0):(max===g)?(b-r)/d+2:(r-g)/d+4;h*=60;}
a[0]=(h+0.5)|0;a[1]=(s*100+0.5)|0;a[2]=(l*100+0.5)|0;}
return a;},_formatColors=function(s,toHSL){var colors=s.match(_colorExp)||[],charIndex=0,parsed=colors.length?"":s,i,color,temp;for(i=0;i<colors.length;i++){color=colors[i];temp=s.substr(charIndex,s.indexOf(color,charIndex)-charIndex);charIndex+=temp.length+color.length;color=_parseColor(color,toHSL);if(color.length===3){color.push(1);}
parsed+=temp+(toHSL?"hsla("+color[0]+","+color[1]+"%,"+color[2]+"%,"+color[3]:"rgba("+color.join(","))+")";}
return parsed+s.substr(charIndex);},_colorExp="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(p in _colorLookup){_colorExp+="|"+p+"\\b";}
_colorExp=new RegExp(_colorExp+")","gi");CSSPlugin.colorStringFilter=function(a){var combined=a[0]+a[1],toHSL;if(_colorExp.test(combined)){toHSL=(combined.indexOf("hsl(")!==-1||combined.indexOf("hsla(")!==-1);a[0]=_formatColors(a[0],toHSL);a[1]=_formatColors(a[1],toHSL);}
_colorExp.lastIndex=0;};if(!TweenLite.defaultStringFilter){TweenLite.defaultStringFilter=CSSPlugin.colorStringFilter;}
var _getFormatter=function(dflt,clr,collapsible,multi){if(dflt==null){return function(v){return v;};}
var dColor=clr?(dflt.match(_colorExp)||[""])[0]:"",dVals=dflt.split(dColor).join("").match(_valuesExp)||[],pfx=dflt.substr(0,dflt.indexOf(dVals[0])),sfx=(dflt.charAt(dflt.length-1)===")")?")":"",delim=(dflt.indexOf(" ")!==-1)?" ":",",numVals=dVals.length,dSfx=(numVals>0)?dVals[0].replace(_numExp,""):"",formatter;if(!numVals){return function(v){return v;};}
if(clr){formatter=function(v){var color,vals,i,a;if(typeof(v)==="number"){v+=dSfx;}else if(multi&&_commasOutsideParenExp.test(v)){a=v.replace(_commasOutsideParenExp,"|").split("|");for(i=0;i<a.length;i++){a[i]=formatter(a[i]);}
return a.join(",");}
color=(v.match(_colorExp)||[dColor])[0];vals=v.split(color).join("").match(_valuesExp)||[];i=vals.length;if(numVals>i--){while(++i<numVals){vals[i]=collapsible?vals[(((i-1)/2)|0)]:dVals[i];}}
return pfx+vals.join(delim)+delim+color+sfx+(v.indexOf("inset")!==-1?" inset":"");};return formatter;}
formatter=function(v){var vals,a,i;if(typeof(v)==="number"){v+=dSfx;}else if(multi&&_commasOutsideParenExp.test(v)){a=v.replace(_commasOutsideParenExp,"|").split("|");for(i=0;i<a.length;i++){a[i]=formatter(a[i]);}
return a.join(",");}
vals=v.match(_valuesExp)||[];i=vals.length;if(numVals>i--){while(++i<numVals){vals[i]=collapsible?vals[(((i-1)/2)|0)]:dVals[i];}}
return pfx+vals.join(delim)+sfx;};return formatter;},_getEdgeParser=function(props){props=props.split(",");return function(t,e,p,cssp,pt,plugin,vars){var a=(e+"").split(" "),i;vars={};for(i=0;i<4;i++){vars[props[i]]=a[i]=a[i]||a[(((i-1)/2)>>0)];}
return cssp.parse(t,vars,pt,plugin);};},_setPluginRatio=_internals._setPluginRatio=function(v){this.plugin.setRatio(v);var d=this.data,proxy=d.proxy,mpt=d.firstMPT,min=0.000001,val,pt,i,str,p;while(mpt){val=proxy[mpt.v];if(mpt.r){val=Math.round(val);}else if(val<min&&val>-min){val=0;}
mpt.t[mpt.p]=val;mpt=mpt._next;}
if(d.autoRotate){d.autoRotate.rotation=proxy.rotation;}
if(v===1||v===0){mpt=d.firstMPT;p=(v===1)?"e":"b";while(mpt){pt=mpt.t;if(!pt.type){pt[p]=pt.s+pt.xs0;}else if(pt.type===1){str=pt.xs0+pt.s+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}
pt[p]=str;}
mpt=mpt._next;}}},MiniPropTween=function(t,p,v,next,r){this.t=t;this.p=p;this.v=v;this.r=r;if(next){next._prev=this;this._next=next;}},_parseToProxy=_internals._parseToProxy=function(t,vars,cssp,pt,plugin,shallow){var bpt=pt,start={},end={},transform=cssp._transform,oldForce=_forcePT,i,p,xp,mpt,firstPT;cssp._transform=null;_forcePT=vars;pt=firstPT=cssp.parse(t,vars,pt,plugin);_forcePT=oldForce;if(shallow){cssp._transform=transform;if(bpt){bpt._prev=null;if(bpt._prev){bpt._prev._next=null;}}}
while(pt&&pt!==bpt){if(pt.type<=1){p=pt.p;end[p]=pt.s+pt.c;start[p]=pt.s;if(!shallow){mpt=new MiniPropTween(pt,"s",p,mpt,pt.r);pt.c=0;}
if(pt.type===1){i=pt.l;while(--i>0){xp="xn"+i;p=pt.p+"_"+xp;end[p]=pt.data[xp];start[p]=pt[xp];if(!shallow){mpt=new MiniPropTween(pt,xp,p,mpt,pt.rxp[xp]);}}}}
pt=pt._next;}
return{proxy:start,end:end,firstMPT:mpt,pt:firstPT};},CSSPropTween=_internals.CSSPropTween=function(t,p,s,c,next,type,n,r,pr,b,e){this.t=t;this.p=p;this.s=s;this.c=c;this.n=n||p;if(!(t instanceof CSSPropTween)){_overwriteProps.push(this.n);}
this.r=r;this.type=type||0;if(pr){this.pr=pr;_hasPriority=true;}
this.b=(b===undefined)?s:b;this.e=(e===undefined)?s+c:e;if(next){this._next=next;next._prev=this;}},_addNonTweeningNumericPT=function(target,prop,start,end,next,overwriteProp){var pt=new CSSPropTween(target,prop,start,end-start,next,-1,overwriteProp);pt.b=start;pt.e=pt.xs0=end;return pt;},_parseComplex=CSSPlugin.parseComplex=function(t,p,b,e,clrs,dflt,pt,pr,plugin,setRatio){b=b||dflt||"";pt=new CSSPropTween(t,p,0,0,pt,(setRatio?2:1),null,false,pr,b,e);e+="";if(clrs&&_colorExp.test(e+b)){e=[b,e];CSSPlugin.colorStringFilter(e);b=e[0];e=e[1];}
var ba=b.split(", ").join(",").split(" "),ea=e.split(", ").join(",").split(" "),l=ba.length,autoRound=(_autoRound!==false),i,xi,ni,bv,ev,bnums,enums,bn,hasAlpha,temp,cv,str,useHSL;if(e.indexOf(",")!==-1||b.indexOf(",")!==-1){ba=ba.join(" ").replace(_commasOutsideParenExp,", ").split(" ");ea=ea.join(" ").replace(_commasOutsideParenExp,", ").split(" ");l=ba.length;}
if(l!==ea.length){ba=(dflt||"").split(" ");l=ba.length;}
pt.plugin=plugin;pt.setRatio=setRatio;_colorExp.lastIndex=0;for(i=0;i<l;i++){bv=ba[i];ev=ea[i];bn=parseFloat(bv);if(bn||bn===0){pt.appendXtra("",bn,_parseChange(ev,bn),ev.replace(_relNumExp,""),(autoRound&&ev.indexOf("px")!==-1),true);}else if(clrs&&_colorExp.test(bv)){str=ev.indexOf(")")+1;str=")"+(str?ev.substr(str):"");useHSL=(ev.indexOf("hsl")!==-1&&_supportsOpacity);bv=_parseColor(bv,useHSL);ev=_parseColor(ev,useHSL);hasAlpha=(bv.length+ev.length>6);if(hasAlpha&&!_supportsOpacity&&ev[3]===0){pt["xs"+pt.l]+=pt.l?" transparent":"transparent";pt.e=pt.e.split(ea[i]).join("transparent");}else{if(!_supportsOpacity){hasAlpha=false;}
if(useHSL){pt.appendXtra((hasAlpha?"hsla(":"hsl("),bv[0],_parseChange(ev[0],bv[0]),",",false,true).appendXtra("",bv[1],_parseChange(ev[1],bv[1]),"%,",false).appendXtra("",bv[2],_parseChange(ev[2],bv[2]),(hasAlpha?"%,":"%"+str),false);}else{pt.appendXtra((hasAlpha?"rgba(":"rgb("),bv[0],ev[0]-bv[0],",",true,true).appendXtra("",bv[1],ev[1]-bv[1],",",true).appendXtra("",bv[2],ev[2]-bv[2],(hasAlpha?",":str),true);}
if(hasAlpha){bv=(bv.length<4)?1:bv[3];pt.appendXtra("",bv,((ev.length<4)?1:ev[3])-bv,str,false);}}
_colorExp.lastIndex=0;}else{bnums=bv.match(_numExp);if(!bnums){pt["xs"+pt.l]+=(pt.l||pt["xs"+pt.l])?" "+ev:ev;}else{enums=ev.match(_relNumExp);if(!enums||enums.length!==bnums.length){return pt;}
ni=0;for(xi=0;xi<bnums.length;xi++){cv=bnums[xi];temp=bv.indexOf(cv,ni);pt.appendXtra(bv.substr(ni,temp-ni),Number(cv),_parseChange(enums[xi],cv),"",(autoRound&&bv.substr(temp+cv.length,2)==="px"),(xi===0));ni=temp+cv.length;}
pt["xs"+pt.l]+=bv.substr(ni);}}}
if(e.indexOf("=")!==-1)if(pt.data){str=pt.xs0+pt.data.s;for(i=1;i<pt.l;i++){str+=pt["xs"+i]+pt.data["xn"+i];}
pt.e=str+pt["xs"+i];}
if(!pt.l){pt.type=-1;pt.xs0=pt.e;}
return pt.xfirst||pt;},i=9;p=CSSPropTween.prototype;p.l=p.pr=0;while(--i>0){p["xn"+i]=0;p["xs"+i]="";}
p.xs0="";p._next=p._prev=p.xfirst=p.data=p.plugin=p.setRatio=p.rxp=null;p.appendXtra=function(pfx,s,c,sfx,r,pad){var pt=this,l=pt.l;pt["xs"+l]+=(pad&&(l||pt["xs"+l]))?" "+pfx:pfx||"";if(!c)if(l!==0&&!pt.plugin){pt["xs"+l]+=s+(sfx||"");return pt;}
pt.l++;pt.type=pt.setRatio?2:1;pt["xs"+pt.l]=sfx||"";if(l>0){pt.data["xn"+l]=s+c;pt.rxp["xn"+l]=r;pt["xn"+l]=s;if(!pt.plugin){pt.xfirst=new CSSPropTween(pt,"xn"+l,s,c,pt.xfirst||pt,0,pt.n,r,pt.pr);pt.xfirst.xs0=0;}
return pt;}
pt.data={s:s+c};pt.rxp={};pt.s=s;pt.c=c;pt.r=r;return pt;};var SpecialProp=function(p,options){options=options||{};this.p=options.prefix?_checkPropPrefix(p)||p:p;_specialProps[p]=_specialProps[this.p]=this;this.format=options.formatter||_getFormatter(options.defaultValue,options.color,options.collapsible,options.multi);if(options.parser){this.parse=options.parser;}
this.clrs=options.color;this.multi=options.multi;this.keyword=options.keyword;this.dflt=options.defaultValue;this.pr=options.priority||0;},_registerComplexSpecialProp=_internals._registerComplexSpecialProp=function(p,options,defaults){if(typeof(options)!=="object"){options={parser:defaults};}
var a=p.split(","),d=options.defaultValue,i,temp;defaults=defaults||[d];for(i=0;i<a.length;i++){options.prefix=(i===0&&options.prefix);options.defaultValue=defaults[i]||d;temp=new SpecialProp(a[i],options);}},_registerPluginProp=function(p){if(!_specialProps[p]){var pluginName=p.charAt(0).toUpperCase()+p.substr(1)+"Plugin";_registerComplexSpecialProp(p,{parser:function(t,e,p,cssp,pt,plugin,vars){var pluginClass=_globals.com.greensock.plugins[pluginName];if(!pluginClass){_log("Error: "+pluginName+" js file not loaded.");return pt;}
pluginClass._cssRegister();return _specialProps[p].parse(t,e,p,cssp,pt,plugin,vars);}});}};p=SpecialProp.prototype;p.parseComplex=function(t,b,e,pt,plugin,setRatio){var kwd=this.keyword,i,ba,ea,l,bi,ei;if(this.multi)if(_commasOutsideParenExp.test(e)||_commasOutsideParenExp.test(b)){ba=b.replace(_commasOutsideParenExp,"|").split("|");ea=e.replace(_commasOutsideParenExp,"|").split("|");}else if(kwd){ba=[b];ea=[e];}
if(ea){l=(ea.length>ba.length)?ea.length:ba.length;for(i=0;i<l;i++){b=ba[i]=ba[i]||this.dflt;e=ea[i]=ea[i]||this.dflt;if(kwd){bi=b.indexOf(kwd);ei=e.indexOf(kwd);if(bi!==ei){if(ei===-1){ba[i]=ba[i].split(kwd).join("");}else if(bi===-1){ba[i]+=" "+kwd;}}}}
b=ba.join(", ");e=ea.join(", ");}
return _parseComplex(t,this.p,b,e,this.clrs,this.dflt,pt,this.pr,plugin,setRatio);};p.parse=function(t,e,p,cssp,pt,plugin,vars){return this.parseComplex(t.style,this.format(_getStyle(t,this.p,_cs,false,this.dflt)),this.format(e),pt,plugin);};CSSPlugin.registerSpecialProp=function(name,onInitTween,priority){_registerComplexSpecialProp(name,{parser:function(t,e,p,cssp,pt,plugin,vars){var rv=new CSSPropTween(t,p,0,0,pt,2,p,false,priority);rv.plugin=plugin;rv.setRatio=onInitTween(t,e,cssp._tween,p);return rv;},priority:priority});};CSSPlugin.useSVGTransformAttr=_isSafari||_isFirefox;var _transformProps=("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),_transformProp=_checkPropPrefix("transform"),_transformPropCSS=_prefixCSS+"transform",_transformOriginProp=_checkPropPrefix("transformOrigin"),_supports3D=(_checkPropPrefix("perspective")!==null),Transform=_internals.Transform=function(){this.perspective=parseFloat(CSSPlugin.defaultTransformPerspective)||0;this.force3D=(CSSPlugin.defaultForce3D===false||!_supports3D)?false:CSSPlugin.defaultForce3D||"auto";},_SVGElement=window.SVGElement,_useSVGTransformAttr,_createSVG=function(type,container,attributes){var element=_doc.createElementNS("http://www.w3.org/2000/svg",type),reg=/([a-z])([A-Z])/g,p;for(p in attributes){element.setAttributeNS(null,p.replace(reg,"$1-$2").toLowerCase(),attributes[p]);}
container.appendChild(element);return element;},_docElement=_doc.documentElement,_forceSVGTransformAttr=(function(){var force=_ieVers||(/Android/i.test(_agent)&&!window.chrome),svg,rect,width;if(_doc.createElementNS&&!force){svg=_createSVG("svg",_docElement);rect=_createSVG("rect",svg,{width:100,height:50,x:100});width=rect.getBoundingClientRect().width;rect.style[_transformOriginProp]="50% 50%";rect.style[_transformProp]="scaleX(0.5)";force=(width===rect.getBoundingClientRect().width&&!(_isFirefox&&_supports3D));_docElement.removeChild(svg);}
return force;})(),_parseSVGOrigin=function(e,local,decoratee,absolute,smoothOrigin,skipRecord){var tm=e._gsTransform,m=_getMatrix(e,true),v,x,y,xOrigin,yOrigin,a,b,c,d,tx,ty,determinant,xOriginOld,yOriginOld;if(tm){xOriginOld=tm.xOrigin;yOriginOld=tm.yOrigin;}
if(!absolute||(v=absolute.split(" ")).length<2){b=e.getBBox();local=_parsePosition(local).split(" ");v=[(local[0].indexOf("%")!==-1?parseFloat(local[0])/100*b.width:parseFloat(local[0]))+b.x,(local[1].indexOf("%")!==-1?parseFloat(local[1])/100*b.height:parseFloat(local[1]))+b.y];}
decoratee.xOrigin=xOrigin=parseFloat(v[0]);decoratee.yOrigin=yOrigin=parseFloat(v[1]);if(absolute&&m!==_identity2DMatrix){a=m[0];b=m[1];c=m[2];d=m[3];tx=m[4];ty=m[5];determinant=(a*d-b*c);x=xOrigin*(d/determinant)+yOrigin*(-c/determinant)+((c*ty-d*tx)/determinant);y=xOrigin*(-b/determinant)+yOrigin*(a/determinant)-((a*ty-b*tx)/determinant);xOrigin=decoratee.xOrigin=v[0]=x;yOrigin=decoratee.yOrigin=v[1]=y;}
if(tm){if(skipRecord){decoratee.xOffset=tm.xOffset;decoratee.yOffset=tm.yOffset;tm=decoratee;}
if(smoothOrigin||(smoothOrigin!==false&&CSSPlugin.defaultSmoothOrigin!==false)){x=xOrigin-xOriginOld;y=yOrigin-yOriginOld;tm.xOffset+=(x*m[0]+y*m[2])-x;tm.yOffset+=(x*m[1]+y*m[3])-y;}else{tm.xOffset=tm.yOffset=0;}}
if(!skipRecord){e.setAttribute("data-svg-origin",v.join(" "));}},_canGetBBox=function(e){try{return e.getBBox();}catch(e){}},_isSVG=function(e){return!!(_SVGElement&&e.getBBox&&e.getCTM&&_canGetBBox(e)&&(!e.parentNode||(e.parentNode.getBBox&&e.parentNode.getCTM)));},_identity2DMatrix=[1,0,0,1,0,0],_getMatrix=function(e,force2D){var tm=e._gsTransform||new Transform(),rnd=100000,isDefault,s,m,n,dec;if(_transformProp){s=_getStyle(e,_transformPropCSS,null,true);}else if(e.currentStyle){s=e.currentStyle.filter.match(_ieGetMatrixExp);s=(s&&s.length===4)?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),(tm.x||0),(tm.y||0)].join(","):"";}
isDefault=(!s||s==="none"||s==="matrix(1, 0, 0, 1, 0, 0)");if(tm.svg||(e.getBBox&&_isSVG(e))){if(isDefault&&(e.style[_transformProp]+"").indexOf("matrix")!==-1){s=e.style[_transformProp];isDefault=0;}
m=e.getAttribute("transform");if(isDefault&&m){if(m.indexOf("matrix")!==-1){s=m;isDefault=0;}else if(m.indexOf("translate")!==-1){s="matrix(1,0,0,1,"+m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")";isDefault=0;}}}
if(isDefault){return _identity2DMatrix;}
m=(s||"").match(_numExp)||[];i=m.length;while(--i>-1){n=Number(m[i]);m[i]=(dec=n-(n|=0))?((dec*rnd+(dec<0?-0.5:0.5))|0)/rnd+n:n;}
return(force2D&&m.length>6)?[m[0],m[1],m[4],m[5],m[12],m[13]]:m;},_getTransform=_internals.getTransform=function(t,cs,rec,parse){if(t._gsTransform&&rec&&!parse){return t._gsTransform;}
var tm=rec?t._gsTransform||new Transform():new Transform(),invX=(tm.scaleX<0),min=0.00002,rnd=100000,zOrigin=_supports3D?parseFloat(_getStyle(t,_transformOriginProp,cs,false,"0 0 0").split(" ")[2])||tm.zOrigin||0:0,defaultTransformPerspective=parseFloat(CSSPlugin.defaultTransformPerspective)||0,m,i,scaleX,scaleY,rotation,skewX;tm.svg=!!(t.getBBox&&_isSVG(t));if(tm.svg){_parseSVGOrigin(t,_getStyle(t,_transformOriginProp,_cs,false,"50% 50%")+"",tm,t.getAttribute("data-svg-origin"));_useSVGTransformAttr=CSSPlugin.useSVGTransformAttr||_forceSVGTransformAttr;}
m=_getMatrix(t);if(m!==_identity2DMatrix){if(m.length===16){var a11=m[0],a21=m[1],a31=m[2],a41=m[3],a12=m[4],a22=m[5],a32=m[6],a42=m[7],a13=m[8],a23=m[9],a33=m[10],a14=m[12],a24=m[13],a34=m[14],a43=m[11],angle=Math.atan2(a32,a33),t1,t2,t3,t4,cos,sin;if(tm.zOrigin){a34=-tm.zOrigin;a14=a13*a34-m[12];a24=a23*a34-m[13];a34=a33*a34+tm.zOrigin-m[14];}
tm.rotationX=angle*_RAD2DEG;if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);t1=a12*cos+a13*sin;t2=a22*cos+a23*sin;t3=a32*cos+a33*sin;a13=a12*-sin+a13*cos;a23=a22*-sin+a23*cos;a33=a32*-sin+a33*cos;a43=a42*-sin+a43*cos;a12=t1;a22=t2;a32=t3;}
angle=Math.atan2(-a31,a33);tm.rotationY=angle*_RAD2DEG;if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);t1=a11*cos-a13*sin;t2=a21*cos-a23*sin;t3=a31*cos-a33*sin;a23=a21*sin+a23*cos;a33=a31*sin+a33*cos;a43=a41*sin+a43*cos;a11=t1;a21=t2;a31=t3;}
angle=Math.atan2(a21,a11);tm.rotation=angle*_RAD2DEG;if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);a11=a11*cos+a12*sin;t2=a21*cos+a22*sin;a22=a21*-sin+a22*cos;a32=a31*-sin+a32*cos;a21=t2;}
if(tm.rotationX&&Math.abs(tm.rotationX)+Math.abs(tm.rotation)>359.9){tm.rotationX=tm.rotation=0;tm.rotationY=180-tm.rotationY;}
tm.scaleX=((Math.sqrt(a11*a11+a21*a21)*rnd+0.5)|0)/rnd;tm.scaleY=((Math.sqrt(a22*a22+a23*a23)*rnd+0.5)|0)/rnd;tm.scaleZ=((Math.sqrt(a32*a32+a33*a33)*rnd+0.5)|0)/rnd;tm.skewX=(a12||a22)?Math.atan2(a12,a22)*_RAD2DEG+tm.rotation:tm.skewX||0;if(Math.abs(tm.skewX)>90&&Math.abs(tm.skewX)<270){if(invX){tm.scaleX*=-1;tm.skewX+=(tm.rotation<=0)?180:-180;tm.rotation+=(tm.rotation<=0)?180:-180;}else{tm.scaleY*=-1;tm.skewX+=(tm.skewX<=0)?180:-180;}}
tm.perspective=a43?1/((a43<0)?-a43:a43):0;tm.x=a14;tm.y=a24;tm.z=a34;if(tm.svg){tm.x-=tm.xOrigin-(tm.xOrigin*a11-tm.yOrigin*a12);tm.y-=tm.yOrigin-(tm.yOrigin*a21-tm.xOrigin*a22);}}else if((!_supports3D||parse||!m.length||tm.x!==m[4]||tm.y!==m[5]||(!tm.rotationX&&!tm.rotationY))&&!(tm.x!==undefined&&_getStyle(t,"display",cs)==="none")){var k=(m.length>=6),a=k?m[0]:1,b=m[1]||0,c=m[2]||0,d=k?m[3]:1;tm.x=m[4]||0;tm.y=m[5]||0;scaleX=Math.sqrt(a*a+b*b);scaleY=Math.sqrt(d*d+c*c);rotation=(a||b)?Math.atan2(b,a)*_RAD2DEG:tm.rotation||0;skewX=(c||d)?Math.atan2(c,d)*_RAD2DEG+rotation:tm.skewX||0;if(Math.abs(skewX)>90&&Math.abs(skewX)<270){if(invX){scaleX*=-1;skewX+=(rotation<=0)?180:-180;rotation+=(rotation<=0)?180:-180;}else{scaleY*=-1;skewX+=(skewX<=0)?180:-180;}}
tm.scaleX=scaleX;tm.scaleY=scaleY;tm.rotation=rotation;tm.skewX=skewX;if(_supports3D){tm.rotationX=tm.rotationY=tm.z=0;tm.perspective=defaultTransformPerspective;tm.scaleZ=1;}
if(tm.svg){tm.x-=tm.xOrigin-(tm.xOrigin*a+tm.yOrigin*c);tm.y-=tm.yOrigin-(tm.xOrigin*b+tm.yOrigin*d);}}
tm.zOrigin=zOrigin;for(i in tm){if(tm[i]<min)if(tm[i]>-min){tm[i]=0;}}}
if(rec){t._gsTransform=tm;if(tm.svg){if(_useSVGTransformAttr&&t.style[_transformProp]){TweenLite.delayedCall(0.001,function(){_removeProp(t.style,_transformProp);});}else if(!_useSVGTransformAttr&&t.getAttribute("transform")){TweenLite.delayedCall(0.001,function(){t.removeAttribute("transform");});}}}
return tm;},_setIETransformRatio=function(v){var t=this.data,ang=-t.rotation*_DEG2RAD,skew=ang+t.skewX*_DEG2RAD,rnd=100000,a=((Math.cos(ang)*t.scaleX*rnd)|0)/rnd,b=((Math.sin(ang)*t.scaleX*rnd)|0)/rnd,c=((Math.sin(skew)*-t.scaleY*rnd)|0)/rnd,d=((Math.cos(skew)*t.scaleY*rnd)|0)/rnd,style=this.t.style,cs=this.t.currentStyle,filters,val;if(!cs){return;}
val=b;b=-c;c=-val;filters=cs.filter;style.filter="";var w=this.t.offsetWidth,h=this.t.offsetHeight,clip=(cs.position!=="absolute"),m="progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+b+", M21="+c+", M22="+d,ox=t.x+(w*t.xPercent/100),oy=t.y+(h*t.yPercent/100),dx,dy;if(t.ox!=null){dx=((t.oxp)?w*t.ox*0.01:t.ox)-w/2;dy=((t.oyp)?h*t.oy*0.01:t.oy)-h/2;ox+=dx-(dx*a+dy*b);oy+=dy-(dx*c+dy*d);}
if(!clip){m+=", sizingMethod='auto expand')";}else{dx=(w/2);dy=(h/2);m+=", Dx="+(dx-(dx*a+dy*b)+ox)+", Dy="+(dy-(dx*c+dy*d)+oy)+")";}
if(filters.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1){style.filter=filters.replace(_ieSetMatrixExp,m);}else{style.filter=m+" "+filters;}
if(v===0||v===1)if(a===1)if(b===0)if(c===0)if(d===1)if(!clip||m.indexOf("Dx=0, Dy=0")!==-1)if(!_opacityExp.test(filters)||parseFloat(RegExp.$1)===100)if(filters.indexOf("gradient("&&filters.indexOf("Alpha"))===-1){style.removeAttribute("filter");}
if(!clip){var mult=(_ieVers<8)?1:-1,marg,prop,dif;dx=t.ieOffsetX||0;dy=t.ieOffsetY||0;t.ieOffsetX=Math.round((w-((a<0?-a:a)*w+(b<0?-b:b)*h))/2+ox);t.ieOffsetY=Math.round((h-((d<0?-d:d)*h+(c<0?-c:c)*w))/2+oy);for(i=0;i<4;i++){prop=_margins[i];marg=cs[prop];val=(marg.indexOf("px")!==-1)?parseFloat(marg):_convertToPixels(this.t,prop,parseFloat(marg),marg.replace(_suffixExp,""))||0;if(val!==t[prop]){dif=(i<2)?-t.ieOffsetX:-t.ieOffsetY;}else{dif=(i<2)?dx-t.ieOffsetX:dy-t.ieOffsetY;}
style[prop]=(t[prop]=Math.round(val-dif*((i===0||i===2)?1:mult)))+"px";}}},_setTransformRatio=_internals.set3DTransformRatio=_internals.setTransformRatio=function(v){var t=this.data,style=this.t.style,angle=t.rotation,rotationX=t.rotationX,rotationY=t.rotationY,sx=t.scaleX,sy=t.scaleY,sz=t.scaleZ,x=t.x,y=t.y,z=t.z,isSVG=t.svg,perspective=t.perspective,force3D=t.force3D,a11,a12,a13,a21,a22,a23,a31,a32,a33,a41,a42,a43,zOrigin,min,cos,sin,t1,t2,transform,comma,zero,skew,rnd;if(((((v===1||v===0)&&force3D==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime))||!force3D)&&!z&&!perspective&&!rotationY&&!rotationX&&sz===1)||(_useSVGTransformAttr&&isSVG)||!_supports3D){if(angle||t.skewX||isSVG){angle*=_DEG2RAD;skew=t.skewX*_DEG2RAD;rnd=100000;a11=Math.cos(angle)*sx;a21=Math.sin(angle)*sx;a12=Math.sin(angle-skew)*-sy;a22=Math.cos(angle-skew)*sy;if(skew&&t.skewType==="simple"){t1=Math.tan(skew);t1=Math.sqrt(1+t1*t1);a12*=t1;a22*=t1;if(t.skewY){a11*=t1;a21*=t1;}}
if(isSVG){x+=t.xOrigin-(t.xOrigin*a11+t.yOrigin*a12)+t.xOffset;y+=t.yOrigin-(t.xOrigin*a21+t.yOrigin*a22)+t.yOffset;if(_useSVGTransformAttr&&(t.xPercent||t.yPercent)){min=this.t.getBBox();x+=t.xPercent*0.01*min.width;y+=t.yPercent*0.01*min.height;}
min=0.000001;if(x<min)if(x>-min){x=0;}
if(y<min)if(y>-min){y=0;}}
transform=(((a11*rnd)|0)/rnd)+","+(((a21*rnd)|0)/rnd)+","+(((a12*rnd)|0)/rnd)+","+(((a22*rnd)|0)/rnd)+","+x+","+y+")";if(isSVG&&_useSVGTransformAttr){this.t.setAttribute("transform","matrix("+transform);}else{style[_transformProp]=((t.xPercent||t.yPercent)?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+transform;}}else{style[_transformProp]=((t.xPercent||t.yPercent)?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+sx+",0,0,"+sy+","+x+","+y+")";}
return;}
if(_isFirefox){min=0.0001;if(sx<min&&sx>-min){sx=sz=0.00002;}
if(sy<min&&sy>-min){sy=sz=0.00002;}
if(perspective&&!t.z&&!t.rotationX&&!t.rotationY){perspective=0;}}
if(angle||t.skewX){angle*=_DEG2RAD;cos=a11=Math.cos(angle);sin=a21=Math.sin(angle);if(t.skewX){angle-=t.skewX*_DEG2RAD;cos=Math.cos(angle);sin=Math.sin(angle);if(t.skewType==="simple"){t1=Math.tan(t.skewX*_DEG2RAD);t1=Math.sqrt(1+t1*t1);cos*=t1;sin*=t1;if(t.skewY){a11*=t1;a21*=t1;}}}
a12=-sin;a22=cos;}else if(!rotationY&&!rotationX&&sz===1&&!perspective&&!isSVG){style[_transformProp]=((t.xPercent||t.yPercent)?"translate("+t.xPercent+"%,"+t.yPercent+"%) translate3d(":"translate3d(")+x+"px,"+y+"px,"+z+"px)"+((sx!==1||sy!==1)?" scale("+sx+","+sy+")":"");return;}else{a11=a22=1;a12=a21=0;}
a33=1;a13=a23=a31=a32=a41=a42=0;a43=(perspective)?-1/perspective:0;zOrigin=t.zOrigin;min=0.000001;comma=",";zero="0";angle=rotationY*_DEG2RAD;if(angle){cos=Math.cos(angle);sin=Math.sin(angle);a31=-sin;a41=a43*-sin;a13=a11*sin;a23=a21*sin;a33=cos;a43*=cos;a11*=cos;a21*=cos;}
angle=rotationX*_DEG2RAD;if(angle){cos=Math.cos(angle);sin=Math.sin(angle);t1=a12*cos+a13*sin;t2=a22*cos+a23*sin;a32=a33*sin;a42=a43*sin;a13=a12*-sin+a13*cos;a23=a22*-sin+a23*cos;a33=a33*cos;a43=a43*cos;a12=t1;a22=t2;}
if(sz!==1){a13*=sz;a23*=sz;a33*=sz;a43*=sz;}
if(sy!==1){a12*=sy;a22*=sy;a32*=sy;a42*=sy;}
if(sx!==1){a11*=sx;a21*=sx;a31*=sx;a41*=sx;}
if(zOrigin||isSVG){if(zOrigin){x+=a13*-zOrigin;y+=a23*-zOrigin;z+=a33*-zOrigin+zOrigin;}
if(isSVG){x+=t.xOrigin-(t.xOrigin*a11+t.yOrigin*a12)+t.xOffset;y+=t.yOrigin-(t.xOrigin*a21+t.yOrigin*a22)+t.yOffset;}
if(x<min&&x>-min){x=zero;}
if(y<min&&y>-min){y=zero;}
if(z<min&&z>-min){z=0;}}
transform=((t.xPercent||t.yPercent)?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix3d(":"matrix3d(");transform+=((a11<min&&a11>-min)?zero:a11)+comma+((a21<min&&a21>-min)?zero:a21)+comma+((a31<min&&a31>-min)?zero:a31);transform+=comma+((a41<min&&a41>-min)?zero:a41)+comma+((a12<min&&a12>-min)?zero:a12)+comma+((a22<min&&a22>-min)?zero:a22);if(rotationX||rotationY||sz!==1){transform+=comma+((a32<min&&a32>-min)?zero:a32)+comma+((a42<min&&a42>-min)?zero:a42)+comma+((a13<min&&a13>-min)?zero:a13);transform+=comma+((a23<min&&a23>-min)?zero:a23)+comma+((a33<min&&a33>-min)?zero:a33)+comma+((a43<min&&a43>-min)?zero:a43)+comma;}else{transform+=",0,0,0,0,1,0,";}
transform+=x+comma+y+comma+z+comma+(perspective?(1+(-z/perspective)):1)+")";style[_transformProp]=transform;};p=Transform.prototype;p.x=p.y=p.z=p.skewX=p.skewY=p.rotation=p.rotationX=p.rotationY=p.zOrigin=p.xPercent=p.yPercent=p.xOffset=p.yOffset=0;p.scaleX=p.scaleY=p.scaleZ=1;_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,p,cssp,pt,plugin,vars){if(cssp._lastParsedTransform===vars){return pt;}
cssp._lastParsedTransform=vars;var originalGSTransform=t._gsTransform,style=t.style,min=0.000001,i=_transformProps.length,v=vars,endRotations={},transformOriginString="transformOrigin",m1,m2,copy,orig,has3D,hasChange,dr,x,y,matrix;if(vars.display){copy=_getStyle(t,"display");style.display="block";m1=_getTransform(t,_cs,true,vars.parseTransform);style.display=copy;}else{m1=_getTransform(t,_cs,true,vars.parseTransform);}
cssp._transform=m1;if(typeof(v.transform)==="string"&&_transformProp){copy=_tempDiv.style;copy[_transformProp]=v.transform;copy.display="block";copy.position="absolute";_doc.body.appendChild(_tempDiv);m2=_getTransform(_tempDiv,null,false);if(m1.svg){x=m1.xOrigin;y=m1.yOrigin;m2.x-=m1.xOffset;m2.y-=m1.yOffset;if(v.transformOrigin||v.svgOrigin){orig={};_parseSVGOrigin(t,_parsePosition(v.transformOrigin),orig,v.svgOrigin,v.smoothOrigin,true);x=orig.xOrigin;y=orig.yOrigin;m2.x-=orig.xOffset-m1.xOffset;m2.y-=orig.yOffset-m1.yOffset;}
if(x||y){matrix=_getMatrix(_tempDiv);m2.x-=x-(x*matrix[0]+y*matrix[2]);m2.y-=y-(x*matrix[1]+y*matrix[3]);}}
_doc.body.removeChild(_tempDiv);if(!m2.perspective){m2.perspective=m1.perspective;}
if(v.xPercent!=null){m2.xPercent=_parseVal(v.xPercent,m1.xPercent);}
if(v.yPercent!=null){m2.yPercent=_parseVal(v.yPercent,m1.yPercent);}}else if(typeof(v)==="object"){m2={scaleX:_parseVal((v.scaleX!=null)?v.scaleX:v.scale,m1.scaleX),scaleY:_parseVal((v.scaleY!=null)?v.scaleY:v.scale,m1.scaleY),scaleZ:_parseVal(v.scaleZ,m1.scaleZ),x:_parseVal(v.x,m1.x),y:_parseVal(v.y,m1.y),z:_parseVal(v.z,m1.z),xPercent:_parseVal(v.xPercent,m1.xPercent),yPercent:_parseVal(v.yPercent,m1.yPercent),perspective:_parseVal(v.transformPerspective,m1.perspective)};dr=v.directionalRotation;if(dr!=null){if(typeof(dr)==="object"){for(copy in dr){v[copy]=dr[copy];}}else{v.rotation=dr;}}
if(typeof(v.x)==="string"&&v.x.indexOf("%")!==-1){m2.x=0;m2.xPercent=_parseVal(v.x,m1.xPercent);}
if(typeof(v.y)==="string"&&v.y.indexOf("%")!==-1){m2.y=0;m2.yPercent=_parseVal(v.y,m1.yPercent);}
m2.rotation=_parseAngle(("rotation"in v)?v.rotation:("shortRotation"in v)?v.shortRotation+"_short":("rotationZ"in v)?v.rotationZ:m1.rotation-m1.skewY,m1.rotation-m1.skewY,"rotation",endRotations);if(_supports3D){m2.rotationX=_parseAngle(("rotationX"in v)?v.rotationX:("shortRotationX"in v)?v.shortRotationX+"_short":m1.rotationX||0,m1.rotationX,"rotationX",endRotations);m2.rotationY=_parseAngle(("rotationY"in v)?v.rotationY:("shortRotationY"in v)?v.shortRotationY+"_short":m1.rotationY||0,m1.rotationY,"rotationY",endRotations);}
m2.skewX=_parseAngle(v.skewX,m1.skewX-m1.skewY);if((m2.skewY=_parseAngle(v.skewY,m1.skewY))){m2.skewX+=m2.skewY;m2.rotation+=m2.skewY;}}
if(_supports3D&&v.force3D!=null){m1.force3D=v.force3D;hasChange=true;}
m1.skewType=v.skewType||m1.skewType||CSSPlugin.defaultSkewType;has3D=(m1.force3D||m1.z||m1.rotationX||m1.rotationY||m2.z||m2.rotationX||m2.rotationY||m2.perspective);if(!has3D&&v.scale!=null){m2.scaleZ=1;}
while(--i>-1){p=_transformProps[i];orig=m2[p]-m1[p];if(orig>min||orig<-min||v[p]!=null||_forcePT[p]!=null){hasChange=true;pt=new CSSPropTween(m1,p,m1[p],orig,pt);if(p in endRotations){pt.e=endRotations[p];}
pt.xs0=0;pt.plugin=plugin;cssp._overwriteProps.push(pt.n);}}
orig=v.transformOrigin;if(m1.svg&&(orig||v.svgOrigin)){x=m1.xOffset;y=m1.yOffset;_parseSVGOrigin(t,_parsePosition(orig),m2,v.svgOrigin,v.smoothOrigin);pt=_addNonTweeningNumericPT(m1,"xOrigin",(originalGSTransform?m1:m2).xOrigin,m2.xOrigin,pt,transformOriginString);pt=_addNonTweeningNumericPT(m1,"yOrigin",(originalGSTransform?m1:m2).yOrigin,m2.yOrigin,pt,transformOriginString);if(x!==m1.xOffset||y!==m1.yOffset){pt=_addNonTweeningNumericPT(m1,"xOffset",(originalGSTransform?x:m1.xOffset),m1.xOffset,pt,transformOriginString);pt=_addNonTweeningNumericPT(m1,"yOffset",(originalGSTransform?y:m1.yOffset),m1.yOffset,pt,transformOriginString);}
orig=_useSVGTransformAttr?null:"0px 0px";}
if(orig||(_supports3D&&has3D&&m1.zOrigin)){if(_transformProp){hasChange=true;p=_transformOriginProp;orig=(orig||_getStyle(t,p,_cs,false,"50% 50%"))+"";pt=new CSSPropTween(style,p,0,0,pt,-1,transformOriginString);pt.b=style[p];pt.plugin=plugin;if(_supports3D){copy=m1.zOrigin;orig=orig.split(" ");m1.zOrigin=((orig.length>2&&!(copy!==0&&orig[2]==="0px"))?parseFloat(orig[2]):copy)||0;pt.xs0=pt.e=orig[0]+" "+(orig[1]||"50%")+" 0px";pt=new CSSPropTween(m1,"zOrigin",0,0,pt,-1,pt.n);pt.b=copy;pt.xs0=pt.e=m1.zOrigin;}else{pt.xs0=pt.e=orig;}}else{_parsePosition(orig+"",m1);}}
if(hasChange){cssp._transformType=(!(m1.svg&&_useSVGTransformAttr)&&(has3D||this._transformType===3))?3:2;}
return pt;},prefix:true});_registerComplexSpecialProp("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:true,color:true,multi:true,keyword:"inset"});_registerComplexSpecialProp("borderRadius",{defaultValue:"0px",parser:function(t,e,p,cssp,pt,plugin){e=this.format(e);var props=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],style=t.style,ea1,i,es2,bs2,bs,es,bn,en,w,h,esfx,bsfx,rel,hn,vn,em;w=parseFloat(t.offsetWidth);h=parseFloat(t.offsetHeight);ea1=e.split(" ");for(i=0;i<props.length;i++){if(this.p.indexOf("border")){props[i]=_checkPropPrefix(props[i]);}
bs=bs2=_getStyle(t,props[i],_cs,false,"0px");if(bs.indexOf(" ")!==-1){bs2=bs.split(" ");bs=bs2[0];bs2=bs2[1];}
es=es2=ea1[i];bn=parseFloat(bs);bsfx=bs.substr((bn+"").length);rel=(es.charAt(1)==="=");if(rel){en=parseInt(es.charAt(0)+"1",10);es=es.substr(2);en*=parseFloat(es);esfx=es.substr((en+"").length-(en<0?1:0))||"";}else{en=parseFloat(es);esfx=es.substr((en+"").length);}
if(esfx===""){esfx=_suffixMap[p]||bsfx;}
if(esfx!==bsfx){hn=_convertToPixels(t,"borderLeft",bn,bsfx);vn=_convertToPixels(t,"borderTop",bn,bsfx);if(esfx==="%"){bs=(hn/w*100)+"%";bs2=(vn/h*100)+"%";}else if(esfx==="em"){em=_convertToPixels(t,"borderLeft",1,"em");bs=(hn/em)+"em";bs2=(vn/em)+"em";}else{bs=hn+"px";bs2=vn+"px";}
if(rel){es=(parseFloat(bs)+en)+esfx;es2=(parseFloat(bs2)+en)+esfx;}}
pt=_parseComplex(style,props[i],bs+" "+bs2,es+" "+es2,false,"0px",pt);}
return pt;},prefix:true,formatter:_getFormatter("0px 0px 0px 0px",false,true)});_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,p,cssp,pt,plugin){return _parseComplex(t.style,p,this.format(_getStyle(t,p,_cs,false,"0px 0px")),this.format(e),false,"0px",pt);},prefix:true,formatter:_getFormatter("0px 0px",false,true)});_registerComplexSpecialProp("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,p,cssp,pt,plugin){var bp="background-position",cs=(_cs||_getComputedStyle(t,null)),bs=this.format(((cs)?_ieVers?cs.getPropertyValue(bp+"-x")+" "+cs.getPropertyValue(bp+"-y"):cs.getPropertyValue(bp):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),es=this.format(e),ba,ea,i,pct,overlap,src;if((bs.indexOf("%")!==-1)!==(es.indexOf("%")!==-1)&&es.split(",").length<2){src=_getStyle(t,"backgroundImage").replace(_urlExp,"");if(src&&src!=="none"){ba=bs.split(" ");ea=es.split(" ");_tempImg.setAttribute("src",src);i=2;while(--i>-1){bs=ba[i];pct=(bs.indexOf("%")!==-1);if(pct!==(ea[i].indexOf("%")!==-1)){overlap=(i===0)?t.offsetWidth-_tempImg.width:t.offsetHeight-_tempImg.height;ba[i]=pct?(parseFloat(bs)/100*overlap)+"px":(parseFloat(bs)/overlap*100)+"%";}}
bs=ba.join(" ");}}
return this.parseComplex(t.style,bs,es,pt,plugin);},formatter:_parsePosition});_registerComplexSpecialProp("backgroundSize",{defaultValue:"0 0",formatter:_parsePosition});_registerComplexSpecialProp("perspective",{defaultValue:"0px",prefix:true});_registerComplexSpecialProp("perspectiveOrigin",{defaultValue:"50% 50%",prefix:true});_registerComplexSpecialProp("transformStyle",{prefix:true});_registerComplexSpecialProp("backfaceVisibility",{prefix:true});_registerComplexSpecialProp("userSelect",{prefix:true});_registerComplexSpecialProp("margin",{parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});_registerComplexSpecialProp("padding",{parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});_registerComplexSpecialProp("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,p,cssp,pt,plugin){var b,cs,delim;if(_ieVers<9){cs=t.currentStyle;delim=_ieVers<8?" ":",";b="rect("+cs.clipTop+delim+cs.clipRight+delim+cs.clipBottom+delim+cs.clipLeft+")";e=this.format(e).split(",").join(delim);}else{b=this.format(_getStyle(t,this.p,_cs,false,this.dflt));e=this.format(e);}
return this.parseComplex(t.style,b,e,pt,plugin);}});_registerComplexSpecialProp("textShadow",{defaultValue:"0px 0px 0px #999",color:true,multi:true});_registerComplexSpecialProp("autoRound,strictUnits",{parser:function(t,e,p,cssp,pt){return pt;}});_registerComplexSpecialProp("border",{defaultValue:"0px solid #000",parser:function(t,e,p,cssp,pt,plugin){return this.parseComplex(t.style,this.format(_getStyle(t,"borderTopWidth",_cs,false,"0px")+" "+_getStyle(t,"borderTopStyle",_cs,false,"solid")+" "+_getStyle(t,"borderTopColor",_cs,false,"#000")),this.format(e),pt,plugin);},color:true,formatter:function(v){var a=v.split(" ");return a[0]+" "+(a[1]||"solid")+" "+(v.match(_colorExp)||["#000"])[0];}});_registerComplexSpecialProp("borderWidth",{parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")});_registerComplexSpecialProp("float,cssFloat,styleFloat",{parser:function(t,e,p,cssp,pt,plugin){var s=t.style,prop=("cssFloat"in s)?"cssFloat":"styleFloat";return new CSSPropTween(s,prop,0,0,pt,-1,p,false,0,s[prop],e);}});var _setIEOpacityRatio=function(v){var t=this.t,filters=t.filter||_getStyle(this.data,"filter")||"",val=(this.s+this.c*v)|0,skip;if(val===100){if(filters.indexOf("atrix(")===-1&&filters.indexOf("radient(")===-1&&filters.indexOf("oader(")===-1){t.removeAttribute("filter");skip=(!_getStyle(this.data,"filter"));}else{t.filter=filters.replace(_alphaFilterExp,"");skip=true;}}
if(!skip){if(this.xn1){t.filter=filters=filters||("alpha(opacity="+val+")");}
if(filters.indexOf("pacity")===-1){if(val!==0||!this.xn1){t.filter=filters+" alpha(opacity="+val+")";}}else{t.filter=filters.replace(_opacityExp,"opacity="+val);}}};_registerComplexSpecialProp("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,p,cssp,pt,plugin){var b=parseFloat(_getStyle(t,"opacity",_cs,false,"1")),style=t.style,isAutoAlpha=(p==="autoAlpha");if(typeof(e)==="string"&&e.charAt(1)==="="){e=((e.charAt(0)==="-")?-1:1)*parseFloat(e.substr(2))+b;}
if(isAutoAlpha&&b===1&&_getStyle(t,"visibility",_cs)==="hidden"&&e!==0){b=0;}
if(_supportsOpacity){pt=new CSSPropTween(style,"opacity",b,e-b,pt);}else{pt=new CSSPropTween(style,"opacity",b*100,(e-b)*100,pt);pt.xn1=isAutoAlpha?1:0;style.zoom=1;pt.type=2;pt.b="alpha(opacity="+pt.s+")";pt.e="alpha(opacity="+(pt.s+pt.c)+")";pt.data=t;pt.plugin=plugin;pt.setRatio=_setIEOpacityRatio;}
if(isAutoAlpha){pt=new CSSPropTween(style,"visibility",0,0,pt,-1,null,false,0,((b!==0)?"inherit":"hidden"),((e===0)?"hidden":"inherit"));pt.xs0="inherit";cssp._overwriteProps.push(pt.n);cssp._overwriteProps.push(p);}
return pt;}});var _removeProp=function(s,p){if(p){if(s.removeProperty){if(p.substr(0,2)==="ms"||p.substr(0,6)==="webkit"){p="-"+p;}
s.removeProperty(p.replace(_capsExp,"-$1").toLowerCase());}else{s.removeAttribute(p);}}},_setClassNameRatio=function(v){this.t._gsClassPT=this;if(v===1||v===0){this.t.setAttribute("class",(v===0)?this.b:this.e);var mpt=this.data,s=this.t.style;while(mpt){if(!mpt.v){_removeProp(s,mpt.p);}else{s[mpt.p]=mpt.v;}
mpt=mpt._next;}
if(v===1&&this.t._gsClassPT===this){this.t._gsClassPT=null;}}else if(this.t.getAttribute("class")!==this.e){this.t.setAttribute("class",this.e);}};_registerComplexSpecialProp("className",{parser:function(t,e,p,cssp,pt,plugin,vars){var b=t.getAttribute("class")||"",cssText=t.style.cssText,difData,bs,cnpt,cnptLookup,mpt;pt=cssp._classNamePT=new CSSPropTween(t,p,0,0,pt,2);pt.setRatio=_setClassNameRatio;pt.pr=-11;_hasPriority=true;pt.b=b;bs=_getAllStyles(t,_cs);cnpt=t._gsClassPT;if(cnpt){cnptLookup={};mpt=cnpt.data;while(mpt){cnptLookup[mpt.p]=1;mpt=mpt._next;}
cnpt.setRatio(1);}
t._gsClassPT=pt;pt.e=(e.charAt(1)!=="=")?e:b.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+((e.charAt(0)==="+")?" "+e.substr(2):"");t.setAttribute("class",pt.e);difData=_cssDif(t,bs,_getAllStyles(t),vars,cnptLookup);t.setAttribute("class",b);pt.data=difData.firstMPT;t.style.cssText=cssText;pt=pt.xfirst=cssp.parse(t,difData.difs,pt,plugin);return pt;}});var _setClearPropsRatio=function(v){if(v===1||v===0)if(this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var s=this.t.style,transformParse=_specialProps.transform.parse,a,p,i,clearTransform,transform;if(this.e==="all"){s.cssText="";clearTransform=true;}else{a=this.e.split(" ").join("").split(",");i=a.length;while(--i>-1){p=a[i];if(_specialProps[p]){if(_specialProps[p].parse===transformParse){clearTransform=true;}else{p=(p==="transformOrigin")?_transformOriginProp:_specialProps[p].p;}}
_removeProp(s,p);}}
if(clearTransform){_removeProp(s,_transformProp);transform=this.t._gsTransform;if(transform){if(transform.svg){this.t.removeAttribute("data-svg-origin");this.t.removeAttribute("transform");}
delete this.t._gsTransform;}}}};_registerComplexSpecialProp("clearProps",{parser:function(t,e,p,cssp,pt){pt=new CSSPropTween(t,p,0,0,pt,2);pt.setRatio=_setClearPropsRatio;pt.e=e;pt.pr=-10;pt.data=cssp._tween;_hasPriority=true;return pt;}});p="bezier,throwProps,physicsProps,physics2D".split(",");i=p.length;while(i--){_registerPluginProp(p[i]);}
p=CSSPlugin.prototype;p._firstPT=p._lastParsedTransform=p._transform=null;p._onInitTween=function(target,vars,tween){if(!target.nodeType){return false;}
this._target=target;this._tween=tween;this._vars=vars;_autoRound=vars.autoRound;_hasPriority=false;_suffixMap=vars.suffixMap||CSSPlugin.suffixMap;_cs=_getComputedStyle(target,"");_overwriteProps=this._overwriteProps;var style=target.style,v,pt,pt2,first,last,next,zIndex,tpt,threeD;if(_reqSafariFix)if(style.zIndex===""){v=_getStyle(target,"zIndex",_cs);if(v==="auto"||v===""){this._addLazySet(style,"zIndex",0);}}
if(typeof(vars)==="string"){first=style.cssText;v=_getAllStyles(target,_cs);style.cssText=first+";"+vars;v=_cssDif(target,v,_getAllStyles(target)).difs;if(!_supportsOpacity&&_opacityValExp.test(vars)){v.opacity=parseFloat(RegExp.$1);}
vars=v;style.cssText=first;}
if(vars.className){this._firstPT=pt=_specialProps.className.parse(target,vars.className,"className",this,null,null,vars);}else{this._firstPT=pt=this.parse(target,vars,null);}
if(this._transformType){threeD=(this._transformType===3);if(!_transformProp){style.zoom=1;}else if(_isSafari){_reqSafariFix=true;if(style.zIndex===""){zIndex=_getStyle(target,"zIndex",_cs);if(zIndex==="auto"||zIndex===""){this._addLazySet(style,"zIndex",0);}}
if(_isSafariLT6){this._addLazySet(style,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(threeD?"visible":"hidden"));}}
pt2=pt;while(pt2&&pt2._next){pt2=pt2._next;}
tpt=new CSSPropTween(target,"transform",0,0,null,2);this._linkCSSP(tpt,null,pt2);tpt.setRatio=_transformProp?_setTransformRatio:_setIETransformRatio;tpt.data=this._transform||_getTransform(target,_cs,true);tpt.tween=tween;tpt.pr=-1;_overwriteProps.pop();}
if(_hasPriority){while(pt){next=pt._next;pt2=first;while(pt2&&pt2.pr>pt.pr){pt2=pt2._next;}
if((pt._prev=pt2?pt2._prev:last)){pt._prev._next=pt;}else{first=pt;}
if((pt._next=pt2)){pt2._prev=pt;}else{last=pt;}
pt=next;}
this._firstPT=first;}
return true;};p.parse=function(target,vars,pt,plugin){var style=target.style,p,sp,bn,en,bs,es,bsfx,esfx,isStr,rel;for(p in vars){es=vars[p];sp=_specialProps[p];if(sp){pt=sp.parse(target,es,p,this,pt,plugin,vars);}else{bs=_getStyle(target,p,_cs)+"";isStr=(typeof(es)==="string");if(p==="color"||p==="fill"||p==="stroke"||p.indexOf("Color")!==-1||(isStr&&_rgbhslExp.test(es))){if(!isStr){es=_parseColor(es);es=((es.length>3)?"rgba(":"rgb(")+es.join(",")+")";}
pt=_parseComplex(style,p,bs,es,true,"transparent",pt,0,plugin);}else if(isStr&&_complexExp.test(es)){pt=_parseComplex(style,p,bs,es,true,null,pt,0,plugin);}else{bn=parseFloat(bs);bsfx=(bn||bn===0)?bs.substr((bn+"").length):"";if(bs===""||bs==="auto"){if(p==="width"||p==="height"){bn=_getDimension(target,p,_cs);bsfx="px";}else if(p==="left"||p==="top"){bn=_calculateOffset(target,p,_cs);bsfx="px";}else{bn=(p!=="opacity")?0:1;bsfx="";}}
rel=(isStr&&es.charAt(1)==="=");if(rel){en=parseInt(es.charAt(0)+"1",10);es=es.substr(2);en*=parseFloat(es);esfx=es.replace(_suffixExp,"");}else{en=parseFloat(es);esfx=isStr?es.replace(_suffixExp,""):"";}
if(esfx===""){esfx=(p in _suffixMap)?_suffixMap[p]:bsfx;}
es=(en||en===0)?(rel?en+bn:en)+esfx:vars[p];if(bsfx!==esfx)if(esfx!=="")if(en||en===0)if(bn){bn=_convertToPixels(target,p,bn,bsfx);if(esfx==="%"){bn/=_convertToPixels(target,p,100,"%")/100;if(vars.strictUnits!==true){bs=bn+"%";}}else if(esfx==="em"||esfx==="rem"||esfx==="vw"||esfx==="vh"){bn/=_convertToPixels(target,p,1,esfx);}else if(esfx!=="px"){en=_convertToPixels(target,p,en,esfx);esfx="px";}
if(rel)if(en||en===0){es=(en+bn)+esfx;}}
if(rel){en+=bn;}
if((bn||bn===0)&&(en||en===0)){pt=new CSSPropTween(style,p,bn,en-bn,pt,0,p,(_autoRound!==false&&(esfx==="px"||p==="zIndex")),0,bs,es);pt.xs0=esfx;}else if(style[p]===undefined||!es&&(es+""==="NaN"||es==null)){_log("invalid "+p+" tween value: "+vars[p]);}else{pt=new CSSPropTween(style,p,en||bn||0,0,pt,-1,p,false,0,bs,es);pt.xs0=(es==="none"&&(p==="display"||p.indexOf("Style")!==-1))?bs:es;}}}
if(plugin)if(pt&&!pt.plugin){pt.plugin=plugin;}}
return pt;};p.setRatio=function(v){var pt=this._firstPT,min=0.000001,val,str,i;if(v===1&&(this._tween._time===this._tween._duration||this._tween._time===0)){while(pt){if(pt.type!==2){if(pt.r&&pt.type!==-1){val=Math.round(pt.s+pt.c);if(!pt.type){pt.t[pt.p]=val+pt.xs0;}else if(pt.type===1){i=pt.l;str=pt.xs0+val+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}
pt.t[pt.p]=str;}}else{pt.t[pt.p]=pt.e;}}else{pt.setRatio(v);}
pt=pt._next;}}else if(v||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-0.000001){while(pt){val=pt.c*v+pt.s;if(pt.r){val=Math.round(val);}else if(val<min)if(val>-min){val=0;}
if(!pt.type){pt.t[pt.p]=val+pt.xs0;}else if(pt.type===1){i=pt.l;if(i===2){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2;}else if(i===3){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3;}else if(i===4){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3+pt.xn3+pt.xs4;}else if(i===5){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3+pt.xn3+pt.xs4+pt.xn4+pt.xs5;}else{str=pt.xs0+val+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}
pt.t[pt.p]=str;}}else if(pt.type===-1){pt.t[pt.p]=pt.xs0;}else if(pt.setRatio){pt.setRatio(v);}
pt=pt._next;}}else{while(pt){if(pt.type!==2){pt.t[pt.p]=pt.b;}else{pt.setRatio(v);}
pt=pt._next;}}};p._enableTransforms=function(threeD){this._transform=this._transform||_getTransform(this._target,_cs,true);this._transformType=(!(this._transform.svg&&_useSVGTransformAttr)&&(threeD||this._transformType===3))?3:2;};var lazySet=function(v){this.t[this.p]=this.e;this.data._linkCSSP(this,this._next,null,true);};p._addLazySet=function(t,p,v){var pt=this._firstPT=new CSSPropTween(t,p,0,0,this._firstPT,2);pt.e=v;pt.setRatio=lazySet;pt.data=this;};p._linkCSSP=function(pt,next,prev,remove){if(pt){if(next){next._prev=pt;}
if(pt._next){pt._next._prev=pt._prev;}
if(pt._prev){pt._prev._next=pt._next;}else if(this._firstPT===pt){this._firstPT=pt._next;remove=true;}
if(prev){prev._next=pt;}else if(!remove&&this._firstPT===null){this._firstPT=pt;}
pt._next=next;pt._prev=prev;}
return pt;};p._kill=function(lookup){var copy=lookup,pt,p,xfirst;if(lookup.autoAlpha||lookup.alpha){copy={};for(p in lookup){copy[p]=lookup[p];}
copy.opacity=1;if(copy.autoAlpha){copy.visibility=1;}}
if(lookup.className&&(pt=this._classNamePT)){xfirst=pt.xfirst;if(xfirst&&xfirst._prev){this._linkCSSP(xfirst._prev,pt._next,xfirst._prev._prev);}else if(xfirst===this._firstPT){this._firstPT=pt._next;}
if(pt._next){this._linkCSSP(pt._next,pt._next._next,xfirst._prev);}
this._classNamePT=null;}
return TweenPlugin.prototype._kill.call(this,copy);};var _getChildStyles=function(e,props,targets){var children,i,child,type;if(e.slice){i=e.length;while(--i>-1){_getChildStyles(e[i],props,targets);}
return;}
children=e.childNodes;i=children.length;while(--i>-1){child=children[i];type=child.type;if(child.style){props.push(_getAllStyles(child));if(targets){targets.push(child);}}
if((type===1||type===9||type===11)&&child.childNodes.length){_getChildStyles(child,props,targets);}}};CSSPlugin.cascadeTo=function(target,duration,vars){var tween=TweenLite.to(target,duration,vars),results=[tween],b=[],e=[],targets=[],_reservedProps=TweenLite._internals.reservedProps,i,difs,p,from;target=tween._targets||tween.target;_getChildStyles(target,b,targets);tween.render(duration,true,true);_getChildStyles(target,e);tween.render(0,true,true);tween._enabled(true);i=targets.length;while(--i>-1){difs=_cssDif(targets[i],b[i],e[i]);if(difs.firstMPT){difs=difs.difs;for(p in vars){if(_reservedProps[p]){difs[p]=vars[p];}}
from={};for(p in difs){from[p]=b[i][p];}
results.push(TweenLite.fromTo(targets[i],duration,from,difs));}}
return results;};TweenPlugin.activate([CSSPlugin]);return CSSPlugin;},true);(function(){var RoundPropsPlugin=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(target,value,tween){this._tween=tween;return true;}}),_roundLinkedList=function(node){while(node){if(!node.f&&!node.blob){node.r=1;}
node=node._next;}},p=RoundPropsPlugin.prototype;p._onInitAllProps=function(){var tween=this._tween,rp=(tween.vars.roundProps.join)?tween.vars.roundProps:tween.vars.roundProps.split(","),i=rp.length,lookup={},rpt=tween._propLookup.roundProps,prop,pt,next;while(--i>-1){lookup[rp[i]]=1;}
i=rp.length;while(--i>-1){prop=rp[i];pt=tween._firstPT;while(pt){next=pt._next;if(pt.pg){pt.t._roundProps(lookup,true);}else if(pt.n===prop){if(pt.f===2&&pt.t){_roundLinkedList(pt.t._firstPT);}else{this._add(pt.t,prop,pt.s,pt.c);if(next){next._prev=pt._prev;}
if(pt._prev){pt._prev._next=next;}else if(tween._firstPT===pt){tween._firstPT=next;}
pt._next=pt._prev=null;tween._propLookup[prop]=rpt;}}
pt=next;}}
return false;};p._add=function(target,p,s,c){this._addTween(target,p,s,s+c,p,true);this._overwriteProps.push(p);};}());(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(target,value,tween){var p;if(typeof(target.setAttribute)!=="function"){return false;}
for(p in value){this._addTween(target,"setAttribute",target.getAttribute(p)+"",value[p]+"",p,false,p);this._overwriteProps.push(p);}
return true;}});}());_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(target,value,tween){if(typeof(value)!=="object"){value={rotation:value};}
this.finals={};var cap=(value.useRadians===true)?Math.PI*2:360,min=0.000001,p,v,start,end,dif,split;for(p in value){if(p!=="useRadians"){split=(value[p]+"").split("_");v=split[0];start=parseFloat((typeof(target[p])!=="function")?target[p]:target[((p.indexOf("set")||typeof(target["get"+p.substr(3)])!=="function")?p:"get"+p.substr(3))]());end=this.finals[p]=(typeof(v)==="string"&&v.charAt(1)==="=")?start+parseInt(v.charAt(0)+"1",10)*Number(v.substr(2)):Number(v)||0;dif=end-start;if(split.length){v=split.join("_");if(v.indexOf("short")!==-1){dif=dif%cap;if(dif!==dif%(cap/2)){dif=(dif<0)?dif+cap:dif-cap;}}
if(v.indexOf("_cw")!==-1&&dif<0){dif=((dif+cap*9999999999)%cap)-((dif/cap)|0)*cap;}else if(v.indexOf("ccw")!==-1&&dif>0){dif=((dif-cap*9999999999)%cap)-((dif/cap)|0)*cap;}}
if(dif>min||dif<-min){this._addTween(target,p,start,start+dif,p);this._overwriteProps.push(p);}}}
return true;},set:function(ratio){var pt;if(ratio!==1){this._super.setRatio.call(this,ratio);}else{pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](this.finals[pt.p]);}else{pt.t[pt.p]=this.finals[pt.p];}
pt=pt._next;}}}})._autoCSS=true;_gsScope._gsDefine("easing.Back",["easing.Ease"],function(Ease){var w=(_gsScope.GreenSockGlobals||_gsScope),gs=w.com.greensock,_2PI=Math.PI*2,_HALF_PI=Math.PI/2,_class=gs._class,_create=function(n,f){var C=_class("easing."+n,function(){},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;return C;},_easeReg=Ease.register||function(){},_wrap=function(name,EaseOut,EaseIn,EaseInOut,aliases){var C=_class("easing."+name,{easeOut:new EaseOut(),easeIn:new EaseIn(),easeInOut:new EaseInOut()},true);_easeReg(C,name);return C;},EasePoint=function(time,value,next){this.t=time;this.v=value;if(next){this.next=next;next.prev=this;this.c=next.v-value;this.gap=next.t-time;}},_createBack=function(n,f){var C=_class("easing."+n,function(overshoot){this._p1=(overshoot||overshoot===0)?overshoot:1.70158;this._p2=this._p1*1.525;},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;p.config=function(overshoot){return new C(overshoot);};return C;},Back=_wrap("Back",_createBack("BackOut",function(p){return((p=p-1)*p*((this._p1+1)*p+this._p1)+1);}),_createBack("BackIn",function(p){return p*p*((this._p1+1)*p-this._p1);}),_createBack("BackInOut",function(p){return((p*=2)<1)?0.5*p*p*((this._p2+1)*p-this._p2):0.5*((p-=2)*p*((this._p2+1)*p+this._p2)+2);})),SlowMo=_class("easing.SlowMo",function(linearRatio,power,yoyoMode){power=(power||power===0)?power:0.7;if(linearRatio==null){linearRatio=0.7;}else if(linearRatio>1){linearRatio=1;}
this._p=(linearRatio!==1)?power:0;this._p1=(1-linearRatio)/2;this._p2=linearRatio;this._p3=this._p1+this._p2;this._calcEnd=(yoyoMode===true);},true),p=SlowMo.prototype=new Ease(),SteppedEase,RoughEase,_createElastic;p.constructor=SlowMo;p.getRatio=function(p){var r=p+(0.5-p)*this._p;if(p<this._p1){return this._calcEnd?1-((p=1-(p/this._p1))*p):r-((p=1-(p/this._p1))*p*p*p*r);}else if(p>this._p3){return this._calcEnd?1-(p=(p-this._p3)/this._p1)*p:r+((p-r)*(p=(p-this._p3)/this._p1)*p*p*p);}
return this._calcEnd?1:r;};SlowMo.ease=new SlowMo(0.7,0.7);p.config=SlowMo.config=function(linearRatio,power,yoyoMode){return new SlowMo(linearRatio,power,yoyoMode);};SteppedEase=_class("easing.SteppedEase",function(steps){steps=steps||1;this._p1=1/steps;this._p2=steps+1;},true);p=SteppedEase.prototype=new Ease();p.constructor=SteppedEase;p.getRatio=function(p){if(p<0){p=0;}else if(p>=1){p=0.999999999;}
return((this._p2*p)>>0)*this._p1;};p.config=SteppedEase.config=function(steps){return new SteppedEase(steps);};RoughEase=_class("easing.RoughEase",function(vars){vars=vars||{};var taper=vars.taper||"none",a=[],cnt=0,points=(vars.points||20)|0,i=points,randomize=(vars.randomize!==false),clamp=(vars.clamp===true),template=(vars.template instanceof Ease)?vars.template:null,strength=(typeof(vars.strength)==="number")?vars.strength*0.4:0.4,x,y,bump,invX,obj,pnt;while(--i>-1){x=randomize?Math.random():(1/points)*i;y=template?template.getRatio(x):x;if(taper==="none"){bump=strength;}else if(taper==="out"){invX=1-x;bump=invX*invX*strength;}else if(taper==="in"){bump=x*x*strength;}else if(x<0.5){invX=x*2;bump=invX*invX*0.5*strength;}else{invX=(1-x)*2;bump=invX*invX*0.5*strength;}
if(randomize){y+=(Math.random()*bump)-(bump*0.5);}else if(i%2){y+=bump*0.5;}else{y-=bump*0.5;}
if(clamp){if(y>1){y=1;}else if(y<0){y=0;}}
a[cnt++]={x:x,y:y};}
a.sort(function(a,b){return a.x-b.x;});pnt=new EasePoint(1,1,null);i=points;while(--i>-1){obj=a[i];pnt=new EasePoint(obj.x,obj.y,pnt);}
this._prev=new EasePoint(0,0,(pnt.t!==0)?pnt:pnt.next);},true);p=RoughEase.prototype=new Ease();p.constructor=RoughEase;p.getRatio=function(p){var pnt=this._prev;if(p>pnt.t){while(pnt.next&&p>=pnt.t){pnt=pnt.next;}
pnt=pnt.prev;}else{while(pnt.prev&&p<=pnt.t){pnt=pnt.prev;}}
this._prev=pnt;return(pnt.v+((p-pnt.t)/pnt.gap)*pnt.c);};p.config=function(vars){return new RoughEase(vars);};RoughEase.ease=new RoughEase();_wrap("Bounce",_create("BounceOut",function(p){if(p<1/2.75){return 7.5625*p*p;}else if(p<2/2.75){return 7.5625*(p-=1.5/2.75)*p+0.75;}else if(p<2.5/2.75){return 7.5625*(p-=2.25/2.75)*p+0.9375;}
return 7.5625*(p-=2.625/2.75)*p+0.984375;}),_create("BounceIn",function(p){if((p=1-p)<1/2.75){return 1-(7.5625*p*p);}else if(p<2/2.75){return 1-(7.5625*(p-=1.5/2.75)*p+0.75);}else if(p<2.5/2.75){return 1-(7.5625*(p-=2.25/2.75)*p+0.9375);}
return 1-(7.5625*(p-=2.625/2.75)*p+0.984375);}),_create("BounceInOut",function(p){var invert=(p<0.5);if(invert){p=1-(p*2);}else{p=(p*2)-1;}
if(p<1/2.75){p=7.5625*p*p;}else if(p<2/2.75){p=7.5625*(p-=1.5/2.75)*p+0.75;}else if(p<2.5/2.75){p=7.5625*(p-=2.25/2.75)*p+0.9375;}else{p=7.5625*(p-=2.625/2.75)*p+0.984375;}
return invert?(1-p)*0.5:p*0.5+0.5;}));_wrap("Circ",_create("CircOut",function(p){return Math.sqrt(1-(p=p-1)*p);}),_create("CircIn",function(p){return-(Math.sqrt(1-(p*p))-1);}),_create("CircInOut",function(p){return((p*=2)<1)?-0.5*(Math.sqrt(1-p*p)-1):0.5*(Math.sqrt(1-(p-=2)*p)+1);}));_createElastic=function(n,f,def){var C=_class("easing."+n,function(amplitude,period){this._p1=(amplitude>=1)?amplitude:1;this._p2=(period||def)/(amplitude<1?amplitude:1);this._p3=this._p2/_2PI*(Math.asin(1/this._p1)||0);this._p2=_2PI/this._p2;},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;p.config=function(amplitude,period){return new C(amplitude,period);};return C;};_wrap("Elastic",_createElastic("ElasticOut",function(p){return this._p1*Math.pow(2,-10*p)*Math.sin((p-this._p3)*this._p2)+1;},0.3),_createElastic("ElasticIn",function(p){return-(this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2));},0.3),_createElastic("ElasticInOut",function(p){return((p*=2)<1)?-0.5*(this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(p-=1))*Math.sin((p-this._p3)*this._p2)*0.5+1;},0.45));_wrap("Expo",_create("ExpoOut",function(p){return 1-Math.pow(2,-10*p);}),_create("ExpoIn",function(p){return Math.pow(2,10*(p-1))-0.001;}),_create("ExpoInOut",function(p){return((p*=2)<1)?0.5*Math.pow(2,10*(p-1)):0.5*(2-Math.pow(2,-10*(p-1)));}));_wrap("Sine",_create("SineOut",function(p){return Math.sin(p*_HALF_PI);}),_create("SineIn",function(p){return-Math.cos(p*_HALF_PI)+1;}),_create("SineInOut",function(p){return-0.5*(Math.cos(Math.PI*p)-1);}));_class("easing.EaseLookup",{find:function(s){return Ease.map[s];}},true);_easeReg(w.SlowMo,"SlowMo","ease,");_easeReg(RoughEase,"RoughEase","ease,");_easeReg(SteppedEase,"SteppedEase","ease,");return Back;},true);});if(_gsScope._gsDefine){_gsScope._gsQueue.pop()();}
(function(window,moduleName){"use strict";var _globals=window.GreenSockGlobals=window.GreenSockGlobals||window;if(_globals.TweenLite){return;}
var _namespace=function(ns){var a=ns.split("."),p=_globals,i;for(i=0;i<a.length;i++){p[a[i]]=p=p[a[i]]||{};}
return p;},gs=_namespace("com.greensock"),_tinyNum=0.0000000001,_slice=function(a){var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++])){}
return b;},_emptyFunc=function(){},_isArray=(function(){var toString=Object.prototype.toString,array=toString.call([]);return function(obj){return obj!=null&&(obj instanceof Array||(typeof(obj)==="object"&&!!obj.push&&toString.call(obj)===array));};}()),a,i,p,_ticker,_tickerActive,_defLookup={},Definition=function(ns,dependencies,func,global){this.sc=(_defLookup[ns])?_defLookup[ns].sc:[];_defLookup[ns]=this;this.gsClass=null;this.func=func;var _classes=[];this.check=function(init){var i=dependencies.length,missing=i,cur,a,n,cl,hasModule;while(--i>-1){if((cur=_defLookup[dependencies[i]]||new Definition(dependencies[i],[])).gsClass){_classes[i]=cur.gsClass;missing--;}else if(init){cur.sc.push(this);}}
if(missing===0&&func){a=("com.greensock."+ns).split(".");n=a.pop();cl=_namespace(a.join("."))[n]=this.gsClass=func.apply(func,_classes);if(global){_globals[n]=cl;hasModule=(typeof(module)!=="undefined"&&module.exports);if(!hasModule&&"function"==="function"&&__webpack_require__(16)){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return cl;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else if(ns===moduleName&&hasModule){module.exports=cl;}}
for(i=0;i<this.sc.length;i++){this.sc[i].check();}}};this.check(true);},_gsDefine=window._gsDefine=function(ns,dependencies,func,global){return new Definition(ns,dependencies,func,global);},_class=gs._class=function(ns,func,global){func=func||function(){};_gsDefine(ns,[],function(){return func;},global);return func;};_gsDefine.globals=_globals;var _baseParams=[0,0,1,1],_blankArray=[],Ease=_class("easing.Ease",function(func,extraParams,type,power){this._func=func;this._type=type||0;this._power=power||0;this._params=extraParams?_baseParams.concat(extraParams):_baseParams;},true),_easeMap=Ease.map={},_easeReg=Ease.register=function(ease,names,types,create){var na=names.split(","),i=na.length,ta=(types||"easeIn,easeOut,easeInOut").split(","),e,name,j,type;while(--i>-1){name=na[i];e=create?_class("easing."+name,null,true):gs.easing[name]||{};j=ta.length;while(--j>-1){type=ta[j];_easeMap[name+"."+type]=_easeMap[type+name]=e[type]=ease.getRatio?ease:ease[type]||new ease();}}};p=Ease.prototype;p._calcEnd=false;p.getRatio=function(p){if(this._func){this._params[0]=p;return this._func.apply(null,this._params);}
var t=this._type,pw=this._power,r=(t===1)?1-p:(t===2)?p:(p<0.5)?p*2:(1-p)*2;if(pw===1){r*=r;}else if(pw===2){r*=r*r;}else if(pw===3){r*=r*r*r;}else if(pw===4){r*=r*r*r*r;}
return(t===1)?1-r:(t===2)?r:(p<0.5)?r/2:1-(r/2);};a=["Linear","Quad","Cubic","Quart","Quint,Strong"];i=a.length;while(--i>-1){p=a[i]+",Power"+i;_easeReg(new Ease(null,null,1,i),p,"easeOut",true);_easeReg(new Ease(null,null,2,i),p,"easeIn"+((i===0)?",easeNone":""));_easeReg(new Ease(null,null,3,i),p,"easeInOut");}
_easeMap.linear=gs.easing.Linear.easeIn;_easeMap.swing=gs.easing.Quad.easeInOut;var EventDispatcher=_class("events.EventDispatcher",function(target){this._listeners={};this._eventTarget=target||this;});p=EventDispatcher.prototype;p.addEventListener=function(type,callback,scope,useParam,priority){priority=priority||0;var list=this._listeners[type],index=0,listener,i;if(list==null){this._listeners[type]=list=[];}
i=list.length;while(--i>-1){listener=list[i];if(listener.c===callback&&listener.s===scope){list.splice(i,1);}else if(index===0&&listener.pr<priority){index=i+1;}}
list.splice(index,0,{c:callback,s:scope,up:useParam,pr:priority});if(this===_ticker&&!_tickerActive){_ticker.wake();}};p.removeEventListener=function(type,callback){var list=this._listeners[type],i;if(list){i=list.length;while(--i>-1){if(list[i].c===callback){list.splice(i,1);return;}}}};p.dispatchEvent=function(type){var list=this._listeners[type],i,t,listener;if(list){i=list.length;t=this._eventTarget;while(--i>-1){listener=list[i];if(listener){if(listener.up){listener.c.call(listener.s||t,{type:type,target:t});}else{listener.c.call(listener.s||t);}}}}};var _reqAnimFrame=window.requestAnimationFrame,_cancelAnimFrame=window.cancelAnimationFrame,_getTime=Date.now||function(){return new Date().getTime();},_lastUpdate=_getTime();a=["ms","moz","webkit","o"];i=a.length;while(--i>-1&&!_reqAnimFrame){_reqAnimFrame=window[a[i]+"RequestAnimationFrame"];_cancelAnimFrame=window[a[i]+"CancelAnimationFrame"]||window[a[i]+"CancelRequestAnimationFrame"];}
_class("Ticker",function(fps,useRAF){var _self=this,_startTime=_getTime(),_useRAF=(useRAF!==false&&_reqAnimFrame)?"auto":false,_lagThreshold=500,_adjustedLag=33,_tickWord="tick",_fps,_req,_id,_gap,_nextTime,_tick=function(manual){var elapsed=_getTime()-_lastUpdate,overlap,dispatch;if(elapsed>_lagThreshold){_startTime+=elapsed-_adjustedLag;}
_lastUpdate+=elapsed;_self.time=(_lastUpdate-_startTime)/1000;overlap=_self.time-_nextTime;if(!_fps||overlap>0||manual===true){_self.frame++;_nextTime+=overlap+(overlap>=_gap?0.004:_gap-overlap);dispatch=true;}
if(manual!==true){_id=_req(_tick);}
if(dispatch){_self.dispatchEvent(_tickWord);}};EventDispatcher.call(_self);_self.time=_self.frame=0;_self.tick=function(){_tick(true);};_self.lagSmoothing=function(threshold,adjustedLag){_lagThreshold=threshold||(1/_tinyNum);_adjustedLag=Math.min(adjustedLag,_lagThreshold,0);};_self.sleep=function(){if(_id==null){return;}
if(!_useRAF||!_cancelAnimFrame){clearTimeout(_id);}else{_cancelAnimFrame(_id);}
_req=_emptyFunc;_id=null;if(_self===_ticker){_tickerActive=false;}};_self.wake=function(seamless){if(_id!==null){_self.sleep();}else if(seamless){_startTime+=-_lastUpdate+(_lastUpdate=_getTime());}else if(_self.frame>10){_lastUpdate=_getTime()-_lagThreshold+5;}
_req=(_fps===0)?_emptyFunc:(!_useRAF||!_reqAnimFrame)?function(f){return setTimeout(f,((_nextTime-_self.time)*1000+1)|0);}:_reqAnimFrame;if(_self===_ticker){_tickerActive=true;}
_tick(2);};_self.fps=function(value){if(!arguments.length){return _fps;}
_fps=value;_gap=1/(_fps||60);_nextTime=this.time+_gap;_self.wake();};_self.useRAF=function(value){if(!arguments.length){return _useRAF;}
_self.sleep();_useRAF=value;_self.fps(_fps);};_self.fps(fps);setTimeout(function(){if(_useRAF==="auto"&&_self.frame<5&&document.visibilityState!=="hidden"){_self.useRAF(false);}},1500);});p=gs.Ticker.prototype=new gs.events.EventDispatcher();p.constructor=gs.Ticker;var Animation=_class("core.Animation",function(duration,vars){this.vars=vars=vars||{};this._duration=this._totalDuration=duration||0;this._delay=Number(vars.delay)||0;this._timeScale=1;this._active=(vars.immediateRender===true);this.data=vars.data;this._reversed=(vars.reversed===true);if(!_rootTimeline){return;}
if(!_tickerActive){_ticker.wake();}
var tl=this.vars.useFrames?_rootFramesTimeline:_rootTimeline;tl.add(this,tl._time);if(this.vars.paused){this.paused(true);}});_ticker=Animation.ticker=new gs.Ticker();p=Animation.prototype;p._dirty=p._gc=p._initted=p._paused=false;p._totalTime=p._time=0;p._rawPrevTime=-1;p._next=p._last=p._onUpdate=p._timeline=p.timeline=null;p._paused=false;var _checkTimeout=function(){if(_tickerActive&&_getTime()-_lastUpdate>2000){_ticker.wake();}
setTimeout(_checkTimeout,2000);};_checkTimeout();p.play=function(from,suppressEvents){if(from!=null){this.seek(from,suppressEvents);}
return this.reversed(false).paused(false);};p.pause=function(atTime,suppressEvents){if(atTime!=null){this.seek(atTime,suppressEvents);}
return this.paused(true);};p.resume=function(from,suppressEvents){if(from!=null){this.seek(from,suppressEvents);}
return this.paused(false);};p.seek=function(time,suppressEvents){return this.totalTime(Number(time),suppressEvents!==false);};p.restart=function(includeDelay,suppressEvents){return this.reversed(false).paused(false).totalTime(includeDelay?-this._delay:0,(suppressEvents!==false),true);};p.reverse=function(from,suppressEvents){if(from!=null){this.seek((from||this.totalDuration()),suppressEvents);}
return this.reversed(true).paused(false);};p.render=function(time,suppressEvents,force){};p.invalidate=function(){this._time=this._totalTime=0;this._initted=this._gc=false;this._rawPrevTime=-1;if(this._gc||!this.timeline){this._enabled(true);}
return this;};p.isActive=function(){var tl=this._timeline,startTime=this._startTime,rawTime;return(!tl||(!this._gc&&!this._paused&&tl.isActive()&&(rawTime=tl.rawTime())>=startTime&&rawTime<startTime+this.totalDuration()/this._timeScale));};p._enabled=function(enabled,ignoreTimeline){if(!_tickerActive){_ticker.wake();}
this._gc=!enabled;this._active=this.isActive();if(ignoreTimeline!==true){if(enabled&&!this.timeline){this._timeline.add(this,this._startTime-this._delay);}else if(!enabled&&this.timeline){this._timeline._remove(this,true);}}
return false;};p._kill=function(vars,target){return this._enabled(false,false);};p.kill=function(vars,target){this._kill(vars,target);return this;};p._uncache=function(includeSelf){var tween=includeSelf?this:this.timeline;while(tween){tween._dirty=true;tween=tween.timeline;}
return this;};p._swapSelfInParams=function(params){var i=params.length,copy=params.concat();while(--i>-1){if(params[i]==="{self}"){copy[i]=this;}}
return copy;};p._callback=function(type){var v=this.vars;v[type].apply(v[type+"Scope"]||v.callbackScope||this,v[type+"Params"]||_blankArray);};p.eventCallback=function(type,callback,params,scope){if((type||"").substr(0,2)==="on"){var v=this.vars;if(arguments.length===1){return v[type];}
if(callback==null){delete v[type];}else{v[type]=callback;v[type+"Params"]=(_isArray(params)&&params.join("").indexOf("{self}")!==-1)?this._swapSelfInParams(params):params;v[type+"Scope"]=scope;}
if(type==="onUpdate"){this._onUpdate=callback;}}
return this;};p.delay=function(value){if(!arguments.length){return this._delay;}
if(this._timeline.smoothChildTiming){this.startTime(this._startTime+value-this._delay);}
this._delay=value;return this;};p.duration=function(value){if(!arguments.length){this._dirty=false;return this._duration;}
this._duration=this._totalDuration=value;this._uncache(true);if(this._timeline.smoothChildTiming)if(this._time>0)if(this._time<this._duration)if(value!==0){this.totalTime(this._totalTime*(value/this._duration),true);}
return this;};p.totalDuration=function(value){this._dirty=false;return(!arguments.length)?this._totalDuration:this.duration(value);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}
if(this._dirty){this.totalDuration();}
return this.totalTime((value>this._duration)?this._duration:value,suppressEvents);};p.totalTime=function(time,suppressEvents,uncapped){if(!_tickerActive){_ticker.wake();}
if(!arguments.length){return this._totalTime;}
if(this._timeline){if(time<0&&!uncapped){time+=this.totalDuration();}
if(this._timeline.smoothChildTiming){if(this._dirty){this.totalDuration();}
var totalDuration=this._totalDuration,tl=this._timeline;if(time>totalDuration&&!uncapped){time=totalDuration;}
this._startTime=(this._paused?this._pauseTime:tl._time)-((!this._reversed?time:totalDuration-time)/this._timeScale);if(!tl._dirty){this._uncache(false);}
if(tl._timeline){while(tl._timeline){if(tl._timeline._time!==(tl._startTime+tl._totalTime)/tl._timeScale){tl.totalTime(tl._totalTime,true);}
tl=tl._timeline;}}}
if(this._gc){this._enabled(true,false);}
if(this._totalTime!==time||this._duration===0){if(_lazyTweens.length){_lazyRender();}
this.render(time,suppressEvents,false);if(_lazyTweens.length){_lazyRender();}}}
return this;};p.progress=p.totalProgress=function(value,suppressEvents){var duration=this.duration();return(!arguments.length)?(duration?this._time/duration:this.ratio):this.totalTime(duration*value,suppressEvents);};p.startTime=function(value){if(!arguments.length){return this._startTime;}
if(value!==this._startTime){this._startTime=value;if(this.timeline)if(this.timeline._sortChildren){this.timeline.add(this,value-this._delay);}}
return this;};p.endTime=function(includeRepeats){return this._startTime+((includeRepeats!=false)?this.totalDuration():this.duration())/this._timeScale;};p.timeScale=function(value){if(!arguments.length){return this._timeScale;}
value=value||_tinyNum;if(this._timeline&&this._timeline.smoothChildTiming){var pauseTime=this._pauseTime,t=(pauseTime||pauseTime===0)?pauseTime:this._timeline.totalTime();this._startTime=t-((t-this._startTime)*this._timeScale/value);}
this._timeScale=value;return this._uncache(false);};p.reversed=function(value){if(!arguments.length){return this._reversed;}
if(value!=this._reversed){this._reversed=value;this.totalTime(((this._timeline&&!this._timeline.smoothChildTiming)?this.totalDuration()-this._totalTime:this._totalTime),true);}
return this;};p.paused=function(value){if(!arguments.length){return this._paused;}
var tl=this._timeline,raw,elapsed;if(value!=this._paused)if(tl){if(!_tickerActive&&!value){_ticker.wake();}
raw=tl.rawTime();elapsed=raw-this._pauseTime;if(!value&&tl.smoothChildTiming){this._startTime+=elapsed;this._uncache(false);}
this._pauseTime=value?raw:null;this._paused=value;this._active=this.isActive();if(!value&&elapsed!==0&&this._initted&&this.duration()){raw=tl.smoothChildTiming?this._totalTime:(raw-this._startTime)/this._timeScale;this.render(raw,(raw===this._totalTime),true);}}
if(this._gc&&!value){this._enabled(true,false);}
return this;};var SimpleTimeline=_class("core.SimpleTimeline",function(vars){Animation.call(this,0,vars);this.autoRemoveChildren=this.smoothChildTiming=true;});p=SimpleTimeline.prototype=new Animation();p.constructor=SimpleTimeline;p.kill()._gc=false;p._first=p._last=p._recent=null;p._sortChildren=false;p.add=p.insert=function(child,position,align,stagger){var prevTween,st;child._startTime=Number(position||0)+child._delay;if(child._paused)if(this!==child._timeline){child._pauseTime=child._startTime+((this.rawTime()-child._startTime)/child._timeScale);}
if(child.timeline){child.timeline._remove(child,true);}
child.timeline=child._timeline=this;if(child._gc){child._enabled(true,true);}
prevTween=this._last;if(this._sortChildren){st=child._startTime;while(prevTween&&prevTween._startTime>st){prevTween=prevTween._prev;}}
if(prevTween){child._next=prevTween._next;prevTween._next=child;}else{child._next=this._first;this._first=child;}
if(child._next){child._next._prev=child;}else{this._last=child;}
child._prev=prevTween;this._recent=child;if(this._timeline){this._uncache(true);}
return this;};p._remove=function(tween,skipDisable){if(tween.timeline===this){if(!skipDisable){tween._enabled(false,true);}
if(tween._prev){tween._prev._next=tween._next;}else if(this._first===tween){this._first=tween._next;}
if(tween._next){tween._next._prev=tween._prev;}else if(this._last===tween){this._last=tween._prev;}
tween._next=tween._prev=tween.timeline=null;if(tween===this._recent){this._recent=this._last;}
if(this._timeline){this._uncache(true);}}
return this;};p.render=function(time,suppressEvents,force){var tween=this._first,next;this._totalTime=this._time=this._rawPrevTime=time;while(tween){next=tween._next;if(tween._active||(time>=tween._startTime&&!tween._paused)){if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render(((!tween._dirty)?tween._totalDuration:tween.totalDuration())-((time-tween._startTime)*tween._timeScale),suppressEvents,force);}}
tween=next;}};p.rawTime=function(){if(!_tickerActive){_ticker.wake();}
return this._totalTime;};var TweenLite=_class("TweenLite",function(target,duration,vars){Animation.call(this,duration,vars);this.render=TweenLite.prototype.render;if(target==null){throw "Cannot tween a null target.";}
this.target=target=(typeof(target)!=="string")?target:TweenLite.selector(target)||target;var isSelector=(target.jquery||(target.length&&target!==window&&target[0]&&(target[0]===window||(target[0].nodeType&&target[0].style&&!target.nodeType)))),overwrite=this.vars.overwrite,i,targ,targets;this._overwrite=overwrite=(overwrite==null)?_overwriteLookup[TweenLite.defaultOverwrite]:(typeof(overwrite)==="number")?overwrite>>0:_overwriteLookup[overwrite];if((isSelector||target instanceof Array||(target.push&&_isArray(target)))&&typeof(target[0])!=="number"){this._targets=targets=_slice(target);this._propLookup=[];this._siblings=[];for(i=0;i<targets.length;i++){targ=targets[i];if(!targ){targets.splice(i--,1);continue;}else if(typeof(targ)==="string"){targ=targets[i--]=TweenLite.selector(targ);if(typeof(targ)==="string"){targets.splice(i+1,1);}
continue;}else if(targ.length&&targ!==window&&targ[0]&&(targ[0]===window||(targ[0].nodeType&&targ[0].style&&!targ.nodeType))){targets.splice(i--,1);this._targets=targets=targets.concat(_slice(targ));continue;}
this._siblings[i]=_register(targ,this,false);if(overwrite===1)if(this._siblings[i].length>1){_applyOverwrite(targ,this,null,1,this._siblings[i]);}}}else{this._propLookup={};this._siblings=_register(target,this,false);if(overwrite===1)if(this._siblings.length>1){_applyOverwrite(target,this,null,1,this._siblings);}}
if(this.vars.immediateRender||(duration===0&&this._delay===0&&this.vars.immediateRender!==false)){this._time=-_tinyNum;this.render(Math.min(0,-this._delay));}},true),_isSelector=function(v){return(v&&v.length&&v!==window&&v[0]&&(v[0]===window||(v[0].nodeType&&v[0].style&&!v.nodeType)));},_autoCSS=function(vars,target){var css={},p;for(p in vars){if(!_reservedProps[p]&&(!(p in target)||p==="transform"||p==="x"||p==="y"||p==="width"||p==="height"||p==="className"||p==="border")&&(!_plugins[p]||(_plugins[p]&&_plugins[p]._autoCSS))){css[p]=vars[p];delete vars[p];}}
vars.css=css;};p=TweenLite.prototype=new Animation();p.constructor=TweenLite;p.kill()._gc=false;p.ratio=0;p._firstPT=p._targets=p._overwrittenProps=p._startAt=null;p._notifyPluginsOfEnabled=p._lazy=false;TweenLite.version="1.18.4";TweenLite.defaultEase=p._ease=new Ease(null,null,1,1);TweenLite.defaultOverwrite="auto";TweenLite.ticker=_ticker;TweenLite.autoSleep=120;TweenLite.lagSmoothing=function(threshold,adjustedLag){_ticker.lagSmoothing(threshold,adjustedLag);};TweenLite.selector=window.$||window.jQuery||function(e){var selector=window.$||window.jQuery;if(selector){TweenLite.selector=selector;return selector(e);}
return(typeof(document)==="undefined")?e:(document.querySelectorAll?document.querySelectorAll(e):document.getElementById((e.charAt(0)==="#")?e.substr(1):e));};var _lazyTweens=[],_lazyLookup={},_numbersExp=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,_setRatio=function(v){var pt=this._firstPT,min=0.000001,val;while(pt){val=!pt.blob?pt.c*v+pt.s:v?this.join(""):this.start;if(pt.r){val=Math.round(val);}else if(val<min)if(val>-min){val=0;}
if(!pt.f){pt.t[pt.p]=val;}else if(pt.fp){pt.t[pt.p](pt.fp,val);}else{pt.t[pt.p](val);}
pt=pt._next;}},_blobDif=function(start,end,filter,pt){var a=[start,end],charIndex=0,s="",color=0,startNums,endNums,num,i,l,nonNumbers,currentNum;a.start=start;if(filter){filter(a);start=a[0];end=a[1];}
a.length=0;startNums=start.match(_numbersExp)||[];endNums=end.match(_numbersExp)||[];if(pt){pt._next=null;pt.blob=1;a._firstPT=pt;}
l=endNums.length;for(i=0;i<l;i++){currentNum=endNums[i];nonNumbers=end.substr(charIndex,end.indexOf(currentNum,charIndex)-charIndex);s+=(nonNumbers||!i)?nonNumbers:",";charIndex+=nonNumbers.length;if(color){color=(color+1)%5;}else if(nonNumbers.substr(-5)==="rgba("){color=1;}
if(currentNum===startNums[i]||startNums.length<=i){s+=currentNum;}else{if(s){a.push(s);s="";}
num=parseFloat(startNums[i]);a.push(num);a._firstPT={_next:a._firstPT,t:a,p:a.length-1,s:num,c:((currentNum.charAt(1)==="=")?parseInt(currentNum.charAt(0)+"1",10)*parseFloat(currentNum.substr(2)):(parseFloat(currentNum)-num))||0,f:0,r:(color&&color<4)};}
charIndex+=currentNum.length;}
s+=end.substr(charIndex);if(s){a.push(s);}
a.setRatio=_setRatio;return a;},_addPropTween=function(target,prop,start,end,overwriteProp,round,funcParam,stringFilter){var s=(start==="get")?target[prop]:start,type=typeof(target[prop]),isRelative=(typeof(end)==="string"&&end.charAt(1)==="="),pt={t:target,p:prop,s:s,f:(type==="function"),pg:0,n:overwriteProp||prop,r:round,pr:0,c:isRelative?parseInt(end.charAt(0)+"1",10)*parseFloat(end.substr(2)):(parseFloat(end)-s)||0},blob,getterName;if(type!=="number"){if(type==="function"&&start==="get"){getterName=((prop.indexOf("set")||typeof(target["get"+prop.substr(3)])!=="function")?prop:"get"+prop.substr(3));pt.s=s=funcParam?target[getterName](funcParam):target[getterName]();}
if(typeof(s)==="string"&&(funcParam||isNaN(s))){pt.fp=funcParam;blob=_blobDif(s,end,stringFilter||TweenLite.defaultStringFilter,pt);pt={t:blob,p:"setRatio",s:0,c:1,f:2,pg:0,n:overwriteProp||prop,pr:0};}else if(!isRelative){pt.s=parseFloat(s);pt.c=(parseFloat(end)-pt.s)||0;}}
if(pt.c){if((pt._next=this._firstPT)){pt._next._prev=pt;}
this._firstPT=pt;return pt;}},_internals=TweenLite._internals={isArray:_isArray,isSelector:_isSelector,lazyTweens:_lazyTweens,blobDif:_blobDif},_plugins=TweenLite._plugins={},_tweenLookup=_internals.tweenLookup={},_tweenLookupNum=0,_reservedProps=_internals.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},_overwriteLookup={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},_rootFramesTimeline=Animation._rootFramesTimeline=new SimpleTimeline(),_rootTimeline=Animation._rootTimeline=new SimpleTimeline(),_nextGCFrame=30,_lazyRender=_internals.lazyRender=function(){var i=_lazyTweens.length,tween;_lazyLookup={};while(--i>-1){tween=_lazyTweens[i];if(tween&&tween._lazy!==false){tween.render(tween._lazy[0],tween._lazy[1],true);tween._lazy=false;}}
_lazyTweens.length=0;};_rootTimeline._startTime=_ticker.time;_rootFramesTimeline._startTime=_ticker.frame;_rootTimeline._active=_rootFramesTimeline._active=true;setTimeout(_lazyRender,1);Animation._updateRoot=TweenLite.render=function(){var i,a,p;if(_lazyTweens.length){_lazyRender();}
_rootTimeline.render((_ticker.time-_rootTimeline._startTime)*_rootTimeline._timeScale,false,false);_rootFramesTimeline.render((_ticker.frame-_rootFramesTimeline._startTime)*_rootFramesTimeline._timeScale,false,false);if(_lazyTweens.length){_lazyRender();}
if(_ticker.frame>=_nextGCFrame){_nextGCFrame=_ticker.frame+(parseInt(TweenLite.autoSleep,10)||120);for(p in _tweenLookup){a=_tweenLookup[p].tweens;i=a.length;while(--i>-1){if(a[i]._gc){a.splice(i,1);}}
if(a.length===0){delete _tweenLookup[p];}}
p=_rootTimeline._first;if(!p||p._paused)if(TweenLite.autoSleep&&!_rootFramesTimeline._first&&_ticker._listeners.tick.length===1){while(p&&p._paused){p=p._next;}
if(!p){_ticker.sleep();}}}};_ticker.addEventListener("tick",Animation._updateRoot);var _register=function(target,tween,scrub){var id=target._gsTweenID,a,i;if(!_tweenLookup[id||(target._gsTweenID=id="t"+(_tweenLookupNum++))]){_tweenLookup[id]={target:target,tweens:[]};}
if(tween){a=_tweenLookup[id].tweens;a[(i=a.length)]=tween;if(scrub){while(--i>-1){if(a[i]===tween){a.splice(i,1);}}}}
return _tweenLookup[id].tweens;},_onOverwrite=function(overwrittenTween,overwritingTween,target,killedProps){var func=overwrittenTween.vars.onOverwrite,r1,r2;if(func){r1=func(overwrittenTween,overwritingTween,target,killedProps);}
func=TweenLite.onOverwrite;if(func){r2=func(overwrittenTween,overwritingTween,target,killedProps);}
return(r1!==false&&r2!==false);},_applyOverwrite=function(target,tween,props,mode,siblings){var i,changed,curTween,l;if(mode===1||mode>=4){l=siblings.length;for(i=0;i<l;i++){if((curTween=siblings[i])!==tween){if(!curTween._gc){if(curTween._kill(null,target,tween)){changed=true;}}}else if(mode===5){break;}}
return changed;}
var startTime=tween._startTime+_tinyNum,overlaps=[],oCount=0,zeroDur=(tween._duration===0),globalStart;i=siblings.length;while(--i>-1){if((curTween=siblings[i])===tween||curTween._gc||curTween._paused){}else if(curTween._timeline!==tween._timeline){globalStart=globalStart||_checkOverlap(tween,0,zeroDur);if(_checkOverlap(curTween,globalStart,zeroDur)===0){overlaps[oCount++]=curTween;}}else if(curTween._startTime<=startTime)if(curTween._startTime+curTween.totalDuration()/curTween._timeScale>startTime)if(!((zeroDur||!curTween._initted)&&startTime-curTween._startTime<=0.0000000002)){overlaps[oCount++]=curTween;}}
i=oCount;while(--i>-1){curTween=overlaps[i];if(mode===2)if(curTween._kill(props,target,tween)){changed=true;}
if(mode!==2||(!curTween._firstPT&&curTween._initted)){if(mode!==2&&!_onOverwrite(curTween,tween)){continue;}
if(curTween._enabled(false,false)){changed=true;}}}
return changed;},_checkOverlap=function(tween,reference,zeroDur){var tl=tween._timeline,ts=tl._timeScale,t=tween._startTime;while(tl._timeline){t+=tl._startTime;ts*=tl._timeScale;if(tl._paused){return-100;}
tl=tl._timeline;}
t/=ts;return(t>reference)?t-reference:((zeroDur&&t===reference)||(!tween._initted&&t-reference<2*_tinyNum))?_tinyNum:((t+=tween.totalDuration()/tween._timeScale/ts)>reference+_tinyNum)?0:t-reference-_tinyNum;};p._init=function(){var v=this.vars,op=this._overwrittenProps,dur=this._duration,immediate=!!v.immediateRender,ease=v.ease,i,initPlugins,pt,p,startVars;if(v.startAt){if(this._startAt){this._startAt.render(-1,true);this._startAt.kill();}
startVars={};for(p in v.startAt){startVars[p]=v.startAt[p];}
startVars.overwrite=false;startVars.immediateRender=true;startVars.lazy=(immediate&&v.lazy!==false);startVars.startAt=startVars.delay=null;this._startAt=TweenLite.to(this.target,0,startVars);if(immediate){if(this._time>0){this._startAt=null;}else if(dur!==0){return;}}}else if(v.runBackwards&&dur!==0){if(this._startAt){this._startAt.render(-1,true);this._startAt.kill();this._startAt=null;}else{if(this._time!==0){immediate=false;}
pt={};for(p in v){if(!_reservedProps[p]||p==="autoCSS"){pt[p]=v[p];}}
pt.overwrite=0;pt.data="isFromStart";pt.lazy=(immediate&&v.lazy!==false);pt.immediateRender=immediate;this._startAt=TweenLite.to(this.target,0,pt);if(!immediate){this._startAt._init();this._startAt._enabled(false);if(this.vars.immediateRender){this._startAt=null;}}else if(this._time===0){return;}}}
this._ease=ease=(!ease)?TweenLite.defaultEase:(ease instanceof Ease)?ease:(typeof(ease)==="function")?new Ease(ease,v.easeParams):_easeMap[ease]||TweenLite.defaultEase;if(v.easeParams instanceof Array&&ease.config){this._ease=ease.config.apply(ease,v.easeParams);}
this._easeType=this._ease._type;this._easePower=this._ease._power;this._firstPT=null;if(this._targets){i=this._targets.length;while(--i>-1){if(this._initProps(this._targets[i],(this._propLookup[i]={}),this._siblings[i],(op?op[i]:null))){initPlugins=true;}}}else{initPlugins=this._initProps(this.target,this._propLookup,this._siblings,op);}
if(initPlugins){TweenLite._onPluginEvent("_onInitAllProps",this);}
if(op)if(!this._firstPT)if(typeof(this.target)!=="function"){this._enabled(false,false);}
if(v.runBackwards){pt=this._firstPT;while(pt){pt.s+=pt.c;pt.c=-pt.c;pt=pt._next;}}
this._onUpdate=v.onUpdate;this._initted=true;};p._initProps=function(target,propLookup,siblings,overwrittenProps){var p,i,initPlugins,plugin,pt,v;if(target==null){return false;}
if(_lazyLookup[target._gsTweenID]){_lazyRender();}
if(!this.vars.css)if(target.style)if(target!==window&&target.nodeType)if(_plugins.css)if(this.vars.autoCSS!==false){_autoCSS(this.vars,target);}
for(p in this.vars){v=this.vars[p];if(_reservedProps[p]){if(v)if((v instanceof Array)||(v.push&&_isArray(v)))if(v.join("").indexOf("{self}")!==-1){this.vars[p]=v=this._swapSelfInParams(v,this);}}else if(_plugins[p]&&(plugin=new _plugins[p]())._onInitTween(target,this.vars[p],this)){this._firstPT=pt={_next:this._firstPT,t:plugin,p:"setRatio",s:0,c:1,f:1,n:p,pg:1,pr:plugin._priority};i=plugin._overwriteProps.length;while(--i>-1){propLookup[plugin._overwriteProps[i]]=this._firstPT;}
if(plugin._priority||plugin._onInitAllProps){initPlugins=true;}
if(plugin._onDisable||plugin._onEnable){this._notifyPluginsOfEnabled=true;}
if(pt._next){pt._next._prev=pt;}}else{propLookup[p]=_addPropTween.call(this,target,p,"get",v,p,0,null,this.vars.stringFilter);}}
if(overwrittenProps)if(this._kill(overwrittenProps,target)){return this._initProps(target,propLookup,siblings,overwrittenProps);}
if(this._overwrite>1)if(this._firstPT)if(siblings.length>1)if(_applyOverwrite(target,this,propLookup,this._overwrite,siblings)){this._kill(propLookup,target);return this._initProps(target,propLookup,siblings,overwrittenProps);}
if(this._firstPT)if((this.vars.lazy!==false&&this._duration)||(this.vars.lazy&&!this._duration)){_lazyLookup[target._gsTweenID]=true;}
return initPlugins;};p.render=function(time,suppressEvents,force){var prevTime=this._time,duration=this._duration,prevRawPrevTime=this._rawPrevTime,isComplete,callback,pt,rawPrevTime;if(time>=duration-0.0000001){this._totalTime=this._time=duration;this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1;if(!this._reversed){isComplete=true;callback="onComplete";force=(force||this._timeline.autoRemoveChildren);}
if(duration===0)if(this._initted||!this.vars.lazy||force){if(this._startTime===this._timeline._duration){time=0;}
if(prevRawPrevTime<0||(time<=0&&time>=-0.0000001)||(prevRawPrevTime===_tinyNum&&this.data!=="isPause"))if(prevRawPrevTime!==time){force=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}
this._rawPrevTime=rawPrevTime=(!suppressEvents||time||prevRawPrevTime===time)?time:_tinyNum;}}else if(time<0.0000001){this._totalTime=this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(prevTime!==0||(duration===0&&prevRawPrevTime>0)){callback="onReverseComplete";isComplete=this._reversed;}
if(time<0){this._active=false;if(duration===0)if(this._initted||!this.vars.lazy||force){if(prevRawPrevTime>=0&&!(prevRawPrevTime===_tinyNum&&this.data==="isPause")){force=true;}
this._rawPrevTime=rawPrevTime=(!suppressEvents||time||prevRawPrevTime===time)?time:_tinyNum;}}
if(!this._initted){force=true;}}else{this._totalTime=this._time=time;if(this._easeType){var r=time/duration,type=this._easeType,pow=this._easePower;if(type===1||(type===3&&r>=0.5)){r=1-r;}
if(type===3){r*=2;}
if(pow===1){r*=r;}else if(pow===2){r*=r*r;}else if(pow===3){r*=r*r*r;}else if(pow===4){r*=r*r*r*r;}
if(type===1){this.ratio=1-r;}else if(type===2){this.ratio=r;}else if(time/duration<0.5){this.ratio=r/2;}else{this.ratio=1-(r/2);}}else{this.ratio=this._ease.getRatio(time/duration);}}
if(this._time===prevTime&&!force){return;}else if(!this._initted){this._init();if(!this._initted||this._gc){return;}else if(!force&&this._firstPT&&((this.vars.lazy!==false&&this._duration)||(this.vars.lazy&&!this._duration))){this._time=this._totalTime=prevTime;this._rawPrevTime=prevRawPrevTime;_lazyTweens.push(this);this._lazy=[time,suppressEvents];return;}
if(this._time&&!isComplete){this.ratio=this._ease.getRatio(this._time/duration);}else if(isComplete&&this._ease._calcEnd){this.ratio=this._ease.getRatio((this._time===0)?0:1);}}
if(this._lazy!==false){this._lazy=false;}
if(!this._active)if(!this._paused&&this._time!==prevTime&&time>=0){this._active=true;}
if(prevTime===0){if(this._startAt){if(time>=0){this._startAt.render(time,suppressEvents,force);}else if(!callback){callback="_dummyGS";}}
if(this.vars.onStart)if(this._time!==0||duration===0)if(!suppressEvents){this._callback("onStart");}}
pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](pt.c*this.ratio+pt.s);}else{pt.t[pt.p]=pt.c*this.ratio+pt.s;}
pt=pt._next;}
if(this._onUpdate){if(time<0)if(this._startAt&&time!==-0.0001){this._startAt.render(time,suppressEvents,force);}
if(!suppressEvents)if(this._time!==prevTime||isComplete||force){this._callback("onUpdate");}}
if(callback)if(!this._gc||force){if(time<0&&this._startAt&&!this._onUpdate&&time!==-0.0001){this._startAt.render(time,suppressEvents,force);}
if(isComplete){if(this._timeline.autoRemoveChildren){this._enabled(false,false);}
this._active=false;}
if(!suppressEvents&&this.vars[callback]){this._callback(callback);}
if(duration===0&&this._rawPrevTime===_tinyNum&&rawPrevTime!==_tinyNum){this._rawPrevTime=0;}}};p._kill=function(vars,target,overwritingTween){if(vars==="all"){vars=null;}
if(vars==null)if(target==null||target===this.target){this._lazy=false;return this._enabled(false,false);}
target=(typeof(target)!=="string")?(target||this._targets||this.target):TweenLite.selector(target)||target;var simultaneousOverwrite=(overwritingTween&&this._time&&overwritingTween._startTime===this._startTime&&this._timeline===overwritingTween._timeline),i,overwrittenProps,p,pt,propLookup,changed,killProps,record,killed;if((_isArray(target)||_isSelector(target))&&typeof(target[0])!=="number"){i=target.length;while(--i>-1){if(this._kill(vars,target[i],overwritingTween)){changed=true;}}}else{if(this._targets){i=this._targets.length;while(--i>-1){if(target===this._targets[i]){propLookup=this._propLookup[i]||{};this._overwrittenProps=this._overwrittenProps||[];overwrittenProps=this._overwrittenProps[i]=vars?this._overwrittenProps[i]||{}:"all";break;}}}else if(target!==this.target){return false;}else{propLookup=this._propLookup;overwrittenProps=this._overwrittenProps=vars?this._overwrittenProps||{}:"all";}
if(propLookup){killProps=vars||propLookup;record=(vars!==overwrittenProps&&overwrittenProps!=="all"&&vars!==propLookup&&(typeof(vars)!=="object"||!vars._tempKill));if(overwritingTween&&(TweenLite.onOverwrite||this.vars.onOverwrite)){for(p in killProps){if(propLookup[p]){if(!killed){killed=[];}
killed.push(p);}}
if((killed||!vars)&&!_onOverwrite(this,overwritingTween,target,killed)){return false;}}
for(p in killProps){if((pt=propLookup[p])){if(simultaneousOverwrite){if(pt.f){pt.t[pt.p](pt.s);}else{pt.t[pt.p]=pt.s;}
changed=true;}
if(pt.pg&&pt.t._kill(killProps)){changed=true;}
if(!pt.pg||pt.t._overwriteProps.length===0){if(pt._prev){pt._prev._next=pt._next;}else if(pt===this._firstPT){this._firstPT=pt._next;}
if(pt._next){pt._next._prev=pt._prev;}
pt._next=pt._prev=null;}
delete propLookup[p];}
if(record){overwrittenProps[p]=1;}}
if(!this._firstPT&&this._initted){this._enabled(false,false);}}}
return changed;};p.invalidate=function(){if(this._notifyPluginsOfEnabled){TweenLite._onPluginEvent("_onDisable",this);}
this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null;this._notifyPluginsOfEnabled=this._active=this._lazy=false;this._propLookup=(this._targets)?{}:[];Animation.prototype.invalidate.call(this);if(this.vars.immediateRender){this._time=-_tinyNum;this.render(Math.min(0,-this._delay));}
return this;};p._enabled=function(enabled,ignoreTimeline){if(!_tickerActive){_ticker.wake();}
if(enabled&&this._gc){var targets=this._targets,i;if(targets){i=targets.length;while(--i>-1){this._siblings[i]=_register(targets[i],this,true);}}else{this._siblings=_register(this.target,this,true);}}
Animation.prototype._enabled.call(this,enabled,ignoreTimeline);if(this._notifyPluginsOfEnabled)if(this._firstPT){return TweenLite._onPluginEvent((enabled?"_onEnable":"_onDisable"),this);}
return false;};TweenLite.to=function(target,duration,vars){return new TweenLite(target,duration,vars);};TweenLite.from=function(target,duration,vars){vars.runBackwards=true;vars.immediateRender=(vars.immediateRender!=false);return new TweenLite(target,duration,vars);};TweenLite.fromTo=function(target,duration,fromVars,toVars){toVars.startAt=fromVars;toVars.immediateRender=(toVars.immediateRender!=false&&fromVars.immediateRender!=false);return new TweenLite(target,duration,toVars);};TweenLite.delayedCall=function(delay,callback,params,scope,useFrames){return new TweenLite(callback,0,{delay:delay,onComplete:callback,onCompleteParams:params,callbackScope:scope,onReverseComplete:callback,onReverseCompleteParams:params,immediateRender:false,lazy:false,useFrames:useFrames,overwrite:0});};TweenLite.set=function(target,vars){return new TweenLite(target,0,vars);};TweenLite.getTweensOf=function(target,onlyActive){if(target==null){return[];}
target=(typeof(target)!=="string")?target:TweenLite.selector(target)||target;var i,a,j,t;if((_isArray(target)||_isSelector(target))&&typeof(target[0])!=="number"){i=target.length;a=[];while(--i>-1){a=a.concat(TweenLite.getTweensOf(target[i],onlyActive));}
i=a.length;while(--i>-1){t=a[i];j=i;while(--j>-1){if(t===a[j]){a.splice(i,1);}}}}else{a=_register(target).concat();i=a.length;while(--i>-1){if(a[i]._gc||(onlyActive&&!a[i].isActive())){a.splice(i,1);}}}
return a;};TweenLite.killTweensOf=TweenLite.killDelayedCallsTo=function(target,onlyActive,vars){if(typeof(onlyActive)==="object"){vars=onlyActive;onlyActive=false;}
var a=TweenLite.getTweensOf(target,onlyActive),i=a.length;while(--i>-1){a[i]._kill(vars,target);}};var TweenPlugin=_class("plugins.TweenPlugin",function(props,priority){this._overwriteProps=(props||"").split(",");this._propName=this._overwriteProps[0];this._priority=priority||0;this._super=TweenPlugin.prototype;},true);p=TweenPlugin.prototype;TweenPlugin.version="1.18.0";TweenPlugin.API=2;p._firstPT=null;p._addTween=_addPropTween;p.setRatio=_setRatio;p._kill=function(lookup){var a=this._overwriteProps,pt=this._firstPT,i;if(lookup[this._propName]!=null){this._overwriteProps=[];}else{i=a.length;while(--i>-1){if(lookup[a[i]]!=null){a.splice(i,1);}}}
while(pt){if(lookup[pt.n]!=null){if(pt._next){pt._next._prev=pt._prev;}
if(pt._prev){pt._prev._next=pt._next;pt._prev=null;}else if(this._firstPT===pt){this._firstPT=pt._next;}}
pt=pt._next;}
return false;};p._roundProps=function(lookup,value){var pt=this._firstPT;while(pt){if(lookup[this._propName]||(pt.n!=null&&lookup[pt.n.split(this._propName+"_").join("")])){pt.r=value;}
pt=pt._next;}};TweenLite._onPluginEvent=function(type,tween){var pt=tween._firstPT,changed,pt2,first,last,next;if(type==="_onInitAllProps"){while(pt){next=pt._next;pt2=first;while(pt2&&pt2.pr>pt.pr){pt2=pt2._next;}
if((pt._prev=pt2?pt2._prev:last)){pt._prev._next=pt;}else{first=pt;}
if((pt._next=pt2)){pt2._prev=pt;}else{last=pt;}
pt=next;}
pt=tween._firstPT=first;}
while(pt){if(pt.pg)if(typeof(pt.t[type])==="function")if(pt.t[type]()){changed=true;}
pt=pt._next;}
return changed;};TweenPlugin.activate=function(plugins){var i=plugins.length;while(--i>-1){if(plugins[i].API===TweenPlugin.API){_plugins[(new plugins[i]())._propName]=plugins[i];}}
return true;};_gsDefine.plugin=function(config){if(!config||!config.propName||!config.init||!config.API){throw "illegal plugin definition.";}
var propName=config.propName,priority=config.priority||0,overwriteProps=config.overwriteProps,map={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},Plugin=_class("plugins."+propName.charAt(0).toUpperCase()+propName.substr(1)+"Plugin",function(){TweenPlugin.call(this,propName,priority);this._overwriteProps=overwriteProps||[];},(config.global===true)),p=Plugin.prototype=new TweenPlugin(propName),prop;p.constructor=Plugin;Plugin.API=config.API;for(prop in map){if(typeof(config[prop])==="function"){p[map[prop]]=config[prop];}}
Plugin.version=config.version;TweenPlugin.activate([Plugin]);return Plugin;};a=window._gsQueue;if(a){for(i=0;i<a.length;i++){a[i]();}
for(p in _defLookup){if(!_defLookup[p].func){window.console.log("GSAP encountered missing dependency: com.greensock."+p);}}}
_tickerActive=false;})((typeof(module)!=="undefined"&&module.exports&&typeof(global)!=="undefined")?global:this||window,"TweenMax");}.call(exports,(function(){return this;}())))},function(module,exports){(function(__webpack_amd_options__){module.exports=__webpack_amd_options__;}.call(exports,{}))}]);