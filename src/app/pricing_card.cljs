(ns app.pricing-card)

(defn checkIsFree [isFree]
  [:button.try-for-free-btn (if isFree 
                              "Start free trial"
                              "Subscribe now")])

(defn pricing-card [price per toWhom listWhatInlude isFree otherOptionLinks]
  [:div.pricing-card
   [:div.pricing-card-top
    [:p.pricing-card-top-price-month
     [:span.pricing-card-top-price price] (str "/" per)]
    [:p.text-sub toWhom]]
   [:div.pricing-card-buttom
    (for [x listWhatInlude]
      [:p.text-sub {:key x} x])
    (checkIsFree isFree)
    [:br]
    (for [x otherOptionLinks]
      [:a.link-sub {:href (:link x) :key (:display x)}  (:display x)])
    ]])