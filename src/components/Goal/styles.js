import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerBackground = styled(LinearGradient).attrs({
  colors: ['rgba(255,255,255,0.85)','#E6E7E8', '#fff'],
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 165px;
  width: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: black;
`;

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PillContainer = styled.View`
  display:flex;
  width: 20px;
  height: 93px;
  border-radius: 50px;
  border: 1px solid #7E868A;
  justify-content: flex-end;
`;

export const Level = styled(LinearGradient).attrs({
  colors: ['#FFDF4F', '#F99D1C'],
})`
  width: 100%;
  height: ${props => `${props.level}%` };
  border-radius: 50px;
`;

export const Icon = styled.View`
  padding: 10px 0;
`;
