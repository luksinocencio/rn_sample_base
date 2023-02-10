import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const Content = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 144px;
  height: 144px;
`;

export const ButtonViews = styled.View`
  flex-direction: column;
  flex: 0.6;
  justify-content: center;
  /* background-color: pink; */
  margin-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  background-color: green;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  background-color: red;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonTertiary = styled.TouchableOpacity`
  background-color: blue;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
