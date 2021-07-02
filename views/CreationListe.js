import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import style from '../Style';

const CreationListe = (props) => {

  return (
    <View style={style.view}>
      <Text style={style.txtChampTexte}>Nom de la liste</Text>
      <TextInput
          placeholder="Entrer le nom de la liste"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("Listes")}}>
        <FontAwesome name="check" size={60} />
      </Pressable>
    </View>
  )
}

export default CreationListe;

{/*
const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  mainphoto: {
    width: 150,
    height: 150, 
    marginBottom: 20
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
*/}