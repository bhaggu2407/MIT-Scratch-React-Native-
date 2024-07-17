// MidArea.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {addList} from '../redux/midarea/actions';
import DraggableFlatList from 'react-native-draggable-flatlist';

// MidArea Component
function MidArea({area_list, add_list, event_values}) {
  // Handle Running the list
  const handleClick = (arr, id) => {
    if (arr.length === 0) return;
    let i = 0;
    let repeat = 1;

    const eventFire = componentId => {
      // Custom event fire logic for React Native if necessary
      // This might involve calling specific functions directly
      console.log(`Event fired for ${componentId}`);
    };

    let intervalId = setInterval(() => {
      if (i === arr.length) {
        clearInterval(intervalId);
      }

      if (arr[i] === 'WAIT') {
        setTimeout(() => {
          i++;
        }, event_values.wait[`comp${arr[i]}-${id}-${i}`] * 1000);
      } else if (arr[i] === 'REPEAT') {
        repeat *= event_values.repeat[`comp${arr[i]}-${id}-${i}`] + 1;
        i++;
      } else {
        eventFire(`comp${arr[i]}-${id}-${i}`);
        i++;
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mid Area</Text>
        <Button title="Add List" onPress={() => add_list()} />
      </View>
      {area_list.midAreaLists.map(l => (
        <View key={l.id} style={styles.listContainer}>
          <Text style={styles.listTitle}>List ID: {l.id}</Text>
          <DraggableFlatList
            data={l.comps}
            renderItem={({item, index, drag}) => (
              <TouchableOpacity
                style={styles.item}
                onLongPress={drag}
                onPress={() => handleClick(l.comps, l.id)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            onDragEnd={({data}) => {
              // Update state with new order if needed
            }}
          />
        </View>
      ))}
    </View>
  );
}

// Mapping state to props
const mapStateToProps = state => ({
  area_list: state.list,
  event_values: state.event,
});

const mapDispatchToProps = dispatch => ({
  add_list: () => dispatch(addList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MidArea);

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
