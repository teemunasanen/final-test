/*
Teemu Näsänen, 1903750
Intro Mobile App 2021
*/
// Importing components for the Stats page
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonListHeader } from '@ionic/react';
// Importing css stylesheet for Stats
import './Stats.css';

// Page example with dummy data. Build with IonList components

const Stats: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className="league">
          <IonListHeader><h2>League</h2></IonListHeader>
          <IonItem>
            <IonLabel>Barcelona</IonLabel>
            <IonLabel slot="end">56</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Real Madrid</IonLabel>
            <IonLabel slot="end">52</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>HJK</IonLabel>
            <IonLabel slot="end">51</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Manchester United</IonLabel>
            <IonLabel slot="end">46</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Newcastle</IonLabel>
            <IonLabel slot="end">42</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Liverpool</IonLabel>
            <IonLabel slot="end">41</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Juventus</IonLabel>
            <IonLabel slot="end">40</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>PSG</IonLabel>
            <IonLabel slot="end">35</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>VPS</IonLabel>
            <IonLabel slot="end">34</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Bayern Munchen</IonLabel>
            <IonLabel slot="end">25</IonLabel>
          </IonItem>
        </IonList>
        <IonList className="scorers">
          <IonListHeader><h2>Top Scorers</h2></IonListHeader>
          <IonItem>
            <IonLabel>Ronaldo</IonLabel>
            <IonLabel slot="end">24</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Firmino</IonLabel>
            <IonLabel slot="end">20</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Riski</IonLabel>
            <IonLabel slot="end">17</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fernandes</IonLabel>
            <IonLabel slot="end">16</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Greenwood</IonLabel>
            <IonLabel slot="end">15</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Salah</IonLabel>
            <IonLabel slot="end">14</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Lewandowski</IonLabel>
            <IonLabel slot="end">12</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stats;
