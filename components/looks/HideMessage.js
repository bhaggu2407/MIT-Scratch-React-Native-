// HideMessage.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const HideMessage = ({character, comp_id}) => {
  // Function to hide message
  const displayMessage = () => {
    // Since React Native doesn't manipulate the DOM directly,
    // you would manage visibility through state.
    // For demonstration, we'll use an Alert to simulate action.
    Alert.alert('Action', 'Hide Message triggered for ' + character.active);

    // Example action: In a real app, you would update state to hide elements.
    // You would typically set state to control the visibility of elements.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => displayMessage()}>
        <Text style={styles.buttonText}>Hide Message</Text>
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
    marginVertical: 10,
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

export default connect(mapStateToProps)(HideMessage);
