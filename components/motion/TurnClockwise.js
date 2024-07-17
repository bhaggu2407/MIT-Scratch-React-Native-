// TurnClockWise.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setCharacterAngle} from '../../redux/character/actions';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements'; // Use any icon library you prefer

const TurnClockWise = ({character, characterAngle, comp_id}) => {
  const [angle, setAngle] = useState(0);

  // Handle turn clockwise
  const handleClick = () => {
    const character_angle = character.characters.find(
      x => x.id === character.active,
    );
    if (character_angle) {
      // Perform rotation logic; for now, just log the intended rotation
      console.log(`Rotating character by ${angle} degrees.`);
      characterAngle(character_angle.angle + angle);
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
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Turn</Text>
            <Icon
              name="redo"
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

// Mapping state to props
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

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
