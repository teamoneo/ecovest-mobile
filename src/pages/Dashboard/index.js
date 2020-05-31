import React from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { Text, ScrollView, View, FlatList } from 'react-native';

import Header from '../../components/Header';

import Goal from '../../components/Goal';

import Box from '../../components/Box';

import InformationControl from '../../components/InformationControl';

import { 
  Container,
  InfoControl,
  UserImage,
  UserName,
  UserAccount,
  UserTextControl,
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
  ]

  return (
    <ScrollView>
      <Header />
      <Container style={elevationStyle}>
        <InfoControl>
          <UserImage source={{uri: 'https://i.pinimg.com/originals/89/02/39/8902391adb64cfb9a8ba4cbc13083a58.jpg'}} />
          <UserTextControl>
            <UserName>Raymond Holt</UserName>
            <UserAccount>ag 0005 c/c 12345-67</UserAccount>          
          </UserTextControl>
        </InfoControl>
        
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
        />

      </Container>
    </ScrollView>
  );
}
