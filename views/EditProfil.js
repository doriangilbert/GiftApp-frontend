//core
import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';
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
        <Text style={{fontSize:25, fontWeight:'normal', color:'#D74848'}}>Changer la photo de profil</Text>

        <Text style={{marginTop: 40, fontSize:20}}>Nom</Text>
            <TextInput
                placeholder="Entrer votre nouveau nom"
                style={{marginBottom:15}}
                autoCapitalize="none"
            />

        <Text style={{marginTop: 15, fontSize:20}}>Prénom</Text>
            <TextInput
                placeholder="Entrer votre nouveau prénom"
                style={{marginBottom:15}}
                autoCapitalize="none"
            />

        <Text style={{marginTop: 15, fontSize:20}}>Description Profil</Text>
            <TextInput
                placeholder="Entrer votre nouvelle description de profil"
                style={{marginBottom:30}}
                autoCapitalize="none"
            />

        <TouchableOpacity style={style.btn_profil} onPress={() => {this.props.navigation.navigate('Profil')}}>
          <FontAwesome name="check" size={60} color="black" style={{flex:1}}/>
        </TouchableOpacity>

      </View>
    )
  }
}
