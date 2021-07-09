//core

import { Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomSocial } from '../Components/BottomSocial';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

//style



export default class PageInitiale extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const token = await AsyncStorage.getItem("@token");
        console.log('token: ', token);
        if(token != null)
            this.props.navigation.navigate('BottomTabs');
    }
    render() {
        return (
            <View style={style.view_top}>
                <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
                <Image source={require("../assets/logo_large.png")} style={style.logo} />

                <View style={style.button}>
                    <TouchableOpacity
                        style={style.sign}
                        onPress={() => { this.props.navigation.navigate('Connexion') }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={style.sign}
                        >
                            <Text style={[style.textSign, { color: '#fff' }]}>Connexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={style.button}>
                    <TouchableOpacity
                        style={style.sign}
                        onPress={() => { this.props.navigation.navigate('Inscription') }}
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={style.sign}
                        >
                            <Text style={[style.textSign, { color: '#fff' }]}>Inscription</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <BottomSocial />

            </View>
        )
    }
}

/*
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
*/