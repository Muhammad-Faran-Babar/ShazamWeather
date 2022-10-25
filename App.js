/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {OnBoardingScreen, Home} from './screens/';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'OnBoardingScreen'}>
      <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}/> 
     <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />    
         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
