//memo https://www.youtube.com/watch?v=Y7rbJRjaYCY

//Core https://reactnative.dev/docs/

import { } from 'react-native';
import 'react-native-gesture-handler';

import { BottomTabs, InitialTabs, GlobalNav } from './routes/Navigation';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import style from './Style';

//navigation https://reactnavigation.org/docs/

//style

//Routes

export default function App() {    
    return (
      <NavigationContainer>
        <GlobalNav/>
      </NavigationContainer>
    )
}

//API
const axios = require('axios');

//App

function connected() {
  /* console.log("cookie : ", document.cookie)
  return document.cookie != ""; */
}
