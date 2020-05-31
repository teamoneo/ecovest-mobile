import React from 'react';

import { ScrollView, View, FlatList } from 'react-native';

import User from '../../components/User';

import Header from '../../components/Header';

import Goal from '../../components/Goal';

import Box from '../../components/Box';

import InformationControl from '../../components/InformationControl';

import { 
  Container,
  TittleGoal,
  Divider,
  CardContent,
  elevationStyle,
} from './styles';

export default function Dashboard() {

  const data = [
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

  return (
    <ScrollView>
      <Header />
      <Container style={elevationStyle}>
        
        <User />
        
        <Box color="#fff">
            <CardContent>
              <Goal level="80" active="true" />
              <Divider />
              <FlatList
                horizontal={true}
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <View style={{ paddingHorizontal: 15 }}>
                    <Goal level={item.value} active="none" icon={item.category} />
                  </View>)
                }
              />
            </CardContent>
            <TittleGoal>Metas</TittleGoal>
        </Box>
                  
        <InformationControl 
          informationTitleText="Todos os gastos" 
          colorTextInfo="#F99D1C"
          informationText="R$ 536,00"
          adicionalInformation="Limite total: R$ 600,00"
          level="40"
        />

      </Container>
    </ScrollView>
  );
}
