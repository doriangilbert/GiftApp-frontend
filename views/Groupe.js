//core

import { Image, Pressable, Text, View } from 'react-native';

import React from 'react';

//style

//import style from '../Style';

const Groupe = (props) => {

  return (
    <View style={style.view}>
      <Text style={style.title}>Groupe Haddock</Text>
      <Image style={style.photo}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      <Pressable onPress={() => {console.log("Membres du groupe appuyé"), props.navigation.navigate("PersonnesGroupe")}} style={style.bouton}>
        <Text style={style.txtBouton}>{"Membres du groupe"}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Supprimer le groupe appuyé"), props.navigation.navigate("MesGroupes")}} style={style.bouton}>
        <Text style={style.txtBouton}>{"Supprimer le groupe"}</Text>
      </Pressable>
    </View>
  )
}

export default Groupe;

const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  title: {
    color: "#D74848",
    fontSize: 30
  },
  photo: {
    width: 150,
    height: 150, 
    marginTop: 30,
    marginBottom: 20
  },
  bouton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: "10%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF8787",
    margin: 10,
    width: "55%"
  },
  txtBouton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF",
    width: "100%",
    textAlign: "center"
  },
};
