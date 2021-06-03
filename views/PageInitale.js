//core
import React from 'react';
import { Text, View, Button } from 'react-native';

//style
import style from '../Style';

export default class PageInitale extends React.Component {


  render() {
    return (
      <View style={style.view}>

        

        <View style={style.btn_style}>
          <Button
            color="#FF8787"
            title="Connexion"
            onPress={() => this.props.navigation.navigate('Connexion')}
          />
        </View>

        <View style={style.btn_style}>
          <Button
            color="#FF8787"
            title="Inscription"
            onPress={() => this.props.navigation.navigate('Inscription')}
          />
        </View>
        
      </View>
    )
  }
}
