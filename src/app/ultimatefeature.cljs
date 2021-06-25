(ns app.ultimatefeature
  (:require [app.descCard :refer [dCard]]
            [app.button :refer [button]]))

(defn uFeature []
  [:div.ultimate-features-that-we-built
   [:div.ultimate-features-that-we-built-text
    [:p.ultimate-features-that-we-built-text-header "Ultimate features that we built"]
    [:p.ultimate-features-that-we-built-text-sub "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."]
    [:br]
    [:div.why-choose-us-cards
     (dCard "incolumn-left" "img/speed.png" "Fast Performance" "black" "Get your blood test delivered at home collect a sample from the news your blood tests")
     (dCard "incolumn-left" "img/prototyping.png" "Prototyping" "black" "Get your blood test delivered at home collect a sample from the news your blood tests")]
    [:div.why-choose-us-cards
     (dCard "incolumn-left" "img/speed.png" "Fast Performance" "black" "Get your blood test delivered at home collect a sample from the news your blood tests")
     (dCard "incolumn-left" "img/prototyping.png" "Prototyping" "black" "Get your blood test delivered at home collect a sample from the news your blood tests")]
    (button "See-all")]
   [:img.ultimate-features-that-we-built-phone {:src "img/Phone copy 4.png" :alt "nothing"}]])