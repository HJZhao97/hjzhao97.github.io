webpackJsonp([6],{"882t":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mtWM"),c=n.n(i),r={name:"Technology",data:function(){return{techArticle:{},waiting:!0}},inject:["routerRefresh"],beforeRouteUpdate:function(t,e,n){this.routerRefresh(),n()},created:function(){var t=this;c.a.get("/TechArticles/"+this.$route.params.id).then(function(e){setTimeout(function(){t.waiting=!1},300),t.techArticle=e.data})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"technology"},[t.waiting?n("div",{staticClass:"wait"},[t._v("\n    正在请求数据，请稍候...\n  ")]):n("div",[n("h2",[t._v(t._s(t.techArticle.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.techArticle.content)}})])])},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("UuGb")},"data-v-3c21c582",null);e.default=o.exports},UuGb:function(t,e){}});
//# sourceMappingURL=6.f547e559ef4eb5324ae1.js.map