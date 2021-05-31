//core
import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'

//style
import style from '../style';

export default class Accueil extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Accueil</Text>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
        </Card>
      </View>
    )
  }
}
