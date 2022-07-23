import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  xsmall: 0,
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
  xxlarge: 5,
};

const SpacerView = styled.View`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Spacer = ({ horizontal, size }) => {
  const theme = useTheme();
  const defaultValue = 'auto';
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];

  const height = horizontal ? value : defaultValue;
  const width = !horizontal ? value : defaultValue;
  return <SpacerView height={height} width={width} />;
};

Spacer.defaultProps = {
  horizontal: true,
  size: 'small',
};
