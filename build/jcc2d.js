!function(t,i){"object"==typeof exports?module.exports=i():"function"==typeof define&&define.amd?define(function(){return t.JC=i()}):t.JC=i()}(this,function(){function t(t){return Object.prototype.toString.call(t)}function i(){this.global={x:-1e5,y:-1e5},this.target=null,this.originalEvent=null,this.cancleBubble=!1,this.ratio=1,this.type=""}function e(){this.touchstarted=!1,this.mouseDowned=!1,this.listeners={}}function s(t){g.Eventer.call(this),this.texture=null,this.width=0,this.height=0,this.loaded=!1,this.dispose(t);var i=this;this.on("load",function(){i.width=i.texture.width,i.height=i.texture.height})}function n(){g.Eventer.call(this),this.textures={},this._total=0,this._failed=0,this._received=0}function o(t){this.element=t.element||{},this.duration=t.duration||300,this.living=!0,this.onCompelete=t.onCompelete||null,this.onUpdate=t.onUpdate||null,this.infinity=t.infinity||!1,this.alternate=t.alternate||!1,this.ease=t.ease||"easeBoth",this.repeats=t.repeats||0,this.delay=t.delay||0,this.progress=0-this.delay,this.timeScale=t.timeScale||1,this.paused=!1}function h(t){g.Animate.call(this,t),this.ATRS=t.from,this.ATRE=t.to}function r(t){g.Animate.call(this,t),this._keyframes=t.keys,this._keyIndex=0,this._direction=1,this._keyConfig=t.keyConfig,this.configKey()}function a(t,i){this.element=t,this.living=!1,this.onCompelete=null,this.infinity=!1,this.alternate=!1,this.repeats=0,this.animations=i.animations||{},this.index=0,this.direction=1,this.frames=[],this.sy=i.sy||0,this.sx=i.sx||0,this.fillMode=0,this.fps=16,this.paused=!1,this.pt=0,this.nt=0}function c(t){g.Animate.call(this,t),this.points=t.points,this.attachNormal=t.attachNormal||!1,this.sDeg=!1,this.tDeg=0,this.pDeg=0}function p(){this.start=!1,this.animates=[]}function u(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0}function l(){this._ready=!0,this.visible=!0,this.worldAlpha=1,this.alpha=1,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.rotation=0,this.rotationCache=0,this._sr=0,this._cr=1,this.x=0,this.y=0,this.pivotX=0,this.pivotY=0,this.mask=null,this.parent=null,this.worldTransform=new u,this.event=new g.Eventer,this.passEvent=!1,this.bound=[],this.Animator=new g.Animator}function d(){g.DisplayObject.call(this),this.cds=[],this.timeScale=1,this.paused=!1}function f(t){if(g.Container.call(this),this.texture=t.texture,this.texture.loaded)this.upTexture(t);else{var i=this;this._ready=!1,this.texture.on("load",function(){i.upTexture(t),i._ready=!0})}this.MovieClip=new g.MovieClip(this,t)}function y(){g.Container.call(this),this.cacheCanvas=null}function m(t,i,e){g.Container.call(this),this.text=t,this.font=i,this.color=e,this.textAlign="center",this.textBaseline="middle",this.outline=0,this.lineWidth=1,this.US=!1,this.UF=!0}function v(t,i){g.Container.call(this),this.type="stage",this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.cds=[],this.canvas.style.backgroundColor=i||"transparent",this.autoClear=!0,this.setStyle=!1,this.width=this.canvas.width,this.height=this.canvas.height,"imageSmoothingEnabled"in this.ctx?this.ctx.imageSmoothingEnabled=!0:"webkitImageSmoothingEnabled"in this.ctx?this.ctx.webkitImageSmoothingEnabled=!0:"mozImageSmoothingEnabled"in this.ctx?this.ctx.mozImageSmoothingEnabled=!0:"oImageSmoothingEnabled"in this.ctx&&(this.ctx.oImageSmoothingEnabled=!0),this.initEvent(),this.pt=-1}var g=window.JC||{};return function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),n=window.setTimeout(function(){i(e+s)},s);return t=e+s,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),window.RAF=window.requestAnimFrame=window.requestAnimationFrame,window.CAF=window.cancelAnimationFrame}(),g.copyJSON=function(t){return JSON.parse(JSON.stringify(t))},g.DTR=Math.PI/180,g.isArray=function(){var i=t([]);return function(t){return Object.prototype.toString.call(t)===i}}(),g.isObject=function(){var i=t({});return function(t){return Object.prototype.toString.call(t)===i}}(),g.isString=function(){var i=t("s");return function(t){return Object.prototype.toString.call(t)===i}}(),g.isNumber=function(){var i=t(1);return function(t){return Object.prototype.toString.call(t)===i}}(),g.isFunction=function(){var i=t(function(){});return function(t){return Object.prototype.toString.call(t)===i}}(),g.random=function(t,i){return g.isArray(t)?t[~~(Math.random()*t.length)]:(g.isNumber(i)||(i=t||1,t=0),t+Math.random()*(i-t))},g.euclideanModulo=function(t,i){return(t%i+i)%i},g.TWEEN={easeBoth:function(t,i,e,s){return(t/=s/2)<1?e/2*t*t+i:-e/2*(--t*(t-2)-1)+i},extend:function(t){if(t)for(var i in t)"extend"!==i&&t[i]&&(this[i]=t[i])}},g.InteractionData=i,e.prototype.on=function(t,i){this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(i)},e.prototype.off=function(t,i){if(this.listeners[t]){var e=this.listeners[t].length;if(i)for(;e--;)cbs[t][e]===i&&cbs[t].splice(e,1);else cbs[t].length=0}},e.prototype.emit=function(t){if(void 0!==this.listeners){var i=this.listeners,e=i[t.type];if(void 0!==e){var s,n=e.length;for(s=0;s<n;s++)e[s].call(this,t)}}},g.Eventer=e,g.Texture=s,s.prototype=Object.create(g.Eventer.prototype),s.prototype.dispose=function(t){var i=this;"string"==typeof t&&(this.texture=new Image,this.texture.crossOrigin="",this.texture.src=t,this.texture.onload=function(){i.loaded=!0,i.emit({type:"load"})},this.texture.onerror=function(){i.emit({type:"error"})}),t instanceof Image&&t.width*t.height>0&&(this.texture=t,this.width=t.width,this.height=t.height)},g.Loader=n,n.prototype=Object.create(g.Eventer.prototype),n.prototype.load=function(t){function i(t){t.on("load",function(){e._received++,e.emit({type:"update"}),e._received+e._failed>=e._total&&e.emit({type:"compelete"})}),t.on("error",function(){e._failed++,e.emit({type:"update"}),e._received+e._failed>=e._total&&e.emit({type:"compelete"})})}var e=this;this._total=0,this._failed=0,this._received=0;for(var n in t)this._total++,this.textures[n]=new s(t[n]),i(this.textures[n]);return this},n.prototype.getById=function(t){return this.textures[t]},Object.defineProperty(s.prototype,"progress",{get:function(){return 0===this._total?1:(this._received+this._failed)/this._total}}),g.loaderUtil=function(t){return(new g.Loader).load(t)},g.Animate=o,o.prototype.nextPose=function(){var t={};for(var i in this.ATRE)t[i]=g.TWEEN[this.ease](this.progress,this.ATRS[i],this.ATRE[i]-this.ATRS[i],this.duration),void 0!==this.element[i]&&(this.element[i]=t[i]);return t},o.prototype.pause=function(){this.paused=!0},o.prototype.start=function(){this.paused=!1},o.prototype.stop=function(){this.progress=this.duration},o.prototype.cancle=function(){this.living=!1},g.Transition=h,h.prototype=Object.create(g.Animate.prototype),h.prototype.constructor=g.Transition,h.prototype.update=function(t){if(!this.paused&&this.living)if(this.progress+=this.timeScale*t,this.progress<this.duration){if(this.progress<0)return;var i=this.nextPose();this.onUpdate&&this.onUpdate(i,this.progress/this.duration)}else if(this.element.setVal(this.ATRE),this.onUpdate&&this.onUpdate(this.ATRE,1),this.repeats>0||this.infinity)if(this.repeats>0&&--this.repeats,this.progress=0,this.alternate){var e=g.copyJSON(this.ATRS);this.ATRS=g.copyJSON(this.ATRE),this.ATRE=e}else this.element.setVal(this.ATRS);else this.living=!1,this.onCompelete&&this.onCompelete()},g.Animation=r,r.prototype=Object.create(g.Animate.prototype),r.prototype.constructor=g.Animation,r.prototype.configKey=function(){this.ATRS=this._keyframes[this._keyIndex],this._keyIndex+=this._direction,this.ATRE=this._keyframes[this._keyIndex];var t=this._keyConfig[Math.min(this._keyIndex,this._keyIndex-this._direction)]||{};this.ease=t.ease||this.ease,this.duration=t.duration||this.duration,this.progress=0},r.prototype.update=function(t){if(!this.paused&&this.living)if(this.progress+=this.timeScale*t,this.progress<this.duration){if(this.progress<0)return;var i=this.nextPose();this.onUpdate&&this.onUpdate(i,this.progress/this.duration,this._keyIndex)}else this.element.setVal(this.ATRE),this.onUpdate&&this.onUpdate(this.ATRE,1,this._keyIndex),this._keyIndex<this._keyframes.length-1&&this._keyIndex>0?this.configKey():this.repeats>0||this.infinity?(this.repeats>0&&--this.repeats,this.alternate?this._direction*=-1:this._keyIndex=0,this.configKey()):(this.living=!1,this.onCompelete&&this.onCompelete())},g.MovieClip=a,a.prototype.update=function(t){if(!this.paused&&this.living&&(this.nt+=t,!(this.nt-this.pt<this.interval))){this.pt=this.nt;var i=this.index+this.direction;i<this.frames.length&&i>=0?this.index=i:this.repeats>0||this.infinity?(this.repeats>0&&--this.repeats,this.alternate?(this.direction*=-1,this.index+=this.direction):(this.direction=1,this.index=0)):(this.living=!1,this.index=this.fillMode,this.onCompelete&&this.onCompelete(),this.next&&this.next())}},a.prototype.getFramePos=function(){var t={x:this.sx,y:this.sy},i=this.frames[this.index];if(i>0){var e=this.element._textureW/this.element.width>>0,s=this.sx/this.element.width>>0,n=this.sy/this.element.height>>0,o=n+(s+i)/e>>0,h=(s+i)%e;t.x=h*this.element.width,t.y=o*this.element.height}return t},a.prototype.playMovie=function(t){this.next=null;var i=this.format(t.movie);g.isArray(i)&&(this.frames=i,this.index=0,this.direction=1,this.fillMode=t.fillMode||0,this.fps=t.fps||this.fps,this.infinity=t.infinity||!1,this.alternate=t.alternate||!1,this.repeats=t.repeats||0,this.living=!0,this.onCompelete=t.onCompelete||null)},a.prototype.format=function(t){if(g.isString(t)){var i=this.animations[t];return i?this.format(i):(console.warn("%c JC.MovieClip warn %c: you didn`t config %c"+t+"%c in animations ","color: #f98165; background: #80a89e","color: #80a89e; background: #cad9d5;","color: #f98165; background: #cad9d5","color: #80a89e; background: #cad9d5"),!1)}if(g.isArray(t))return t;if(g.isObject(t)){for(var e=[],s=t.start;s<=t.end;s++)e.push(s);if(t.next&&this.animations[t.next]){var n=this;this.next=function(){n.playMovie({movie:this.animations[t.next],infinity:!0})}}return e}},a.prototype.pause=function(){this.paused=!0},a.prototype.start=function(){this.paused=!1},a.prototype.cancle=function(){this.living=!1},Object.defineProperty(a.prototype,"interval",{get:function(){return this.fps>0?1e3/this.fps>>0:16}}),g.PathMotion=c,c.prototype=Object.create(g.Animate.prototype),c.prototype.constructor=g.PathMotion,c.prototype.update=function(t){if(!this.paused&&this.living)if(this.progress+=this.timeScale*t,this.progress<this.duration){if(this.progress<0)return;var i=this.nextPose();this.onUpdate&&this.onUpdate(i,this.progress/this.duration)}else if(this.element.setVal(this.ATRE),this.onUpdate&&this.onUpdate(this.ATRE,1),this.repeats>0||this.infinity)if(this.repeats>0&&--this.repeats,this.progress=0,this.alternate){var e=g.copyJSON(this.ATRS);this.ATRS=g.copyJSON(this.ATRE),this.ATRE=e}else this.element.setVal(this.ATRS);else this.living=!1,this.onCompelete&&this.onCompelete()},c.prototype.nextPose=function(){var t={},i=g.TWEEN[this.ease](this.progress,0,1,this.duration),e=this.getPoint(i,this.points);return t.x=e.x,t.y=e.y,this.attachNormal&&(t.rotate=this.decomposeRotate(i)),t},c.prototype.getPoint=function(t,i){var e=i,s=e.length,n=1-t,o=e.slice(0,s-1),h=e.slice(1),r={};if(s>3){var a=this.getPoint(t,o),c=this.getPoint(t,h);return r.x=n*a.x+t*c.x,r.y=n*a.y+t*c.y,r}return r.x=n*n*i[0].x+2*t*n*i[1].x+t*t*i[2].x,r.y=n*n*i[0].y+2*t*n*i[1].y+t*t*i[2].y,r},c.prototype.decomposeRotate=function(t){var i=this.getPoint(t,this.points),e=this.getPoint(t+.01,this.points);i.xxxxx+e.x},g.Animator=p,p.prototype.update=function(t){for(var i=0;i<this.animates.length;i++)this.animates[i].living||this.animates.splice(i,1),this.animates[i]&&this.animates[i].update(t)},p.prototype.fromTo=function(t){var i=new g.Transition(t);return this.animates.push(i),i},p.prototype.keyFrames=function(t){var i=new g.Animation(t);return this.animates.push(i),i},g.Matrix=u,u.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},u.prototype.toArray=function(t){this.array||(this.array=new g.Float32Array(9));var i=this.array;return t?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i},u.prototype.apply=function(t,i){return i=i||{},i.x=this.a*t.x+this.c*t.y+this.tx,i.y=this.b*t.x+this.d*t.y+this.ty,i},u.prototype.applyInverse=function(t,i){var e=1/(this.a*this.d+this.c*-this.b);return i.x=this.d*e*t.x+-this.c*e*t.y+(this.ty*this.c-this.tx*this.d)*e,i.y=this.a*e*t.y+-this.b*e*t.x+(-this.ty*this.a+this.tx*this.b)*e,i},u.prototype.translate=function(t,i){return this.tx+=t,this.ty+=i,this},u.prototype.scale=function(t,i){return this.a*=t,this.d*=i,this.c*=t,this.b*=i,this.tx*=t,this.ty*=i,this},u.prototype.rotate=function(t){var i=Math.cos(t),e=Math.sin(t),s=this.a,n=this.c,o=this.tx;return this.a=s*i-this.b*e,this.b=s*e+this.b*i,this.c=n*i-this.d*e,this.d=n*e+this.d*i,this.tx=o*i-this.ty*e,this.ty=o*e+this.ty*i,this},u.prototype.append=function(t){var i=this.a,e=this.b,s=this.c,n=this.d;return this.a=t.a*i+t.b*s,this.b=t.a*e+t.b*n,this.c=t.c*i+t.d*s,this.d=t.c*e+t.d*n,this.tx=t.tx*i+t.ty*s+this.tx,this.ty=t.tx*e+t.ty*n+this.ty,this},u.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},u.prototype.setTransform=function(t,i,e,s,n,o,h,r,a){var c,p,u,l,d,f,y,m,v,g;return d=Math.sin(h),f=Math.cos(h),y=Math.cos(a),m=Math.sin(a),v=-Math.sin(r),g=Math.cos(r),c=f*n,p=d*n,u=-d*o,l=f*o,this.a=y*c+m*u,this.b=y*p+m*l,this.c=v*c+g*u,this.d=v*p+g*l,this.tx=t+(e*c+s*u),this.ty=i+(e*p+s*l),this},g.IDENTITY=new u,g.TEMP_MATRIX=new u,g.DisplayObject=l,l.prototype.constructor=g.DisplayObject,Object.defineProperty(l.prototype,"scale",{get:function(){return this.scaleX},set:function(t){this.scaleX=this.scaleY=t}}),l.prototype.fromTo=function(t,i){return t.element=this,this.setVal(t.from),i&&(this.Animator.animates.length=0),this.Animator.fromTo(t)},l.prototype.to=function(t,i){t.element=this,t.from={};for(var e in t.to)t.from[e]=this[e];return i&&(this.Animator.animates.length=0),this.Animator.fromTo(t)},l.prototype.keyFrames=function(t,i){return t.element=this,i&&(this.Animator.animates.length=0),this.Animator.keyFrames(t)},l.prototype.isVisible=function(){return!!(this.visible&&this.alpha>0&&this.scaleX*this.scaleY>0)},l.prototype.removeMask=function(){this.mask=null},l.prototype.setVal=function(t){if(void 0!==t)for(var i in t)void 0!==this[i]&&(this[i]=t[i])},l.prototype.updateMe=function(){var t,i,e,s,n,o,h=this.parent.worldTransform,r=this.worldTransform;this.skewX||this.skewY?(g.TEMP_MATRIX.setTransform(this.x,this.y,this.pivotX,this.pivotY,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY),r.a=g.TEMP_MATRIX.a*h.a+g.TEMP_MATRIX.b*h.c,r.b=g.TEMP_MATRIX.a*h.b+g.TEMP_MATRIX.b*h.d,r.c=g.TEMP_MATRIX.c*h.a+g.TEMP_MATRIX.d*h.c,r.d=g.TEMP_MATRIX.c*h.b+g.TEMP_MATRIX.d*h.d,r.tx=g.TEMP_MATRIX.tx*h.a+g.TEMP_MATRIX.ty*h.c+h.tx,r.ty=g.TEMP_MATRIX.tx*h.b+g.TEMP_MATRIX.ty*h.d+h.ty):this.rotation%360?(this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation*g.DTR),this._cr=Math.cos(this.rotation*g.DTR)),t=this._cr*this.scaleX,i=this._sr*this.scaleX,e=-this._sr*this.scaleY,s=this._cr*this.scaleY,n=this.x,o=this.y,(this.pivotX||this.pivotY)&&(n-=this.pivotX*t+this.pivotY*e,o-=this.pivotX*i+this.pivotY*s),r.a=t*h.a+i*h.c,r.b=t*h.b+i*h.d,r.c=e*h.a+s*h.c,r.d=e*h.b+s*h.d,r.tx=n*h.a+o*h.c+h.tx,r.ty=n*h.b+o*h.d+h.ty):(t=this.scaleX,s=this.scaleY,n=this.x-this.pivotX*t,o=this.y-this.pivotY*s,r.a=t*h.a,r.b=t*h.b,r.c=s*h.c,r.d=s*h.d,r.tx=n*h.a+o*h.c+h.tx,r.ty=n*h.b+o*h.d+h.ty),this.worldAlpha=this.alpha*this.parent.worldAlpha},l.prototype.upAnimation=function(t){this.Animator.update(t)},l.prototype.setTransform=function(t){var i=this.worldTransform;t.globalAlpha=this.worldAlpha,t.setTransform(i.a,i.b,i.c,i.d,i.tx,i.ty)},l.prototype.getGlobalPos=function(){return{x:this.worldTransform.tx,y:this.worldTransform.ty}},l.prototype.on=function(t,i){this.event.on(t,i)},l.prototype.off=function(t,i){this.event.off(t,i)},l.prototype.once=function(t,i){var e=this,s=function(n){i&&i(n),e.event.off(t,s)};this.event.on(t,s)},l.prototype.getBound=function(){for(var t=[],i=this.bound.length>>1,e=0;e<i;e++){var s=this.worldTransform.apply({x:this.bound[2*e],y:this.bound[2*e+1]});t[2*e]=s.x,t[2*e+1]=s.y}return t},l.prototype.setBound=function(t,i){var e=this.bound.length;e>4&&i||(t=t||[-this.regX,this.regY,-this.regX,this.regY-this.height,-this.regX+this.width,this.regY-this.height,-this.regX+this.width,this.regY],this.bound=t)},l.prototype.ContainsPoint=function(t,i,e){for(var s,n=t.length>>1,o=t[2*n-3]-e,h=t[2*n-2]-i,r=t[2*n-1]-e,a=0;a<n;a++)s=h,o=r,h=t[2*a]-i,r=t[2*a+1]-e,o!=r&&(lup=r>o);var c=0;for(a=0;a<n;a++)if(s=h,o=r,h=t[2*a]-i,r=t[2*a+1]-e,!(o<0&&r<0||o>0&&r>0||s<0&&h<0)){if(o==r&&Math.min(s,h)<=0)return!0;if(o!=r){var p=s+(h-s)*-o/(r-o);if(0===p)return!0;p>0&&c++,0===o&&lup&&r>o&&c--,0===o&&!lup&&r<o&&c--,lup=r>o}}return 1==(1&c)},g.Container=d,d.prototype=Object.create(g.DisplayObject.prototype),d.prototype.constructor=g.Container,d.prototype.addChilds=function(t){if(void 0===t)return t;var i=arguments.length;if(i>1){for(var e=0;e<i;e++)this.addChilds(arguments[e]);return arguments[i-1]}return t.parent&&t.parent.removeChilds(t),t.parent=this,this.cds.push(t),t},d.prototype.removeChilds=function(){var t=arguments.length;if(t>1)for(var i=0;i<t;i++)this.removeChilds(arguments[i]);else if(1===t)for(var e=0;e<this.cds.length;e++)this.cds[e]===arguments[0]&&(this.cds.splice(e,1),this.cds[e].parent=null,e--)},d.prototype.updateTransform=function(t){this._ready&&(t=this.timeScale*t,!this.paused&&this.upAnimation(t),this.updateMe(),this.cds.length>0&&this.updateChilds(t))},d.prototype.updateChilds=function(t){for(var i=0,e=this.cds.length;i<e;i++){var s=this.cds[i];s.updateTransform(t)}},d.prototype.render=function(t){t.save(),this.setTransform(t),this.mask&&this.mask.render(t),this.renderMe(t),this.cds.length>0&&this.renderChilds(t),t.restore()},d.prototype.renderMe=function(){return!0},d.prototype.renderChilds=function(t){for(var i=0,e=this.cds.length;i<e;i++){var s=this.cds[i];s.isVisible()&&s._ready&&s.render(t)}},d.prototype.noticeEvent=function(t){for(var i=this.cds.length-1;i>=0;){var e=this.cds[i];if(e.visible&&(e.noticeEvent(t),t.target))break;i--}this.upEvent(t)},d.prototype.upEvent=function(t){if(this._ready&&(t.target||!this.passEvent&&this.hitTest(t))&&(!t.cancleBubble||t.target===this)){if(!(this.event.listeners[t.type]&&this.event.listeners[t.type].length>0))return;this.event.emit(t)}},d.prototype.hitTest=function(t){if("touchmove"===t.type||"touchend"===t.type||"mousemove"===t.type||"mouseup"===t.type){var i=this.event.touchstarted;return i&&(t.target=this),"touchend"!==t.type&&"mouseup"!==t.type||(this.event.touchstarted=!1),i}return!!this.hitTestMe(t)&&(t.target=this,"touchstart"!==t.type&&"mousedown"!==t.type||(this.event.touchstarted=!0),!0)},d.prototype.hitTestMe=function(t){return this.ContainsPoint(this.getBound(),t.global.x,t.global.y)},d.prototype.pause=function(){this.paused=!0},d.prototype.start=function(){this.paused=!1},d.prototype.cancle=function(){this.living=!1},g.Sprite=f,f.prototype=Object.create(g.Container.prototype),f.prototype.constructor=g.Sprite,f.prototype.upTexture=function(t){this._textureW=t.texture.width,this._textureH=t.texture.height,this.width=t.width||this._textureW,this.height=t.height||this._textureH,this.regX=this.width>>1,this.regY=this.height>>1,this.setBound(null,!0)},f.prototype.upAnimation=function(t){this.Animator.update(t),this.MovieClip.update(t)},f.prototype.playMovie=function(t){this.MovieClip.playMovie(t)},f.prototype.renderMe=function(t){if(this._ready){var i=this.MovieClip.getFramePos();t.drawImage(this.texture.texture,i.x,i.y,this.width,this.height,-this.regX,-this.regY,this.width,this.height)}},g.Graphics=y,y.prototype=Object.create(g.Container.prototype),y.prototype.constructor=g.Graphics,y.prototype.renderMe=function(t){this.draw&&(this.cached||this.cache?(this.cache&&(this.cacheCanvas=this.cacheCanvas||document.createElement("canvas"),this.width=this.cacheCanvas.width=this.session.width,this.height=this.cacheCanvas.height=this.session.height,this._ctx=this.cacheCanvas.getContext("2d"),this._ctx.clearRect(0,0,this.width,this.height),this._ctx.save(),this._ctx.setTransform(1,0,0,1,this.session.center.x,this.session.center.y),this._drawBack(this._ctx),this._ctx.restore(),this.cached=!0,this.cache=!1),this.cacheCanvas&&t.drawImage(this.cacheCanvas,0,0,this.width,this.height,-this.session.center.x,-this.session.center.x,this.width,this.height)):this._drawBack(t))},y.prototype._drawBack=function(t){"function"==typeof this.draw?this.draw(t):"object"==typeof this.draw&&"function"==typeof this.draw.render&&this.draw.render(t)},y.prototype.drawCall=function(t,i){void 0!==t&&(i=i||{},this.cache=i.cache||!1,this.cached=!1,this.session=i.session||{center:{x:0,y:0},width:100,height:100},this.draw=t||null)},g.Text=m,m.prototype=Object.create(g.Container.prototype),m.prototype.constructor=g.Text,m.prototype.renderMe=function(t){t.font=this.font,t.textAlign=this.textAlign,t.textBaseline=this.textBaseline,this.UF&&(t.fillStyle=this.color,t.fillText(this.text,0,0)),this.US&&(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.strokeText(this.text,0,0))},g.Stage=v,v.prototype=Object.create(g.Container.prototype),v.prototype.constructor=g.Stage,v.prototype.resize=function(t,i,e,s){this.width=this.canvas.width=t,this.height=this.canvas.height=i,this.setStyle&&e&&s&&(this.canvas.style.width=e+"px",this.canvas.style.height=s+"px")},v.prototype.render=function(){(this.pt<=0||Date.now()-this.pt>200)&&(this.pt=Date.now());var t=Date.now()-this.pt;this.pt+=t,this.updateChilds(this.timeScale*t),this.ctx.setTransform(1,0,0,1,0,0),this.autoClear&&this.ctx.clearRect(0,0,this.width,this.height),this.renderChilds(this.ctx)},v.prototype.initEvent=function(){var t=this;this.canvas.addEventListener("click",function(i){t.eventProxy(i)},!1),this.canvas.addEventListener("touchstart",function(i){t.eventProxy(i)},!1),this.canvas.addEventListener("touchmove",function(i){i.preventDefault(),t.eventProxy(i)},!1),this.canvas.addEventListener("touchend",function(i){t.eventProxy(i)},!1),this.canvas.addEventListener("mousedown",function(i){t.eventProxy(i)},!1),this.canvas.addEventListener("mousemove",function(i){i.preventDefault(),t.eventProxy(i)},!1),this.canvas.addEventListener("mouseup",function(i){t.eventProxy(i)},!1)},v.prototype.eventProxy=function(t){for(var i=this.fixCoord(t),e=this.cds.length-1;e>=0;){var s=this.cds[e];if(s.visible&&(s.noticeEvent(i),i.target))break;e--}},v.prototype.fixCoord=function(t){var i=new g.InteractionData,e=this.getPos(this.canvas);if(i.originalEvent=t,i.type=t.type,i.ratio=this.width/this.canvas.offsetWidth,t.touches){if(i.touches=[],t.touches.length>0){for(var s=0;s<t.touches.length;s++)i.touches[s]={},i.touches[s].global={},i.touches[s].global.x=(t.touches[s].pageX-e.x)*i.ratio,i.touches[s].global.y=(t.touches[s].pageY-e.y)*i.ratio;i.global=i.touches[0].global}}else i.global.x=(t.pageX-e.x)*i.ratio,i.global.y=(t.pageY-e.y)*i.ratio;return i},v.prototype.getPos=function(t){var i={};if(t.offsetParent){var e=this.getPos(t.offsetParent);i.x=t.offsetLeft+e.x,i.y=t.offsetTop+e.y}else i.x=t.offsetLeft,i.y=t.offsetTop;return i},g});
//# sourceMappingURL=../maps/jcc2d.js.map
