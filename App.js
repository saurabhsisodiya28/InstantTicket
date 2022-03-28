import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import SplashScreen from './Screens/SplashScreen';

export default function App() {
  return (
    
    // <View style={styles.container}>
    //   <Text style={tw`text-red-500 p-10`}>Let's Build Instant Ticket!</Text>
    // </View>   
    <SplashScreen></SplashScreen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
