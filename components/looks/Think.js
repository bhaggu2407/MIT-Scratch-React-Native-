// ThinkMessage.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ThinkMessage Component
const ThinkMessage = ({character, comp_id}) => {
  const [state, setState] = useState({
    show_msg: false,
    message: '',
    character_id: '',
  });

  /* Display Think Message */
  const displayMessage = () => {
    // Simulate DOM manipulation with state
    if (state.show_msg && state.character_id === character.active) {
      setState({...state, show_msg: false});
      return;
    }
    setState({...state, show_msg: true});
    // Note: Handling actual display logic based on state changes
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          value={state.message}
          onChangeText={text => {
            if (text.length > 0) {
              setState({...state, message: text});
            }
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => displayMessage()}>
        <Text style={styles.buttonText}>{`Think ${state.message}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Mapping state to component
const mapStateToProps = state => {
  return {
    character: state.character,
  };
};

// Styling
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4a148c', // Equivalent to bg-purple-700
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: '#fff',
    width: 120,
    padding: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-900
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default connect(mapStateToProps)(ThinkMessage);
