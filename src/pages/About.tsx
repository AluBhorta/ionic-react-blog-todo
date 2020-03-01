import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonText,
  IonCardContent,
  IonFooter,
  IonIcon
} from "@ionic/react";
import {
  heart,
} from "ionicons/icons";

export const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle slot="start">About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Ionic React Blog Todo</IonCardTitle>
            <IonCardSubtitle>
              <p>
              Cross Mobile Platform and Progressive Web App (PWA) built using
              Ionic and React.
              </p>
              <p>
                Thought I should do either a Blog or a Todo App. Ended up doing both :v
              </p>
            </IonCardSubtitle>
          </IonCardHeader>

          <IonGrid>
            <IonRow>
              <IonCol size="4" offset="4">
                <IonImg src="https://avatars1.githubusercontent.com/u/37705070?s=460&v=4" />
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonCardContent>
            
              <p>If you want an <IonText color="danger">Awsome App</IonText> too,</p>
              <p>
                Contact me:{" "}
                <a href="mailto:business4dous@gmail.com">
                  business4dous@gmail.com
                </a>
              </p>
            
            <IonFooter>
              <h3>
                Made with <IonIcon icon={heart} /> by{" "}
                <a href="https://github.com/AluBhorta">Alubhorta</a>{" "}
                {new Date().getFullYear().toString()} &copy;.
              </h3>
            </IonFooter>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
