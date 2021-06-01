import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {AccueilStackScreen} from './Navigation';

//views 
import Accueil from '../views/Accueil';
import Profil from '../views/Profil';

const Tab = createBottomTabNavigator();

export default function BottomTabs()  {
  
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/*<Tab.Screen name="Groupes" component={Navigation} />*/}
          <Tab.Screen name="Accueil" component={AccueilStackScreen} />
          {/*<Tab.Screen name="Amis" component={Navigation} />*/}
        </Tab.Navigator>
      </NavigationContainer>
    );
 
}