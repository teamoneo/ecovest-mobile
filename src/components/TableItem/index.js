import React from 'react';
import * as Unnames from '@iconscout/react-native-unicons';

import { Container, DataText, NameText, ValueText, NameWrap } from './styles';

const color = '#9D9FA2';
const text = '';

export default function TableItem({ data, name, value }) {
  return (
    <Container>
      <DataText>{data}</DataText>
      <NameWrap>
        {name === 'Luz' ? (
          <Unnames.UilHome size={10} color={color} />
        ) : name === 'Carro' ? (
          <Unnames.UilCarSideview size={10} color={color} />
        ) : name === 'Compras' ? (
          <Unnames.UilDesktop size={10} color={color} />
        ) : (
          <Unnames.UilGraduationCap size={10} color={color} />
        )}
        <NameText>{name}</NameText>
      </NameWrap>
      <ValueText>R$ {value}</ValueText>
    </Container>
  );
}
