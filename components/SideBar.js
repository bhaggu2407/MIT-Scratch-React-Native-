// Sidebar.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist'; // Importing the draggable list component
import {getComponent} from './getComponents';
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from './SidebarConstants';

const Sidebar = () => {
  // Function to render draggable list items
  const renderItem = ({item, index, drag, isActive}) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        {backgroundColor: isActive ? '#e0e0e0' : '#ffffff'},
      ]}
      onLongPress={drag}>
      {getComponent(item)}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Side Bar</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Motion */}
        <Text style={styles.sectionHeader}>Motion</Text>
        <DraggableFlatList
          data={motionComponents}
          renderItem={renderItem}
          keyExtractor={item => `${item}-motion`}
          onDragEnd={({data}) => {
            // Handle drag end logic if needed
          }}
          style={styles.list}
        />

        {/* Looks */}
        <Text style={styles.sectionHeader}>Looks</Text>
        <DraggableFlatList
          data={looksComponents}
          renderItem={renderItem}
          keyExtractor={item => `${item}-looks`}
          onDragEnd={({data}) => {
            // Handle drag end logic if needed
          }}
          style={styles.list}
        />

        {/* Control */}
        <Text style={styles.sectionHeader}>Control</Text>
        <DraggableFlatList
          data={controlComponents}
          renderItem={renderItem}
          keyExtractor={item => `${item}-control`}
          onDragEnd={({data}) => {
            // Handle drag end logic if needed
          }}
          style={styles.list}
        />

        {/* Events */}
        <Text style={styles.sectionHeader}>Events</Text>
        <DraggableFlatList
          data={eventsComponents}
          renderItem={renderItem}
          keyExtractor={item => `${item}-events`}
          onDragEnd={({data}) => {
            // Handle drag end logic if needed
          }}
          style={styles.list}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default Sidebar;
