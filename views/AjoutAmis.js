//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, SectionList, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import style from '../Style';

const AjoutAmis = (props) => {

  //Données de la liste récupérées en format JSON
  const DATA = [
    {
      index: 0,
      title: "",
      data: ["Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont"]
    }
  ];
  
  //Composant personnalisé "Item" contenant le rendu d'un item de la liste
  const Item = ({ title }) => (
    //Composant "View" contenant tous les éléments de l'item
    <View style={style.item}>
      {/* 
        Composant "Pressable" permettant de rendre cliquable les composants qu'il contient (méthode onPress exécutée lors d'un clic, dans ce cas on envoie un message dans la console et on redirige vers une autre page) 
        Profil de l'ami
      */}
      <Pressable onPress={() => {console.log("Profil appuyé")}} style={style.itemelement}>
        {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo de Profil de l'ami
        */}
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        {/* 
          Composant "Text" permettant de rendre un texte
          Nom de l'ami
        */}
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
      {/*
        Rend cliquable l'icone
      */}
      <Pressable onPress={() => {console.log("Ajouter appuyé"), props.navigation.navigate("Amis")}}>
        {/* <Image
          style={[style.confirm, style.flexelement]}
          source={require("../assets/confirm.svg")}
        />*/}
        {/*
          Composant "FontAwesome" (qui n'est pas un composant React Native) permettant d'utiliser le service FontAwesome permettant d'avoir des icones facilement
          Bouton confirmer pour ajouter l'ami
        */}
        <FontAwesome name="check" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    <View style={style.view}>
      {/* 
        Composant "TextInput" permettant de rendre un champ de texte
        Barre de recherche
      */}
      <TextInput
          placeholder="Rechercher"
          style={style.champRecherche}
          autoCapitalize="none"
      />
      {/* 
        Composant "SectionList" permettant de rendre une liste sectionnée avec les données récupérées au format JSON
      */}  
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => {
          return <Item title={item} />
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={style.header}>{title}</Text>
        )}
      />
    </View>
  )
}

export default AjoutAmis;

{/*
const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  item: {
    backgroundColor: "transparent",
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    fontSize: 22,
    backgroundColor: "transparent"
  },
  itemtitle: {
    color: "#D74848",
    fontSize: 20
  },
  itemphoto: {
    width: 70,
    height: 70
  },
  confirm: {
    width: 39,
    height: 39
  },
  itemelement: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  flexelement: {
    marginHorizontal: 5
  },
  champRecherche: {
    marginVertical: 20,
    padding: 10,
    width: "70%",
    borderWidth: 1, 
    borderColor: "#D74848",
    borderRadius: 10
  }
};
*/}