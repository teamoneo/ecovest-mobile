import React from 'react';

import { Background, PopUpContainer, PopUpTitleText } from './styles';

export default function PopUp({ title, children, center }) {
  return (
    <Background>
      <PopUpContainer center={center}>
        <PopUpTitleText>{title}</PopUpTitleText>
        {children}
      </PopUpContainer>
    </Background>
  );
}
