import React from 'react';
import { ImageProps } from 'react-native';
import { Image } from './styles';

interface IAvatar extends ImageProps {
  shape?: string;
  size?: 'large' | 'medium' | 'small';
  bgColor?: string;
  text?: string;
  textColor?: string;
}

function Avatar(props: IAvatar) {
  return <Image />;
}

export default Avatar;
