import React from 'react';
import * as Unnames from '@iconscout/react-native-unicons';

import {View} from 'react-native';
import {Container,DataText,NameText,ValueText,NameWrap} from './styles';

var color = '#9D9FA2';
var text = '';

export default function TableIten({data,name,value}) {
  return(
    <Container>
      <DataText>{data}</DataText>
      <NameWrap>
        {
            name === 'Luz' ? <Unnames.UilHome size={10} color={color}/> :
            name === 'Carro' ? <Unnames.UilCarSideview size={10} color={color}/> :
            name === 'Compras' ? <Unnames.UilDesktop size={10} color={color}/> :
            <Unnames.UilGraduationCap size={10} color={color}/>
        }
        <NameText>{name}</NameText>
      </NameWrap>
      <ValueText>R$ {value}</ValueText>
    </Container>
  );
}