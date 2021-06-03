//core

import { Button, Image, SectionList, Text, View } from 'react-native';

import React from 'react';

//style

//import style from '../Style';

const DATA = [
  {
    title: "Mes Invitations :",
    data: ["Groupe", "Groupe"]
  },
  {
    title: "Mes Groupes :",
    data: ["Groupe", "Groupe", "Groupe", "Groupe", "Groupe", "Groupe"]
  }
];

const Item = ({ title }) => (
  <View style={style.item}>
    <Image
      style={style.photo}
      source={{
        uri: require("../assets/photo.png"),
      }}
    />
    <Text style={style.title}>{title}</Text>
    <Image
      style={style.validation}
      source={{
        uri: require("../assets/check-solid.svg"),
      }}
    />
    <Image
      style={style.validation}
      source={{
        uri: require("../assets/times-solid.svg"),
      }}
    />
  </View>
);
export default class MesGroupes extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Button
          onPress={console.log("Créer un groupe appuyé")}
          title="Créer un groupe"
          color="#FF8787"
          accessibilityLabel="Créer un groupe"
        />
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
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
    backgroundColor: "#FEFCF3"
  },
  item: {
    backgroundColor: "#FEFCF3",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row"
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
  validation: {
    width: 64,
    height: 64
  }
};