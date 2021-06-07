//core
import React from 'react';
import { TextInput } from 'react-native';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons'; 

//style
import style from '../Style';

export default class EditProfil extends React.Component {
  render() {
    return (
      <View style={style.view}>

        <Image  style={[style.photo, {height:150, marginTop:"15%"}]}  
            source={require("../assets/photo.png")} 
        />

        <TextInput
          placeholder="Nom"
          
        />
        <TextInput
          placeholder="Prénom"
          
        />
        <TextInput
          placeholder="Adresse Mail"
          
        />
        <TextInput
          placeholder="Mot de Passe"
          
        />
        <TextInput
          placeholder="Description Profil"
          
        />

        <TouchableOpacity style={style.btn_profil}>
          <FontAwesome name="check" size={60} color="black" style={{flex:1}}/>
        </TouchableOpacity>

      </View>
    )
  }
}