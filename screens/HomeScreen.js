import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
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
