(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{299:function(t,e,o){var content=o(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("9cc57e16",content,!0,{sourceMap:!1})},308:function(t,e,o){"use strict";var n=o(6),r=o(3),l=o(61),d=o(26),c=o(36),h=o(13),f=o(4),v=o(191),x=o(138),w=o(309),_=o(310),E=o(77),C=o(311),m=[],S=r(m.sort),R=r(m.push),K=f((function(){m.sort(void 0)})),O=f((function(){m.sort(null)})),y=x("sort"),M=!f((function(){if(E)return E<70;if(!(w&&w>3)){if(_)return!0;if(C)return C<603;var code,t,e,o,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(o=0;o<47;o++)m.push({k:t+o,v:e})}for(m.sort((function(a,b){return b.v-a.v})),o=0;o<m.length;o++)t=m[o].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:K||!O||!y||!M},{sort:function(t){void 0!==t&&l(t);var e=d(this);if(M)return void 0===t?S(e):S(e,t);var o,n,r=[],f=c(e);for(n=0;n<f;n++)n in e&&R(r,e[n]);for(v(r,function(t){return function(e,o){return void 0===o?-1:void 0===e?1:void 0!==t?+t(e,o)||0:h(e)>h(o)?1:-1}}(t)),o=r.length,n=0;n<o;)e[n]=r[n++];for(;n<f;)delete e[n++];return e}})},309:function(t,e,o){var n=o(60).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},310:function(t,e,o){var n=o(60);t.exports=/MSIE|Trident/.test(n)},311:function(t,e,o){var n=o(60).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},334:function(t,e,o){"use strict";o(299)},335:function(t,e,o){var n=o(105)(!1);n.push([t.i,"header[data-v-104eaabc]{width:100%;height:70px;display:flex;justify-content:center;align-items:center}ul[data-v-104eaabc]{width:80%;margin:0 auto}ul>div[data-v-104eaabc]{display:flex;margin:10px 0}ul h2[data-v-104eaabc]{font-size:2.2em}ul li[data-v-104eaabc]{flex-direction:column;list-style:none;box-shadow:0 0 5px 5px rgba(0,0,0,.1);padding:20px;margin:20px 0;word-wrap:break-word}ul li[data-v-104eaabc],ul li .box[data-v-104eaabc]{display:flex;align-items:center}ul li .box[data-v-104eaabc]{width:100%;justify-content:space-between}ul li .box h3[data-v-104eaabc]{width:70%;text-align:center;white-space:pre-wrap}ul li .box button[data-v-104eaabc],ul li .box div button[data-v-104eaabc]{width:50px;height:30px;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:none;transition:.5s;cursor:pointer}ul li .box button[data-v-104eaabc]:hover,ul li .box div button[data-v-104eaabc]:hover{background-color:#d77;border:1px solid #c80000;color:#fff}ul li .box .toggle-button[data-v-104eaabc]{width:100px}ul li .box .toggle-button[data-v-104eaabc]:hover{background-color:#303030;border-color:#303030}ul .held[data-v-104eaabc]{background-color:#333;color:#fff}ul .held .box div button[data-v-104eaabc],ul .held div .toggle-button[data-v-104eaabc]{color:#fff;border:1px solid #fff}ul .held div .toggle-button[data-v-104eaabc]:hover{background-color:#fff;border:1px solid #fff;color:#303030}.flip-list-move[data-v-104eaabc]{transition:transform .5s}@media (max-width:520px){ul[data-v-104eaabc]{width:100%}ul div h2[data-v-104eaabc]{font-size:1.6em;margin-left:10px}ul li[data-v-104eaabc]{padding:10px;margin:10px 0}ul li .box h3[data-v-104eaabc]{width:auto;font-size:1em;max-width:calc(100% - 120px)}ul li .box div[data-v-104eaabc]{width:50px}ul li .box div button[data-v-104eaabc]{margin:5px 0}ul li .box .toggle-button[data-v-104eaabc]{width:50px;height:70px}}",""]),t.exports=n},339:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(308),o(51),o(107)),l={components:{SendSentence:o(267).default},data:function(){return{posts:[],modeAnswer:"answer",heldOnly:!1,MICROCMS_KEY:"",CONSUMER_KEY:"",CONSUMER_KEY_SECRET:"",ACCESS_TOKEN_KEY:"",ACCESS_TOKEN_KEY_SECRET:""}},methods:{showSendSentence:function(t){this.$refs[t][0].toggle()},getPosts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://q-box.microcms.io/api/v1/q_box_posts?filters=answer[not_exists]&orders=createdAt",{headers:{"X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).then((function(e){t.$set(t,"posts",e.contents)})).catch((function(t){alert("通信に失敗しました。："+t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},deletePost:function(t){r.a.deletePost(this,t,"q_box_posts",this.MICROCMS_KEY)},holdPost:function(t,e){r.a.holdPost(this,t,"q_box_posts",this.MICROCMS_KEY,e)},held:function(){this.heldOnly?this.posts.sort((function(t,e){return t.createdAt>e.createdAt?0:-1})):this.posts.sort((function(t,e){return t.held===e.held?0:t.held?-1:1})),this.heldOnly=!this.heldOnly}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.MICROCMS_KEY="f999ee3a5b064d859ee8072912dd0265ab9f",t.CONSUMER_KEY="Kn7JSGK3ebklzfZKsAgq8A6BB",t.CONSUMER_KEY_SECRET="Vsdsq0vosePrRgLbgVAMjco3Na4lFVQ8QiPUP3pwBp8gQG3lMe",t.ACCESS_TOKEN_KEY="1494570525166690304-hdloI9h9Vw27OZraElbtWL9GF6XPBm",t.ACCESS_TOKEN_KEY_SECRET="chgUBxGwAU3EI2njwyQXtXZZFw2tX7xAMdelA2zJuFBR3",t.getPosts();case 6:case"end":return e.stop()}}),e)})))()}},d=(o(334),o(52)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("div",[o("h2",[t._v("未回答の質問(古い順)")]),t._v(" "),o("button",{on:{click:t.held}},[t._v("保留のみ表示")])]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:!t.posts[0],expression:"!posts[0]"}]},[t._v("質問はありません")]),t._v(" "),o("transition-group",{attrs:{name:"flip-list"}},t._l(t.posts,(function(e){return o("li",{key:e.id,class:{held:e.held}},[o("div",{staticClass:"box"},[o("div",[o("button",{on:{click:function(o){return t.deletePost(e.id)}}},[t._v("削除")]),t._v(" "),o("button",{on:{click:function(o){return t.holdPost(e.id,e.held)}}},[t._v("保留")])]),t._v(" "),o("h3",[t._v(t._s(e.question))]),t._v(" "),o("button",{staticClass:"toggle-button",on:{click:function(o){return t.showSendSentence(e.id)}}},[t._v("開閉")])]),t._v(" "),o("SendSentence",{ref:e.id,refInFor:!0,staticClass:"send-sentence",attrs:{mode:t.modeAnswer,"content-id":e.id,held:e.held,show:!1,MICROCMS_KEY:t.MICROCMS_KEY,CONSUMER_KEY:t.CONSUMER_KEY,CONSUMER_KEY_SECRET:t.CONSUMER_KEY_SECRET,ACCESS_TOKEN_KEY:t.ACCESS_TOKEN_KEY,ACCESS_TOKEN_KEY_SECRET:t.ACCESS_TOKEN_KEY_SECRET},on:{"get-posts":t.getPosts}})],1)})),0)],1)}),[],!1,null,"104eaabc",null);e.default=component.exports},395:function(t,e,o){var content=o(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("aca1a006",content,!0,{sourceMap:!1})},485:function(t,e,o){"use strict";o(395)},486:function(t,e,o){var n=o(105)(!1);n.push([t.i,"#app header[data-v-1258ab15]{width:100%;height:70px;background-color:#fff;position:fixed;top:0;display:flex;justify-content:space-between;align-items:center;box-shadow:0 0 10px 5px rgba(0,0,0,.2);z-index:1000}#app header h1[data-v-1258ab15]{cursor:pointer}#app header .nuxt-link[data-v-1258ab15]{width:20%;height:100%;background-color:rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;color:#333;text-decoration:none;transition:.5s}#app header .nuxt-link[data-v-1258ab15]:hover{background-color:#303030;color:#fff}#app header button[data-v-1258ab15]{width:20%;height:100%;background-color:rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;color:#333;text-decoration:none;transition:.5s;border:none;cursor:pointer}#app header button[data-v-1258ab15]:hover{background-color:#303030;color:#fff}#app .answer-wait-post[data-v-1258ab15],#app .answer-wait-reply[data-v-1258ab15]{margin-top:90px}@media (max-width:520px){#app header[data-v-1258ab15]{height:60px}#app header h1[data-v-1258ab15]{display:none}#app header .nuxt-link[data-v-1258ab15]{width:50%}#app header button[data-v-1258ab15]{border-left:1px solid #303030;width:50%}}",""]),t.exports=n},500:function(t,e,o){"use strict";o.r(e);var n=o(339),r=o(400),l={conponents:{AnswerWaitPost:n.default,AnswerWaitReply:r.default},data:function(){return{showPost:!0,showReply:!1}},methods:{changePage:function(){this.showPost=!this.showPost,this.showReply=!this.showReply}}},d=(o(485),o(52)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",[o("nuxt-link",{staticClass:"nuxt-link",attrs:{to:"/"}},[t._v("質問一覧")]),t._v(" "),o("h1",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#app",offset:-200,duration:500},expression:"{\n      element: '#app',\n      offset: -200,\n      duration: 500\n    }"}]},[t._v("お手サーの質問箱")]),t._v(" "),o("button",{on:{click:t.changePage}},[t._v("画面切り替え")])],1),t._v(" "),o("AnswerWaitPost",{directives:[{name:"show",rawName:"v-show",value:t.showPost,expression:"showPost"}],staticClass:"answer-wait-post"}),t._v(" "),o("AnswerWaitReply",{directives:[{name:"show",rawName:"v-show",value:t.showReply,expression:"showReply"}],staticClass:"answer-wait-reply"})],1)}),[],!1,null,"1258ab15",null);e.default=component.exports;installComponents(component,{AnswerWaitPost:o(339).default,AnswerWaitReply:o(400).default})}}]);