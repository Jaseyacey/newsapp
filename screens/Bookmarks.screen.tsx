import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
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
