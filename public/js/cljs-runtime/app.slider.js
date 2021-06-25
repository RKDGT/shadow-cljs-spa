goog.provide('app.slider');
app.slider.__GT_Next = (function app$slider$__GT_Next(){
return console.log("next");
});
app.slider.__GT_Prev = (function app$slider$__GT_Prev(){
return cljs.core.List.EMPTY;
});
app.slider.slides = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"shown",new cljs.core.Keyword(null,"rait","rait",-1720125182),"4",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"",new cljs.core.Keyword(null,"userName","userName",1867040765),"Zoltan Nemeth",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"3",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"4",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName2",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"2",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName3",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null)], null));
app.slider.slider = (function app$slider$slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider","div.slider",1951581386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-items","div.slider-items",1249559300),(function (){var iter__4622__auto__ = (function app$slider$slider_$_iter__46487(s__46488){
return (new cljs.core.LazySeq(null,(function (){
var s__46488__$1 = s__46488;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__46488__$1);
if(temp__5754__auto__){
var s__46488__$2 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46488__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46488__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46490 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46489 = (0);
while(true){
if((i__46489 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46489);
cljs.core.chunk_append(b__46490,app.slide.slide(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"rait","rait",-1720125182).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userPict","userPict",-1076281820).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userName","userName",1867040765).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.__GT_Next], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.__GT_Prev], null)));

var G__46491 = (i__46489 + (1));
i__46489 = G__46491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46490),app$slider$slider_$_iter__46487(cljs.core.chunk_rest(s__46488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46490),null);
}
} else {
var x = cljs.core.first(s__46488__$2);
return cljs.core.cons(app.slide.slide(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"rait","rait",-1720125182).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userPict","userPict",-1076281820).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userName","userName",1867040765).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.__GT_Next], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.__GT_Prev], null)),app$slider$slider_$_iter__46487(cljs.core.rest(s__46488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.deref(app.slider.slides));
})()], null)], null);
});

//# sourceMappingURL=app.slider.js.map
