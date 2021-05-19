import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Connexion extends React.Component {

  render() {
    return (
      <View style={styles.view}>
        <Text>Connexion</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    margin: 20
  }
})