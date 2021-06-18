//core

import { Image, Pressable, SectionList, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const AjoutMembre = (props) => {

  const DATA = [
    {
      index: 0,
      title: "",
      data: ["Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont"]
    }
  ];
  
  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Profil appuyé")}} style={style.profil}>
        <Image
          style={[style.photo, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        <Text style={[style.title, style.flexelement]}>{title}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Ajouter appuyé"), props.navigation.navigate("PersonnesGroupe")}}>
        {/* <Image
          style={[style.confirm, style.flexelement]}
          source={require("../assets/confirm.svg")}
        />*/}
        <FontAwesome name="check" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );

  return (
    <View style={style.view}>
      <TextInput
          placeholder="Rechercher"
          style={style.champRecherche}
          autoCapitalize="none"
      />
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
      <Pressable onPress={() => {console.log("Ajouter un membre inactif appuyé"), props.navigation.navigate("AjoutMembreInactif")}} style={style.bouton}>
        <Text style={style.txtBouton}>{"Ajouter un membre inactif"}</Text>
      </Pressable>
    </View>
  )
}

export default AjoutMembre;

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
  /*confirm: {
    width: 39,
    height: 39
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
