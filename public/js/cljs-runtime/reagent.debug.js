goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__54210__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54211__i = 0, G__54211__a = new Array(arguments.length -  0);
while (G__54211__i < G__54211__a.length) {G__54211__a[G__54211__i] = arguments[G__54211__i + 0]; ++G__54211__i;}
  args = new cljs.core.IndexedSeq(G__54211__a,0,null);
} 
return G__54210__delegate.call(this,args);};
G__54210.cljs$lang$maxFixedArity = 0;
G__54210.cljs$lang$applyTo = (function (arglist__54212){
var args = cljs.core.seq(arglist__54212);
return G__54210__delegate(args);
});
G__54210.cljs$core$IFn$_invoke$arity$variadic = G__54210__delegate;
return G__54210;
})()
);

(o.error = (function() { 
var G__54213__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54214__i = 0, G__54214__a = new Array(arguments.length -  0);
while (G__54214__i < G__54214__a.length) {G__54214__a[G__54214__i] = arguments[G__54214__i + 0]; ++G__54214__i;}
  args = new cljs.core.IndexedSeq(G__54214__a,0,null);
} 
return G__54213__delegate.call(this,args);};
G__54213.cljs$lang$maxFixedArity = 0;
G__54213.cljs$lang$applyTo = (function (arglist__54215){
var args = cljs.core.seq(arglist__54215);
return G__54213__delegate(args);
});
G__54213.cljs$core$IFn$_invoke$arity$variadic = G__54213__delegate;
return G__54213;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
