/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
