import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bookOutline, list, information, informationCircle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* pages */
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import { AddArticle } from "./pages/AddArticle";
import { ArticleDetail } from "./pages/ArticleDetail";

/* state */
import { MyAppState } from "./State";
import { About } from "./pages/About";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path="/tab1"
            component={() => <Tab1 articles={MyAppState.articles} />}
            exact={true}
          />
          <Route
            path="/add-article"
            component={() => <AddArticle />}
            exact={true}
          />
          <Route
            path="/article-detail/:id"
            component={(props: any) => {
              const _id = +props.match.params.id;
              const article = MyAppState.articles.find(a => a.id === _id);

              if (!article) {
                throw Error(`Error! No article found with id: ${_id}!`);
              }

              return <ArticleDetail article={article} />;
            }}
            exact={true}
          />
          <Route
            path="/tab2"
            component={() => <Tab2 todos={MyAppState.todos} />}
            exact={true}
          />
          <Route
            path="/about"
            component={About}
            exact={true}
          />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color="tertiary">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={bookOutline} />
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={list} />
          </IonTabButton>
          
          <IonTabButton tab="tab3" href="/about">
            <IonIcon icon={informationCircle} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
