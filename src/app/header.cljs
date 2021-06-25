(ns app.header
  (:require [reagent.core :as r]
            [app.button :refer [button]]))

(def open-hambg (r/atom false))

(defn open-hambg->change-state []
  (reset! open-hambg (not @open-hambg)))

(defn right-nav []
  [:<>
   [:div {:class (str "hambg " (if (= @open-hambg true)
                                 "show"
                                 ""))
          :on-click open-hambg->change-state}
    [:div.bar1]
    [:div.bar2]
    [:div.bar3]]
   [:div {:class (str "nav-items " (if (= @open-hambg true)
                                     "show"
                                     ""))}
    [:a {:href "#header-main"} "Home"]
    [:a {:href "#feature"} "Key Features"]
    [:a {:href "#why-us"} "Why us"]
    [:a {:href "#pricing"} "Pricing"]
    [:a {:href "#testimonila"} "Testimonial"]
    [:a {:href "#FAQ"} "FAQ"]]])

(defn logo []
  [:a.logo {:href "#header-main"} "Lab"])

(defn navbar []
  [:nav.navbar
   (logo)
   (right-nav)])

(defn header []
  [:header.header
   [:div.header-content
    (navbar)
    [:div.header-main
     [:div.header-main-text
      [:p.header-main-text-1-editiors-choice
       [:i {:class "far fa-check-circle"}] "#1 Editiors Choice App of 2020"]
      [:p.header-main-text-best-app-for "Best app for your modern lifestyle"]
      [:p.text-sub " Increase productivity with a simple to-do app, app for managing your personal budgets."]
      [:div.header-main-text-buttons 
       (button "Try for free")
       [:a {:href "#"} "Watch demo video"]]]
     [:img.header-main-phone-pict {:src "../img/phone-header.png" 
                                   :alt "nothing"}]]]])