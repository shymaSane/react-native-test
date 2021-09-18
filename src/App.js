import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import theme from './styling/themes';

const App = () => {
  return (
    <View style={theme.dark}>
      <Text>this is react native</Text>
    </View>
  );
};

export default App;
