import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../views/Home';
import { Signin } from '../views/Signin';

export type RootStackParamList = {
  Signin: undefined;
  Home: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
  return(
    <Navigator 
    initialRouteName="Signin"
    screenOptions={{
    headerShown: false,
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1
    }
    }}
    >
      <Screen 
      name="Signin" 
      component={Signin}  
      />
      <Screen 
      name="Home" 
      component={Home} />
    </Navigator>
  );
} ;