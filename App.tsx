/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import MainNavigator from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import colorModeManager from './src/ context/colorModeManager';
import theme from './src/theme';
import {store} from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
        <FlashMessage position="top" />
        <MainNavigator />
      </NativeBaseProvider>
    </ReduxProvider>
  );
};

export default App;
