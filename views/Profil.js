//core
import React from 'react';

import { Text, View, Image, TouchableOpacity, Button, StyleSheet, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

//style
import style from '../Style';


export default class Profil extends React.Component {
    render() {
        return (
            <View style={style.view}>

                <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
                <Image style={[style.photo, { height: 200, marginTop: "15%" }]}
                    source={require("../assets/photo.png")}
                />


                <Text style={style.nom_prenom_M}> Dupond Dupond</Text>


                <Text style={style.desc_profil}>“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”</Text>


                <Text style={style.mail}>duponddupont@gmail.com</Text>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.sign}
                        onPress={() => { this.props.navigation.navigate('EditProfil') }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.sign}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Editer mon profil</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.sign}
                        onPress={() => {
                            document.cookie = "";
                            try {
                                window.location.reload();
                            } catch (e) {
                                console.error(e);
                            }
                        }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.sign}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Déconnexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.sign}
                        onPress={() => {
                            document.cookie = "";
                            try {
                                window.location.reload();
                            } catch (e) {
                                console.error(e);
                            }
                        }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.sign}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Supprimer mon compte</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
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
        width:"100%",
        textAlign:"center"
    }
});

