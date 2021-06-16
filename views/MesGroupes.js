//core

import { Image, Pressable, SectionList, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const DATA = [
  {
    index: 0,
    title: "Mes Invitations :",
    data: ["Groupe", "Groupe"]
  },
  {
    index: 1,
    title: "Mes Groupes :",
    data: ["Groupe", "Groupe", "Groupe", "Groupe", "Groupe", "Groupe"]
  }
];

const Item1 = ({ title }) => (
  <View style={style.item}>
    <Pressable onPress={() => console.log("Profil appuyé")} style={style.profil}>
      <Image
        style={[style.photo, style.flexelement]}
        source={require("../assets/photo.png")}
      />
      <Text style={[style.title, style.flexelement]}>{title}</Text>
    </Pressable>
    <Pressable onPress={() => console.log("Confirmer appuyé")}>
      {/* <Image
        style={[style.confirm, style.flexelement]}
        source={require("../assets/confirm.svg")}
      />*/}
      <FontAwesome name="check" size={35} style={style.flexelement} />
    </Pressable>
    <Pressable onPress={() => console.log("Annuler appuyé")}>
      {/* <Image
        style={[style.cancel, style.flexelement]}
        source={require("../assets/cancel.svg")}
      /> */}
      <FontAwesome name="times" size={35} style={style.flexelement} />
    </Pressable>
  </View>
);

const Item = ({ title }) => (
  <View style={style.item}>
    <Pressable onPress={() => console.log("Profil appuyé")} style={style.profil}>
      <Image
          style={[style.photo, style.flexelement]}
          source={require("../assets/photo.png")}
      />
      <Text style={[style.title, style.flexelement]}>{title}</Text>
    </Pressable>
  </View>
);
export default class MesGroupes extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Pressable onPress={() => console.log("Créer un groupe appuyé")} style={style.btnCreerGroupe}>
          <Text style={style.txtBtnCreerGroupe}>{"Créer un groupe"}</Text>
        </Pressable>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ section, item }) => {
            if (section.index === 0) {
              return <Item1 title={item} />
            }
            else {
              return <Item title={item} />
            }
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={style.header}>{title}</Text>
          )}
        />
      </View>
    )
  }
}

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
  },
  cancel: {
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
  btnCreerGroupe: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: "10%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF8787",
    margin: 5,
    width: "55%"
  },
  txtBtnCreerGroupe: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF",
    width: "100%",
    textAlign: "center"
  }
};
