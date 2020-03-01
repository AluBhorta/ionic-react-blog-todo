import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonCardSubtitle,
  IonCardTitle,
  IonBadge
} from "@ionic/react";
import "./Tab1.css";
import { add } from "ionicons/icons";
import { Article } from "../models/Models";

const Tab1: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const articleCards = articles.map((article, i) => (
    <IonCard key={i} button={true} href={`/article-detail/${article.id}`}>
      <IonImg src={article.imgUrl}></IonImg>

      <IonCardHeader>
        <IonCardTitle>{article.title}</IonCardTitle>
        <IonCardSubtitle>{article.subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonBadge color="success" slot="start">
          {article.date.getFullYear()}
        </IonBadge>
      </IonCardContent>
    </IonCard>
  ));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Articles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {articleCards}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="tertiary" href="/add-article">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
