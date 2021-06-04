//memo https://www.youtube.com/watch?v=Y7rbJRjaYCY

//Core https://reactnative.dev/docs/
import React from 'react';
import { } from 'react-native';

//navigation https://reactnavigation.org/docs/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//style
import style from './Style';

//Routes 
import { BottomTabs, InitialTabs } from './routes/Navigation';
import { View } from 'react-native';


export default function App() {

  if (false) {
    return (
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    );
  } else {
    return(
    <NavigationContainer>
      <InitialTabs/>
    </NavigationContainer>
    );
  }
}



//API
const axios = require('axios');
const co = require('./co.json');

//App

function connected() {
  console.log("Connexion en cours")
  if (co.id != 0) {
    
    return co.id
  } else {
    let url = 'https://localhost:8000/api/connexion/';
    //let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
    let data = {
      'mail': co.mail,
      'mdp': co.mdp
    };
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    axios.get(url, null, config)
      .then(function (response) {
        console.log(response);
        /*
        if (response.id) {
          co.id = response.id;
          return co.id;
        } else {
          console.error("Erreur connexion");
          return 0;
        }*/
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return 0;
}



