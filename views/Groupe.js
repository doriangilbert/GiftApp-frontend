//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

const Groupe = (props) => {

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    <View style={style.view}>
      {/* 
          Composant "Text" permettant de rendre un texte
          Nom du groupe
      */}
      <Text style={style.title}>Groupe Haddock</Text>
      {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo de profil du groupe
      */}
      <Image style={style.mainphotoprofil}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>

      {/* 
          Composant "View" caractérisant un bouton
      */}
      <View style={style.button}>
          {/* 
              Composant "TouchableOpacity" similaire au composant "Pressable" qui permet de rendre cliquable les éléments qu'il contient
          */}
          <TouchableOpacity
              style={style.sign}
              onPress={() => { console.log("Membres du groupe appuyé"), props.navigation.navigate("PersonnesGroupe") }}
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
                  <Text style={[style.textSign, { color: '#fff' }]}>Membres du groupe</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>

      <View style={style.button}>
          <TouchableOpacity
              style={style.sign}
              onPress={() => { console.log("Supprimer le groupe appuyé"), props.navigation.navigate("MesGroupes") }}
          >
              <LinearGradient
                  colors={['#FF8787', '#f39a9a']}
                  style={style.sign}
              >
                  <Text style={[style.textSign, { color: '#fff' }]}>Supprimer le groupe</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Groupe;

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