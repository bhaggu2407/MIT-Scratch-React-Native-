// TurnAntiClockWise.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {setCharacterAngle} from '../../redux/character/actions';
import {Icon} from 'react-native-elements'; // or use any icon library of your choice

const TurnAntiClockWise = ({character, characterAngle, comp_id}) => {
  const [angle, setAngle] = useState(0);

  // Handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const character_angle = character.characters.find(
      x => x.id === character.active,
    );

    if (character_angle) {
      // Example usage of state to adjust rotation
      // You might need to implement rotation logic using React Native's Animated API or other methods
      console.log(`Rotating character by ${anti_angle} degrees.`);
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.grid}>
          <Text style={styles.label}>Rotate By:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={angle.toString()}
            onChangeText={text => setAngle(parseInt(text, 10) || 0)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Turn</Text>
            <Icon
              name="undo"
              type="font-awesome"
              color="#fff"
              containerStyle={styles.icon}
            />
            <Text style={styles.buttonText}>{angle} degrees</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Mapping state to component
const mapStateToProps = state => {
  return {
    character: state.character,
  };
};

// Mapping dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    characterAngle: angle => dispatch(setCharacterAngle(angle)),
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
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    flexDirection: 'row',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
