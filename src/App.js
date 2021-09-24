import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import theme from './styling/themes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={theme.dark}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#000000',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
