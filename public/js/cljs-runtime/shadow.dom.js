goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51095 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51095(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51096 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51096(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50389 = coll;
var G__50390 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50389,G__50390) : shadow.dom.lazy_native_coll_seq.call(null,G__50389,G__50390));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50402 = arguments.length;
switch (G__50402) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50428 = arguments.length;
switch (G__50428) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50430 = arguments.length;
switch (G__50430) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50432 = arguments.length;
switch (G__50432) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50434 = arguments.length;
switch (G__50434) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50436 = arguments.length;
switch (G__50436) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50471){if((e50471 instanceof Object)){
var e = e50471;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50471;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50472 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50473 = null;
var count__50474 = (0);
var i__50475 = (0);
while(true){
if((i__50475 < count__50474)){
var el = chunk__50473.cljs$core$IIndexed$_nth$arity$2(null,i__50475);
var handler_51103__$1 = ((function (seq__50472,chunk__50473,count__50474,i__50475,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50472,chunk__50473,count__50474,i__50475,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51103__$1);


var G__51104 = seq__50472;
var G__51105 = chunk__50473;
var G__51106 = count__50474;
var G__51107 = (i__50475 + (1));
seq__50472 = G__51104;
chunk__50473 = G__51105;
count__50474 = G__51106;
i__50475 = G__51107;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50472);
if(temp__5754__auto__){
var seq__50472__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50472__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50472__$1);
var G__51108 = cljs.core.chunk_rest(seq__50472__$1);
var G__51109 = c__4649__auto__;
var G__51110 = cljs.core.count(c__4649__auto__);
var G__51111 = (0);
seq__50472 = G__51108;
chunk__50473 = G__51109;
count__50474 = G__51110;
i__50475 = G__51111;
continue;
} else {
var el = cljs.core.first(seq__50472__$1);
var handler_51112__$1 = ((function (seq__50472,chunk__50473,count__50474,i__50475,el,seq__50472__$1,temp__5754__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50472,chunk__50473,count__50474,i__50475,el,seq__50472__$1,temp__5754__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51112__$1);


var G__51113 = cljs.core.next(seq__50472__$1);
var G__51114 = null;
var G__51115 = (0);
var G__51116 = (0);
seq__50472 = G__51113;
chunk__50473 = G__51114;
count__50474 = G__51115;
i__50475 = G__51116;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50517 = arguments.length;
switch (G__50517) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50518 = cljs.core.seq(events);
var chunk__50519 = null;
var count__50520 = (0);
var i__50521 = (0);
while(true){
if((i__50521 < count__50520)){
var vec__50556 = chunk__50519.cljs$core$IIndexed$_nth$arity$2(null,i__50521);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50556,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51118 = seq__50518;
var G__51119 = chunk__50519;
var G__51120 = count__50520;
var G__51121 = (i__50521 + (1));
seq__50518 = G__51118;
chunk__50519 = G__51119;
count__50520 = G__51120;
i__50521 = G__51121;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50518);
if(temp__5754__auto__){
var seq__50518__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50518__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50518__$1);
var G__51122 = cljs.core.chunk_rest(seq__50518__$1);
var G__51123 = c__4649__auto__;
var G__51124 = cljs.core.count(c__4649__auto__);
var G__51125 = (0);
seq__50518 = G__51122;
chunk__50519 = G__51123;
count__50520 = G__51124;
i__50521 = G__51125;
continue;
} else {
var vec__50559 = cljs.core.first(seq__50518__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51126 = cljs.core.next(seq__50518__$1);
var G__51127 = null;
var G__51128 = (0);
var G__51129 = (0);
seq__50518 = G__51126;
chunk__50519 = G__51127;
count__50520 = G__51128;
i__50521 = G__51129;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50562 = cljs.core.seq(styles);
var chunk__50563 = null;
var count__50564 = (0);
var i__50565 = (0);
while(true){
if((i__50565 < count__50564)){
var vec__50572 = chunk__50563.cljs$core$IIndexed$_nth$arity$2(null,i__50565);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50572,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51130 = seq__50562;
var G__51131 = chunk__50563;
var G__51132 = count__50564;
var G__51133 = (i__50565 + (1));
seq__50562 = G__51130;
chunk__50563 = G__51131;
count__50564 = G__51132;
i__50565 = G__51133;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50562);
if(temp__5754__auto__){
var seq__50562__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50562__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50562__$1);
var G__51134 = cljs.core.chunk_rest(seq__50562__$1);
var G__51135 = c__4649__auto__;
var G__51136 = cljs.core.count(c__4649__auto__);
var G__51137 = (0);
seq__50562 = G__51134;
chunk__50563 = G__51135;
count__50564 = G__51136;
i__50565 = G__51137;
continue;
} else {
var vec__50575 = cljs.core.first(seq__50562__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50575,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51138 = cljs.core.next(seq__50562__$1);
var G__51139 = null;
var G__51140 = (0);
var G__51141 = (0);
seq__50562 = G__51138;
chunk__50563 = G__51139;
count__50564 = G__51140;
i__50565 = G__51141;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50578_51142 = key;
var G__50578_51143__$1 = (((G__50578_51142 instanceof cljs.core.Keyword))?G__50578_51142.fqn:null);
switch (G__50578_51143__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51145 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51145,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51145,"aria-");
}
})())){
el.setAttribute(ks_51145,value);
} else {
(el[ks_51145] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50601){
var map__50602 = p__50601;
var map__50602__$1 = cljs.core.__destructure_map(map__50602);
var props = map__50602__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50602__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50603 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50612 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50612,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50612;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50614 = arguments.length;
switch (G__50614) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50615){
var vec__50616 = p__50615;
var seq__50617 = cljs.core.seq(vec__50616);
var first__50618 = cljs.core.first(seq__50617);
var seq__50617__$1 = cljs.core.next(seq__50617);
var nn = first__50618;
var first__50618__$1 = cljs.core.first(seq__50617__$1);
var seq__50617__$2 = cljs.core.next(seq__50617__$1);
var np = first__50618__$1;
var nc = seq__50617__$2;
var node = vec__50616;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50619 = nn;
var G__50620 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50619,G__50620) : create_fn.call(null,G__50619,G__50620));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50621 = nn;
var G__50622 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50621,G__50622) : create_fn.call(null,G__50621,G__50622));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50623 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50623,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50623,(1),null);
var seq__50626_51147 = cljs.core.seq(node_children);
var chunk__50627_51148 = null;
var count__50628_51149 = (0);
var i__50629_51150 = (0);
while(true){
if((i__50629_51150 < count__50628_51149)){
var child_struct_51151 = chunk__50627_51148.cljs$core$IIndexed$_nth$arity$2(null,i__50629_51150);
var children_51152 = shadow.dom.dom_node(child_struct_51151);
if(cljs.core.seq_QMARK_(children_51152)){
var seq__50698_51153 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51152));
var chunk__50700_51154 = null;
var count__50701_51155 = (0);
var i__50702_51156 = (0);
while(true){
if((i__50702_51156 < count__50701_51155)){
var child_51157 = chunk__50700_51154.cljs$core$IIndexed$_nth$arity$2(null,i__50702_51156);
if(cljs.core.truth_(child_51157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51157);


var G__51158 = seq__50698_51153;
var G__51159 = chunk__50700_51154;
var G__51160 = count__50701_51155;
var G__51161 = (i__50702_51156 + (1));
seq__50698_51153 = G__51158;
chunk__50700_51154 = G__51159;
count__50701_51155 = G__51160;
i__50702_51156 = G__51161;
continue;
} else {
var G__51162 = seq__50698_51153;
var G__51163 = chunk__50700_51154;
var G__51164 = count__50701_51155;
var G__51165 = (i__50702_51156 + (1));
seq__50698_51153 = G__51162;
chunk__50700_51154 = G__51163;
count__50701_51155 = G__51164;
i__50702_51156 = G__51165;
continue;
}
} else {
var temp__5754__auto___51166 = cljs.core.seq(seq__50698_51153);
if(temp__5754__auto___51166){
var seq__50698_51167__$1 = temp__5754__auto___51166;
if(cljs.core.chunked_seq_QMARK_(seq__50698_51167__$1)){
var c__4649__auto___51168 = cljs.core.chunk_first(seq__50698_51167__$1);
var G__51169 = cljs.core.chunk_rest(seq__50698_51167__$1);
var G__51170 = c__4649__auto___51168;
var G__51171 = cljs.core.count(c__4649__auto___51168);
var G__51172 = (0);
seq__50698_51153 = G__51169;
chunk__50700_51154 = G__51170;
count__50701_51155 = G__51171;
i__50702_51156 = G__51172;
continue;
} else {
var child_51173 = cljs.core.first(seq__50698_51167__$1);
if(cljs.core.truth_(child_51173)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51173);


var G__51174 = cljs.core.next(seq__50698_51167__$1);
var G__51175 = null;
var G__51176 = (0);
var G__51177 = (0);
seq__50698_51153 = G__51174;
chunk__50700_51154 = G__51175;
count__50701_51155 = G__51176;
i__50702_51156 = G__51177;
continue;
} else {
var G__51178 = cljs.core.next(seq__50698_51167__$1);
var G__51179 = null;
var G__51180 = (0);
var G__51181 = (0);
seq__50698_51153 = G__51178;
chunk__50700_51154 = G__51179;
count__50701_51155 = G__51180;
i__50702_51156 = G__51181;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51152);
}


var G__51182 = seq__50626_51147;
var G__51183 = chunk__50627_51148;
var G__51184 = count__50628_51149;
var G__51185 = (i__50629_51150 + (1));
seq__50626_51147 = G__51182;
chunk__50627_51148 = G__51183;
count__50628_51149 = G__51184;
i__50629_51150 = G__51185;
continue;
} else {
var temp__5754__auto___51186 = cljs.core.seq(seq__50626_51147);
if(temp__5754__auto___51186){
var seq__50626_51187__$1 = temp__5754__auto___51186;
if(cljs.core.chunked_seq_QMARK_(seq__50626_51187__$1)){
var c__4649__auto___51188 = cljs.core.chunk_first(seq__50626_51187__$1);
var G__51189 = cljs.core.chunk_rest(seq__50626_51187__$1);
var G__51190 = c__4649__auto___51188;
var G__51191 = cljs.core.count(c__4649__auto___51188);
var G__51192 = (0);
seq__50626_51147 = G__51189;
chunk__50627_51148 = G__51190;
count__50628_51149 = G__51191;
i__50629_51150 = G__51192;
continue;
} else {
var child_struct_51193 = cljs.core.first(seq__50626_51187__$1);
var children_51194 = shadow.dom.dom_node(child_struct_51193);
if(cljs.core.seq_QMARK_(children_51194)){
var seq__50720_51195 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51194));
var chunk__50722_51196 = null;
var count__50723_51197 = (0);
var i__50724_51198 = (0);
while(true){
if((i__50724_51198 < count__50723_51197)){
var child_51199 = chunk__50722_51196.cljs$core$IIndexed$_nth$arity$2(null,i__50724_51198);
if(cljs.core.truth_(child_51199)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51199);


var G__51200 = seq__50720_51195;
var G__51201 = chunk__50722_51196;
var G__51202 = count__50723_51197;
var G__51203 = (i__50724_51198 + (1));
seq__50720_51195 = G__51200;
chunk__50722_51196 = G__51201;
count__50723_51197 = G__51202;
i__50724_51198 = G__51203;
continue;
} else {
var G__51204 = seq__50720_51195;
var G__51205 = chunk__50722_51196;
var G__51206 = count__50723_51197;
var G__51207 = (i__50724_51198 + (1));
seq__50720_51195 = G__51204;
chunk__50722_51196 = G__51205;
count__50723_51197 = G__51206;
i__50724_51198 = G__51207;
continue;
}
} else {
var temp__5754__auto___51208__$1 = cljs.core.seq(seq__50720_51195);
if(temp__5754__auto___51208__$1){
var seq__50720_51209__$1 = temp__5754__auto___51208__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50720_51209__$1)){
var c__4649__auto___51210 = cljs.core.chunk_first(seq__50720_51209__$1);
var G__51211 = cljs.core.chunk_rest(seq__50720_51209__$1);
var G__51212 = c__4649__auto___51210;
var G__51213 = cljs.core.count(c__4649__auto___51210);
var G__51214 = (0);
seq__50720_51195 = G__51211;
chunk__50722_51196 = G__51212;
count__50723_51197 = G__51213;
i__50724_51198 = G__51214;
continue;
} else {
var child_51215 = cljs.core.first(seq__50720_51209__$1);
if(cljs.core.truth_(child_51215)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51215);


var G__51216 = cljs.core.next(seq__50720_51209__$1);
var G__51217 = null;
var G__51218 = (0);
var G__51219 = (0);
seq__50720_51195 = G__51216;
chunk__50722_51196 = G__51217;
count__50723_51197 = G__51218;
i__50724_51198 = G__51219;
continue;
} else {
var G__51220 = cljs.core.next(seq__50720_51209__$1);
var G__51221 = null;
var G__51222 = (0);
var G__51223 = (0);
seq__50720_51195 = G__51220;
chunk__50722_51196 = G__51221;
count__50723_51197 = G__51222;
i__50724_51198 = G__51223;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51194);
}


var G__51224 = cljs.core.next(seq__50626_51187__$1);
var G__51225 = null;
var G__51226 = (0);
var G__51227 = (0);
seq__50626_51147 = G__51224;
chunk__50627_51148 = G__51225;
count__50628_51149 = G__51226;
i__50629_51150 = G__51227;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50755 = cljs.core.seq(node);
var chunk__50756 = null;
var count__50757 = (0);
var i__50758 = (0);
while(true){
if((i__50758 < count__50757)){
var n = chunk__50756.cljs$core$IIndexed$_nth$arity$2(null,i__50758);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51228 = seq__50755;
var G__51229 = chunk__50756;
var G__51230 = count__50757;
var G__51231 = (i__50758 + (1));
seq__50755 = G__51228;
chunk__50756 = G__51229;
count__50757 = G__51230;
i__50758 = G__51231;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50755);
if(temp__5754__auto__){
var seq__50755__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50755__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50755__$1);
var G__51232 = cljs.core.chunk_rest(seq__50755__$1);
var G__51233 = c__4649__auto__;
var G__51234 = cljs.core.count(c__4649__auto__);
var G__51235 = (0);
seq__50755 = G__51232;
chunk__50756 = G__51233;
count__50757 = G__51234;
i__50758 = G__51235;
continue;
} else {
var n = cljs.core.first(seq__50755__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51236 = cljs.core.next(seq__50755__$1);
var G__51237 = null;
var G__51238 = (0);
var G__51239 = (0);
seq__50755 = G__51236;
chunk__50756 = G__51237;
count__50757 = G__51238;
i__50758 = G__51239;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50760 = arguments.length;
switch (G__50760) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50786 = arguments.length;
switch (G__50786) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50788 = arguments.length;
switch (G__50788) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51243 = arguments.length;
var i__4830__auto___51244 = (0);
while(true){
if((i__4830__auto___51244 < len__4829__auto___51243)){
args__4835__auto__.push((arguments[i__4830__auto___51244]));

var G__51245 = (i__4830__auto___51244 + (1));
i__4830__auto___51244 = G__51245;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50814_51246 = cljs.core.seq(nodes);
var chunk__50815_51247 = null;
var count__50816_51248 = (0);
var i__50817_51249 = (0);
while(true){
if((i__50817_51249 < count__50816_51248)){
var node_51250 = chunk__50815_51247.cljs$core$IIndexed$_nth$arity$2(null,i__50817_51249);
fragment.appendChild(shadow.dom._to_dom(node_51250));


var G__51251 = seq__50814_51246;
var G__51252 = chunk__50815_51247;
var G__51253 = count__50816_51248;
var G__51254 = (i__50817_51249 + (1));
seq__50814_51246 = G__51251;
chunk__50815_51247 = G__51252;
count__50816_51248 = G__51253;
i__50817_51249 = G__51254;
continue;
} else {
var temp__5754__auto___51255 = cljs.core.seq(seq__50814_51246);
if(temp__5754__auto___51255){
var seq__50814_51256__$1 = temp__5754__auto___51255;
if(cljs.core.chunked_seq_QMARK_(seq__50814_51256__$1)){
var c__4649__auto___51257 = cljs.core.chunk_first(seq__50814_51256__$1);
var G__51258 = cljs.core.chunk_rest(seq__50814_51256__$1);
var G__51259 = c__4649__auto___51257;
var G__51260 = cljs.core.count(c__4649__auto___51257);
var G__51261 = (0);
seq__50814_51246 = G__51258;
chunk__50815_51247 = G__51259;
count__50816_51248 = G__51260;
i__50817_51249 = G__51261;
continue;
} else {
var node_51262 = cljs.core.first(seq__50814_51256__$1);
fragment.appendChild(shadow.dom._to_dom(node_51262));


var G__51263 = cljs.core.next(seq__50814_51256__$1);
var G__51264 = null;
var G__51265 = (0);
var G__51266 = (0);
seq__50814_51246 = G__51263;
chunk__50815_51247 = G__51264;
count__50816_51248 = G__51265;
i__50817_51249 = G__51266;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50813){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50813));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50818_51267 = cljs.core.seq(scripts);
var chunk__50819_51268 = null;
var count__50820_51269 = (0);
var i__50821_51270 = (0);
while(true){
if((i__50821_51270 < count__50820_51269)){
var vec__50854_51271 = chunk__50819_51268.cljs$core$IIndexed$_nth$arity$2(null,i__50821_51270);
var script_tag_51272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50854_51271,(0),null);
var script_body_51273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50854_51271,(1),null);
eval(script_body_51273);


var G__51274 = seq__50818_51267;
var G__51275 = chunk__50819_51268;
var G__51276 = count__50820_51269;
var G__51277 = (i__50821_51270 + (1));
seq__50818_51267 = G__51274;
chunk__50819_51268 = G__51275;
count__50820_51269 = G__51276;
i__50821_51270 = G__51277;
continue;
} else {
var temp__5754__auto___51278 = cljs.core.seq(seq__50818_51267);
if(temp__5754__auto___51278){
var seq__50818_51279__$1 = temp__5754__auto___51278;
if(cljs.core.chunked_seq_QMARK_(seq__50818_51279__$1)){
var c__4649__auto___51280 = cljs.core.chunk_first(seq__50818_51279__$1);
var G__51281 = cljs.core.chunk_rest(seq__50818_51279__$1);
var G__51282 = c__4649__auto___51280;
var G__51283 = cljs.core.count(c__4649__auto___51280);
var G__51284 = (0);
seq__50818_51267 = G__51281;
chunk__50819_51268 = G__51282;
count__50820_51269 = G__51283;
i__50821_51270 = G__51284;
continue;
} else {
var vec__50857_51285 = cljs.core.first(seq__50818_51279__$1);
var script_tag_51286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857_51285,(0),null);
var script_body_51287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857_51285,(1),null);
eval(script_body_51287);


var G__51288 = cljs.core.next(seq__50818_51279__$1);
var G__51289 = null;
var G__51290 = (0);
var G__51291 = (0);
seq__50818_51267 = G__51288;
chunk__50819_51268 = G__51289;
count__50820_51269 = G__51290;
i__50821_51270 = G__51291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50860){
var vec__50861 = p__50860;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50861,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50861,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50865 = arguments.length;
switch (G__50865) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50880 = cljs.core.seq(style_keys);
var chunk__50881 = null;
var count__50882 = (0);
var i__50883 = (0);
while(true){
if((i__50883 < count__50882)){
var it = chunk__50881.cljs$core$IIndexed$_nth$arity$2(null,i__50883);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51293 = seq__50880;
var G__51294 = chunk__50881;
var G__51295 = count__50882;
var G__51296 = (i__50883 + (1));
seq__50880 = G__51293;
chunk__50881 = G__51294;
count__50882 = G__51295;
i__50883 = G__51296;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50880);
if(temp__5754__auto__){
var seq__50880__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50880__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50880__$1);
var G__51297 = cljs.core.chunk_rest(seq__50880__$1);
var G__51298 = c__4649__auto__;
var G__51299 = cljs.core.count(c__4649__auto__);
var G__51300 = (0);
seq__50880 = G__51297;
chunk__50881 = G__51298;
count__50882 = G__51299;
i__50883 = G__51300;
continue;
} else {
var it = cljs.core.first(seq__50880__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51301 = cljs.core.next(seq__50880__$1);
var G__51302 = null;
var G__51303 = (0);
var G__51304 = (0);
seq__50880 = G__51301;
chunk__50881 = G__51302;
count__50882 = G__51303;
i__50883 = G__51304;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50885,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50908 = k50885;
var G__50908__$1 = (((G__50908 instanceof cljs.core.Keyword))?G__50908.fqn:null);
switch (G__50908__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50885,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50909){
var vec__50910 = p__50909;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50910,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50910,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50884){
var self__ = this;
var G__50884__$1 = this;
return (new cljs.core.RecordIter((0),G__50884__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50886,other50887){
var self__ = this;
var this50886__$1 = this;
return (((!((other50887 == null)))) && ((((this50886__$1.constructor === other50887.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50886__$1.x,other50887.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50886__$1.y,other50887.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50886__$1.__extmap,other50887.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50885){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50936 = k50885;
var G__50936__$1 = (((G__50936 instanceof cljs.core.Keyword))?G__50936.fqn:null);
switch (G__50936__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50885);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50884){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50937 = cljs.core.keyword_identical_QMARK_;
var expr__50938 = k__4481__auto__;
if(cljs.core.truth_((pred__50937.cljs$core$IFn$_invoke$arity$2 ? pred__50937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50938) : pred__50937.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50938)))){
return (new shadow.dom.Coordinate(G__50884,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50937.cljs$core$IFn$_invoke$arity$2 ? pred__50937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50938) : pred__50937.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50938)))){
return (new shadow.dom.Coordinate(self__.x,G__50884,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50884),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50884){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50884,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50907){
var extmap__4512__auto__ = (function (){var G__50940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50907,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50907)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50940);
} else {
return G__50940;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50907),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50907),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50983,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50987 = k50983;
var G__50987__$1 = (((G__50987 instanceof cljs.core.Keyword))?G__50987.fqn:null);
switch (G__50987__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50983,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50988){
var vec__50989 = p__50988;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50982){
var self__ = this;
var G__50982__$1 = this;
return (new cljs.core.RecordIter((0),G__50982__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50984,other50985){
var self__ = this;
var this50984__$1 = this;
return (((!((other50985 == null)))) && ((((this50984__$1.constructor === other50985.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50984__$1.w,other50985.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50984__$1.h,other50985.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50984__$1.__extmap,other50985.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50983){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50992 = k50983;
var G__50992__$1 = (((G__50992 instanceof cljs.core.Keyword))?G__50992.fqn:null);
switch (G__50992__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50983);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50982){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50993 = cljs.core.keyword_identical_QMARK_;
var expr__50994 = k__4481__auto__;
if(cljs.core.truth_((pred__50993.cljs$core$IFn$_invoke$arity$2 ? pred__50993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50994) : pred__50993.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50994)))){
return (new shadow.dom.Size(G__50982,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50993.cljs$core$IFn$_invoke$arity$2 ? pred__50993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50994) : pred__50993.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50994)))){
return (new shadow.dom.Size(self__.w,G__50982,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50982),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50982){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50982,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50986){
var extmap__4512__auto__ = (function (){var G__51015 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50986,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50986)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51015);
} else {
return G__51015;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50986),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50986),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__51313 = (i + (1));
var G__51314 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51313;
ret = G__51314;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51020){
var vec__51021 = p__51020;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51025 = arguments.length;
switch (G__51025) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5752__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5752__auto__)){
var child = temp__5752__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51321 = ps;
var G__51322 = (i + (1));
el__$1 = G__51321;
i = G__51322;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51026 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51029_51323 = cljs.core.seq(props);
var chunk__51030_51324 = null;
var count__51031_51325 = (0);
var i__51032_51326 = (0);
while(true){
if((i__51032_51326 < count__51031_51325)){
var vec__51039_51327 = chunk__51030_51324.cljs$core$IIndexed$_nth$arity$2(null,i__51032_51326);
var k_51328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51039_51327,(0),null);
var v_51329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51039_51327,(1),null);
el.setAttributeNS((function (){var temp__5754__auto__ = cljs.core.namespace(k_51328);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51328),v_51329);


var G__51330 = seq__51029_51323;
var G__51331 = chunk__51030_51324;
var G__51332 = count__51031_51325;
var G__51333 = (i__51032_51326 + (1));
seq__51029_51323 = G__51330;
chunk__51030_51324 = G__51331;
count__51031_51325 = G__51332;
i__51032_51326 = G__51333;
continue;
} else {
var temp__5754__auto___51334 = cljs.core.seq(seq__51029_51323);
if(temp__5754__auto___51334){
var seq__51029_51335__$1 = temp__5754__auto___51334;
if(cljs.core.chunked_seq_QMARK_(seq__51029_51335__$1)){
var c__4649__auto___51336 = cljs.core.chunk_first(seq__51029_51335__$1);
var G__51337 = cljs.core.chunk_rest(seq__51029_51335__$1);
var G__51338 = c__4649__auto___51336;
var G__51339 = cljs.core.count(c__4649__auto___51336);
var G__51340 = (0);
seq__51029_51323 = G__51337;
chunk__51030_51324 = G__51338;
count__51031_51325 = G__51339;
i__51032_51326 = G__51340;
continue;
} else {
var vec__51042_51341 = cljs.core.first(seq__51029_51335__$1);
var k_51342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51042_51341,(0),null);
var v_51343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51042_51341,(1),null);
el.setAttributeNS((function (){var temp__5754__auto____$1 = cljs.core.namespace(k_51342);
if(cljs.core.truth_(temp__5754__auto____$1)){
var ns = temp__5754__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51342),v_51343);


var G__51344 = cljs.core.next(seq__51029_51335__$1);
var G__51345 = null;
var G__51346 = (0);
var G__51347 = (0);
seq__51029_51323 = G__51344;
chunk__51030_51324 = G__51345;
count__51031_51325 = G__51346;
i__51032_51326 = G__51347;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51046 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51046,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51046,(1),null);
var seq__51049_51348 = cljs.core.seq(node_children);
var chunk__51051_51349 = null;
var count__51052_51350 = (0);
var i__51053_51351 = (0);
while(true){
if((i__51053_51351 < count__51052_51350)){
var child_struct_51352 = chunk__51051_51349.cljs$core$IIndexed$_nth$arity$2(null,i__51053_51351);
if((!((child_struct_51352 == null)))){
if(typeof child_struct_51352 === 'string'){
var text_51353 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51353),child_struct_51352].join(''));
} else {
var children_51354 = shadow.dom.svg_node(child_struct_51352);
if(cljs.core.seq_QMARK_(children_51354)){
var seq__51067_51355 = cljs.core.seq(children_51354);
var chunk__51069_51356 = null;
var count__51070_51357 = (0);
var i__51071_51358 = (0);
while(true){
if((i__51071_51358 < count__51070_51357)){
var child_51359 = chunk__51069_51356.cljs$core$IIndexed$_nth$arity$2(null,i__51071_51358);
if(cljs.core.truth_(child_51359)){
node.appendChild(child_51359);


var G__51360 = seq__51067_51355;
var G__51361 = chunk__51069_51356;
var G__51362 = count__51070_51357;
var G__51363 = (i__51071_51358 + (1));
seq__51067_51355 = G__51360;
chunk__51069_51356 = G__51361;
count__51070_51357 = G__51362;
i__51071_51358 = G__51363;
continue;
} else {
var G__51364 = seq__51067_51355;
var G__51365 = chunk__51069_51356;
var G__51366 = count__51070_51357;
var G__51367 = (i__51071_51358 + (1));
seq__51067_51355 = G__51364;
chunk__51069_51356 = G__51365;
count__51070_51357 = G__51366;
i__51071_51358 = G__51367;
continue;
}
} else {
var temp__5754__auto___51368 = cljs.core.seq(seq__51067_51355);
if(temp__5754__auto___51368){
var seq__51067_51369__$1 = temp__5754__auto___51368;
if(cljs.core.chunked_seq_QMARK_(seq__51067_51369__$1)){
var c__4649__auto___51370 = cljs.core.chunk_first(seq__51067_51369__$1);
var G__51371 = cljs.core.chunk_rest(seq__51067_51369__$1);
var G__51372 = c__4649__auto___51370;
var G__51373 = cljs.core.count(c__4649__auto___51370);
var G__51374 = (0);
seq__51067_51355 = G__51371;
chunk__51069_51356 = G__51372;
count__51070_51357 = G__51373;
i__51071_51358 = G__51374;
continue;
} else {
var child_51375 = cljs.core.first(seq__51067_51369__$1);
if(cljs.core.truth_(child_51375)){
node.appendChild(child_51375);


var G__51376 = cljs.core.next(seq__51067_51369__$1);
var G__51377 = null;
var G__51378 = (0);
var G__51379 = (0);
seq__51067_51355 = G__51376;
chunk__51069_51356 = G__51377;
count__51070_51357 = G__51378;
i__51071_51358 = G__51379;
continue;
} else {
var G__51380 = cljs.core.next(seq__51067_51369__$1);
var G__51381 = null;
var G__51382 = (0);
var G__51383 = (0);
seq__51067_51355 = G__51380;
chunk__51069_51356 = G__51381;
count__51070_51357 = G__51382;
i__51071_51358 = G__51383;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51354);
}
}


var G__51384 = seq__51049_51348;
var G__51385 = chunk__51051_51349;
var G__51386 = count__51052_51350;
var G__51387 = (i__51053_51351 + (1));
seq__51049_51348 = G__51384;
chunk__51051_51349 = G__51385;
count__51052_51350 = G__51386;
i__51053_51351 = G__51387;
continue;
} else {
var G__51388 = seq__51049_51348;
var G__51389 = chunk__51051_51349;
var G__51390 = count__51052_51350;
var G__51391 = (i__51053_51351 + (1));
seq__51049_51348 = G__51388;
chunk__51051_51349 = G__51389;
count__51052_51350 = G__51390;
i__51053_51351 = G__51391;
continue;
}
} else {
var temp__5754__auto___51392 = cljs.core.seq(seq__51049_51348);
if(temp__5754__auto___51392){
var seq__51049_51393__$1 = temp__5754__auto___51392;
if(cljs.core.chunked_seq_QMARK_(seq__51049_51393__$1)){
var c__4649__auto___51394 = cljs.core.chunk_first(seq__51049_51393__$1);
var G__51395 = cljs.core.chunk_rest(seq__51049_51393__$1);
var G__51396 = c__4649__auto___51394;
var G__51397 = cljs.core.count(c__4649__auto___51394);
var G__51398 = (0);
seq__51049_51348 = G__51395;
chunk__51051_51349 = G__51396;
count__51052_51350 = G__51397;
i__51053_51351 = G__51398;
continue;
} else {
var child_struct_51399 = cljs.core.first(seq__51049_51393__$1);
if((!((child_struct_51399 == null)))){
if(typeof child_struct_51399 === 'string'){
var text_51400 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51400),child_struct_51399].join(''));
} else {
var children_51401 = shadow.dom.svg_node(child_struct_51399);
if(cljs.core.seq_QMARK_(children_51401)){
var seq__51073_51402 = cljs.core.seq(children_51401);
var chunk__51075_51403 = null;
var count__51076_51404 = (0);
var i__51077_51405 = (0);
while(true){
if((i__51077_51405 < count__51076_51404)){
var child_51406 = chunk__51075_51403.cljs$core$IIndexed$_nth$arity$2(null,i__51077_51405);
if(cljs.core.truth_(child_51406)){
node.appendChild(child_51406);


var G__51407 = seq__51073_51402;
var G__51408 = chunk__51075_51403;
var G__51409 = count__51076_51404;
var G__51410 = (i__51077_51405 + (1));
seq__51073_51402 = G__51407;
chunk__51075_51403 = G__51408;
count__51076_51404 = G__51409;
i__51077_51405 = G__51410;
continue;
} else {
var G__51411 = seq__51073_51402;
var G__51412 = chunk__51075_51403;
var G__51413 = count__51076_51404;
var G__51414 = (i__51077_51405 + (1));
seq__51073_51402 = G__51411;
chunk__51075_51403 = G__51412;
count__51076_51404 = G__51413;
i__51077_51405 = G__51414;
continue;
}
} else {
var temp__5754__auto___51415__$1 = cljs.core.seq(seq__51073_51402);
if(temp__5754__auto___51415__$1){
var seq__51073_51416__$1 = temp__5754__auto___51415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51073_51416__$1)){
var c__4649__auto___51417 = cljs.core.chunk_first(seq__51073_51416__$1);
var G__51418 = cljs.core.chunk_rest(seq__51073_51416__$1);
var G__51419 = c__4649__auto___51417;
var G__51420 = cljs.core.count(c__4649__auto___51417);
var G__51421 = (0);
seq__51073_51402 = G__51418;
chunk__51075_51403 = G__51419;
count__51076_51404 = G__51420;
i__51077_51405 = G__51421;
continue;
} else {
var child_51422 = cljs.core.first(seq__51073_51416__$1);
if(cljs.core.truth_(child_51422)){
node.appendChild(child_51422);


var G__51423 = cljs.core.next(seq__51073_51416__$1);
var G__51424 = null;
var G__51425 = (0);
var G__51426 = (0);
seq__51073_51402 = G__51423;
chunk__51075_51403 = G__51424;
count__51076_51404 = G__51425;
i__51077_51405 = G__51426;
continue;
} else {
var G__51427 = cljs.core.next(seq__51073_51416__$1);
var G__51428 = null;
var G__51429 = (0);
var G__51430 = (0);
seq__51073_51402 = G__51427;
chunk__51075_51403 = G__51428;
count__51076_51404 = G__51429;
i__51077_51405 = G__51430;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51401);
}
}


var G__51431 = cljs.core.next(seq__51049_51393__$1);
var G__51432 = null;
var G__51433 = (0);
var G__51434 = (0);
seq__51049_51348 = G__51431;
chunk__51051_51349 = G__51432;
count__51052_51350 = G__51433;
i__51053_51351 = G__51434;
continue;
} else {
var G__51435 = cljs.core.next(seq__51049_51393__$1);
var G__51436 = null;
var G__51437 = (0);
var G__51438 = (0);
seq__51049_51348 = G__51435;
chunk__51051_51349 = G__51436;
count__51052_51350 = G__51437;
i__51053_51351 = G__51438;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51439 = arguments.length;
var i__4830__auto___51440 = (0);
while(true){
if((i__4830__auto___51440 < len__4829__auto___51439)){
args__4835__auto__.push((arguments[i__4830__auto___51440]));

var G__51441 = (i__4830__auto___51440 + (1));
i__4830__auto___51440 = G__51441;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51079){
var G__51080 = cljs.core.first(seq51079);
var seq51079__$1 = cljs.core.next(seq51079);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51080,seq51079__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51082 = arguments.length;
switch (G__51082) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__48887__auto___51443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_51087){
var state_val_51088 = (state_51087[(1)]);
if((state_val_51088 === (1))){
var state_51087__$1 = state_51087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51087__$1,(2),once_or_cleanup);
} else {
if((state_val_51088 === (2))){
var inst_51084 = (state_51087[(2)]);
var inst_51085 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51087__$1 = (function (){var statearr_51089 = state_51087;
(statearr_51089[(7)] = inst_51084);

return statearr_51089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51087__$1,inst_51085);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48856__auto__ = null;
var shadow$dom$state_machine__48856__auto____0 = (function (){
var statearr_51090 = [null,null,null,null,null,null,null,null];
(statearr_51090[(0)] = shadow$dom$state_machine__48856__auto__);

(statearr_51090[(1)] = (1));

return statearr_51090;
});
var shadow$dom$state_machine__48856__auto____1 = (function (state_51087){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_51087);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e51091){var ex__48859__auto__ = e51091;
var statearr_51092_51444 = state_51087;
(statearr_51092_51444[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_51087[(4)]))){
var statearr_51093_51445 = state_51087;
(statearr_51093_51445[(1)] = cljs.core.first((state_51087[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51446 = state_51087;
state_51087 = G__51446;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
shadow$dom$state_machine__48856__auto__ = function(state_51087){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48856__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48856__auto____1.call(this,state_51087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48856__auto____0;
shadow$dom$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48856__auto____1;
return shadow$dom$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_51094 = f__48888__auto__();
(statearr_51094[(6)] = c__48887__auto___51443);

return statearr_51094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
