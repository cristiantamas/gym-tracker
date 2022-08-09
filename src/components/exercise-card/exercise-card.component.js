import React from 'react';
import { Checked } from '../checked/checked.component';
import { ExerciseCardContainer, Info, ExerciseInfo } from './exercise-card.styles';

export const ExerciseCard = ({ exercise }) => {
  const { name, sets, isFinished } = exercise;

  const renderSets = () => {
    return sets.map((set, index) => {
      const { reps, weight } = set;
      const repText = weight ? `${reps} x ${weight}kg` : `${reps} reps`;
      return <ExerciseInfo key={index}>{repText}</ExerciseInfo>;
    });
  };

  return (
    <ExerciseCardContainer>
      <Info>
        <ExerciseInfo
          isFinished={isFinished}
          variant="titleBold"
        >{`${name} -  ${sets.length} sets`}</ExerciseInfo>

        {renderSets()}
      </Info>
      <Checked exercise={exercise} />
    </ExerciseCardContainer>
  );
};
