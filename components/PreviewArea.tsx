import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PreviewArea = () => {
  return (
    <View style={styles.previewArea}>
      <Text>PreviewArea Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  previewArea: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
});

export default PreviewArea;
