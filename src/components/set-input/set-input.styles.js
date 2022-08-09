import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const SetsContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const SetContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RepsInput = styled(TextInput)`
  flex: 0.3;
  text-align: center;
`;

export const WeightInput = styled(TextInput)`
  flex: 0.3;
  text-align: center;
  margin-left: ${(props) => props.theme.space[2]};
`;
