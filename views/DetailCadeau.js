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
      <Text style={style.title}>Casquette de capitaine</Text>
      <Text style={style.text}>https://www.amazon.fr/casquette</Text>
      <Text style={style.text}>XX€</Text>
      <Text style={style.text}>"Superbe casquette de capitaine"</Text>
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("ListeCadeau")}}>
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
  text: {
    color: "#D74848",
    fontSize: 20,
    margin: 30
  },
  btnValider: {
    marginTop: 20
  }
};
