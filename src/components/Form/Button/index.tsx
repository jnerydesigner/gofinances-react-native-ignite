import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
  Icon
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  nameIcon?: string;
}

export function Button({ title, nameIcon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={nameIcon} />
      <Title>{title}</Title>
    </Container>
  )
}