import React from 'react';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { TrainingPlanContainer, AddWorkoutButton } from './training-plan-screen.styles';

export const TrainingPlanScreen = ({ navigation }) => {
  return (
    <TrainingPlanContainer>
      <Text variant="title">Your training plan</Text>
      <Spacer size="large" />
      <AddWorkoutButton icon="plus" onPress={() => navigation.navigate('Create Workout')} />
    </TrainingPlanContainer>
  );
};
