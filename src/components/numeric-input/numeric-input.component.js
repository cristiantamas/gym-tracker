import React, { useState, useEffect } from 'react';
import { IconButton } from 'react-native-paper';

import { NumericInputContainer, NumberInput } from './numeric-input.styles';

import { theme } from '../../infrastructure/theme';

export const NumericInput = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <NumericInputContainer>
      <IconButton
        icon="minus"
        size={24}
        color={theme.colors.text.white}
        onPress={() => setInputValue((value) => value - 1)}
      />
      <NumberInput disabled mode="outlined" value={inputValue.toString()} />
      <IconButton
        icon="plus"
        size={24}
        color={theme.colors.text.white}
        onPress={() => setInputValue((value) => value + 1)}
      />
    </NumericInputContainer>
  );
};
