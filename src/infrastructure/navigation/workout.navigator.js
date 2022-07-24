import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { WorkoutScreen } from '../../features/workout/workout-screen/workout-screen.component';
import { ExerciseEditScreen } from '../../features/exercise/exercise-edit-screen/exercise-edit-screen.component';

const WorkoutStack = createStackNavigator();

export const WorkoutNavigator = () => {
  return (
    <WorkoutStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} />
      <WorkoutStack.Screen name="ExerciseDetail" component={ExerciseEditScreen} />
    </WorkoutStack.Navigator>
  );
};
