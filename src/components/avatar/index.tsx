import React from 'react';
import { Image, TextAvatar } from './styles';

type TAvatar = {
  shape?: 'square' | 'circle';
  size?:
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge';
  backgroundColor?: string;
  text?: string;
  url?: string;
};

const arrayColor = [
  { random01: '#77B6A8' },
  { random02: '#F37422' },
  { random03: '#FF5075' },
  { random04: '#00B0ED' },
  { random05: '#8952CF' },
  { random06: '#9E7365' },
  { random07: '#42CA78' },
  { random08: '#DC4EF3' },
  { random09: '#3B65D0' },
];

function Avatar({
  size = 'medium',
  shape = 'square',
  backgroundColor = '#333',
  ...props
}: TAvatar) {
  function returnFirstLetter(text: string) {
    return text.charAt(0);
  }

  return (
    <Image
      shape={shape}
      size={size}
      backgroundColor={backgroundColor}
      source={{ uri: props.url }}
      resizeMode="contain"
    >
      {!props.url && props.text && (
        <TextAvatar size={size}>{returnFirstLetter(props.text)}</TextAvatar>
      )}
    </Image>
  );
}

export default Avatar;
