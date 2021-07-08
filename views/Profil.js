//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

export default class Profil extends React.Component {

    constructor(props) {
        super(props);
    }

    deco = async () => {
        await AsyncStorage.removeItem("@token");
        this.props.navigation.navigate('InitialTabs');
        this.props.navigation.navigate('PageInitiale');
    }

    render() {
        //Fonction return permettant le rendu de la page, il contient le squelette de la page
        return (
            <View style={style.view}>
                {/* 
                    Composant "StatusBar" permettant de personnaliser le style de la barre supérieure du téléphone
                */}
                <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
                {/* 
                    Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
                    Photo de profil
                */}
                <Image style={style.mainphotoprofil}
                    source={require("../assets/photo.png")}
                />

                {/* 
                    Composant "Text" permettant de rendre un texte
                */}
                <Text style={style.title}> Dupond Dupond</Text>


                <Text style={style.description}>“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”</Text>


                <Text style={style.text}>duponddupont@gmail.com</Text>
                
                {/* 
                    Composant "View" caractérisant un bouton
                */}
                <View style={style.button}>
                    {/* 
                        Composant "TouchableOpacity" similaire au composant "Pressable" qui permet de rendre cliquable les éléments qu'il contient
                    */}
                    <TouchableOpacity
                        style={style.sign}
                        onPress={() => { this.props.navigation.navigate('EditProfil') }}
                    >   
                        {/* 
                            Composant "LinearGradient" permettant de faire un dégradé au bouton
                        */}
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={style.sign}
                        >
                            {/* 
                                Composant "Text" qui représente le texte du bouton
                            */}
                            <Text style={[style.textSign, { color: '#fff' }]}>Editer mon profil</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={style.button}>
                    <TouchableOpacity
                        style={[style.sign]}
                        onPress={() => {
                            this.props.navigation.navigate('Listes')
                        }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={style.sign}
                        >
                            <Text style={[style.textSign, { color: '#fff' }]}>Consulter mes listes</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={style.button}>
                    <TouchableOpacity
                        style={style.sign}
                        onPress={this.deco}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={style.sign}
                        >
                            <Text style={[style.textSign, { color: '#fff' }]}>Déconnexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

{/*
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:"#FFFCF3",
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        width: "50%",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15
    },
    sign: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
});
*/}