import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather, MaterialIcons, AntDesign, Entypo, FontAwesome5, Fontisto } from '@expo/vector-icons';

interface TypeProps {
  type: "income" | "outcome";
}

interface IconProps {
  iconType: 'Feather' | 'MaterialIcons' | 'AntDesign' | 'Entypo' | 'FontAwesome5' | 'Fontisto';
}


export const Container = styled.View<TypeProps>`
  ${({ type }) => type === "income" && css`
    background-color: ${({ theme }) => theme.colors.shape};
  `};
  ${({ type }) => type === "outcome" && css`
    background-color: ${({ theme }) => theme.colors.shape};
  `};
  padding: ${RFValue(12)}px;
  border-radius: 5px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  
`;
export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === 'income' ? theme.colors.success : theme.colors.atention};
  margin: 10px 5px;
`;
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Category = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;


export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(10)}px;
`;
export const DateTransaction = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
