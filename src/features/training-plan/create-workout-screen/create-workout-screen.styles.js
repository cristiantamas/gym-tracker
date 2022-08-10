import styled from 'styled-components';
import { Button } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';

export const CreateWorkoutScreenContainer = styled(SafeArea)`
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const AddExerciseButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
