import React, { useState, useEffect } from 'react';

import { Text } from '../typography/text.component';
import { Spacer } from '../spacer/spacer.component';

import { Feather } from '@expo/vector-icons';

import { SetsContainer, SetContainer, RepsInput, WeightInput } from './set-input.styles';

export const SetInput = ({ set, setNo, updateExercise = () => null }) => {
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);

  useEffect(() => {
    if (weight === null && reps === null) {
      return;
    }
    updateExercise(true);
  }, [weight, reps]);

  return (
    <SetsContainer>
      <Text variant="body">{`Set no. ${setNo}:`}</Text>
      <Spacer size="medium" />
      <SetContainer>
        <RepsInput
          keyboardType="numeric"
          defaultValue={set.reps.toString()}
          onChangeText={(text) => setReps(text)}
        />
        <Spacer horizontal={false} size="medium" />
        {set.weight !== undefined ? (
          <>
            <Feather name="x" size={24} color="white" />
            <WeightInput
              keyboardType="numeric"
              defaultValue={set.weight.toString()}
              onChangeText={(text) => setWeight(text)}
            />
          </>
        ) : null}
      </SetContainer>
      <Spacer size="large" />
    </SetsContainer>
  );
};
