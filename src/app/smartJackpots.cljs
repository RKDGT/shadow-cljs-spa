(ns app.smartJackpots
  (:require [app.desc-card :refer [dCard]]))

(defn smartJ []
  [:div.smart-jackpot
   [:div.smart-jackpot-header 
    [:p.smart-jackpot-header-title "Smart jackpots that you may love this anytime & anywhere"]
    [:p.smart-jackpot-header-description "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]]
   [:div.smart-jackpot-cards
    (dCard "incolumn-left" "img/speed.png" "Fast Performance" "#f55767" "Get your blood test delivered at home collect a sample from the news your blood tests")
    (dCard "incolumn-left" "img/prototyping.png" "Prototyping" "#2563ff" "Get your blood test delivered at home collect a sample from the news your blood tests")
    (dCard "incolumn-left" "img/vector.png" "Vector Editing" "#40975f" "Get your blood test delivered at home collect a sample from the news your blood tests")]])