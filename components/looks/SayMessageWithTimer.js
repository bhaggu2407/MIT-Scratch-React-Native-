// SayMessageWithTimer.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

// SayMessageWithTimer Component
const SayMessageWithTimer = ({character, comp_id}) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: '',
    timer_for_msg: 0,
  });

  // Display message with timer function
  const displayMessage = () => {
    if (state.show_msg) {
      setState({...state, show_msg: false});
      Alert.alert('Message', 'Message hidden'); // Simulating hiding message
      return;
    }

    setState({...state, show_msg: true});
    Alert.alert('Message', state.timer_message); // Simulating showing message

    // Hides the message after the specified time
    setTimeout(() => {
      setState({...state, show_msg: false});
      Alert.alert('Message', 'Message hidden'); // Simulating hiding message
    }, state.timer_for_msg * 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.input}
            value={state.timer_message}
            onChangeText={text => setState({...state, timer_message: text})}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Timer:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={state.timer_for_msg.toString()}
            onChangeText={text => {
              const number = parseInt(text, 10);
              if (!isNaN(number) && number > 0) {
                setState({...state, timer_for_msg: number});
              }
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => displayMessage()}>
          <Text style={styles.buttonText}>{`Say ${state.timer_message}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Mapping state to props
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
  },
  messageContainer: {
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-500
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 5,
    paddingHorizontal: 8,
    width: '70%',
  },
  button: {
    backgroundColor: '#4a0072', // Equivalent to bg-purple-700
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default connect(mapStateToProps)(SayMessageWithTimer);
