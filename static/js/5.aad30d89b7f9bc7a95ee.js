webpackJsonp([5],{"882t":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mtWM"),c=n.n(i),s={name:"Technology",data:function(){return{techArticle:{}}},created:function(){var t=this;c.a.get("/TechArticles/"+this.$route.params.id).then(function(e){console.log(e.data),t.techArticle=e.data})}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"technology"},[e("h2",[this._v(this._s(this.techArticle.title))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.techArticle.content)}})])},staticRenderFns:[]};var a=n("VU/8")(s,r,!1,function(t){n("jLAV")},"data-v-33e75234",null);e.default=a.exports},jLAV:function(t,e){}});
//# sourceMappingURL=5.aad30d89b7f9bc7a95ee.js.map