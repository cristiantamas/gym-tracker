import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';

import { TrainingPlanScreen } from '../../features/training-plan/training-plan-screen/training-plan-screen.component';
import { CreateWorkoutScreen } from '../../features/training-plan/create-workout-screen/create-workout-screen.component';

const TrainingPlanStack = createStackNavigator();

export const TrainingPlanNavigator = () => {
  const theme = useTheme();
  return (
    <TrainingPlanStack.Navigator headerMode="screen">
      <TrainingPlanStack.Screen
        name="Your Training Plan"
        component={TrainingPlanScreen}
        options={{
          title: 'Your Training Plan',
          headerStyle: {
            backgroundColor: theme.colors.bg.secondary,
          },
          headerTintColor: theme.colors.text.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <TrainingPlanStack.Screen
        name="Create Workout"
        component={CreateWorkoutScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bg.secondary,
          },
          headerTintColor: theme.colors.text.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </TrainingPlanStack.Navigator>
  );
};
