goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection');
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__46550 = Object.getPrototypeOf(obj__$1);
var G__46551 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__46550;
protos = G__46551;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$property_names_and_types(var_args){
var G__46537 = arguments.length;
switch (G__46537) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4622__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__46538(s__46539){
return (new cljs.core.LazySeq(null,(function (){
var s__46539__$1 = s__46539;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__46539__$1);
if(temp__5754__auto__){
var xs__6309__auto__ = temp__5754__auto__;
var vec__46544 = cljs.core.first(xs__6309__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46544,(0),null);
var map__46547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46544,(1),null);
var map__46547__$1 = cljs.core.__destructure_map(map__46547);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46547__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46547__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4618__auto__ = ((function (s__46539__$1,vec__46544,i,map__46547,map__46547__$1,obj,props,xs__6309__auto__,temp__5754__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__46538_$_iter__46540(s__46541){
return (new cljs.core.LazySeq(null,((function (s__46539__$1,vec__46544,i,map__46547,map__46547__$1,obj,props,xs__6309__auto__,temp__5754__auto__,seen){
return (function (){
var s__46541__$1 = s__46541;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__46541__$1);
if(temp__5754__auto____$1){
var s__46541__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46541__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46541__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46543 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46542 = (0);
while(true){
if((i__46542 < size__4621__auto__)){
var key = cljs.core._nth(c__4620__auto__,i__46542);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__46543,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5752__auto__ = (function (){var or__4223__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5752__auto__)){
var value = temp__5752__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e46548){if((e46548 instanceof Error)){
var e = e46548;
return "var";
} else {
throw e46548;

}
}})()], null);
})());

var G__46553 = (i__46542 + (1));
i__46542 = G__46553;
continue;
} else {
var G__46554 = (i__46542 + (1));
i__46542 = G__46554;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46543),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__46538_$_iter__46540(cljs.core.chunk_rest(s__46541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46543),null);
}
} else {
var key = cljs.core.first(s__46541__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5752__auto__ = (function (){var or__4223__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5752__auto__)){
var value = temp__5752__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e46549){if((e46549 instanceof Error)){
var e = e46549;
return "var";
} else {
throw e46549;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__46538_$_iter__46540(cljs.core.rest(s__46541__$2)));
} else {
var G__46555 = cljs.core.rest(s__46541__$2);
s__46541__$1 = G__46555;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46539__$1,vec__46544,i,map__46547,map__46547__$1,obj,props,xs__6309__auto__,temp__5754__auto__,seen))
,null,null));
});})(s__46539__$1,vec__46544,i,map__46547,map__46547__$1,obj,props,xs__6309__auto__,temp__5754__auto__,seen))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.js_keys(props)));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__46538(cljs.core.rest(s__46539__$1)));
} else {
var G__46556 = cljs.core.rest(s__46539__$1);
s__46539__$1 = G__46556;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.js.map
