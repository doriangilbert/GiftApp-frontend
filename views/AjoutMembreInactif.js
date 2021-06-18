//core

import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const AjoutMembreInactif = (props) => {

  return (
    <View style={style.view}>
      <Image style={style.photo}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      <Text style={style.txtChampTexte}>Nom</Text>
      <TextInput
          placeholder="Entrer le nom"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Prénom</Text>
      <TextInput
          placeholder="Entrer le prénom"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Description</Text>
      <TextInput
          placeholder="Entrer la description"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("PersonnesGroupe")}}>
        <FontAwesome name="check" size={60} />
      </Pressable>
    </View>
  )
}

export default AjoutMembreInactif;

const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  photo: {
    width: 150,
    height: 150, 
    marginBottom: 20
  },
  txtChampTexte: {
    marginTop: 15, 
    fontSize: 20
  },
  champTexte: {
    marginBottom: 20
  },
  btnValider: {
    marginTop: 20
  }
};
