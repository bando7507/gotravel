/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Discover from './src/screens/Discover';
import ItemElement from './src/screens/ItemElement';



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
          <Stack.Screen 
          name='Discover'
          component={Discover}
          />
          <Stack.Screen 
          name='ItemElement'
          component={ItemElement}
          />

          
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


export default App;
