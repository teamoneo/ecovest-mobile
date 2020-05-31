import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { Container, DivSvg, Circle, elevationStyle } from './styles';

export default function Header() {
  return (
    <Container>
      <Circle
        style={{
          elevationStyle,
        }}
      />
      <DivSvg>
        <Svg width={414} height={282} viewBox="0 0 414 296" fill="none">
          <Path
            d="M484-269c0 277.44-85 564-276.5 564S-69 8.44-69-269h553z"
            fill="#fff"
            fillOpacity={0.2}
            stroke="#fff"
          />
        </Svg>
      </DivSvg>
    </Container>
  );
}

/**
 *
 */
