// Show.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

// Show Component
const Show = ({character, comp_id}) => {
  // To handle show component
  const handleDisplay = () => {
    // Simulate showing a message by using Alert
    Alert.alert('Show', `Showing element with id: ${character.active}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleDisplay()}>
        <Text style={styles.buttonText}>Show</Text>
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

// Styling
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#6a1b9a', // Equivalent to bg-purple-700
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default connect(mapStateToProps)(Show);
