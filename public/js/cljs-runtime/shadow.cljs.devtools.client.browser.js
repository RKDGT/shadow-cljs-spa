goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53942 = arguments.length;
var i__4830__auto___53943 = (0);
while(true){
if((i__4830__auto___53943 < len__4829__auto___53942)){
args__4835__auto__.push((arguments[i__4830__auto___53943]));

var G__53944 = (i__4830__auto___53943 + (1));
i__4830__auto___53943 = G__53944;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53806){
var G__53807 = cljs.core.first(seq53806);
var seq53806__$1 = cljs.core.next(seq53806);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53807,seq53806__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53808 = cljs.core.seq(sources);
var chunk__53809 = null;
var count__53810 = (0);
var i__53811 = (0);
while(true){
if((i__53811 < count__53810)){
var map__53816 = chunk__53809.cljs$core$IIndexed$_nth$arity$2(null,i__53811);
var map__53816__$1 = cljs.core.__destructure_map(map__53816);
var src = map__53816__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53817){var e_53945 = e53817;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53945);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53945.message)].join('')));
}

var G__53946 = seq__53808;
var G__53947 = chunk__53809;
var G__53948 = count__53810;
var G__53949 = (i__53811 + (1));
seq__53808 = G__53946;
chunk__53809 = G__53947;
count__53810 = G__53948;
i__53811 = G__53949;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53808);
if(temp__5754__auto__){
var seq__53808__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53808__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53808__$1);
var G__53950 = cljs.core.chunk_rest(seq__53808__$1);
var G__53951 = c__4649__auto__;
var G__53952 = cljs.core.count(c__4649__auto__);
var G__53953 = (0);
seq__53808 = G__53950;
chunk__53809 = G__53951;
count__53810 = G__53952;
i__53811 = G__53953;
continue;
} else {
var map__53818 = cljs.core.first(seq__53808__$1);
var map__53818__$1 = cljs.core.__destructure_map(map__53818);
var src = map__53818__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53819){var e_53954 = e53819;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53954);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53954.message)].join('')));
}

var G__53955 = cljs.core.next(seq__53808__$1);
var G__53956 = null;
var G__53957 = (0);
var G__53958 = (0);
seq__53808 = G__53955;
chunk__53809 = G__53956;
count__53810 = G__53957;
i__53811 = G__53958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53820 = cljs.core.seq(js_requires);
var chunk__53821 = null;
var count__53822 = (0);
var i__53823 = (0);
while(true){
if((i__53823 < count__53822)){
var js_ns = chunk__53821.cljs$core$IIndexed$_nth$arity$2(null,i__53823);
var require_str_53959 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53959);


var G__53960 = seq__53820;
var G__53961 = chunk__53821;
var G__53962 = count__53822;
var G__53963 = (i__53823 + (1));
seq__53820 = G__53960;
chunk__53821 = G__53961;
count__53822 = G__53962;
i__53823 = G__53963;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53820);
if(temp__5754__auto__){
var seq__53820__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53820__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53820__$1);
var G__53964 = cljs.core.chunk_rest(seq__53820__$1);
var G__53965 = c__4649__auto__;
var G__53966 = cljs.core.count(c__4649__auto__);
var G__53967 = (0);
seq__53820 = G__53964;
chunk__53821 = G__53965;
count__53822 = G__53966;
i__53823 = G__53967;
continue;
} else {
var js_ns = cljs.core.first(seq__53820__$1);
var require_str_53968 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53968);


var G__53969 = cljs.core.next(seq__53820__$1);
var G__53970 = null;
var G__53971 = (0);
var G__53972 = (0);
seq__53820 = G__53969;
chunk__53821 = G__53970;
count__53822 = G__53971;
i__53823 = G__53972;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53825){
var map__53826 = p__53825;
var map__53826__$1 = cljs.core.__destructure_map(map__53826);
var msg = map__53826__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53826__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53826__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53827(s__53828){
return (new cljs.core.LazySeq(null,(function (){
var s__53828__$1 = s__53828;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__53828__$1);
if(temp__5754__auto__){
var xs__6309__auto__ = temp__5754__auto__;
var map__53833 = cljs.core.first(xs__6309__auto__);
var map__53833__$1 = cljs.core.__destructure_map(map__53833);
var src = map__53833__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53828__$1,map__53833,map__53833__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53826,map__53826__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53827_$_iter__53829(s__53830){
return (new cljs.core.LazySeq(null,((function (s__53828__$1,map__53833,map__53833__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53826,map__53826__$1,msg,info,reload_info){
return (function (){
var s__53830__$1 = s__53830;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__53830__$1);
if(temp__5754__auto____$1){
var s__53830__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53830__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53830__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53832 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53831 = (0);
while(true){
if((i__53831 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53831);
cljs.core.chunk_append(b__53832,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53973 = (i__53831 + (1));
i__53831 = G__53973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53832),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53827_$_iter__53829(cljs.core.chunk_rest(s__53830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53832),null);
}
} else {
var warning = cljs.core.first(s__53830__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53827_$_iter__53829(cljs.core.rest(s__53830__$2)));
}
} else {
return null;
}
break;
}
});})(s__53828__$1,map__53833,map__53833__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53826,map__53826__$1,msg,info,reload_info))
,null,null));
});})(s__53828__$1,map__53833,map__53833__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53826,map__53826__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53827(cljs.core.rest(s__53828__$1)));
} else {
var G__53974 = cljs.core.rest(s__53828__$1);
s__53828__$1 = G__53974;
continue;
}
} else {
var G__53975 = cljs.core.rest(s__53828__$1);
s__53828__$1 = G__53975;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53837_53976 = cljs.core.seq(warnings);
var chunk__53838_53977 = null;
var count__53839_53978 = (0);
var i__53840_53979 = (0);
while(true){
if((i__53840_53979 < count__53839_53978)){
var map__53843_53980 = chunk__53838_53977.cljs$core$IIndexed$_nth$arity$2(null,i__53840_53979);
var map__53843_53981__$1 = cljs.core.__destructure_map(map__53843_53980);
var w_53982 = map__53843_53981__$1;
var msg_53983__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843_53981__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843_53981__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843_53981__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843_53981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53986)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53984),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53985),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53983__$1)].join(''));


var G__53987 = seq__53837_53976;
var G__53988 = chunk__53838_53977;
var G__53989 = count__53839_53978;
var G__53990 = (i__53840_53979 + (1));
seq__53837_53976 = G__53987;
chunk__53838_53977 = G__53988;
count__53839_53978 = G__53989;
i__53840_53979 = G__53990;
continue;
} else {
var temp__5754__auto___53991 = cljs.core.seq(seq__53837_53976);
if(temp__5754__auto___53991){
var seq__53837_53992__$1 = temp__5754__auto___53991;
if(cljs.core.chunked_seq_QMARK_(seq__53837_53992__$1)){
var c__4649__auto___53993 = cljs.core.chunk_first(seq__53837_53992__$1);
var G__53994 = cljs.core.chunk_rest(seq__53837_53992__$1);
var G__53995 = c__4649__auto___53993;
var G__53996 = cljs.core.count(c__4649__auto___53993);
var G__53997 = (0);
seq__53837_53976 = G__53994;
chunk__53838_53977 = G__53995;
count__53839_53978 = G__53996;
i__53840_53979 = G__53997;
continue;
} else {
var map__53844_53998 = cljs.core.first(seq__53837_53992__$1);
var map__53844_53999__$1 = cljs.core.__destructure_map(map__53844_53998);
var w_54000 = map__53844_53999__$1;
var msg_54001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53999__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53999__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53999__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54004)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54002),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54003),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54001__$1)].join(''));


var G__54005 = cljs.core.next(seq__53837_53992__$1);
var G__54006 = null;
var G__54007 = (0);
var G__54008 = (0);
seq__53837_53976 = G__54005;
chunk__53838_53977 = G__54006;
count__53839_53978 = G__54007;
i__53840_53979 = G__54008;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53824_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53824_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53848){
var map__53849 = p__53848;
var map__53849__$1 = cljs.core.__destructure_map(map__53849);
var msg = map__53849__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53849__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53850 = cljs.core.seq(updates);
var chunk__53852 = null;
var count__53853 = (0);
var i__53854 = (0);
while(true){
if((i__53854 < count__53853)){
var path = chunk__53852.cljs$core$IIndexed$_nth$arity$2(null,i__53854);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53887_54009 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53891_54010 = null;
var count__53892_54011 = (0);
var i__53893_54012 = (0);
while(true){
if((i__53893_54012 < count__53892_54011)){
var node_54013 = chunk__53891_54010.cljs$core$IIndexed$_nth$arity$2(null,i__53893_54012);
if(cljs.core.not(node_54013.shadow$old)){
var path_match_54014 = shadow.cljs.devtools.client.browser.match_paths(node_54013.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54014)){
var new_link_54015 = (function (){var G__53899 = node_54013.cloneNode(true);
G__53899.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54014),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53899;
})();
(node_54013.shadow$old = true);

(new_link_54015.onload = ((function (seq__53887_54009,chunk__53891_54010,count__53892_54011,i__53893_54012,seq__53850,chunk__53852,count__53853,i__53854,new_link_54015,path_match_54014,node_54013,path,map__53849,map__53849__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54013);
});})(seq__53887_54009,chunk__53891_54010,count__53892_54011,i__53893_54012,seq__53850,chunk__53852,count__53853,i__53854,new_link_54015,path_match_54014,node_54013,path,map__53849,map__53849__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54014], 0));

goog.dom.insertSiblingAfter(new_link_54015,node_54013);


var G__54016 = seq__53887_54009;
var G__54017 = chunk__53891_54010;
var G__54018 = count__53892_54011;
var G__54019 = (i__53893_54012 + (1));
seq__53887_54009 = G__54016;
chunk__53891_54010 = G__54017;
count__53892_54011 = G__54018;
i__53893_54012 = G__54019;
continue;
} else {
var G__54020 = seq__53887_54009;
var G__54021 = chunk__53891_54010;
var G__54022 = count__53892_54011;
var G__54023 = (i__53893_54012 + (1));
seq__53887_54009 = G__54020;
chunk__53891_54010 = G__54021;
count__53892_54011 = G__54022;
i__53893_54012 = G__54023;
continue;
}
} else {
var G__54024 = seq__53887_54009;
var G__54025 = chunk__53891_54010;
var G__54026 = count__53892_54011;
var G__54027 = (i__53893_54012 + (1));
seq__53887_54009 = G__54024;
chunk__53891_54010 = G__54025;
count__53892_54011 = G__54026;
i__53893_54012 = G__54027;
continue;
}
} else {
var temp__5754__auto___54028 = cljs.core.seq(seq__53887_54009);
if(temp__5754__auto___54028){
var seq__53887_54029__$1 = temp__5754__auto___54028;
if(cljs.core.chunked_seq_QMARK_(seq__53887_54029__$1)){
var c__4649__auto___54030 = cljs.core.chunk_first(seq__53887_54029__$1);
var G__54031 = cljs.core.chunk_rest(seq__53887_54029__$1);
var G__54032 = c__4649__auto___54030;
var G__54033 = cljs.core.count(c__4649__auto___54030);
var G__54034 = (0);
seq__53887_54009 = G__54031;
chunk__53891_54010 = G__54032;
count__53892_54011 = G__54033;
i__53893_54012 = G__54034;
continue;
} else {
var node_54035 = cljs.core.first(seq__53887_54029__$1);
if(cljs.core.not(node_54035.shadow$old)){
var path_match_54036 = shadow.cljs.devtools.client.browser.match_paths(node_54035.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54036)){
var new_link_54037 = (function (){var G__53900 = node_54035.cloneNode(true);
G__53900.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54036),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53900;
})();
(node_54035.shadow$old = true);

(new_link_54037.onload = ((function (seq__53887_54009,chunk__53891_54010,count__53892_54011,i__53893_54012,seq__53850,chunk__53852,count__53853,i__53854,new_link_54037,path_match_54036,node_54035,seq__53887_54029__$1,temp__5754__auto___54028,path,map__53849,map__53849__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54035);
});})(seq__53887_54009,chunk__53891_54010,count__53892_54011,i__53893_54012,seq__53850,chunk__53852,count__53853,i__53854,new_link_54037,path_match_54036,node_54035,seq__53887_54029__$1,temp__5754__auto___54028,path,map__53849,map__53849__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54036], 0));

goog.dom.insertSiblingAfter(new_link_54037,node_54035);


var G__54038 = cljs.core.next(seq__53887_54029__$1);
var G__54039 = null;
var G__54040 = (0);
var G__54041 = (0);
seq__53887_54009 = G__54038;
chunk__53891_54010 = G__54039;
count__53892_54011 = G__54040;
i__53893_54012 = G__54041;
continue;
} else {
var G__54042 = cljs.core.next(seq__53887_54029__$1);
var G__54043 = null;
var G__54044 = (0);
var G__54045 = (0);
seq__53887_54009 = G__54042;
chunk__53891_54010 = G__54043;
count__53892_54011 = G__54044;
i__53893_54012 = G__54045;
continue;
}
} else {
var G__54046 = cljs.core.next(seq__53887_54029__$1);
var G__54047 = null;
var G__54048 = (0);
var G__54049 = (0);
seq__53887_54009 = G__54046;
chunk__53891_54010 = G__54047;
count__53892_54011 = G__54048;
i__53893_54012 = G__54049;
continue;
}
}
} else {
}
}
break;
}


var G__54050 = seq__53850;
var G__54051 = chunk__53852;
var G__54052 = count__53853;
var G__54053 = (i__53854 + (1));
seq__53850 = G__54050;
chunk__53852 = G__54051;
count__53853 = G__54052;
i__53854 = G__54053;
continue;
} else {
var G__54054 = seq__53850;
var G__54055 = chunk__53852;
var G__54056 = count__53853;
var G__54057 = (i__53854 + (1));
seq__53850 = G__54054;
chunk__53852 = G__54055;
count__53853 = G__54056;
i__53854 = G__54057;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53850);
if(temp__5754__auto__){
var seq__53850__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53850__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53850__$1);
var G__54058 = cljs.core.chunk_rest(seq__53850__$1);
var G__54059 = c__4649__auto__;
var G__54060 = cljs.core.count(c__4649__auto__);
var G__54061 = (0);
seq__53850 = G__54058;
chunk__53852 = G__54059;
count__53853 = G__54060;
i__53854 = G__54061;
continue;
} else {
var path = cljs.core.first(seq__53850__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53901_54062 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53905_54063 = null;
var count__53906_54064 = (0);
var i__53907_54065 = (0);
while(true){
if((i__53907_54065 < count__53906_54064)){
var node_54066 = chunk__53905_54063.cljs$core$IIndexed$_nth$arity$2(null,i__53907_54065);
if(cljs.core.not(node_54066.shadow$old)){
var path_match_54067 = shadow.cljs.devtools.client.browser.match_paths(node_54066.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54067)){
var new_link_54068 = (function (){var G__53913 = node_54066.cloneNode(true);
G__53913.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54067),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53913;
})();
(node_54066.shadow$old = true);

(new_link_54068.onload = ((function (seq__53901_54062,chunk__53905_54063,count__53906_54064,i__53907_54065,seq__53850,chunk__53852,count__53853,i__53854,new_link_54068,path_match_54067,node_54066,path,seq__53850__$1,temp__5754__auto__,map__53849,map__53849__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54066);
});})(seq__53901_54062,chunk__53905_54063,count__53906_54064,i__53907_54065,seq__53850,chunk__53852,count__53853,i__53854,new_link_54068,path_match_54067,node_54066,path,seq__53850__$1,temp__5754__auto__,map__53849,map__53849__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54067], 0));

goog.dom.insertSiblingAfter(new_link_54068,node_54066);


var G__54069 = seq__53901_54062;
var G__54070 = chunk__53905_54063;
var G__54071 = count__53906_54064;
var G__54072 = (i__53907_54065 + (1));
seq__53901_54062 = G__54069;
chunk__53905_54063 = G__54070;
count__53906_54064 = G__54071;
i__53907_54065 = G__54072;
continue;
} else {
var G__54073 = seq__53901_54062;
var G__54074 = chunk__53905_54063;
var G__54075 = count__53906_54064;
var G__54076 = (i__53907_54065 + (1));
seq__53901_54062 = G__54073;
chunk__53905_54063 = G__54074;
count__53906_54064 = G__54075;
i__53907_54065 = G__54076;
continue;
}
} else {
var G__54077 = seq__53901_54062;
var G__54078 = chunk__53905_54063;
var G__54079 = count__53906_54064;
var G__54080 = (i__53907_54065 + (1));
seq__53901_54062 = G__54077;
chunk__53905_54063 = G__54078;
count__53906_54064 = G__54079;
i__53907_54065 = G__54080;
continue;
}
} else {
var temp__5754__auto___54081__$1 = cljs.core.seq(seq__53901_54062);
if(temp__5754__auto___54081__$1){
var seq__53901_54082__$1 = temp__5754__auto___54081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53901_54082__$1)){
var c__4649__auto___54083 = cljs.core.chunk_first(seq__53901_54082__$1);
var G__54084 = cljs.core.chunk_rest(seq__53901_54082__$1);
var G__54085 = c__4649__auto___54083;
var G__54086 = cljs.core.count(c__4649__auto___54083);
var G__54087 = (0);
seq__53901_54062 = G__54084;
chunk__53905_54063 = G__54085;
count__53906_54064 = G__54086;
i__53907_54065 = G__54087;
continue;
} else {
var node_54088 = cljs.core.first(seq__53901_54082__$1);
if(cljs.core.not(node_54088.shadow$old)){
var path_match_54089 = shadow.cljs.devtools.client.browser.match_paths(node_54088.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54089)){
var new_link_54090 = (function (){var G__53914 = node_54088.cloneNode(true);
G__53914.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54089),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53914;
})();
(node_54088.shadow$old = true);

(new_link_54090.onload = ((function (seq__53901_54062,chunk__53905_54063,count__53906_54064,i__53907_54065,seq__53850,chunk__53852,count__53853,i__53854,new_link_54090,path_match_54089,node_54088,seq__53901_54082__$1,temp__5754__auto___54081__$1,path,seq__53850__$1,temp__5754__auto__,map__53849,map__53849__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54088);
});})(seq__53901_54062,chunk__53905_54063,count__53906_54064,i__53907_54065,seq__53850,chunk__53852,count__53853,i__53854,new_link_54090,path_match_54089,node_54088,seq__53901_54082__$1,temp__5754__auto___54081__$1,path,seq__53850__$1,temp__5754__auto__,map__53849,map__53849__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54089], 0));

goog.dom.insertSiblingAfter(new_link_54090,node_54088);


var G__54091 = cljs.core.next(seq__53901_54082__$1);
var G__54092 = null;
var G__54093 = (0);
var G__54094 = (0);
seq__53901_54062 = G__54091;
chunk__53905_54063 = G__54092;
count__53906_54064 = G__54093;
i__53907_54065 = G__54094;
continue;
} else {
var G__54095 = cljs.core.next(seq__53901_54082__$1);
var G__54096 = null;
var G__54097 = (0);
var G__54098 = (0);
seq__53901_54062 = G__54095;
chunk__53905_54063 = G__54096;
count__53906_54064 = G__54097;
i__53907_54065 = G__54098;
continue;
}
} else {
var G__54099 = cljs.core.next(seq__53901_54082__$1);
var G__54100 = null;
var G__54101 = (0);
var G__54102 = (0);
seq__53901_54062 = G__54099;
chunk__53905_54063 = G__54100;
count__53906_54064 = G__54101;
i__53907_54065 = G__54102;
continue;
}
}
} else {
}
}
break;
}


var G__54103 = cljs.core.next(seq__53850__$1);
var G__54104 = null;
var G__54105 = (0);
var G__54106 = (0);
seq__53850 = G__54103;
chunk__53852 = G__54104;
count__53853 = G__54105;
i__53854 = G__54106;
continue;
} else {
var G__54107 = cljs.core.next(seq__53850__$1);
var G__54108 = null;
var G__54109 = (0);
var G__54110 = (0);
seq__53850 = G__54107;
chunk__53852 = G__54108;
count__53853 = G__54109;
i__53854 = G__54110;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53915){
var map__53916 = p__53915;
var map__53916__$1 = cljs.core.__destructure_map(map__53916);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53916__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53917){
var map__53918 = p__53917;
var map__53918__$1 = cljs.core.__destructure_map(map__53918);
var _ = map__53918__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53919,done,error){
var map__53920 = p__53919;
var map__53920__$1 = cljs.core.__destructure_map(map__53920);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53921,done,error){
var map__53922 = p__53921;
var map__53922__$1 = cljs.core.__destructure_map(map__53922);
var msg = map__53922__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53922__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53922__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53922__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53923){
var map__53924 = p__53923;
var map__53924__$1 = cljs.core.__destructure_map(map__53924);
var src = map__53924__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53924__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53925 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53925) : done.call(null,G__53925));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53926){
var map__53927 = p__53926;
var map__53927__$1 = cljs.core.__destructure_map(map__53927);
var msg__$1 = map__53927__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53927__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53928){var ex = e53928;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53929){
var map__53930 = p__53929;
var map__53930__$1 = cljs.core.__destructure_map(map__53930);
var env = map__53930__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53931){
var map__53932 = p__53931;
var map__53932__$1 = cljs.core.__destructure_map(map__53932);
var msg = map__53932__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53933){
var map__53934 = p__53933;
var map__53934__$1 = cljs.core.__destructure_map(map__53934);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53935){
var map__53936 = p__53935;
var map__53936__$1 = cljs.core.__destructure_map(map__53936);
var svc = map__53936__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53936__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
