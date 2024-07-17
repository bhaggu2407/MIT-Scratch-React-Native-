// MoveY.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// MoveY Component for Sidebar
const MoveY = ({character, comp_id}) => {
  const [steps, setSteps] = useState(0);

  // Function to simulate movement in Y direction
  const handleClick = () => {
    // In React Native, use state or animations to handle movement
    // This example assumes a basic simulation and logging.
    console.log(`Moving ${character.active} by ${steps} steps in Y direction`);
    // To actually move a component, you would use state and animated properties.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.text}>Move Y</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={steps.toString()}
          onChangeText={text => setSteps(parseInt(text, 10) || 0)}
        />
        <Text style={styles.text}>steps</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
  button: {
    backgroundColor: '#007bff', // Replace with desired color
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    width: 80,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default connect(mapStateToProps)(MoveY);
