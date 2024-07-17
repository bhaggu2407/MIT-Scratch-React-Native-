// Hide.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Hide = ({character, comp_id}) => {
  // Handle hide component
  const handleDisplay = () => {
    // In React Native, you typically use state to control the visibility of components.
    // For this example, we will use a simple alert to demonstrate the action.
    // You would normally update state to hide a component.
    alert('Hide action triggered for ' + character.active);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleDisplay()}>
        <Text style={styles.buttonText}>Hide</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-700
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default connect(mapStateToProps)(Hide);
