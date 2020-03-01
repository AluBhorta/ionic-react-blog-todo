import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";

import "./Tab2.css";
import { Todo } from "../models/Models";
import { add } from "ionicons/icons";

const Tab2: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  const todoItems = todos.map(t => (
    <IonItem key={t.id}>
      <IonCheckbox slot="start" checked={t.completed} />
      <IonLabel>
        <IonNote>{t.text}</IonNote>
      </IonLabel>
    </IonItem>
  ));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>{todoItems}</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="tertiary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
