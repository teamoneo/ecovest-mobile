import React, { ReactPropTypes } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import {
  InformationControlContainer,
  InformationTotal,
  InformationTotalText,
  InformationText,
  TotalLine,
  ProgressLine,
} from './styles';

const InformationControl = ({
  informationTitleText,
  colorTextInfo,
  informationText,
  adicionalInformation,
}) => {
  return (
    <InformationControlContainer>
      <InformationTotal>
        <Unicons.UilAnalytics size={18} color="#7E868A" />
        <InformationTotalText>{informationTitleText}</InformationTotalText>
      </InformationTotal>

      <InformationText color={colorTextInfo}>{informationText}</InformationText>

      <TotalLine>
        <ProgressLine color={colorTextInfo} />
      </TotalLine>

      <InformationTotalText style={{ marginTop: 10 }}>
        {adicionalInformation}
      </InformationTotalText>
    </InformationControlContainer>
  );
};

InformationControl.propTypes = {
  informationTitleText: ReactPropTypes.string.isRequired,
  colorTextInfo: ReactPropTypes.boolean.isRequired,
  informationText: ReactPropTypes.string.isRequired,
  adicionalInformation: ReactPropTypes.string.isRequired,
};

export default InformationControl;
