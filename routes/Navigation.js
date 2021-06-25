//La gestion de la navigation après avoir été connecté

import 'react-native-gesture-handler'

import * as React from 'react'

import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from '../views/Accueil'
import AjoutAmis from '../views/AjoutAmis';
import AjoutCadeau from '../views/AjoutCadeau';
import AjoutMembre from '../views/AjoutMembre';
import AjoutMembreInactif from '../views/AjoutMembreInactif';
import Amis from '../views/Amis'
import Connexion from '../views/Connexion';
import CreationGroupe from '../views/CreationGroupe';
import DetailCadeau from '../views/DetailCadeau';
import EditProfil from '../views/EditProfil';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Groupe from '../views/Groupe';
import Inscription from '../views/Inscription';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import MesGroupes from '../views/MesGroupes'
import PageInitiale from '../views/PageInitiale';
import Parametres from '../views/Parametres';
import PersonnesGroupe from '../views/PersonnesGroupe';
import Profil from '../views/Profil'
import ProfilAmi from '../views/ProfilAmi';
import ProfilMembre from '../views/ProfilMembre';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { rose_main } from '../Style';

const Tab = createBottomTabNavigator();

const AccueilStack = createStackNavigator();
const AmisStack = createStackNavigator();
const GroupeStack = createStackNavigator();
const InitialStack = createStackNavigator();
const GlobalStack = createStackNavigator();

export const GlobalNav = () => {
    return(
        <GlobalStack.Navigator initialRouteName="BottomTabs" screenOptions={{headerShown:false}}>
        {/* Changer initialRouteName="InitialTabs" en initialRouteName="BottomTabs" pour ignorer la page de connexion */}
            <GlobalStack.Screen
                name="InitialTabs"
                component={InitialTabs}
            />

            <GlobalStack.Screen
                name="BottomTabs"
                component={BottomTabs}
            />

        </GlobalStack.Navigator>
    )
}

export const BottomTabs = () => {
    return (

    <Tab.Navigator initialRouteName="Accueil"
        tabBarOptions={{showLabel:false, style:{backgroundColor:rose_main, height:60}}}
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name="Groupes" component={GroupeStackScreen} options={{
            tabBarIcon:({focused}) =>(
                <View>
                    <MaterialIcons name="groups" size={40} style={{color:focused?"white":"#D74848"}} />
                </View>
            )
            }}/>
        <Tab.Screen name="Accueil" component={AccueilStackScreen} options={{
            tabBarIcon:({focused}) =>(
                <View>
                    <Entypo name="home" size={33} style={{color:focused?"white":"#D74848"}} />
                </View>
            )
            }}/>
        <Tab.Screen name="Amis" component={AmisStackScreen} options={{
            tabBarIcon:({focused}) =>(
                <View>
                    <FontAwesome5 name="user-friends" size={30} style={{color:focused?"white":"#D74848"}} />
                </View>
            )
            }}/>
    </Tab.Navigator>

    );
}

export const AccueilStackScreen = () => {
    return(

        <AccueilStack.Navigator
            initialRouteName="Accueil"
            screenOptions={{headerShown:false}}
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
            screenOptions={{headerShown:false}}
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
            screenOptions={{headerShown:false}}
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
        <InitialStack.Navigator initialRouteName="PageInitiale" screenOptions={{headerShown:false}}>

            <InitialStack.Screen
                name="PageInitiale"
                component={PageInitiale}
            />

            <InitialStack.Screen
                name="Connexion"
                component={Connexion}
            />

            <InitialStack.Screen
                name="Inscription"
                component={Inscription}
            />

        </InitialStack.Navigator>
    );
}
