//core
import React from 'react';
import { Text, View, Button, Image  } from 'react-native';
import { BottomSocial } from '../Components/BottomSocial';

//style
import style from '../Style';

export default class Inscription extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Image source={require("../assets/logo_large.png")} style={style.logo} />
        <Text>Inscription</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Page initiale')}
        />
        <BottomSocial/>
      </View>
    )
  }
}
