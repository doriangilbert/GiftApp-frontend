import React from 'react';
import { Text, View } from 'react-native';
//views
import Page_initiale from './views/page_initiale';
import Inscription from './views/inscription';
import Connexion from './views/connexion';
import Accueil from './views/acceuil';

export default function App() {
  return (
    <View >
      <Page_initiale/>
    </View>
  );
}
