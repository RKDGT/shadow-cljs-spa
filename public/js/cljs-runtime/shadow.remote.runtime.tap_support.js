goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__53578,p__53579){
var map__53580 = p__53578;
var map__53580__$1 = cljs.core.__destructure_map(map__53580);
var svc = map__53580__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53581 = p__53579;
var map__53581__$1 = cljs.core.__destructure_map(map__53581);
var msg = map__53581__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53581__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53581__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53581__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53581__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__53582,p__53583){
var map__53584 = p__53582;
var map__53584__$1 = cljs.core.__destructure_map(map__53584);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__53585 = p__53583;
var map__53585__$1 = cljs.core.__destructure_map(map__53585);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__53586,p__53587){
var map__53588 = p__53586;
var map__53588__$1 = cljs.core.__destructure_map(map__53588);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53589 = p__53587;
var map__53589__$1 = cljs.core.__destructure_map(map__53589);
var msg = map__53589__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53589__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__53590,tid){
var map__53591 = p__53590;
var map__53591__$1 = cljs.core.__destructure_map(map__53591);
var svc = map__53591__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53591__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__53596 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__53597 = null;
var count__53598 = (0);
var i__53599 = (0);
while(true){
if((i__53599 < count__53598)){
var vec__53606 = chunk__53597.cljs$core$IIndexed$_nth$arity$2(null,i__53599);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53606,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53606,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53614 = seq__53596;
var G__53615 = chunk__53597;
var G__53616 = count__53598;
var G__53617 = (i__53599 + (1));
seq__53596 = G__53614;
chunk__53597 = G__53615;
count__53598 = G__53616;
i__53599 = G__53617;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53596);
if(temp__5754__auto__){
var seq__53596__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53596__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53596__$1);
var G__53618 = cljs.core.chunk_rest(seq__53596__$1);
var G__53619 = c__4649__auto__;
var G__53620 = cljs.core.count(c__4649__auto__);
var G__53621 = (0);
seq__53596 = G__53618;
chunk__53597 = G__53619;
count__53598 = G__53620;
i__53599 = G__53621;
continue;
} else {
var vec__53609 = cljs.core.first(seq__53596__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53609,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53609,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53625 = cljs.core.next(seq__53596__$1);
var G__53626 = null;
var G__53627 = (0);
var G__53628 = (0);
seq__53596 = G__53625;
chunk__53597 = G__53626;
count__53598 = G__53627;
i__53599 = G__53628;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__53592_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__53592_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__53593_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__53593_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__53594_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__53594_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__53595_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__53595_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__53612){
var map__53613 = p__53612;
var map__53613__$1 = cljs.core.__destructure_map(map__53613);
var svc = map__53613__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
