// Core https://reactnative.dev/docs/
import React from 'react';
import { } from 'react-native';

//navigation https://reactnavigation.org/docs/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//views 
import Page_initiale from './views/page_initiale';
import Inscription from './views/inscription';
import Connexion from './views/connexion';
import Accueil from './views/acceuil';

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
      <Tab.Screen name="Page initiale" component={Page_initiale} />
      <Tab.Screen name="Acceuil" component={Accueil} />
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
