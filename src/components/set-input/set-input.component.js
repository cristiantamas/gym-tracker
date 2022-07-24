import React, { useState, useEffect } from 'react';
import { Divider } from 'react-native-paper';

import { Text } from '../typography/text.component';
import { Spacer } from '../spacer/spacer.component';

import { NumericInput } from '../numeric-input/numeric-input.component';
import { Feather } from '@expo/vector-icons';

import { SetContainer, WeightInput } from './set-input.styles';

export const SetInput = ({ set, setNo }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState(set.reps);

  return (
    <>
      <Text variant="body">{`Set no. ${setNo}:`}</Text>
      <SetContainer>
        <NumericInput value={reps} onChange={setReps} />
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
      <Divider />
    </>
  );
};
