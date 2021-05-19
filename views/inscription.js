//core
import React from 'react';
import { Text, View, Button } from 'react-native';

//style
import style from '../style';

export default class Inscription extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Inscription</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Page initiale')}
        />
      </View>
    )
  }
}
