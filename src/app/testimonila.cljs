(ns app.testimonila
  (:require [app.slider :refer [slider]]))

;; <div className="testimonila" id="testimonila">
;;         <img className="testimonila-picture" src={WorldMap} alt="nothing" />
;;         <div className="testimonila-main-content">
;;           <h2 className="testimonila-main-content-header-title">
;;             Meet Client Satisfaction by using product
;;           </h2>
;;           <p className="testimonila-main-content-header-description">
;;             The rise of mobile devices transforms the way we consume information
;;             entirely and the world's most elevant channels such as Facebook
;;           </p>
;;           <Slider />
;;         </div>
;;       </div>

(defn testmonila []
  [:div.testmonila {:id "testmonila"}
   [:img.testimonila-picture {:src "img/world map.png" :alt "nothing"}]
   [:div.testimonila-main-content
    [:h2.testimonila-main-content-header-title "Meet Client Satisfaction by using product"]
    [:p.testimonila-main-content-header-description "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]
    (slider)
    ]])