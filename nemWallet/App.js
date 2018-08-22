import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Nem Walle </Text>
        <Text> CryptoUFM  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20b5ac',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});
