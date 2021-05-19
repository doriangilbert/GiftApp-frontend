import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Inscription extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inscription</Text>
        <Button
          title="Valider"
          onPress={() => this.props.navigation.navigate('Page initiale')}
        />
      </View>
    )
  }
}
