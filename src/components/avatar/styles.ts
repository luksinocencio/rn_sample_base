import { ImageBackground, ImageBackgroundProps } from 'react-native';
import styled from 'styled-components/native';

const SIZES = {
  xxSmall: 24,
  xSmall: 32,
  small: 40,
  medium: 48,
  large: 56,
  xLarge: 72,
  xxLarge: 96,
};

interface IAvatar extends ImageBackgroundProps {
  shape: 'square' | 'circle';
  size:
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge';
  backgroundColor: string;
}

interface IText {
  size:
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge';
}

function returnBorderSizes(size: string) {
  const borderRadius: Record<string, number> = {
    xxSmall: 4,
    xSmall: 4,
    small: 4,
    medium: 8,
    large: 8,
    xLarge: 12,
    xxLarge: 12,
  };
  const valueDefault = 0;
  return borderRadius[size] || valueDefault;
}

function returnFontSize(size: string) {
  const fontSize: Record<string, number> = {
    xxSmall: 16,
    xSmall: 18,
    small: 24,
    medium: 26,
    large: 32,
    xLarge: 40,
    xxLarge: 56,
  };
  const valueDefault = 0;
  return fontSize[size] || valueDefault;
}

export const Image = styled(ImageBackground).attrs((props: any) => ({
  imageStyle: {
    borderRadius:
      props.shape === 'circle' ? '50%' : returnBorderSizes(props.size),
  },
}))`
  width: ${({ size }: IAvatar) => SIZES[size]}px;
  height: ${({ size }) => SIZES[size]}px;
  background-color: ${({ backgroundColor }: IAvatar) => backgroundColor};
  align-items: center;
  justify-content: center;
  border-radius: ${({ shape, size }) =>
    shape === 'circle' ? 1000 : `${returnBorderSizes(size)}`}px;
`;

export const TextAvatar = styled.Text<IText>`
  font-size: ${({ size }) => returnFontSize(size)}px;
  position: absolute;
  color: white;
  font-weight: bold;
`;
