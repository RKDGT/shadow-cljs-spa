(ns app.footer)

(defn logo []
  [:a.logo {:href "#header-main"} "Lab"])

(defn footer []
  [:footer.footer
   [:div.footer-header
    [logo]]
   [:div.footer-nav-links
    [:a#header-main "Home"]
    [:a#feature "Feature"]
    [:a#why-us "Why-us"]
    [:a#pricing "Pricing"]
    [:a#testimonila "Testimonila"]
    [:a#FAQ]]
   [:div.footer-sub-links 
    [:a {:href "https://www.facebook.com/"
         :target "_blank"
         :rel "noopener noreferrer"}
     [:i {:class "fab fa-facebook-f fa-x3"}]]
    [:a {:href "https://twitter.com/?lang=uk"
         :target "_blank"
         :rel "noopener noreferrer"}
     [:i {:class "fab fa-twitter fa-x3"}]]
    [:a {:href "https://slack.com/"
         :target "_blank"
         :rel "noopener noreferrer"}
     [:i {:class "fab fa-slack-hash fa-x3"}]]
    [:a {:href "https://github.com/"
         :target "_blank"
         :rel "noopener noreferrer"}
     [:i {:class "fab fa-github-square fa-x3"}]]]])