import React, { useState } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { ScrollView, Text } from 'react-native';

import User from '../../components/User';
import InformationControl from '../../components/InformationControl';
import Button from '../../components/Button';

import PopUp from '../../components/PopUp';

import MainTable from '../../components/Table';

import TableItem from '../../components/TableItem';

import { Container, UserContainer, ButtonsContainer, ReasonContainer, ReasonText, ReasonTitleText } from './styles';

const goals = [
  {
    id: 0,
    data: '22/jan',
    name: 'Luz',
    value: '150,00',
  },
  {
    id: 1,
    data: '22/jan',
    name: 'Compras',
    value: '200,00',
  },
  {
    id: 2,
    data: '21/jan',
    name: 'Carro',
    value: '100,00',
  },
  {
    id: 3,
    data: '22/jan',
    name: 'Meta',
    value: '100,00',
  },
  {
    id: 4,
    data: '22/jan',
    name: 'Luz',
    value: '50,00',
  },
  {
    id: 5,
    data: '22/ja',
    name: 'Luz',
    value: '70,00',
  },
  {
    id: 6,
    data: '22/jan',
    name: 'Reserva',
    value: '300,00',
  },
];

export default function Profile() {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState({});

  const tips = [
    {
      text1: 'Ao escovar os dentes, não esqueça de desligar a torneira! ',
      text2: 'Além de economizar seu dinheiro, você salva o planeta!',
    },
    {
      text1: 'Crie no máximo 4 metas',
      text2: 'Além de economizar seu dinheiro, você salva o planeta!',
    }
  ];

  return (
    <>
    <ScrollView>
      <UserContainer>
        <User />
      </UserContainer>
      <Container>

        <Button style={{marginTop:17}} onPress={() => { setVisiblePopUp(true); setPopUpInfo(tips[0]);} } color="#54F078" text="Ver dica do dia!"/>
        
        <InformationControl
          informationTitleText="Soma dos gastos"
          colorTextInfo="#F99D1C"
          informationText="R$ 970,00"
          adicionalInformation="Renda: R$ 1.000,00"
          level={80}
          margin={50}
        />

        <ButtonsContainer>
          <Button style={{ width: 160 }} color="#54F078" text="Criar" />
          <Button style={{ width: 160 }} color="#F99D1C" text="Gerar" />
        </ButtonsContainer>

        <MainTable titles={["Nome","Valor","Editar"]}>
          {goals.map(({ name,value }, index) => (
            <TableItem
              key={String(index)}
              date={undefined}
              name={name}
              value={value}
              edit={true}
              style={{justifyContent:'center'}}
            />
          ))}
        </MainTable>
      </Container>
    </ScrollView>
    {visiblePopUp && (
      <PopUp title="Dica">
        <ReasonTitleText>Quer economizar ainda mais? Se liga nessa dica!</ReasonTitleText>
          <ReasonContainer>
            <Unicons.UilWaterDropSlash size={24} color="#F99D1C" />
            <ReasonText>{popUpInfo.text1}</ReasonText>
          </ReasonContainer>
          <ReasonContainer>
            <Unicons.UilTrees size={24} color="#F99D1C" />
            <ReasonText>{popUpInfo.text2}</ReasonText>
          </ReasonContainer>

          <Button onPress={() => setVisiblePopUp(false)} style={{marginTop:15}} color="#fa3114" text="Fechar"/>
      </PopUp>
    )}
    </>
  );
}

