/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';


function App(): JSX.Element {
const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          />
        </Stack.Navigator>
        {/* <SafeAreaView className="flex-1 items-center justify-center">
          <Text className="text-red-600">COUCdOxsU</Text>
        </SafeAreaView> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}


export default App;
