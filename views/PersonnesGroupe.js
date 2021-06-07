//core
import React from 'react';
import { Text, View } from 'react-native';

//style
import style from '../Style';

export default class PersonnesGroupe extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text style={{position:'absolute',top:50}}>PersonnesGroupe</Text>
      </View>
    )
  }
}