//core
import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { BottomSocial } from '../Components/BottomSocial';

//style
import style from '../Style';

export default class PageInitale extends React.Component {


  render() {
    return (
      <View style={style.view}>
          
            <Image source={require("../assets/logo_large.png")} style={style.logo} />

            <View style={style.btn_style}>
              <Button
                color="#FF8787"
                title="Connexion"
                onPress={() => this.props.navigation.navigate('Connexion')}
              />
            </View>

            <View style={style.btn_style}>
              <Button
                style={{}}
                color="#FF8787"
                title="Inscription"
                onPress={() => this.props.navigation.navigate('Inscription')}
              />
            </View>
          
        <BottomSocial/>

      </View>
    )
  }
}
