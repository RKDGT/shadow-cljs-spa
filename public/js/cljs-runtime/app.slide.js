goog.provide('app.slide');
app.slide.starRait = (function app$slide$starRait(rait){
var out = cljs.core.PersistentVector.EMPTY;
var __GT_change = (0);
while(true){
if((__GT_change > (4))){
return out;
} else {
if((__GT_change < parseInt(rait))){
var G__46478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-star",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null)], null));
var G__46479 = (__GT_change + (1));
out = G__46478;
__GT_change = G__46479;
continue;
} else {
var G__46480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-star"], null)], null));
var G__46481 = (__GT_change + (1));
out = G__46480;
__GT_change = G__46481;
continue;
}
}
break;
}
});
app.slide.slide = (function app$slide$slide(type,rait,commnetTitle,commentDescription,userPict,userName,userIncumbency,__GT_Next,__GT_Prev){
console.log(type);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-star-rait","div.slider-item-star-rait",-1589326198),app.slide.starRait(rait)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.slider-item-header","h5.slider-item-header",635198951),commnetTitle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.slider-item-description","p.slider-item-description",-376808046),commentDescription], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-footer","div.slider-item-footer",-338054009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-footer-user","div.slider-item-footer-user",390865855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.slider-item-user-pict","img.slider-item-user-pict",2028143580),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),userPict,new cljs.core.Keyword(null,"alt","alt",-3214426),"nothing"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-user-personal-info","div.slider-item-user-personal-info",1233818742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.slider-item-user-personal-info-header","h5.slider-item-user-personal-info-header",-162649604),userName], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sub","p.text-sub",1132199043),userIncumbency], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-navigation-buttons","div.slider-item-navigation-buttons",-1325014538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-prev-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),__GT_Next], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-arrow-left"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.vertical","hr.vertical",2129675977)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-next-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),__GT_Prev], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-arrow-right"], null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=app.slide.js.map
