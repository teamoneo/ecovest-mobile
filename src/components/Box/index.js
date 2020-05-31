import React, { ReactPropTypes } from 'react';

import { Container, Content } from './styles';

const Box = ({ color, children }) => {
  return (
    <Container color={color}>
      <Content>{children}</Content>
    </Container>
  );
};

Box.propTypes = {
  color: ReactPropTypes.string.isRequired,
  children: ReactPropTypes.func.isRequired,
};

export default Box;
