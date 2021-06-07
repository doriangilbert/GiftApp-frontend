//core
import React from 'react';
import { Text, View, Button } from 'react-native';

//style
import style from '../Style';

export default class Profil extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text style={{position:'absolute',top:50}}>Profil</Text>
      </View>
    )
  }
}
