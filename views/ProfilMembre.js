//core

import { Image, Pressable, SectionList, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const ProfilMembre = (props) => {

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

  return (
    <View style={style.view}>
      <Image style={style.photo}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>
      <Text style={style.title}>Capitaine Haddock</Text>
      <Text style={style.description}>“Tonnerre de Brest ! Mille millions de mille sabords !”</Text>
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
      <Pressable style={style.btnValider} onPress={() => {console.log("Valider appuyé"), props.navigation.navigate("AjoutCadeau")}}>
        <FontAwesome name="plus-circle" size={60} />
      </Pressable>
    </View>
  )
}

export default ProfilMembre;

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
  photo: {
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
