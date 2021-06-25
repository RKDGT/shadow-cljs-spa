(ns app.faq)

(defn faq []
  [:div#FAQ.FAQ
   [:div.why-choose-us-header
    [:h2.why-choose-us-header-title
     "Frequently asked questions"]
    [:p.why-choose-us-header-description
     "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook"]
    [:div.accordion-container 
     [:div#accordion.accordion
      [:div {:class "card mb-0"}
       [:div {:class "card-header collapsed" :data-toggle "collapse" :href "#collapseOne" :id "default-collapse"}
        [:p.card-title "How to contact with riders emergency?"]]
       [:div#collapseOne {:class "card-body collapse" :data-parent "#accordion"}
        [:p.card-body "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."]]
       [:div {:class "card-header collapsed" :data-toggle "cpllapse" :data-parent "#accordion" :href "#collapseTwo"}
        [:p.card-title "App installation failed, how to update system information?"]]
       [:div#collapseTwo {:class "card-body collapse" :data-parent "#accordion"}
        [:p.card-body "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."]]
       [:div {:class "card-header collapsed" :data-toggle "cpllapse" :data-parent "#accordion" :href "#collapseThree"}
        [:p.card-title " Website reponse taking time, how to improve?"]]
       [:div#collapseThree {:class "card-body collapse" :data-parent "#accordion"}
        [:p.card-body "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."]]
       [:div {:class "card-header collapsed" :data-toggle "cpllapse" :data-parent "#accordion" :href "#collapseFoure"}
        [:p.card-title "New update fixed all bug and issues"]]
       [:div#collapseFoure {:class "card-body collapse" :data-parent "#accordion"}
        [:p.card-body "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."]]
       [:div {:class "card-header collapsed" :data-toggle "cpllapse" :data-parent "#accordion" :href "#collapseFive"}
        [:p.card-title "How to contact with riders emergency?"]]
       [:div#collapseFive {:class "card-body collapse" :data-parent "#accordion"}
        [:p.card-body "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."]]]]]]])