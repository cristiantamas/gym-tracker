import React from 'react';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ExerciseCard } from '../../../components/exercise-card/exercise-card.component';

import { ExerciseList } from './workout-screen.styles';

const exercises = [
  {
    name: 'Bench press',
    sets: 3,
    reps: 10,
    weight: '100',
  },
  {
    name: 'Squat',
    sets: 3,
    reps: 10,
    weight: '100',
  },
  {
    name: 'Deadlift',
    sets: 3,
    reps: 10,
    weight: '100',
  },
];

export const WorkoutScreen = () => {
  return (
    <SafeArea>
      <ExerciseList
        data={exercises}
        renderItem={({ item }) => (
          <>
            <ExerciseCard exercise={item} />
            <Spacer size="large" />
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
