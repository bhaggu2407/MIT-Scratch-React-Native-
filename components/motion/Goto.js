// GotoXY.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const GotoXY = ({character, comp_id}) => {
  const [state, setState] = useState({
    goto_x: 0,
    goto_y: 0,
  });

  // Go to position X and Y
  const gotoXY = () => {
    // In React Native, you won't be manipulating the DOM directly.
    // Instead, you should handle positioning with style updates.
    console.log(`Moving to X: ${state.goto_x}, Y: ${state.goto_y}`);
    // You should apply these coordinates to the relevant component.
    // For example, update a position in the state that controls a component's style.
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>X</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={state.goto_x.toString()}
            onChangeText={text => {
              const x = parseInt(text, 10);
              if (!isNaN(x)) {
                setState(prevState => ({...prevState, goto_x: x}));
              }
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Y</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={state.goto_y.toString()}
            onChangeText={text => {
              const y = parseInt(text, 10);
              if (!isNaN(y)) {
                setState(prevState => ({...prevState, goto_y: y}));
              }
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={gotoXY}>
          <Text style={styles.buttonText}>
            Go to X: {state.goto_x} Y: {state.goto_y}
          </Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
  innerContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    width: 80,
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  button: {
    backgroundColor: '#0056b3',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default connect(mapStateToProps)(GotoXY);
