// Size.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Size Component
const Size = ({character, comp_id}) => {
  const [scale, setScale] = useState(1);

  // To change Size of Sprint
  const changeSize = () => {
    // This function can be used to update the scale of an element in your app
    // For example, you might update a state that affects the element's style
    // In this basic example, we'll just log the scale value
    console.log(`Change size to scale: ${scale}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Size:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={scale.toString()}
          onChangeText={text => setScale(parseFloat(text))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => changeSize()}>
        <Text style={styles.buttonText}>Size {scale}</Text>
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
    backgroundColor: '#8e24aa', // Equivalent to bg-purple-500
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
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-700
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

export default connect(mapStateToProps)(Size);
