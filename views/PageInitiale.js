//core
import React from 'react';

import { Text, View, Button, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSocial } from '../Components/BottomSocial';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


//style
import style from '../Style';


export default class PageInitiale extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const token = await AsyncStorage.getItem("@token");
        //console.log('token: ', token);
        if(token != null)
            this.props.navigation.navigate('BottomTabs');
    }
    render() {
        return (
            <View style={style.view}>
                <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
                <Image source={require("../assets/logo_large.png")} style={style.logo} />

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.sign}
                        onPress={() => { this.props.navigation.navigate('Connexion') }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.sign}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Connexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.sign}
                        onPress={() => { this.props.navigation.navigate('Inscription') }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.sign}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Inscription</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <BottomSocial />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: "50%",
        borderRadius: 10,
        marginBottom: 15,
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
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
});
