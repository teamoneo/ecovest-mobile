import React from 'react';

import { DogInfoContainer, DogInfo, DogName, DogAddicionalInfo, DogBirthdate, DogBirthdateTitle, DogBirthdateInfo, DogLevel, DogLevelTitle, DogLevelInfo  } from './styles';

export default function DogContainer({ name, birthdate, level, children }) {
  return(
    <DogInfoContainer>
      {children}
      <DogInfo>
        <DogName>{name}</DogName>
        <DogAddicionalInfo>
          <DogBirthdate>
            <DogBirthdateTitle>Nascimento</DogBirthdateTitle>
            <DogBirthdateInfo>{birthdate}</DogBirthdateInfo>
          </DogBirthdate>
          <DogLevel>
              <DogLevelTitle>Nível</DogLevelTitle>
              <DogLevelInfo>{level}</DogLevelInfo>
          </DogLevel>
        </DogAddicionalInfo>
      </DogInfo>
    </DogInfoContainer>

  );
}
