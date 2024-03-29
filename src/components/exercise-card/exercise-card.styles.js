import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Text } from '../typography/text.component';

export const ExerciseCardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ExerciseInfo = styled(Text)`
  text-decoration: ${({ isFinished }) => (isFinished ? `line-through` : `none`)};
  text-decoration-color: ${(props) => props.theme.colors.text.primary};
  color: ${(props) => props.theme.colors.text.primary};
`;
