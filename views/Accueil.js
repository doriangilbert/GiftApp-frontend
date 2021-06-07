//core
import React from 'react';
import { Text, View, Image } from 'react-native';

//style
import style from '../Style';

export default function Accueil(props) {
    return (
      <View style={style.view}>
        <Text style={{position:'absolute',top:50}}>Accueil</Text>
        
        <Image source={require("../assets/logo_large.png")} style={style.logo} />

      </View>
    )
}
