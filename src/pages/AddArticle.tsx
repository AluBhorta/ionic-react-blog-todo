import React from "react";
import {
  IonInput,
  IonLabel,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonContent,
  IonList,
  IonTextarea,
  IonButtons,
  IonBackButton
} from "@ionic/react";

export const AddArticle: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle slot="start">Add Article</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Subtitle</IonLabel>
            <IonInput />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Image Url</IonLabel>
            <IonInput />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Body</IonLabel>
            <IonTextarea rows={5} cols={20} />
          </IonItem>

          <IonButton color="secondary" expand="block">
            Add
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

/* 
title
subtitle
body
imgUrl
date
*/
