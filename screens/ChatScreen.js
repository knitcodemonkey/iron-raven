import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  };

  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}