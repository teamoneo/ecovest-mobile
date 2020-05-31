import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`  
`;

export const DivSvg = styled.View`
  position: absolute;
  align-self: center;
`;

export const Circle = styled.View`
  height: 435px;
  width: 742px;

  align-self: center;
  position: absolute;

  background-color: #F99D1C;

  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.25);
`;

export const elevationStyle = {elevation: 5};