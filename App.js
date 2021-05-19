//memo https://www.youtube.com/watch?v=Y7rbJRjaYCY

// Core https://reactnative.dev/docs/
import React from 'react';
import {  } from 'react-native';

//navigation https://reactnavigation.org/docs/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//style
import style from './style';

//Routes 
import InitialTabs from './routes/InitialTabs';
import BottomTabs from './routes/BottomTabs';


//App

export default function App() {
  if (true) {
      return (
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      );
  } else {
    return (
      <NavigationContainer>
        <InitialTabs />
      </NavigationContainer>
    );
  }
}
