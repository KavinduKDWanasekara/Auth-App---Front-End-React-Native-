import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './app/src/views/screens/SignInScreen';
import SignUpScreen from './app/src/views/screens/SignUpScreen';
import RecordScreen from './app/src/views/screens/RecordScreen';

const Stack = createStackNavigator();

const App  = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header:()=>null}}>
        <Stack.Screen name="Home" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Record" component={RecordScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
