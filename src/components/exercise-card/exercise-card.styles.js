import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const ExerciseCardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

export const Info = styled.View``;

export const ExerciseInfo = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;
