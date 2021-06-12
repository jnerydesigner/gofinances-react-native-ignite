import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family:${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-right: 10px;
`;