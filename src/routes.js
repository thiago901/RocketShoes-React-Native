import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Basket from './components/BasketComponent';
import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

function Routes() {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerBackTitle: false,
            headerLeft: () => <Header navigation={navigation} />,
            headerRight: () => <Basket navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerBackTitle: false,
            headerLeft: () => <Header navigation={navigation} />,
            headerRight: () => <Basket navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </>
  );
}

export default Routes;
