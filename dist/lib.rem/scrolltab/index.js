/*! vue-ydui v0.7.7 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollTabPanel=e.ScrollTab=void 0;var o=i(90),r=n(o),s=i(89),l=n(s);e.ScrollTab=r.default,e.ScrollTabPanel=l.default},1:function(t,e){t.exports=function(t,e,i,n){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),n){var a=l.computed||(l.computed={});Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}})}return{esModule:o,exports:r,options:l}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},3:function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=f[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(r(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(r(i.parts[o]));f[i.id]={id:i.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(b)return h;n.parentNode.removeChild(n)}if(m){var r=p++;n=u||(u=o()),e=s.bind(null,n,r,!1),i=s.bind(null,n,r,!0)}else n=o(),e=l.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function s(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function l(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document,c=i(4),f={},d=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,b=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){b=i;var o=c(t,e);return n(o),function(e){for(var i=[],r=0;r<o.length;r++){var s=o[r],l=f[s.id];l.refs--,i.push(l)}e?(o=c(t,e),n(o)):o=[];for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete f[l.id]}}}};var v=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var i=[],n={},o=0;o<e.length;o++){var r=e[o],s=r[0],l=r[1],a=r[2],c=r[3],f={id:t+":"+o,css:l,media:a,sourceMap:c};n[s]?n[s].parts.push(f):i.push(n[s]={id:s,parts:[f]})}return i}},25:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,'.m-scrolltab{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.scrolltab-nav{height:100%;background-color:#f5f5f5;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;z-index:1}.scrolltab-nav:after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item{padding:0 .3rem;height:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;z-index:1}.scrolltab-item.scrolltab-active{background-color:#fff}.scrolltab-item.scrolltab-active:before{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #fff;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item.scrolltab-active:active{background-color:#fff}.scrolltab-item:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #dfdfdf;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item:before{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item:active{background:none}.scrolltab-icon{margin-right:.2rem;font-size:.32rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.scrolltab-icon>img{height:.4rem;display:inline-block}.scrolltab-title{font-size:.3rem;color:#666;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:1.6rem}.scrolltab-content{height:100%;background-color:#fff;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .24rem .24rem;position:relative}.scrolltab-content-title{font-size:.3rem;font-weight:400;color:#555;display:block;padding-bottom:.1rem;padding-top:.32rem;margin-bottom:.2rem;position:relative;z-index:1}.scrolltab-content-title:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}',""])},89:function(t,e,i){var n=i(1)(i(230),i(114),null,null);t.exports=n.exports},90:function(t,e,i){i(165);var n=i(1)(i(231),i(118),null,null);t.exports=n.exports},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scrolltab-content-item"},[i("strong",{staticClass:"scrolltab-content-title"},[t._v(t._s(t.label))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-scrolltab"},[i("div",{staticClass:"scrolltab-nav"},t._l(t.navList,function(e){return i("a",{staticClass:"scrolltab-item",class:t.activeIndex==e._uid?"scrolltab-active":"",attrs:{href:"javascript:;"},on:{click:function(i){t.moveHandler(e._uid)}}},[i("div",{staticClass:"scrolltab-icon"},[i("i",{class:e.icon})]),t._v(" "),i("div",{staticClass:"scrolltab-title"},[t._v(t._s(e.label))])])})),t._v(" "),i("div",{ref:"scrollView",staticClass:"scrolltab-content"},[t._t("default")],2)])},staticRenderFns:[]}},165:function(t,e,i){var n=i(25);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("3b20ff8b",n,!0)},230:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab-panel",props:{label:String,icon:String,active:Boolean},mounted:function(){this.$parent.addItem({label:this.label,icon:this.icon,_uid:this._uid})}}},231:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab",data:function(){return{scrolling:!1,navList:[],activeIndex:0,timer:null}},methods:{init:function(){this.scrollView=this.$refs.scrollView,this.contentOffsetTop=this.scrollView.getBoundingClientRect().top,this.bindEvent()},addItem:function(t){this.navList.push(t)},getPanels:function(){return this.$children.filter(function(t){return"yd-scrolltab-panel"===t.$options.name})},bindEvent:function(){this.scrollView.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},setDefault:function(){var t=this,e=this.getPanels(),i=0;e.forEach(function(n){n.active?(t.activeIndex=n._uid,t.moveHandler(n._uid)):(++i,i>=e.length&&(t.activeIndex=e[0]._uid))})},moveHandler:function(t){var e=this;if(!this.scrolling){this.scrolling=!0;var i=this.getPanels(),n=i.filter(function(e){return e._uid==t})[0].$el.getBoundingClientRect().top;this.scrollView.scrollTop=n+this.scrollView.scrollTop-this.contentOffsetTop+2,this.activeIndex=t,setTimeout(function(){e.scrolling=!1},6)}},scrollHandler:function(){var t=this;if(!this.scrolling){var e=this.getPanels(),i=e.length,n=this.scrollView,o=n.offsetHeight,r=n.scrollTop,s=e[0].$el.offsetHeight;return r>=s*i-o?void(this.activeIndex=e[i-1]._uid):void e.forEach(function(e){e.$el.getBoundingClientRect().top<=t.contentOffsetTop&&(t.activeIndex=e._uid)})}}},watch:{navList:function(){this.setDefault()}},mounted:function(){this.init()},destroyed:function(){this.scrollView.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}}}})});