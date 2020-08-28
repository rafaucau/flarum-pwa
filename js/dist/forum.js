module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=21)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,r){t.exports=r(18)},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/SessionDropdown"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},,,,,,function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=g(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var p=c(t,e,r);if("normal"===p.type){if(n=r.done?"completed":"suspendedYield",p.arg===u)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(n="completed",r.method="throw",r.arg=p.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function p(){}function l(){}function f(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(_([])));m&&m!==e&&r.call(m,o)&&(d=m);var v=f.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var u=c(t[o],t,a);if("throw"!==u.type){var p=u.arg,l=p.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(l).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,s)}))}s(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return l.prototype=v.constructor=f,f.constructor=l,f[i]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},,,function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n);function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}var s=r(0);let c,u;const p=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap,h=new WeakMap;let v={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),g(p.get(this))}:function(...e){return g(t.apply(b(this),e))}:function(e,...r){const n=t.call(b(this),e,...r);return f.set(n,e.sort?e.sort():[e]),g(n)}}function y(t){return"function"==typeof t?w(t):(t instanceof IDBTransaction&&function(t){if(l.has(t))return;const e=new Promise((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{e(),n()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});l.set(t,e)}(t),e=t,(c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,v):t);var e}function g(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{e(g(t.result)),n()},a=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&p.set(e,t)}).catch(()=>{}),h.set(e,t),e}(t);if(d.has(t))return d.get(t);const e=y(t);return e!==t&&(d.set(t,e),h.set(e,t)),e}const b=t=>h.get(t);function x(t,e,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),s=g(i);return n&&i.addEventListener("upgradeneeded",t=>{n(g(i.result),t.oldVersion,t.newVersion,g(i.transaction))}),r&&i.addEventListener("blocked",()=>r()),s.then(t=>{a&&t.addEventListener("close",()=>a()),o&&t.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}const k=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],L=new Map;function E(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(L.get(e))return L.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=_.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;n&&(i=i.index(e.shift()));const s=await i[r](...e);return o&&await a.done,s};return L.set(e,a),a}v=(t=>({...t,get:(e,r,n)=>E(e,r)||t.get(e,r,n),has:(e,r)=>!!E(e,r)||t.has(e,r)}))(v);var j=r(4),O=r.n(j),N=r(6),B=r.n(N),S=r(7),P=r.n(S),I=r(8),D=r.n(I),M=r(9),C=r.n(M),T=r(10),A=r.n(T),W=r(1),G=r.n(W);function F(t){return q.apply(this,arguments)}function q(){return(q=i(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.share(e);case 3:resultPara.textContent="MDN shared successfully",t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Error: "+t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}var K=r(11),R=r.n(K),U=r(12),V=r.n(U),z=r(3),Y=r.n(z),J=r(5),H=r.n(J),Q=function(t){return app.sw.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:app.forum.attribute("vapidPublicKey").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}).then((function(e){t&&app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/pwa/push",data:{subscription:e}})}))},X=function(){if(!app.session.user)return!1;var t,e=app.session.user.preferences();for(t in e)if(("string"==typeof t||t instanceof String)&&t.startsWith("notify_")&&t.endsWith("_push")&&e[t])return!0;return!1},Z=function(){var t=i(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(app.cache.pwaRefreshed||!("Notification"in window)||"granted"!==window.Notification.permission||!X()){t.next=10;break}return t.prev=1,t.next=4,Q(!0);case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),e.pushManager.getSubscription().then((function(t){return t.unsubscribe().then(Q.bind(void 0,!0))}));case 10:app.cache.pwaRefreshed=!0;case 11:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),tt=function(){return app.forum.attribute("vapidPublicKey")};app.initializers.add("askvortsov/flarum-pwa",(function(){Object(s.extend)(O.a.prototype,"init",(function(t){var e=app.forum.attribute("basePath").trimRight("/");(function(){var t=i(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=x("keyval-store",1,{upgrade:function(t){t.createObjectStore("keyval")}}),t.next=3,r;case 3:t.sent.put("keyval",app.forum.data.attributes,"flarum.forumPayload"),"serviceWorker"in navigator&&navigator.serviceWorker.register(e+"/sw",{scope:e+"/"}).then((function(t){navigator.serviceWorker.ready.then((function(){app.sw=t,Z(t)}))}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()})),Object(s.extend)(P.a.prototype,"items",(function(t){(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"))&&t.has("administration")&&t.replace("administration",B.a.component({icon:"fas fa-wrench",children:app.translator.trans("core.forum.header.admin_button"),href:app.forum.attribute("adminUrl"),config:function(t,e){var r=arguments,n=this;e||$(t).on("click",(function(t){t.stopPropagation(),m.route.apply(n,r),window.location.reload()}))}}))})),Object(s.extend)(D.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({children:app.translator.trans("askvortsov-pwa.forum.discussion_controls.share_button"),icon:"fas fa-share-square",onclick:function(){return F({title:e.title(),url:window.location.protocol+"//"+window.location.hostname+app.route.discussion(e)})}}),-1)})),Object(s.extend)(C.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({children:app.translator.trans("askvortsov-pwa.forum.post_controls.share_button"),icon:"fas fa-share-square",onclick:function(){return F({title:app.translator.trans("askvortsov-pwa.forum.post_controls.share_api.title",{username:e.user().displayName(),title:e.discussion().title()}),url:window.location.protocol+"//"+window.location.hostname+app.route.post(e)})}}),100)})),Object(s.extend)(A.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({children:app.translator.trans("askvortsov-pwa.forum.user_controls.share_button"),icon:"fas fa-share-square",onclick:function(){return F({title:e.displayName(),url:window.location.protocol+"//"+window.location.hostname+app.route.user(e)})}}),100)})),Object(s.extend)(O.a.prototype,"config",(function(t,e){if(!e&&tt()){var r=function(){localStorage.setItem("askvortov-pwa.notif-alert.dismissed",JSON.stringify({timestamp:(new Date).getTime()}))};app.alerts.dismiss(app.cache.pwaNotifsAlert),!localStorage.getItem("askvortov-pwa.notif-alert.dismissed")&&"Notification"in window&&"default"===window.Notification.permission&&X()&&app.alerts.show(app.cache.pwaNotifsAlert=new Y.a({children:app.translator.trans("askvortsov-pwa.forum.alerts.optin"),controls:[m("a",{class:"Button Button--link",href:app.route("settings"),config:function(t){return r(),m.route(t)}},app.translator.trans("askvortsov-pwa.forum.alerts.optin_button"))],ondismiss:r}))}})),Object(s.extend)(R.a.prototype,"notificationMethods",(function(t){tt()&&t.add("push",{name:"push",icon:"fas fa-mobile",label:app.translator.trans("askvortsov-pwa.forum.settings.push_header")})})),Object(s.extend)(V.a.prototype,"notificationsItems",(function(t){if(tt())if("Notification"in window)if("default"===window.Notification.permission){if(!tt())return;t.add("push-optin-default",Y.a.component({itemClassName:"pwa-setting-alert",dismissible:!1,children:[H()("fas fa-exclamation-circle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default")],controls:[G.a.component({className:"Button Button--link",children:app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default_button"),onclick:function(){window.Notification.requestPermission((function(t){m.redraw(),"granted"===t&&Q(!0)}))}})]}),10)}else"denied"===window.Notification.permission&&t.add("push-optin-denied",Y.a.component({itemClassName:"pwa-setting-alert",dismissible:!1,type:"error",children:[H()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied")],controls:[m("a",{class:"Button Button--link",href:"https://support.humblebundle.com/hc/en-us/articles/360008513933-Enabling-and-Disabling-Browser-Notifications-in-Various-Browsers"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied_button"))]}),10);else t.add("push-no-browser-support",Y.a.component({dismissible:!1,children:[H()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support")],controls:[m("a",{class:"Button Button--link",href:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support_button"))]}),10)}))}))}]);
//# sourceMappingURL=forum.js.map