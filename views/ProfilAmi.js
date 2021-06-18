//core

import { Image, Pressable, Text, View } from 'react-native';

import React from 'react';

//style

//import style from '../Style';

const ProfilAmi = (props) => {

  return (
    <View style={style.view}>
      <Image style={style.photo}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      <Text style={style.title}>Capitaine Haddock</Text>
      <Text style={style.description}>“Tonnerre de Brest ! Mille millions de mille sabords !”</Text>
      <Pressable onPress={() => {console.log("Supprimer de mes amis appuyé"), props.navigation.navigate("Amis")}} style={style.bouton}>
        <Text style={style.txtBouton}>{"Supprimer de mes amis"}</Text>
      </Pressable>
    </View>
  )
}

export default ProfilAmi;

const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  title: {
    color: "#D74848",
    fontSize: 30,
    marginBottom: 5
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
  description: {
    color: "#D74848",
    fontSize: 20,
    margin: 20,
    width: "60%"
  }
};
