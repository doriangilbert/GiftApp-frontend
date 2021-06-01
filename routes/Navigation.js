//La gestion de la navigation après avoir été connecté

import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from '../views/Accueil'
import Profil from '../views/Profil'
import Amis from '../views/Amis'
import Mes_groupes from '../views/Mes_groupes'

const AccueilStack = createStackNavigator();

export function AccueilStackScreen(){
    return(
        
        <AccueilStack.Navigator
            initialRouteName="Accueil"
        >

            <AccueilStack.Screen
                name="Accueil"
                component={Accueil}
            />
            {/*
            <AccueilStack.Screen
                name="Profil"
                component={Profil}
            />

                <AccueilStack.Screen
                name="Amis"
                component={Amis}
            />

            <AccueilStack.Screen
                name="Mes_groupes"
                component={Mes_groupes}
            /> */}

        </AccueilStack.Navigator>
    );
}

