/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{262:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("2c222d30",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(51),n(284),n(285),{props:{mode:"",contentId:"",replyTweetId:"",contentOriginId:"",replySentence:"",held:!1,show:"",MICROCMS_KEY:"",CONSUMER_KEY:"",CONSUMER_KEY_SECRET:"",ACCESS_TOKEN_KEY:"",ACCESS_TOKEN_KEY_SECRET:""},data:function(){return{getShow:this.show,getMode:this.mode,getContentId:this.contentId,getReplyTweetId:this.replyTweetId,getContentOriginId:this.contentOriginId,getReplySentence:this.replySentence,sentence:"",textareaWord:{question:"質問を入力する",answer:"この質問への回答を入力する",reply:"この質問への返信を入力する",replyForReply:"この返信への回答を入力する"},buttonWord:{question:"質問する",answer:"回答する",reply:"返信する",replyForReply:"回答する"}}},methods:{toggle:function(){this.getShow=!this.getShow},sendSentence:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sentence||"question"!==t.getMode){e.next=5;break}return e.next=3,t.$axios.$post("https://q-box.microcms.io/api/v1/q_box_posts",{question:t.sentence,held:!1},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).catch((function(t){alert("通信に失敗しました。："+t),console.log(t)})).then((function(){t.sentence="",alert("送信しました。")}));case 3:e.next=8;break;case 5:if(!t.sentence||"reply"!==t.getMode){e.next=8;break}return e.next=8,t.$axios.$post("https://q-box.microcms.io/api/v1/q_box_replies/",{replyFor:t.getContentId,replySentence:t.sentence,held:!1},{headers:{"Content-Type":"application/json","X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).catch((function(t){alert("通信に失敗しました。："+t),console.log(t)})).then((function(){t.sentence=""}));case 8:case"end":return e.stop()}}),e)})))()}}}),d=(n(267),n(52)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.getShow,expression:"getShow"}],staticClass:"sentence-box",class:{held:this.held,boxHeightInPosts:"reply"===t.getMode}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:"question"===t.getMode,expression:"getMode === 'question'"}]},[t._v("質問する")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sentence,expression:"sentence"}],attrs:{placeholder:this.textareaWord[t.mode],autocomplete:"off"},domProps:{value:t.sentence},on:{input:function(e){e.target.composing||(t.sentence=e.target.value)}}}),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:"answer"===t.getMode||"replyForReply"===t.getMode,expression:"getMode === 'answer' || getMode === 'replyForReply'"}]},[t._v("\n      "+t._s(this.sentence.length)+"\n    ")]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.sendSentence()}}},[t._v("\n      "+t._s(this.buttonWord[t.mode])+"\n    ")])])])}),[],!1,null,"071deed6",null);e.default=component.exports},267:function(t,e,n){"use strict";n(262)},268:function(t,e,n){var r=n(106)(!1);r.push([t.i,".sentence-box[data-v-071deed6]{width:calc(100% - 40px);height:150px;display:flex;flex-direction:column;align-items:center;transition:.5s;padding-top:20px;overflow:hidden}.sentence-box h3[data-v-071deed6]{margin:10px auto}.sentence-box textarea[data-v-071deed6]{resize:none;width:calc(80% - 40px);height:30px;padding:20px;outline:none;border-color:rgba(0,0,0,.15);border-width:2px;border-radius:10px}.sentence-box button[data-v-071deed6]{width:80px;height:30px;margin-top:10px;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:none;transition:.5s;cursor:pointer}.sentence-box button[data-v-071deed6]:hover{background-color:#77d;border:1px solid #0000c8;color:#fff}.held .button[data-v-071deed6]{color:#fff;border:1px solid #fff}.boxHeightInPosts[data-v-071deed6]{height:114px}.v-enter[data-v-071deed6]{opacity:0;height:0;padding-top:0}.v-enter-to[data-v-071deed6]{opacity:1;height:150px;padding-top:20px}.v-enter-active[data-v-071deed6]{transition:.5s}.v-leave[data-v-071deed6]{opacity:1;padding-top:20px}.v-leave-to[data-v-071deed6]{opacity:0;height:0;padding-top:0}.v-leave-active[data-v-071deed6]{transition:.5s}@media (max-width:520px){.sentence-box[data-v-071deed6]{width:100%;padding-top:10px}.sentence-box h3[data-v-071deed6]{font-size:1em}.sentence-box textarea[data-v-071deed6]{width:calc(90% - 40px);padding:10px}.boxHeightInPosts[data-v-071deed6]{height:94px}.v-enter[data-v-071deed6]{opacity:0;height:0;padding-top:0}.v-enter-to[data-v-071deed6]{opacity:1;padding-top:10px;height:150px}.v-enter-active[data-v-071deed6]{transition:.5s}.v-leave[data-v-071deed6]{opacity:1;padding-top:10px;height:150px}.v-leave-to[data-v-071deed6]{opacity:0;height:0;padding-top:0}.v-leave-active[data-v-071deed6]{transition:opacity .1s,padding-top .5s,height .5s}}",""]),t.exports=r},269:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("6223ff68",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("27f0e51f",i,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var a=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],s={id:t+":"+a,css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,l=!1,c=function(){},u=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,a){l=n,u=a||{};var o=i(t,e);return b(o),function(e){for(var n=[],a=0;a<o.length;a++){var s=o[a];(d=r[s.id]).refs--,n.push(d)}for(e?b(o=i(t,e)):o=[],a=0;a<n.length;a++){var d;if(0===(d=n[a]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete r[d.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));r[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(l)return c;i.parentNode.removeChild(i)}if(p){var a=d++;i=s||(s=h()),e=x.bind(null,i,a,!1),n=x.bind(null,i,a,!0)}else i=h(),e=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g,v=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function w(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".infinite-loading-container[data-v-644ea9c9]{clear:both;text-align:center}.infinite-loading-container[data-v-644ea9c9] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-644ea9c9]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-644ea9c9]:not(:active):hover{opacity:.8}",""])},function(t,e,n){"use strict";n.r(e);var i={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},a=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),r={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},o={INFINITE_LOOP:["executed the callback function more than ".concat(i.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},s={READY:0,LOADING:1,COMPLETE:2,ERROR:3},d={color:"#666",fontSize:"14px",padding:"10px 0"},l={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:i,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:r,ERRORS:o,STATUS:s},c=n(4),u=n.n(c),p={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"bubble-item"}})})))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"circle-item"}})})))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map((function(){return t("span",{attrs:{class:"wave-item"}})})))}}};function f(t,e,n,i,a,r,o,s){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):a&&(d=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}var b=f({name:"Spinner",computed:{spinnerView:function(){return p[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return l.slots.spinner&&"string"==typeof l.slots.spinner?{render:function(){return this._v(l.slots.spinner)}}:"object"===u()(l.slots.spinner)?l.slots.spinner:p[l.props.spinner.toUpperCase()]||p.DEFAULT}}},(function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})}),[],!1,(function(t){var e=n(5);e.__inject__&&e.__inject__(t)}),"46b20d22",null).exports;function h(t){"production"!==l.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}function m(t){console.error("[Vue-infinite-loading error]: ".concat(t))}var g={timers:[],caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),this.timers.push(setTimeout((function(){t(),e.caches.splice(e.caches.indexOf(t),1),e.timers.shift()}),l.system.throttleLimit)))},reset:function(){this.timers.forEach((function(t){clearTimeout(t)})),this.timers.length=0,this.caches=[]}},v={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout((function(){t.isChecked=!0}),l.system.loopCheckTimeout),this.times>l.system.loopCheckMaxCalls&&(m(o.INFINITE_LOOP),this.isChecked=!0)}},x={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}};function w(t){return t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())}))}function y(t){return t.offsetWidth+t.offsetHeight>0}var _=f({name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:s.READY,slots:l.slots}},components:{Spinner:b},computed:{isShowSpinner:function(){return this.status===s.LOADING},isShowError:function(){return this.status===s.ERROR},isShowNoResults:function(){return this.status===s.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===s.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(l.slots).forEach((function(n){var i=w(n);(!t.$slots[i]&&!l.slots[n].render||t.$slots[i]&&!t.$slots[i][0].tag)&&(e[n]=d)})),e}},props:{distance:{type:Number,default:l.props.distance},spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:{type:[Boolean,String],default:l.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",(function(){t.scrollParent=t.getScrollParent()}),{immediate:!0}),this.scrollHandler=function(e){t.status===s.READY&&(e&&e.constructor===Event&&y(t.$el)?g.throttle(t.attemptLoad):t.attemptLoad())},setTimeout((function(){t.scrollHandler(),t.scrollParent.addEventListener("scroll",t.scrollHandler,a)}),1),this.$on("$InfiniteLoading:loaded",(function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick((function(){x.restore(t.scrollParent)})),t.status===s.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||h(r.STATE_CHANGER)})),this.$on("$InfiniteLoading:complete",(function(e){t.status=s.COMPLETE,t.$nextTick((function(){t.$forceUpdate()})),t.scrollParent.removeEventListener("scroll",t.scrollHandler,a),e&&e.target===t||h(r.STATE_CHANGER)})),this.$on("$InfiniteLoading:reset",(function(e){t.status=s.READY,t.isFirstLoad=!0,x.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,a),setTimeout((function(){g.reset(),t.scrollHandler()}),1),e&&e.target===t||h(r.IDENTIFIER)})),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=s.ERROR,g.reset()}},this.onInfinite&&h(r.INFINITE_EVENT)},deactivated:function(){this.status===s.LOADING&&(this.status=s.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,a)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,a)},methods:{attemptLoad:function(t){var e=this;this.status!==s.COMPLETE&&y(this.$el)&&this.getCurrentDistance()<=this.distance?(this.status=s.LOADING,"top"===this.direction&&this.$nextTick((function(){x.save(e.scrollParent)})),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||v.isChecked||v.track()):this.status===s.LOADING&&(this.status=s.READY)},getCurrentDistance:function(){return"top"===this.direction?"number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom)},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=document.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:(!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1||e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==s.COMPLETE&&(g.reset(),x.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,a))}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infinite-loading-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[n("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?n(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?n(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?n(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),n("br"),t._v(" "),n("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])}),[],!1,(function(t){var e=n(7);e.__inject__&&e.__inject__(t)}),"644ea9c9",null).exports;function C(t){l.mode=t.config.productionTip?"development":"production"}Object.defineProperty(_,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(l.props,e&&e.props),Object.assign(l.slots,e&&e.slots),Object.assign(l.system,e&&e.system),t.component("infinite-loading",_),C(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",_),C(window.Vue)),e.default=_}])},283:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("3a9a889b",content,!0,{sourceMap:!1})},287:function(t,e){},288:function(t,e){},290:function(t,e){},291:function(t,e){},293:function(t,e){},294:function(t,e){},295:function(t,e){},296:function(t,e){},297:function(t,e){},299:function(t,e){},309:function(t,e,n){"use strict";n(283)},310:function(t,e,n){var r=n(106)(!1);r.push([t.i,".send-sentence[data-v-50e6f388]{margin:70px auto 0;width:60%;transition:0s}h2[data-v-50e6f388]{margin:30px 0;font-size:2.2em}ul[data-v-50e6f388]{width:60%;margin:0 auto}ul li[data-v-50e6f388]{display:flex;flex-direction:column;align-items:center;margin-bottom:30px;padding:5%;box-shadow:0 0 5px 5px rgba(0,0,0,.1)}ul li canvas[data-v-50e6f388]{width:100%;border-radius:10px}ul li p[data-v-50e6f388]{white-space:pre-line;word-wrap:break-word}ul li .primary-post[data-v-50e6f388]{width:80%;text-align:center;margin:5px auto}ul li .primary-post .card-button[data-v-50e6f388]{transition:.5s;cursor:pointer}ul li .primary-post .card-button[data-v-50e6f388]:hover{opacity:.7}ul li .primary-post .answer[data-v-50e6f388]{width:80%;margin:10px auto}ul li .primary-post .created-at[data-v-50e6f388]{width:100px;padding:5px 10px;margin:10px;border-radius:5px;border:2px solid rgba(67,134,135,.7);background-color:#75b8b9;color:#fff}ul li .secondary-post[data-v-50e6f388]{width:60%;text-align:center;margin:5px auto}ul li .secondary-post p[data-v-50e6f388]{width:80%;margin:10px auto}.spinner[data-v-50e6f388]{-webkit-animation:spinner-data-v-50e6f388 1s ease infinite;animation:spinner-data-v-50e6f388 1s ease infinite}@-webkit-keyframes spinner-data-v-50e6f388{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes spinner-data-v-50e6f388{0%{opacity:1}50%{opacity:0}to{opacity:1}}.no-more[data-v-50e6f388],.no-results[data-v-50e6f388],.spinner[data-v-50e6f388]{margin:30px auto}@media (max-width:1024px){ul[data-v-50e6f388]{width:100%}}@media (max-width:520px){.send-sentence[data-v-50e6f388]{width:100%;margin:0!important}ul[data-v-50e6f388]{width:100%}ul h2[data-v-50e6f388]{font-size:1.6em;margin:0 10px 10px}ul li[data-v-50e6f388]{width:100%;padding:20px 0}ul li .primary-post[data-v-50e6f388]{width:90%}ul li .secondary-post[data-v-50e6f388]{width:75%}}",""]),t.exports=r},388:function(t,e,n){"use strict";n.r(e);n(41),n(13),n(35),n(42),n(23),n(29),n(43),n(44);var r=n(8),o=(n(51),n(30),n(31),n(73),n(108)),d=n(269);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return d=t.done,t},e:function(t){l=!0,o=t},f:function(){try{d||null==n.return||n.return()}finally{if(l)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={components:{InfiniteLoading:n.n(d).a},data:function(){return{MICROCMS_KEY:"",posts:[],modeQuestion:"question",modeReply:"reply",postCount:0}},methods:{transition:function(t){this.$router.push({path:t})},setReply:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.posts){e.next=17;break}n=l(t.posts),e.prev=2,d=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,e.next=3,t.$axios.$get("https://q-box.microcms.io/api/v1/q_box_replies?filters=replyFor[equals]"+n.id+"[and]replyAnswer[exists]&orders=createdAt",{headers:{"X-MICROCMS-API-KEY":t.MICROCMS_KEY}}).then((function(e){o.a.generateImage(document,e.contents,"replySentence",""),t.$set(n,"replies",e.contents),o.a.modifyUrlInPost(n.replies,"replyAnswer")})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=9;break}return e.delegateYield(d(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),n.e(e.t1);case 14:return e.prev=14,n.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))()},loadNewPost:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return 10,n.next=3,e.$axios.$get("https://q-box.microcms.io/api/v1/q_box_posts?filters=answer[exists]&limit=10&offset="+e.postCount,{headers:{"X-MICROCMS-API-KEY":e.MICROCMS_KEY}}).then((function(n){e.postCount<n.totalCount?(o.a.modifyUrlInPost(n.contents,"answer"),e.posts=e.posts.concat(n.contents),o.a.generateImage(document,n.contents,"question",""),e.setReply(),e.postCount+=n.contents.length,t.loaded()):t.complete()})).catch((function(e){t.error(),alert("通信に失敗しました。："+e),console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.MICROCMS_KEY="f999ee3a5b064d859ee8072912dd0265ab9f";case 1:case"end":return e.stop()}}),e)})))()}},h=(n(309),n(52)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("SharedSendSentence",{staticClass:"send-sentence",attrs:{mode:t.modeQuestion,show:!0,MICROCMS_KEY:t.MICROCMS_KEY}}),t._v(" "),n("ul",[n("h2",[t._v("最新の質問")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.posts[0],expression:"!posts[0]"}]},[t._v("質問はありません")]),t._v(" "),t._l(t.posts,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"primary-post"},[n("p",{staticClass:"created-at"},[t._v(t._s(e.createdAt.substr(0,10)))]),t._v(" "),n("div",{staticClass:"card-button",on:{click:function(n){return t.transition(e.id)}}},[n("canvas",{attrs:{id:e.id}})]),t._v(" "),n("p",{staticClass:"answer",domProps:{innerHTML:t._s(e.answer)}})]),t._v(" "),t._l(e.replies,(function(e){return n("div",{key:e.id,staticClass:"secondary-post"},[n("canvas",{attrs:{id:e.id}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.replyAnswer)}})])})),t._v(" "),n("SharedSendSentence",{attrs:{mode:t.modeReply,contentId:e.id,show:!0,MICROCMS_KEY:t.MICROCMS_KEY}})],2)}))],2),t._v(" "),n("infinite-loading",{on:{infinite:t.loadNewPost}},[n("div",{staticClass:"spinner",attrs:{slot:"spinner"},slot:"spinner"},[t._v("読み込んでいます...")]),t._v(" "),n("div",{staticClass:"no-more",attrs:{slot:"no-more"},slot:"no-more"},[t._v("条件に合致した質問は以上です。")]),t._v(" "),n("div",{staticClass:"no-results",attrs:{slot:"no-results"},slot:"no-results"},[t._v("\n      条件に合致した質問は見つかりませんでした。\n    ")]),t._v(" "),n("div",{staticClass:"no-results",attrs:{slot:"error"},slot:"error"},[t._v("エラーが発生しました。")])])],1)}),[],!1,null,"50e6f388",null);e.default=component.exports;installComponents(component,{SharedSendSentence:n(266).default})}}]);