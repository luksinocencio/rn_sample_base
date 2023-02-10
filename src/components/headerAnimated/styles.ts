import { Animated, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

interface AnimatedProps {
  height: number;
  fontSize: number;
  leftTitle: number;
  bottomBackButton?: number;
}

const Container = Animated.createAnimatedComponent(styled.View`
  background-color: #f5f5f5;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  padding-left: 10px;
  padding-right: 10px;
  align-self: stretch;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  z-index: 1;
  position: relative;
  height: ${({ height }: AnimatedProps) => height}px;
`);

const Title = Animated.createAnimatedComponent(styled.Text`
  color: #000;
  position: absolute;
  bottom: 10px;
  font-weight: bold;
  left: ${({ leftTitle }: AnimatedProps) => leftTitle}px;
  font-family: ${Platform.OS === 'ios' ? 'Inter-Black' : 'Inter-Bold'};
`);

const BackTextTitle = styled.Text`
  font-size: 16px;
`;

const BackButton = Animated.createAnimatedComponent(styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  flex-direction: row;
  align-items: center;
  bottom: ${({ bottomBackButton }: AnimatedProps) => bottomBackButton}px;
`);

const Content = Animated.createAnimatedComponent(styled.View`
  flex-direction: row;
  right: 10px;
  position: absolute;
  bottom: ${({ bottomBackButton }: AnimatedProps) => bottomBackButton}px;
`);

export { Container, Title, BackButton, BackTextTitle, Content };
