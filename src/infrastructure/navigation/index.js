import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faGear } from '@fortawesome/free-solid-svg-icons';

import { View } from 'react-native';

import { Text } from '../../components/typography/text.component';

import { SafeArea } from '../../components/utility/safe-area.component';

import { WorkoutScreen } from '../../features/workout/workout-screen/workout-screen.component';

import { theme } from '../theme';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Workout: faDumbbell,
  Settings: faGear,
};

const createScreenOptions = ({ route }) => {
  const icon = TAB_ICONS[route.name];
  return {
    tabBarStyle: {
      backgroundColor: theme.colors.bg.secondary,
    },
    tabBarIcon: ({ size, color }) => <FontAwesomeIcon icon={icon} size={size} color={color} />,
    headerShown: false,
  };
};

const SettingsScreen = () => (
  <SafeArea>
    <View>
      <Text>Settings screen</Text>
    </View>
  </SafeArea>
);

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: theme.colors.ui.primary,
          inactiveTintColor: theme.colors.ui.secondary,
        }}
      >
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
