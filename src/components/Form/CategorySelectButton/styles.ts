import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  padding: 18px 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;
