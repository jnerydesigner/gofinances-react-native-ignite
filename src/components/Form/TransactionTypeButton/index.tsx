import React from 'react';

import { Text, TouchableOpacityProps, TextProps } from 'react-native';

import { Container, Icon, Title } from './styles';


interface Props extends TouchableOpacityProps {
  title: string;
  type: 'income' | 'outcome';
  isActive: boolean;
}

const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle'
}

export function TransactionTypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Container type={type} {...rest} isActive={isActive}>
      <Icon name={icon[type]} type={type} />
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};