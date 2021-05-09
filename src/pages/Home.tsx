/*
Teemu Näsänen, 1903750
Intro Mobile App 2021
*/
// Importing components and icons for the Home page 
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { camera, locate, person, pin, podium } from 'ionicons/icons';
import React from 'react';
// Importing css stylesheet for Home
import './Home.css';

// Page example with dummy data. Build with IonCard components
const Home: React.FC = () => {
  // Toast for buttons
  const [present] = useIonToast();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard color="dark">
          <IonCardHeader><h4>Welcome to your TeamApp!</h4></IonCardHeader>
        </IonCard>
        <IonCard color="dark">
          <IonCardHeader>
            <IonItem>
              <IonAvatar><IonIcon icon={person} size="large" /></IonAvatar>
              <IonLabel>Johny Fast</IonLabel><IonButton fill="outline" slot="end" onClick={() => present('Sorry, not working in version 1.0', 2500)}><IonIcon icon={camera} /></IonButton></IonItem>
          </IonCardHeader>
          <IonCardContent>
            Your personal stats and events
          <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>Practise</IonLabel>
              <IonButton fill="outline" slot="end" onClick={() => present('Sorry, not working in version 1.0', 2500)}>View</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon icon={locate} slot="start" />
              <IonLabel>Match</IonLabel>
              <IonButton fill="outline" slot="end" onClick={() => present('Sorry, not working in version 1.0', 2500)}>View</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon icon={podium} slot="start" />
              <IonLabel>Goals</IonLabel>
              <IonButton fill="outline" slot="end" onClick={() => present('Sorry, not working in version 1.0', 2500)}>View</IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard color="dark">
          <IonCardHeader>News</IonCardHeader>
          <IonCardContent>
            <p>3 new players joined this week</p>
            <p>2 practises an 1 match added</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
