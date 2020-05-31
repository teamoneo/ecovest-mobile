import React, { useState, useCallback } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { ScrollView, View } from 'react-native';

import { 
  Container, 
  elevationStyle, 
  TextButtons, 
  Background, 
  PopUpContainer, 
  PopUpTitleText,
  ReasonTitleText,
  ReasonContainer,
  ReasonText
} from './styles';

import Header from '../../components/Header';
import User from '../../components/User';
import Box from '../../components/Box';
import DogContainer from '../../components/DogContainer';

import InformationControl from '../../components/InformationControl';
import Button from '../../components/Button';

import BabyCheddar from '../../components/Svgs/BabyCheddar';
import AdultCheddar from '../../components/Svgs/AdultCheddar';
import SuperCheddar from '../../components/Svgs/SuperCheddar';
import SadCheddar from '../../components/Svgs/SadCheddar';

export default function Reservation() {

  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [dogValue, setDogValue] = useState(1);

  const dog = [ <SadCheddar />, <BabyCheddar />, <AdultCheddar />, <SuperCheddar /> ];

  const value = [
    {
      id: 0,
      month: 1,
      level: 20,
      dogLevel: 'Bebê',
    },
    {
      id: 1,
      month: 1,
      level: 20,
      dogLevel: 'Bebê',
    },
    {
      id: 2,
      month: 3,
      level: 50,
      dogLevel: 'Adulto',
    },
    {
      id: 3,
      month: 6,
      level: 80,
      dogLevel: 'Super',
    },
  ];

  const nextDog = useCallback(() => {
    setDogValue(dogValue + 1);
  }, [dogValue]);

  const previousDog = useCallback(() => {
    setDogValue(dogValue - 1);
  }, [dogValue]);

  return (
    <>
    <ScrollView>
      <Header />

      <Container style={elevationStyle}>
        <User />
        
        <Box color="#D3E9FF">
          <DogContainer name="Cheddar" birthdate="25/05/2020" level={value[dogValue].dogLevel}>
            { dog[value[dogValue].id] }
          </DogContainer>
        </Box>

        <InformationControl 
          informationTitleText="Nível da reserva" 
          colorTextInfo="#54F078"
          informationText={ value[dogValue].month > 1 ? `${value[dogValue].month} meses` : `${value[dogValue].month} mês`}
          adicionalInformation="Progresso para o próximo nível"
          level={value[dogValue].level}
        />

          <Button
            style={{ marginVertical: 40 }}
            color="#F58220"
            text="Total: R$ ----- "
            onClick={() => {}}
          >
            <Unicons.UilEyeSlash size={24} color="#F58220" />
          </Button>

        <Box color="#fff">
            <TextButtons>Usabilidade</TextButtons>

            <Button
              style={{ marginBottom: 10 }}
              color="#54F078"
              text="Depositar"
              onPress={() => nextDog()}
            />

            <Button
              style={{ marginTop: 10 }}
              color="#FA3114"
              text="Retirar"
              onPress={() => setVisiblePopUp(true)}
            />
        </Box>

        <View style={{ marginTop: 40 }}></View>

      </Container>
    </ScrollView> 
      {  visiblePopUp && (
        <Background>
            <PopUpContainer>
              <PopUpTitleText>Retirar Reserva</PopUpTitleText>
                <ReasonTitleText>Você não deveria fazer isso a menos que:</ReasonTitleText>
                <ReasonContainer>
                   <Unicons.UilFire size={26} color="#F99D1C" />
                   <ReasonText>Sua casa esteja pegando fogo</ReasonText>
                </ReasonContainer>
                <ReasonContainer>
                   <Unicons.UilCoronavirus size={26} color="#F99D1C" />
                   <ReasonText>Estejamos enfrentando uma pandemia</ReasonText>
                </ReasonContainer>
                <ReasonContainer>
                   <Unicons.UilRocket size={26} color="#F99D1C" />
                   <ReasonText>O mundo foi invadido por alienígenas</ReasonText>
                </ReasonContainer>
                <ReasonTitleText>Brincadeiras a parte, quer mesmo retirar sua reserva?</ReasonTitleText>
                <Button
                  style={{ marginBottom: 10 }}
                  color="#54F078"
                  text="Não Retirar"
                  onPress={() => setVisiblePopUp(false)}
                />

                <Button
                  style={{ marginTop: 10 }}
                  color="#FA3114"
                  text="Retirar"
                  onPress={() => { 
                    previousDog(),
                    setVisiblePopUp(false)
                  }}
                />
            </PopUpContainer>
        </Background>
      )}
    </>
  );
}
