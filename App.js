//memo https://www.youtube.com/watch?v=Y7rbJRjaYCY

// Core https://reactnative.dev/docs/

import {} from "react-native";
import "react-native-gesture-handler";

import Accueil from "./views/Acceuil";
import Connexion from "./views/Connexion";
import Inscription from "./views/Inscription";
import { NavigationContainer } from "@react-navigation/native";
import Page_initiale from "./views/Page_initiale";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import style from "./style";

//navigation https://reactnavigation.org/docs/

//style

//views

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function InitialTabs() {
  return (
    <Stack.Navigator initialRouteName="Page initiale">
      <Stack.Screen name="Page initiale" component={Page_initiale} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Acceuil" component={Accueil} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Acceuil" component={Accueil} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <InitialTabs />
    </NavigationContainer>
  );
}
