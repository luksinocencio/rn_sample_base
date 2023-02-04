import * as React from 'react';
import { useRef } from 'react';
import { Text, SafeAreaView, Animated } from 'react-native';

import TextField from '../../components/textField';
import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';

export default function PlayScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <HeaderAnimated animHeaderValue={scrollOffsetY} title="Playground" />
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Teste</Text>
        <TextField />
      </SafeAreaView>
    </>
  );
}
