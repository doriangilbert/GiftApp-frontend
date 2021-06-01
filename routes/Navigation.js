//La gestion de la navigation après avoir été connecté

import 'react-native-gesture-handler'
import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PageInitiale from '../views/PageInitale';
import Inscription from '../views/Inscription';
import Connexion from '../views/Connexion';
import Accueil from '../views/Accueil'
import Profil from '../views/Profil'
import Amis from '../views/Amis'
import MesGroupes from '../views/MesGroupes'
import EditProfil from '../views/EditProfil';
import Parametres from '../views/Parametres';
import AjoutAmis from '../views/AjoutAmis';
import ProfilAmi from '../views/ProfilAmi';
import CreationGroupe from '../views/CreationGroupe';
import Groupe from '../views/Groupe';
import PersonnesGroupe from '../views/PersonnesGroupe';
import AjoutMembre from '../views/AjoutMembre';
import AjoutMembreInactif from '../views/AjoutMembreInactif';
import ProfilMembre from '../views/ProfilMembre';
import DetailCadeau from '../views/DetailCadeau';
import AjoutCadeau from '../views/AjoutCadeau';

const Tab = createBottomTabNavigator();

const AccueilStack = createStackNavigator();
const AmisStack = createStackNavigator();
const GroupeStack = createStackNavigator();
const InitialStack = createStackNavigator();


export const BottomTabs = () => {
    return (

    <Tab.Navigator initialRouteName="Accueil"
        tabBarOptions={{}}
        screenOptions={{}}
    >
        <Tab.Screen name="Groupes" component={GroupeStackScreen} />
        <Tab.Screen name="Accueil" component={AccueilStackScreen} />
        <Tab.Screen name="Amis" component={AmisStackScreen} />
    </Tab.Navigator>

    ); 
}

export const AccueilStackScreen = () => {
    return(
        
        <AccueilStack.Navigator
            initialRouteName="Accueil"
        >

            <AccueilStack.Screen
                name="Accueil"
                component={Accueil}
            />
            
            <AccueilStack.Screen
                name="Profil"
                component={Profil}
            />
            
            <AccueilStack.Screen
                name="EditProfil"
                component={EditProfil}
            />

            <AccueilStack.Screen
                name="Parametres"
                component={Parametres}
            />

        </AccueilStack.Navigator>
    );
}

export const AmisStackScreen = () => {
    return(
        <AmisStack.Navigator
            initialRouteName="Amis"
        >

            <AmisStack.Screen
                name="Amis"
                component={Amis}
            />

            <AmisStack.Screen
                name="AjoutAmis"
                component={AjoutAmis}
            />

            <AmisStack.Screen
                name="ProfilAmi"
                component={ProfilAmi}
            />

        </AmisStack.Navigator>
    );
}

export const GroupeStackScreen = () => {
    return(
        <GroupeStack.Navigator
            initialRouteName="MesGroupes"
        >
            
            <GroupeStack.Screen
                name="MesGroupes"
                component={MesGroupes}
            />

            <GroupeStack.Screen
                name="CreationGroupe"
                component={CreationGroupe}
            />

            <GroupeStack.Screen
                name="Groupe"
                component={Groupe}
            />

            <GroupeStack.Screen
                name="PersonnesGroupe"
                component={PersonnesGroupe}
            />

            <GroupeStack.Screen
                name="AjoutMembre"
                component={AjoutMembre}
            />  

            <GroupeStack.Screen
                name="AjoutMembreInactif"
                component={AjoutMembreInactif}
            />     

            <GroupeStack.Screen
                name="ProfilMembre"
                component={ProfilMembre}
            />   

            <GroupeStack.Screen
                name="DetailCadeau"
                component={DetailCadeau}
            />   

            <GroupeStack.Screen
                name="AjoutCadeau"
                component={AjoutCadeau}
            /> 
            
        </GroupeStack.Navigator>
    );
}

export const InitialTabs = () => {
    return (
        <InitialStack.Navigator initialRouteName="Page initiale">
            <InitialStack.Screen name="Page initiale" component={PageInitiale} />
            <InitialStack.Screen name="Connexion" component={Connexion} />
            <InitialStack.Screen name="Inscription" component={Inscription} />
        </InitialStack.Navigator>
    );
}