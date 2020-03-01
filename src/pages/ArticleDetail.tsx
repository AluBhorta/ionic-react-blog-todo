import React from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon
} from "@ionic/react";
import { Article } from "../models/Models";
import { trash, pencil } from "ionicons/icons";

export const ArticleDetail: React.FC<{ article: Article }> = props => {
  const { article } = props;
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"/>
            </IonButtons>
            <IonTitle slot="start">Article Detail</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonImg src={article.imgUrl}></IonImg>

          <IonCardHeader>
            <IonCardTitle>{article.title}</IonCardTitle>

            <IonToolbar>
              <IonCardSubtitle slot="start">
                <p>{article.subtitle}</p>
                <span>Date: {article.date.toDateString()}</span>
              </IonCardSubtitle>
              <IonButtons slot="end">
                <IonButton fill="outline">
                  Edit <IonIcon icon={pencil} />
                </IonButton>
                <IonButton fill="solid" color="danger">
                  Delete <IonIcon icon={trash} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonCardHeader>

          <IonCardContent>
            <p>{article.body}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
