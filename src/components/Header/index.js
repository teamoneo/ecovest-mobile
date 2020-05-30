import React from 'react';

import {
  Svg, Path, G, Defs,
} from 'react-native-svg';

import {
  Container, DivSvg, Circle,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Circle />
      <DivSvg>
        <Svg
          width={360}
          height={296}
          viewBox="0 0 414 296"
          fill="none"
        >
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
