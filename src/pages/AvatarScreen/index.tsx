import React, { useRef } from 'react';
import { Animated } from 'react-native';
import Avatar from '../../components/avatar';
import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';
import { Container, Content } from './styles';

function AvatarScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <HeaderAnimated
        animHeaderValue={scrollOffsetY}
        title="Avatar"
        // isAnimate={false}
      />
      <Container>
        <Content>
          <Avatar
            shape="circle"
            size="xxSmall"
            backgroundColor="#42ca78"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
          <Avatar
            shape="circle"
            size="xSmall"
            backgroundColor="#ff5075"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
          <Avatar
            shape="circle"
            size="small"
            backgroundColor="#3b65d0"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
        </Content>
        <Content>
          <Avatar
            shape="circle"
            size="medium"
            backgroundColor="#77b6a8"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
          <Avatar
            shape="circle"
            size="large"
            backgroundColor="#f37422"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
          <Avatar
            shape="circle"
            size="xLarge"
            backgroundColor="#00b0ed"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
        </Content>
        <Content>
          <Avatar
            shape="circle"
            size="xLarge"
            backgroundColor="#8952cf"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
        </Content>
        <Content>
          <Avatar
            shape="square"
            size="xLarge"
            backgroundColor="#dc4ef3"
            text="Lucas"
            // url="https://reactnative.dev/img/tiny_logo.png"
          />
          <Avatar
            shape="square"
            size="xLarge"
            // backgroundColor="red"
            text="Lucas"
            url="https://reactnative.dev/img/tiny_logo.png"
          />
        </Content>
      </Container>
    </>
  );
}

export default AvatarScreen;
