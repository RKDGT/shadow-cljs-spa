goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48949 = arguments.length;
switch (G__48949) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48950 = (function (f,blockable,meta48951){
this.f = f;
this.blockable = blockable;
this.meta48951 = meta48951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48952,meta48951__$1){
var self__ = this;
var _48952__$1 = this;
return (new cljs.core.async.t_cljs$core$async48950(self__.f,self__.blockable,meta48951__$1));
}));

(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48952){
var self__ = this;
var _48952__$1 = this;
return self__.meta48951;
}));

(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48951","meta48951",-1194957110,null)], null);
}));

(cljs.core.async.t_cljs$core$async48950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48950");

(cljs.core.async.t_cljs$core$async48950.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48950.
 */
cljs.core.async.__GT_t_cljs$core$async48950 = (function cljs$core$async$__GT_t_cljs$core$async48950(f__$1,blockable__$1,meta48951){
return (new cljs.core.async.t_cljs$core$async48950(f__$1,blockable__$1,meta48951));
});

}

return (new cljs.core.async.t_cljs$core$async48950(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48955 = arguments.length;
switch (G__48955) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48957 = arguments.length;
switch (G__48957) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48959 = arguments.length;
switch (G__48959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50396 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50396) : fn1.call(null,val_50396));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50396) : fn1.call(null,val_50396));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48961 = arguments.length;
switch (G__48961) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5752__auto__)){
var ret = temp__5752__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5752__auto__)){
var retb = temp__5752__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___50398 = n;
var x_50399 = (0);
while(true){
if((x_50399 < n__4706__auto___50398)){
(a[x_50399] = x_50399);

var G__50400 = (x_50399 + (1));
x_50399 = G__50400;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48962 = (function (flag,meta48963){
this.flag = flag;
this.meta48963 = meta48963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48964,meta48963__$1){
var self__ = this;
var _48964__$1 = this;
return (new cljs.core.async.t_cljs$core$async48962(self__.flag,meta48963__$1));
}));

(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48964){
var self__ = this;
var _48964__$1 = this;
return self__.meta48963;
}));

(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48963","meta48963",-968025835,null)], null);
}));

(cljs.core.async.t_cljs$core$async48962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48962");

(cljs.core.async.t_cljs$core$async48962.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48962.
 */
cljs.core.async.__GT_t_cljs$core$async48962 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48962(flag__$1,meta48963){
return (new cljs.core.async.t_cljs$core$async48962(flag__$1,meta48963));
});

}

return (new cljs.core.async.t_cljs$core$async48962(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48965 = (function (flag,cb,meta48966){
this.flag = flag;
this.cb = cb;
this.meta48966 = meta48966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48967,meta48966__$1){
var self__ = this;
var _48967__$1 = this;
return (new cljs.core.async.t_cljs$core$async48965(self__.flag,self__.cb,meta48966__$1));
}));

(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48967){
var self__ = this;
var _48967__$1 = this;
return self__.meta48966;
}));

(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48966","meta48966",-40783742,null)], null);
}));

(cljs.core.async.t_cljs$core$async48965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48965");

(cljs.core.async.t_cljs$core$async48965.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48965.
 */
cljs.core.async.__GT_t_cljs$core$async48965 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48965(flag__$1,cb__$1,meta48966){
return (new cljs.core.async.t_cljs$core$async48965(flag__$1,cb__$1,meta48966));
});

}

return (new cljs.core.async.t_cljs$core$async48965(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48968_SHARP_){
var G__48970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48968_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48970) : fret.call(null,G__48970));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48969_SHARP_){
var G__48971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48969_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48971) : fret.call(null,G__48971));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50404 = (i + (1));
i = G__50404;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5754__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var got = temp__5754__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50405 = arguments.length;
var i__4830__auto___50406 = (0);
while(true){
if((i__4830__auto___50406 < len__4829__auto___50405)){
args__4835__auto__.push((arguments[i__4830__auto___50406]));

var G__50407 = (i__4830__auto___50406 + (1));
i__4830__auto___50406 = G__50407;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48974){
var map__48975 = p__48974;
var map__48975__$1 = cljs.core.__destructure_map(map__48975);
var opts = map__48975__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48972){
var G__48973 = cljs.core.first(seq48972);
var seq48972__$1 = cljs.core.next(seq48972);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48973,seq48972__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48977 = arguments.length;
switch (G__48977) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48887__auto___50409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49001){
var state_val_49002 = (state_49001[(1)]);
if((state_val_49002 === (7))){
var inst_48997 = (state_49001[(2)]);
var state_49001__$1 = state_49001;
var statearr_49003_50410 = state_49001__$1;
(statearr_49003_50410[(2)] = inst_48997);

(statearr_49003_50410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (1))){
var state_49001__$1 = state_49001;
var statearr_49004_50411 = state_49001__$1;
(statearr_49004_50411[(2)] = null);

(statearr_49004_50411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (4))){
var inst_48980 = (state_49001[(7)]);
var inst_48980__$1 = (state_49001[(2)]);
var inst_48981 = (inst_48980__$1 == null);
var state_49001__$1 = (function (){var statearr_49005 = state_49001;
(statearr_49005[(7)] = inst_48980__$1);

return statearr_49005;
})();
if(cljs.core.truth_(inst_48981)){
var statearr_49006_50412 = state_49001__$1;
(statearr_49006_50412[(1)] = (5));

} else {
var statearr_49007_50413 = state_49001__$1;
(statearr_49007_50413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (13))){
var state_49001__$1 = state_49001;
var statearr_49008_50414 = state_49001__$1;
(statearr_49008_50414[(2)] = null);

(statearr_49008_50414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (6))){
var inst_48980 = (state_49001[(7)]);
var state_49001__$1 = state_49001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49001__$1,(11),to,inst_48980);
} else {
if((state_val_49002 === (3))){
var inst_48999 = (state_49001[(2)]);
var state_49001__$1 = state_49001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49001__$1,inst_48999);
} else {
if((state_val_49002 === (12))){
var state_49001__$1 = state_49001;
var statearr_49009_50415 = state_49001__$1;
(statearr_49009_50415[(2)] = null);

(statearr_49009_50415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (2))){
var state_49001__$1 = state_49001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49001__$1,(4),from);
} else {
if((state_val_49002 === (11))){
var inst_48990 = (state_49001[(2)]);
var state_49001__$1 = state_49001;
if(cljs.core.truth_(inst_48990)){
var statearr_49010_50416 = state_49001__$1;
(statearr_49010_50416[(1)] = (12));

} else {
var statearr_49011_50417 = state_49001__$1;
(statearr_49011_50417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (9))){
var state_49001__$1 = state_49001;
var statearr_49012_50418 = state_49001__$1;
(statearr_49012_50418[(2)] = null);

(statearr_49012_50418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (5))){
var state_49001__$1 = state_49001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49013_50419 = state_49001__$1;
(statearr_49013_50419[(1)] = (8));

} else {
var statearr_49014_50420 = state_49001__$1;
(statearr_49014_50420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (14))){
var inst_48995 = (state_49001[(2)]);
var state_49001__$1 = state_49001;
var statearr_49015_50421 = state_49001__$1;
(statearr_49015_50421[(2)] = inst_48995);

(statearr_49015_50421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (10))){
var inst_48987 = (state_49001[(2)]);
var state_49001__$1 = state_49001;
var statearr_49016_50422 = state_49001__$1;
(statearr_49016_50422[(2)] = inst_48987);

(statearr_49016_50422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49002 === (8))){
var inst_48984 = cljs.core.async.close_BANG_(to);
var state_49001__$1 = state_49001;
var statearr_49017_50423 = state_49001__$1;
(statearr_49017_50423[(2)] = inst_48984);

(statearr_49017_50423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49018 = [null,null,null,null,null,null,null,null];
(statearr_49018[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49018[(1)] = (1));

return statearr_49018;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49001){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49001);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49019){var ex__48859__auto__ = e49019;
var statearr_49020_50424 = state_49001;
(statearr_49020_50424[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49001[(4)]))){
var statearr_49021_50425 = state_49001;
(statearr_49021_50425[(1)] = cljs.core.first((state_49001[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50426 = state_49001;
state_49001 = G__50426;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49022 = f__48888__auto__();
(statearr_49022[(6)] = c__48887__auto___50409);

return statearr_49022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__49023){
var vec__49024 = p__49023;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49024,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49024,(1),null);
var job = vec__49024;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48887__auto___50427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49031){
var state_val_49032 = (state_49031[(1)]);
if((state_val_49032 === (1))){
var state_49031__$1 = state_49031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49031__$1,(2),res,v);
} else {
if((state_val_49032 === (2))){
var inst_49028 = (state_49031[(2)]);
var inst_49029 = cljs.core.async.close_BANG_(res);
var state_49031__$1 = (function (){var statearr_49033 = state_49031;
(statearr_49033[(7)] = inst_49028);

return statearr_49033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49031__$1,inst_49029);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_49034 = [null,null,null,null,null,null,null,null];
(statearr_49034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__);

(statearr_49034[(1)] = (1));

return statearr_49034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1 = (function (state_49031){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49031);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49035){var ex__48859__auto__ = e49035;
var statearr_49036_50437 = state_49031;
(statearr_49036_50437[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49031[(4)]))){
var statearr_49037_50438 = state_49031;
(statearr_49037_50438[(1)] = cljs.core.first((state_49031[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50439 = state_49031;
state_49031 = G__50439;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = function(state_49031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1.call(this,state_49031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49038 = f__48888__auto__();
(statearr_49038[(6)] = c__48887__auto___50427);

return statearr_49038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49039){
var vec__49040 = p__49039;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49040,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49040,(1),null);
var job = vec__49040;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___50440 = n;
var __50441 = (0);
while(true){
if((__50441 < n__4706__auto___50440)){
var G__49043_50442 = type;
var G__49043_50443__$1 = (((G__49043_50442 instanceof cljs.core.Keyword))?G__49043_50442.fqn:null);
switch (G__49043_50443__$1) {
case "compute":
var c__48887__auto___50445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50441,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = ((function (__50441,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function (state_49056){
var state_val_49057 = (state_49056[(1)]);
if((state_val_49057 === (1))){
var state_49056__$1 = state_49056;
var statearr_49058_50446 = state_49056__$1;
(statearr_49058_50446[(2)] = null);

(statearr_49058_50446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49057 === (2))){
var state_49056__$1 = state_49056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49056__$1,(4),jobs);
} else {
if((state_val_49057 === (3))){
var inst_49054 = (state_49056[(2)]);
var state_49056__$1 = state_49056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49056__$1,inst_49054);
} else {
if((state_val_49057 === (4))){
var inst_49046 = (state_49056[(2)]);
var inst_49047 = process(inst_49046);
var state_49056__$1 = state_49056;
if(cljs.core.truth_(inst_49047)){
var statearr_49059_50447 = state_49056__$1;
(statearr_49059_50447[(1)] = (5));

} else {
var statearr_49060_50448 = state_49056__$1;
(statearr_49060_50448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49057 === (5))){
var state_49056__$1 = state_49056;
var statearr_49061_50449 = state_49056__$1;
(statearr_49061_50449[(2)] = null);

(statearr_49061_50449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49057 === (6))){
var state_49056__$1 = state_49056;
var statearr_49062_50450 = state_49056__$1;
(statearr_49062_50450[(2)] = null);

(statearr_49062_50450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49057 === (7))){
var inst_49052 = (state_49056[(2)]);
var state_49056__$1 = state_49056;
var statearr_49063_50451 = state_49056__$1;
(statearr_49063_50451[(2)] = inst_49052);

(statearr_49063_50451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50441,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
;
return ((function (__50441,switch__48855__auto__,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_49064 = [null,null,null,null,null,null,null];
(statearr_49064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__);

(statearr_49064[(1)] = (1));

return statearr_49064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1 = (function (state_49056){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49056);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49065){var ex__48859__auto__ = e49065;
var statearr_49066_50452 = state_49056;
(statearr_49066_50452[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49056[(4)]))){
var statearr_49067_50453 = state_49056;
(statearr_49067_50453[(1)] = cljs.core.first((state_49056[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50454 = state_49056;
state_49056 = G__50454;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = function(state_49056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1.call(this,state_49056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__;
})()
;})(__50441,switch__48855__auto__,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
})();
var state__48889__auto__ = (function (){var statearr_49068 = f__48888__auto__();
(statearr_49068[(6)] = c__48887__auto___50445);

return statearr_49068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
});})(__50441,c__48887__auto___50445,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
);


break;
case "async":
var c__48887__auto___50455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50441,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = ((function (__50441,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function (state_49081){
var state_val_49082 = (state_49081[(1)]);
if((state_val_49082 === (1))){
var state_49081__$1 = state_49081;
var statearr_49083_50456 = state_49081__$1;
(statearr_49083_50456[(2)] = null);

(statearr_49083_50456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49082 === (2))){
var state_49081__$1 = state_49081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49081__$1,(4),jobs);
} else {
if((state_val_49082 === (3))){
var inst_49079 = (state_49081[(2)]);
var state_49081__$1 = state_49081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49081__$1,inst_49079);
} else {
if((state_val_49082 === (4))){
var inst_49071 = (state_49081[(2)]);
var inst_49072 = async(inst_49071);
var state_49081__$1 = state_49081;
if(cljs.core.truth_(inst_49072)){
var statearr_49084_50457 = state_49081__$1;
(statearr_49084_50457[(1)] = (5));

} else {
var statearr_49085_50458 = state_49081__$1;
(statearr_49085_50458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49082 === (5))){
var state_49081__$1 = state_49081;
var statearr_49086_50459 = state_49081__$1;
(statearr_49086_50459[(2)] = null);

(statearr_49086_50459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49082 === (6))){
var state_49081__$1 = state_49081;
var statearr_49087_50460 = state_49081__$1;
(statearr_49087_50460[(2)] = null);

(statearr_49087_50460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49082 === (7))){
var inst_49077 = (state_49081[(2)]);
var state_49081__$1 = state_49081;
var statearr_49088_50461 = state_49081__$1;
(statearr_49088_50461[(2)] = inst_49077);

(statearr_49088_50461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50441,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
;
return ((function (__50441,switch__48855__auto__,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_49089 = [null,null,null,null,null,null,null];
(statearr_49089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__);

(statearr_49089[(1)] = (1));

return statearr_49089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1 = (function (state_49081){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49081);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49090){var ex__48859__auto__ = e49090;
var statearr_49091_50462 = state_49081;
(statearr_49091_50462[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49081[(4)]))){
var statearr_49092_50463 = state_49081;
(statearr_49092_50463[(1)] = cljs.core.first((state_49081[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50464 = state_49081;
state_49081 = G__50464;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = function(state_49081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1.call(this,state_49081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__;
})()
;})(__50441,switch__48855__auto__,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
})();
var state__48889__auto__ = (function (){var statearr_49093 = f__48888__auto__();
(statearr_49093[(6)] = c__48887__auto___50455);

return statearr_49093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
});})(__50441,c__48887__auto___50455,G__49043_50442,G__49043_50443__$1,n__4706__auto___50440,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49043_50443__$1)].join('')));

}

var G__50465 = (__50441 + (1));
__50441 = G__50465;
continue;
} else {
}
break;
}

var c__48887__auto___50466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49115){
var state_val_49116 = (state_49115[(1)]);
if((state_val_49116 === (7))){
var inst_49111 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49117_50467 = state_49115__$1;
(statearr_49117_50467[(2)] = inst_49111);

(statearr_49117_50467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (1))){
var state_49115__$1 = state_49115;
var statearr_49118_50468 = state_49115__$1;
(statearr_49118_50468[(2)] = null);

(statearr_49118_50468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (4))){
var inst_49096 = (state_49115[(7)]);
var inst_49096__$1 = (state_49115[(2)]);
var inst_49097 = (inst_49096__$1 == null);
var state_49115__$1 = (function (){var statearr_49119 = state_49115;
(statearr_49119[(7)] = inst_49096__$1);

return statearr_49119;
})();
if(cljs.core.truth_(inst_49097)){
var statearr_49120_50469 = state_49115__$1;
(statearr_49120_50469[(1)] = (5));

} else {
var statearr_49121_50470 = state_49115__$1;
(statearr_49121_50470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (6))){
var inst_49096 = (state_49115[(7)]);
var inst_49101 = (state_49115[(8)]);
var inst_49101__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49103 = [inst_49096,inst_49101__$1];
var inst_49104 = (new cljs.core.PersistentVector(null,2,(5),inst_49102,inst_49103,null));
var state_49115__$1 = (function (){var statearr_49122 = state_49115;
(statearr_49122[(8)] = inst_49101__$1);

return statearr_49122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49115__$1,(8),jobs,inst_49104);
} else {
if((state_val_49116 === (3))){
var inst_49113 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49115__$1,inst_49113);
} else {
if((state_val_49116 === (2))){
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49115__$1,(4),from);
} else {
if((state_val_49116 === (9))){
var inst_49108 = (state_49115[(2)]);
var state_49115__$1 = (function (){var statearr_49123 = state_49115;
(statearr_49123[(9)] = inst_49108);

return statearr_49123;
})();
var statearr_49124_50476 = state_49115__$1;
(statearr_49124_50476[(2)] = null);

(statearr_49124_50476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (5))){
var inst_49099 = cljs.core.async.close_BANG_(jobs);
var state_49115__$1 = state_49115;
var statearr_49125_50477 = state_49115__$1;
(statearr_49125_50477[(2)] = inst_49099);

(statearr_49125_50477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (8))){
var inst_49101 = (state_49115[(8)]);
var inst_49106 = (state_49115[(2)]);
var state_49115__$1 = (function (){var statearr_49126 = state_49115;
(statearr_49126[(10)] = inst_49106);

return statearr_49126;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49115__$1,(9),results,inst_49101);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_49127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__);

(statearr_49127[(1)] = (1));

return statearr_49127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1 = (function (state_49115){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49115);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49128){var ex__48859__auto__ = e49128;
var statearr_49129_50478 = state_49115;
(statearr_49129_50478[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49115[(4)]))){
var statearr_49130_50479 = state_49115;
(statearr_49130_50479[(1)] = cljs.core.first((state_49115[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50480 = state_49115;
state_49115 = G__50480;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = function(state_49115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1.call(this,state_49115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49131 = f__48888__auto__();
(statearr_49131[(6)] = c__48887__auto___50466);

return statearr_49131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


var c__48887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49169){
var state_val_49170 = (state_49169[(1)]);
if((state_val_49170 === (7))){
var inst_49165 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
var statearr_49171_50481 = state_49169__$1;
(statearr_49171_50481[(2)] = inst_49165);

(statearr_49171_50481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (20))){
var state_49169__$1 = state_49169;
var statearr_49172_50482 = state_49169__$1;
(statearr_49172_50482[(2)] = null);

(statearr_49172_50482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (1))){
var state_49169__$1 = state_49169;
var statearr_49173_50483 = state_49169__$1;
(statearr_49173_50483[(2)] = null);

(statearr_49173_50483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (4))){
var inst_49134 = (state_49169[(7)]);
var inst_49134__$1 = (state_49169[(2)]);
var inst_49135 = (inst_49134__$1 == null);
var state_49169__$1 = (function (){var statearr_49174 = state_49169;
(statearr_49174[(7)] = inst_49134__$1);

return statearr_49174;
})();
if(cljs.core.truth_(inst_49135)){
var statearr_49175_50484 = state_49169__$1;
(statearr_49175_50484[(1)] = (5));

} else {
var statearr_49176_50485 = state_49169__$1;
(statearr_49176_50485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (15))){
var inst_49147 = (state_49169[(8)]);
var state_49169__$1 = state_49169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49169__$1,(18),to,inst_49147);
} else {
if((state_val_49170 === (21))){
var inst_49160 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
var statearr_49177_50486 = state_49169__$1;
(statearr_49177_50486[(2)] = inst_49160);

(statearr_49177_50486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (13))){
var inst_49162 = (state_49169[(2)]);
var state_49169__$1 = (function (){var statearr_49178 = state_49169;
(statearr_49178[(9)] = inst_49162);

return statearr_49178;
})();
var statearr_49179_50487 = state_49169__$1;
(statearr_49179_50487[(2)] = null);

(statearr_49179_50487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (6))){
var inst_49134 = (state_49169[(7)]);
var state_49169__$1 = state_49169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49169__$1,(11),inst_49134);
} else {
if((state_val_49170 === (17))){
var inst_49155 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
if(cljs.core.truth_(inst_49155)){
var statearr_49180_50488 = state_49169__$1;
(statearr_49180_50488[(1)] = (19));

} else {
var statearr_49181_50489 = state_49169__$1;
(statearr_49181_50489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (3))){
var inst_49167 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49169__$1,inst_49167);
} else {
if((state_val_49170 === (12))){
var inst_49144 = (state_49169[(10)]);
var state_49169__$1 = state_49169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49169__$1,(14),inst_49144);
} else {
if((state_val_49170 === (2))){
var state_49169__$1 = state_49169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49169__$1,(4),results);
} else {
if((state_val_49170 === (19))){
var state_49169__$1 = state_49169;
var statearr_49182_50490 = state_49169__$1;
(statearr_49182_50490[(2)] = null);

(statearr_49182_50490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (11))){
var inst_49144 = (state_49169[(2)]);
var state_49169__$1 = (function (){var statearr_49183 = state_49169;
(statearr_49183[(10)] = inst_49144);

return statearr_49183;
})();
var statearr_49184_50491 = state_49169__$1;
(statearr_49184_50491[(2)] = null);

(statearr_49184_50491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (9))){
var state_49169__$1 = state_49169;
var statearr_49185_50492 = state_49169__$1;
(statearr_49185_50492[(2)] = null);

(statearr_49185_50492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (5))){
var state_49169__$1 = state_49169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49186_50493 = state_49169__$1;
(statearr_49186_50493[(1)] = (8));

} else {
var statearr_49187_50494 = state_49169__$1;
(statearr_49187_50494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (14))){
var inst_49149 = (state_49169[(11)]);
var inst_49147 = (state_49169[(8)]);
var inst_49147__$1 = (state_49169[(2)]);
var inst_49148 = (inst_49147__$1 == null);
var inst_49149__$1 = cljs.core.not(inst_49148);
var state_49169__$1 = (function (){var statearr_49188 = state_49169;
(statearr_49188[(11)] = inst_49149__$1);

(statearr_49188[(8)] = inst_49147__$1);

return statearr_49188;
})();
if(inst_49149__$1){
var statearr_49189_50495 = state_49169__$1;
(statearr_49189_50495[(1)] = (15));

} else {
var statearr_49190_50496 = state_49169__$1;
(statearr_49190_50496[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (16))){
var inst_49149 = (state_49169[(11)]);
var state_49169__$1 = state_49169;
var statearr_49191_50497 = state_49169__$1;
(statearr_49191_50497[(2)] = inst_49149);

(statearr_49191_50497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (10))){
var inst_49141 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
var statearr_49192_50498 = state_49169__$1;
(statearr_49192_50498[(2)] = inst_49141);

(statearr_49192_50498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (18))){
var inst_49152 = (state_49169[(2)]);
var state_49169__$1 = state_49169;
var statearr_49193_50499 = state_49169__$1;
(statearr_49193_50499[(2)] = inst_49152);

(statearr_49193_50499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49170 === (8))){
var inst_49138 = cljs.core.async.close_BANG_(to);
var state_49169__$1 = state_49169;
var statearr_49194_50500 = state_49169__$1;
(statearr_49194_50500[(2)] = inst_49138);

(statearr_49194_50500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_49195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__);

(statearr_49195[(1)] = (1));

return statearr_49195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1 = (function (state_49169){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49169);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49196){var ex__48859__auto__ = e49196;
var statearr_49197_50501 = state_49169;
(statearr_49197_50501[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49169[(4)]))){
var statearr_49198_50502 = state_49169;
(statearr_49198_50502[(1)] = cljs.core.first((state_49169[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50503 = state_49169;
state_49169 = G__50503;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__ = function(state_49169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1.call(this,state_49169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49199 = f__48888__auto__();
(statearr_49199[(6)] = c__48887__auto__);

return statearr_49199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

return c__48887__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49201 = arguments.length;
switch (G__49201) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49203 = arguments.length;
switch (G__49203) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49205 = arguments.length;
switch (G__49205) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48887__auto___50507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49231){
var state_val_49232 = (state_49231[(1)]);
if((state_val_49232 === (7))){
var inst_49227 = (state_49231[(2)]);
var state_49231__$1 = state_49231;
var statearr_49233_50508 = state_49231__$1;
(statearr_49233_50508[(2)] = inst_49227);

(statearr_49233_50508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (1))){
var state_49231__$1 = state_49231;
var statearr_49234_50509 = state_49231__$1;
(statearr_49234_50509[(2)] = null);

(statearr_49234_50509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (4))){
var inst_49208 = (state_49231[(7)]);
var inst_49208__$1 = (state_49231[(2)]);
var inst_49209 = (inst_49208__$1 == null);
var state_49231__$1 = (function (){var statearr_49235 = state_49231;
(statearr_49235[(7)] = inst_49208__$1);

return statearr_49235;
})();
if(cljs.core.truth_(inst_49209)){
var statearr_49236_50510 = state_49231__$1;
(statearr_49236_50510[(1)] = (5));

} else {
var statearr_49237_50511 = state_49231__$1;
(statearr_49237_50511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (13))){
var state_49231__$1 = state_49231;
var statearr_49238_50512 = state_49231__$1;
(statearr_49238_50512[(2)] = null);

(statearr_49238_50512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (6))){
var inst_49208 = (state_49231[(7)]);
var inst_49214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49208) : p.call(null,inst_49208));
var state_49231__$1 = state_49231;
if(cljs.core.truth_(inst_49214)){
var statearr_49239_50513 = state_49231__$1;
(statearr_49239_50513[(1)] = (9));

} else {
var statearr_49240_50514 = state_49231__$1;
(statearr_49240_50514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (3))){
var inst_49229 = (state_49231[(2)]);
var state_49231__$1 = state_49231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49231__$1,inst_49229);
} else {
if((state_val_49232 === (12))){
var state_49231__$1 = state_49231;
var statearr_49241_50515 = state_49231__$1;
(statearr_49241_50515[(2)] = null);

(statearr_49241_50515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (2))){
var state_49231__$1 = state_49231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49231__$1,(4),ch);
} else {
if((state_val_49232 === (11))){
var inst_49208 = (state_49231[(7)]);
var inst_49218 = (state_49231[(2)]);
var state_49231__$1 = state_49231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49231__$1,(8),inst_49218,inst_49208);
} else {
if((state_val_49232 === (9))){
var state_49231__$1 = state_49231;
var statearr_49242_50528 = state_49231__$1;
(statearr_49242_50528[(2)] = tc);

(statearr_49242_50528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (5))){
var inst_49211 = cljs.core.async.close_BANG_(tc);
var inst_49212 = cljs.core.async.close_BANG_(fc);
var state_49231__$1 = (function (){var statearr_49243 = state_49231;
(statearr_49243[(8)] = inst_49211);

return statearr_49243;
})();
var statearr_49244_50529 = state_49231__$1;
(statearr_49244_50529[(2)] = inst_49212);

(statearr_49244_50529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (14))){
var inst_49225 = (state_49231[(2)]);
var state_49231__$1 = state_49231;
var statearr_49245_50530 = state_49231__$1;
(statearr_49245_50530[(2)] = inst_49225);

(statearr_49245_50530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (10))){
var state_49231__$1 = state_49231;
var statearr_49246_50531 = state_49231__$1;
(statearr_49246_50531[(2)] = fc);

(statearr_49246_50531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49232 === (8))){
var inst_49220 = (state_49231[(2)]);
var state_49231__$1 = state_49231;
if(cljs.core.truth_(inst_49220)){
var statearr_49247_50532 = state_49231__$1;
(statearr_49247_50532[(1)] = (12));

} else {
var statearr_49248_50533 = state_49231__$1;
(statearr_49248_50533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49249 = [null,null,null,null,null,null,null,null,null];
(statearr_49249[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49249[(1)] = (1));

return statearr_49249;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49231){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49231);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49250){var ex__48859__auto__ = e49250;
var statearr_49251_50534 = state_49231;
(statearr_49251_50534[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49231[(4)]))){
var statearr_49252_50535 = state_49231;
(statearr_49252_50535[(1)] = cljs.core.first((state_49231[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50536 = state_49231;
state_49231 = G__50536;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49253 = f__48888__auto__();
(statearr_49253[(6)] = c__48887__auto___50507);

return statearr_49253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49275){
var state_val_49276 = (state_49275[(1)]);
if((state_val_49276 === (7))){
var inst_49271 = (state_49275[(2)]);
var state_49275__$1 = state_49275;
var statearr_49277_50537 = state_49275__$1;
(statearr_49277_50537[(2)] = inst_49271);

(statearr_49277_50537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (1))){
var inst_49254 = init;
var inst_49255 = inst_49254;
var state_49275__$1 = (function (){var statearr_49278 = state_49275;
(statearr_49278[(7)] = inst_49255);

return statearr_49278;
})();
var statearr_49279_50538 = state_49275__$1;
(statearr_49279_50538[(2)] = null);

(statearr_49279_50538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (4))){
var inst_49258 = (state_49275[(8)]);
var inst_49258__$1 = (state_49275[(2)]);
var inst_49259 = (inst_49258__$1 == null);
var state_49275__$1 = (function (){var statearr_49280 = state_49275;
(statearr_49280[(8)] = inst_49258__$1);

return statearr_49280;
})();
if(cljs.core.truth_(inst_49259)){
var statearr_49281_50539 = state_49275__$1;
(statearr_49281_50539[(1)] = (5));

} else {
var statearr_49282_50540 = state_49275__$1;
(statearr_49282_50540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (6))){
var inst_49262 = (state_49275[(9)]);
var inst_49255 = (state_49275[(7)]);
var inst_49258 = (state_49275[(8)]);
var inst_49262__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49255,inst_49258) : f.call(null,inst_49255,inst_49258));
var inst_49263 = cljs.core.reduced_QMARK_(inst_49262__$1);
var state_49275__$1 = (function (){var statearr_49283 = state_49275;
(statearr_49283[(9)] = inst_49262__$1);

return statearr_49283;
})();
if(inst_49263){
var statearr_49284_50541 = state_49275__$1;
(statearr_49284_50541[(1)] = (8));

} else {
var statearr_49285_50542 = state_49275__$1;
(statearr_49285_50542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (3))){
var inst_49273 = (state_49275[(2)]);
var state_49275__$1 = state_49275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49275__$1,inst_49273);
} else {
if((state_val_49276 === (2))){
var state_49275__$1 = state_49275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49275__$1,(4),ch);
} else {
if((state_val_49276 === (9))){
var inst_49262 = (state_49275[(9)]);
var inst_49255 = inst_49262;
var state_49275__$1 = (function (){var statearr_49286 = state_49275;
(statearr_49286[(7)] = inst_49255);

return statearr_49286;
})();
var statearr_49287_50543 = state_49275__$1;
(statearr_49287_50543[(2)] = null);

(statearr_49287_50543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (5))){
var inst_49255 = (state_49275[(7)]);
var state_49275__$1 = state_49275;
var statearr_49288_50544 = state_49275__$1;
(statearr_49288_50544[(2)] = inst_49255);

(statearr_49288_50544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (10))){
var inst_49269 = (state_49275[(2)]);
var state_49275__$1 = state_49275;
var statearr_49289_50545 = state_49275__$1;
(statearr_49289_50545[(2)] = inst_49269);

(statearr_49289_50545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49276 === (8))){
var inst_49262 = (state_49275[(9)]);
var inst_49265 = cljs.core.deref(inst_49262);
var state_49275__$1 = state_49275;
var statearr_49290_50546 = state_49275__$1;
(statearr_49290_50546[(2)] = inst_49265);

(statearr_49290_50546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48856__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48856__auto____0 = (function (){
var statearr_49291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49291[(0)] = cljs$core$async$reduce_$_state_machine__48856__auto__);

(statearr_49291[(1)] = (1));

return statearr_49291;
});
var cljs$core$async$reduce_$_state_machine__48856__auto____1 = (function (state_49275){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49275);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49292){var ex__48859__auto__ = e49292;
var statearr_49293_50547 = state_49275;
(statearr_49293_50547[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49275[(4)]))){
var statearr_49294_50548 = state_49275;
(statearr_49294_50548[(1)] = cljs.core.first((state_49275[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50549 = state_49275;
state_49275 = G__50549;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48856__auto__ = function(state_49275){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48856__auto____1.call(this,state_49275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48856__auto____0;
cljs$core$async$reduce_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48856__auto____1;
return cljs$core$async$reduce_$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49295 = f__48888__auto__();
(statearr_49295[(6)] = c__48887__auto__);

return statearr_49295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

return c__48887__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49301){
var state_val_49302 = (state_49301[(1)]);
if((state_val_49302 === (1))){
var inst_49296 = cljs.core.async.reduce(f__$1,init,ch);
var state_49301__$1 = state_49301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49301__$1,(2),inst_49296);
} else {
if((state_val_49302 === (2))){
var inst_49298 = (state_49301[(2)]);
var inst_49299 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49298) : f__$1.call(null,inst_49298));
var state_49301__$1 = state_49301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49301__$1,inst_49299);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48856__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48856__auto____0 = (function (){
var statearr_49303 = [null,null,null,null,null,null,null];
(statearr_49303[(0)] = cljs$core$async$transduce_$_state_machine__48856__auto__);

(statearr_49303[(1)] = (1));

return statearr_49303;
});
var cljs$core$async$transduce_$_state_machine__48856__auto____1 = (function (state_49301){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49301);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49304){var ex__48859__auto__ = e49304;
var statearr_49305_50550 = state_49301;
(statearr_49305_50550[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49301[(4)]))){
var statearr_49306_50551 = state_49301;
(statearr_49306_50551[(1)] = cljs.core.first((state_49301[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50552 = state_49301;
state_49301 = G__50552;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48856__auto__ = function(state_49301){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48856__auto____1.call(this,state_49301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48856__auto____0;
cljs$core$async$transduce_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48856__auto____1;
return cljs$core$async$transduce_$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49307 = f__48888__auto__();
(statearr_49307[(6)] = c__48887__auto__);

return statearr_49307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

return c__48887__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49309 = arguments.length;
switch (G__49309) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49334){
var state_val_49335 = (state_49334[(1)]);
if((state_val_49335 === (7))){
var inst_49316 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
var statearr_49336_50554 = state_49334__$1;
(statearr_49336_50554[(2)] = inst_49316);

(statearr_49336_50554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (1))){
var inst_49310 = cljs.core.seq(coll);
var inst_49311 = inst_49310;
var state_49334__$1 = (function (){var statearr_49337 = state_49334;
(statearr_49337[(7)] = inst_49311);

return statearr_49337;
})();
var statearr_49338_50555 = state_49334__$1;
(statearr_49338_50555[(2)] = null);

(statearr_49338_50555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (4))){
var inst_49311 = (state_49334[(7)]);
var inst_49314 = cljs.core.first(inst_49311);
var state_49334__$1 = state_49334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49334__$1,(7),ch,inst_49314);
} else {
if((state_val_49335 === (13))){
var inst_49328 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
var statearr_49339_50579 = state_49334__$1;
(statearr_49339_50579[(2)] = inst_49328);

(statearr_49339_50579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (6))){
var inst_49319 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
if(cljs.core.truth_(inst_49319)){
var statearr_49340_50580 = state_49334__$1;
(statearr_49340_50580[(1)] = (8));

} else {
var statearr_49341_50581 = state_49334__$1;
(statearr_49341_50581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (3))){
var inst_49332 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49334__$1,inst_49332);
} else {
if((state_val_49335 === (12))){
var state_49334__$1 = state_49334;
var statearr_49342_50582 = state_49334__$1;
(statearr_49342_50582[(2)] = null);

(statearr_49342_50582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (2))){
var inst_49311 = (state_49334[(7)]);
var state_49334__$1 = state_49334;
if(cljs.core.truth_(inst_49311)){
var statearr_49343_50583 = state_49334__$1;
(statearr_49343_50583[(1)] = (4));

} else {
var statearr_49344_50584 = state_49334__$1;
(statearr_49344_50584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (11))){
var inst_49325 = cljs.core.async.close_BANG_(ch);
var state_49334__$1 = state_49334;
var statearr_49345_50585 = state_49334__$1;
(statearr_49345_50585[(2)] = inst_49325);

(statearr_49345_50585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (9))){
var state_49334__$1 = state_49334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49346_50586 = state_49334__$1;
(statearr_49346_50586[(1)] = (11));

} else {
var statearr_49347_50587 = state_49334__$1;
(statearr_49347_50587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (5))){
var inst_49311 = (state_49334[(7)]);
var state_49334__$1 = state_49334;
var statearr_49348_50588 = state_49334__$1;
(statearr_49348_50588[(2)] = inst_49311);

(statearr_49348_50588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (10))){
var inst_49330 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
var statearr_49349_50589 = state_49334__$1;
(statearr_49349_50589[(2)] = inst_49330);

(statearr_49349_50589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (8))){
var inst_49311 = (state_49334[(7)]);
var inst_49321 = cljs.core.next(inst_49311);
var inst_49311__$1 = inst_49321;
var state_49334__$1 = (function (){var statearr_49350 = state_49334;
(statearr_49350[(7)] = inst_49311__$1);

return statearr_49350;
})();
var statearr_49351_50590 = state_49334__$1;
(statearr_49351_50590[(2)] = null);

(statearr_49351_50590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49352 = [null,null,null,null,null,null,null,null];
(statearr_49352[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49352[(1)] = (1));

return statearr_49352;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49334){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49334);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49353){var ex__48859__auto__ = e49353;
var statearr_49354_50591 = state_49334;
(statearr_49354_50591[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49334[(4)]))){
var statearr_49355_50592 = state_49334;
(statearr_49355_50592[(1)] = cljs.core.first((state_49334[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50593 = state_49334;
state_49334 = G__50593;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49356 = f__48888__auto__();
(statearr_49356[(6)] = c__48887__auto__);

return statearr_49356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

return c__48887__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49358 = arguments.length;
switch (G__49358) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50595 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50595(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50596 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50596(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50597 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50597(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50598 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50598(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49359 = (function (ch,cs,meta49360){
this.ch = ch;
this.cs = cs;
this.meta49360 = meta49360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49361,meta49360__$1){
var self__ = this;
var _49361__$1 = this;
return (new cljs.core.async.t_cljs$core$async49359(self__.ch,self__.cs,meta49360__$1));
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49361){
var self__ = this;
var _49361__$1 = this;
return self__.meta49360;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49360","meta49360",-1753482279,null)], null);
}));

(cljs.core.async.t_cljs$core$async49359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49359");

(cljs.core.async.t_cljs$core$async49359.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49359.
 */
cljs.core.async.__GT_t_cljs$core$async49359 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49359(ch__$1,cs__$1,meta49360){
return (new cljs.core.async.t_cljs$core$async49359(ch__$1,cs__$1,meta49360));
});

}

return (new cljs.core.async.t_cljs$core$async49359(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48887__auto___50599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49494){
var state_val_49495 = (state_49494[(1)]);
if((state_val_49495 === (7))){
var inst_49490 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49496_50600 = state_49494__$1;
(statearr_49496_50600[(2)] = inst_49490);

(statearr_49496_50600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (20))){
var inst_49395 = (state_49494[(7)]);
var inst_49407 = cljs.core.first(inst_49395);
var inst_49408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49407,(0),null);
var inst_49409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49407,(1),null);
var state_49494__$1 = (function (){var statearr_49497 = state_49494;
(statearr_49497[(8)] = inst_49408);

return statearr_49497;
})();
if(cljs.core.truth_(inst_49409)){
var statearr_49498_50606 = state_49494__$1;
(statearr_49498_50606[(1)] = (22));

} else {
var statearr_49499_50607 = state_49494__$1;
(statearr_49499_50607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (27))){
var inst_49444 = (state_49494[(9)]);
var inst_49364 = (state_49494[(10)]);
var inst_49437 = (state_49494[(11)]);
var inst_49439 = (state_49494[(12)]);
var inst_49444__$1 = cljs.core._nth(inst_49437,inst_49439);
var inst_49445 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49444__$1,inst_49364,done);
var state_49494__$1 = (function (){var statearr_49500 = state_49494;
(statearr_49500[(9)] = inst_49444__$1);

return statearr_49500;
})();
if(cljs.core.truth_(inst_49445)){
var statearr_49501_50608 = state_49494__$1;
(statearr_49501_50608[(1)] = (30));

} else {
var statearr_49502_50609 = state_49494__$1;
(statearr_49502_50609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (1))){
var state_49494__$1 = state_49494;
var statearr_49503_50610 = state_49494__$1;
(statearr_49503_50610[(2)] = null);

(statearr_49503_50610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (24))){
var inst_49395 = (state_49494[(7)]);
var inst_49414 = (state_49494[(2)]);
var inst_49415 = cljs.core.next(inst_49395);
var inst_49373 = inst_49415;
var inst_49374 = null;
var inst_49375 = (0);
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49504 = state_49494;
(statearr_49504[(13)] = inst_49376);

(statearr_49504[(14)] = inst_49373);

(statearr_49504[(15)] = inst_49375);

(statearr_49504[(16)] = inst_49374);

(statearr_49504[(17)] = inst_49414);

return statearr_49504;
})();
var statearr_49505_50611 = state_49494__$1;
(statearr_49505_50611[(2)] = null);

(statearr_49505_50611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (39))){
var state_49494__$1 = state_49494;
var statearr_49509_50636 = state_49494__$1;
(statearr_49509_50636[(2)] = null);

(statearr_49509_50636[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (4))){
var inst_49364 = (state_49494[(10)]);
var inst_49364__$1 = (state_49494[(2)]);
var inst_49365 = (inst_49364__$1 == null);
var state_49494__$1 = (function (){var statearr_49510 = state_49494;
(statearr_49510[(10)] = inst_49364__$1);

return statearr_49510;
})();
if(cljs.core.truth_(inst_49365)){
var statearr_49511_50637 = state_49494__$1;
(statearr_49511_50637[(1)] = (5));

} else {
var statearr_49512_50638 = state_49494__$1;
(statearr_49512_50638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (15))){
var inst_49376 = (state_49494[(13)]);
var inst_49373 = (state_49494[(14)]);
var inst_49375 = (state_49494[(15)]);
var inst_49374 = (state_49494[(16)]);
var inst_49391 = (state_49494[(2)]);
var inst_49392 = (inst_49376 + (1));
var tmp49506 = inst_49373;
var tmp49507 = inst_49375;
var tmp49508 = inst_49374;
var inst_49373__$1 = tmp49506;
var inst_49374__$1 = tmp49508;
var inst_49375__$1 = tmp49507;
var inst_49376__$1 = inst_49392;
var state_49494__$1 = (function (){var statearr_49513 = state_49494;
(statearr_49513[(13)] = inst_49376__$1);

(statearr_49513[(14)] = inst_49373__$1);

(statearr_49513[(15)] = inst_49375__$1);

(statearr_49513[(18)] = inst_49391);

(statearr_49513[(16)] = inst_49374__$1);

return statearr_49513;
})();
var statearr_49514_50639 = state_49494__$1;
(statearr_49514_50639[(2)] = null);

(statearr_49514_50639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (21))){
var inst_49418 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49518_50640 = state_49494__$1;
(statearr_49518_50640[(2)] = inst_49418);

(statearr_49518_50640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (31))){
var inst_49444 = (state_49494[(9)]);
var inst_49448 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49444);
var state_49494__$1 = state_49494;
var statearr_49519_50641 = state_49494__$1;
(statearr_49519_50641[(2)] = inst_49448);

(statearr_49519_50641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (32))){
var inst_49436 = (state_49494[(19)]);
var inst_49438 = (state_49494[(20)]);
var inst_49437 = (state_49494[(11)]);
var inst_49439 = (state_49494[(12)]);
var inst_49450 = (state_49494[(2)]);
var inst_49451 = (inst_49439 + (1));
var tmp49515 = inst_49436;
var tmp49516 = inst_49438;
var tmp49517 = inst_49437;
var inst_49436__$1 = tmp49515;
var inst_49437__$1 = tmp49517;
var inst_49438__$1 = tmp49516;
var inst_49439__$1 = inst_49451;
var state_49494__$1 = (function (){var statearr_49520 = state_49494;
(statearr_49520[(19)] = inst_49436__$1);

(statearr_49520[(20)] = inst_49438__$1);

(statearr_49520[(21)] = inst_49450);

(statearr_49520[(11)] = inst_49437__$1);

(statearr_49520[(12)] = inst_49439__$1);

return statearr_49520;
})();
var statearr_49521_50642 = state_49494__$1;
(statearr_49521_50642[(2)] = null);

(statearr_49521_50642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (40))){
var inst_49463 = (state_49494[(22)]);
var inst_49467 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49463);
var state_49494__$1 = state_49494;
var statearr_49522_50643 = state_49494__$1;
(statearr_49522_50643[(2)] = inst_49467);

(statearr_49522_50643[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (33))){
var inst_49454 = (state_49494[(23)]);
var inst_49456 = cljs.core.chunked_seq_QMARK_(inst_49454);
var state_49494__$1 = state_49494;
if(inst_49456){
var statearr_49523_50644 = state_49494__$1;
(statearr_49523_50644[(1)] = (36));

} else {
var statearr_49524_50645 = state_49494__$1;
(statearr_49524_50645[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (13))){
var inst_49385 = (state_49494[(24)]);
var inst_49388 = cljs.core.async.close_BANG_(inst_49385);
var state_49494__$1 = state_49494;
var statearr_49525_50646 = state_49494__$1;
(statearr_49525_50646[(2)] = inst_49388);

(statearr_49525_50646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (22))){
var inst_49408 = (state_49494[(8)]);
var inst_49411 = cljs.core.async.close_BANG_(inst_49408);
var state_49494__$1 = state_49494;
var statearr_49526_50647 = state_49494__$1;
(statearr_49526_50647[(2)] = inst_49411);

(statearr_49526_50647[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (36))){
var inst_49454 = (state_49494[(23)]);
var inst_49458 = cljs.core.chunk_first(inst_49454);
var inst_49459 = cljs.core.chunk_rest(inst_49454);
var inst_49460 = cljs.core.count(inst_49458);
var inst_49436 = inst_49459;
var inst_49437 = inst_49458;
var inst_49438 = inst_49460;
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49527 = state_49494;
(statearr_49527[(19)] = inst_49436);

(statearr_49527[(20)] = inst_49438);

(statearr_49527[(11)] = inst_49437);

(statearr_49527[(12)] = inst_49439);

return statearr_49527;
})();
var statearr_49528_50648 = state_49494__$1;
(statearr_49528_50648[(2)] = null);

(statearr_49528_50648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (41))){
var inst_49454 = (state_49494[(23)]);
var inst_49469 = (state_49494[(2)]);
var inst_49470 = cljs.core.next(inst_49454);
var inst_49436 = inst_49470;
var inst_49437 = null;
var inst_49438 = (0);
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49529 = state_49494;
(statearr_49529[(25)] = inst_49469);

(statearr_49529[(19)] = inst_49436);

(statearr_49529[(20)] = inst_49438);

(statearr_49529[(11)] = inst_49437);

(statearr_49529[(12)] = inst_49439);

return statearr_49529;
})();
var statearr_49530_50649 = state_49494__$1;
(statearr_49530_50649[(2)] = null);

(statearr_49530_50649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (43))){
var state_49494__$1 = state_49494;
var statearr_49531_50650 = state_49494__$1;
(statearr_49531_50650[(2)] = null);

(statearr_49531_50650[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (29))){
var inst_49478 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49532_50651 = state_49494__$1;
(statearr_49532_50651[(2)] = inst_49478);

(statearr_49532_50651[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (44))){
var inst_49487 = (state_49494[(2)]);
var state_49494__$1 = (function (){var statearr_49533 = state_49494;
(statearr_49533[(26)] = inst_49487);

return statearr_49533;
})();
var statearr_49534_50652 = state_49494__$1;
(statearr_49534_50652[(2)] = null);

(statearr_49534_50652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (6))){
var inst_49428 = (state_49494[(27)]);
var inst_49427 = cljs.core.deref(cs);
var inst_49428__$1 = cljs.core.keys(inst_49427);
var inst_49429 = cljs.core.count(inst_49428__$1);
var inst_49430 = cljs.core.reset_BANG_(dctr,inst_49429);
var inst_49435 = cljs.core.seq(inst_49428__$1);
var inst_49436 = inst_49435;
var inst_49437 = null;
var inst_49438 = (0);
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49535 = state_49494;
(statearr_49535[(19)] = inst_49436);

(statearr_49535[(20)] = inst_49438);

(statearr_49535[(11)] = inst_49437);

(statearr_49535[(28)] = inst_49430);

(statearr_49535[(12)] = inst_49439);

(statearr_49535[(27)] = inst_49428__$1);

return statearr_49535;
})();
var statearr_49536_50653 = state_49494__$1;
(statearr_49536_50653[(2)] = null);

(statearr_49536_50653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (28))){
var inst_49436 = (state_49494[(19)]);
var inst_49454 = (state_49494[(23)]);
var inst_49454__$1 = cljs.core.seq(inst_49436);
var state_49494__$1 = (function (){var statearr_49537 = state_49494;
(statearr_49537[(23)] = inst_49454__$1);

return statearr_49537;
})();
if(inst_49454__$1){
var statearr_49538_50654 = state_49494__$1;
(statearr_49538_50654[(1)] = (33));

} else {
var statearr_49539_50655 = state_49494__$1;
(statearr_49539_50655[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (25))){
var inst_49438 = (state_49494[(20)]);
var inst_49439 = (state_49494[(12)]);
var inst_49441 = (inst_49439 < inst_49438);
var inst_49442 = inst_49441;
var state_49494__$1 = state_49494;
if(cljs.core.truth_(inst_49442)){
var statearr_49540_50656 = state_49494__$1;
(statearr_49540_50656[(1)] = (27));

} else {
var statearr_49541_50657 = state_49494__$1;
(statearr_49541_50657[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (34))){
var state_49494__$1 = state_49494;
var statearr_49542_50658 = state_49494__$1;
(statearr_49542_50658[(2)] = null);

(statearr_49542_50658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (17))){
var state_49494__$1 = state_49494;
var statearr_49543_50659 = state_49494__$1;
(statearr_49543_50659[(2)] = null);

(statearr_49543_50659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (3))){
var inst_49492 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49494__$1,inst_49492);
} else {
if((state_val_49495 === (12))){
var inst_49423 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49544_50660 = state_49494__$1;
(statearr_49544_50660[(2)] = inst_49423);

(statearr_49544_50660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (2))){
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49494__$1,(4),ch);
} else {
if((state_val_49495 === (23))){
var state_49494__$1 = state_49494;
var statearr_49545_50661 = state_49494__$1;
(statearr_49545_50661[(2)] = null);

(statearr_49545_50661[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (35))){
var inst_49476 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49546_50662 = state_49494__$1;
(statearr_49546_50662[(2)] = inst_49476);

(statearr_49546_50662[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (19))){
var inst_49395 = (state_49494[(7)]);
var inst_49399 = cljs.core.chunk_first(inst_49395);
var inst_49400 = cljs.core.chunk_rest(inst_49395);
var inst_49401 = cljs.core.count(inst_49399);
var inst_49373 = inst_49400;
var inst_49374 = inst_49399;
var inst_49375 = inst_49401;
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49547 = state_49494;
(statearr_49547[(13)] = inst_49376);

(statearr_49547[(14)] = inst_49373);

(statearr_49547[(15)] = inst_49375);

(statearr_49547[(16)] = inst_49374);

return statearr_49547;
})();
var statearr_49548_50663 = state_49494__$1;
(statearr_49548_50663[(2)] = null);

(statearr_49548_50663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (11))){
var inst_49373 = (state_49494[(14)]);
var inst_49395 = (state_49494[(7)]);
var inst_49395__$1 = cljs.core.seq(inst_49373);
var state_49494__$1 = (function (){var statearr_49549 = state_49494;
(statearr_49549[(7)] = inst_49395__$1);

return statearr_49549;
})();
if(inst_49395__$1){
var statearr_49550_50664 = state_49494__$1;
(statearr_49550_50664[(1)] = (16));

} else {
var statearr_49551_50665 = state_49494__$1;
(statearr_49551_50665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (9))){
var inst_49425 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49552_50666 = state_49494__$1;
(statearr_49552_50666[(2)] = inst_49425);

(statearr_49552_50666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (5))){
var inst_49371 = cljs.core.deref(cs);
var inst_49372 = cljs.core.seq(inst_49371);
var inst_49373 = inst_49372;
var inst_49374 = null;
var inst_49375 = (0);
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49553 = state_49494;
(statearr_49553[(13)] = inst_49376);

(statearr_49553[(14)] = inst_49373);

(statearr_49553[(15)] = inst_49375);

(statearr_49553[(16)] = inst_49374);

return statearr_49553;
})();
var statearr_49554_50667 = state_49494__$1;
(statearr_49554_50667[(2)] = null);

(statearr_49554_50667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (14))){
var state_49494__$1 = state_49494;
var statearr_49555_50668 = state_49494__$1;
(statearr_49555_50668[(2)] = null);

(statearr_49555_50668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (45))){
var inst_49484 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49556_50669 = state_49494__$1;
(statearr_49556_50669[(2)] = inst_49484);

(statearr_49556_50669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (26))){
var inst_49428 = (state_49494[(27)]);
var inst_49480 = (state_49494[(2)]);
var inst_49481 = cljs.core.seq(inst_49428);
var state_49494__$1 = (function (){var statearr_49557 = state_49494;
(statearr_49557[(29)] = inst_49480);

return statearr_49557;
})();
if(inst_49481){
var statearr_49558_50670 = state_49494__$1;
(statearr_49558_50670[(1)] = (42));

} else {
var statearr_49559_50671 = state_49494__$1;
(statearr_49559_50671[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (16))){
var inst_49395 = (state_49494[(7)]);
var inst_49397 = cljs.core.chunked_seq_QMARK_(inst_49395);
var state_49494__$1 = state_49494;
if(inst_49397){
var statearr_49560_50672 = state_49494__$1;
(statearr_49560_50672[(1)] = (19));

} else {
var statearr_49561_50673 = state_49494__$1;
(statearr_49561_50673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (38))){
var inst_49473 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49562_50674 = state_49494__$1;
(statearr_49562_50674[(2)] = inst_49473);

(statearr_49562_50674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (30))){
var state_49494__$1 = state_49494;
var statearr_49563_50675 = state_49494__$1;
(statearr_49563_50675[(2)] = null);

(statearr_49563_50675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (10))){
var inst_49376 = (state_49494[(13)]);
var inst_49374 = (state_49494[(16)]);
var inst_49384 = cljs.core._nth(inst_49374,inst_49376);
var inst_49385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49384,(0),null);
var inst_49386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49384,(1),null);
var state_49494__$1 = (function (){var statearr_49564 = state_49494;
(statearr_49564[(24)] = inst_49385);

return statearr_49564;
})();
if(cljs.core.truth_(inst_49386)){
var statearr_49565_50676 = state_49494__$1;
(statearr_49565_50676[(1)] = (13));

} else {
var statearr_49566_50677 = state_49494__$1;
(statearr_49566_50677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (18))){
var inst_49421 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49567_50678 = state_49494__$1;
(statearr_49567_50678[(2)] = inst_49421);

(statearr_49567_50678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (42))){
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49494__$1,(45),dchan);
} else {
if((state_val_49495 === (37))){
var inst_49454 = (state_49494[(23)]);
var inst_49364 = (state_49494[(10)]);
var inst_49463 = (state_49494[(22)]);
var inst_49463__$1 = cljs.core.first(inst_49454);
var inst_49464 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49463__$1,inst_49364,done);
var state_49494__$1 = (function (){var statearr_49568 = state_49494;
(statearr_49568[(22)] = inst_49463__$1);

return statearr_49568;
})();
if(cljs.core.truth_(inst_49464)){
var statearr_49569_50679 = state_49494__$1;
(statearr_49569_50679[(1)] = (39));

} else {
var statearr_49570_50680 = state_49494__$1;
(statearr_49570_50680[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (8))){
var inst_49376 = (state_49494[(13)]);
var inst_49375 = (state_49494[(15)]);
var inst_49378 = (inst_49376 < inst_49375);
var inst_49379 = inst_49378;
var state_49494__$1 = state_49494;
if(cljs.core.truth_(inst_49379)){
var statearr_49571_50681 = state_49494__$1;
(statearr_49571_50681[(1)] = (10));

} else {
var statearr_49572_50682 = state_49494__$1;
(statearr_49572_50682[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48856__auto__ = null;
var cljs$core$async$mult_$_state_machine__48856__auto____0 = (function (){
var statearr_49573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49573[(0)] = cljs$core$async$mult_$_state_machine__48856__auto__);

(statearr_49573[(1)] = (1));

return statearr_49573;
});
var cljs$core$async$mult_$_state_machine__48856__auto____1 = (function (state_49494){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49494);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49574){var ex__48859__auto__ = e49574;
var statearr_49575_50683 = state_49494;
(statearr_49575_50683[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49494[(4)]))){
var statearr_49576_50684 = state_49494;
(statearr_49576_50684[(1)] = cljs.core.first((state_49494[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50685 = state_49494;
state_49494 = G__50685;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48856__auto__ = function(state_49494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48856__auto____1.call(this,state_49494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48856__auto____0;
cljs$core$async$mult_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48856__auto____1;
return cljs$core$async$mult_$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49577 = f__48888__auto__();
(statearr_49577[(6)] = c__48887__auto___50599);

return statearr_49577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49579 = arguments.length;
switch (G__49579) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50687 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50687(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50688 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50688(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50689 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50689(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50690 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50690(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50691 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50691(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50704 = arguments.length;
var i__4830__auto___50705 = (0);
while(true){
if((i__4830__auto___50705 < len__4829__auto___50704)){
args__4835__auto__.push((arguments[i__4830__auto___50705]));

var G__50706 = (i__4830__auto___50705 + (1));
i__4830__auto___50705 = G__50706;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49584){
var map__49585 = p__49584;
var map__49585__$1 = cljs.core.__destructure_map(map__49585);
var opts = map__49585__$1;
var statearr_49586_50707 = state;
(statearr_49586_50707[(1)] = cont_block);


var temp__5754__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49587_50708 = state;
(statearr_49587_50708[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5754__auto__)){
var cb = temp__5754__auto__;
var statearr_49588_50709 = state;
(statearr_49588_50709[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49580){
var G__49581 = cljs.core.first(seq49580);
var seq49580__$1 = cljs.core.next(seq49580);
var G__49582 = cljs.core.first(seq49580__$1);
var seq49580__$2 = cljs.core.next(seq49580__$1);
var G__49583 = cljs.core.first(seq49580__$2);
var seq49580__$3 = cljs.core.next(seq49580__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49581,G__49582,G__49583,seq49580__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49589 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49590){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49590 = meta49590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49591,meta49590__$1){
var self__ = this;
var _49591__$1 = this;
return (new cljs.core.async.t_cljs$core$async49589(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49590__$1));
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49591){
var self__ = this;
var _49591__$1 = this;
return self__.meta49590;
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49589.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49590","meta49590",-708977366,null)], null);
}));

(cljs.core.async.t_cljs$core$async49589.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49589");

(cljs.core.async.t_cljs$core$async49589.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49589");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49589.
 */
cljs.core.async.__GT_t_cljs$core$async49589 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49589(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49590){
return (new cljs.core.async.t_cljs$core$async49589(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49590));
});

}

return (new cljs.core.async.t_cljs$core$async49589(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48887__auto___50710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49659){
var state_val_49660 = (state_49659[(1)]);
if((state_val_49660 === (7))){
var inst_49619 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
if(cljs.core.truth_(inst_49619)){
var statearr_49661_50711 = state_49659__$1;
(statearr_49661_50711[(1)] = (8));

} else {
var statearr_49662_50712 = state_49659__$1;
(statearr_49662_50712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (20))){
var inst_49612 = (state_49659[(7)]);
var state_49659__$1 = state_49659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49659__$1,(23),out,inst_49612);
} else {
if((state_val_49660 === (1))){
var inst_49595 = calc_state();
var inst_49596 = cljs.core.__destructure_map(inst_49595);
var inst_49597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49596,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49596,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49596,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49600 = inst_49595;
var state_49659__$1 = (function (){var statearr_49663 = state_49659;
(statearr_49663[(8)] = inst_49599);

(statearr_49663[(9)] = inst_49600);

(statearr_49663[(10)] = inst_49598);

(statearr_49663[(11)] = inst_49597);

return statearr_49663;
})();
var statearr_49664_50713 = state_49659__$1;
(statearr_49664_50713[(2)] = null);

(statearr_49664_50713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (24))){
var inst_49603 = (state_49659[(12)]);
var inst_49600 = inst_49603;
var state_49659__$1 = (function (){var statearr_49665 = state_49659;
(statearr_49665[(9)] = inst_49600);

return statearr_49665;
})();
var statearr_49666_50714 = state_49659__$1;
(statearr_49666_50714[(2)] = null);

(statearr_49666_50714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (4))){
var inst_49612 = (state_49659[(7)]);
var inst_49614 = (state_49659[(13)]);
var inst_49611 = (state_49659[(2)]);
var inst_49612__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49611,(0),null);
var inst_49613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49611,(1),null);
var inst_49614__$1 = (inst_49612__$1 == null);
var state_49659__$1 = (function (){var statearr_49667 = state_49659;
(statearr_49667[(14)] = inst_49613);

(statearr_49667[(7)] = inst_49612__$1);

(statearr_49667[(13)] = inst_49614__$1);

return statearr_49667;
})();
if(cljs.core.truth_(inst_49614__$1)){
var statearr_49668_50715 = state_49659__$1;
(statearr_49668_50715[(1)] = (5));

} else {
var statearr_49669_50716 = state_49659__$1;
(statearr_49669_50716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (15))){
var inst_49604 = (state_49659[(15)]);
var inst_49633 = (state_49659[(16)]);
var inst_49633__$1 = cljs.core.empty_QMARK_(inst_49604);
var state_49659__$1 = (function (){var statearr_49670 = state_49659;
(statearr_49670[(16)] = inst_49633__$1);

return statearr_49670;
})();
if(inst_49633__$1){
var statearr_49671_50717 = state_49659__$1;
(statearr_49671_50717[(1)] = (17));

} else {
var statearr_49672_50718 = state_49659__$1;
(statearr_49672_50718[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (21))){
var inst_49603 = (state_49659[(12)]);
var inst_49600 = inst_49603;
var state_49659__$1 = (function (){var statearr_49673 = state_49659;
(statearr_49673[(9)] = inst_49600);

return statearr_49673;
})();
var statearr_49674_50719 = state_49659__$1;
(statearr_49674_50719[(2)] = null);

(statearr_49674_50719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (13))){
var inst_49626 = (state_49659[(2)]);
var inst_49627 = calc_state();
var inst_49600 = inst_49627;
var state_49659__$1 = (function (){var statearr_49675 = state_49659;
(statearr_49675[(17)] = inst_49626);

(statearr_49675[(9)] = inst_49600);

return statearr_49675;
})();
var statearr_49676_50726 = state_49659__$1;
(statearr_49676_50726[(2)] = null);

(statearr_49676_50726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (22))){
var inst_49653 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49677_50727 = state_49659__$1;
(statearr_49677_50727[(2)] = inst_49653);

(statearr_49677_50727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (6))){
var inst_49613 = (state_49659[(14)]);
var inst_49617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49613,change);
var state_49659__$1 = state_49659;
var statearr_49678_50728 = state_49659__$1;
(statearr_49678_50728[(2)] = inst_49617);

(statearr_49678_50728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (25))){
var state_49659__$1 = state_49659;
var statearr_49679_50729 = state_49659__$1;
(statearr_49679_50729[(2)] = null);

(statearr_49679_50729[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (17))){
var inst_49613 = (state_49659[(14)]);
var inst_49605 = (state_49659[(18)]);
var inst_49635 = (inst_49605.cljs$core$IFn$_invoke$arity$1 ? inst_49605.cljs$core$IFn$_invoke$arity$1(inst_49613) : inst_49605.call(null,inst_49613));
var inst_49636 = cljs.core.not(inst_49635);
var state_49659__$1 = state_49659;
var statearr_49680_50730 = state_49659__$1;
(statearr_49680_50730[(2)] = inst_49636);

(statearr_49680_50730[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (3))){
var inst_49657 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49659__$1,inst_49657);
} else {
if((state_val_49660 === (12))){
var state_49659__$1 = state_49659;
var statearr_49681_50731 = state_49659__$1;
(statearr_49681_50731[(2)] = null);

(statearr_49681_50731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (2))){
var inst_49600 = (state_49659[(9)]);
var inst_49603 = (state_49659[(12)]);
var inst_49603__$1 = cljs.core.__destructure_map(inst_49600);
var inst_49604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49603__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49603__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49603__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49659__$1 = (function (){var statearr_49682 = state_49659;
(statearr_49682[(18)] = inst_49605);

(statearr_49682[(15)] = inst_49604);

(statearr_49682[(12)] = inst_49603__$1);

return statearr_49682;
})();
return cljs.core.async.ioc_alts_BANG_(state_49659__$1,(4),inst_49606);
} else {
if((state_val_49660 === (23))){
var inst_49644 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
if(cljs.core.truth_(inst_49644)){
var statearr_49683_50732 = state_49659__$1;
(statearr_49683_50732[(1)] = (24));

} else {
var statearr_49684_50733 = state_49659__$1;
(statearr_49684_50733[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (19))){
var inst_49639 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49685_50734 = state_49659__$1;
(statearr_49685_50734[(2)] = inst_49639);

(statearr_49685_50734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (11))){
var inst_49613 = (state_49659[(14)]);
var inst_49623 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49613);
var state_49659__$1 = state_49659;
var statearr_49686_50735 = state_49659__$1;
(statearr_49686_50735[(2)] = inst_49623);

(statearr_49686_50735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (9))){
var inst_49613 = (state_49659[(14)]);
var inst_49630 = (state_49659[(19)]);
var inst_49604 = (state_49659[(15)]);
var inst_49630__$1 = (inst_49604.cljs$core$IFn$_invoke$arity$1 ? inst_49604.cljs$core$IFn$_invoke$arity$1(inst_49613) : inst_49604.call(null,inst_49613));
var state_49659__$1 = (function (){var statearr_49687 = state_49659;
(statearr_49687[(19)] = inst_49630__$1);

return statearr_49687;
})();
if(cljs.core.truth_(inst_49630__$1)){
var statearr_49688_50736 = state_49659__$1;
(statearr_49688_50736[(1)] = (14));

} else {
var statearr_49689_50737 = state_49659__$1;
(statearr_49689_50737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (5))){
var inst_49614 = (state_49659[(13)]);
var state_49659__$1 = state_49659;
var statearr_49690_50738 = state_49659__$1;
(statearr_49690_50738[(2)] = inst_49614);

(statearr_49690_50738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (14))){
var inst_49630 = (state_49659[(19)]);
var state_49659__$1 = state_49659;
var statearr_49691_50739 = state_49659__$1;
(statearr_49691_50739[(2)] = inst_49630);

(statearr_49691_50739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (26))){
var inst_49649 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49692_50740 = state_49659__$1;
(statearr_49692_50740[(2)] = inst_49649);

(statearr_49692_50740[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (16))){
var inst_49641 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
if(cljs.core.truth_(inst_49641)){
var statearr_49693_50741 = state_49659__$1;
(statearr_49693_50741[(1)] = (20));

} else {
var statearr_49694_50742 = state_49659__$1;
(statearr_49694_50742[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (10))){
var inst_49655 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49695_50743 = state_49659__$1;
(statearr_49695_50743[(2)] = inst_49655);

(statearr_49695_50743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (18))){
var inst_49633 = (state_49659[(16)]);
var state_49659__$1 = state_49659;
var statearr_49696_50744 = state_49659__$1;
(statearr_49696_50744[(2)] = inst_49633);

(statearr_49696_50744[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (8))){
var inst_49612 = (state_49659[(7)]);
var inst_49621 = (inst_49612 == null);
var state_49659__$1 = state_49659;
if(cljs.core.truth_(inst_49621)){
var statearr_49697_50745 = state_49659__$1;
(statearr_49697_50745[(1)] = (11));

} else {
var statearr_49698_50746 = state_49659__$1;
(statearr_49698_50746[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48856__auto__ = null;
var cljs$core$async$mix_$_state_machine__48856__auto____0 = (function (){
var statearr_49699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49699[(0)] = cljs$core$async$mix_$_state_machine__48856__auto__);

(statearr_49699[(1)] = (1));

return statearr_49699;
});
var cljs$core$async$mix_$_state_machine__48856__auto____1 = (function (state_49659){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49659);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49700){var ex__48859__auto__ = e49700;
var statearr_49701_50747 = state_49659;
(statearr_49701_50747[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49659[(4)]))){
var statearr_49702_50748 = state_49659;
(statearr_49702_50748[(1)] = cljs.core.first((state_49659[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50749 = state_49659;
state_49659 = G__50749;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48856__auto__ = function(state_49659){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48856__auto____1.call(this,state_49659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48856__auto____0;
cljs$core$async$mix_$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48856__auto____1;
return cljs$core$async$mix_$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49703 = f__48888__auto__();
(statearr_49703[(6)] = c__48887__auto___50710);

return statearr_49703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50750 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50750(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50751 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50751(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50752 = (function() {
var G__50753 = null;
var G__50753__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50753__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50753 = function(p,v){
switch(arguments.length){
case 1:
return G__50753__1.call(this,p);
case 2:
return G__50753__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50753.cljs$core$IFn$_invoke$arity$1 = G__50753__1;
G__50753.cljs$core$IFn$_invoke$arity$2 = G__50753__2;
return G__50753;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49705 = arguments.length;
switch (G__49705) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50752(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50752(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49708 = arguments.length;
switch (G__49708) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49706_SHARP_){
if(cljs.core.truth_((p1__49706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49706_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49706_SHARP_.call(null,topic)))){
return p1__49706_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49706_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49709 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49710){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49710 = meta49710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49711,meta49710__$1){
var self__ = this;
var _49711__$1 = this;
return (new cljs.core.async.t_cljs$core$async49709(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49710__$1));
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49711){
var self__ = this;
var _49711__$1 = this;
return self__.meta49710;
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5754__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5754__auto__)){
var m = temp__5754__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49710","meta49710",580979508,null)], null);
}));

(cljs.core.async.t_cljs$core$async49709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49709");

(cljs.core.async.t_cljs$core$async49709.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49709.
 */
cljs.core.async.__GT_t_cljs$core$async49709 = (function cljs$core$async$__GT_t_cljs$core$async49709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49710){
return (new cljs.core.async.t_cljs$core$async49709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49710));
});

}

return (new cljs.core.async.t_cljs$core$async49709(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48887__auto___50764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49783){
var state_val_49784 = (state_49783[(1)]);
if((state_val_49784 === (7))){
var inst_49779 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49785_50765 = state_49783__$1;
(statearr_49785_50765[(2)] = inst_49779);

(statearr_49785_50765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (20))){
var state_49783__$1 = state_49783;
var statearr_49786_50766 = state_49783__$1;
(statearr_49786_50766[(2)] = null);

(statearr_49786_50766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (1))){
var state_49783__$1 = state_49783;
var statearr_49787_50767 = state_49783__$1;
(statearr_49787_50767[(2)] = null);

(statearr_49787_50767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (24))){
var inst_49762 = (state_49783[(7)]);
var inst_49771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49762);
var state_49783__$1 = state_49783;
var statearr_49788_50768 = state_49783__$1;
(statearr_49788_50768[(2)] = inst_49771);

(statearr_49788_50768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (4))){
var inst_49714 = (state_49783[(8)]);
var inst_49714__$1 = (state_49783[(2)]);
var inst_49715 = (inst_49714__$1 == null);
var state_49783__$1 = (function (){var statearr_49789 = state_49783;
(statearr_49789[(8)] = inst_49714__$1);

return statearr_49789;
})();
if(cljs.core.truth_(inst_49715)){
var statearr_49790_50769 = state_49783__$1;
(statearr_49790_50769[(1)] = (5));

} else {
var statearr_49791_50770 = state_49783__$1;
(statearr_49791_50770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (15))){
var inst_49756 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49792_50771 = state_49783__$1;
(statearr_49792_50771[(2)] = inst_49756);

(statearr_49792_50771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (21))){
var inst_49776 = (state_49783[(2)]);
var state_49783__$1 = (function (){var statearr_49793 = state_49783;
(statearr_49793[(9)] = inst_49776);

return statearr_49793;
})();
var statearr_49794_50772 = state_49783__$1;
(statearr_49794_50772[(2)] = null);

(statearr_49794_50772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (13))){
var inst_49738 = (state_49783[(10)]);
var inst_49740 = cljs.core.chunked_seq_QMARK_(inst_49738);
var state_49783__$1 = state_49783;
if(inst_49740){
var statearr_49795_50773 = state_49783__$1;
(statearr_49795_50773[(1)] = (16));

} else {
var statearr_49796_50774 = state_49783__$1;
(statearr_49796_50774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (22))){
var inst_49768 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
if(cljs.core.truth_(inst_49768)){
var statearr_49797_50775 = state_49783__$1;
(statearr_49797_50775[(1)] = (23));

} else {
var statearr_49798_50776 = state_49783__$1;
(statearr_49798_50776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (6))){
var inst_49762 = (state_49783[(7)]);
var inst_49764 = (state_49783[(11)]);
var inst_49714 = (state_49783[(8)]);
var inst_49762__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49714) : topic_fn.call(null,inst_49714));
var inst_49763 = cljs.core.deref(mults);
var inst_49764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49763,inst_49762__$1);
var state_49783__$1 = (function (){var statearr_49799 = state_49783;
(statearr_49799[(7)] = inst_49762__$1);

(statearr_49799[(11)] = inst_49764__$1);

return statearr_49799;
})();
if(cljs.core.truth_(inst_49764__$1)){
var statearr_49800_50777 = state_49783__$1;
(statearr_49800_50777[(1)] = (19));

} else {
var statearr_49801_50778 = state_49783__$1;
(statearr_49801_50778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (25))){
var inst_49773 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49802_50779 = state_49783__$1;
(statearr_49802_50779[(2)] = inst_49773);

(statearr_49802_50779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (17))){
var inst_49738 = (state_49783[(10)]);
var inst_49747 = cljs.core.first(inst_49738);
var inst_49748 = cljs.core.async.muxch_STAR_(inst_49747);
var inst_49749 = cljs.core.async.close_BANG_(inst_49748);
var inst_49750 = cljs.core.next(inst_49738);
var inst_49724 = inst_49750;
var inst_49725 = null;
var inst_49726 = (0);
var inst_49727 = (0);
var state_49783__$1 = (function (){var statearr_49803 = state_49783;
(statearr_49803[(12)] = inst_49749);

(statearr_49803[(13)] = inst_49727);

(statearr_49803[(14)] = inst_49725);

(statearr_49803[(15)] = inst_49726);

(statearr_49803[(16)] = inst_49724);

return statearr_49803;
})();
var statearr_49804_50780 = state_49783__$1;
(statearr_49804_50780[(2)] = null);

(statearr_49804_50780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (3))){
var inst_49781 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49783__$1,inst_49781);
} else {
if((state_val_49784 === (12))){
var inst_49758 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49805_50781 = state_49783__$1;
(statearr_49805_50781[(2)] = inst_49758);

(statearr_49805_50781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (2))){
var state_49783__$1 = state_49783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49783__$1,(4),ch);
} else {
if((state_val_49784 === (23))){
var state_49783__$1 = state_49783;
var statearr_49806_50782 = state_49783__$1;
(statearr_49806_50782[(2)] = null);

(statearr_49806_50782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (19))){
var inst_49764 = (state_49783[(11)]);
var inst_49714 = (state_49783[(8)]);
var inst_49766 = cljs.core.async.muxch_STAR_(inst_49764);
var state_49783__$1 = state_49783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49783__$1,(22),inst_49766,inst_49714);
} else {
if((state_val_49784 === (11))){
var inst_49738 = (state_49783[(10)]);
var inst_49724 = (state_49783[(16)]);
var inst_49738__$1 = cljs.core.seq(inst_49724);
var state_49783__$1 = (function (){var statearr_49807 = state_49783;
(statearr_49807[(10)] = inst_49738__$1);

return statearr_49807;
})();
if(inst_49738__$1){
var statearr_49808_50783 = state_49783__$1;
(statearr_49808_50783[(1)] = (13));

} else {
var statearr_49809_50784 = state_49783__$1;
(statearr_49809_50784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (9))){
var inst_49760 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49810_50785 = state_49783__$1;
(statearr_49810_50785[(2)] = inst_49760);

(statearr_49810_50785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (5))){
var inst_49721 = cljs.core.deref(mults);
var inst_49722 = cljs.core.vals(inst_49721);
var inst_49723 = cljs.core.seq(inst_49722);
var inst_49724 = inst_49723;
var inst_49725 = null;
var inst_49726 = (0);
var inst_49727 = (0);
var state_49783__$1 = (function (){var statearr_49811 = state_49783;
(statearr_49811[(13)] = inst_49727);

(statearr_49811[(14)] = inst_49725);

(statearr_49811[(15)] = inst_49726);

(statearr_49811[(16)] = inst_49724);

return statearr_49811;
})();
var statearr_49812_50789 = state_49783__$1;
(statearr_49812_50789[(2)] = null);

(statearr_49812_50789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (14))){
var state_49783__$1 = state_49783;
var statearr_49816_50790 = state_49783__$1;
(statearr_49816_50790[(2)] = null);

(statearr_49816_50790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (16))){
var inst_49738 = (state_49783[(10)]);
var inst_49742 = cljs.core.chunk_first(inst_49738);
var inst_49743 = cljs.core.chunk_rest(inst_49738);
var inst_49744 = cljs.core.count(inst_49742);
var inst_49724 = inst_49743;
var inst_49725 = inst_49742;
var inst_49726 = inst_49744;
var inst_49727 = (0);
var state_49783__$1 = (function (){var statearr_49817 = state_49783;
(statearr_49817[(13)] = inst_49727);

(statearr_49817[(14)] = inst_49725);

(statearr_49817[(15)] = inst_49726);

(statearr_49817[(16)] = inst_49724);

return statearr_49817;
})();
var statearr_49818_50791 = state_49783__$1;
(statearr_49818_50791[(2)] = null);

(statearr_49818_50791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (10))){
var inst_49727 = (state_49783[(13)]);
var inst_49725 = (state_49783[(14)]);
var inst_49726 = (state_49783[(15)]);
var inst_49724 = (state_49783[(16)]);
var inst_49732 = cljs.core._nth(inst_49725,inst_49727);
var inst_49733 = cljs.core.async.muxch_STAR_(inst_49732);
var inst_49734 = cljs.core.async.close_BANG_(inst_49733);
var inst_49735 = (inst_49727 + (1));
var tmp49813 = inst_49725;
var tmp49814 = inst_49726;
var tmp49815 = inst_49724;
var inst_49724__$1 = tmp49815;
var inst_49725__$1 = tmp49813;
var inst_49726__$1 = tmp49814;
var inst_49727__$1 = inst_49735;
var state_49783__$1 = (function (){var statearr_49819 = state_49783;
(statearr_49819[(13)] = inst_49727__$1);

(statearr_49819[(14)] = inst_49725__$1);

(statearr_49819[(15)] = inst_49726__$1);

(statearr_49819[(16)] = inst_49724__$1);

(statearr_49819[(17)] = inst_49734);

return statearr_49819;
})();
var statearr_49820_50792 = state_49783__$1;
(statearr_49820_50792[(2)] = null);

(statearr_49820_50792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (18))){
var inst_49753 = (state_49783[(2)]);
var state_49783__$1 = state_49783;
var statearr_49821_50793 = state_49783__$1;
(statearr_49821_50793[(2)] = inst_49753);

(statearr_49821_50793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49784 === (8))){
var inst_49727 = (state_49783[(13)]);
var inst_49726 = (state_49783[(15)]);
var inst_49729 = (inst_49727 < inst_49726);
var inst_49730 = inst_49729;
var state_49783__$1 = state_49783;
if(cljs.core.truth_(inst_49730)){
var statearr_49822_50794 = state_49783__$1;
(statearr_49822_50794[(1)] = (10));

} else {
var statearr_49823_50795 = state_49783__$1;
(statearr_49823_50795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49824[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49824[(1)] = (1));

return statearr_49824;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49783){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49783);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49825){var ex__48859__auto__ = e49825;
var statearr_49826_50796 = state_49783;
(statearr_49826_50796[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49783[(4)]))){
var statearr_49827_50797 = state_49783;
(statearr_49827_50797[(1)] = cljs.core.first((state_49783[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50798 = state_49783;
state_49783 = G__50798;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49828 = f__48888__auto__();
(statearr_49828[(6)] = c__48887__auto___50764);

return statearr_49828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49830 = arguments.length;
switch (G__49830) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49832 = arguments.length;
switch (G__49832) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49834 = arguments.length;
switch (G__49834) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__48887__auto___50802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49877){
var state_val_49878 = (state_49877[(1)]);
if((state_val_49878 === (7))){
var state_49877__$1 = state_49877;
var statearr_49879_50803 = state_49877__$1;
(statearr_49879_50803[(2)] = null);

(statearr_49879_50803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (1))){
var state_49877__$1 = state_49877;
var statearr_49880_50804 = state_49877__$1;
(statearr_49880_50804[(2)] = null);

(statearr_49880_50804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (4))){
var inst_49838 = (state_49877[(7)]);
var inst_49837 = (state_49877[(8)]);
var inst_49840 = (inst_49838 < inst_49837);
var state_49877__$1 = state_49877;
if(cljs.core.truth_(inst_49840)){
var statearr_49881_50805 = state_49877__$1;
(statearr_49881_50805[(1)] = (6));

} else {
var statearr_49882_50806 = state_49877__$1;
(statearr_49882_50806[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (15))){
var inst_49863 = (state_49877[(9)]);
var inst_49868 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49863);
var state_49877__$1 = state_49877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49877__$1,(17),out,inst_49868);
} else {
if((state_val_49878 === (13))){
var inst_49863 = (state_49877[(9)]);
var inst_49863__$1 = (state_49877[(2)]);
var inst_49864 = cljs.core.some(cljs.core.nil_QMARK_,inst_49863__$1);
var state_49877__$1 = (function (){var statearr_49883 = state_49877;
(statearr_49883[(9)] = inst_49863__$1);

return statearr_49883;
})();
if(cljs.core.truth_(inst_49864)){
var statearr_49884_50807 = state_49877__$1;
(statearr_49884_50807[(1)] = (14));

} else {
var statearr_49885_50808 = state_49877__$1;
(statearr_49885_50808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (6))){
var state_49877__$1 = state_49877;
var statearr_49886_50809 = state_49877__$1;
(statearr_49886_50809[(2)] = null);

(statearr_49886_50809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (17))){
var inst_49870 = (state_49877[(2)]);
var state_49877__$1 = (function (){var statearr_49888 = state_49877;
(statearr_49888[(10)] = inst_49870);

return statearr_49888;
})();
var statearr_49889_50810 = state_49877__$1;
(statearr_49889_50810[(2)] = null);

(statearr_49889_50810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (3))){
var inst_49875 = (state_49877[(2)]);
var state_49877__$1 = state_49877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49877__$1,inst_49875);
} else {
if((state_val_49878 === (12))){
var _ = (function (){var statearr_49890 = state_49877;
(statearr_49890[(4)] = cljs.core.rest((state_49877[(4)])));

return statearr_49890;
})();
var state_49877__$1 = state_49877;
var ex49887 = (state_49877__$1[(2)]);
var statearr_49891_50811 = state_49877__$1;
(statearr_49891_50811[(5)] = ex49887);


if((ex49887 instanceof Object)){
var statearr_49892_50812 = state_49877__$1;
(statearr_49892_50812[(1)] = (11));

(statearr_49892_50812[(5)] = null);

} else {
throw ex49887;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (2))){
var inst_49836 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49837 = cnt;
var inst_49838 = (0);
var state_49877__$1 = (function (){var statearr_49893 = state_49877;
(statearr_49893[(7)] = inst_49838);

(statearr_49893[(8)] = inst_49837);

(statearr_49893[(11)] = inst_49836);

return statearr_49893;
})();
var statearr_49894_50822 = state_49877__$1;
(statearr_49894_50822[(2)] = null);

(statearr_49894_50822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (11))){
var inst_49842 = (state_49877[(2)]);
var inst_49843 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49877__$1 = (function (){var statearr_49895 = state_49877;
(statearr_49895[(12)] = inst_49842);

return statearr_49895;
})();
var statearr_49896_50823 = state_49877__$1;
(statearr_49896_50823[(2)] = inst_49843);

(statearr_49896_50823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (9))){
var inst_49838 = (state_49877[(7)]);
var _ = (function (){var statearr_49897 = state_49877;
(statearr_49897[(4)] = cljs.core.cons((12),(state_49877[(4)])));

return statearr_49897;
})();
var inst_49849 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49838) : chs__$1.call(null,inst_49838));
var inst_49850 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49838) : done.call(null,inst_49838));
var inst_49851 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49849,inst_49850);
var ___$1 = (function (){var statearr_49898 = state_49877;
(statearr_49898[(4)] = cljs.core.rest((state_49877[(4)])));

return statearr_49898;
})();
var state_49877__$1 = state_49877;
var statearr_49899_50824 = state_49877__$1;
(statearr_49899_50824[(2)] = inst_49851);

(statearr_49899_50824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (5))){
var inst_49861 = (state_49877[(2)]);
var state_49877__$1 = (function (){var statearr_49900 = state_49877;
(statearr_49900[(13)] = inst_49861);

return statearr_49900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49877__$1,(13),dchan);
} else {
if((state_val_49878 === (14))){
var inst_49866 = cljs.core.async.close_BANG_(out);
var state_49877__$1 = state_49877;
var statearr_49901_50825 = state_49877__$1;
(statearr_49901_50825[(2)] = inst_49866);

(statearr_49901_50825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (16))){
var inst_49873 = (state_49877[(2)]);
var state_49877__$1 = state_49877;
var statearr_49902_50826 = state_49877__$1;
(statearr_49902_50826[(2)] = inst_49873);

(statearr_49902_50826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (10))){
var inst_49838 = (state_49877[(7)]);
var inst_49854 = (state_49877[(2)]);
var inst_49855 = (inst_49838 + (1));
var inst_49838__$1 = inst_49855;
var state_49877__$1 = (function (){var statearr_49903 = state_49877;
(statearr_49903[(7)] = inst_49838__$1);

(statearr_49903[(14)] = inst_49854);

return statearr_49903;
})();
var statearr_49904_50827 = state_49877__$1;
(statearr_49904_50827[(2)] = null);

(statearr_49904_50827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49878 === (8))){
var inst_49859 = (state_49877[(2)]);
var state_49877__$1 = state_49877;
var statearr_49905_50828 = state_49877__$1;
(statearr_49905_50828[(2)] = inst_49859);

(statearr_49905_50828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49906[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49906[(1)] = (1));

return statearr_49906;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49877){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49877);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49907){var ex__48859__auto__ = e49907;
var statearr_49908_50829 = state_49877;
(statearr_49908_50829[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49877[(4)]))){
var statearr_49909_50830 = state_49877;
(statearr_49909_50830[(1)] = cljs.core.first((state_49877[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50831 = state_49877;
state_49877 = G__50831;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49910 = f__48888__auto__();
(statearr_49910[(6)] = c__48887__auto___50802);

return statearr_49910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49913 = arguments.length;
switch (G__49913) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49945){
var state_val_49946 = (state_49945[(1)]);
if((state_val_49946 === (7))){
var inst_49925 = (state_49945[(7)]);
var inst_49924 = (state_49945[(8)]);
var inst_49924__$1 = (state_49945[(2)]);
var inst_49925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49924__$1,(0),null);
var inst_49926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49924__$1,(1),null);
var inst_49927 = (inst_49925__$1 == null);
var state_49945__$1 = (function (){var statearr_49947 = state_49945;
(statearr_49947[(7)] = inst_49925__$1);

(statearr_49947[(8)] = inst_49924__$1);

(statearr_49947[(9)] = inst_49926);

return statearr_49947;
})();
if(cljs.core.truth_(inst_49927)){
var statearr_49948_50834 = state_49945__$1;
(statearr_49948_50834[(1)] = (8));

} else {
var statearr_49949_50835 = state_49945__$1;
(statearr_49949_50835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (1))){
var inst_49914 = cljs.core.vec(chs);
var inst_49915 = inst_49914;
var state_49945__$1 = (function (){var statearr_49950 = state_49945;
(statearr_49950[(10)] = inst_49915);

return statearr_49950;
})();
var statearr_49951_50836 = state_49945__$1;
(statearr_49951_50836[(2)] = null);

(statearr_49951_50836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (4))){
var inst_49915 = (state_49945[(10)]);
var state_49945__$1 = state_49945;
return cljs.core.async.ioc_alts_BANG_(state_49945__$1,(7),inst_49915);
} else {
if((state_val_49946 === (6))){
var inst_49941 = (state_49945[(2)]);
var state_49945__$1 = state_49945;
var statearr_49952_50837 = state_49945__$1;
(statearr_49952_50837[(2)] = inst_49941);

(statearr_49952_50837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (3))){
var inst_49943 = (state_49945[(2)]);
var state_49945__$1 = state_49945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49945__$1,inst_49943);
} else {
if((state_val_49946 === (2))){
var inst_49915 = (state_49945[(10)]);
var inst_49917 = cljs.core.count(inst_49915);
var inst_49918 = (inst_49917 > (0));
var state_49945__$1 = state_49945;
if(cljs.core.truth_(inst_49918)){
var statearr_49954_50838 = state_49945__$1;
(statearr_49954_50838[(1)] = (4));

} else {
var statearr_49955_50839 = state_49945__$1;
(statearr_49955_50839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (11))){
var inst_49915 = (state_49945[(10)]);
var inst_49934 = (state_49945[(2)]);
var tmp49953 = inst_49915;
var inst_49915__$1 = tmp49953;
var state_49945__$1 = (function (){var statearr_49956 = state_49945;
(statearr_49956[(11)] = inst_49934);

(statearr_49956[(10)] = inst_49915__$1);

return statearr_49956;
})();
var statearr_49957_50840 = state_49945__$1;
(statearr_49957_50840[(2)] = null);

(statearr_49957_50840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (9))){
var inst_49925 = (state_49945[(7)]);
var state_49945__$1 = state_49945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49945__$1,(11),out,inst_49925);
} else {
if((state_val_49946 === (5))){
var inst_49939 = cljs.core.async.close_BANG_(out);
var state_49945__$1 = state_49945;
var statearr_49958_50841 = state_49945__$1;
(statearr_49958_50841[(2)] = inst_49939);

(statearr_49958_50841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (10))){
var inst_49937 = (state_49945[(2)]);
var state_49945__$1 = state_49945;
var statearr_49959_50842 = state_49945__$1;
(statearr_49959_50842[(2)] = inst_49937);

(statearr_49959_50842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49946 === (8))){
var inst_49925 = (state_49945[(7)]);
var inst_49924 = (state_49945[(8)]);
var inst_49926 = (state_49945[(9)]);
var inst_49915 = (state_49945[(10)]);
var inst_49929 = (function (){var cs = inst_49915;
var vec__49920 = inst_49924;
var v = inst_49925;
var c = inst_49926;
return (function (p1__49911_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49911_SHARP_);
});
})();
var inst_49930 = cljs.core.filterv(inst_49929,inst_49915);
var inst_49915__$1 = inst_49930;
var state_49945__$1 = (function (){var statearr_49960 = state_49945;
(statearr_49960[(10)] = inst_49915__$1);

return statearr_49960;
})();
var statearr_49961_50843 = state_49945__$1;
(statearr_49961_50843[(2)] = null);

(statearr_49961_50843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_49962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49962[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_49962[(1)] = (1));

return statearr_49962;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49945){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49945);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e49963){var ex__48859__auto__ = e49963;
var statearr_49964_50844 = state_49945;
(statearr_49964_50844[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49945[(4)]))){
var statearr_49965_50845 = state_49945;
(statearr_49965_50845[(1)] = cljs.core.first((state_49945[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50846 = state_49945;
state_49945 = G__50846;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_49966 = f__48888__auto__();
(statearr_49966[(6)] = c__48887__auto___50833);

return statearr_49966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49968 = arguments.length;
switch (G__49968) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_49992){
var state_val_49993 = (state_49992[(1)]);
if((state_val_49993 === (7))){
var inst_49974 = (state_49992[(7)]);
var inst_49974__$1 = (state_49992[(2)]);
var inst_49975 = (inst_49974__$1 == null);
var inst_49976 = cljs.core.not(inst_49975);
var state_49992__$1 = (function (){var statearr_49994 = state_49992;
(statearr_49994[(7)] = inst_49974__$1);

return statearr_49994;
})();
if(inst_49976){
var statearr_49995_50867 = state_49992__$1;
(statearr_49995_50867[(1)] = (8));

} else {
var statearr_49996_50868 = state_49992__$1;
(statearr_49996_50868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (1))){
var inst_49969 = (0);
var state_49992__$1 = (function (){var statearr_49997 = state_49992;
(statearr_49997[(8)] = inst_49969);

return statearr_49997;
})();
var statearr_49998_50869 = state_49992__$1;
(statearr_49998_50869[(2)] = null);

(statearr_49998_50869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (4))){
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49992__$1,(7),ch);
} else {
if((state_val_49993 === (6))){
var inst_49987 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_49999_50870 = state_49992__$1;
(statearr_49999_50870[(2)] = inst_49987);

(statearr_49999_50870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (3))){
var inst_49989 = (state_49992[(2)]);
var inst_49990 = cljs.core.async.close_BANG_(out);
var state_49992__$1 = (function (){var statearr_50000 = state_49992;
(statearr_50000[(9)] = inst_49989);

return statearr_50000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49992__$1,inst_49990);
} else {
if((state_val_49993 === (2))){
var inst_49969 = (state_49992[(8)]);
var inst_49971 = (inst_49969 < n);
var state_49992__$1 = state_49992;
if(cljs.core.truth_(inst_49971)){
var statearr_50001_50871 = state_49992__$1;
(statearr_50001_50871[(1)] = (4));

} else {
var statearr_50002_50872 = state_49992__$1;
(statearr_50002_50872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (11))){
var inst_49969 = (state_49992[(8)]);
var inst_49979 = (state_49992[(2)]);
var inst_49980 = (inst_49969 + (1));
var inst_49969__$1 = inst_49980;
var state_49992__$1 = (function (){var statearr_50003 = state_49992;
(statearr_50003[(8)] = inst_49969__$1);

(statearr_50003[(10)] = inst_49979);

return statearr_50003;
})();
var statearr_50004_50873 = state_49992__$1;
(statearr_50004_50873[(2)] = null);

(statearr_50004_50873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (9))){
var state_49992__$1 = state_49992;
var statearr_50005_50874 = state_49992__$1;
(statearr_50005_50874[(2)] = null);

(statearr_50005_50874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (5))){
var state_49992__$1 = state_49992;
var statearr_50006_50875 = state_49992__$1;
(statearr_50006_50875[(2)] = null);

(statearr_50006_50875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (10))){
var inst_49984 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50007_50876 = state_49992__$1;
(statearr_50007_50876[(2)] = inst_49984);

(statearr_50007_50876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (8))){
var inst_49974 = (state_49992[(7)]);
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49992__$1,(11),out,inst_49974);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_50008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50008[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_50008[(1)] = (1));

return statearr_50008;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_49992){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_49992);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50009){var ex__48859__auto__ = e50009;
var statearr_50010_50877 = state_49992;
(statearr_50010_50877[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_49992[(4)]))){
var statearr_50011_50878 = state_49992;
(statearr_50011_50878[(1)] = cljs.core.first((state_49992[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50879 = state_49992;
state_49992 = G__50879;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_49992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_49992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50012 = f__48888__auto__();
(statearr_50012[(6)] = c__48887__auto___50866);

return statearr_50012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50014 = (function (f,ch,meta50015){
this.f = f;
this.ch = ch;
this.meta50015 = meta50015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50016,meta50015__$1){
var self__ = this;
var _50016__$1 = this;
return (new cljs.core.async.t_cljs$core$async50014(self__.f,self__.ch,meta50015__$1));
}));

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50016){
var self__ = this;
var _50016__$1 = this;
return self__.meta50015;
}));

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50017 = (function (f,ch,meta50015,_,fn1,meta50018){
this.f = f;
this.ch = ch;
this.meta50015 = meta50015;
this._ = _;
this.fn1 = fn1;
this.meta50018 = meta50018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50019,meta50018__$1){
var self__ = this;
var _50019__$1 = this;
return (new cljs.core.async.t_cljs$core$async50017(self__.f,self__.ch,self__.meta50015,self__._,self__.fn1,meta50018__$1));
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50019){
var self__ = this;
var _50019__$1 = this;
return self__.meta50018;
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__50013_SHARP_){
var G__50020 = (((p1__50013_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50013_SHARP_) : self__.f.call(null,p1__50013_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50020) : f1.call(null,G__50020));
});
}));

(cljs.core.async.t_cljs$core$async50017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50015","meta50015",-2061327682,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50014","cljs.core.async/t_cljs$core$async50014",58233027,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50018","meta50018",-345175046,null)], null);
}));

(cljs.core.async.t_cljs$core$async50017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50017");

(cljs.core.async.t_cljs$core$async50017.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50017.
 */
cljs.core.async.__GT_t_cljs$core$async50017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50017(f__$1,ch__$1,meta50015__$1,___$2,fn1__$1,meta50018){
return (new cljs.core.async.t_cljs$core$async50017(f__$1,ch__$1,meta50015__$1,___$2,fn1__$1,meta50018));
});

}

return (new cljs.core.async.t_cljs$core$async50017(self__.f,self__.ch,self__.meta50015,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50021 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50021) : self__.f.call(null,G__50021));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50015","meta50015",-2061327682,null)], null);
}));

(cljs.core.async.t_cljs$core$async50014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50014");

(cljs.core.async.t_cljs$core$async50014.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50014.
 */
cljs.core.async.__GT_t_cljs$core$async50014 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50014(f__$1,ch__$1,meta50015){
return (new cljs.core.async.t_cljs$core$async50014(f__$1,ch__$1,meta50015));
});

}

return (new cljs.core.async.t_cljs$core$async50014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50022 = (function (f,ch,meta50023){
this.f = f;
this.ch = ch;
this.meta50023 = meta50023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50024,meta50023__$1){
var self__ = this;
var _50024__$1 = this;
return (new cljs.core.async.t_cljs$core$async50022(self__.f,self__.ch,meta50023__$1));
}));

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50024){
var self__ = this;
var _50024__$1 = this;
return self__.meta50023;
}));

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async50022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50023","meta50023",-1253287869,null)], null);
}));

(cljs.core.async.t_cljs$core$async50022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50022");

(cljs.core.async.t_cljs$core$async50022.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50022.
 */
cljs.core.async.__GT_t_cljs$core$async50022 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50022(f__$1,ch__$1,meta50023){
return (new cljs.core.async.t_cljs$core$async50022(f__$1,ch__$1,meta50023));
});

}

return (new cljs.core.async.t_cljs$core$async50022(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50025 = (function (p,ch,meta50026){
this.p = p;
this.ch = ch;
this.meta50026 = meta50026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50027,meta50026__$1){
var self__ = this;
var _50027__$1 = this;
return (new cljs.core.async.t_cljs$core$async50025(self__.p,self__.ch,meta50026__$1));
}));

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50027){
var self__ = this;
var _50027__$1 = this;
return self__.meta50026;
}));

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50026","meta50026",-665282557,null)], null);
}));

(cljs.core.async.t_cljs$core$async50025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50025");

(cljs.core.async.t_cljs$core$async50025.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50025.
 */
cljs.core.async.__GT_t_cljs$core$async50025 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50025(p__$1,ch__$1,meta50026){
return (new cljs.core.async.t_cljs$core$async50025(p__$1,ch__$1,meta50026));
});

}

return (new cljs.core.async.t_cljs$core$async50025(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50029 = arguments.length;
switch (G__50029) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_50050){
var state_val_50051 = (state_50050[(1)]);
if((state_val_50051 === (7))){
var inst_50046 = (state_50050[(2)]);
var state_50050__$1 = state_50050;
var statearr_50052_50890 = state_50050__$1;
(statearr_50052_50890[(2)] = inst_50046);

(statearr_50052_50890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (1))){
var state_50050__$1 = state_50050;
var statearr_50053_50891 = state_50050__$1;
(statearr_50053_50891[(2)] = null);

(statearr_50053_50891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (4))){
var inst_50032 = (state_50050[(7)]);
var inst_50032__$1 = (state_50050[(2)]);
var inst_50033 = (inst_50032__$1 == null);
var state_50050__$1 = (function (){var statearr_50054 = state_50050;
(statearr_50054[(7)] = inst_50032__$1);

return statearr_50054;
})();
if(cljs.core.truth_(inst_50033)){
var statearr_50055_50892 = state_50050__$1;
(statearr_50055_50892[(1)] = (5));

} else {
var statearr_50056_50893 = state_50050__$1;
(statearr_50056_50893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (6))){
var inst_50032 = (state_50050[(7)]);
var inst_50037 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50032) : p.call(null,inst_50032));
var state_50050__$1 = state_50050;
if(cljs.core.truth_(inst_50037)){
var statearr_50057_50894 = state_50050__$1;
(statearr_50057_50894[(1)] = (8));

} else {
var statearr_50058_50895 = state_50050__$1;
(statearr_50058_50895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (3))){
var inst_50048 = (state_50050[(2)]);
var state_50050__$1 = state_50050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50050__$1,inst_50048);
} else {
if((state_val_50051 === (2))){
var state_50050__$1 = state_50050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50050__$1,(4),ch);
} else {
if((state_val_50051 === (11))){
var inst_50040 = (state_50050[(2)]);
var state_50050__$1 = state_50050;
var statearr_50059_50896 = state_50050__$1;
(statearr_50059_50896[(2)] = inst_50040);

(statearr_50059_50896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (9))){
var state_50050__$1 = state_50050;
var statearr_50060_50897 = state_50050__$1;
(statearr_50060_50897[(2)] = null);

(statearr_50060_50897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (5))){
var inst_50035 = cljs.core.async.close_BANG_(out);
var state_50050__$1 = state_50050;
var statearr_50061_50898 = state_50050__$1;
(statearr_50061_50898[(2)] = inst_50035);

(statearr_50061_50898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (10))){
var inst_50043 = (state_50050[(2)]);
var state_50050__$1 = (function (){var statearr_50062 = state_50050;
(statearr_50062[(8)] = inst_50043);

return statearr_50062;
})();
var statearr_50063_50899 = state_50050__$1;
(statearr_50063_50899[(2)] = null);

(statearr_50063_50899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50051 === (8))){
var inst_50032 = (state_50050[(7)]);
var state_50050__$1 = state_50050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50050__$1,(11),out,inst_50032);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_50064 = [null,null,null,null,null,null,null,null,null];
(statearr_50064[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_50064[(1)] = (1));

return statearr_50064;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_50050){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_50050);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50065){var ex__48859__auto__ = e50065;
var statearr_50066_50900 = state_50050;
(statearr_50066_50900[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_50050[(4)]))){
var statearr_50067_50901 = state_50050;
(statearr_50067_50901[(1)] = cljs.core.first((state_50050[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50902 = state_50050;
state_50050 = G__50902;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_50050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_50050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50068 = f__48888__auto__();
(statearr_50068[(6)] = c__48887__auto___50889);

return statearr_50068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50070 = arguments.length;
switch (G__50070) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_50132){
var state_val_50133 = (state_50132[(1)]);
if((state_val_50133 === (7))){
var inst_50128 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
var statearr_50134_50904 = state_50132__$1;
(statearr_50134_50904[(2)] = inst_50128);

(statearr_50134_50904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (20))){
var inst_50098 = (state_50132[(7)]);
var inst_50109 = (state_50132[(2)]);
var inst_50110 = cljs.core.next(inst_50098);
var inst_50084 = inst_50110;
var inst_50085 = null;
var inst_50086 = (0);
var inst_50087 = (0);
var state_50132__$1 = (function (){var statearr_50135 = state_50132;
(statearr_50135[(8)] = inst_50109);

(statearr_50135[(9)] = inst_50084);

(statearr_50135[(10)] = inst_50085);

(statearr_50135[(11)] = inst_50087);

(statearr_50135[(12)] = inst_50086);

return statearr_50135;
})();
var statearr_50136_50905 = state_50132__$1;
(statearr_50136_50905[(2)] = null);

(statearr_50136_50905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (1))){
var state_50132__$1 = state_50132;
var statearr_50137_50906 = state_50132__$1;
(statearr_50137_50906[(2)] = null);

(statearr_50137_50906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (4))){
var inst_50073 = (state_50132[(13)]);
var inst_50073__$1 = (state_50132[(2)]);
var inst_50074 = (inst_50073__$1 == null);
var state_50132__$1 = (function (){var statearr_50138 = state_50132;
(statearr_50138[(13)] = inst_50073__$1);

return statearr_50138;
})();
if(cljs.core.truth_(inst_50074)){
var statearr_50139_50913 = state_50132__$1;
(statearr_50139_50913[(1)] = (5));

} else {
var statearr_50140_50914 = state_50132__$1;
(statearr_50140_50914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (15))){
var state_50132__$1 = state_50132;
var statearr_50144_50915 = state_50132__$1;
(statearr_50144_50915[(2)] = null);

(statearr_50144_50915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (21))){
var state_50132__$1 = state_50132;
var statearr_50145_50916 = state_50132__$1;
(statearr_50145_50916[(2)] = null);

(statearr_50145_50916[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (13))){
var inst_50084 = (state_50132[(9)]);
var inst_50085 = (state_50132[(10)]);
var inst_50087 = (state_50132[(11)]);
var inst_50086 = (state_50132[(12)]);
var inst_50094 = (state_50132[(2)]);
var inst_50095 = (inst_50087 + (1));
var tmp50141 = inst_50084;
var tmp50142 = inst_50085;
var tmp50143 = inst_50086;
var inst_50084__$1 = tmp50141;
var inst_50085__$1 = tmp50142;
var inst_50086__$1 = tmp50143;
var inst_50087__$1 = inst_50095;
var state_50132__$1 = (function (){var statearr_50146 = state_50132;
(statearr_50146[(9)] = inst_50084__$1);

(statearr_50146[(10)] = inst_50085__$1);

(statearr_50146[(11)] = inst_50087__$1);

(statearr_50146[(12)] = inst_50086__$1);

(statearr_50146[(14)] = inst_50094);

return statearr_50146;
})();
var statearr_50147_50917 = state_50132__$1;
(statearr_50147_50917[(2)] = null);

(statearr_50147_50917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (22))){
var state_50132__$1 = state_50132;
var statearr_50148_50918 = state_50132__$1;
(statearr_50148_50918[(2)] = null);

(statearr_50148_50918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (6))){
var inst_50073 = (state_50132[(13)]);
var inst_50082 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50073) : f.call(null,inst_50073));
var inst_50083 = cljs.core.seq(inst_50082);
var inst_50084 = inst_50083;
var inst_50085 = null;
var inst_50086 = (0);
var inst_50087 = (0);
var state_50132__$1 = (function (){var statearr_50149 = state_50132;
(statearr_50149[(9)] = inst_50084);

(statearr_50149[(10)] = inst_50085);

(statearr_50149[(11)] = inst_50087);

(statearr_50149[(12)] = inst_50086);

return statearr_50149;
})();
var statearr_50150_50919 = state_50132__$1;
(statearr_50150_50919[(2)] = null);

(statearr_50150_50919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (17))){
var inst_50098 = (state_50132[(7)]);
var inst_50102 = cljs.core.chunk_first(inst_50098);
var inst_50103 = cljs.core.chunk_rest(inst_50098);
var inst_50104 = cljs.core.count(inst_50102);
var inst_50084 = inst_50103;
var inst_50085 = inst_50102;
var inst_50086 = inst_50104;
var inst_50087 = (0);
var state_50132__$1 = (function (){var statearr_50151 = state_50132;
(statearr_50151[(9)] = inst_50084);

(statearr_50151[(10)] = inst_50085);

(statearr_50151[(11)] = inst_50087);

(statearr_50151[(12)] = inst_50086);

return statearr_50151;
})();
var statearr_50152_50920 = state_50132__$1;
(statearr_50152_50920[(2)] = null);

(statearr_50152_50920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (3))){
var inst_50130 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50132__$1,inst_50130);
} else {
if((state_val_50133 === (12))){
var inst_50118 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
var statearr_50153_50921 = state_50132__$1;
(statearr_50153_50921[(2)] = inst_50118);

(statearr_50153_50921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (2))){
var state_50132__$1 = state_50132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50132__$1,(4),in$);
} else {
if((state_val_50133 === (23))){
var inst_50126 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
var statearr_50154_50922 = state_50132__$1;
(statearr_50154_50922[(2)] = inst_50126);

(statearr_50154_50922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (19))){
var inst_50113 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
var statearr_50155_50923 = state_50132__$1;
(statearr_50155_50923[(2)] = inst_50113);

(statearr_50155_50923[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (11))){
var inst_50084 = (state_50132[(9)]);
var inst_50098 = (state_50132[(7)]);
var inst_50098__$1 = cljs.core.seq(inst_50084);
var state_50132__$1 = (function (){var statearr_50156 = state_50132;
(statearr_50156[(7)] = inst_50098__$1);

return statearr_50156;
})();
if(inst_50098__$1){
var statearr_50157_50924 = state_50132__$1;
(statearr_50157_50924[(1)] = (14));

} else {
var statearr_50158_50925 = state_50132__$1;
(statearr_50158_50925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (9))){
var inst_50120 = (state_50132[(2)]);
var inst_50121 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50132__$1 = (function (){var statearr_50159 = state_50132;
(statearr_50159[(15)] = inst_50120);

return statearr_50159;
})();
if(cljs.core.truth_(inst_50121)){
var statearr_50160_50926 = state_50132__$1;
(statearr_50160_50926[(1)] = (21));

} else {
var statearr_50161_50927 = state_50132__$1;
(statearr_50161_50927[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (5))){
var inst_50076 = cljs.core.async.close_BANG_(out);
var state_50132__$1 = state_50132;
var statearr_50162_50928 = state_50132__$1;
(statearr_50162_50928[(2)] = inst_50076);

(statearr_50162_50928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (14))){
var inst_50098 = (state_50132[(7)]);
var inst_50100 = cljs.core.chunked_seq_QMARK_(inst_50098);
var state_50132__$1 = state_50132;
if(inst_50100){
var statearr_50163_50929 = state_50132__$1;
(statearr_50163_50929[(1)] = (17));

} else {
var statearr_50164_50930 = state_50132__$1;
(statearr_50164_50930[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (16))){
var inst_50116 = (state_50132[(2)]);
var state_50132__$1 = state_50132;
var statearr_50165_50931 = state_50132__$1;
(statearr_50165_50931[(2)] = inst_50116);

(statearr_50165_50931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50133 === (10))){
var inst_50085 = (state_50132[(10)]);
var inst_50087 = (state_50132[(11)]);
var inst_50092 = cljs.core._nth(inst_50085,inst_50087);
var state_50132__$1 = state_50132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50132__$1,(13),out,inst_50092);
} else {
if((state_val_50133 === (18))){
var inst_50098 = (state_50132[(7)]);
var inst_50107 = cljs.core.first(inst_50098);
var state_50132__$1 = state_50132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50132__$1,(20),out,inst_50107);
} else {
if((state_val_50133 === (8))){
var inst_50087 = (state_50132[(11)]);
var inst_50086 = (state_50132[(12)]);
var inst_50089 = (inst_50087 < inst_50086);
var inst_50090 = inst_50089;
var state_50132__$1 = state_50132;
if(cljs.core.truth_(inst_50090)){
var statearr_50166_50932 = state_50132__$1;
(statearr_50166_50932[(1)] = (10));

} else {
var statearr_50167_50933 = state_50132__$1;
(statearr_50167_50933[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____0 = (function (){
var statearr_50168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__);

(statearr_50168[(1)] = (1));

return statearr_50168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____1 = (function (state_50132){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_50132);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50169){var ex__48859__auto__ = e50169;
var statearr_50170_50934 = state_50132;
(statearr_50170_50934[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_50132[(4)]))){
var statearr_50171_50935 = state_50132;
(statearr_50171_50935[(1)] = cljs.core.first((state_50132[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50941 = state_50132;
state_50132 = G__50941;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__ = function(state_50132){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____1.call(this,state_50132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48856__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50172 = f__48888__auto__();
(statearr_50172[(6)] = c__48887__auto__);

return statearr_50172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));

return c__48887__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50174 = arguments.length;
switch (G__50174) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50176 = arguments.length;
switch (G__50176) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50178 = arguments.length;
switch (G__50178) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_50202){
var state_val_50203 = (state_50202[(1)]);
if((state_val_50203 === (7))){
var inst_50197 = (state_50202[(2)]);
var state_50202__$1 = state_50202;
var statearr_50204_50946 = state_50202__$1;
(statearr_50204_50946[(2)] = inst_50197);

(statearr_50204_50946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (1))){
var inst_50179 = null;
var state_50202__$1 = (function (){var statearr_50205 = state_50202;
(statearr_50205[(7)] = inst_50179);

return statearr_50205;
})();
var statearr_50206_50947 = state_50202__$1;
(statearr_50206_50947[(2)] = null);

(statearr_50206_50947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (4))){
var inst_50182 = (state_50202[(8)]);
var inst_50182__$1 = (state_50202[(2)]);
var inst_50183 = (inst_50182__$1 == null);
var inst_50184 = cljs.core.not(inst_50183);
var state_50202__$1 = (function (){var statearr_50207 = state_50202;
(statearr_50207[(8)] = inst_50182__$1);

return statearr_50207;
})();
if(inst_50184){
var statearr_50208_50948 = state_50202__$1;
(statearr_50208_50948[(1)] = (5));

} else {
var statearr_50209_50949 = state_50202__$1;
(statearr_50209_50949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (6))){
var state_50202__$1 = state_50202;
var statearr_50210_50950 = state_50202__$1;
(statearr_50210_50950[(2)] = null);

(statearr_50210_50950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (3))){
var inst_50199 = (state_50202[(2)]);
var inst_50200 = cljs.core.async.close_BANG_(out);
var state_50202__$1 = (function (){var statearr_50211 = state_50202;
(statearr_50211[(9)] = inst_50199);

return statearr_50211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50202__$1,inst_50200);
} else {
if((state_val_50203 === (2))){
var state_50202__$1 = state_50202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50202__$1,(4),ch);
} else {
if((state_val_50203 === (11))){
var inst_50182 = (state_50202[(8)]);
var inst_50191 = (state_50202[(2)]);
var inst_50179 = inst_50182;
var state_50202__$1 = (function (){var statearr_50212 = state_50202;
(statearr_50212[(10)] = inst_50191);

(statearr_50212[(7)] = inst_50179);

return statearr_50212;
})();
var statearr_50213_50951 = state_50202__$1;
(statearr_50213_50951[(2)] = null);

(statearr_50213_50951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (9))){
var inst_50182 = (state_50202[(8)]);
var state_50202__$1 = state_50202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50202__$1,(11),out,inst_50182);
} else {
if((state_val_50203 === (5))){
var inst_50182 = (state_50202[(8)]);
var inst_50179 = (state_50202[(7)]);
var inst_50186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50182,inst_50179);
var state_50202__$1 = state_50202;
if(inst_50186){
var statearr_50215_50952 = state_50202__$1;
(statearr_50215_50952[(1)] = (8));

} else {
var statearr_50216_50953 = state_50202__$1;
(statearr_50216_50953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (10))){
var inst_50194 = (state_50202[(2)]);
var state_50202__$1 = state_50202;
var statearr_50217_50954 = state_50202__$1;
(statearr_50217_50954[(2)] = inst_50194);

(statearr_50217_50954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50203 === (8))){
var inst_50179 = (state_50202[(7)]);
var tmp50214 = inst_50179;
var inst_50179__$1 = tmp50214;
var state_50202__$1 = (function (){var statearr_50218 = state_50202;
(statearr_50218[(7)] = inst_50179__$1);

return statearr_50218;
})();
var statearr_50219_50955 = state_50202__$1;
(statearr_50219_50955[(2)] = null);

(statearr_50219_50955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_50220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50220[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_50220[(1)] = (1));

return statearr_50220;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_50202){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_50202);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50221){var ex__48859__auto__ = e50221;
var statearr_50222_50956 = state_50202;
(statearr_50222_50956[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_50202[(4)]))){
var statearr_50223_50957 = state_50202;
(statearr_50223_50957[(1)] = cljs.core.first((state_50202[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50958 = state_50202;
state_50202 = G__50958;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_50202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_50202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50224 = f__48888__auto__();
(statearr_50224[(6)] = c__48887__auto___50945);

return statearr_50224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50226 = arguments.length;
switch (G__50226) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_50264){
var state_val_50265 = (state_50264[(1)]);
if((state_val_50265 === (7))){
var inst_50260 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50266_50961 = state_50264__$1;
(statearr_50266_50961[(2)] = inst_50260);

(statearr_50266_50961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (1))){
var inst_50227 = (new Array(n));
var inst_50228 = inst_50227;
var inst_50229 = (0);
var state_50264__$1 = (function (){var statearr_50267 = state_50264;
(statearr_50267[(7)] = inst_50229);

(statearr_50267[(8)] = inst_50228);

return statearr_50267;
})();
var statearr_50268_50962 = state_50264__$1;
(statearr_50268_50962[(2)] = null);

(statearr_50268_50962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (4))){
var inst_50232 = (state_50264[(9)]);
var inst_50232__$1 = (state_50264[(2)]);
var inst_50233 = (inst_50232__$1 == null);
var inst_50234 = cljs.core.not(inst_50233);
var state_50264__$1 = (function (){var statearr_50269 = state_50264;
(statearr_50269[(9)] = inst_50232__$1);

return statearr_50269;
})();
if(inst_50234){
var statearr_50270_50963 = state_50264__$1;
(statearr_50270_50963[(1)] = (5));

} else {
var statearr_50271_50964 = state_50264__$1;
(statearr_50271_50964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (15))){
var inst_50254 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50272_50965 = state_50264__$1;
(statearr_50272_50965[(2)] = inst_50254);

(statearr_50272_50965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (13))){
var state_50264__$1 = state_50264;
var statearr_50273_50966 = state_50264__$1;
(statearr_50273_50966[(2)] = null);

(statearr_50273_50966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (6))){
var inst_50229 = (state_50264[(7)]);
var inst_50250 = (inst_50229 > (0));
var state_50264__$1 = state_50264;
if(cljs.core.truth_(inst_50250)){
var statearr_50274_50967 = state_50264__$1;
(statearr_50274_50967[(1)] = (12));

} else {
var statearr_50275_50968 = state_50264__$1;
(statearr_50275_50968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (3))){
var inst_50262 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50264__$1,inst_50262);
} else {
if((state_val_50265 === (12))){
var inst_50228 = (state_50264[(8)]);
var inst_50252 = cljs.core.vec(inst_50228);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50264__$1,(15),out,inst_50252);
} else {
if((state_val_50265 === (2))){
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50264__$1,(4),ch);
} else {
if((state_val_50265 === (11))){
var inst_50244 = (state_50264[(2)]);
var inst_50245 = (new Array(n));
var inst_50228 = inst_50245;
var inst_50229 = (0);
var state_50264__$1 = (function (){var statearr_50276 = state_50264;
(statearr_50276[(7)] = inst_50229);

(statearr_50276[(10)] = inst_50244);

(statearr_50276[(8)] = inst_50228);

return statearr_50276;
})();
var statearr_50277_50969 = state_50264__$1;
(statearr_50277_50969[(2)] = null);

(statearr_50277_50969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (9))){
var inst_50228 = (state_50264[(8)]);
var inst_50242 = cljs.core.vec(inst_50228);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50264__$1,(11),out,inst_50242);
} else {
if((state_val_50265 === (5))){
var inst_50229 = (state_50264[(7)]);
var inst_50237 = (state_50264[(11)]);
var inst_50228 = (state_50264[(8)]);
var inst_50232 = (state_50264[(9)]);
var inst_50236 = (inst_50228[inst_50229] = inst_50232);
var inst_50237__$1 = (inst_50229 + (1));
var inst_50238 = (inst_50237__$1 < n);
var state_50264__$1 = (function (){var statearr_50278 = state_50264;
(statearr_50278[(11)] = inst_50237__$1);

(statearr_50278[(12)] = inst_50236);

return statearr_50278;
})();
if(cljs.core.truth_(inst_50238)){
var statearr_50279_50970 = state_50264__$1;
(statearr_50279_50970[(1)] = (8));

} else {
var statearr_50280_50971 = state_50264__$1;
(statearr_50280_50971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (14))){
var inst_50257 = (state_50264[(2)]);
var inst_50258 = cljs.core.async.close_BANG_(out);
var state_50264__$1 = (function (){var statearr_50282 = state_50264;
(statearr_50282[(13)] = inst_50257);

return statearr_50282;
})();
var statearr_50283_50972 = state_50264__$1;
(statearr_50283_50972[(2)] = inst_50258);

(statearr_50283_50972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (10))){
var inst_50248 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50284_50973 = state_50264__$1;
(statearr_50284_50973[(2)] = inst_50248);

(statearr_50284_50973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (8))){
var inst_50237 = (state_50264[(11)]);
var inst_50228 = (state_50264[(8)]);
var tmp50281 = inst_50228;
var inst_50228__$1 = tmp50281;
var inst_50229 = inst_50237;
var state_50264__$1 = (function (){var statearr_50285 = state_50264;
(statearr_50285[(7)] = inst_50229);

(statearr_50285[(8)] = inst_50228__$1);

return statearr_50285;
})();
var statearr_50286_50974 = state_50264__$1;
(statearr_50286_50974[(2)] = null);

(statearr_50286_50974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_50287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50287[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_50287[(1)] = (1));

return statearr_50287;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_50264){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_50264);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50288){var ex__48859__auto__ = e50288;
var statearr_50289_50975 = state_50264;
(statearr_50289_50975[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_50264[(4)]))){
var statearr_50290_50976 = state_50264;
(statearr_50290_50976[(1)] = cljs.core.first((state_50264[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50977 = state_50264;
state_50264 = G__50977;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_50264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_50264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50291 = f__48888__auto__();
(statearr_50291[(6)] = c__48887__auto___50960);

return statearr_50291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50293 = arguments.length;
switch (G__50293) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48887__auto___50979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48888__auto__ = (function (){var switch__48855__auto__ = (function (state_50338){
var state_val_50339 = (state_50338[(1)]);
if((state_val_50339 === (7))){
var inst_50334 = (state_50338[(2)]);
var state_50338__$1 = state_50338;
var statearr_50340_50980 = state_50338__$1;
(statearr_50340_50980[(2)] = inst_50334);

(statearr_50340_50980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (1))){
var inst_50294 = [];
var inst_50295 = inst_50294;
var inst_50296 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50338__$1 = (function (){var statearr_50341 = state_50338;
(statearr_50341[(7)] = inst_50295);

(statearr_50341[(8)] = inst_50296);

return statearr_50341;
})();
var statearr_50342_50981 = state_50338__$1;
(statearr_50342_50981[(2)] = null);

(statearr_50342_50981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (4))){
var inst_50299 = (state_50338[(9)]);
var inst_50299__$1 = (state_50338[(2)]);
var inst_50300 = (inst_50299__$1 == null);
var inst_50301 = cljs.core.not(inst_50300);
var state_50338__$1 = (function (){var statearr_50343 = state_50338;
(statearr_50343[(9)] = inst_50299__$1);

return statearr_50343;
})();
if(inst_50301){
var statearr_50344_50996 = state_50338__$1;
(statearr_50344_50996[(1)] = (5));

} else {
var statearr_50345_50997 = state_50338__$1;
(statearr_50345_50997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (15))){
var inst_50295 = (state_50338[(7)]);
var inst_50326 = cljs.core.vec(inst_50295);
var state_50338__$1 = state_50338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50338__$1,(18),out,inst_50326);
} else {
if((state_val_50339 === (13))){
var inst_50321 = (state_50338[(2)]);
var state_50338__$1 = state_50338;
var statearr_50346_50998 = state_50338__$1;
(statearr_50346_50998[(2)] = inst_50321);

(statearr_50346_50998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (6))){
var inst_50295 = (state_50338[(7)]);
var inst_50323 = inst_50295.length;
var inst_50324 = (inst_50323 > (0));
var state_50338__$1 = state_50338;
if(cljs.core.truth_(inst_50324)){
var statearr_50347_50999 = state_50338__$1;
(statearr_50347_50999[(1)] = (15));

} else {
var statearr_50348_51000 = state_50338__$1;
(statearr_50348_51000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (17))){
var inst_50331 = (state_50338[(2)]);
var inst_50332 = cljs.core.async.close_BANG_(out);
var state_50338__$1 = (function (){var statearr_50349 = state_50338;
(statearr_50349[(10)] = inst_50331);

return statearr_50349;
})();
var statearr_50350_51001 = state_50338__$1;
(statearr_50350_51001[(2)] = inst_50332);

(statearr_50350_51001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (3))){
var inst_50336 = (state_50338[(2)]);
var state_50338__$1 = state_50338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50338__$1,inst_50336);
} else {
if((state_val_50339 === (12))){
var inst_50295 = (state_50338[(7)]);
var inst_50314 = cljs.core.vec(inst_50295);
var state_50338__$1 = state_50338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50338__$1,(14),out,inst_50314);
} else {
if((state_val_50339 === (2))){
var state_50338__$1 = state_50338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50338__$1,(4),ch);
} else {
if((state_val_50339 === (11))){
var inst_50295 = (state_50338[(7)]);
var inst_50303 = (state_50338[(11)]);
var inst_50299 = (state_50338[(9)]);
var inst_50311 = inst_50295.push(inst_50299);
var tmp50351 = inst_50295;
var inst_50295__$1 = tmp50351;
var inst_50296 = inst_50303;
var state_50338__$1 = (function (){var statearr_50352 = state_50338;
(statearr_50352[(7)] = inst_50295__$1);

(statearr_50352[(8)] = inst_50296);

(statearr_50352[(12)] = inst_50311);

return statearr_50352;
})();
var statearr_50353_51002 = state_50338__$1;
(statearr_50353_51002[(2)] = null);

(statearr_50353_51002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (9))){
var inst_50296 = (state_50338[(8)]);
var inst_50307 = cljs.core.keyword_identical_QMARK_(inst_50296,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50338__$1 = state_50338;
var statearr_50354_51003 = state_50338__$1;
(statearr_50354_51003[(2)] = inst_50307);

(statearr_50354_51003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (5))){
var inst_50303 = (state_50338[(11)]);
var inst_50299 = (state_50338[(9)]);
var inst_50304 = (state_50338[(13)]);
var inst_50296 = (state_50338[(8)]);
var inst_50303__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50299) : f.call(null,inst_50299));
var inst_50304__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50303__$1,inst_50296);
var state_50338__$1 = (function (){var statearr_50355 = state_50338;
(statearr_50355[(11)] = inst_50303__$1);

(statearr_50355[(13)] = inst_50304__$1);

return statearr_50355;
})();
if(inst_50304__$1){
var statearr_50356_51004 = state_50338__$1;
(statearr_50356_51004[(1)] = (8));

} else {
var statearr_50357_51005 = state_50338__$1;
(statearr_50357_51005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (14))){
var inst_50303 = (state_50338[(11)]);
var inst_50299 = (state_50338[(9)]);
var inst_50316 = (state_50338[(2)]);
var inst_50317 = [];
var inst_50318 = inst_50317.push(inst_50299);
var inst_50295 = inst_50317;
var inst_50296 = inst_50303;
var state_50338__$1 = (function (){var statearr_50358 = state_50338;
(statearr_50358[(7)] = inst_50295);

(statearr_50358[(14)] = inst_50316);

(statearr_50358[(8)] = inst_50296);

(statearr_50358[(15)] = inst_50318);

return statearr_50358;
})();
var statearr_50359_51006 = state_50338__$1;
(statearr_50359_51006[(2)] = null);

(statearr_50359_51006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (16))){
var state_50338__$1 = state_50338;
var statearr_50360_51007 = state_50338__$1;
(statearr_50360_51007[(2)] = null);

(statearr_50360_51007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (10))){
var inst_50309 = (state_50338[(2)]);
var state_50338__$1 = state_50338;
if(cljs.core.truth_(inst_50309)){
var statearr_50361_51008 = state_50338__$1;
(statearr_50361_51008[(1)] = (11));

} else {
var statearr_50362_51009 = state_50338__$1;
(statearr_50362_51009[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (18))){
var inst_50328 = (state_50338[(2)]);
var state_50338__$1 = state_50338;
var statearr_50363_51010 = state_50338__$1;
(statearr_50363_51010[(2)] = inst_50328);

(statearr_50363_51010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50339 === (8))){
var inst_50304 = (state_50338[(13)]);
var state_50338__$1 = state_50338;
var statearr_50364_51011 = state_50338__$1;
(statearr_50364_51011[(2)] = inst_50304);

(statearr_50364_51011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48856__auto__ = null;
var cljs$core$async$state_machine__48856__auto____0 = (function (){
var statearr_50365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50365[(0)] = cljs$core$async$state_machine__48856__auto__);

(statearr_50365[(1)] = (1));

return statearr_50365;
});
var cljs$core$async$state_machine__48856__auto____1 = (function (state_50338){
while(true){
var ret_value__48857__auto__ = (function (){try{while(true){
var result__48858__auto__ = switch__48855__auto__(state_50338);
if(cljs.core.keyword_identical_QMARK_(result__48858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48858__auto__;
}
break;
}
}catch (e50366){var ex__48859__auto__ = e50366;
var statearr_50367_51012 = state_50338;
(statearr_50367_51012[(2)] = ex__48859__auto__);


if(cljs.core.seq((state_50338[(4)]))){
var statearr_50368_51013 = state_50338;
(statearr_50368_51013[(1)] = cljs.core.first((state_50338[(4)])));

} else {
throw ex__48859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51014 = state_50338;
state_50338 = G__51014;
continue;
} else {
return ret_value__48857__auto__;
}
break;
}
});
cljs$core$async$state_machine__48856__auto__ = function(state_50338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48856__auto____1.call(this,state_50338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48856__auto____0;
cljs$core$async$state_machine__48856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48856__auto____1;
return cljs$core$async$state_machine__48856__auto__;
})()
})();
var state__48889__auto__ = (function (){var statearr_50369 = f__48888__auto__();
(statearr_50369[(6)] = c__48887__auto___50979);

return statearr_50369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48889__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
