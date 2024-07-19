// App.js
// I implemented all the functionality buy when I integrate all the screens together, the draggable sections don’t work and break the styling.
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {
  DndProvider,
  DndProviderProps,
  Draggable,
  Droppable,
} from '@mgcrea/react-native-dnd';
import {GestureHandlerRootView, State} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import DraggableFlatList from 'react-native-draggable-flatlist'; // Replace with a suitable drag-and-drop library for React Native
import Sidebar from './components/SideBar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';

// App Component
function App({complist, update_list}) {
  // Update Lists of Mid Area
  const onDragEnd = result => {
    let element = result.draggableId.split('-')[0];

    const old_list = complist.midAreaLists;
    let source_index = old_list.findIndex(
      x => x.id === result.source.droppableId,
    );
    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1);
      old_list[source_index].comps = comp_list;
    }

    let dest_index = old_list.findIndex(
      x => x.id === result.destination.droppableId,
    );

    if (dest_index > -1) {
      let dest_comp_list = old_list[dest_index].comps;
      dest_comp_list.splice(result.destination.index, 0, `${element}`);

      old_list[dest_index].comps = dest_comp_list;
    }
  };
  console.log(Sidebar);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MIT Scratch Clone</Text>
        <TouchableOpacity
          style={styles.githubButton}
          onPress={() =>
            Linking.openURL(
              'https://github.com/peeyush14goyal/MIT-Scratch-Clone',
            )
          }>
          <Text style={styles.githubText}>GitHub</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <View>
          <Sidebar />
        </View> */}
        <GestureHandlerRootView
          style={{flex: 1, height: 5000, overflow: 'scroll'}}>
          <DndProvider
            onDragEnd={onDragEnd}
            style={{height: 5000, overflow: 'scroll'}}>
            <View style={styles.mainContent}>
              <ScrollView style={styles.SidebarContainer}>
                <Sidebar />
              </ScrollView>
              <View style={styles.midAreaContainer}>
                <MidArea />
              </View>
            </View>
            {/* <View style={styles.previewAreaContainer}>
              <PreviewArea />
            </View> */}
          </DndProvider>
        </GestureHandlerRootView>
        {/* <DraggableFlatList onDragEnd={onDragEnd}>
          <View style={styles.midAreaContainer}>
            <Sidebar />
            <MidArea />
          </View>
          <View style={styles.previewAreaContainer}>
            <PreviewArea />
          </View>
        </DraggableFlatList> */}
      </View>
    </View>
  );
}

// Mapping state to props
const mapStateToProps = state => ({
  complist: state.list,
});

export default connect(mapStateToProps)(App);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2196f3',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  githubButton: {
    padding: 8,
  },
  githubText: {
    color: '#fff',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
    // width: '100%',
    height: 5000,
  },
  SidebarContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 5000,
    overflow: 'scroll',
  },
  midAreaContainer: {
    flex: 1,
    backgroundColor: '#222',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 10,
    marginRight: 8,
    height: 5000,
    // overflow: 'hidden',
  },
  previewAreaContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 10,
    marginLeft: 8,
    overflow: 'scroll',
  },
});
