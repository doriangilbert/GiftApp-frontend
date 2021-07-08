//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import style from '../Style';

const EditProfil = (props) => {

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    <View style={style.view}>
      {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo de profil
      */}
      <Image style={style.mainphoto}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      {/* 
          Composant "Text" permettant de rendre un texte
          Nom du champ de texte
      */}
      <Text style={style.txtChampTexte}>Nom</Text>
      {/* 
        Composant "TextInput" permettant de rendre un champ de texte
        Champ de texte
      */}
      <TextInput
          placeholder="Entrer le nouveau nom"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Prénom</Text>
      <TextInput
          placeholder="Entrer le nouveau prénom"
          style={style.champTexte}
          autoCapitalize="none"
      />
      <Text style={style.txtChampTexte}>Description</Text>
      <TextInput
          placeholder="Entrer la nouvelle description"
          style={style.champTexte}
          autoCapitalize="none"
      />
      {/* 
        Composant "Pressable" permettant de rendre cliquable les composants qu'il contient (méthode onPress exécutée lors d'un clic, dans ce cas on envoie un message dans la console et on redirige vers une autre page) 
        Rend cliquable l'icone
      */}
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("Profil")}}>
        {/*
          Composant "FontAwesome" (qui n'est pas un composant React Native) permettant d'utiliser le service FontAwesome permettant d'avoir des icones facilement
          Bouton confirmer pour valider la saisie
        */}
        <FontAwesome name="check" size={60} />
      </Pressable>
    </View>
  )
}

export default EditProfil;

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