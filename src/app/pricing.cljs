(ns app.pricing
  [:require [app.tab :refer [tab]]])

(defn pricing []
  [:div {:id "pricing"}
   [:h2.why-choose-us-header-title "Get awesome features, without extra charges"]
   [:p.why-choose-us-header-description "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]
   (tab)])