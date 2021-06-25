goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53123){
var map__53124 = p__53123;
var map__53124__$1 = cljs.core.__destructure_map(map__53124);
var m = map__53124__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53124__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5754__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53125_53338 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53126_53339 = null;
var count__53127_53340 = (0);
var i__53128_53341 = (0);
while(true){
if((i__53128_53341 < count__53127_53340)){
var f_53342 = chunk__53126_53339.cljs$core$IIndexed$_nth$arity$2(null,i__53128_53341);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53342], 0));


var G__53343 = seq__53125_53338;
var G__53344 = chunk__53126_53339;
var G__53345 = count__53127_53340;
var G__53346 = (i__53128_53341 + (1));
seq__53125_53338 = G__53343;
chunk__53126_53339 = G__53344;
count__53127_53340 = G__53345;
i__53128_53341 = G__53346;
continue;
} else {
var temp__5754__auto___53347 = cljs.core.seq(seq__53125_53338);
if(temp__5754__auto___53347){
var seq__53125_53348__$1 = temp__5754__auto___53347;
if(cljs.core.chunked_seq_QMARK_(seq__53125_53348__$1)){
var c__4649__auto___53349 = cljs.core.chunk_first(seq__53125_53348__$1);
var G__53350 = cljs.core.chunk_rest(seq__53125_53348__$1);
var G__53351 = c__4649__auto___53349;
var G__53352 = cljs.core.count(c__4649__auto___53349);
var G__53353 = (0);
seq__53125_53338 = G__53350;
chunk__53126_53339 = G__53351;
count__53127_53340 = G__53352;
i__53128_53341 = G__53353;
continue;
} else {
var f_53354 = cljs.core.first(seq__53125_53348__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53354], 0));


var G__53355 = cljs.core.next(seq__53125_53348__$1);
var G__53356 = null;
var G__53357 = (0);
var G__53358 = (0);
seq__53125_53338 = G__53355;
chunk__53126_53339 = G__53356;
count__53127_53340 = G__53357;
i__53128_53341 = G__53358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53359], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53359)))?cljs.core.second(arglists_53359):arglists_53359)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53129_53360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53130_53361 = null;
var count__53131_53362 = (0);
var i__53132_53363 = (0);
while(true){
if((i__53132_53363 < count__53131_53362)){
var vec__53141_53364 = chunk__53130_53361.cljs$core$IIndexed$_nth$arity$2(null,i__53132_53363);
var name_53365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141_53364,(0),null);
var map__53144_53366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141_53364,(1),null);
var map__53144_53367__$1 = cljs.core.__destructure_map(map__53144_53366);
var doc_53368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144_53367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144_53367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53365], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53369], 0));

if(cljs.core.truth_(doc_53368)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53368], 0));
} else {
}


var G__53370 = seq__53129_53360;
var G__53371 = chunk__53130_53361;
var G__53372 = count__53131_53362;
var G__53373 = (i__53132_53363 + (1));
seq__53129_53360 = G__53370;
chunk__53130_53361 = G__53371;
count__53131_53362 = G__53372;
i__53132_53363 = G__53373;
continue;
} else {
var temp__5754__auto___53374 = cljs.core.seq(seq__53129_53360);
if(temp__5754__auto___53374){
var seq__53129_53375__$1 = temp__5754__auto___53374;
if(cljs.core.chunked_seq_QMARK_(seq__53129_53375__$1)){
var c__4649__auto___53376 = cljs.core.chunk_first(seq__53129_53375__$1);
var G__53377 = cljs.core.chunk_rest(seq__53129_53375__$1);
var G__53378 = c__4649__auto___53376;
var G__53379 = cljs.core.count(c__4649__auto___53376);
var G__53380 = (0);
seq__53129_53360 = G__53377;
chunk__53130_53361 = G__53378;
count__53131_53362 = G__53379;
i__53132_53363 = G__53380;
continue;
} else {
var vec__53150_53381 = cljs.core.first(seq__53129_53375__$1);
var name_53382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150_53381,(0),null);
var map__53153_53383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150_53381,(1),null);
var map__53153_53384__$1 = cljs.core.__destructure_map(map__53153_53383);
var doc_53385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53153_53384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53153_53384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53382], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53386], 0));

if(cljs.core.truth_(doc_53385)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53385], 0));
} else {
}


var G__53387 = cljs.core.next(seq__53129_53375__$1);
var G__53388 = null;
var G__53389 = (0);
var G__53390 = (0);
seq__53129_53360 = G__53387;
chunk__53130_53361 = G__53388;
count__53131_53362 = G__53389;
i__53132_53363 = G__53390;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5754__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5754__auto__)){
var fnspec = temp__5754__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53154 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53155 = null;
var count__53156 = (0);
var i__53157 = (0);
while(true){
if((i__53157 < count__53156)){
var role = chunk__53155.cljs$core$IIndexed$_nth$arity$2(null,i__53157);
var temp__5754__auto___53391__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___53391__$1)){
var spec_53392 = temp__5754__auto___53391__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53392)], 0));
} else {
}


var G__53393 = seq__53154;
var G__53394 = chunk__53155;
var G__53395 = count__53156;
var G__53396 = (i__53157 + (1));
seq__53154 = G__53393;
chunk__53155 = G__53394;
count__53156 = G__53395;
i__53157 = G__53396;
continue;
} else {
var temp__5754__auto____$1 = cljs.core.seq(seq__53154);
if(temp__5754__auto____$1){
var seq__53154__$1 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53154__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53154__$1);
var G__53397 = cljs.core.chunk_rest(seq__53154__$1);
var G__53398 = c__4649__auto__;
var G__53399 = cljs.core.count(c__4649__auto__);
var G__53400 = (0);
seq__53154 = G__53397;
chunk__53155 = G__53398;
count__53156 = G__53399;
i__53157 = G__53400;
continue;
} else {
var role = cljs.core.first(seq__53154__$1);
var temp__5754__auto___53401__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___53401__$2)){
var spec_53402 = temp__5754__auto___53401__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53402)], 0));
} else {
}


var G__53403 = cljs.core.next(seq__53154__$1);
var G__53404 = null;
var G__53405 = (0);
var G__53406 = (0);
seq__53154 = G__53403;
chunk__53155 = G__53404;
count__53156 = G__53405;
i__53157 = G__53406;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5754__auto__)){
var msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5754__auto__)){
var ed = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53409 = cljs.core.ex_cause(t);
via = G__53408;
t = G__53409;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5754__auto__)){
var root_msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5754__auto__)){
var data = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5754__auto__)){
var phase = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53166 = datafied_throwable;
var map__53166__$1 = cljs.core.__destructure_map(map__53166);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53166__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53166__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53166__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53167 = cljs.core.last(via);
var map__53167__$1 = cljs.core.__destructure_map(map__53167);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53167__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53167__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53168 = data;
var map__53168__$1 = cljs.core.__destructure_map(map__53168);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53168__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53168__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53168__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53169 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53169__$1 = cljs.core.__destructure_map(map__53169);
var top_data = map__53169__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53170 = phase;
var G__53170__$1 = (((G__53170 instanceof cljs.core.Keyword))?G__53170.fqn:null);
switch (G__53170__$1) {
case "read-source":
var map__53189 = data;
var map__53189__$1 = cljs.core.__destructure_map(map__53189);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53190 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53190__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53190,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53190);
var G__53190__$2 = (cljs.core.truth_((function (){var fexpr__53191 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53191.cljs$core$IFn$_invoke$arity$1 ? fexpr__53191.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53191.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53190__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53190__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53190__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53192 = top_data;
var G__53192__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53192,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53192);
var G__53192__$2 = (cljs.core.truth_((function (){var fexpr__53193 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53193.cljs$core$IFn$_invoke$arity$1 ? fexpr__53193.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53193.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53192__$1);
var G__53192__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53192__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53192__$2);
var G__53192__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53192__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53192__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53192__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53192__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53194 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(3),null);
var G__53197 = top_data;
var G__53197__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53197);
var G__53197__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53197__$1);
var G__53197__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53197__$2);
var G__53197__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53197__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53197__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53197__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53197__$4;
}

break;
case "execution":
var vec__53243 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53165_SHARP_){
var or__4223__auto__ = (p1__53165_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53246.cljs$core$IFn$_invoke$arity$1 ? fexpr__53246.cljs$core$IFn$_invoke$arity$1(p1__53165_SHARP_) : fexpr__53246.call(null,p1__53165_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53247 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53247__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53247,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53247);
var G__53247__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53247__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53247__$1);
var G__53247__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53247__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53247__$2);
var G__53247__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53247__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53247__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53247__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53247__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53170__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53250){
var map__53251 = p__53250;
var map__53251__$1 = cljs.core.__destructure_map(map__53251);
var triage_data = map__53251__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53251__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53287 = phase;
var G__53287__$1 = (((G__53287 instanceof cljs.core.Keyword))?G__53287.fqn:null);
switch (G__53287__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53288 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53289 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53290 = loc;
var G__53291 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53292_53421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53293_53422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53294_53423 = true;
var _STAR_print_fn_STAR__temp_val__53295_53424 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53294_53423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53295_53424);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53248_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53248_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53293_53422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53292_53421);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53288,G__53289,G__53290,G__53291) : format.call(null,G__53288,G__53289,G__53290,G__53291));

break;
case "macroexpansion":
var G__53296 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53297 = cause_type;
var G__53298 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53299 = loc;
var G__53300 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53296,G__53297,G__53298,G__53299,G__53300) : format.call(null,G__53296,G__53297,G__53298,G__53299,G__53300));

break;
case "compile-syntax-check":
var G__53301 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53302 = cause_type;
var G__53303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53304 = loc;
var G__53305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53301,G__53302,G__53303,G__53304,G__53305) : format.call(null,G__53301,G__53302,G__53303,G__53304,G__53305));

break;
case "compilation":
var G__53318 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53319 = cause_type;
var G__53320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53321 = loc;
var G__53322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53318,G__53319,G__53320,G__53321,G__53322) : format.call(null,G__53318,G__53319,G__53320,G__53321,G__53322));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53323 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53324 = symbol;
var G__53325 = loc;
var G__53326 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53328_53431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53329_53432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53330_53433 = true;
var _STAR_print_fn_STAR__temp_val__53331_53434 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53330_53433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53331_53434);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53249_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53249_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53329_53432);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53328_53431);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53323,G__53324,G__53325,G__53326) : format.call(null,G__53323,G__53324,G__53325,G__53326));
} else {
var G__53332 = "Execution error%s at %s(%s).\n%s\n";
var G__53333 = cause_type;
var G__53334 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53335 = loc;
var G__53336 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53332,G__53333,G__53334,G__53335,G__53336) : format.call(null,G__53332,G__53333,G__53334,G__53335,G__53336));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53287__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
