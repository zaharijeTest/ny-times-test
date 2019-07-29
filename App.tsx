import React from 'react';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Home } from './src/components/home/home.component';
import { Navigation } from './src/components/shared/navigation/navigation.component';
import { ScrollView, StyleSheet } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <I18nextProvider i18n={i18n}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <Navigation title='NY Times' />
        <Home />
      </ScrollView>
    </I18nextProvider>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  applicationWrapper: {
    height: '100vh',
    width: '100wv'
  }
});
export default App;
