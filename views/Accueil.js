//core
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

//style
import style from '../Style';

export default function Accueil(props) {
    return (
      <View style={style.view}>
        

        <View style={[{justifyContent:"flex-end",flexDirection:"row"}]}>
          <View style={{flex:1}}></View>
            <TouchableWithoutFeedback style={{flex:1, flexDirection:"row"}}
              onPress={() => {props.navigation.navigate("Profil")}}
            >
              <Image  style={[style.photo, {flex:1, marginTop:"10%"}]}  
                      source={require("../assets/photo.png")} 
              />
            </TouchableWithoutFeedback>
        </View>
        <Image source={require("../assets/logo_large.png")} style={[style.logo, {bottom:"4%"}]} />
        

      </View>
    )
}
