import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const SetContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: center;
`;

export const WeightInput = styled(TextInput)`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
`;
