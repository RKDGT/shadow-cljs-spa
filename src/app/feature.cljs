(ns app.feature
  (:require [app.descCard :refer [dCard]]))

(defn feature []
  [:<> 
   [:div {:class "feature" :id "feature"}
    [:p.top-header "Trusted companies like"]
    [:div.top-trusted-companies
     [:img {:src "img/9.png" :alt "nothing"}]
     [:img {:src "img/Group 44.png" :alt "nothing"}]
     [:img {:src "img/Group 56.png" :alt "nothing"}]
     [:img {:src "img/Group 57.png" :alt "nothing"}]
     [:img {:src "img/Group 86.png" :alt "nothing"}]]]
   [:div.feature-content
    [:img.feature-phone {:src "img/feature-phone.png" :alt "nothing"}]
    [:div.feature-text
     [:p.feature-text-header "Awasome apps feature"]
     [:p.text-sub "Increase productivity with a simple to-do app, app for managing your personal budgets."]
     [:br]
     (dCard "inline-left" "img/speed.png" "Fast Performance" "#f55767" "Get your blood test delivered at home collect a sample from the news your blood tests")
     (dCard "inline-left" "img/prototyping.png" "Prototyping" "#2563ff" "Get your blood test delivered at home collect a sample from the news your blood tests")
     (dCard "inline-left" "img/vector.png" "Vector Editing" "#40975f" "Get your blood test delivered at home collect a sample from the news your blood tests")]]])