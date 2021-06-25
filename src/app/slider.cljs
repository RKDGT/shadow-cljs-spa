(ns app.slider
  (:require [reagent.core :as r]
            [app.slide :refer [slide]]))



;; function Slider() {
;;   const [slides, setSlides] = useState([{}]);

;;   const toNext = () => {
;;     const indexCurrent = slides.findIndex((el) => {
;;       if (el.type !== undefined) {
;;         return el.type === "shown";
;;       }
;;       return -1;
;;     });
;;     if (indexCurrent !== -1) {
;;       slides[indexCurrent].type = "";
;;       if (indexCurrent + 1 < slides.length) {
;;         slides[indexCurrent + 1].type = "shown";
;;       } else {
;;         slides[0].type = "shown";
;;       }
;;       console.log(slides);
;;       setSlides([...slides]);
;;     }
;;   };
;;   const toPrev = () => {
;;     const indexCurrent = slides.findIndex((el) => {
;;       if (el.type !== undefined) {
;;         return el.type === "shown";
;;       }
;;       return -1;
;;     });
;;     if (indexCurrent !== -1) {
;;       slides[indexCurrent].type = "";
;;       if (indexCurrent - 1 > -1) {
;;         slides[indexCurrent - 1].type = "shown";
;;       } else {
;;         slides[slides.length - 1].type = "shown";
;;       }
;;       setSlides([...slides]);
;;     }
;;   };

(defn ->Next []
  (js/console.log "next"))
(defn ->Prev []
  ())

(def slides (r/atom [
      {
        :type "shown"
        :rait "4"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict ""
        :userName "Zoltan Nemeth"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "3"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict ""
        :userName "NoName"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "4"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict ""
        :userName "NoName2"
        :userIncumbency "CEO of Pixler Lab"
      }
      {
        :type ""
        :rait "2"
        :commnetTitle "User friendly & Customizable"
        :commentDescription
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact"
        :userPict ""
        :userName "NoName3"
        :userIncumbency "CEO of Pixler Lab"
      }]))

(defn slider []
  [:div.slider
   [:div.slider-items
    (for [x @slides]
      (slide
       (:type x) 
       (:rait x) 
       (:commnetTitle x) 
       (:commentDescription x) 
       (:userPict x) 
       (:userName x) 
       (:userIncumbency x)
       [->Next]
       [->Prev])
      )]])