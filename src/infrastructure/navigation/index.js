import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faGear, faClipboardList } from '@fortawesome/free-solid-svg-icons';

import { View } from 'react-native';

import { Text } from '../../components/typography/text.component';

import { SafeArea } from '../../components/utility/safe-area.component';

import { theme } from '../theme';

import { AccountNavigator } from './account.navigator';
import { WorkoutNavigator } from './workout.navigator';
import { TrainingPlanNavigator } from './training-plan.navigator';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  "Today's Workout": faDumbbell,
  'Training Plan': faClipboardList,
  Settings: faGear,
};

const createScreenOptions = ({ route }) => {
  const icon = TAB_ICONS[route.name];
  return {
    tabBarStyle: {
      backgroundColor: theme.colors.bg.secondary,
    },
    tabBarActiveTintColor: theme.colors.ui.primary,
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    tabBarIcon: ({ size, color }) => <FontAwesomeIcon icon={icon} size={size} color={color} />,
    headerShown: false,
  };
};

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View>
        <Text>Settings screen</Text>
        <Button onPress={() => onLogout()}>Log out</Button>
      </View>
    </SafeArea>
  );
};

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Today's Workout" component={WorkoutNavigator} />
          <Tab.Screen name="Training Plan" component={TrainingPlanNavigator} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
