//core

import { Image, Pressable, SectionList, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const PersonnesGroupe = (props) => {

  const DATA = [
    {
      index: 0,
      title: "Membres du groupe :",
      data: ["Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont"]
    }
  ];
  
  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Profil appuyé"), props.navigation.navigate("ProfilMembre")}} style={style.profil}>
        <Image
          style={[style.photo, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        <Text style={[style.title, style.flexelement]}>{title}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Supprimer appuyé")}}>
        {/* <Image
          style={[style.cancel, style.flexelement]}
          source={require("../assets/cancel.svg")}
        /> */}
        <FontAwesome name="times" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );

  return (
    <View style={style.view}>
      <Pressable onPress={() => {console.log("Ajouter un membre appuyé"), props.navigation.navigate("AjoutMembre")}} style={style.bouton}>
        <Text style={style.txtBouton}>{"Ajouter un membre"}</Text>
      </Pressable>
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

export default PersonnesGroupe;

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
  title: {
    color: "#D74848",
    fontSize: 20
  },
  photo: {
    width: 70,
    height: 70
  },
  /*cancel: {
    width: 32,
    height: 32
  },*/
  profil: {
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
  }
};
