import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './screens/authStack/Signup';
import Login from './screens/authStack/Login';
import Home from './screens/appStack/Home';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {apolloClient} from './apollo/client';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
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
      </Provider>
    </ApolloProvider>
  );
};

export default App;
