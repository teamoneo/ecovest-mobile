import React from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { InformationControlContainer, InformationTotal, InformationTotalText, InformationText, TotalLine, ProgressLine } from './styles';

export default function InformationControl({ informationTitleText, colorTextInfo, informationText, adicionalInformation }) {
  return(
    <InformationControlContainer>            
    <InformationTotal>
     <Unicons.UilAnalytics size={18} color="#7E868A" />
      <InformationTotalText>{informationTitleText}</InformationTotalText>
    </InformationTotal>

    <InformationText color={colorTextInfo}>{informationText}</InformationText>

    <TotalLine>
      <ProgressLine color={colorTextInfo} />
    </TotalLine>

    <InformationTotalText style={{ marginTop: 10 }} >{adicionalInformation}</InformationTotalText>
  </InformationControlContainer>
  );
}