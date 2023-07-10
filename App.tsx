import React from 'react';
import {Client, Provider, cacheExchange, fetchExchange} from 'urql';
import 'core-js/full/symbol/async-iterator';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './screens/Root.Navigator';

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

const App = () => (
  <Provider value={client}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
