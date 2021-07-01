import { Image, Pressable, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

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
      <Pressable onPress={() => {console.log("Profil appuyé")}} style={style.itemelement}>
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
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
      <View style={style.button}>
          <TouchableOpacity
              style={style.sign}
              onPress={() => { console.log("Ajouter un membre inactif appuyé"), props.navigation.navigate("AjoutMembreInactif") }}
          >
              <LinearGradient
                  colors={['#FF8787', '#f39a9a']}
                  style={style.sign}
              >
                  <Text style={[style.textSign, { color: '#fff' }]}>Ajouter un membre inactif</Text>
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