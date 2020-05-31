import React from 'react';

import { Container, Content } from './styles';

export default function Box({ color, children }) {
  return(
    <Container color={color}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}
