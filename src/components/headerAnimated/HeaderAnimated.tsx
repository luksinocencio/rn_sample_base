import ArrowLeft from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Dimensions, Platform, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BackButton, BackTextTitle, Container, Content, Title } from './styles';

const Max_Header_Height =
  Platform.OS === 'ios' ? 114 + getStatusBarHeight() : 114;
const Min_Header_Height = Platform.OS == 'ios' ? 70 + getStatusBarHeight() : 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

type THeader = {
  animHeaderValue?: any | null;
  title: string;
  isAnimate?: boolean;
};

export function HeaderAnimated({
  animHeaderValue,
  title,
  isAnimate = true,
}: THeader) {
  const [backButtonSize, setBackButtonSize] = useState(0);
  const [titleSize, setTitleSize] = useState(0);

  const navigation = useNavigation();
  const routesLength = useNavigationState((state) => state.routes.length);

  const heightOfBar = animHeaderValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });

  const fontSize = animHeaderValue.interpolate({
    inputRange: [0, Max_Header_Height - Min_Header_Height],
    outputRange: [32, 18],
    extrapolate: 'clamp',
  });

  const positionTitle = animHeaderValue.interpolate({
    inputRange: [0, Max_Header_Height - Min_Header_Height],
    outputRange: [10, Dimensions.get('screen').width / 2 - titleSize / 2],
    extrapolate: 'clamp',
  });

  const positionBackButton = animHeaderValue.interpolate({
    inputRange: [0, Max_Header_Height - Min_Header_Height - backButtonSize],
    outputRange: [60, 10],
    extrapolate: 'clamp',
  });

  return (
    <Container height={isAnimate ? heightOfBar : 80}>
      {routesLength > 1 && (
        <BackButton
          onLayout={(e: any) => {
            setBackButtonSize(e.nativeEvent.layout.height);
          }}
          bottomBackButton={isAnimate ? positionBackButton : 10}
          onPress={() => {
            console.log('voltar');
            navigation.goBack();
          }}>
          <ArrowLeft name="chevron-left" size={24} />
          <BackTextTitle>Voltar</BackTextTitle>
        </BackButton>
      )}

      <Title
        onLayout={(e: any) => {
          setTitleSize(e.nativeEvent.layout.width);
        }}
        leftTitle={
          isAnimate
            ? positionTitle
            : Dimensions.get('screen').width / 2 - titleSize / 2
        }
        style={{ fontSize: isAnimate ? fontSize : 18 }}>
        {title}
      </Title>

      <Content bottomBackButton={isAnimate ? positionBackButton : 10}>
        <TouchableOpacity
          style={{ marginRight: 12 }}
          onPress={() => console.log('left')}>
          <ArrowLeft name="image" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log()}>
          <ArrowLeft name="help-outline" size={24} />
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
