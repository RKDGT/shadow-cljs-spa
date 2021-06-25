(ns app.whyus
  (:require [app.desc-card :refer [dCard]]))

(defn whyus []
  [:<>
   [:div {:class "why-choose-us" :id "why-us"} 
    [:div.why-choose-us-header 
     [:h2.why-choose-us-header-title "Why you should choose our app"]
     [:p.why-choose-us-header-description "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]
     [:div.why-choose-us-cards
      (dCard "incolumn-center" "img/speed.png" "Fast Performance" "#f55767" "Get your blood test delivered at home collect a sample from the news your blood tests")
      (dCard "incolumn-center" "img/prototyping.png" "Prototyping" "#2563ff" "Get your blood test delivered at home collect a sample from the news your blood tests")
      (dCard "incolumn-center" "img/vector.png" "Vector Editing" "#40975f" "Get your blood test delivered at home collect a sample from the news your blood tests")]
     [:div.why-choose-us-cards 
      (dCard "incolumn-center" "img/speed.png" "Fast Performance" "#f55767" "Get your blood test delivered at home collect a sample from the news your blood tests")
      (dCard "incolumn-center" "img/prototyping.png" "Prototyping" "#2563ff" "Get your blood test delivered at home collect a sample from the news your blood tests")
      (dCard "incolumn-center" "img/vector.png" "Vector Editing" "#40975f" "Get your blood test delivered at home collect a sample from the news your blood tests")]]]])