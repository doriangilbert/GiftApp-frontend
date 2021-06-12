//core

import { Button, Image, Pressable, SectionList, Text, View } from 'react-native';

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
      <Image
        style={[style.confirm, style.flexelement]}
        source={require("../assets/confirm.svg")}
      />
    </Pressable>
    <Pressable onPress={() => console.log("Annuler appuyé")}>
      <Image
        style={[style.cancel, style.flexelement]}
        source={require("../assets/cancel.svg")}
      />
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

        <Button
          onPress={() => console.log("Créer un groupe appuyé")} //Remplacer le composant "Button" par un "Pressable" car plus modulable et donne le même rendu sur Android ou iOS https://docs.expo.io/ui-programming/react-native-styling-buttons/
          title="Créer un groupe"
          color="#FF8787"
          accessibilityLabel="Créer un groupe"
        />

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
    backgroundColor: "#FEFCF3",
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    backgroundColor: "#FEFCF3"
  },
  title: {
    color: "#D74848",
    fontSize: 24
  },
  photo: {
    width: 75,
    height: 75
  },
  confirm: {
    width: 39,
    height: 39
  },
  cancel: {
    width: 32,
    height: 32
  },
  profil: {
    backgroundColor: "#FEFCF3",
    flexDirection: "row",
    alignItems: "center"
  },
  flexelement: {
    marginHorizontal: 10
  },
  btnCreerGroupe: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF8787",
    margin: 5
  },
  txtBtnCreerGroupe: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF"
  }
};
