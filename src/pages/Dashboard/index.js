import React from 'react';

import { ScrollView, View, FlatList } from 'react-native';

import User from '../../components/User';

import Header from '../../components/Header';

import Goal from '../../components/Goal';

import Box from '../../components/Box';

import InformationControl from '../../components/InformationControl';

import MainTable from '../../components/Table';

import TableItem from '../../components/TableItem';

import {
  Container,
  TittleGoal,
  Divider,
  CardContent,
  elevationStyle,
} from './styles';

export default function Dashboard() {
  const values = [
    {
      id: 0,
      category: 'Casa',
      value: 70,
    },
    {
      id: 1,
      category: 'Carro',
      value: 40,
    },
    {
      id: 2,
      category: 'Compras',
      value: 10,
    },
    {
      id: 3,
      category: 'Faculdade',
      value: 90,
    },
  ];

  const hist = [
    {
      id: 0,
      data: '31/mai',
      name: 'Vendas Online',
      value: '259,90',
    },
    {
      id: 1,
      data: '31/mai',
      name: 'Luz',
      value: '-129,90',
    },
    {
      id: 2,
      data: '31/mai',
      name: 'Compras Online',
      value: '-69,90',
    },
    {
      id: 3,
      data: '31/mai',
      name: 'Meta',
      value: '100,00',
    },
    {
      id: 4,
      data: '30/mai',
      name: 'Compras',
      value: '-230,90',
    },
    {
      id: 5,
      data: '30/mai',
      name: 'Reserva',
      value: '300,00',
    },
    {
      id: 6,
      data: '30/mai',
      name: 'Renda',
      value: '+1000,00',
    },
    {
      id: 7,
      data: '29/mai',
      name: 'Aluguel',
      value: '-147,74',
    },
  ];

  return (
    <ScrollView>
      <Header />
      <Container style={elevationStyle}>
        <User />

        <Box color="#fff">
          <CardContent>
            <Goal level={80} active="true" />
            <Divider />
            <FlatList
              horizontal
              data={values}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <View style={{ paddingHorizontal: 15 }}>
                  <Goal
                    level={Number(item.value)}
                    active="none"
                    icon={item.category}
                  />
                </View>
              )}
            />
          </CardContent>
          <TittleGoal>Metas ></TittleGoal>
        </Box>
        <InformationControl
          informationTitleText="Todos os gastos"
          colorTextInfo="#F99D1C"
          informationText="R$ 536,00"
          adicionalInformation="Limite total: R$ 600,00"
          level={40}
        />

        <MainTable titles={["Data","Nome","Valor"]} final={"Maio"}>
          {hist.map(({ name, data, value }, index) => (
            <TableItem
              key={String(index)}
              name={name}
              value={value}
              date={data}
              edit={undefined}
            />
          ))}
        </MainTable>
      </Container>
    </ScrollView>
  );
}
