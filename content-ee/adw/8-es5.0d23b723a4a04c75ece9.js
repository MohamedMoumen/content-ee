!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,(r=c.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var c=n.call(t,e||"default");if("object"!=typeof c)return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"))?o:String(o)),c)}var r,o}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var c=r(t,e);if(c){var o=Object.getOwnPropertyDescriptor(c,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}}).apply(this,arguments)}function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return a(this,n)}}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{odKL:function(e,r,a){"use strict";a.r(r),a.d(r,"AppTrashcanModule",(function(){return Y}));var s=a("An66"),u=a("yWDA"),f=a("sdze"),p=a("Asjx"),d=a("F7Rg"),y=a("vFu1"),m=a("knli"),b=a("kZht"),h=a("ofez"),v=a("4OIY"),g=a("2CwG"),O=a("BsNf"),A=a("C+AT"),T=a("Ha27"),P=a("cCc8"),S=a("J2DA"),w=a("aLmO"),E=a("aHlb"),B=a("aDqW");function R(t,e){if(1&t&&(b.zc(0),b.wc(1,"aca-toolbar-action",10),b.yc()),2&t){var n=e.$implicit;b.hc(1),b.Uc("actionRef",n)}}function k(t,e){if(1&t&&b.wc(0,"adf-dynamic-column",13),2&t){var n=e.$implicit,c=b.Nc(2).$implicit;b.Uc("id",c.template)("context",n)}}function C(t,e){if(1&t&&(b.zc(0),b.Bc(1,"data-column",12),b.pd(2,k,1,2,"ng-template"),b.Ac(),b.yc()),2&t){var n=b.Nc().$implicit;b.hc(1),b.jc(n.class),b.Uc("key",n.key)("title",n.title)("type",n.type)("format",n.format)("sortable",n.sortable)}}function j(t,e){if(1&t&&(b.zc(0),b.wc(1,"data-column",12),b.yc()),2&t){var n=b.Nc().$implicit;b.hc(1),b.jc(n.class),b.Uc("key",n.key)("title",n.title)("type",n.type)("format",n.format)("sortable",n.sortable)}}function U(t,e){if(1&t&&(b.zc(0),b.pd(1,C,3,7,"ng-container",11),b.pd(2,j,2,7,"ng-container",11),b.yc()),2&t){var n=e.$implicit,c=b.Nc();b.hc(1),b.Uc("ngIf",n.template&&!(n.desktopOnly&&c.isSmallScreen)),b.hc(1),b.Uc("ngIf",!(n.template||n.desktopOnly&&c.isSmallScreen))}}function _(t,e){1&t&&b.wc(0,"data-column",14)}var N,I,L=function(){return["archivedAt","desc"]},D=((N=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(a,e);var r=i(a);function a(e,n,c,o){var i;return t(this,a),(i=r.call(this,c,n,e)).breakpointObserver=o,i.isSmallScreen=!1,i.columns=[],i.user$=i.store.select(f.getUserProfile),i}return n(a,[{key:"ngOnInit",value:function(){var t=this;c(l(a.prototype),"ngOnInit",this).call(this),this.subscriptions.push(this.breakpointObserver.observe([p.b.HandsetPortrait,p.b.HandsetLandscape]).subscribe((function(e){t.isSmallScreen=e.matches}))),this.columns=this.extensions.documentListPresets.trashcan||[]}}]),a}(y.a)).\u0275fac=function(t){return new(t||N)(b.vc(d.a),b.vc(m.AppExtensionService),b.vc(h.h),b.vc(p.a))},N.\u0275cmp=b.pc({type:N,selectors:[["ng-component"]],features:[b.ec],decls:23,vars:22,consts:[["root","APP.BROWSE.TRASHCAN.TITLE"],[1,"adf-toolbar--inline"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"main-content"],["acaDocumentList","","acaContextActions","","currentFolderId","-trashcan-","selectionMode","multiple","sortingMode","client",3,"display","navigate","imageResolver","sorting"],["documentList",""],["icon","delete",3,"title"],[1,"adf-empty-content__text"],["class","adf-ellipsis-cell","key","archivedByUser.displayName","title","APP.DOCUMENT_LIST.COLUMNS.DELETED_BY",4,"ngIf"],["acaPagination","",3,"target"],[3,"actionRef"],[4,"ngIf"],[3,"key","title","type","format","sortable"],[3,"id","context"],["key","archivedByUser.displayName","title","APP.DOCUMENT_LIST.COLUMNS.DELETED_BY",1,"adf-ellipsis-cell"]],template:function(t,e){if(1&t&&(b.Bc(0,"aca-page-layout"),b.Bc(1,"aca-page-layout-header"),b.wc(2,"adf-breadcrumb",0),b.Bc(3,"adf-toolbar",1),b.pd(4,R,2,1,"ng-container",2),b.Ac(),b.Ac(),b.Bc(5,"aca-page-layout-content"),b.Bc(6,"div",3),b.Bc(7,"adf-document-list",4,5),b.Oc(9,"async"),b.Bc(10,"adf-custom-empty-content-template"),b.Bc(11,"adf-empty-content",6),b.Bc(12,"p",7),b.rd(13),b.Oc(14,"translate"),b.Ac(),b.Bc(15,"p",7),b.rd(16),b.Oc(17,"translate"),b.Ac(),b.Ac(),b.Ac(),b.Bc(18,"data-columns"),b.pd(19,U,3,2,"ng-container",2),b.pd(20,_,1,0,"data-column",8),b.Oc(21,"async"),b.Ac(),b.Ac(),b.wc(22,"adf-pagination",9),b.Ac(),b.Ac(),b.Ac()),2&t){var n=b.dd(8),c=null,r=!e.isSmallScreen&&(null==(c=b.Pc(21,19,e.user$))?null:c.isAdmin);b.hc(4),b.Uc("ngForOf",e.actions)("ngForTrackBy",e.trackByActionId),b.hc(3),b.Uc("display",b.Pc(9,13,e.documentDisplayMode$))("navigate",!1)("imageResolver",e.imageResolver)("sorting",b.Yc(21,L)),b.hc(4),b.Uc("title","APP.BROWSE.TRASHCAN.EMPTY_STATE.TITLE"),b.hc(2),b.td(" ",b.Pc(14,15,"APP.BROWSE.TRASHCAN.EMPTY_STATE.FIRST_TEXT")," "),b.hc(3),b.td(" ",b.Pc(17,17,"APP.BROWSE.TRASHCAN.EMPTY_STATE.SECOND_TEXT")," "),b.hc(3),b.Uc("ngForOf",e.columns)("ngForTrackBy",e.trackByColumnId),b.hc(1),b.Uc("ngIf",r),b.hc(2),b.Uc("target",n)}},directives:[v.a,g.a,O.b,u.Kc,s.n,A.a,O.n,T.a,P.a,u.G,u.bb,u.L,s.o,u.mc,S.a,w.a,u.K,E.c],pipes:[s.b,B.c],encapsulation:2}),N),F=a("1VvW"),M=a("CKMm"),x=a("7bav"),H=a("rmkp"),$=a("SDgT"),W=a("3KxK"),K=[{path:"",component:D,data:{title:"APP.BROWSE.TRASHCAN.TITLE",sortingPreferenceKey:"trashcan"}}],Y=((I=n((function e(){t(this,e)}))).\u0275mod=b.tc({type:I}),I.\u0275inj=b.sc({factory:function(t){return new(t||I)},imports:[[s.c,u.F.forChild(),F.q.forChild(K),O.h.forChild(),H.a,M.a,x.a,$.a,W.a]]}),I)}}])}();