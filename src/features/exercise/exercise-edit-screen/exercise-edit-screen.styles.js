import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ExerciseInfo = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
`;
