import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Page_initale extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
