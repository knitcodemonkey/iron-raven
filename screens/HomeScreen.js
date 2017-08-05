import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Dimensions from 'Dimensions';

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
        <View style={styles.row}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigate('Practice', { name: 'Jane' })}>
            <Text style={styles.buttonText}>Practice</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigate('Tuner')}>
            <Text style={styles.buttonText}>Tuner</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    width: (Dimensions.get('window').width - 40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: (Dimensions.get('window').width * .5 - 30),
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 40,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30
  }
});
