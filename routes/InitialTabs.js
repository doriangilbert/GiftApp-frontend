import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//views 
import PageInitiale from '../views/PageInitale';
import Inscription from '../views/Inscription';
import Connexion from '../views/Connexion';

const Stack = createStackNavigator();

export default class InitialTabs extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Page initiale">
                <Stack.Screen name="Page initiale" component={PageInitiale} />
                <Stack.Screen name="Connexion" component={Connexion} />
                <Stack.Screen name="Inscription" component={Inscription} />
            </Stack.Navigator>
        );
    }
}
