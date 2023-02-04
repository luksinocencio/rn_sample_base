import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Button, TextInput, TextInputProps } from 'react-native';
import { Container, Content, Hint, LabeledInput, LeadingText } from './styles';

interface InputProps extends TextInputProps {
  hint: string;
}

interface InputReference extends TextInput {
  value: string;
}

type TView = {
  backgroundColor: string;
  borderBottomColor: string;
};

const DEFAULT_COLOR: TView = {
  backgroundColor: '#f5f5f5',
  borderBottomColor: '#898989',
};
const FOCUS_COLOR: TView = {
  backgroundColor: '#e1faf0',
  borderBottomColor: '#238662',
};
const ERROR_COLOR: TView = {
  backgroundColor: '#fee9e9',
  borderBottomColor: '#e62320',
};

export function Input({ hint, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const inputRef = useRef<InputReference>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current) setIsFilled(!!inputRef.current.value);
  }, []);

  const handleChangeText = useCallback((text: string) => {
    if (inputRef.current) inputRef.current.value = text;
  }, []);

  return (
    <Container>
      <Button title="error" onPress={() => setError(!isError)} />
      <Content>
        <Hint
          isFocused={isFocused}
          isFilled={isFilled}
          onPress={() => setIsFocused(!isFocused)}
        >
          {hint}
        </Hint>
        <LabeledInput
          ref={inputRef}
          placeholderTextColor={'#b1c3be'}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={handleChangeText}
          selectionColor={
            isError
              ? ERROR_COLOR.borderBottomColor
              : FOCUS_COLOR.borderBottomColor
          }
          backgroundColor={
            isError
              ? ERROR_COLOR.backgroundColor
              : !isFocused
              ? DEFAULT_COLOR.backgroundColor
              : isError
              ? ERROR_COLOR.backgroundColor
              : FOCUS_COLOR.backgroundColor
          }
          borderBottomColor={
            isFocused
              ? FOCUS_COLOR.borderBottomColor
              : DEFAULT_COLOR.borderBottomColor
          }
          error={isError}
          {...rest}
        />
      </Content>
      <LeadingText>Label de mensagem</LeadingText>
    </Container>
  );
}
