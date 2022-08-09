import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SetInput } from '../../../components/set-input/set-input.component';
import { Text } from '../../../components/typography/text.component';

import { Info, ExerciseInfo, UpdateButton } from './exercise-edit-screen.styles';

export const ExerciseEditScreen = ({ route }) => {
  const {
    exercise: { name, sets },
  } = route.params;
  const theme = useContext(ThemeContext);
  const [isExerciseChanged, setIsExerciseChanged] = useState(false);

  const updateWorkout = () => {};

  return (
    <SafeArea>
      <Info>
        <ExerciseInfo variant="titleBold">{`${name} -  ${sets.length} sets`}</ExerciseInfo>
        <Spacer size="large" />
        {sets.map((set, index) => {
          return (
            <SetInput key={index} setNo={index} set={set} updateExercise={setIsExerciseChanged} />
          );
        })}

        <UpdateButton
          mode="contained"
          disabled={!isExerciseChanged}
          color={theme.colors.bg.secondary}
          onPress={() => updateWorkout()}
        >
          <Text variant="label">Update</Text>
        </UpdateButton>
      </Info>
    </SafeArea>
  );
};
