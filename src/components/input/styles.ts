import { Animated, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

type TView = {
  backgroundColor: string;
  borderBottomColor: string;
};

const DEFAULT_COLOR: TView = {
  backgroundColor: '#f5f5f5',
  borderBottomColor: '#898989',
};
const FOCUS_COLOR: TView = {
  backgroundColor: '#e1faf0',
  borderBottomColor: '#238662',
};
const ERROR_COLOR: TView = {
  backgroundColor: '#fee9e9',
  borderBottomColor: '#e62320',
};

type THint = {
  isFocused: boolean;
  isFilled: boolean;
  isError?: boolean;
};

export const Container = Animated.createAnimatedComponent(styled.View``);

export const Content = Animated.createAnimatedComponent(styled.View`
  width: ${Dimensions.get('window').width - 40}px;
  height: 60px;
  margin-top: 40px;
  background-color: ${({ backgroundColor }: TView) => backgroundColor};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ borderBottomColor }: TView) => borderBottomColor};
`);

export const Hint = Animated.createAnimatedComponent(styled.Text`
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;
  color: ${({ isFocused, isFilled }: THint) =>
    isFocused || isFilled ? '#333' : '#393939'};
  font-weight: ${({ isFocused, isFilled }: THint) =>
    isFocused || isFilled ? 'bold' : 'regular'};
  ${({ isFocused, isFilled }: THint) =>
    isFocused || isFilled
      ? css`
          transform: translateY(5px);
          font-size: 12px;
        `
      : css`
          transform: translateY(+15px);
          font-size: 16px;
        `}
`);

export const LabeledInput = Animated.createAnimatedComponent(styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  margin-top: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`);

export const LeadingText = styled.Text`
  font-size: 12px;
  text-align: left;
  margin-top: 6px;
`;
