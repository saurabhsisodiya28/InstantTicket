import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import OnboardingScreen from './OnboardingScreen';
import 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import splashPic from '../assets/splash.png';
import DashboardScreen from './DashboardScreen';
const Stack = createStackNavigator();

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('OnboardScreen'); // Stack Name
  }, 3000);
  return (
    <View
      style={{
        backgroundColor: '#D84F57',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image source={splashPic} style={{width: 250, height: 150}} />
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash_Screen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
        name="OnboardScreen" 
        component={OnboardingScreen}
        options={{
            headerShown: false,
        }}
         />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
