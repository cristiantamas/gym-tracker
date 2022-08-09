import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const ExerciseInfo = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const UpdateButton = styled(Button)`
  width: 70%;
`;
