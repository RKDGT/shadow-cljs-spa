(ns app.designedby
  [:require [app.button :refer [button]]])

(defn designed []
  [:div.designed-built-by 
   [:img.designed-built-by-img {:src "img/design-and-build.png" :alt "nothing"}]
   [:div.designed-built-by-text 
    [:p.feature-text-header "Designed & built by the latest code integration"]
    [:p.smart-jackpot-header-description "The rise of mobile devices transforms the way we consume information entirely and te world's most elevant channels such as Facebook"]
    (button "Learn more")]])