webpackJsonp([2],{"4jkU":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mtWM"),r=n.n(i),a={name:"Memory",data:function(){return{memoryArticle:{},waiting:!0}},created:function(){var t=this;r.a.get("/MemoryArticles/"+this.$route.params.id).then(function(e){setTimeout(function(){t.waiting=!1},300),t.memoryArticle=e.data})}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"memory"},[t.waiting?n("div",{staticClass:"wait"},[t._v("\n    正在请求数据，请稍候...\n  ")]):n("div",[n("h2",[t._v(t._s(t.memoryArticle.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.memoryArticle.content)}})])])},staticRenderFns:[]};var o=n("VU/8")(a,c,!1,function(t){n("It/U")},"data-v-62994c66",null);e.default=o.exports},"It/U":function(t,e){}});
//# sourceMappingURL=2.6865c927910dbcdf4932.js.map