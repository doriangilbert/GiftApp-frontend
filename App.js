//memo https://www.youtube.com/watch?v=Y7rbJRjaYCY

// Core https://reactnative.dev/docs/
import React from 'react';
import { } from 'react-native';

//navigation https://reactnavigation.org/docs/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//style
import style from './style';

//views 
import Page_initiale from './views/Page_initiale';
import Inscription from './views/Inscription';
import Connexion from './views/Connexion';
import Accueil from './views/Acceuil';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function InitialTabs(){
  return(
      <Stack.Navigator initialRouteName="Page initiale">
        <Stack.Screen name="Page initiale" component={Page_initiale} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />     
      </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Acceuil" component={Accueil} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <InitialTabs />
    </NavigationContainer>
  );
}
