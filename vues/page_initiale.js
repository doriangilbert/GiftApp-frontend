import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Page_initale extends React.Component {

  render() {
    return (
      <View style={styles.view}>
        <Text>Yo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    margin: 20
  }
})