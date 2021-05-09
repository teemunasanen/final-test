/*
Teemu Näsänen, 1903750
Intro Mobile App 2021
*/
// importing components for the Events page
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonLabel, IonCol, IonButton, useIonToast, IonListHeader } from '@ionic/react';
import React from 'react';
// Events css stylesheet
import './Events.css';

// Page example with dummy data. Build with IonGrid, Row and Column components

const Events: React.FC = () => {
  // Toast for buttons
  const [present] = useIonToast();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonListHeader><h2>Practices</h2></IonListHeader>
          <IonRow>
            <IonCol>
              <IonRow><IonLabel>Monday 10.5.2021</IonLabel></IonRow>
              <IonRow><IonLabel>17:00</IonLabel></IonRow>
              <IonRow><IonLabel>Helsinki</IonLabel></IonRow></IonCol>
            <IonCol >
              <IonButton className="inButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>IN</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="outButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>OUT</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRow><IonLabel>Thursday 13.5.2021</IonLabel></IonRow>
              <IonRow><IonLabel>19:00</IonLabel></IonRow>
              <IonRow><IonLabel>Helsinki</IonLabel></IonRow></IonCol>
            <IonCol >
              <IonButton className="inButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>IN</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="outButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>OUT</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRow><IonLabel>Friday 14.5.2021</IonLabel></IonRow>
              <IonRow><IonLabel>18:30</IonLabel></IonRow>
              <IonRow><IonLabel>Helsinki</IonLabel></IonRow></IonCol>
            <IonCol >
              <IonButton className="inButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>IN</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="outButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>OUT</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonGrid>
          <IonListHeader><h2>Matches</h2></IonListHeader>
          <IonRow>
            <IonCol>
              <IonRow><IonLabel>Saturday 15.5.2021</IonLabel></IonRow>
              <IonRow><IonLabel>12:00</IonLabel></IonRow>
              <IonRow><IonLabel>Vantaa</IonLabel></IonRow></IonCol>
            <IonCol >
              <IonButton className="inButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>IN</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="outButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>OUT</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRow><IonLabel>Tuesday 18.5.2021</IonLabel></IonRow>
              <IonRow><IonLabel>17:00</IonLabel></IonRow>
              <IonRow><IonLabel>Helsinki</IonLabel></IonRow></IonCol>
            <IonCol >
              <IonButton className="inButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>IN</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="outButton" onClick={() => present('Sorry, not working in version 1.0', 2500)}>OUT</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Events;
