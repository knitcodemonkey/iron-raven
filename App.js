import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text>This is where the music goes</Text>
        </View>
        <View style={styles.container}>
          <Text>This is where the text goes</Text>
        </View>
        <View style={styles.container}>
          <Text>This is where the buttons go</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    margin: 20,
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {

  },
});
