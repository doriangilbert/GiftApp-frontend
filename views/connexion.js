import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Connexion = (props) => {

    const [data, setData] = React.useState({
        email: '',
        mdp: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    // Vérif email
    const textInputChange = (val) => {
        if(val.length !== 0) {
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

    const updateSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
        <View style={styles.header}>
            <Image source={require("../assets/logo_large.png")} style={styles.logo} />
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user-o"
                    size={25}
                    color="#05375a"
                />
                <TextInput
                    placeholder="Entrer votre email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn"
                >
                    <FontAwesome5
                        name="check-circle"
                        size={20}
                        color="green"
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {marginTop: 35}]}>Mot de Passe</Text>
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
                    onChangeText={(val) => handlePasswordChange(val)}
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

            <View style={styles.button}>
                <LinearGradient
                    colors={['#FF8787','#f39a9a']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {color:'#fff'}]}>Se connecter</Text>
                </LinearGradient>

                <TouchableOpacity
                    onPress={() => {props.navigation.navigate('Inscription')}}
                    style={[styles.signIn, {borderColor:'#FF8787A2', borderWidth:1, marginTop:15}]}
                >
                    <Text style={[styles.textSign, {color:'#FF8787A2'}]}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    )
}

export default Connexion;

export const styles = StyleSheet.create({
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
        paddingVertical: 30
    },
    logo:{
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
    signIn: {
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
