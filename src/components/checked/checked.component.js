import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { CheckedButton } from './checked.styles';

import { CurrentWorkoutContext } from '../../services/current-workout/current-workout.context';

export const Checked = ({ exercise }) => {
  const { exercises, setExerciseStatus } = useContext(CurrentWorkoutContext);
  const { isFinished } = exercise;

  return (
    <CheckedButton>
      <AntDesign
        onPress={() => setExerciseStatus(exercise, !isFinished)}
        name={isFinished ? 'checkcircle' : 'checkcircleo'}
        size={24}
        color={isFinished ? 'green' : 'white'}
      />
    </CheckedButton>
  );
};
