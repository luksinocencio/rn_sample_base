import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const ScrollView = styled.ScrollView``;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 176px;
  height: 176px;
`;

export const ButtonViews = styled.View`
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ButtonTextSecondary = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ButtonTextTertiary = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #238662;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  background-color: #238662;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  background-color: #e9f3ef;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonTertiary = styled.TouchableOpacity`
  background-color: clear;
  height: 44px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ViewText = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;
