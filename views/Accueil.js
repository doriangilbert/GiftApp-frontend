//core

import { Image, StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import style from '../Style';

//style


export default function Accueil(props) {
  
    return (
      <View style={style.view}>
        <StatusBar backgroundColor='#FF8787A2' barStyle="light-content" />
        <View style={[{justifyContent:"flex-end",flexDirection:"row"}]}>
          <View style={{flex:1}}></View>
            <TouchableWithoutFeedback style={{flex:1, flexDirection:"row"}}
              onPress={() => {props.navigation.navigate("Profil")}}
            >
              <Image  style={[style.photo, {flex:1, marginTop:"10%", minWidth: 100, minHeight:100}]}
                      source={require("../assets/photo.png")}
              />
            </TouchableWithoutFeedback>
        </View>
        <Image source={require("../assets/logo_large.png")} style={[style.logo2, {bottom:"2%"}]} />

        <Text style={{fontSize:40, fontWeight:'normal', color:'#D74848'}}>Bienvenue !</Text>

      </View>
    )
}
