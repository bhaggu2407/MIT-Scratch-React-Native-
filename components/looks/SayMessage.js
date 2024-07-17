// SayMessage.js
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

// SayMessage Component
const SayMessage = ({character, comp_id}) => {
  const [state, setState] = useState({
    show_msg: false,
    message: '',
    character_id: '',
  });

  // Display message function
  const displayMessage = () => {
    // This example uses an Alert to simulate message display.
    // In a real app, you might use state to conditionally render a component.
    if (state.show_msg && state.character_id === character.active) {
      setState({...state, show_msg: false});
      Alert.alert('Message', 'Message hidden'); // Simulating hiding message
      return;
    }

    setState({...state, show_msg: true});
    Alert.alert('Message', state.message); // Simulating showing message

    // Example: Resetting message after some delay (if needed)
    setTimeout(() => {
      setState({...state, show_msg: false});
    }, 3000); // Hides message after 3 seconds
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.input}
            value={state.message}
            onChangeText={text => setState({...state, message: text})}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => displayMessage()}>
          <Text style={styles.buttonText}>{`Say ${state.message}`}</Text>
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

export default connect(mapStateToProps)(SayMessage);
