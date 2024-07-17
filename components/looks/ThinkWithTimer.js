// ThinkWithTimer.js
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ThinkWithTimer Component
const ThinkWithTimer = ({character, comp_id}) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: '',
    timer_for_msg: 0,
  });

  // Display Think Message with Timer
  const displayMessage = () => {
    if (state.show_msg) {
      setState({...state, show_msg: false});
      return;
    }
    setState({...state, show_msg: true});

    setTimeout(() => {
      setState({...state, show_msg: false});
    }, state.timer_for_msg * 1000);
  };

  return (
    <View style={styles.container}>
      {state.show_msg && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{state.timer_message}</Text>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          value={state.timer_message}
          onChangeText={text => {
            if (text.length > 0) {
              setState({...state, timer_message: text});
            }
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Timer:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={state.timer_for_msg.toString()}
          onChangeText={text => {
            const value = parseInt(text, 10);
            if (!isNaN(value) && value > 0) {
              setState({...state, timer_for_msg: value});
            }
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => displayMessage()}>
        <Text style={styles.buttonText}>{`Think ${state.timer_message}`}</Text>
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
  messageContainer: {
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-900
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
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

export default connect(mapStateToProps)(ThinkWithTimer);
