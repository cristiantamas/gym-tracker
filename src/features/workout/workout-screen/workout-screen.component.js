import React from 'react';

import { TouchableOpacity } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ExerciseCard } from '../../../components/exercise-card/exercise-card.component';

import { ExerciseList } from './workout-screen.styles';

const exercises = [
  {
    name: 'Squats with bar',
    sets: [
      {
        reps: 8,
        weight: 20,
      },
      {
        reps: 8,
        weight: 25,
      },
      {
        reps: 8,
        weight: 25,
      },
    ],
  },
  {
    name: 'Romanian Deadlift',
    sets: [
      {
        reps: 8,
        weight: 40,
      },
      {
        reps: 8,
        weight: 40,
      },
      {
        reps: 8,
        weight: 50,
      },
    ],
  },
  {
    name: 'Pushups',
    sets: [
      {
        reps: 9,
      },
      {
        reps: 9,
      },
      {
        reps: 8,
      },
    ],
  },
  {
    name: 'TRX Rows',
    sets: [
      {
        reps: 8,
      },
      {
        reps: 8,
      },
      {
        reps: 8,
      },
    ],
  },
  {
    name: 'Military Press',
    sets: [
      {
        reps: 8,
        weight: 5,
      },
      {
        reps: 8,
        weight: 5,
      },
      {
        reps: 8,
        weight: 10,
      },
    ],
  },
];

export const WorkoutScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ExerciseList
        data={exercises}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ExerciseDetail', {
                exercise: item,
              })
            }
          >
            <ExerciseCard exercise={item} />
            <Spacer size="large" />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
