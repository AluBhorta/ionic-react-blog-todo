(this["webpackJsonpreact-ionic-blog"]=this["webpackJsonpreact-ionic-blog"]||[]).push([[6],{46:function(e,t,n){e.exports=n(72)},52:function(e,t,n){var o={"./ion-action-sheet-ios.entry.js":[76,36],"./ion-action-sheet-md.entry.js":[77,37],"./ion-alert-ios.entry.js":[78,22],"./ion-alert-md.entry.js":[79,23],"./ion-app_8-ios.entry.js":[80,11],"./ion-app_8-md.entry.js":[81,12],"./ion-avatar_3-ios.entry.js":[82,38],"./ion-avatar_3-md.entry.js":[83,39],"./ion-back-button-ios.entry.js":[84,40],"./ion-back-button-md.entry.js":[85,41],"./ion-backdrop-ios.entry.js":[86,78],"./ion-backdrop-md.entry.js":[87,79],"./ion-button_2-ios.entry.js":[88,42],"./ion-button_2-md.entry.js":[89,43],"./ion-card_5-ios.entry.js":[90,44],"./ion-card_5-md.entry.js":[91,45],"./ion-checkbox-ios.entry.js":[92,46],"./ion-checkbox-md.entry.js":[93,47],"./ion-chip-ios.entry.js":[94,48],"./ion-chip-md.entry.js":[95,49],"./ion-col_3.entry.js":[96,80],"./ion-datetime_3-ios.entry.js":[97,18],"./ion-datetime_3-md.entry.js":[98,19],"./ion-fab_3-ios.entry.js":[99,50],"./ion-fab_3-md.entry.js":[100,51],"./ion-img.entry.js":[101,81],"./ion-infinite-scroll_2-ios.entry.js":[102,34],"./ion-infinite-scroll_2-md.entry.js":[103,35],"./ion-input-ios.entry.js":[104,52],"./ion-input-md.entry.js":[105,53],"./ion-item-option_3-ios.entry.js":[106,54],"./ion-item-option_3-md.entry.js":[107,55],"./ion-item_8-ios.entry.js":[108,56],"./ion-item_8-md.entry.js":[109,57],"./ion-loading-ios.entry.js":[110,24],"./ion-loading-md.entry.js":[111,25],"./ion-menu_3-ios.entry.js":[112,58],"./ion-menu_3-md.entry.js":[113,59],"./ion-modal-ios.entry.js":[114,13],"./ion-modal-md.entry.js":[115,14],"./ion-nav_2.entry.js":[116,17],"./ion-popover-ios.entry.js":[117,15],"./ion-popover-md.entry.js":[118,16],"./ion-progress-bar-ios.entry.js":[119,60],"./ion-progress-bar-md.entry.js":[120,61],"./ion-radio_2-ios.entry.js":[121,62],"./ion-radio_2-md.entry.js":[122,63],"./ion-range-ios.entry.js":[123,64],"./ion-range-md.entry.js":[124,65],"./ion-refresher_2-ios.entry.js":[125,26],"./ion-refresher_2-md.entry.js":[126,27],"./ion-reorder_2-ios.entry.js":[127,32],"./ion-reorder_2-md.entry.js":[128,33],"./ion-ripple-effect.entry.js":[129,82],"./ion-route_4.entry.js":[130,66],"./ion-searchbar-ios.entry.js":[131,67],"./ion-searchbar-md.entry.js":[132,68],"./ion-segment_2-ios.entry.js":[133,69],"./ion-segment_2-md.entry.js":[134,70],"./ion-select_3-ios.entry.js":[135,71],"./ion-select_3-md.entry.js":[136,72],"./ion-slide_2-ios.entry.js":[137,83],"./ion-slide_2-md.entry.js":[138,84],"./ion-spinner.entry.js":[139,30],"./ion-split-pane-ios.entry.js":[140,85],"./ion-split-pane-md.entry.js":[141,86],"./ion-tab-bar_2-ios.entry.js":[142,73],"./ion-tab-bar_2-md.entry.js":[143,74],"./ion-tab_2.entry.js":[144,31],"./ion-text.entry.js":[145,75],"./ion-textarea-ios.entry.js":[146,76],"./ion-textarea-md.entry.js":[147,77],"./ion-toast-ios.entry.js":[148,28],"./ion-toast-md.entry.js":[149,29],"./ion-toggle-ios.entry.js":[150,20],"./ion-toggle-md.entry.js":[151,21],"./ion-virtual-scroll.entry.js":[152,87]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=52,e.exports=r},54:function(e,t,n){var o={"./ion-icon.entry.js":[156,95]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=54,e.exports=r},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(27),i=n.n(a),l=n(14),c=n(1),s=n(41),m=n(3),u=(n(59),n(60),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(69),n(70),function(e){var t=e.articles.map((function(e,t){return r.a.createElement(c.g,{key:t,button:!0,href:"/article-detail/".concat(e.id)},r.a.createElement(c.s,{src:e.imgUrl}),r.a.createElement(c.i,null,r.a.createElement(c.k,null,e.title),r.a.createElement(c.j,null,e.subtitle)),r.a.createElement(c.h,null,r.a.createElement(c.d,{color:"success",slot:"start"},e.date.getFullYear())))}));return r.a.createElement(c.z,null,r.a.createElement(c.q,null,r.a.createElement(c.H,{color:"tertiary"},r.a.createElement(c.G,null,"Articles"))),r.a.createElement(c.m,null,t,r.a.createElement(c.n,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(c.o,{color:"tertiary",href:"/add-article"},r.a.createElement(c.r,{icon:m.a})))))}),d=(n(71),function(e){var t=e.todos.map((function(e){return r.a.createElement(c.u,{key:e.id},r.a.createElement(c.l,{slot:"start",checked:e.completed}),r.a.createElement(c.v,null,r.a.createElement(c.y,null,e.text)))}));return r.a.createElement(c.z,null,r.a.createElement(c.q,null,r.a.createElement(c.H,{color:"tertiary"},r.a.createElement(c.G,null,"Todos"))),r.a.createElement(c.m,null,r.a.createElement(c.x,null,t),r.a.createElement(c.n,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(c.o,{color:"tertiary"},r.a.createElement(c.r,{icon:m.a})))))}),E=function(){return r.a.createElement(c.z,null,r.a.createElement(c.q,null,r.a.createElement(c.H,{color:"tertiary"},r.a.createElement(c.f,{slot:"start"},r.a.createElement(c.c,{defaultHref:"/"})),r.a.createElement(c.G,{slot:"start"},"Add Article"))),r.a.createElement(c.m,null,r.a.createElement(c.x,null,r.a.createElement(c.u,null,r.a.createElement(c.v,{position:"floating"},"Title"),r.a.createElement(c.t,null)),r.a.createElement(c.u,null,r.a.createElement(c.v,{position:"floating"},"Subtitle"),r.a.createElement(c.t,null)),r.a.createElement(c.u,null,r.a.createElement(c.v,{position:"floating"},"Image Url"),r.a.createElement(c.t,null)),r.a.createElement(c.u,null,r.a.createElement(c.v,{position:"floating"},"Body"),r.a.createElement(c.F,{rows:5,cols:20})),r.a.createElement(c.e,{color:"secondary",expand:"block"},"Add"))))},p=function(e){var t=e.article;return r.a.createElement(c.z,null,r.a.createElement(c.m,null,r.a.createElement(c.q,null,r.a.createElement(c.H,{color:"tertiary"},r.a.createElement(c.f,{slot:"start"},r.a.createElement(c.c,{defaultHref:"/"})),r.a.createElement(c.G,{slot:"start"},"Article Detail"))),r.a.createElement(c.g,null,r.a.createElement(c.s,{src:t.imgUrl}),r.a.createElement(c.i,null,r.a.createElement(c.k,null,t.title),r.a.createElement(c.H,null,r.a.createElement(c.j,{slot:"start"},r.a.createElement("p",null,t.subtitle),r.a.createElement("span",null,"Date: ",t.date.toDateString())),r.a.createElement(c.f,{slot:"end"},r.a.createElement(c.e,{fill:"outline"},"Edit ",r.a.createElement(c.r,{icon:m.o})),r.a.createElement(c.e,{fill:"solid",color:"danger"},"Delete ",r.a.createElement(c.r,{icon:m.t}))))),r.a.createElement(c.h,null,r.a.createElement("p",null,t.body)))))},y={articles:[{id:0,title:"Candid photo 101",subtitle:"you think this is a game?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",imgUrl:"https://cache.desktopnexus.com/thumbseg/1644/1644219-bigthumbnail.jpg",date:new Date(2019,9,11)},{id:1,title:"Big boi",subtitle:"kome at me vro",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo ",imgUrl:"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:new Date(2015,4,1)},{id:2,title:"Rawr!",subtitle:"the nauty kitty",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque! \n quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",imgUrl:"https://ichef.bbci.co.uk/news/410/cpsprodpb/11EC0/production/_110280437_2485_t2f_00008.jpg",date:new Date(2012,2,31)}],todos:[{id:0,completed:!0,text:"Add AddNewArticle Page"},{id:1,completed:!0,text:"Add ArticleDetail Page"},{id:2,completed:!0,text:"Add Buttons in ArticleDetail page"},{id:3,completed:!0,text:"Add back buttons"},{id:4,completed:!1,text:"Add About Page "},{id:5,completed:!1,text:"Add AddTodos page + FAB"},{id:6,completed:!1,text:"Build APK"},{id:7,completed:!1,text:"Let user alter state: articles, todos"},{id:8,completed:!1,text:"Enhance loading screen with animation"}]},f=function(){return r.a.createElement(c.z,null,r.a.createElement(c.q,null,r.a.createElement(c.H,{color:"tertiary"},r.a.createElement(c.G,{slot:"start"},"About"))),r.a.createElement(c.m,null,r.a.createElement(c.g,null,r.a.createElement(c.i,null,r.a.createElement(c.k,null,"Ionic React Blog Todo"),r.a.createElement(c.j,null,r.a.createElement("p",null,"Cross Platform Mobile and Progressive Web App (PWA) built using Ionic and React."),r.a.createElement("p",null,"Thought I should either do a Blog or a Todo App. Ended up doing both :v"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{width:"40px",src:"https://www.alubhorta.com/assets/alu-logo-600x.png",alt:"logo"})),r.a.createElement(c.h,null,r.a.createElement("p",null,"If you want an ",r.a.createElement(c.E,{color:"danger"},"Awsome App")," too,"),r.a.createElement("p",null,"Contact me:"," ",r.a.createElement("a",{href:"mailto:business4dous@gmail.com"},"business4dous@gmail.com")),r.a.createElement(c.p,null,r.a.createElement("h3",null,"Made with ",r.a.createElement(c.r,{icon:m.j})," by"," ",r.a.createElement("a",{href:"https://github.com/AluBhorta"},"AluBhorta")," \xa9"," "+(new Date).getFullYear().toString(),"."))))))},h=function(){return r.a.createElement(c.b,null,r.a.createElement(s.a,null,r.a.createElement(c.D,null,r.a.createElement(c.A,null,r.a.createElement(l.c,{path:"/tab1",component:function(){return r.a.createElement(u,{articles:y.articles})},exact:!0}),r.a.createElement(l.c,{path:"/add-article",component:function(){return r.a.createElement(E,null)},exact:!0}),r.a.createElement(l.c,{path:"/article-detail/:id",component:function(e){var t=+e.match.params.id,n=y.articles.find((function(e){return e.id===t}));if(!n)throw Error("Error! No article found with id: ".concat(t,"!"));return r.a.createElement(p,{article:n})},exact:!0}),r.a.createElement(l.c,{path:"/tab2",component:function(){return r.a.createElement(d,{todos:y.todos})},exact:!0}),r.a.createElement(l.c,{path:"/about",component:f,exact:!0}),r.a.createElement(l.c,{path:"/",render:function(){return r.a.createElement(l.b,{to:"/tab1"})},exact:!0})),r.a.createElement(c.B,{slot:"bottom",color:"tertiary"},r.a.createElement(c.C,{tab:"tab1",href:"/tab1"},r.a.createElement(c.r,{icon:m.c})),r.a.createElement(c.C,{tab:"tab2",href:"/tab2"},r.a.createElement(c.r,{icon:m.l})),r.a.createElement(c.C,{tab:"tab3",href:"/about"},r.a.createElement(c.r,{icon:m.k}))))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}({onSuccess:function(){console.log("SW registered successfully!")},onUpdate:function(){console.log("SW updated!")}})}},[[46,7,10]]]);
//# sourceMappingURL=main.5771c17c.chunk.js.map