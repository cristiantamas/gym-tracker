import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { CreateWorkoutScreenContainer, AddExerciseButton } from './create-workout-screen.styles.js';

export const CreateWorkoutScreen = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [currentExercise, setCurrentExercise] = useState({});

  const addExercise = () => {
    setExerciseList([...exerciseList, currentExercise]);
    setCurrentExercise({
      name: '',
      sets: [],
    });
  };

  return (
    <CreateWorkoutScreenContainer>
      <FlatList
        data={exerciseList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />

      <Spacer size="large" />
      <AddExerciseButton icon="plus" mode="contained" onPress={addExercise}>
        Add Exercise
      </AddExerciseButton>
      <Spacer size="large" />
    </CreateWorkoutScreenContainer>
  );
};
