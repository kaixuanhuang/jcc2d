# jcc2d
[![Build Status](https://img.shields.io/travis/jasonChen1982/jcc2d.svg?style=flat-square)](https://travis-ci.org/jasonChen1982/jcc2d)
[![npm](https://img.shields.io/npm/v/jcc2d.svg?style=flat-square)](https://jasonchen1982.github.io/jcc2d/)
[![javascript style guide](https://img.shields.io/badge/code_style-google-brightgreen.svg)](https://google.github.io/styleguide/jsguide.html)


A canvas 2d renderer & An awesome animator
---
<p><a target="_blank" href="https://jasonchen1982.github.io/jcc2d/" title="jcc2d main page"><img src="https://jasonchen1982.github.io/jcc2d/static/images/main-page.png" width="100%" alt="main page" title="main page"></a></p>

## Show case
* [refactor usopen-sessions main page][jcc2d]
* [particle effect][particle]
* [3D pictures cloud][zIndex-demo]
* [sprites movieclip][movieclip]
* [blur mask high performance filter][blur-mask]
* [skeleton draw by graphics][skeleton-graphics]
* [skeleton draw by sprite][skeleton-sprite]
* [check eventer pointer exact polygon][event-exact-polygon]
* [varied timingfunction supported][varied-timingfunction]
* [path motion animation][path-motion]
* [after effect export][ae-export]

## Introduction
[main page][jcc2d]

jcc2d is a lightweight canvas2d render engine and built-in an awesome animator with timeline management, support event system by default.

built-in support [bodymovin][bodymovin] keyframes data, use [bodymovin add-on][bodymovin-add-on] to export keyframes data from [after effect][ae], and easy parser to [jcc2d][jcc2d] keyFrames, just like following:

```js
// parser a single animation layer
const coin = new JC.Sprite({
  texture: new JC.Texture('/path/coin.png'),
});
coin.keyFrames({
  ks: data.layers[0], // bodymovin keyframes data
  fr: 30, // frame rate
  // infinite: true, // infinite loop
  // alternate: true, // alternate
  onUpdate() {},
  onCompelete() {
    console.log(this.element);
  },
});

// parser all animation layers
const ani = new JC.ParserAnimation({
  keyframes: data,
  // fr: 30, // frame rate
  // prefix: '', // assets url prefix
  // infinite: true, // infinite loop
  // alternate: true, // alternate
  onUpdate() {},
  onCompelete() {
    console.log(this.element);
  },
});

```

[view demo][ae-export]

## Feature

Include `Stage` `Sprite` `Graphics` `Container` `BlurFilter` `TextFace` and so on.

Every display instance can easy start an animation and attach a timeline, just like following:

```javascript
const ball = new JC.Sprite({
    texture: new JC.Texture('/path/xx.png'),
});
const timeline = ball.animate({
  from: {x: 100}, // start pose, optional
  to: {x: 200}, // target pose
  ease: 'bounceOut', // set a timingfunction
  repeats: 10, // repeat sometimes
  delay: 1000, // delay a moment every repeat
  wait: 1000, // wait a moment to start
  infinite: true, // want infinite repeats?
  alternate: true, // repeats with alternate
  duration: 1000, // duration
  onUpdate: function(state,rate){}, // onUpdate callback
  onCompelete: function(){ console.log('end'); } // onCompelete callback
});
timeline.pause(); // pause animation progress
timeline.restart(); // restart animation progress, use with pause
timeline.stop(); // stop animation to end, will trigger onCompelete callback
timeline.cancle(); // cancle animation right now, will not trigger onCompelete callback
timeline.timeScale = 0.5; // set timeScale, get a Slow motion，just like speed * 0.5
```

## Display animation property

|                   type                   |         property          |
| :--------------------------------------: | :-----------------------: |
| display instance coordinate axis position |          `x` `y`          |
|       display instance scale value       | `scale` `scaleX` `scaleY` |
|       display instance skew value        |      `skewX` `skewY`      |
|    display instance rotation with CCW    |        `rotation`         |
|      display instance opacity alpha      |          `alpha`          |
|          display instance pivot          |    ` pivotX` ` pivotY`    |




## Quick Start

`jcc2d` was so easy to use, you just need `new` a `Stage` instance and appoint a `canvas` dom, then you can add every display object into `stage`.

```js
const stage = new JC.Stage({
  dom: 'canvas-stage',
  resolution: 1, // was normal
});
const coin = new JC.Sprite({
  texture: new JC.Texture('/path/coin.png'),
});
stage.adds(coin);
stage.startEngine(); // the coin would be render
```

`jcc2d` built-in support `timeline` animation , you can start multiple animation. let｀s use `coin` to show.

```js
/* start a animate */
coin.animate({
  from: {},
  to: {},
  ...
});

/* start a motion */
coin.motion({
  path: new JC.BezierCurve([...]), // coin will move along thie path
  ...
});

/* start a motion */
coin.runners({             // combination multiple animation and run one by one
  runners: [
    {from: {}, to: {}, ease: 'ease', ...},
    {path: new JC.BezierCurve([...]), ease: 'ease', ...},
    {to: {}, ease: 'ease', ...},
  ]
});
```

and more infor please found in [documentation][documentation], or quick start a living edit in web [runing man][quick-start].

## Documentation
[documentation][documentation]

## Examples
[examples][examples]

## Changelog

[changelog][change-log]

## License

[MIT](http://opensource.org/licenses/MIT)

[jcc2d]:https://jasonchen1982.github.io/jcc2d/ "jcc2d main page"
[documentation]:https://jasonchen1982.github.io/jcc2d/docs "jcc2d documention page"
[examples]:https://jasonchen1982.github.io/jcc2d/examples "jcc2d examples page"
[particle]:https://jasonchen1982.github.io/jcc2d/examples/ "Particle effect"
[zIndex-demo]:https://jasonchen1982.github.io/jcc2d/examples/#demo_zIndex_bitmap "3D pictures cloud used zIndex"
[movieclip]:https://jasonchen1982.github.io/jcc2d/examples/#demo_frames_sprite "sprites movieclip"
[blur-mask]:https://jasonchen1982.github.io/jcc2d/examples/#demo_filter_blur "blur mask high performance filter"
[skeleton-graphics]:https://jasonchen1982.github.io/jcc2d/examples/#demo_skeleton_graphics "skeleton draw by graphics"
[skeleton-sprite]:https://jasonchen1982.github.io/jcc2d/examples/#demo_skeleton_sprite "skeleton draw by sprite"
[event-exact-polygon]:https://jasonchen1982.github.io/jcc2d/examples/#demo_interactive_boundPrecise "check eventer pointer exact polygon"
[varied-timingfunction]:https://jasonchen1982.github.io/jcc2d/examples/#demo_timingfunction_allInOne "varied timingfunction supported"
[path-motion]:https://jasonchen1982.github.io/jcc2d/examples/#demo_animation_motion "path motion animation"
[quick-start]:http://codepen.io/JasonChen1982/pen/grJzmz?editors=0010 "quick start demo"
[ae-export]:https://jasonchen1982.github.io/jcc2d/examples/#demo_animation_keyFrames2 "after effect export"
[bodymovin]:https://github.com/bodymovin/bodymovin "bodymovin github"
[bodymovin-add-on]:https://creative.adobe.com/addons/products/12557#.WPRdl1N94o8 "bodymovin add-on"
[change-log]:https://github.com/jasonChen1982/jcc2d/blob/master/Changelog.md "change log"
[ae]:http://www.adobe.com/cn/products/aftereffects.html "ae"
