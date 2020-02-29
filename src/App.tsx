import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, bookOutline, settings, list } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";

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
import { Article } from "./models/Models";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path="/tab1"
            component={() => <Tab1 articles={articles} />}
            exact={true}
          />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color="tertiary">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={bookOutline} />
            {/* <IonLabel>Articles</IonLabel> */}
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={list} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

const articles: Article[] = [
  {
    title: "candid photo 101",
    subtitle: "you think this is a game?",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",
    imgUrl: `https://cnet1.cbsistatic.com/img/s2nbDz9k8s8kqY3sEycxg_KGXj0=/1092x0/2019/12/02/8b898eba-189c-4fe9-b6f6-c9dfe0dd81bf/orangecat.jpg`,
    date: new Date(2019, 9, 11)
  },
  {
    title: "Big boi",
    subtitle: "kome at me vro",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo ",
    imgUrl:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg",
    date: new Date(2015, 4, 1)
  },
  {
    title: "Rawr!",
    subtitle: "the nauty kitty",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque! \n quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",
    imgUrl:
      "https://static.techspot.com/images2/news/bigimage/2019/12/2019-12-23-image.jpg",
    date: new Date(2012, 2, 31)
  }
];
