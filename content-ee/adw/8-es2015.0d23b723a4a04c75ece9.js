(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{odKL:function(c,t,e){"use strict";e.r(t),e.d(t,"AppTrashcanModule",(function(){return M}));var n=e("An66"),a=e("yWDA"),i=e("sdze"),o=e("Asjx"),s=e("F7Rg"),r=e("vFu1"),l=e("knli"),d=e("kZht"),p=e("ofez"),m=e("4OIY"),u=e("2CwG"),f=e("BsNf"),y=e("C+AT"),A=e("Ha27"),h=e("cCc8"),g=e("J2DA"),T=e("aLmO"),S=e("aHlb"),b=e("aDqW");function B(c,t){if(1&c&&(d.zc(0),d.wc(1,"aca-toolbar-action",10),d.yc()),2&c){const c=t.$implicit;d.hc(1),d.Uc("actionRef",c)}}function E(c,t){if(1&c&&d.wc(0,"adf-dynamic-column",13),2&c){const c=t.$implicit,e=d.Nc(2).$implicit;d.Uc("id",e.template)("context",c)}}function P(c,t){if(1&c&&(d.zc(0),d.Bc(1,"data-column",12),d.pd(2,E,1,2,"ng-template"),d.Ac(),d.yc()),2&c){const c=d.Nc().$implicit;d.hc(1),d.jc(c.class),d.Uc("key",c.key)("title",c.title)("type",c.type)("format",c.format)("sortable",c.sortable)}}function v(c,t){if(1&c&&(d.zc(0),d.wc(1,"data-column",12),d.yc()),2&c){const c=d.Nc().$implicit;d.hc(1),d.jc(c.class),d.Uc("key",c.key)("title",c.title)("type",c.type)("format",c.format)("sortable",c.sortable)}}function O(c,t){if(1&c&&(d.zc(0),d.pd(1,P,3,7,"ng-container",11),d.pd(2,v,2,7,"ng-container",11),d.yc()),2&c){const c=t.$implicit,e=d.Nc();d.hc(1),d.Uc("ngIf",c.template&&!(c.desktopOnly&&e.isSmallScreen)),d.hc(1),d.Uc("ngIf",!(c.template||c.desktopOnly&&e.isSmallScreen))}}function k(c,t){1&c&&d.wc(0,"data-column",14)}const C=function(){return["archivedAt","desc"]};let U=(()=>{class c extends r.a{constructor(c,t,e,n){super(e,t,c),this.breakpointObserver=n,this.isSmallScreen=!1,this.columns=[],this.user$=this.store.select(i.getUserProfile)}ngOnInit(){super.ngOnInit(),this.subscriptions.push(this.breakpointObserver.observe([o.b.HandsetPortrait,o.b.HandsetLandscape]).subscribe(c=>{this.isSmallScreen=c.matches})),this.columns=this.extensions.documentListPresets.trashcan||[]}}return c.\u0275fac=function(t){return new(t||c)(d.vc(s.a),d.vc(l.AppExtensionService),d.vc(p.h),d.vc(o.a))},c.\u0275cmp=d.pc({type:c,selectors:[["ng-component"]],features:[d.ec],decls:23,vars:22,consts:[["root","APP.BROWSE.TRASHCAN.TITLE"],[1,"adf-toolbar--inline"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"main-content"],["acaDocumentList","","acaContextActions","","currentFolderId","-trashcan-","selectionMode","multiple","sortingMode","client",3,"display","navigate","imageResolver","sorting"],["documentList",""],["icon","delete",3,"title"],[1,"adf-empty-content__text"],["class","adf-ellipsis-cell","key","archivedByUser.displayName","title","APP.DOCUMENT_LIST.COLUMNS.DELETED_BY",4,"ngIf"],["acaPagination","",3,"target"],[3,"actionRef"],[4,"ngIf"],[3,"key","title","type","format","sortable"],[3,"id","context"],["key","archivedByUser.displayName","title","APP.DOCUMENT_LIST.COLUMNS.DELETED_BY",1,"adf-ellipsis-cell"]],template:function(c,t){if(1&c&&(d.Bc(0,"aca-page-layout"),d.Bc(1,"aca-page-layout-header"),d.wc(2,"adf-breadcrumb",0),d.Bc(3,"adf-toolbar",1),d.pd(4,B,2,1,"ng-container",2),d.Ac(),d.Ac(),d.Bc(5,"aca-page-layout-content"),d.Bc(6,"div",3),d.Bc(7,"adf-document-list",4,5),d.Oc(9,"async"),d.Bc(10,"adf-custom-empty-content-template"),d.Bc(11,"adf-empty-content",6),d.Bc(12,"p",7),d.rd(13),d.Oc(14,"translate"),d.Ac(),d.Bc(15,"p",7),d.rd(16),d.Oc(17,"translate"),d.Ac(),d.Ac(),d.Ac(),d.Bc(18,"data-columns"),d.pd(19,O,3,2,"ng-container",2),d.pd(20,k,1,0,"data-column",8),d.Oc(21,"async"),d.Ac(),d.Ac(),d.wc(22,"adf-pagination",9),d.Ac(),d.Ac(),d.Ac()),2&c){const c=d.dd(8);var e=null;const n=!t.isSmallScreen&&(null==(e=d.Pc(21,19,t.user$))?null:e.isAdmin);d.hc(4),d.Uc("ngForOf",t.actions)("ngForTrackBy",t.trackByActionId),d.hc(3),d.Uc("display",d.Pc(9,13,t.documentDisplayMode$))("navigate",!1)("imageResolver",t.imageResolver)("sorting",d.Yc(21,C)),d.hc(4),d.Uc("title","APP.BROWSE.TRASHCAN.EMPTY_STATE.TITLE"),d.hc(2),d.td(" ",d.Pc(14,15,"APP.BROWSE.TRASHCAN.EMPTY_STATE.FIRST_TEXT")," "),d.hc(3),d.td(" ",d.Pc(17,17,"APP.BROWSE.TRASHCAN.EMPTY_STATE.SECOND_TEXT")," "),d.hc(3),d.Uc("ngForOf",t.columns)("ngForTrackBy",t.trackByColumnId),d.hc(1),d.Uc("ngIf",n),d.hc(2),d.Uc("target",c)}},directives:[m.a,u.a,f.b,a.Kc,n.n,y.a,f.n,A.a,h.a,a.G,a.bb,a.L,n.o,a.mc,g.a,T.a,a.K,S.c],pipes:[n.b,b.c],encapsulation:2}),c})();var I=e("1VvW"),N=e("CKMm"),R=e("7bav"),L=e("rmkp"),w=e("SDgT"),D=e("3KxK");const F=[{path:"",component:U,data:{title:"APP.BROWSE.TRASHCAN.TITLE",sortingPreferenceKey:"trashcan"}}];let M=(()=>{class c{}return c.\u0275mod=d.tc({type:c}),c.\u0275inj=d.sc({factory:function(t){return new(t||c)},imports:[[n.c,a.F.forChild(),I.q.forChild(F),f.h.forChild(),L.a,N.a,R.a,w.a,D.a]]}),c})()}}]);