import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Connexion extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Connexion</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Acceuil')}
        />
      </View>
    )
  }
}
