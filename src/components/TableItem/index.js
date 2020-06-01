import React from 'react';
import * as Unnames from '@iconscout/react-native-unicons';

import { Container, DataText, NameText, ValueText, NameWrap} from './styles';

var color = '';
const size = 15;
const text = '';

export default function TableItem({name,date,value,edit}) {
  if(name==='Renda'){
    color = '#54F078';
  }else if(name==='Reserva'||name==='Meta'){
    color = '#F99D1C';
  }else{
    color = '#9D9FA2';
  }
  return (
    <Container>
      { date != undefined ? <DataText style={{color:color}}>{date}</DataText> : null}

      { name != undefined ? (<NameWrap>
          {name === 'Luz' ? (
          <Unnames.UilLamp size={size} color={color}/>
        ) : name === 'Carro' ? (
          <Unnames.UilCarSideview size={size} color={color} />
        ) : name === 'Vendas Online' ? (
          <Unnames.UilDesktop size={size} color={color} />
        ) : name === 'Compras' ? (
          <Unnames.UilShoppingCart size={size} color={color} />
        ) : name === 'Meta' ? (
            <Unnames.UilTrophy size={size} color={color} />
        ) : name === 'Reserva' ? (
          <Unnames.UilLock size={size} color={color} />
        ) : name === 'Renda' ? (
          <Unnames.UilBag size={size} color={color} />
        ) : name === 'Aluguel' ? (
          <Unnames.UilHome size={size} color={color} />
        ) : (
          <Unnames.UilGraduationCap size={size} color={color} />
        )}<NameText style={{color:color}}>{name}</NameText></NameWrap>):null}

        { value != undefined ? <ValueText style={{color:color}}>R$ {value}</ValueText> : null}
        {edit != undefined ? <Unnames.UilPen size={33} color={color} style={{marginRight:25}} /> : null}
    </Container>
  );
}
