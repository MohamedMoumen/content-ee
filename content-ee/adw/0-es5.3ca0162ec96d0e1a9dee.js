!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},i=Object.prototype,r=i.hasOwnProperty,n=Object.defineProperty||function(e,t,i){e[t]=i.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(P){u=function(e,t,i){return e[t]=i}}function l(e,t,i,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),s=new E(r||[]);return n(a,"_invoke",{value:x(e,i,s)}),a}function d(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function f(){}function p(){}function v(){}var g={};u(g,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(O([])));w&&w!==i&&r.call(w,a)&&(g=w);var m=v.prototype=f.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){var i;n(this,"_invoke",{value:function(n,o){function a(){return new t((function(i,a){!function i(n,o,a,s){var c=d(e[n],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){i("next",e,a,s)}),(function(e){i("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return i("throw",e,a,s)}))}s(c.arg)}(n,o,i,a)}))}return i=i?i.then(a,a):a()}})}function x(e,t,i){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return L()}for(i.method=n,i.arg=o;;){var a=i.delegate;if(a){var s=N(a,i);if(s){if(s===h)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===r)throw r="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r="executing";var c=d(e,t,i);if("normal"===c.type){if(r=i.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r="completed",i.method="throw",i.arg=c.arg)}}}function N(e,t){var i=t.method,r=e.iterator[i];if(void 0===r)return t.delegate=null,"throw"===i&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==i&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+i+"' method")),h;var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,n=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(m),e},t.awrap=function(e){return{__await:e}},b(k.prototype),u(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,i,r,n,o){void 0===o&&(o=Promise);var a=new k(l(e,i,r,n),o);return t.isGeneratorFunction(i)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(m),u(m,c,"Generator"),u(m,a,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var r in t)i.push(r);return i.reverse(),function e(){for(;i.length;){var r=i.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(i,r){return a.type="throw",a.arg=e,t.next=i,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),S(i),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var r=i.completion;if("throw"===r.type){var n=r.arg;S(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:O(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),h}},t}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(n=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?o:String(o)),r)}var n,o}function r(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"15Lz":function(i,n,o){"use strict";o.r(n),o.d(n,"AppViewerModule",(function(){return V}));var a=o("An66"),s=o("1VvW"),c=o("yWDA"),u=o("BsNf"),l=o("rmkp"),d=o("cutI"),h=o("e7Tg"),f=o("7bav"),p=o("D57K"),v=o("knli"),g=o("sdze"),y=o("qYF+"),w=o("ZTXN"),m=o("GoAz"),b=o("kuMc"),k=o("mWib"),x=o("DyCy"),N=o("kZht"),A=o("ofez"),S=o("UtD2"),E=o("v0f2"),O=o("aLmO"),L=o("SNg3");function P(e,t){if(1&e&&(N.Bc(0,"adf-viewer-sidebar"),N.wc(1,"aca-info-drawer",5),N.Ac()),2&e){var i=N.Nc(2);N.hc(1),N.Uc("node",i.selection.file)}}function I(e,t){if(1&e&&(N.zc(0),N.wc(1,"app-toolbar-menu-item",6),N.yc()),2&e){var i=t.$implicit;N.hc(1),N.Uc("actionRef",i)}}function T(e,t){if(1&e&&(N.Bc(0,"adf-viewer-open-with"),N.pd(1,I,2,1,"ng-container",2),N.Ac()),2&e){var i=N.Nc(2);N.hc(1),N.Uc("ngForOf",i.openWith)("ngForTrackBy",i.trackByActionId)}}function F(e,t){if(1&e&&(N.zc(0),N.wc(1,"aca-toolbar-action",6),N.yc()),2&e){var i=t.$implicit;N.hc(1),N.Uc("actionRef",i)}}function j(e,t){if(1&e&&N.wc(0,"alfresco-enterprise-viewer",5),2&e){var i=N.Nc(2);N.Uc("node",i.node)}}var D=function(e){return{"right_side--hide":e}},Y=function(){return["*"]};function C(e,t){if(1&e){var i=N.Cc();N.zc(0),N.Bc(1,"adf-viewer",1),N.Jc("showViewerChange",(function(){return N.hd(i),N.Nc().onViewerVisibilityChanged()}))("navigateBefore",(function(e){return N.hd(i),N.Nc().onNavigateBefore(e)}))("navigateNext",(function(e){return N.hd(i),N.Nc().onNavigateNext(e)})),N.Oc(2,"adfAppConfig"),N.pd(3,P,2,1,"adf-viewer-sidebar",0),N.Oc(4,"async"),N.pd(5,T,2,2,"adf-viewer-open-with",0),N.Bc(6,"adf-viewer-toolbar-actions"),N.pd(7,F,2,1,"ng-container",2),N.Ac(),N.Bc(8,"adf-viewer-extension",3,4),N.pd(10,j,1,1,"ng-template"),N.Ac(),N.Ac(),N.yc()}if(2&e){var r=N.Nc();N.hc(1),N.Uc("ngClass",N.Zc(23,D,!r.showRightSide))("fileName",r.fileName)("maxRetries",N.Pc(2,19,"viewer.maxRetries"))("nodeId",r.nodeId)("versionId",r.versionId)("allowNavigate",r.navigateMultiple)("allowRightSidebar",!0)("allowPrint",!1)("showRightSidebar",!0)("allowDownload",!1)("allowFullScreen",!1)("overlayMode",!0)("canNavigateBefore",!!r.previousNodeId)("canNavigateNext",!!r.nextNodeId),N.hc(2),N.Uc("ngIf",N.Pc(4,21,r.infoDrawerOpened$)),N.hc(2),N.Uc("ngIf",r.openWith.length),N.hc(2),N.Uc("ngForOf",r.toolbarActions)("ngForTrackBy",r.trackByActionId),N.hc(1),N.Uc("supportedExtensions",N.Yc(25,Y))}}var _,B,R=[{path:"",data:{title:"APP.PREVIEW.TITLE",navigateMultiple:!0},component:(_=function(){function i(e,r,n,o,a,s,c,u,l,d){t(this,i),this.router=e,this.route=r,this.store=n,this.extensions=o,this.contentApi=a,this.actions$=s,this.preferences=c,this.apiService=u,this.uploadService=l,this.appHookService=d,this.onDestroy$=new w.a,this.folderId=null,this.nodeId=null,this.versionId=null,this.showRightSide=!1,this.openWith=[],this.toolbarActions=[],this.navigateSource=null,this.navigateMultiple=!0,this.routesSkipNavigation=["shared","recent-files","favorites"],this.navigationSources=["favorites","libraries","personal-files","recent-files","shared"],this.recentFileFilters=['TYPE:"content"','-PNAME:"0/wiki"','-TYPE:"app:filelink"','-TYPE:"fm:post"','-TYPE:"cm:thumbnail"','-TYPE:"cm:failedThumbnail"','-TYPE:"cm:rating"','-TYPE:"dl:dataList"','-TYPE:"dl:todoList"','-TYPE:"dl:issue"','-TYPE:"dl:contact"','-TYPE:"dl:eventAgenda"','-TYPE:"dl:event"','-TYPE:"dl:task"','-TYPE:"dl:simpletask"','-TYPE:"dl:meetingAgenda"','-TYPE:"dl:location"','-TYPE:"fm:topic"','-TYPE:"fm:post"','-TYPE:"ia:calendarEvent"','-TYPE:"lnk:link"'],this.containersSkipNavigation=["adf-viewer__sidebar","cdk-overlay-container","adf-image-viewer"]}return r(i,[{key:"versionsApi",get:function(){var e;return this._versionsApi=null!==(e=this._versionsApi)&&void 0!==e?e:new y.a(this.apiService.getInstance()),this._versionsApi}},{key:"ngOnInit",value:function(){var e=this;if(this.infoDrawerOpened$=this.store.select(g.isInfoDrawerOpened),Object(m.a)(this.infoDrawerOpened$).pipe(Object(b.a)(this.onDestroy$)).subscribe((function(t){e.showRightSide=t})),this.store.select(g.getAppSelection).pipe(Object(b.a)(this.onDestroy$)).subscribe((function(t){e.selection=t})),this.extensions.getViewerToolbarActions().pipe(Object(b.a)(this.onDestroy$)).subscribe((function(t){e.toolbarActions=t.filter((function(e){return"app.viewer.fullscreen"===e.id||"app.viewer.separator.1"===e.id||"app.viewer.share"===e.id}))})),this.extensions.getOpenWithActions().pipe(Object(b.a)(this.onDestroy$)).subscribe((function(t){e.openWith=t})),this.route.params.subscribe((function(t){e.folderId=t.folderId;var i=t.nodeId;e.versionId=t.versionId,e.versionId&&e.versionsApi.getVersion(i,e.versionId).then((function(t){t&&e.store.dispatch(new g.SetCurrentNodeVersionAction(t))})),i&&e.displayNode(i)})),this.route.queryParams.subscribe((function(t){e.navigationPath=t.path||t.location})),this.route.snapshot.data&&this.route.snapshot.data.navigateSource){var t=this.route.snapshot.data.navigateSource.toLowerCase();this.navigationSources.includes(t)&&(this.navigateSource=this.route.snapshot.data.navigateSource)}this.actions$.pipe(Object(x.e)(g.ViewerActionTypes.ClosePreview),Object(b.a)(this.onDestroy$)).subscribe((function(){e.store.dispatch(new g.SetCurrentNodeVersionAction(null)),e.navigateToFileLocation()})),this.actions$.pipe(Object(x.e)(g.ViewerActionTypes.RefreshPreview),Object(b.a)(this.onDestroy$)).subscribe((function(t){var i,r;e.displayNode(null===(r=null===(i=null==t?void 0:t.payload)||void 0===i?void 0:i.entry)||void 0===r?void 0:r.id)})),this.appHookService.nodesDeleted.pipe(Object(b.a)(this.onDestroy$)).subscribe((function(){return e.navigateToFileLocation()})),this.uploadService.fileUploadDeleted.pipe(Object(b.a)(this.onDestroy$)).subscribe((function(){return e.navigateToFileLocation()})),this.uploadService.fileUploadComplete.pipe(Object(k.a)(300),Object(b.a)(this.onDestroy$)).subscribe((function(t){e.apiService.nodeUpdated.next(t.data.entry),e.displayNode(t.data.entry.id)})),this.previewLocation=this.router.url.substr(0,this.router.url.indexOf("/",1)).replace(/\//g,"")}},{key:"onViewerVisibilityChanged",value:function(){this.store.dispatch(new g.ReloadDocumentListAction),this.navigateToFileLocation()}},{key:"ngOnDestroy",value:function(){this.store.dispatch(new g.SetCurrentNodeVersionAction(null)),this.onDestroy$.next(!0),this.onDestroy$.complete()}},{key:"trackByActionId",value:function(e,t){return t.id}},{key:"displayNode",value:function(t){var i,r,n,o;return Object(p.a)(this,void 0,void 0,e().mark((function a(){var s,c=this;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}return e.prev=1,e.next=4,this.contentApi.getNodeInfo(t).toPromise();case 4:if(this.node=e.sent,this.store.dispatch(new g.SetSelectedNodesAction([{entry:this.node}])),this.navigateMultiple=this.extensions.canShowViewerNavigation({entry:this.node}),this.navigateMultiple){e.next=9;break}return e.abrupt("return",(this.nodeId=this.node.id,void(this.fileName=this.node.name+(null===(r=null===(i=this.node)||void 0===i?void 0:i.properties)||void 0===r?void 0:r["cm:versionLabel"]))));case 9:if(!this.node||!this.node.isFile){e.next=14;break}return e.next=12,this.getNearestNodes(this.node.id,this.node.parentId);case 12:return s=e.sent,e.abrupt("return",(this.nodeId=this.node.id,this.previousNodeId=s.left,this.nextNodeId=s.right,void(this.fileName=this.node.name+(null===(o=null===(n=this.node)||void 0===n?void 0:n.properties)||void 0===o?void 0:o["cm:versionLabel"]))));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),401!==JSON.parse(e.t0.message).error.statusCode&&this.router.navigate([this.previewLocation,{outlets:{viewer:null}}]).then((function(){c.router.navigate([c.previewLocation,t])}));case 19:case"end":return e.stop()}}),a,this,[[1,16]])})))}},{key:"onNavigateBefore",value:function(e){if("click"===e.type||!this.shouldNavigate(e.target)){var t=this.getFileLocation();this.store.dispatch(new g.ViewNodeAction(this.previousNodeId,{location:t}))}}},{key:"onNavigateNext",value:function(e){if("click"===e.type||!this.shouldNavigate(e.target)){var t=this.getFileLocation();this.store.dispatch(new g.ViewNodeAction(this.nextNodeId,{location:t}))}}},{key:"getNearestNodes",value:function(t,i){return Object(p.a)(this,void 0,void 0,e().mark((function r(){var n,o,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={left:null,right:null},t&&i){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,this.getFileIds(this.navigateSource,i);case 6:return o=e.sent,a=o.indexOf(t),e.abrupt("return",a>=0?{left:o[a-1]||null,right:o[a+1]||null}:n);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",n);case 14:case"end":return e.stop()}}),r,this,[[3,11]])})))}},{key:"getFileIds",value:function(t,i){return Object(p.a)(this,void 0,void 0,e().mark((function r(){var n,o,a,s,c,u,l,d,h,f,p,v,g,y,w;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("personal-files"!==t&&"libraries"!==t||!i){e.next=7;break}return n=this.preferences.get("personal-files.sorting.key")||"modifiedAt",o=this.preferences.get("personal-files.sorting.direction")||"desc",e.next=5,this.contentApi.getNodeChildren(i,{fields:["id",this.getRootField(n)],where:"(isFile=true)"}).toPromise();case 5:return a=e.sent.list.entries.map((function(e){return e.entry})),e.abrupt("return",(this.sort(a,n,o),a.map((function(e){return e.id}))));case 7:if("favorites"!==t){e.next=15;break}return e.next=10,this.contentApi.getFavorites("-me-",{where:"(EXISTS(target/file))",fields:["target"]}).toPromise();case 10:return s=e.sent,c=this.preferences.get("favorites.sorting.key")||"modifiedAt",u=this.preferences.get("favorites.sorting.direction")||"desc",l=s.list.entries.map((function(e){return e.entry.target.file})),e.abrupt("return",(this.sort(l,c,u),l.map((function(e){return e.id}))));case 15:if("shared"!==t){e.next=22;break}return d=this.preferences.get("shared.sorting.key")||"modifiedAt",h=this.preferences.get("shared.sorting.direction")||"desc",e.next=20,this.contentApi.findSharedLinks({fields:["nodeId",this.getRootField(d)]}).toPromise();case 20:return f=e.sent.list.entries.map((function(e){return e.entry})),e.abrupt("return",(this.sort(f,d,h),f.map((function(e){return e.nodeId}))));case 22:if("recent-files"!==t){e.next=33;break}return e.next=25,this.contentApi.getPerson("-me-").toPromise();case 25:return p=e.sent.entry.id,v=this.preferences.get("recent-files.sorting.key")||"modifiedAt",g=this.preferences.get("recent-files.sorting.direction")||"desc",y={query:{query:"*",language:"afts"},filterQueries:[{query:"cm:modified:[NOW/DAY-30DAYS TO NOW/DAY+1DAY]"},{query:"cm:modifier:".concat(p," OR cm:creator:").concat(p)},{query:this.recentFileFilters.join(" AND ")}],fields:["id",this.getRootField(v)],include:["path","properties","allowableOperations"],sort:[{type:"FIELD",field:"cm:modified",ascending:!1}]},e.next=31,this.contentApi.search(y).toPromise();case 31:return w=e.sent.list.entries.map((function(e){return e.entry})),e.abrupt("return",(this.sort(w,v,g),w.map((function(e){return e.id}))));case 33:return e.abrupt("return",[]);case 34:case"end":return e.stop()}}),r,this)})))}},{key:"getRootField",value:function(e){return e?e.split(".")[0]:e}},{key:"handleKeyboardEvent",value:function(e){var t=e.keyCode;39!==t&&37!==t||(e.preventDefault(),e.stopImmediatePropagation())}},{key:"sort",value:function(e,t,i){var r={};(t.includes("sizeInBytes")||"name"===t)&&(r.numeric=!0),e.sort((function(e,n){var o=c.kc.getValue(e,t);o=o?o instanceof Date?o.valueOf().toString():o.toString():"";var a=c.kc.getValue(n,t);return a=a?a instanceof Date?a.valueOf().toString():a.toString():"","asc"===i?o.localeCompare(a,void 0,r):a.localeCompare(o,void 0,r)}))}},{key:"navigateToFileLocation",value:function(){var e=this.getFileLocation();this.router.navigateByUrl(e)}},{key:"getFileLocation",value:function(){return this.navigationPath||this.router.parseUrl(this.router.url).root.children[s.i].toString()}},{key:"shouldNavigate",value:function(e){for(var t=e.parentElement;t&&!this.isChild(t.classList);)t=t.parentElement;return!!t}},{key:"isChild",value:function(e){var t=this;return Array.from(e).some((function(e){return t.containersSkipNavigation.includes(e)}))}}]),i}(),_.\u0275fac=function(e){return new(e||_)(N.vc(s.m),N.vc(s.a),N.vc(A.h),N.vc(v.AppExtensionService),N.vc(v.ContentApiService),N.vc(x.a),N.vc(c.Wc),N.vc(c.c),N.vc(c.Sc),N.vc(v.AppHookService))},_.\u0275cmp=N.pc({type:_,selectors:[["app-viewer"]],hostAttrs:[1,"app-viewer"],hostBindings:function(e,t){1&e&&N.Jc("keydown",(function(e){return t.handleKeyboardEvent(e)}),!1,N.fd)},decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngClass","fileName","maxRetries","nodeId","versionId","allowNavigate","allowRightSidebar","allowPrint","showRightSidebar","allowDownload","allowFullScreen","overlayMode","canNavigateBefore","canNavigateNext","showViewerChange","navigateBefore","navigateNext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"supportedExtensions"],["extension",""],[3,"node"],[3,"actionRef"]],template:function(e,t){1&e&&N.pd(0,C,11,26,"ng-container",0),2&e&&N.Uc("ngIf",t.nodeId)},directives:[a.o,c.bd,a.m,c.fd,a.n,c.cd,c.ed,S.a,c.dd,E.a,O.a,L.a],pipes:[c.f,a.b],styles:[".app-viewer{width:100%;height:100%}.app-viewer .adf-viewer-toolbar .adf-toolbar-divider{display:none}.app-viewer .adf-viewer-toolbar-actions{display:flex;flex-direction:row;align-items:center}.app-viewer .adf-viewer-toolbar-actions .adf-toolbar-divider{display:inline}.app-viewer .adf-viewer-toolbar .mat-toolbar>button:last-child{display:none}.app-viewer .adf-viewer.right_side--hide .adf-viewer__sidebar__right{width:0}.app-viewer .adf-viewer .adf-viewer-content-container,.app-viewer .adf-viewer .adf-viewer-content-container adf-preview-extension{width:100%}"],encapsulation:2}),_)}],V=((B=r((function e(){t(this,e)}))).\u0275mod=N.tc({type:B}),B.\u0275inj=N.sc({factory:function(e){return new(e||B)},imports:[[a.c,s.q.forChild(R),c.F.forChild(),u.d,l.a,d.a,h.a.forChild(),f.a]]}),B)}}])}();