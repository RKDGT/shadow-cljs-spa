(ns app.desc-card)

(defn dCard [class picture header header-color description]
  [:div {:class class :style {:color header-color}}
   [:img {:class (str class "-img") :src picture :alt "nothing"}]
   [:div {:class (str class "-text")}
    [:h5.header-sub header]
    [:p.text-sub description]]])