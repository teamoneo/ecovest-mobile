import React from 'react';

import { Container, ButtonText } from './styles';

export default function Button({ color, text, children, ...rest }) {
  return(
    <Container color={color} {...rest}>
      <ButtonText color={color} >{text}</ButtonText>
      {children}
  </Container>
  );
}
