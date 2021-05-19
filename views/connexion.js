//core
import React from 'react';
import { Text, View, Button } from 'react-native';

//style
import style from '../style';

export default class Connexion extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Connexion</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Acceuil')}
        />
      </View>
    )
  }
}
