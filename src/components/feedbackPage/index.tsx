import React from 'react';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonText,
  ButtonViews,
  Container,
  Content,
  Image,
} from './styles';

function FeedbackPage() {
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </Content>
      <ButtonViews>
        <ButtonPrimary>
          <ButtonText>Ola mundo</ButtonText>
        </ButtonPrimary>
        <ButtonSecondary>
          <ButtonText>Ola mundo</ButtonText>
        </ButtonSecondary>
        <ButtonTertiary>
          <ButtonText>Ola mundo</ButtonText>
        </ButtonTertiary>
      </ButtonViews>
    </Container>
  );
}

export default FeedbackPage;
