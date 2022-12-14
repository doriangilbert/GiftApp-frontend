//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

const ProfilMembre = (props) => {
  /*
  const DATA = [
    {
      index: 0,
      title: "Liste de cadeaux :",
      data: ["Cadeau", "Cadeau", "Cadeau", "Cadeau", "Cadeau", "Cadeau"]
    }
  ];

  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Cadeau appuyé"), props.navigation.navigate("DetailCadeau")}} style={style.itemelement}>
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/gift.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Supprimer appuyé")}}>
        <FontAwesome name="times" size={35} style={style.flexelement} />
      </Pressable>
      <TextInput
          placeholder="XX€"
          style={[style.champParticipation, style.flexelement]}
          autoCapitalize="none"
          keyboardType="numeric"
          onSubmitEditing={() => {console.log("Participation saisie")}}
      />
      <Text style={[style.itemtitle, style.flexelement]}>XX€</Text>
    </View>
  );
  */

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    <View style={style.view}>
      {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo de profil
      */}
      <Image style={style.mainphotoprofil}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      {/* 
          Composant "Text" permettant de rendre un texte
      */}
      <Text style={style.title}>Dupond Dupond</Text>
    </View>
  )
}

export default ProfilMembre;

{/*
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
  mainphotoprofil: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 20
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
  description: {
    color: "#D74848",
    fontSize: 20,
    margin: 20,
    width: "60%"
  },
  champParticipation: {
    marginVertical: 20,
    padding: 10,
    width: "20%",
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