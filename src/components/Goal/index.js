import React from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { Container, ContainerBackground, PillContainer, Level, Icon } from './styles';

export default function Goal({ level, active, icon }) {
  return (
    <>
      { active === "true" ? (
        <ContainerBackground>
        <PillContainer>
          <Level level={level} />
        </PillContainer>
        <Icon>
          <Unicons.UilAnalytics size={32} color="#F99D1C" />
        </Icon>
      </ContainerBackground>

      ) : (
      <Container>
        <PillContainer>
          <Level level={level} />
        </PillContainer>
        <Icon>
          {
            icon === 'Casa' ? <Unicons.UilHome size={32} color="#F99D1C" /> : icon === 'Carro' ? <Unicons.UilCarSideview size={32} color="#F99D1C" /> : icon === 'Compras' ? <Unicons.UilDesktop size={32} color="#F99D1C" /> : <Unicons.UilGraduationCap size={32} color="#F99D1C" />
          }
        </Icon>
      </Container>
      )
    }
  </>);
}
