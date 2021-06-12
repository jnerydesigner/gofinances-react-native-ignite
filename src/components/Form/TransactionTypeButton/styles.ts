import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface ThemeProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}
interface TextProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity) <ThemeProps>`
  width: 48%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${RFValue(10)}px;

  
  ${({ isActive }) => (!isActive) && css`
    background-color: ${({ theme }) => theme.colors.shape};
    border: 1.5px solid ${({ theme }) => theme.colors.text};
  `};


  ${({ type, isActive }) => (isActive && type === "income") && css`
    background-color: ${({ theme }) => theme.colors.success_light};
  `};

  ${({ type, isActive }) => (isActive && type === "outcome") && css`
    background-color: ${({ theme }) => theme.colors.atention_light};
  `};
`;


export const Icon = styled(Feather) <ThemeProps>`
  font-size: ${RFValue(40)}px;
  margin-right: ${RFValue(15)}px;


  ${({ type }) => type === "income" && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === "outcome" && css`
    color: ${({ theme }) => theme.colors.atention};
  `};
`;

export const Title = styled(Text) <TextProps>`
  ${({ isActive }) => (isActive) && css`
    color: ${({ theme }) => theme.colors.shape};
  `};

  ${({ isActive }) => (!isActive) && css`
    color: ${({ theme }) => theme.colors.text};
  `};
  font-size: ${RFValue(18)}px;
`;
