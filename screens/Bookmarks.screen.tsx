import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
