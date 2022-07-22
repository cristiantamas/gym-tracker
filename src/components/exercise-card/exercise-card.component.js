import React from 'react';
import { Text } from 'react-native';
import { ExerciseCardContainer, Info, ExerciseInfo } from './exercise-card.styles';

export const ExerciseCard = ({ exercise }) => {
  const { name, sets, reps, weight } = exercise;
  return (
    <ExerciseCardContainer>
      <Info>
        <ExerciseInfo>{name}</ExerciseInfo>
        <ExerciseInfo>{`${sets} sets of ${reps} with ${weight} kg`}</ExerciseInfo>
      </Info>
    </ExerciseCardContainer>
  );
};
