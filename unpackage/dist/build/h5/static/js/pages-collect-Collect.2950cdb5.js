(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collect-Collect"],{"09ea":function(n,t,e){var o=e("ac90");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=e("4f06").default;i("af4c9d96",o,!0,{sourceMap:!1,shadowMode:!1})},"16e7":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var o={uniTransition:e("41f0").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("uni-transition",{attrs:{"mode-class":["slide-right"],show:!0}},[e("v-uni-view",{staticClass:"collect"},[e("uni-back-nav",{attrs:{title:"收藏"}}),e("uni-tab-control",{attrs:{tab:n.tab},on:{tabControl:function(t){arguments[0]=t=n.$handleEvent(t),n.onTabControl.apply(void 0,arguments)}}}),e("v-uni-scroll-view",{staticClass:"scroll",style:{transform:"translate3d("+100*n.currentIndex+"vw, 0, 0)"},attrs:{"scroll-y":!0}},[e("uni-tab-view",{attrs:{viewIndex:0}},[n.getColSongs.length?n._e():e("uni-alt"),e("uni-transition",{staticClass:"view",attrs:{"mode-class":["fade"],show:n.getColSongs.length>0}},[e("uni-song-control",{directives:[{name:"show",rawName:"v-show",value:n.isShowSongControl,expression:"isShowSongControl"}],attrs:{count:n.getColSongs.length},on:{menu:function(t){arguments[0]=t=n.$handleEvent(t),n.onMenu.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!n.isShowSongControl,expression:"!isShowSongControl"}],staticClass:"select_control"},[e("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onSelectAll.apply(void 0,arguments)}}},[n._v(n._s(n.selectAll?"全不选":"全选"))]),e("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onComplete.apply(void 0,arguments)}}},[n._v("完成")])],1),e("uni-song",{staticClass:"view_item",attrs:{songs:n.getColSongs,playlistId:"collect",selectable:!n.isShowSongControl}})],1)],1),e("uni-tab-view",{attrs:{viewIndex:1}},[e("uni-alt")],1),e("uni-tab-view",{attrs:{viewIndex:2}},[e("uni-alt")],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!n.isShowSongControl,expression:"!isShowSongControl"}],staticClass:"select_confirm"},[e("v-uni-view",{staticClass:"iconfont icon-trash",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onTrash.apply(void 0,arguments)}}})],1),e("uni-audio-controller",{directives:[{name:"show",rawName:"v-show",value:n.isShowSongControl,expression:"isShowSongControl"}],nativeOn:{click:function(t){return n.toPlayPage(t)}}}),e("uni-mock-play-page",{attrs:{isShow:n.isShowPlayPage},on:{"update:isShow":function(t){arguments[0]=t=n.$handleEvent(t),n.isShowPlayPage=t},"update:is-show":function(t){arguments[0]=t=n.$handleEvent(t),n.isShowPlayPage=t}}})],1)],1)},r=[]},"1e3d":function(n,t,e){"use strict";e.r(t);var o=e("6048"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},"4bdb":function(n,t,e){"use strict";var o=e("09ea"),i=e.n(o);i.a},"5e09":function(n,t,e){"use strict";e.r(t);var o=e("16e7"),i=e("1e3d");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("4bdb");var s,a=e("f0c5"),l=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"1dfea924",null,!1,o["a"],s);t["default"]=l.exports},6048:function(n,t,e){"use strict";var o=e("4ea4");e("4de4"),e("4160"),e("26e9"),e("07ac"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e("5530")),r=o(e("5732")),s=o(e("8825")),a=o(e("0d0b")),l=o(e("c574")),c=o(e("da37")),u=e("2f62"),d=o(e("3f42")),f={components:{UniBackNav:r.default,UniTabControl:s.default,UniTabView:l.default,UniSongControl:a.default,UniSong:c.default},data:function(){return{tab:["歌曲","艺人","专辑"],currentIndex:0,isShowPlayPage:!1,isShowSongControl:!0,selectAll:!1,getColSongs:[]}},onBackPress:function(){if(this.isShowPlayPage)return this.isMove=this.isReach=this.isShowPlayPage=!1,!0},created:function(){var n=this;setTimeout((function(){n.getColSongs=Object.values(n.$store.state.colSongs).reverse()}),200)},methods:(0,i.default)((0,i.default)({},(0,u.mapMutations)([d.default.SET_COL_SONGS])),{},{onTabControl:function(n){this.currentIndex=-n},toPlayPage:function(){this.isShowPlayPage=!0},onMenu:function(){this.isShowSongControl=!1},onSelectAll:function(){var n=this.selectAll;this.selectAll=!n,this.getColSongs.forEach((function(t){t.isChecked=!n}))},onComplete:function(){this.isShowSongControl=!0,this.selectAll=!1,this.getColSongs.forEach((function(n){n.isChecked=!1}))},onTrash:function(){var n=[];this.getColSongs=this.getColSongs.filter((function(t){return t.isChecked&&n.push(t.id),!t.isChecked})),this[d.default.SET_COL_SONGS](n),this.isShowSongControl=!0,this.selectAll=!1}})};t.default=f},ac90:function(n,t,e){var o=e("24fb");t=o(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 字体尺寸 */\r\n/* 区域大小 */\r\n/* 宽高 */\r\n/* 文本省略 */\r\n/* button */\r\n/* hover 动画 */\r\n/*\r\n!* 行为相关颜色 *!\r\n$uni-color-primary: #007aff;\r\n$uni-color-success: #4cd964;\r\n$uni-color-warning: #f0ad4e;\r\n$uni-color-error: #dd524d;\r\n\r\n!* 文字基本颜色 *!\r\n$uni-text-color:#333;//基本色\r\n$uni-text-color-inverse:#fff;//反色\r\n$uni-text-color-grey:#999;//辅助灰色，如加载更多的提示信息\r\n$uni-text-color-placeholder: #808080;\r\n$uni-text-color-disable:#c0c0c0;\r\n\r\n!* 背景颜色 *!\r\n$uni-bg-color:#ffffff;\r\n$uni-bg-color-grey:#f8f8f8;\r\n$uni-bg-color-hover:#f1f1f1;//点击状态颜色\r\n$uni-bg-color-mask:rgba(0, 0, 0, 0.4);//遮罩颜色\r\n\r\n!* 边框颜色 *!\r\n$uni-border-color:#c8c7cc;\r\n\r\n!* 尺寸变量 *!\r\n\r\n!* 文字尺寸 *!\r\n$uni-font-size-sm:24rpx;\r\n$uni-font-size-base:28rpx;\r\n$uni-font-size-lg:32rpx;\r\n\r\n!* 图片尺寸 *!\r\n$uni-img-size-sm:40rpx;\r\n$uni-img-size-base:52rpx;\r\n$uni-img-size-lg:80rpx;\r\n\r\n!* Border Radius *!\r\n$uni-border-radius-sm: 4rpx;\r\n$uni-border-radius-base: 6rpx;\r\n$uni-border-radius-lg: 12rpx;\r\n$uni-border-radius-circle: 50%;\r\n\r\n!* 水平间距 *!\r\n$uni-spacing-row-sm: 10px;\r\n$uni-spacing-row-base: 20rpx;\r\n$uni-spacing-row-lg: 30rpx;\r\n\r\n!* 垂直间距 *!\r\n$uni-spacing-col-sm: 8rpx;\r\n$uni-spacing-col-base: 16rpx;\r\n$uni-spacing-col-lg: 24rpx;\r\n\r\n!* 透明度 *!\r\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\r\n\r\n!* 文章场景相关 *!\r\n$uni-color-title: #2C405A; // 文章标题颜色\r\n$uni-font-size-title:40rpx;\r\n$uni-color-subtitle: #555555; // 二级标题颜色\r\n$uni-font-size-subtitle:36rpx;\r\n$uni-color-paragraph: #3F536E; // 文章段落颜色\r\n$uni-font-size-paragraph:30rpx;*/.collect[data-v-1dfea924]{position:relative;height:100vh;overflow:hidden}.collect .scroll[data-v-1dfea924]{width:300vw;height:100%;position:absolute;top:14%;background-color:#1a191b;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.collect .scroll .view[data-v-1dfea924]{overflow:hidden}.collect .scroll .view .select_control[data-v-1dfea924]{width:85%;height:%?100?%;margin:0 auto %?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fffeff;font-size:%?38?%}.collect .scroll .view .view_item[data-v-1dfea924]{width:90%;margin:0 %?50?%;padding-bottom:%?320?%}.collect .select_confirm[data-v-1dfea924]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fffeff;background-color:#1a191b}.collect .select_confirm .icon-trash[data-v-1dfea924]{font-size:%?60?%}',""]),n.exports=t}}]);