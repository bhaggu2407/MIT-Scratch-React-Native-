// BroadcastMessage.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const BroadcastMessage = ({comp_id}) => {
  const [message, setMessage] = useState('');

  /* Display Snackbar */
  const handleClick = () => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: '#f57f17', // Customize color if needed
      textColor: '#ffffff', // Customize text color if needed
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.buttonText}>{`Broadcast ${message}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffeb3b', // Equivalent to bg-yellow-400
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
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
    width: 200,
    padding: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f57f17', // Equivalent to bg-yellow-600
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

export default BroadcastMessage;
