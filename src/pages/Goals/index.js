import React, { useState } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { ScrollView, View, TouchableOpacity } from 'react-native';

import {
  Container,
  elevationStyle,
  TextTitle,
  ReasonTitleText,
  ReasonContainer,
  ReasonText,
} from './styles';

import Header from '../../components/Header';
import User from '../../components/User';
import Box from '../../components/Box';
import Goal from '../../components/Goal';
import InformationControl from '../../components/InformationControl';
import Button from '../../components/Button';

import BlockGift from '../../components/Svgs/Gifts/BlockGift';
import FirstGift from '../../components/Svgs/Gifts/FirstGift';
import Pokebola from '../../components/Svgs/Pokebola';
import PopUp from '../../components/PopUp';

export default function Goals() {
  const [visiblePopUpGift, setVisiblePopUpGift] = useState(false);
  const [visiblePopUpConfig, setVisiblePopUpConfig] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState({});

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

  const gifs = [
    {
      id: 0,
      giftLabel: <BlockGift />,
      gift: <Pokebola />,
      title: 'Parabéns!',
      message: 'Você ganhou uma recompensa',
      addicionalMessage: 'Continue arrecadando para receber mais recompensas!',
      buttonMessage: 'Receber Presente',
    },
    {
      id: 1,
      giftLabel: <FirstGift />,
      title: 'Este presente pode ser seu!',
      message: 'Infelizmente você não alcançou o objetivo desta recompensa',
      addicionalMessage: 'Continue arrecadando para receber uma recompensa!',
      buttonMessage: 'Continuar Arrecadando',
    },
  ];

  return (
    <>
      <ScrollView>
        <Header />
        <Container style={elevationStyle}>
          <User />

          <View style={{ height: 240, justifyContent: 'center' }}>
            <ScrollView horizontal pagingEnabled>
              <View style={{ marginRight: 30 }}>
                <Box color="#fff">
                  <View style={{ flexDirection: 'row' }}>
                    {values.map((item) => (
                      <View
                        key={String(item.id)}
                        style={{ paddingHorizontal: 15 }}
                      >
                        <Goal
                          level={Number(item.value)}
                          active="none"
                          icon={item.category}
                        />
                      </View>
                    ))}
                  </View>
                </Box>
              </View>

              <View style={{ marginRight: 50 }}>
                <Box color="#fff">
                  <View>
                    <TextTitle>Recompensas</TextTitle>
                    <View style={{ flexDirection: 'row' }}>
                      {gifs.map((item) => (
                        <View
                          key={String(item.id)}
                          style={{ paddingHorizontal: 15 }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setPopUpInfo(item);
                              setVisiblePopUpGift(true);
                            }}
                          >
                            {item.giftLabel}
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  </View>
                </Box>
              </View>
            </ScrollView>
          </View>

          <InformationControl
            informationTitleText="Total arrecadado"
            colorTextInfo="#54F078"
            informationText="R$ 8.900,00"
            adicionalInformation="Meta: R$ 10.000,00"
            level={70}
          />

          <View style={{ marginBottom: 30 }} />

          <Box color="#fff">
            <TextTitle>Usabilidade</TextTitle>

            <Button
              style={{ marginBottom: 10 }}
              color="#54F078"
              text="Depositar"
              // onPress={() => nextDog()}
            />

            <Button
              style={{ marginTop: 10 }}
              color="#FA3114"
              text="Retirar"
              onPress={() => setVisiblePopUpConfig(true)}
            />
          </Box>

          <View style={{ marginBottom: 50 }} />

          <Box color="#fff">
            <TextTitle>Configurações</TextTitle>

            <Button
              style={{ marginBottom: 20 }}
              color="#54F078"
              text="Depositar"
              // onPress={() => nextDog()}
            />

            <Button
              color="#F99D1C"
              text="Alterar Meta"
              // onPress={() => nextDog()}
            />

            <Button
              style={{ marginTop: 20 }}
              color="#FA3114"
              text="Excluir Meta"
              // onPress={() => setVisiblePopUp(true)}
            />
          </Box>

          <View style={{ marginBottom: 30 }} />
        </Container>
      </ScrollView>

      {visiblePopUpGift && (
        <PopUp center title={popUpInfo.title}>
          <ReasonTitleText>{popUpInfo.message}</ReasonTitleText>
          {popUpInfo.gift ? popUpInfo.gift : popUpInfo.giftLabel}
          <ReasonTitleText>{popUpInfo.addicionalMessage}</ReasonTitleText>
          <Button
            style={{ marginTop: 20 }}
            color="#54F078"
            text={popUpInfo.buttonMessage}
            onPress={() => setVisiblePopUpGift(false)}
          />
        </PopUp>
      )}

      {visiblePopUpConfig && (
        <PopUp title="Retirar Meta">
          <ReasonTitleText>
            Dá uma olhada antes no que a gente tem pra dizer pra você!
          </ReasonTitleText>
          <ReasonContainer>
            <Unicons.UilFire size={26} color="#F99D1C" />
            <ReasonText>Lembre-se do resultado final!</ReasonText>
          </ReasonContainer>
          <ReasonContainer>
            <Unicons.UilCoronavirus size={26} color="#F99D1C" />
            <ReasonText>Nunca desista dos seus sonhos!</ReasonText>
          </ReasonContainer>
          <ReasonContainer>
            <Unicons.UilRocket size={26} color="#F99D1C" />
            <ReasonText>A gente acredita na sua capacidade!</ReasonText>
          </ReasonContainer>
          <ReasonTitleText>
            Então, quer realmente retirar sua meta?
          </ReasonTitleText>
          <Button
            style={{ marginBottom: 10 }}
            color="#54F078"
            text="Não Retirar"
            onPress={() => setVisiblePopUpConfig(false)}
          />

          <Button
            style={{ marginTop: 10 }}
            color="#FA3114"
            text="Retirar"
            onPress={() => {
              setVisiblePopUpConfig(false);
            }}
          />
        </PopUp>
      )}
    </>
  );
}
