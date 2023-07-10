/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {gql, useQuery} from 'urql';

const STORIES_QUERY = gql`
  query AllStories {
    stories {
      id
      title
      author
      summary
    }
  }
`;

export const HomeScreen = () => {
  const [{data, error, fetching}] = useQuery({query: STORIES_QUERY});
  console.log(data);
  console.log(error);
  if (fetching) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={{color: 'red'}}>ERROR</Text>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <FlatList
            data={data.stories}
            renderItem={({item}) => (
              <>
                <Text style={{color: 'white'}}>{item.title}</Text>
                <View style={{padding: 10}} />
                <Text style={{color: 'white'}}>{item.author}</Text>
                <View style={{padding: 10}} />
                <Text style={{color: 'white'}}>{item.summary}</Text>
                <View style={{padding: 10}} />
              </>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});
