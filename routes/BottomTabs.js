import React from 'react';
import { } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//views 
import Accueil from '../views/Page_initiale';
import Profil from '../views/Profil';

const Tab = createBottomTabNavigator();

export default class BottomTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Acceuil" component={Accueil} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    );
  }
}