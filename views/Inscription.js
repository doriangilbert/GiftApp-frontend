import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { createIconSetFromFontello } from 'react-native-vector-icons';


const Inscription = (props) => {

    let [state, setState] = React.useState({
        nom: null,
        prenom: null,
        email: null,
        mdp: null,
        confirmMdp: null
    });


    const [data, setData] = React.useState({
        email: '',
        mdp: '',
        confirm_mdp: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    // Vérif email
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    //Vérif mdp
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            mdp: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_mdp: val
        });
    }

    const updateSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />

            <View style={styles.header}>
                <Image source={require("../assets/logo_large.png")} style={styles.logo} />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Nom</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={25}
                        color="#05375a"
                    />
                    <TextInput
                        placeholder="Entrer votre nom"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(nom) =>
                            setState({
                                ...state,
                                nom: nom
                            })
                        }
                    />
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Prénom</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={25}
                        color="#05375a"
                    />
                    <TextInput
                        placeholder="Entrer votre prénom"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(prenom) =>
                            setState({
                                ...state,
                                prenom: prenom
                            })
                        }
                    />
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
                <View style={styles.action}>
                    <Feather
                        name="mail"
                        size={25}
                        color="#05375a"
                    />
                    <TextInput
                        placeholder="Entrer votre email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(email) => {
                            textInputChange(email);
                            setState({
                                ...state,
                                email: email
                            });
                        }}

                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <FontAwesome5
                                name="check-circle"
                                size={15}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Mot de Passe</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        size={25}
                        color="#05375a"
                    />
                    <TextInput
                        placeholder="Entrer votre mot de passe"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(mdp) => {
                            handlePasswordChange(mdp);
                            setState({
                                ...state,
                                mdp: mdp
                            });
                        }}
                    />
                    <TouchableOpacity
                        onPress={updateSecureEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                size={20}
                                color="grey"
                            />
                            :
                            <Feather
                                name="eye"
                                size={20}
                                color="grey"
                            />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirmation Mot de Passe</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        size={25}
                        color="#05375a"
                    />
                    <TextInput
                        placeholder="Confirmez votre Mot de Passe"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(confirmMdp) => {
                            handleConfirmPasswordChange(confirmMdp);
                            setState({
                                ...state,
                                confirmMdp: confirmMdp
                            });
                        }}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureEntry}
                    >
                        {data.confirm_secureTextEntry ?
                            <Feather
                                name="eye-off"
                                size={20}
                                color="grey"
                            />
                            :
                            <Feather
                                name="eye"
                                size={20}
                                color="grey"
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signUp}
                        onPress={() => {
                            console.log("test envoi", state)
                            const axios = require('axios');
                            const URL = 'http://www.giftapp.fr/GiftApp_Backend/public/api/users';
                            const aucunNull = (
                                state.nom != null &&
                                state.prenom != null &&
                                state.email != null &&
                                state.mdp != null &&
                                state.confirmMdp != null
                            );
                            if (state.mdp == state.confirmMdp && aucunNull) {
                                axios.post(URL, {
                                    "email": state.email,
                                    "password": state.confirmMdp,
                                    "lastName": state.nom,
                                    "firstName": state.prenom
                                }).then((res) => {
                                    console.log(res);
                                    if (res.status == 201)
                                        props.navigation.navigate('PageInitiale');
                                }).catch((err) => {
                                    console.error(err);
                                });

                            } else {
                                console.warn('mdp != confirmMdp OU un element est null');
                            }
                            console.log("fin test envoi");
                        }
                        }
                    >
                        <LinearGradient
                            colors={['#FF8787', '#f39a9a']}
                            style={styles.signUp}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>S'inscrire</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { props.navigation.goBack() }}
                        style={[styles.signUp, { borderColor: '#FF8787A2', borderWidth: 1, marginTop: 15, marginBottom: 25 }]}
                    >
                        <Text style={[styles.textSign, { color: '#FF8787A2' }]}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    )
}

export default Inscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#FF8787A2',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    logo: {
        position: 'relative',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        top: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    /*actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },*/
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    /*errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },*/
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        width: "100%",
        textAlign: "center"
    }
});
