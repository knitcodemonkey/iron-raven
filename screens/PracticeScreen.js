import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import Dimensions from 'Dimensions';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import PracticeNotes from './PracticeNotes';

export default class PracticeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
      text: this.props.studentNotes
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.body}>
        <View style={[styles.musicContainer, styles.border]}>
          <Text>This is where the music goes. It is supposed to be a slider with it's own pieces of music, timers, etc.</Text>
        </View>

        <PracticeNotes/>

        <View style={[styles.timeButtonsContainer]}>
          <TouchableHighlight onPress={this.toggleStopwatch}>
            <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
          </TouchableHighlight>

          <Stopwatch start={this.state.stopwatchStart}
                     reset={this.state.stopwatchReset}
                     options={options}
                     getTime={this.getFormattedTime} />

          <TouchableHighlight onPress={this.resetStopwatch}>
            <Text style={{fontSize: 30}}>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: (Dimensions.get('window').width * .45 - 40),
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicContainer: {
    padding: 20,
    height: (Dimensions.get('window').height * .5 - 30),
    width: '100%',
  },
  timeButtonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
