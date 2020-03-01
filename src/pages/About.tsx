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
import { heart } from "ionicons/icons";

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
                Cross Platform Mobile and Progressive Web App (PWA) built using
                Ionic and React.
              </p>
              <p>
                Thought I should either do a Blog or a Todo App. Ended up doing
                both :v
              </p>
            </IonCardSubtitle>
          </IonCardHeader>

          <div style={{ textAlign: "center" }}>
            <img
              width="40px"
              src="https://www.alubhorta.com/assets/alu-logo-600x.png"
              alt="logo"
            />
          </div>

          <IonCardContent>
            <p>
              If you want an <IonText color="danger">Awsome App</IonText> too,
            </p>
            <p>
              Contact me:{" "}
              <a href="mailto:business4dous@gmail.com">
                business4dous@gmail.com
              </a>
            </p>

            <IonFooter>
              <h3>
                Made with <IonIcon icon={heart} /> by{" "}
                <a href="https://github.com/AluBhorta">AluBhorta</a> &copy;
                {" " + new Date().getFullYear().toString()}.
              </h3>
            </IonFooter>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
