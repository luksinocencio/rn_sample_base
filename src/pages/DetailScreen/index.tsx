import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';

function DetailScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <HeaderAnimated animHeaderValue={scrollOffsetY} title={'Detail'} />
      <View style={{ backgroundColor: 'red', flex: 1 }} />
    </>
  );
}

export default DetailScreen;
