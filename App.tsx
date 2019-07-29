import React from 'react';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Home } from './src/components/home/home.component';
import { Navigation } from './src/components/shared/navigation/navigation.component';
import { ScrollView, StyleSheet } from 'react-native';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <Navigation title='NY Times' />
      <Home />
    </ScrollView>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  applicationWrapper: {
    height: '100vh',
    width: '100wv'
  }
});
export default App;
