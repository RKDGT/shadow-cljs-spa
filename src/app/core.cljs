(ns app.core
  (:require [reagent.dom :as rdom]
            [app.header :refer [header]]
            [app.feature :refer [feature]]
            [app.smartJackpots :refer [smartJ]]
            [app.designedby :refer [designed]]
            [app.whyus :refer [whyus]]
            [app.ultimatefeature :refer [uFeature]]
            [app.pricing :refer [pricing]]
            [app.testimonila :refer [testmonila]]
            [app.faq :refer [faq]]
            [app.footer :refer [footer]]))

(defn body []
  [:<>
   [header]
   [feature]
   [smartJ]
   [designed]
   [whyus]
   [uFeature]
   [pricing]
   [testmonila]
   [faq]
   [footer]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [body]
               (.getElementById js/document "app")))

(defn main []
  (render))