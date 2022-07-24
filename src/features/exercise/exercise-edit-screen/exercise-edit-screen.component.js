import React from 'react';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SetInput } from '../../../components/set-input/set-input.component';

import { Info, ExerciseInfo } from './exercise-edit-screen.styles';

export const ExerciseEditScreen = ({ route }) => {
  const {
    exercise: { name, sets },
  } = route.params;

  return (
    <SafeArea>
      <Info>
        <ExerciseInfo variant="titleBold">{`${name} -  ${sets.length} sets`}</ExerciseInfo>
        <Spacer size="large" />
        {sets.map((set, index) => {
          return <SetInput key={index} set={set} />;
        })}
      </Info>
    </SafeArea>
  );
};
