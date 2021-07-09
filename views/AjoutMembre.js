//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

const AjoutMembre = (props) => {

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
      <Pressable onPress={() => {console.log("Ajouter appuyé"), props.navigation.navigate("PersonnesGroupe")}}>
        {/* <Image
          style={[style.confirm, style.flexelement]}
          source={require("../assets/confirm.svg")}
        />*/}
        {/*
          Composant "FontAwesome" (qui n'est pas un composant React Native) permettant d'utiliser le service FontAwesome permettant d'avoir des icones facilement
          Bouton confirmer pour ajouter l'ami au groupe
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
      {/* 
          Composant "View" caractérisant un bouton
          Bouton d'ajout d'un membre inactif
      */}
      <View style={style.button}>
          {/* 
              Composant "TouchableOpacity" similaire au composant "Pressable" qui permet de rendre cliquable les éléments qu'il contient
          */}
          <TouchableOpacity
              style={style.sign}
              onPress={() => { console.log("Membre inactif appuyé"), props.navigation.navigate("AjoutMembreInactif") }}
          >
              {/* 
                  Composant "LinearGradient" permettant de faire un dégradé au bouton
              */}
              <LinearGradient
                  colors={['#FF8787', '#f39a9a']}
                  style={style.sign}
              >
                  {/* 
                      Composant "Text" qui représente le texte du bouton
                  */}
                  <Text style={[style.textSign, { color: '#fff' }]}>Membre inactif</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default AjoutMembre;

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
  champRecherche: {
    marginVertical: 20,
    padding: 10,
    width: "70%",
    borderWidth: 1,
    borderColor: "#D74848",
    borderRadius: 10
  }
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: "50%",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15
    },
    sign: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
});
*/}