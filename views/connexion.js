//core
import React from 'react';
import { Text, View, Button, Image  } from 'react-native';
import { BottomSocial } from '../Components/BottomSocial';

//style
import style from '../Style';
import {rose_main} from '../Style'

export default class Connexion extends React.Component {
  render() {
    return (
      <View style={style.view}>
<<<<<<< HEAD
        <Image source={require("../assets/logo_large.png")} style={style.logo} />
        <Text>Connexion</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Acceuil')}
        />
=======

        <View style={style.btn_style}>
          <Button
            title="Valider"
            color={rose_main}
            onPress={() => this.props.navigation.navigate('Accueil')}
          />
        </View>
>>>>>>> daniel

        <BottomSocial/>

      </View>
    )
  }
}
