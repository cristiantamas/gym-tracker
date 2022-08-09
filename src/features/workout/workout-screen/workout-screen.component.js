import React, { useContext } from 'react';

import { TouchableOpacity } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ExerciseCard } from '../../../components/exercise-card/exercise-card.component';

import { CurrentWorkoutContext } from '../../../services/current-workout/current-workout.context';

import { ExerciseList } from './workout-screen.styles';

export const WorkoutScreen = ({ navigation }) => {
  const { exercises } = useContext(CurrentWorkoutContext);
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
