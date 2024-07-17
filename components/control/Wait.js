// Wait.js
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {setWait} from '../../redux/events/eventActions';

const Wait = ({comp_id}) => {
  const [wait, setStateWait] = useState(0);
  const events = useSelector(state => state.event);
  const dispatch = useDispatch();

  // Set Wait value for current component
  function handleChange(val) {
    const newValue = parseInt(val);
    setStateWait(newValue);
    const updatedWait = {...events.wait, [comp_id]: newValue};
    dispatch(setWait(updatedWait));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Wait</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={wait.toString()}
          onChangeText={text => handleChange(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{`Wait ${wait} seconds`}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f44336', // Equivalent to bg-red-400
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
    width: 80,
    padding: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d32f2f', // Equivalent to bg-red-600
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

export default Wait;
