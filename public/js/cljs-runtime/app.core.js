goog.provide('app.core');
app.core.body = (function app$core$body(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),app.header.header(),app.feature.feature(),app.smartJackpots.smartJ(),app.designedby.designed(),app.whyus.whyus(),app.ultimatefeature.uFeature(),app.pricing.pricing(),app.testimonila.testmonila()], null);
});
/**
 * Render the toplevel component for this app.
 */
app.core.render = (function app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.body], null),document.getElementById("app"));
});
app.core.main = (function app$core$main(){
return app.core.render();
});

//# sourceMappingURL=app.core.js.map
