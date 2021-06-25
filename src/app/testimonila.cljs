(ns app.testimonila
  (:require [app.slider :refer [slider]]))

(defn testmonila []
  [:div.testimonila {:id "testmonila"}
   [:img.testimonila-picture {:src "img/world map.png" :alt "nothing"}]
   [:div.testimonila-main-content
    [:h2.testimonila-main-content-header-title "Meet Client Satisfaction by using product"]
    [:p.testimonila-main-content-header-description "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]
    (slider)
    ]])