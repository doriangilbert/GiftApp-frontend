//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import style from '../Style';

const DetailCadeau = (props) => {

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    <View style={style.view}>
      {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo du cadeau
      */}
      <Image style={style.mainphoto}
          source={require("../assets/gift.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      {/* 
          Composant "Text" permettant de rendre un texte
      */}
      <Text style={style.title}>Casquette de capitaine</Text>
      <Text style={style.text}>https://www.amazon.fr/casquette</Text>
      <Text style={style.text}>XX€</Text>
      <Text style={style.text}>"Superbe casquette de capitaine"</Text>
      {/* 
        Composant "Pressable" permettant de rendre cliquable les composants qu'il contient (méthode onPress exécutée lors d'un clic, dans ce cas on envoie un message dans la console et on redirige vers une autre page) 
        Rend cliquable l'icone
      */}
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("ListeCadeau")}}>
        {/*
          Composant "FontAwesome" (qui n'est pas un composant React Native) permettant d'utiliser le service FontAwesome permettant d'avoir des icones facilement
          Bouton confirmer pour valider la saisie
        */}
        <FontAwesome name="check" size={60} />
      </Pressable>
    </View>
  )
}

export default DetailCadeau;

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
*/}