import styled from 'styled-components/native';
import { IconButton, TextInput } from 'react-native-paper';

export const NumericInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NumberInput = styled(TextInput)`
  width: 50px;
  text-align: center;
`;
