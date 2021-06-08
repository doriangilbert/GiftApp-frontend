//core
import React from 'react';
import { Text, View } from 'react-native';

//style
import style from '../Style';

export default class AjoutMembreInactif extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text style={{position:'absolute',top:50}}>AjoutMembreInactif</Text>
      </View>
    )
  }
}