(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],[
/*!*************************************!*\
  !*** D:/Projects/hello-uni/main.js ***!
  \*************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4);var t=u(n(/*! vue */2)),o=u(n(/*! ./App */5)),r=u(n(/*! ./store/index */13));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){n.e(/*! require.ensure | components/loading/UniLoading */"components/loading/UniLoading").then(function(){return resolve(n(/*! ./components/loading/UniLoading */82))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all(/*! require.ensure | components/audio/UniAudioController */[n.e("common/vendor"),n.e("components/audio/UniAudioController")]).then(function(){return resolve(n(/*! ./components/audio/UniAudioController */89))}.bind(null,n)).catch(n.oe)},d=function(){n.e(/*! require.ensure | components/mockPlayPage/UniMockPlayPage */"components/mockPlayPage/UniMockPlayPage").then(function(){return resolve(n(/*! ./components/mockPlayPage/UniMockPlayPage */96))}.bind(null,n)).catch(n.oe)},s=function(){n.e(/*! require.ensure | components/prepareImg/PrepareImg */"components/prepareImg/PrepareImg").then(function(){return resolve(n(/*! ./components/prepareImg/PrepareImg */103))}.bind(null,n)).catch(n.oe)},p=function(){n.e(/*! require.ensure | components/alt/UniAlt */"components/alt/UniAlt").then(function(){return resolve(n(/*! ./components/alt/UniAlt */110))}.bind(null,n)).catch(n.oe)},b=function(){n.e(/*! require.ensure | components/checkbox/UniCustomCheckbox */"components/checkbox/UniCustomCheckbox").then(function(){return resolve(n(/*! ./components/checkbox/UniCustomCheckbox */117))}.bind(null,n)).catch(n.oe)};t.default.component("uni-loading",l),t.default.component("uni-audio-controller",f),t.default.component("uni-mock-play-page",d),t.default.component("prepare-img",s),t.default.component("uni-alt",p),t.default.component("uni-custom-checkbox",b),t.default.config.productionTip=!1,o.default.mpType="app";var g=new t.default(c(c({},o.default),{},{store:r.default}));e(g).$mount()}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createApp"])},,,,
/*!*************************************!*\
  !*** D:/Projects/hello-uni/App.vue ***!
  \*************************************/
/*! no static exports found */,function(e,t,n){"use strict";n.r(t);var o=n(/*! ./App.vue?vue&type=script&lang=js& */6);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(/*! ./App.vue?vue&type=style&index=0&lang=scss& */10);var u,i,c,a,l=n(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),f=Object(l["default"])(o["default"],u,i,!1,null,null,null,!1,c,a);f.options.__file="App.vue",t["default"]=f.exports},
/*!**************************************************************!*\
  !*** D:/Projects/hello-uni/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */7),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Projects/hello-uni/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(/*! vuex */8),r=u(n(/*! @/store/mutations-types */9));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={onLaunch:function(){var t=this;this[r.default.SET_AUDIO](e.createInnerAudioContext()),this[r.default.SET_INITIALIZE](),this.getAudio.onCanplay((function(){t.getAudio.play()})),this.getAudio.onTimeUpdate((function(){t[r.default.SET_CURRENT_TIME](t.getAudio.currentTime)})),this.getAudio.onPlay((function(){t[r.default.SET_SWITCH](!0)})),this.getAudio.onPause((function(){t[r.default.SET_SWITCH](!1)})),this.getAudio.onStop((function(){console.log("stop: ")})),this.getAudio.onEnded((function(){console.log("ended: ");var e=t.getShowPageIndex;e<2?t[r.default.SET_SHOW_PAGE_INDEX](e+1):2===e&&t[r.default.SET_SHOW_PAGE_INDEX](0)})),this.getAudio.onWaiting((function(){console.log("waiting")})),this.getAudio.onError((function(){e.showToast({title:"歌曲链接失效，请换一首！",icon:"loading"})}))},computed:c({},(0,o.mapState)({getAudio:"audio",getIsPlay:"isPlay",getShowPageIndex:"showPageIndex"})),methods:c({},(0,o.mapMutations)([r.default.SET_INITIALIZE,r.default.SET_AUDIO,r.default.SET_SWITCH,r.default.SET_CURRENT_TIME,r.default.SET_SHOW_PAGE_INDEX]))};t.default=l}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},,
/*!***********************************************************************!*\
  !*** D:/Projects/hello-uni/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */,function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */11),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Projects/hello-uni/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map