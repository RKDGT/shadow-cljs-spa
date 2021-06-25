goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__52256,res){
var map__52257 = p__52256;
var map__52257__$1 = cljs.core.__destructure_map(map__52257);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__52258 = res;
var G__52258__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52258,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__52258);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52258__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__52258__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__52260 = arguments.length;
switch (G__52260) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__52261,msg,handlers,timeout_after_ms){
var map__52262 = p__52261;
var map__52262__$1 = cljs.core.__destructure_map(map__52262);
var runtime = map__52262__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52342 = arguments.length;
var i__4830__auto___52343 = (0);
while(true){
if((i__4830__auto___52343 < len__4829__auto___52342)){
args__4835__auto__.push((arguments[i__4830__auto___52343]));

var G__52344 = (i__4830__auto___52343 + (1));
i__4830__auto___52343 = G__52344;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__52266,ev,args){
var map__52267 = p__52266;
var map__52267__$1 = cljs.core.__destructure_map(map__52267);
var runtime = map__52267__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__52268 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52271 = null;
var count__52272 = (0);
var i__52273 = (0);
while(true){
if((i__52273 < count__52272)){
var ext = chunk__52271.cljs$core$IIndexed$_nth$arity$2(null,i__52273);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52345 = seq__52268;
var G__52346 = chunk__52271;
var G__52347 = count__52272;
var G__52348 = (i__52273 + (1));
seq__52268 = G__52345;
chunk__52271 = G__52346;
count__52272 = G__52347;
i__52273 = G__52348;
continue;
} else {
var G__52349 = seq__52268;
var G__52350 = chunk__52271;
var G__52351 = count__52272;
var G__52352 = (i__52273 + (1));
seq__52268 = G__52349;
chunk__52271 = G__52350;
count__52272 = G__52351;
i__52273 = G__52352;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__52268);
if(temp__5754__auto__){
var seq__52268__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52268__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52268__$1);
var G__52354 = cljs.core.chunk_rest(seq__52268__$1);
var G__52355 = c__4649__auto__;
var G__52356 = cljs.core.count(c__4649__auto__);
var G__52357 = (0);
seq__52268 = G__52354;
chunk__52271 = G__52355;
count__52272 = G__52356;
i__52273 = G__52357;
continue;
} else {
var ext = cljs.core.first(seq__52268__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52358 = cljs.core.next(seq__52268__$1);
var G__52359 = null;
var G__52360 = (0);
var G__52361 = (0);
seq__52268 = G__52358;
chunk__52271 = G__52359;
count__52272 = G__52360;
i__52273 = G__52361;
continue;
} else {
var G__52362 = cljs.core.next(seq__52268__$1);
var G__52363 = null;
var G__52364 = (0);
var G__52365 = (0);
seq__52268 = G__52362;
chunk__52271 = G__52363;
count__52272 = G__52364;
i__52273 = G__52365;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq52263){
var G__52264 = cljs.core.first(seq52263);
var seq52263__$1 = cljs.core.next(seq52263);
var G__52265 = cljs.core.first(seq52263__$1);
var seq52263__$2 = cljs.core.next(seq52263__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52264,G__52265,seq52263__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__52277,p__52278){
var map__52279 = p__52277;
var map__52279__$1 = cljs.core.__destructure_map(map__52279);
var runtime = map__52279__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52280 = p__52278;
var map__52280__$1 = cljs.core.__destructure_map(map__52280);
var msg = map__52280__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52280__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__52281 = cljs.core.deref(state_ref);
var map__52281__$1 = cljs.core.__destructure_map(map__52281);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52281__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52281__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__52282){
var map__52283 = p__52282;
var map__52283__$1 = cljs.core.__destructure_map(map__52283);
var runtime = map__52283__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52283__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__52284,msg){
var map__52285 = p__52284;
var map__52285__$1 = cljs.core.__destructure_map(map__52285);
var runtime = map__52285__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__52286,key,p__52287){
var map__52288 = p__52286;
var map__52288__$1 = cljs.core.__destructure_map(map__52288);
var state = map__52288__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52288__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__52289 = p__52287;
var map__52289__$1 = cljs.core.__destructure_map(map__52289);
var spec = map__52289__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52289__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__52290,key,spec){
var map__52291 = p__52290;
var map__52291__$1 = cljs.core.__destructure_map(map__52291);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__52299_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__52299_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__52300_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__52300_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__52301_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__52301_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__52302_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__52302_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__52303_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__52303_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__52312,key){
var map__52313 = p__52312;
var map__52313__$1 = cljs.core.__destructure_map(map__52313);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52313__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__52314,msg){
var map__52315 = p__52314;
var map__52315__$1 = cljs.core.__destructure_map(map__52315);
var runtime = map__52315__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__52317,p__52318){
var map__52319 = p__52317;
var map__52319__$1 = cljs.core.__destructure_map(map__52319);
var runtime = map__52319__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52320 = p__52318;
var map__52320__$1 = cljs.core.__destructure_map(map__52320);
var msg = map__52320__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52320__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52320__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__52322 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52324 = null;
var count__52325 = (0);
var i__52326 = (0);
while(true){
if((i__52326 < count__52325)){
var map__52335 = chunk__52324.cljs$core$IIndexed$_nth$arity$2(null,i__52326);
var map__52335__$1 = cljs.core.__destructure_map(map__52335);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52335__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52370 = seq__52322;
var G__52371 = chunk__52324;
var G__52372 = count__52325;
var G__52373 = (i__52326 + (1));
seq__52322 = G__52370;
chunk__52324 = G__52371;
count__52325 = G__52372;
i__52326 = G__52373;
continue;
} else {
var G__52374 = seq__52322;
var G__52375 = chunk__52324;
var G__52376 = count__52325;
var G__52377 = (i__52326 + (1));
seq__52322 = G__52374;
chunk__52324 = G__52375;
count__52325 = G__52376;
i__52326 = G__52377;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__52322);
if(temp__5754__auto__){
var seq__52322__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52322__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52322__$1);
var G__52378 = cljs.core.chunk_rest(seq__52322__$1);
var G__52379 = c__4649__auto__;
var G__52380 = cljs.core.count(c__4649__auto__);
var G__52381 = (0);
seq__52322 = G__52378;
chunk__52324 = G__52379;
count__52325 = G__52380;
i__52326 = G__52381;
continue;
} else {
var map__52337 = cljs.core.first(seq__52322__$1);
var map__52337__$1 = cljs.core.__destructure_map(map__52337);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52337__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52382 = cljs.core.next(seq__52322__$1);
var G__52383 = null;
var G__52384 = (0);
var G__52385 = (0);
seq__52322 = G__52382;
chunk__52324 = G__52383;
count__52325 = G__52384;
i__52326 = G__52385;
continue;
} else {
var G__52386 = cljs.core.next(seq__52322__$1);
var G__52387 = null;
var G__52388 = (0);
var G__52389 = (0);
seq__52322 = G__52386;
chunk__52324 = G__52387;
count__52325 = G__52388;
i__52326 = G__52389;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
