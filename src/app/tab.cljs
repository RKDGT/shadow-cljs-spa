(ns app.tab
  (:require [reagent.core :as r]
            [app.pricingCard :refer [pricingCard]]))

(def display (r/atom "Monthly"))
(defn change->Month []
  (reset! display "Monthly"))
(defn change->Annul []
  (reset! display "Annually"))
(defn tab []
  [:<>
   [:div.tab
    [:button {:class (str "tablinks" (if (= @display "Monthly")
                                       " active"
                                       ""))
              :on-click change->Month} "Monthly"]
    [:button {:class (str "tablinks" (if (= @display "Annually")
                                       " active"
                                       "")) 
              :on-click change->Annul} "Annually"]]
   [:div.tabcontent {:id "Monthly" :style {:display (if (= @display "Monthly")
                                                      "block"
                                                      "none")}}
    [:div.pricing-cards
     (pricingCard
      "$0"
      "month"
      "For small teams or office"
      ["Drag & Drop Builder"
       "1,000's of Templates"
       "Blog Support Tools"
       "eCommerce Store"
       "Start free trial"]
      true
      [])
     (pricingCard
      "$99"
      "month"
      "For small teams or office"
      ["Drag & Drop Builder"
       "1,000's of Templates"
       "Blog Support Tools"
       "eCommerce Store"
       "Start free trial"]
      true
      [{:link "#"
        :display "Or Start 14 days trial"}])]]
   [:div.tabcontent {:id "Annualy" :style {:display (if (= @display "Annually")
                                                      "block"
                                                      "none")}}
    [:div.pricing-cards
     (pricingCard
      "Hz what must be here"
      "annualy"
      "For small teams or office"
      ["Drag & Drop Builder"
       "1,000's of Templates"
       "Blog Support Tools"
       "eCommerce Store"
       "Start free trial"]
      true
      [{:link "#"
        :display "Or Start 14 days trial"}])
     (pricingCard
      "Hz what must be here"
      "annually"
      "For small teams or office"
      ["Drag & Drop Builder"
       "1,000's of Templates"
       "Blog Support Tools"
       "eCommerce Store"
       "Start free trial"]
      true
      [])]]])