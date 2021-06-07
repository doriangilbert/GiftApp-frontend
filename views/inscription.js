//core
import React from 'react';
import { Text, View, Button } from 'react-native';
import { BottomSocial } from '../Components/BottomSocial';

//style
import style, { rose_main } from '../Style';

export default class Inscription extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <View style={style.btn_style}>
          <Button
            title="Valider"
            color={rose_main}
            onPress={() => this.props.navigation.navigate('Page initiale')}
          />
        </View>
        <BottomSocial/>
      </View>
    )
  }
}
