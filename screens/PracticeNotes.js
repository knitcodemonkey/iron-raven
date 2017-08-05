import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import Dimensions from 'Dimensions';
import { FormLabel, FormInput, List, ListItem, Button } from 'react-native-elements'

export default class PracticeNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          "name": "Jen",
          "avatar_url": "http://knittingcodemonkey.com/static/media/KnittingCodeMonkey.daf55ea8.jpg",
          "note": "I'm available if you have questions"
        }
      ]  
    }
  };

  addNote(note) {
    let newNote = [{
      "name": this.state.user.name,
      "avatar_url": this.state.user.avatar_url,
      "note": note
    }];

    this.setState({ notes: [...this.state.notes, ...newNote] });
  }

  render() {
    return (
      <View style={[styles.musicNotes, styles.border]}>
        <List>
          {
            this.state.notes.map((l, i) => (
              <ListItem
                roundAvatar
                hideChevron
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.note}
              />
            ))
          }
        </List>

        <FormLabel>Add Note:</FormLabel>
        <FormInput
          onBlur={(note) => this.addNote({note})}
        />
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
  musicNotes: {
    flex: 1,
    marginTop: 20,
    height: (Dimensions.get('window').height * .3 - 30),
    width: '100%',
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
