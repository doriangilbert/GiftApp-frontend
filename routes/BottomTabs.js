import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//views 
import Accueil from '../views/Accueil';
import Profil from '../views/Profil';

const Tab = createBottomTabNavigator();

export default class BottomTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    );
  }
}