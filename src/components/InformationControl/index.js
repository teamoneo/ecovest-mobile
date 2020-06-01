import React, { ReactPropTypes } from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import {Text} from 'react-native';

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
  level,
  margin
}) => {
  return (
    <InformationControlContainer margin={margin}>
      <InformationTotal>
        <Unicons.UilAnalytics size={18} color="#7E868A" />
        <InformationTotalText>{informationTitleText}</InformationTotalText>
      </InformationTotal>

      <InformationText color={colorTextInfo}>{informationText}</InformationText>

      <TotalLine>
        <ProgressLine color={colorTextInfo} level={level} />
      </TotalLine>

      <InformationTotalText style={{ marginTop: 10 }}>
        <Unicons.UilBag size={15} color="#7E868A" />
        {adicionalInformation}
        <Unicons.UilPen size={15} color="#7E868A" />
      </InformationTotalText>
    </InformationControlContainer>
  );
};

// InformationControl.propTypes = {
//   informationTitleText: ReactPropTypes.string.isRequired,
//   colorTextInfo: ReactPropTypes.string.isRequired,
//   informationText: ReactPropTypes.string.isRequired,
//   adicionalInformation: ReactPropTypes.string.isRequired,
//   level: ReactPropTypes.number.isRequired,
// };

export default InformationControl;
