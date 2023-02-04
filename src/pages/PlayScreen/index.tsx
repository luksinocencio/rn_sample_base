import * as React from 'react';
import { useRef } from 'react';
import { Animated, SafeAreaView, Text } from 'react-native';
import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';
import { TextField } from '../../components/textField';

export default function PlayScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <HeaderAnimated
        animHeaderValue={scrollOffsetY}
        title="Playground"
        // isAnimate={false}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Teste</Text>
        <TextField />
      </SafeAreaView>
    </>
  );
}
