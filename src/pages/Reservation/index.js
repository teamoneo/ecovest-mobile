import React, { useState, useCallback } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { ScrollView, View } from 'react-native';

import {
  Container,
  elevationStyle,
  TextButtons,
  ReasonTitleText,
  ReasonContainer,
  ReasonText,
} from './styles';

import Header from '../../components/Header';
import User from '../../components/User';
import Box from '../../components/Box';
import DogContainer from '../../components/DogContainer';
import PopUp from '../../components/PopUp';

import InformationControl from '../../components/InformationControl';
import Button from '../../components/Button';

import BabyCheddar from '../../components/Svgs/Dog/BabyCheddar';
import AdultCheddar from '../../components/Svgs/Dog/AdultCheddar';
import SuperCheddar from '../../components/Svgs/Dog/SuperCheddar';
import SadCheddar from '../../components/Svgs/Dog/SadCheddar';

export default function Reservation() {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [visibleDogPopUp, setVisibleDogPopUp] = useState(false);

  const [dogValue, setDogValue] = useState(1);

  const value = [
    {
      id: 0,
      month: 1,
      level: 20,
      dogLevel: 'Bebê',
      image: <SadCheddar />,
    },
    {
      id: 1,
      month: 1,
      level: 20,
      dogLevel: 'Bebê',
      image: <BabyCheddar />,
      popUpText:
        'Cheddar cresceu um pouco, ele ainda está um pouco longe de ser independente, mas já se fortaleceu, e tem grande potencial!',
    },
    {
      id: 2,
      month: 3,
      level: 50,
      dogLevel: 'Adulto',
      image: <AdultCheddar />,
      popUpText:
        'Cheddar se tornou um adulto! Finalmente ele atingiu o potencial dele e agora ele pode viver a sua tranquilamente sem preocupações, e em casos de emergências, pode utilizar suas energias para ajudar seu dono!',
    },
    {
      id: 3,
      month: 6,
      level: 80,
      dogLevel: 'Super',
      image: <SuperCheddar />,
      popUpText:
        'Cheddar é simplesmente um super-cão! Ele é praticamente invencível, e com ele você poderá escapar até dos maiores sufocos!',
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

          <Box style={{ alignItems: 'center' }} color="#D3E9FF">
            <DogContainer
              name="Cheddar"
              birthdate="25/05/2020"
              level={value[dogValue].dogLevel}
            >
              {value[dogValue].image}
            </DogContainer>
          </Box>

          <InformationControl
            informationTitleText="Nível da reserva"
            colorTextInfo="#54F078"
            informationText={
              value[dogValue].month > 1
                ? `${value[dogValue].month} meses`
                : `${value[dogValue].month} mês`
            }
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
              onPress={
                dogValue < 3
                  ? () => {
                      nextDog();
                      setDogPopUp(dogValue);
                      setVisibleDogPopUp(true);
                    }
                  : () => {}
              }
            />

            <Button
              style={{ marginTop: 10 }}
              color="#FA3114"
              text="Retirar"
              onPress={() => setVisiblePopUp(true)}
            />
          </Box>

          <View style={{ marginTop: 40 }} />
        </Container>
      </ScrollView>
      {visiblePopUp && (
        <PopUp title="Retirar Reserva">
          <ReasonTitleText>
            Você não deveria fazer isso a menos que:
          </ReasonTitleText>
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
          <ReasonTitleText>
            Brincadeiras a parte, quer mesmo retirar sua reserva?
          </ReasonTitleText>
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
            onPress={
              dogValue < 1
                ? () => {
                    setVisiblePopUp(false);
                  }
                : () => {
                    previousDog();
                    setVisiblePopUp(false);
                  }
            }
          />
        </PopUp>
      )}
      {visibleDogPopUp && (
        <PopUp title="Cheddar cresceu" center>
          {value[dogValue].image}
          <ReasonTitleText>{value[dogValue].popUpText}</ReasonTitleText>
          <Button
            style={{ marginBottom: 10 }}
            color="#54F078"
            text="Oba!"
            onPress={() => setVisibleDogPopUp(false)}
          />
        </PopUp>
      )}
    </>
  );
}
