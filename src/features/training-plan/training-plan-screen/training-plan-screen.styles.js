import styled from 'styled-components';
import { FAB } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';

export const TrainingPlanContainer = styled(SafeArea)`
  align-items: center;
`;

export const AddWorkoutButton = styled(FAB)`
  position: absolute;
  bottom: 16;
  right: 16;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
