(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8],{264:function(e,t,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(106).default)("7e26872d",content,!0,{sourceMap:!1})},267:function(e,t,n){"use strict";n.r(t);var o=n(302),r=n(8),c=(n(41),n(51),{props:{mode:"",contentId:"",replyTweetId:"",contentOriginId:"",replySentence:"",held:!1,show:"",MICROCMS_KEY:"",CONSUMER_KEY:"",CONSUMER_KEY_SECRET:"",ACCESS_TOKEN_KEY:"",ACCESS_TOKEN_KEY_SECRET:""},data:function(){return{getShow:this.show,getMode:this.mode,getContentId:this.contentId,getReplyTweetId:this.replyTweetId,getContentOriginId:this.contentOriginId,getReplySentence:this.replySentence,sentence:"",textareaWord:{question:"お手伝いサークルへの質問を入力する",answer:"この質問への回答を入力する",reply:"この質問への返信を入力する",replyForReply:"この返信への回答を入力する"},buttonWord:{question:"質問する",answer:"回答する",reply:"返信する",replyForReply:"回答する"}}},methods:{toggle:function(){this.getShow=!this.getShow},sendSentence:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.sentence||"question"!==e.getMode){t.next=5;break}return t.next=3,e.$axios.$post("https://q-box.microcms.io/api/v1/q_box_posts",{question:e.sentence,held:!1},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":e.MICROCMS_KEY}}).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)})).then((function(){e.sentence="",alert("送信しました。")}));case 3:t.next=15;break;case 5:if(!e.sentence||"answer"!==e.getMode){t.next=9;break}e.postTweet(e.sentence,e.getContentId,"tweet","answer"),t.next=15;break;case 9:if(!e.sentence||"reply"!==e.getMode){t.next=14;break}return t.next=12,e.$axios.$post("https://q-box.microcms.io/api/v1/q_box_replies/",{replyFor:e.getContentId,replySentence:e.sentence,held:!1},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":e.MICROCMS_KEY}}).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)})).then((function(){e.sentence=""}));case 12:t.next=15;break;case 14:e.sentence&&"replyForReply"===e.getMode&&(e.postTweet("【フォロワーの方からの情報】\n\n"+e.getReplySentence+"\n\n"+e.sentence,e.getReplyTweetId,"reply","replyForReply"),e.$emit("setReply"));case 15:case"end":return t.stop()}}),t)})))()},postTweet:function(e,t,c,d){var l=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var h,i,v,f,x,m,_,w,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(110,140,h=Object(o.a)(e),!Array.isArray(e))for((h=[]).push(e.slice(0,110)),i=110;i<e.length-2;i+=140)h.push(e.slice(i,i+140));v=n(282),f=n(283),x=v({consumer:{key:l.CONSUMER_KEY,secret:l.CONSUMER_KEY_SECRET},signature_method:"HMAC-SHA1",hash_function:function(e,t){return f.createHmac("sha1",t).update(e).digest("base64")}}),m={key:l.ACCESS_TOKEN_KEY,secret:l.ACCESS_TOKEN_KEY_SECRET},_={url:"https://api.twitter.com/2/tweets",method:"POST"},w=x.toHeader(x.authorize(_,m)).Authorization,data=[],"tweet"===c?data={text:h[0]+"\nhttps://immense-sea-94037.herokuapp.com/"+t}:"reply"===c?data={text:h[0],reply:{in_reply_to_tweet_id:t}}:console.log("not fit!"),l.$axios.$post("/api/tweets",data,{headers:{authorization:w}}).then((function(e){h.length>1&&l.postTweet(h.slice(1),e.data.id,"reply"),"answer"===d?l.sendSentenceModeAnswer(e.data.id):"replyForReply"===d&&(l.sendSentenceModeReplyForReply(e.data.id),l.setReplyTweetId(e.data.id))})).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)}));case 13:case"end":return r.stop()}}),r)})))()},sendSentenceModeAnswer:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$patch("https://q-box.microcms.io/api/v1/q_box_posts/"+t.getContentId,{answer:t.sentence,replyTweetId:e},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)})).then((function(){t.$emit("get-posts"),t.sentence=""}));case 2:case"end":return n.stop()}}),n)})))()},sendSentenceModeReplyForReply:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$patch("https://q-box.microcms.io/api/v1/q_box_replies/"+e.getContentId,{replyAnswer:e.sentence},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":e.MICROCMS_KEY}}).then((function(){e.$emit("set-replies"),e.sentence=""})).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},setReplyTweetId:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$patch("https://q-box.microcms.io/api/v1/q_box_posts/"+t.getContentOriginId,{replyTweetId:e},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()}}}),d=(n(269),n(52)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.getShow,expression:"getShow"}],staticClass:"sentence-box",class:{held:this.held,boxHeightInPosts:"reply"===e.getMode}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:"question"===e.getMode,expression:"getMode === 'question'"}]},[e._v("お手伝いサークルに質問する")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sentence,expression:"sentence"}],attrs:{placeholder:this.textareaWord[e.mode],autocomplete:"off"},domProps:{value:e.sentence},on:{input:function(t){t.target.composing||(e.sentence=t.target.value)}}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:"answer"===e.getMode||"replyForReply"===e.getMode,expression:"getMode === 'answer' || getMode === 'replyForReply'"}]},[e._v(e._s(this.sentence.length))]),e._v(" "),n("button",{staticClass:"button",on:{click:e.sendSentence}},[e._v(e._s(this.buttonWord[e.mode]))])])])}),[],!1,null,"a19e4cca",null);t.default=component.exports},269:function(e,t,n){"use strict";n(264)},270:function(e,t,n){var o=n(105)(!1);o.push([e.i,".sentence-box[data-v-a19e4cca]{width:calc(100% - 40px);height:150px;display:flex;flex-direction:column;align-items:center;transition:.5s;padding-top:20px;overflow:hidden}.sentence-box h3[data-v-a19e4cca]{margin:10px auto}.sentence-box textarea[data-v-a19e4cca]{resize:none;width:calc(80% - 40px);height:30px;padding:20px;outline:none;border-color:rgba(0,0,0,.15);border-width:2px;border-radius:10px}.sentence-box button[data-v-a19e4cca]{width:80px;height:30px;margin-top:10px;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:none;transition:.5s;cursor:pointer}.sentence-box button[data-v-a19e4cca]:hover{background-color:#77d;border:1px solid #0000c8;color:#fff}.held .button[data-v-a19e4cca]{color:#fff;border:1px solid #fff}.boxHeightInPosts[data-v-a19e4cca]{height:114px}.v-enter[data-v-a19e4cca]{opacity:0;height:0;padding-top:0}.v-enter-to[data-v-a19e4cca]{opacity:1;height:150px;padding-top:20px}.v-enter-active[data-v-a19e4cca]{transition:.5s}.v-leave[data-v-a19e4cca]{opacity:1;padding-top:20px}.v-leave-to[data-v-a19e4cca]{opacity:0;height:0;padding-top:0}.v-leave-active[data-v-a19e4cca]{transition:.5s}@media (max-width:520px){.sentence-box[data-v-a19e4cca]{width:100%;padding-top:10px}.sentence-box h3[data-v-a19e4cca]{font-size:1em}.sentence-box textarea[data-v-a19e4cca]{width:calc(90% - 40px);padding:10px}.boxHeightInPosts[data-v-a19e4cca]{height:94px}.v-enter[data-v-a19e4cca]{opacity:0;height:0;padding-top:0}.v-enter-to[data-v-a19e4cca]{opacity:1;padding-top:10px;height:150px}.v-enter-active[data-v-a19e4cca]{transition:.5s}.v-leave[data-v-a19e4cca]{opacity:1;padding-top:10px;height:150px}.v-leave-to[data-v-a19e4cca]{opacity:0;height:0;padding-top:0}.v-leave-active[data-v-a19e4cca]{transition:opacity .1s,padding-top .5s,height .5s}}",""]),e.exports=o},285:function(e,t){},286:function(e,t){},288:function(e,t){},289:function(e,t){},291:function(e,t){},292:function(e,t){},293:function(e,t){},294:function(e,t){},295:function(e,t){},297:function(e,t){},394:function(e,t,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(106).default)("0ddf826a",content,!0,{sourceMap:!1})},400:function(e,t,n){"use strict";n.r(t);n(41),n(24),n(42),n(32),n(25),n(31),n(43),n(44),n(33);var o=n(8),r=(n(45),n(12),n(51),n(107));function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={components:{SendSentence:n(267).default},data:function(){return{MICROCMS_KEY:"",CONSUMER_KEY:"",CONSUMER_KEY_SECRET:"",ACCESS_TOKEN_KEY:"",ACCESS_TOKEN_KEY_SECRET:"",replies:[],posts:[],modeReplyForReply:"replyForReply"}},methods:{showSendSentence:function(e){this.$refs[e][0].toggle()},setReply:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://q-box.microcms.io/api/v1/q_box_replies?filters=replyAnswer[not_exists]&orders=createdAt",{headers:{"X-MICROCMS-API-KEY":e.MICROCMS_KEY}}).then((function(t){var n=e.makeIdList(t.contents);e.$set(e,"replies",t.contents),e.getPost(n)})).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},makeIdList:function(e){var t,n=[],o=c(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;n.push(r.replyFor)}}catch(e){o.e(e)}finally{o.f()}return n.filter((function(e,i,t){return t.indexOf(e)===i}))},getPost:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=[],r=c(e),n.prev=2,r.s();case 4:if((d=r.n()).done){n.next=10;break}return l=d.value,n.next=8,t.$axios.$get("https://q-box.microcms.io/api/v1/q_box_posts?filters=id[equals]"+l,{headers:{"X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).then((function(e){e.contents[0].replies=t.replies.filter((function(t){if(t.replyFor===e.contents[0].id)return t})),o.push(e.contents[0])})).catch((function(e){alert("通信に失敗しました。："+e),console.log(e)}));case 8:n.next=4;break;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),r.e(n.t0);case 15:return n.prev=15,r.f(),n.finish(15);case 18:t.$set(t,"posts",o);case 19:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},deletePost:function(e){r.a.deletePost(this,e,"q_box_replies",this.MICROCMS_KEY)},holdPost:function(e,t){r.a.holdPost(this,e,"q_box_replies",this.MICROCMS_KEY,t)}},mounted:function(){this.MICROCMS_KEY="f999ee3a5b064d859ee8072912dd0265ab9f",this.CONSUMER_KEY="Kn7JSGK3ebklzfZKsAgq8A6BB",this.CONSUMER_KEY_SECRET="Vsdsq0vosePrRgLbgVAMjco3Na4lFVQ8QiPUP3pwBp8gQG3lMe",this.ACCESS_TOKEN_KEY="1494570525166690304-hdloI9h9Vw27OZraElbtWL9GF6XPBm",this.ACCESS_TOKEN_KEY_SECRET="chgUBxGwAU3EI2njwyQXtXZZFw2tX7xAMdelA2zJuFBR3",this.setReply()}},h=(n(483),n(52)),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("h2",[e._v("未回答の返信")]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.posts[0],expression:"!posts[0]"}]},[e._v("質問はありません")]),e._v(" "),e._l(e.posts,(function(t){return n("li",{key:t.id},[n("h3",[e._v(e._s(t.question))]),e._v(" "),n("p",[e._v(e._s(t.answer))]),e._v(" "),e._l(t.replies,(function(o){return n("div",{key:o.id,class:{held:o.held}},[n("div",{staticClass:"manage-send-sentence-box"},[n("div",[n("button",{on:{click:function(t){return e.deletePost(o.id)}}},[e._v("削除")]),e._v(" "),n("button",{on:{click:function(t){return e.holdPost(o.id,o.held)}}},[e._v("保留")])]),e._v(" "),n("h4",[e._v(e._s(o.replySentence))]),e._v(" "),n("button",{staticClass:"toggle-button",on:{click:function(t){return e.showSendSentence(o.id)}}},[e._v("開閉")])]),e._v(" "),n("SendSentence",{ref:o.id,refInFor:!0,attrs:{mode:e.modeReplyForReply,contentId:o.id,replyTweetId:t.replyTweetId,contentOriginId:t.id,replySentence:o.replySentence,show:!1,MICROCMS_KEY:e.MICROCMS_KEY,CONSUMER_KEY:e.CONSUMER_KEY,CONSUMER_KEY_SECRET:e.CONSUMER_KEY_SECRET,ACCESS_TOKEN_KEY:e.ACCESS_TOKEN_KEY,ACCESS_TOKEN_KEY_SECRET:e.ACCESS_TOKEN_KEY_SECRET},on:{"set-replies":e.setReply}})],1)}))],2)}))],2)}),[],!1,null,"0b03a6ec",null);t.default=component.exports},483:function(e,t,n){"use strict";n(394)},484:function(e,t,n){var o=n(105)(!1);o.push([e.i,"header[data-v-0b03a6ec]{width:100%;height:70px;border:1px solid red;display:flex;justify-content:center;align-items:center}ul[data-v-0b03a6ec]{width:80%;margin:0 auto}ul h2[data-v-0b03a6ec]{font-size:2.2em}ul li[data-v-0b03a6ec]{list-style:none;margin:20px 0;padding:20px;display:flex;align-items:center;flex-direction:column;box-shadow:0 0 5px 5px rgba(0,0,0,.1);word-wrap:break-word}ul li h3[data-v-0b03a6ec]{white-space:pre-wrap;text-align:center;margin-bottom:30px;color:red}ul li h3[data-v-0b03a6ec],ul li p[data-v-0b03a6ec]{width:70%;text-align:center}ul li>div[data-v-0b03a6ec]{width:90%;display:flex;align-items:center;flex-direction:column;box-shadow:0 0 5px 5px rgba(0,0,0,.1);padding:20px;margin:10px 0}ul li>div .manage-send-sentence-box[data-v-0b03a6ec]{width:100%;display:flex;justify-content:space-between;align-items:center}ul li>div .manage-send-sentence-box button[data-v-0b03a6ec],ul li>div .manage-send-sentence-box div button[data-v-0b03a6ec]{width:50px;height:30px;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:none;transition:.5s;cursor:pointer}ul li>div .manage-send-sentence-box button[data-v-0b03a6ec]:hover,ul li>div .manage-send-sentence-box div button[data-v-0b03a6ec]:hover{background-color:#d77;border:1px solid #c80000;color:#fff}ul li>div .manage-send-sentence-box .toggle-button[data-v-0b03a6ec]{width:100px}ul li>div .manage-send-sentence-box .toggle-button[data-v-0b03a6ec]:hover{background-color:#303030;border:1px solid #fff}ul li>div .manage-send-sentence-box h4[data-v-0b03a6ec]{width:70%;white-space:pre-wrap;text-align:center}ul li .held[data-v-0b03a6ec]{background-color:#333;color:#fff}ul li .held .toggle-button[data-v-0b03a6ec],ul li .held div div button[data-v-0b03a6ec]{color:#fff;border:1px solid #fff}ul li .held .toggle-button[data-v-0b03a6ec]:hover{background-color:#fff;color:#303030}p[data-v-0b03a6ec]{margin:5px 0}@media (max-width:520px){ul[data-v-0b03a6ec]{width:100%}ul h2[data-v-0b03a6ec]{font-size:1.6em;margin-left:10px}ul li[data-v-0b03a6ec]{padding:20px 10px;margin:10px 0}ul li h3[data-v-0b03a6ec]{margin-bottom:10px}ul li h3[data-v-0b03a6ec],ul li p[data-v-0b03a6ec]{width:90%}ul li>div[data-v-0b03a6ec]{margin:5px 0;padding:10px}ul li>div .manage-send-sentence-box div[data-v-0b03a6ec]{width:50px}ul li>div .manage-send-sentence-box div button[data-v-0b03a6ec]{margin:5px 0}ul li>div .manage-send-sentence-box h4[data-v-0b03a6ec]{max-width:calc(100% - 120px)}ul li>div .manage-send-sentence-box .toggle-button[data-v-0b03a6ec]{width:50px;height:70px}}",""]),e.exports=o}}]);