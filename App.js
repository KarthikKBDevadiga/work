/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddressScreen from './src/screens/register/address/AddressScreen';
import RegisterScreen from './src/screens/register/basic/RegisterScreen';
import PersonalScreen from './src/screens/register/personal/PersonalScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createStackNavigator();
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,

      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const SlideTransition = {
    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              translateX: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  })
                : 1,
            },
          ],
        },
      };
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          // options={{
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}
          options={{...SlideTransition}}
        />
        <Stack.Screen
          name="PersonalScreen"
          component={PersonalScreen}
          // options={{
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}
          options={{...SlideTransition}}
        />
        <Stack.Screen
          name="AddressScreen"
          component={AddressScreen}
          // options={{
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}
          options={{...SlideTransition}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
