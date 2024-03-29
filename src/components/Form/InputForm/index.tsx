import React from 'react';
import { Input } from '../Input';
import { Control, Controller } from 'react-hook-form';

import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm({
  control,
  name,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  );
};