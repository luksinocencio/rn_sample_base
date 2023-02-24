import * as React from 'react';
import { useRef } from 'react';
import { Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';
import { Input } from '../../components/input';
import { Container } from './styles';

function PlayScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <HeaderAnimated
        animHeaderValue={scrollOffsetY}
        title="Playground"
        // isAnimate={false}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Input hint="hint" />
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}

export default PlayScreen;
