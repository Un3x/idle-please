webpackJsonp([0],{"0DsX":function(t,s){},DydK:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("main",[s("router-view")],1)])},staticRenderFns:[]};var a=e("VU/8")({name:"app"},i,!1,function(t){e("DydK")},null,null).exports,o=e("/ocq"),r={name:"fading-message",props:["duration","trigger","offset"],data:function(){return{isVisible:!1}},methods:{makeVisible:function(){var t=this;this.isVisible=!1,setTimeout(function(){t.isVisible=!0,t.startCountDown()},1e3*this.offset)},startCountDown:function(){var t=this;this.duration>=0&&setTimeout(function(){t.isVisible=!1},1e3*this.duration)}},watch:{trigger:function(t,s){this.makeVisible()}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"message",class:{visible:this.isVisible}},[this._t("default")],2)},staticRenderFns:[]};var l=e("VU/8")(r,u,!1,function(t){e("0DsX")},"data-v-0ddd9758",null).exports,c={name:"fading-mutliple-messages",components:{FadingMessage:l},props:["messages","duration","offset"],data:function(){return{offsets:{},realTrigger:!1}},methods:{subOffset:function(t){return this.offset*t}},watch:{messages:function(t,s){var e=this;setTimeout(function(){e.realTrigger=!e.realTrigger},10)}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.messages,function(s,n){return e("fading-message",{key:n,attrs:{duration:t.duration,trigger:t.realTrigger,offset:t.subOffset(n)}},[t._v("\n    "+t._s(s)+"\n  ")])}))},staticRenderFns:[]};var v=e("VU/8")(c,d,!1,function(t){e("jmj+")},"data-v-c70faa88",null).exports,f={name:"duration",props:["amount","fallback"],computed:{days:function(){return Math.floor(this.amount/86400)},hours:function(){return Math.floor((this.amount-3600*this.days*24)/3600)},minutes:function(){return Math.floor((this.amount-3600*this.days*24-3600*this.hours)/60)},seconds:function(){return this.amount-3600*this.days*24-3600*this.hours-60*this.minutes}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[t.amount>0?e("span",[t.days>0?e("span",[e("span",{staticClass:"highlight"},[t._v("\n        "+t._s(t.days)+"\n      ")]),t._v(" "),e("span",[t._v("\n        "+t._s(t.days>1?"days":"day")+"\n      ")])]):t._e(),t._v(" "),t.hours>0?e("span",[e("span",{staticClass:"highlight"},[t._v("\n        "+t._s(t.hours)+"\n      ")]),t._v(" "),e("span",[t._v("\n        "+t._s(t.hours>1?"hours":"hour")+"\n      ")])]):t._e(),t._v(" "),t.minutes>0?e("span",[e("span",{staticClass:"highlight"},[t._v("\n        "+t._s(t.minutes)+"\n      ")]),t._v(" "),e("span",[t._v("\n        min\n      ")])]):t._e(),t._v(" "),t.seconds>0?e("span",[e("span",{staticClass:"highlight"},[t._v("\n        "+t._s(t.seconds)+"\n      ")]),t._v(" "),e("span",[t._v("\n        s\n      ")])]):t._e()]):e("span",[t._v("\n    "+t._s(t.fallback)+"\n  ")])])},staticRenderFns:[]};var m=e("VU/8")(f,h,!1,function(t){e("ejuu")},"data-v-11e83fb0",null).exports,p={name:"animated-dots",components:{Duration:m},props:["nbDots","invisibleDots","invisibleReverseDots","duration"],data:function(){return{dots:"",intervalID:null}},computed:{maxDots:function(){return this.nbDots?new Array(parseInt(this.nbDots)+1).join("."):"..."}},methods:{cycleDots:function(){this.dots===this.maxDots?this.dots="":this.dots+="."},setInterval:function(t){function s(){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(){var t=this;this.intervalID=setInterval(function(){t.cycleDots()},1e3*this.duration)})},mounted:function(){this.duration||(this.duration=1),this.setInterval()},watch:{duration:function(t,s){clearInterval(this.intervalID),this.setInterval()}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"withDots"},[t.invisibleDots?t._e():e("span",{class:{invisible:t.invisibleReverseDots}},[t._v(t._s(t.dots))]),t._v(" "),t._t("default"),t._v(" "),t.invisibleDots?t._e():e("span",{class:{invisible:t.invisibleDots}},[t._v(t._s(t.dots))])],2)])},staticRenderFns:[]};var _={name:"game",components:{FadingMessage:l,FadingMultipleMessages:v,Duration:m,AnimatedDots:e("VU/8")(p,g,!1,function(t){e("a1c1")},"data-v-97648c1c",null).exports},data:function(){var t=this;return{developerMode:!1,elapsedTime:0,step:0,tauntMessages:[],visibleElapsedTime:!1,visibleLevels:!1,visibleDots:!1,visibleReverseDots:!1,visibleNextDuration:!1,dotsDuration:1,steps:{0:function(){t.taunt("Wait for it")},1:function(){t.visibleLevels=!0,t.taunt("You're now level "+(t.step+1),"Well played !")},2:function(){t.visibleNextDuration=!0,t.taunt("You can now see the duration of the current level")},3:function(){t.visibleElapsedTime=!0,t.taunt("Congrats !","You just wasted "+(t.elapsedTime+1)+" seconds")},4:function(){t.taunt("Got nothing else to do, eh ?")},5:function(){t.visibleDots=!0,t.taunt("Here","have some animated dots")},6:function(){t.taunt("Are you entertained ?")},7:function(){t.visibleReverseDots=!0,t.taunt("Synchronized reversed dots ?!","Wow O_O")},8:function(){t.dotsDuration=.1,t.taunt("Let's speed up these dots.","Do you like speed ?","I do")},9:function(){t.dotsDuration=.33333333,t.taunt("Ok, that is to fast.","Let's slow them down a bit")},default:function(){t.taunt("LOL, you're still here ?")}}}},computed:{cooldown:function(){return this.totalAmountToWait(this.step)-this.elapsedTime},currentLevelDuration:function(){return this.developerMode?this.nextAmountToWait(this.step):this.nextAmountToWait(this.step)-1}},methods:{nextAmountToWait:function(t){return this.developerMode?4:5+t},totalAmountToWait:function(t){for(var s=0,e=0;e<t;e++)s+=this.nextAmountToWait(e);return s},countDown:function(){var t=this;this.computeGame(),setInterval(function(){t.elapsedTime++,t.computeGame()},1e3)},computeGame:function(){if(this.cooldown<=0){var t=this.steps[this.step];t?t():this.steps.default(),this.step++}},taunt:function(t){console.log(arguments),this.tauntMessages=arguments}},mounted:function(){this.countDown()}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"game"},[e("div",{staticClass:"top-bar"},[e("div",{staticClass:"dual-container"},[e("fading-message",{attrs:{duration:"-1",trigger:t.visibleElapsedTime}},[e("div",{staticClass:"bigger"},[t._v("Time wasted")]),t._v(" "),e("i",{staticClass:"fas fa-hourglass-end"}),t._v(" "),e("duration",{attrs:{amount:t.elapsedTime}})],1),t._v(" "),e("div",{staticClass:"levels"},[e("fading-message",{staticClass:"bigger",attrs:{duration:"-1",trigger:t.visibleLevels}},[t._v("\n          Level "),e("span",{staticClass:"highlight"},[t._v(t._s(t.step))])]),t._v(" "),e("fading-message",{attrs:{duration:"-1",trigger:t.visibleNextDuration}},[e("duration",{attrs:{amount:t.currentLevelDuration}}),t._v(" "),e("i",{staticClass:"fas fa-hourglass-start"})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"center-bar"},[e("div",{staticClass:"even-bigger"},[e("animated-dots",{attrs:{nbDots:"3",invisibleDots:!t.visibleDots,invisibleReverseDots:!t.visibleReverseDots,duration:t.dotsDuration}},[t._v("\n         Wait for "),e("duration",{attrs:{amount:t.cooldown,fallback:"it"}})],1)],1)]),t._v(" "),e("div",{staticClass:"bottom-bar"},[e("div",{staticClass:"taunt"},[e("fading-multiple-messages",{attrs:{messages:t.tauntMessages,duration:"3",offset:"1"}})],1)])])},staticRenderFns:[]};var D={name:"home",components:{Game:e("VU/8")(_,b,!1,function(t){e("a8Bt")},"data-v-055a743c",null).exports},data:function(){return{}}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container"},[this._m(0),this._v(" "),s("div",{staticClass:"game-container centered-content"},[s("game")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"titles"},[s("h1",{staticClass:"highlight"},[this._v("Idle, please")]),this._v(" "),s("div",[this._v("The perfectly pointless game")])])}]};var T=e("VU/8")(D,C,!1,function(t){e("jOB9")},"data-v-ad35ceda",null).exports;n.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"Home",component:T}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:a},template:"<App/>"})},a1c1:function(t,s){},a8Bt:function(t,s){},ejuu:function(t,s){},jOB9:function(t,s){},"jmj+":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.094c334d28c089a95849.js.map