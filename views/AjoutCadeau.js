//core

import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const AjoutCadeau = (props) => {

  return (
    <View style={style.view}>
      <Image style={style.photo}
          source={require("../assets/gift.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      <Text style={style.title}>Nouveau Cadeau</Text>
      <Text style={style.txtChampTexte}>Nom</Text>
      <TextInput
          placeholder="Entrer le nom du cadeau"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Lien du cadeau</Text>
      <TextInput
          placeholder="Entrer le lien du cadeau"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Prix</Text>
      <TextInput
          placeholder="Entrer le prix du cadeau"
          style={style.champTexte}
          autoCapitalize="none"
          keyboardType="numeric"
      />
      <Text style={style.txtChampTexte}>Description</Text>
      <TextInput
          placeholder="Entrer la description du membre"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("ProfilMembre")}}>
        <FontAwesome name="check" size={60} />
      </Pressable>
    </View>
  )
}

export default AjoutCadeau;

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
  title: {
    color: "#D74848",
    fontSize: 30
  },
  txtChampTexte: {
    color: "#D74848",
    marginTop: 15, 
    fontSize: 20
  },
  champTexte: {
    marginVertical: 10,
    padding: 10,
    width: "70%",
    borderWidth: 1, 
    borderColor: "#D74848",
    borderRadius: 10
  },
  btnValider: {
    marginTop: 20
  }
};
