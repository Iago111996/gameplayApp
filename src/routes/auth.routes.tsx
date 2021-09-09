import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../views/Home';
import { Signin } from '../views/Signin';
import { AppointmentDetails } from '../views/AppointmentDetails';

export type RootStackParamList = {
  Signin: undefined;
  Home: undefined;
  AppointmentDetails: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
  return(
    <Navigator 
    initialRouteName="Signin"
    screenOptions={{
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.secondary100,
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
      component={Home} 
      />
      <Screen
      name="AppointmentDetails"
      component={AppointmentDetails}
      />
      
    </Navigator>
  );
} ;