//core
import React from 'react';
import { Text, View, Button } from 'react-native';

//style
import style from '../Style';

export default class Page_initale extends React.Component {


  render() {
    return (
      <View style={style.view}>
        <Text>Page Initiale</Text>
        <Button
          title="Connexion"
          onPress={() => this.props.navigation.navigate('Connexion')}
        />
        <Button
          title="Inscription"
          onPress={() => this.props.navigation.navigate('Inscription')}
        />
      </View>
    )
  }
}
