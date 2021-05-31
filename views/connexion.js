//core

import { Button, Text, View } from "react-native";

import React from "react";
import style from "../style";

//style


export default class Connexion extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Connexion</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate("Acceuil")}
        />
      </View>
    );
  }
}
