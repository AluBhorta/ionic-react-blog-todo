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
  IonBadge
} from "@ionic/react";

import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Add Article Page</h1>
              <IonNote>Add `Add new Article Page`</IonNote>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Add Article Detail Page</h1>
              <IonNote>Add Article detail page with all data</IonNote>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Add Article Buttons</h1>
              <IonNote>Add Delete {"&"} Edit button in Articles page</IonNote>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Add About Page</h1>
              <IonNote>Page describing project and link to alubhorta</IonNote>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
