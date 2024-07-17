// Move.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Move Component for Sidebar
const Move = ({character, comp_id}) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving the Sprint
  const handleClick = () => {
    // In React Native, you would handle movement using state or layout properties
    // Here's a simple way to achieve movement by changing the position of a component:
    // Note: This is a simplified example and might need adjustments based on the actual layout and requirements.

    // Simulate movement (you may need to use more sophisticated approaches based on your layout)
    // This example assumes that you will handle actual movement with a state or animation.
    // You can use Animated API for smooth transitions.
    console.log(`Moving ${character.active} by ${steps} steps`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.text}>Move X</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={steps.toString()}
          onChangeText={text => setSteps(parseInt(text, 10))}
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

export default connect(mapStateToProps)(Move);
