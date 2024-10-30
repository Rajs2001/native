import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Loading screens form src/screens 
import  LoginScreen  from "./src/screens/LoginScreen";
import  OTPVerificationScreen  from "./src/screens/OTPVerificationScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SplashScreen from './src/screens/SplashScreen';

enableScreens();


const stack = createStackNavigator();

export default function App(){

  
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      {/* <stack.Navigator initialRouteName="SplashScreen"> */}
      <stack.Screen name='SplashScreen' component={SplashScreen}/>
      <stack.Screen name="LoginScreen" component={LoginScreen}/>
      <stack.Screen name="SignUp" component={SignUpScreen}/>
      <stack.Screen name="OTPVerification" component={OTPVerificationScreen}/>

      </stack.Navigator>
    </NavigationContainer>
  )
}