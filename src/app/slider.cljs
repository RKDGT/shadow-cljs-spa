(ns app.slider
  (:require [reagent.core :as r]
            ;; [app.slide :refer [slide]]
            ))


;; img/hz1.png
;; img/hz2.png
;; img/h3.png 
;; img/hz4.png
(def slides (r/atom [
      {
        :type "shown"
        :rait "4"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict "img/hz1.png"
        :userName "Zoltan Nemeth"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "3"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict "img/hz2.png"
        :userName "NoName"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "4"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict "img/h3.png"
        :userName "NoName2"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "2"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict "img/hz4.png"
        :userName "NoName3"
        :userIncumbency "CEO of Pixler Lab"
      }]))

(defn ->Next []
  (let [[first second & rest] @slides]
    (reset! slides (concat [(assoc second :type "shown")] (vec rest) [(assoc first :type "")]))))
(defn ->Prev []
  (reset! slides (concat [(assoc (last @slides) :type "shown") (assoc (first @slides) :type "")] (rest (butlast @slides)))))

(defn starRait [rait]
  (loop [out []
         ->change 0]
    (if (> ->change 4)
      out
      (if (< ->change (js/parseInt rait))
        (recur (conj out [:i {:class "fas fa-star" :style {:color "yellow"} :key ->change}]) (inc ->change))
        (recur (conj out [:i {:class "fas fa-star" :key ->change}]) (inc ->change))))))

(defn slide [{:keys [type rait commnetTitle commentDescription userPict userName userIncumbency]}]
  ^{:key userName}
  [:div {:class (str "slider-item " type)}
   [:div.slider-item-star-rait
    (for [x (starRait rait)]
      x)]
   [:h5.slider-item-header commnetTitle]
   [:p.slider-item-description commentDescription]
   [:div.slider-item-footer
    [:div.slider-item-footer-user
     [:img.slider-item-user-pict {:src userPict :alt "nothing"}]
     [:div.slider-item-user-personal-info
      [:h5.slider-item-user-personal-info-header userName]
      [:p.text-sub userIncumbency]]
     [:div.slider-item-navigation-buttons
      [:button {:class (str "slider-prev-item " type) :on-click ->Prev}
       [:i {:class "fas fa-arrow-left"}]]
      [:hr.vertical]
      [:button {:class (str "slider-next-item " type) :on-click ->Next}
       [:i {:class "fas fa-arrow-right"}]]]]]])
(defn slider []
  [:div.slider
   [:div.slider-items
    (for [x @slides]
      [slide x])]])